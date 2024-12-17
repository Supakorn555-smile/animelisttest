import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home';
import DetailPage from './pages/detail';
import Season from './pages/season';
import { Favorite } from './pages/favorite';
import Root from './pages/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
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
      ]
    }
  ], { basename: import.meta.env.DEV ? '/' : '/animelisttest/' });

  return (
    <div className='bg-[url("/images/Webbackground.jpg")] min-h-screen bg-cover bg-fixed'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
