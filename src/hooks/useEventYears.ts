import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/store';

export default function useEventYears() {
  const { eventYearList, eventFilters } = useSelector((state: GlobalState) => state.eventYears);
  const filteredYears = [] as typeof eventYearList;
  eventYearList.forEach((year, index) => {
    filteredYears.push({ year: year.year, months: [] });
    year.months.forEach((month) => {
      filteredYears[index].months.push({ title: month.title, events: month.events });
    });
  });

  for (const filterName in eventFilters) {
    if (Array.isArray(eventFilters[filterName as keyof typeof eventFilters])) {
      filteredYears.forEach((year, yearIndex) => {
        year.months.forEach((month, monthIndex) => {
          filteredYears[yearIndex].months[monthIndex].events = month.events.filter((event) => {
            let isCorrect = false;
            (event[filterName as keyof typeof eventFilters] as Array<string>).forEach((entry) => {
              isCorrect =
                (eventFilters[filterName as keyof typeof eventFilters] as Array<string>).length ===
                0
                  ? true
                  : (
                      eventFilters[filterName as keyof typeof eventFilters] as Array<string>
                    ).includes(entry);
            });
            return isCorrect;
          });
        });
      });
      continue;
    }
    filteredYears.forEach((year, yearIndex) => {
      year.months.forEach((month, monthIndex) => {
        filteredYears[yearIndex].months[monthIndex].events = month.events.filter((event) =>
          event[filterName as keyof typeof eventFilters]!.includes(
            eventFilters[filterName as keyof typeof eventFilters] as string
          )
        );
      });
    });
  }

  // filteredYears.forEach((year) => {
  //   year.months = year.months.filter((month) => month.events.length > 0);
  // });
  //
  // return filteredYears.filter((year) => year.months.length > 0);
  return filteredYears;
}
