import { NavigationType } from '../config/navigation';
import NavigationMenuItemStyled from './NavigationMenuItemStyled';

interface NavigationMenuItemProps {
  item: NavigationType;
}

function NavigationMenuItem({ item }: NavigationMenuItemProps) {
  return <NavigationMenuItemStyled>{item.label}</NavigationMenuItemStyled>;
}

export default NavigationMenuItem;
