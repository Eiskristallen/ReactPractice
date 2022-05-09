// Sidebar icons
import{
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt
} from '@iconscout/react-unicons'

/**
 * Sidebar data(in order to make sidebar
 * responsive rather than hard code)
 * if i want make change on heading or icon, I 
 * only need to come here instead edit the component
 */
export const SidebarData=[
  {icon:UilEstate,
  heading:"Dashboard"},
  {icon:UilClipboardAlt,
  heading:"Orders"},
  {icon:UilUsersAlt,
  heading:"Customers"},
  {icon:UilPackage,
  heading:"Products"},
  {icon:UilChart,
  heading:"Analytics"}
];