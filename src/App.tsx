import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home';
import DetailPage from './pages/detail';
import Footer from './components/Footer/Footer';
import Season from './pages/season';
import { Favorite } from './pages/favorite';
import Navbar from './components/Navbar/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/season",
      element: <Season />,
    },
    {
      path: "/detail/:mal_id",
      element: <DetailPage />,
    },
    {
      path: "/favorite",
      element: <Favorite />,
    },
  ], { basename: import.meta.env.DEV ? '/' : '/animelisttest/' });

  return (
    <div className='bg-[url("/images/Webbackground.jpg")] min-h-screen bg-cover bg-fixed'>

      <Navbar />


      <RouterProvider router={router} />


      <Footer />
    </div>
  );
}

export default App;
