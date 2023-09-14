import {Route, Routes} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './components/Layout/Layout';

import './App.css';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" exact       element={<AllMeetupsPage />} />
          <Route path="/new-meetup"   element={<NewMeetupsPage />} />
          <Route path="/favorites"    element={<FavoritesPage />} />
        </Routes>
      </Layout>
  );
}

export default App;
