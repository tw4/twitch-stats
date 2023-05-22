'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdDarkMode, MdLightMode, MdSearch } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';

const Navbar = () => {
  const router = useRouter();

  const [theme, setTheme] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    setTheme(Cookies.get('theme')!);
    if (!Cookies.get('theme')) {
      Cookies.set('theme', 'light');
    }
    if (
      Cookies.get('theme') === 'dark' ||
      (!('theme' in Cookies.get()) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const themeSwitcher = () => {
    if (Cookies.get('theme') === 'dark') {
      Cookies.set('theme', 'light');
      setTheme('light');
      if (
        Cookies.get('theme') === 'dark' ||
        (!('theme' in Cookies.get()) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      Cookies.set('theme', 'dark');
      setTheme('dark');
      if (
        Cookies.get('theme') === 'dark' ||
        (!('theme' in Cookies.get()) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const goToStreamerDetail = () => {
    if (searchValue !== '') {
      router.push('/streamer/' + searchValue);
      setSearchValue('');
    }
  };

  return (
    <div className="flex flex-row pl-5 pr-5 justify-between items-center h-12 w-full bg-white dark:bg-[#18181b]">
      {/* left side */}
      <Link
        aria-label="go-to-home"
        href="/"
        className="flex flex-row items-center space-x-2"
      >
        <Image
          src="/twitch-stats.png"
          className="p-2"
          width={50}
          height={50}
          alt="logo"
        />
        <p className="dark:text-white">Twitch Stats</p>
      </Link>

      {/* mid side */}
      <div className="flex items-center space-x-0.5">
        <input
          className="rounded border-2 border-gray-300 w-80 bg-transparent pl-5 pr-5 pt-1 pb-1 focus:outline-none focus:ring focus:ring-purple-400 dark:border-gray-500 dark:text-white"
          placeholder="Search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <button
          aria-label="search-button"
          className=" p-2.5 bg-gray-200 dark:bg-gray-700"
          onClick={goToStreamerDetail}
        >
          <MdSearch className="text-black dark:text-white" />
        </button>
      </div>

      {/* right side */}
      <button
        aria-label="theme-button"
        onClick={themeSwitcher}
        className="rounded-full bg-black dark:bg-white p-1"
      >
        {theme === 'dark' ? (
          <MdLightMode className="text-black" />
        ) : (
          <MdDarkMode className="text-white" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
