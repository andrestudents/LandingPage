import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Ubah import di sini
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/regrister.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Halaman utama
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

// Render aplikasi
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
