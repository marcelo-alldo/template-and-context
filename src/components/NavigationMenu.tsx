import navigation from '../config/navigation';
import NavigationMenuItem from './NavigationMenuItem';

function NavigationMenu() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#222',
        boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
      }}
    >
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
        <img src="/logo/vite.svg" width={40} height={40} alt="logo" />
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        {navigation.map(item => (
          <NavigationMenuItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default NavigationMenu;
