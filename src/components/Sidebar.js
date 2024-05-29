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
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <LiaYoutubeSquare size="24px" />,
        title: "You"
    },
    {
        icons: <TfiDownload size="24px" />,
        title: "Download"
    },
]

const Sidebar = () => { 
    const open=useSelector((store)=>store.app.open);
    return (
        <div className={`relative left-0 ${open? "w-[12%]" : "w-[6%]"} p-5 mx-3 h-[calc(100vh-4.625rem)] bg-white overflow-x-hidden`}>
            {
                sidebarItem.map((item, index) => {
                    return (
                        <div key={index} className='flex my-16'>
                            {item.icons}
                            <p className={`ml-5 ${open ? "": 'hidden'}`}>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar