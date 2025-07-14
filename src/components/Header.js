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
    'inline-flex items-center px-3 py-2 min-h-[44px] text-gray-700 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary';

  return (
    <header role="banner" className="bg-white w-full shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link
          href="/"
          aria-label="На главную"
          className="flex items-center font-bold text-xl text-primary"
        >
          <BoltIcon className="h-6 w-6 text-secondary" aria-hidden="true" />
          <span className="ml-2">Электромашсервис</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:block" aria-label="Главное меню">
          <ul className="flex space-x-6">
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
                className="p-3 min-h-[44px] text-gray-700 focus-visible:outline focus-visible:outline-secondary"
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
                    className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg border border-gray-200 bg-white shadow-lg focus:outline-none"
                  >
                    <div className="py-2">
                      {items.map((item) => (
                        <Menu.Item key={item.href} as={Fragment}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={`block px-4 py-3 min-h-[44px] ${active ? 'bg-gray-100 text-secondary' : 'text-gray-700'}`}
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
