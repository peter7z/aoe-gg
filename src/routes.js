import React from 'react'

import routesPaths from 'constants/routesPaths'
import HomePage from 'pages/HomePage'
import PlayerPage from 'pages/PlayerPage'
import LoginPage from 'pages/LoginPage'
import SignUpPage from 'pages/SignUpPage'
import NotFoundPage from 'pages/NotFoundPage'

const routes = [
  {
    path: routesPaths.index,
    component: <HomePage />,
    exact: true,
  },
  {
    path: routesPaths.player,
    component: <PlayerPage />,
    exact: true,
  },
  {
    path: routesPaths.login,
    component: <LoginPage />,
  },
  {
    path: routesPaths.signUp,
    component: <SignUpPage />,
  },
  {
    component: <NotFoundPage />,
  },
]

export default routes
