'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolderOpen,
  faAddressCard,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faHome,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { icon: faHome, label: 'Home', route: '/' },
  { icon: faFolderOpen, label: 'Projects', route: '/projects' },
  { icon: faAddressCard, label: 'Experience', route: '/experience' },
  { icon: faWrench, label: 'Skills', route: '/skills' },
  { icon: faPenToSquare, label: 'Thoughts', route: '/blogs' },
];

export default function FloatingNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-neutral-900/80 backdrop-blur-md px-6 py-3 rounded-2xl flex gap-6 z-30 shadow-lg">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="relative group flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`absolute top-full mt-2 px-2 py-1 text-xs rounded bg-neutral-700 text-white whitespace-nowrap z-10
              transition-all duration-300 ease-in-out
              ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
            `}
          >
            {item.label}
          </div>

          <button
            onClick={() => handleNavigation(item.route)}
            className="p-[4px] text-xl text-white hover:text-gray-300 transition-colors duration-200 ease-in-out cursor-pointer"
            aria-label={item.label}
          >
            <FontAwesomeIcon icon={item.icon} className="w-[26px] h-[26px]" />
          </button>
        </div>
      ))}
    </div>
  );
}
