import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import ProtectedRoute from './Components/ProtectedRoutes';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import BlogPage from './Components/BlogPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import Footer from './Components/Footer';
import Error from './Components/Error';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blogs",
        element: (<ProtectedRoute><BlogPage /></ProtectedRoute>),
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/signup",
        element: <RegisterPage />
      }
    ],
    errorElement: <Error />,
  },
]);

export default App;
export { appRouter };
