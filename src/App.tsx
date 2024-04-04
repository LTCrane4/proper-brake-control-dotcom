import * as React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar';
import { Box } from '@mui/material';

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
      <Box sx={{ placeItems: 'center' }}>
        <RouterProvider router={router} />
      </Box>
    </React.Suspense>
  </>
  )
}

export default App
