import React from 'react';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LiaYoutubeSquare } from "react-icons/lia";
import { TfiDownload } from "react-icons/tfi";
import { useSelector } from 'react-redux';

const sidebarItem = [
    {
        icons: <GoHomeFill size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Shorts"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscriptions"
    },
    {
        icons: <LiaYoutubeSquare size="24px" />,
        title: "Library"
    },
    {
        icons: <TfiDownload size="24px" />,
        title: "Downloads"
    },
]

const Sidebar = () => { 
    const open = useSelector((store) => store.app.open);
    
    return (
        <div className={`relative left-0 ${open ? "w-[200px]" : "w-[80px]"} transition-width duration-300 p-5 h-[calc(100vh-4.625rem)] bg-white overflow-x-hidden shadow-md`}>
            {
                sidebarItem.map((item, index) => (
                    <div key={index} className='flex items-center my-6 cursor-pointer hover:bg-gray-200 p-2 rounded-lg'>
                        {item.icons}
                        <p className={`ml-5 ${open ? "block" : 'hidden'} transition-opacity duration-300`}>{item.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Sidebar;
