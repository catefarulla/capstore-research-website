import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export interface NavItem {
  title: string;
  href: string;
}

export interface NavProps {
  items: NavItem[];
}

export default function Nav({ items }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-4 md:px-12 py-4 bg-white relative z-50">
        <a href="/" className="select-none">
          <span className="text-xl md:text-2xl font-heading font-black tracking-tight uppercase">
            Chronos
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {items.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    className="text-sm font-medium leading-none"
                    href={item.href}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden md:block">
          <Button variant="accent">Contact us</Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-lg md:hidden z-40">
          <nav className="flex flex-col p-6">
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-text-primary hover:text-text-accent transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <Button variant="accent" className="w-full">
              Contact us
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
