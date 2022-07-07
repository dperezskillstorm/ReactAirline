import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from 'react-icons/md'; 
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Flights',
        path: '/flights',
        icon: <MdIcons.MdFlight/>,
        cName: 'nav-text'
    },
    {
        title: 'Passengers',
        path: '/passengers',
        icon: <BsIcons.BsFillPeopleFill/>,
        cName: 'nav-text'
    },

    {
        title: 'Resources',
        path: '/resources',
        icon: <FaIcons.FaPaperclip/>,
        cName: 'nav-text'
    }
]