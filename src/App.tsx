import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { EventCreatePage } from './pages/EventCreatePage';
import { EventDetailPage } from './pages/EventDetailPage';
import { EventJoinPage } from './pages/EventJoinPage';
import { EventListPage } from './pages/EventListPage';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/events" element={<EventListPage />} />
        <Route path="/events/create" element={<EventCreatePage />} />
        <Route path="/events/join" element={<EventJoinPage />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="*" element={<Navigate to="/events" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
