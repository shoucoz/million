import 'App.scss';
import AppRoutes from 'AppRoutes';
import { HashRouter } from 'react-router-dom';
import NotificationOrientation from 'shared/components/OrientationNotification';
import GameContextProvider from 'context';

function App() {
  return (
    <div className="App">
      <NotificationOrientation>
        <HashRouter>
            <GameContextProvider>
              <AppRoutes />
            </GameContextProvider>
        </HashRouter>
      </NotificationOrientation>
    </div>
  );
}

export default App;