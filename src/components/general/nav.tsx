import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

export interface NavItem {
  title: string;
  href: string;
}

export interface NavProps {
  items: NavItem[];
}

export default function Nav({ items }: NavProps) {
  return (
    <div className="flex justify-between items-center px-4 md:px-12 py-4">
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

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <div className="flex flex-col space-y-4 px-4">
                  {items.map((item) => (
                    <DrawerClose asChild key={item.href}>
                      <a href={item.href} className="text-lg font-medium">
                        {item.title}
                      </a>
                    </DrawerClose>
                  ))}
                </div>
              </DrawerHeader>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="hidden md:block">
        <Button>Contact us</Button>
      </div>
    </div>
  );
}
