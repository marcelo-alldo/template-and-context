import { ReactNode } from 'react';
import AppStyled from '../../components/AppStyled';
import FooterApp from '../../components/FooterApp';
import NavigationMenu from '../../components/NavigationMenu';

interface DefaultLayoutProps {
  children: ReactNode;
  config?: {
    navigation: boolean;
    footer: boolean;
  };
}

function DefaultLayout({ children, config }: DefaultLayoutProps) {
  return (
    <AppStyled>
      {config?.navigation !== false && <NavigationMenu />}

      {children}

      {config?.footer !== false && <FooterApp />}
    </AppStyled>
  );
}

export default DefaultLayout;
