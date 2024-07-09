import GlobalStyled from './config/GlobalStyled';
import DefaultTheme from './config/theme/DefaultTheme';
import UserProvider from './contexts/UserContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <UserProvider>
      <DefaultTheme>
        <AppRoutes />
        <GlobalStyled />
      </DefaultTheme>
    </UserProvider>
  );
}

export default App;
