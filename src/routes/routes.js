import { createBrowserRouter } from 'react-router'

import Layout from '../components/Layouts/Layout.jsx'
import { Home } from '../pages/Home/Home.jsx'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage.jsx'

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },


])