import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Bars3Icon, BoltIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const items = [
    { href: '#about', label: 'О компании' },
    { href: '#products', label: 'Продукция' },
    { href: '#contacts', label: 'Контакты' },
  ];

  const menuClasses =
    'btn btn-ghost normal-case';

  return (
    <header role="banner" className="shadow bg-base-200">
      <div className="navbar bg-base-100 container">
        <Link
          href="/"
          aria-label="На главную"
          className="flex items-center font-bold text-xl"
        >
          <BoltIcon className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="ml-2">Электромашсервис</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:block" aria-label="Главное меню">
          <ul className="menu menu-horizontal gap-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={menuClasses}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu */}
        <Menu as="div" className="relative md:hidden">
          {({ open }) => (
            <>
              <Menu.Button
                aria-label="Меню"
                className="btn btn-ghost"
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Menu.Button>
              <AnimatePresence>
                {open && (
                  <Menu.Items
                    static
                    as={motion.div}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute right-0 mt-2 w-48 origin-top-right rounded-box border bg-base-100 shadow-lg"
                  >
                    <div className="menu">
                      {items.map((item) => (
                        <Menu.Item key={item.href} as={Fragment}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={`px-4 py-3 ${active ? 'bg-base-200' : ''}`}
                            >
                              {item.label}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                )}
              </AnimatePresence>
            </>
          )}
        </Menu>
      </div>
    </header>
  );
}
