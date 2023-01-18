import { useRoutes } from 'react-router-dom';
import Home from 'pages/Home';
import Game from 'pages/Game';
import Over from 'pages/Over';
import { HOME_URL, GAME_URL, OVER_URL, ERROR_URL } from 'constants/routes';

function AppRoutes() {
  const routes = useRoutes(
    [
      { path: HOME_URL, element: <Home/> },
      { path: GAME_URL, element: <Game/> },
      { path: OVER_URL, element: <Over/> },
      { path: ERROR_URL, element: <h1>Page not found 404</h1> }
    ]
  )

  return routes;
}

export default AppRoutes;