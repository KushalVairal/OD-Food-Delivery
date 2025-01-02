// assets
// import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import NotificationsIcon from '@mui/icons-material/Notifications';
// constant
const icons = {
  RestaurantIcon,
  RoomServiceIcon,
  NotificationsIcon
  // IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'New Orders',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.RestaurantIcon,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Order History',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.RoomServiceIcon,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Notifications',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.NotificationsIcon,
      breadcrumbs: false
    }
  ]
};

export default utilities;
