import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/store';

export default function useResources() {
  // eslint-disable-next-line prefer-const
  let { resourceList, resourceFilters } = useSelector((state: GlobalState) => state.resources);

  for (const resourceKey in resourceFilters) {
    if (Array.isArray(resourceFilters[resourceKey as keyof typeof resourceFilters])) {
      (resourceFilters[resourceKey as keyof typeof resourceFilters] as Array<string>).forEach(
        (filterElem) => {
          resourceList = resourceList.filter((resource) =>
            (resource[resourceKey as keyof typeof resourceFilters] as Array<string>).includes(
              filterElem
            )
          );
        }
      );
      continue;
    }
    resourceList = resourceList.filter((resource) =>
      resourceFilters[resourceKey as keyof typeof resourceFilters]
        ? resource[resourceKey as keyof typeof resourceFilters] ===
          resourceFilters[resourceKey as keyof typeof resourceFilters]
        : true
    );
  }

  // if (resourceList.length > 1) {
  //   resourceList.sort((leftResource, rightResource) =>
  //     rightResource!.membership == leftResource!.membership ? 0 : rightResource!.membership ? -1 : 1
  //   );
  // }

  return resourceList;
}
