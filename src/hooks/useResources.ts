import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/store';
import { IResource } from '../redux/slices/ResourecesSlice';

export default function useResources() {
  // eslint-disable-next-line prefer-const
  let { resourceList, resourceFilters } = useSelector((state: GlobalState) => state.resources);
  let filteredResources = [] as IResource[];
  resourceList.forEach((resource) => filteredResources.push(resource));

  for (const filterName in resourceFilters) {
    if (Array.isArray(resourceFilters[filterName as keyof typeof resourceFilters])) {
      filteredResources = filteredResources.filter((resource) => {
        let isCorrect = false;
        (resource[filterName as keyof typeof resourceFilters] as Array<string>).forEach((entry) => {
          isCorrect = isCorrect
            ? isCorrect
            : (resourceFilters[filterName as keyof typeof resourceFilters] as Array<string>)
                .length === 0
            ? true
            : (
                resourceFilters[filterName as keyof typeof resourceFilters] as Array<string>
              ).includes(entry);
        });
        return isCorrect;
      });
      continue;
    }
    filteredResources = filteredResources.filter((resource) => {
      return resourceFilters[filterName as keyof typeof resourceFilters]
        ? resource[filterName as keyof typeof resourceFilters] ===
            resourceFilters[filterName as keyof typeof resourceFilters]
        : true;
    });
  }

  // if (resourceList.length > 1) {
  //   resourceList.sort((leftResource, rightResource) =>
  //     rightResource!.membership == leftResource!.membership ? 0 : rightResource!.membership ? -1 : 1
  //   );
  // }

  return filteredResources;
}
