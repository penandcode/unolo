import { useState, useEffect, useRef } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ currentPath }) => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const itemsArr = [
        { label: "Dashboard", to: "/dashboard" },
        { label: "Attendance", to: "/attendance" },
        { label: "Leaves", to: "/leaves" },
        { label: "Organization", to: "/organization" },
        { label: "Tasks", to: "/tasks" },
        { label: "Beat", to: "/beat" },
        { label: "Targets", to: "/targets" },
        { label: "Forms", to: "/forms" },
        { label: "Order", to: "/order" },
        { label: "Expenses", to: "/expenses" },
        { label: "Clients & Sites", to: "/clients" },
        { label: "Reports", to: "/reports" },
    ];

    return (
        <>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2" 
                style={{ color: '#3266fc'}}
            >
                <span style={{ transform: 'rotate(90deg)' }}>➔</span>
            </button>

            <aside ref={sidebarRef} className={`group/sidebar flex flex-col lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 bg-white border-r border-r-dashed border-r-neutral-200 sidenav fixed z-40 inset-0 ${isOpen ? 'block' : 'hidden'}`} id="sidenav-main">
                <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
                    <a className="transition-colors duration-200 ease-in-out" href="https://www.unolo.com">
                        <img alt="Logo" src="https://unolo.com/_next/image?url=https%3A%2F%2Fd3fc4hzuyam4jx.cloudfront.net%2Fpublic%2Fimg%2Flogos%2Funolo_logo.png%3Fformat%3Dauto&w=256&q=75" className="inline h-8 w-auto" />
                    </a>
                </div>
                <div className="p-3">
                    {itemsArr.map((item, key) => (
                        <SidebarItem
                            key={key}
                            label={item.label}
                            to={item.to}
                            isActive={currentPath === item.to}
                        />
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
