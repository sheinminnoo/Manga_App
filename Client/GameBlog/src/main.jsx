import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import GameForm from './pages/GameForm.jsx';
import LoginForm from './pages/LoginForm.jsx';
import RegisterForm from './pages/RegisterForm.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import GameDetail from './pages/GameDetail.jsx';
import MangaDetail from './pages/MangaDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/services",
        element : <Services/>
      },
      {
        path : '/mangas/:id',
        element : <MangaDetail/>

      },
      {
        path : "/gameblogs/createblog",
        element : <GameForm/>
      },
      {
        path : "/login",
        element : <LoginForm/>
      },
      {
        path : "/register",
        element : <RegisterForm/>
      },
      {
        path : "/gameBlogs/:id",
        element:<GameDetail/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>

);