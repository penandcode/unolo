import { Link } from "react-router-dom";

const SidebarItem = ({ label, to, isActive }) => {
    return <span className={`select-none flex items-center px-3 py-2 cursor-pointer my-[.4rem] rounded-[.45rem] ${isActive ? 'bg-[#fd65fd]' : 'hover:bg-gray-50'}`}>
        <Link to={to} className={`flex items-center flex-grow text-[1.15rem] ${isActive ? 'text-white' : 'dark:text-neutral-400/75 text-stone-500 hover:text-dark'}`}>{label}</Link>
    </span>
}


export default SidebarItem;
