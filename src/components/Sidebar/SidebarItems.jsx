import Home from "./Home"
import Notifications from "./Notifications";
import CreatePost from "./CreatePost";
import ProfileLink from "./ProfileLink";
import Search from "./Search";

function SidebarItems(props) {
  return <>
    <Home/>
    <Search/>
    <Notifications/>
    <CreatePost/>
    <ProfileLink/>
  </>
}

export default SidebarItems;
