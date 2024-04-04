import * as React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar';

function App() {
  const HomePage = React.lazy(() => import('./pages/Home'));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/test",
      element: <div>You found the secret page!</div>,
    },
  ]);

  return (<>
    <NavBar title="Proper Brake Control" />
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  </>
  )
}

export default App
