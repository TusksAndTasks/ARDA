import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Summary from './CabinetSummary';
import ProfileSettings from './CabinetProfileSettings/CabinetProfileSettings';
import Webinars from './CabinetWebinars';
import ResourceMap from './CabinetResourceMap/CabinetResourceMap';
import EventCalendar from './CabinetEventCalendar/CabinetEventCalendar';
import LeadExchange from './CabinetLeadExchange';
import AdditionalInfo from './CabinetAdditionalInfo';
import CabinetNavigation from './CabinetNavigation';
import CabinetStandards from './CabinetStandards';

function PersonalCabinet() {
  return (
    <div className="vertical-container lg:vertical-container-lg sm:vertical-container-sm custom-scrollbar-item flex h-full overflow-y-auto overflow-x-hidden sm:overflow-y-auto">
      <CabinetNavigation />
      <Routes>
        <Route path="/" element={<Summary />}></Route>
        <Route path="redact" element={<ProfileSettings />}></Route>
        <Route path="standards" element={<CabinetStandards />}></Route>
        <Route path="webinars" element={<Webinars />}></Route>
        <Route path="resources" element={<ResourceMap />}></Route>
        <Route path="calendar" element={<EventCalendar />}></Route>
        <Route path="exchange" element={<LeadExchange />}></Route>
        <Route path="additional" element={<AdditionalInfo />}></Route>
      </Routes>
    </div>
  );
}

export default React.memo(PersonalCabinet);
