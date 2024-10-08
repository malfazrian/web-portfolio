import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Recent Work", href: "#recent-work" },
  { name: "Get in Touch", href: "#get-in-touch" },
];

function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };

  return (
    <Disclosure as="nav" className="fixed top-0 z-50 w-full bg-slate-950">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-green-400 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.name === activeTab ? "page" : undefined}
                    onClick={() => handleTabClick(item.name)}
                    className={classNames(
                      item.name === activeTab
                        ? "bg-green-700 text-white"
                        : "text-green-300 hover:bg-green-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 w-full text-center pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.name === activeTab ? "page" : undefined}
              onClick={() => handleTabClick(item.name)}
              className={classNames(
                item.name === activeTab
                  ? "bg-green-900 text-white"
                  : "text-green-300 hover:bg-green-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
