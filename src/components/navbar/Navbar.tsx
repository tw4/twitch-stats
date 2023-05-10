'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdDarkMode, MdLightMode, MdSearch } from 'react-icons/md';

const Navbar = () => {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme')!);
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
    }
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const themeSwitcher = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  return (
    <div className="flex flex-row pl-5 pr-5 justify-between items-center h-12 w-full bg-white dark:bg-[#161616f2]">
      <div className="flex flex-row items-center space-x-2">
        <Image
          src="/twitch-stats.png"
          className="p-2"
          width={50}
          height={50}
          alt="logo"
        />
        <p className="dark:text-white">Twitch Stats</p>
      </div>

      <div className="flex items-center space-x-0.5">
        <input
          className="rounded border-2 border-gray-300 w-80 bg-transparent pl-5 pr-5 pt-1 pb-1 focus:outline-none focus:ring focus:ring-purple-400 dark:border-gray-500 dark:text-white"
          placeholder="Search"
        />
        <button className=" p-2.5 bg-gray-200 dark:bg-gray-700">
          <MdSearch className="text-black dark:text-white" />
        </button>
      </div>
      <button
        onClick={themeSwitcher}
        className="rounded-full bg-black dark:bg-white p-1"
      >
        {theme === 'dark' ? (
          <MdLightMode className="text-dark" />
        ) : (
          <MdDarkMode className="text-white" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
