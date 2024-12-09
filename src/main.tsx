import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './app.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Company from './pages/Company.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import Services from './pages/Services.tsx';
import Contacts from './pages/Contacts.tsx';
import Blog from './pages/Blog.tsx';
import Speakup from './pages/Speakup.tsx'


const router = createBrowserRouter([{
  path: '/', element: <App/>,
  children:[{path: '/company', element: <Company/>}, {path: '/services', element: <Services/>}, {path: '/signup', element: <Signup/>}, {path: '/speakup', element: <Speakup/>}, {path: '/contacts', element: <Contacts/>}, {path: '/blog', element: <Blog/>}, {path: '/login', element: <Login/>}]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)
