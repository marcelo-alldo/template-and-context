import GlobalStyled from './config/GlobalStyled';
import DefaultTheme from './config/theme/DefaultTheme';
import ContactsProvider from './contexts/ContactsContext';
import UserProvider from './contexts/UserContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <UserProvider>
      <ContactsProvider>
        <DefaultTheme>
          <AppRoutes />
          <GlobalStyled />
        </DefaultTheme>
      </ContactsProvider>
    </UserProvider>
  );
}

export default App;
