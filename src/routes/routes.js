import { createBrowserRouter } from 'react-router'

import Layout from '../components/layouts/Layout.jsx'
import { HomePage } from '../pages/homePage/HomePage.jsx'
import { LoginPage } from '../pages/loginPage/LoginPage.jsx'
import { NotFoundPage } from '../pages/notFoundPage/NotFoundPage.jsx'
import { RecipePage } from '../pages/recipePage/RecipePage.jsx'


export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      { path: "recipe/:recipeId", Component: RecipePage }
    ],
  },
  { path: "/login", Component: LoginPage }
])