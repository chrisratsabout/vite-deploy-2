import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { 
  BrowserRouter,
  createBrowserRouter, 
  RouterProvider 
} from "react-router-dom"
import About from './routes/about'

const router = createBrowserRouter([
  {
    path: "/vite-deploy-2",
    element: <App />,
  },
  {
    path: "/vite-deploy-2/about/",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
