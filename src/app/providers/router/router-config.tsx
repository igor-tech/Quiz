import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '@/app/providers/router/routes'

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
    path: '/',
  },
  ...publicRoutes,
])

export function Router() {
  return <RouterProvider router={router} />
}
