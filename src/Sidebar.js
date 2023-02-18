import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
        {/* twitter icon */}
        <TwitterIcon className="sidebar__twitterIcon"/>

        {/* sidebar options */}
        < SidebarOptions Icon={HomeIcon} text="Home" />
        < SidebarOptions Icon={SearchIcon} text="Search"/>
        < SidebarOptions Icon={NotificationsNoneIcon} text="Notifications"/>
        < SidebarOptions Icon={MailOutlineIcon} text="Message"/>
        < SidebarOptions Icon={BookmarkBorderIcon} text="Bookmark"/>
        < SidebarOptions Icon={ListAltIcon} text="Lists"/>
        < SidebarOptions Icon={PermIdentityIcon} text="Profile"/>
        < SidebarOptions Icon={MoreHorizIcon} text="More"/>
        

         { /*button => tweet */ }
        <Button className="sidebar__tweet" fullWidth > Tweet </Button>
        
    </div>
  )
}

export default Sidebar;