import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { 
  createBrowserRouter, 
  RouterProvider 
} from "react-router-dom"
import About from './routes/about'
import { UserProvider } from './context/user-context.tsx'

const router = createBrowserRouter([
  {
    path: "/vite-deploy-2",
    element: <UserProvider><App /></UserProvider>,
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
