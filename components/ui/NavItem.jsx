// components/ui/NavItem.jsx
import Link from 'next/link';

const NavItem = ({ href, text, isActive }) => {
  return (
    <li>
      <Link href={href} className={`group flex items-center py-3 ${isActive ? "animate-pulse" : ""}`}>
        <span className="nav-indicator mr-4 h-4 w-4 bg-slate-600 rounded-full transition-all group-hover:w-6 group-hover:h-6 group-hover:bg-blue-500 group-focus-visible:w-4 group-focus-visible:h-4 group-focus-visible:bg-blue-500 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-500 group-focus-visible:text-blue-500">
          {text}
        </span>
      </Link>
    </li>
  );
};


export default NavItem;
