import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LandPage from './pages/LandPage';
import { AuthContextProvider } from './store/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id:'root',
    children: [
      {index: true, element: <Signup />}, // TODO: colocar rota correta
      {path: '/login', element: <Login />},
      {path: '/Dashboard', element: <Dashboard />},
      {path: '/LandPage', element: <LandPage />},
      {path: '/Signup', element: <Signup />},
    ]
  }
]);

function App() {

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App
