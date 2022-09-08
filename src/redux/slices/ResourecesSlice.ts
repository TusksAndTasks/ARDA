import resourcesData from '../../data/CabinetResourceMap/ResourceMap.json';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IResource {
  name: string;
  link?: string;
  membership?: boolean;
  isBroker?: boolean;
  accredited?: boolean;
  RusProfile?: string;
  city: Array<string>;
  contacts?: string;
  partnershipFormat: Array<string>;
  employeeAmount: number;
  techStack: Array<string>;
  services: Array<string>;
  servicesCommentary?: string;
  expertise: Array<string>;
  expertiseCommentary?: string;
  markets: Array<string>;
  marketsCommentary?: string;
  requestShowcase?: string;
  showcaseCommentary?: string;
  benchMap?: string;
  benchMapCommentary?: string;
  content?: string;
  groundwork?: string;
  sort?: number;
  isActive?: boolean;
}

interface IResourceFilters {
  membership?: boolean;
  isBroker?: boolean;
  accredited?: boolean;
  city?: Array<string>;
  partnershipFormat?: Array<string>;
  techStack?: Array<string>;
  services?: Array<string>;
  expertise?: Array<string>;
  markets?: Array<string>;
}

const initialState: { resourceList: IResource[]; resourceFilters: IResourceFilters } = {
  resourceList: resourcesData.resources as unknown as IResource[],
  resourceFilters: {},
};

const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    updateResourceList: (state, action: PayloadAction<IResource[]>) => {
      state.resourceList = action.payload;
    },
    updateResourceFilters: (state, action: PayloadAction<IResourceFilters>) => {
      state.resourceFilters = action.payload;
    },
  },
});

export const resourcesReducer = resourcesSlice.reducer;
export const { updateResourceList, updateResourceFilters } = resourcesSlice.actions;
