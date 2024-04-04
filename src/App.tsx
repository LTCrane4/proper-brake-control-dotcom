import * as React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import HomePage from './pages/Home';

function App() {
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

  return (
    <React.StrictMode>
      <h1>Proper Brake Control</h1>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
