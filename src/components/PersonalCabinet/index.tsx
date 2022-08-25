import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Summary from './Summary';
import ProfileSettings from './ProfileSettings';
import StandardsList from './StandardsList';
import Webinars from './Webinars';
import ResourceMap from './ResourceMap';
import EventCalendar from './EventCalendar';
import LeadExchange from './LeadExchange';
import AdditionalInfo from './AdditionalInfo';

function PersonalCabinet() {
  return (
    <>
      <div className="flex justify-between">
        <Link to="">Оперативная информация</Link>
        <Link to="redact">Изменить профиль</Link>
        <Link to="standards">Станадрты</Link>
        <Link to="webinars">Вебинары</Link>
        <Link to="resources">Ресурсная карта</Link>
        <Link to="calendar">Календарь</Link>
        <Link to="exchange">Обмен лидами</Link>
        <Link to="additional">Дополнительная информация</Link>
      </div>
      <Routes>
        <Route path="/" element={<Summary />}></Route>
        <Route path="redact" element={<ProfileSettings />}></Route>
        <Route path="standards" element={<StandardsList />}></Route>
        <Route path="webinars" element={<Webinars />}></Route>
        <Route path="resources" element={<ResourceMap />}></Route>
        <Route path="calendar" element={<EventCalendar />}></Route>
        <Route path="exchange" element={<LeadExchange />}></Route>
        <Route path="additional" element={<AdditionalInfo />}></Route>
      </Routes>
    </>
  );
}

export default React.memo(PersonalCabinet);
