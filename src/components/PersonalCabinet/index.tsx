import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Summary from './Summary';
import ProfileSettings from './ProfileSettings/ProfileSettings';
import Webinars from './Webinars';
import ResourceMap from './ResourceMap';
import EventCalendar from './EventCalendar';
import LeadExchange from './LeadExchange';
import AdditionalInfo from './AdditionalInfo';
import CabinetNavigation from './CabinetNavigation';
import CabinetStandards from './CabinetStandards';

function PersonalCabinet() {
  return (
    <div className="flex">
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
