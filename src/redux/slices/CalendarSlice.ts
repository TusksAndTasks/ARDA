import calendarData from '../../data/CabinetEventCalendar/EventCalendar.json';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IEvent {
  name: string;
  type: Array<string>;
  startDate: string;
  endDate: string;
  city?: Array<string>;
  link?: string;
  description?: string;
  transcript?: string;
  auditory?: Array<string>;
  sort?: number;
  isActive?: boolean;
}

export interface IEventYear {
  year: string;
  months: Array<{
    title: string;
    events: Array<IEvent>;
  }>;
}

interface IEventsFilters {
  type?: Array<string>;
  startDate?: string;
  endDate?: string;
  city?: Array<string>;
  auditory?: Array<string>;
}

const initialState: { eventYearList: IEventYear[]; eventFilters: IEventsFilters } = {
  eventYearList: calendarData as unknown as IEventYear[],
  eventFilters: {},
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    updateEventYearList: (state, action: PayloadAction<IEventYear[]>) => {
      state.eventYearList = action.payload;
    },
    updateEventFilters: (state, action: PayloadAction<IEventsFilters>) => {
      state.eventFilters = action.payload;
    },
  },
});

export const eventsReducer = eventsSlice.reducer;
export const { updateEventFilters } = eventsSlice.actions;
