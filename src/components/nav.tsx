import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
};

const ListItem = ({ className, title, children, ...props }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export type NavProps = {
  dropdownContent: NavItem[];
};

export default function Nav({ dropdownContent }: NavProps) {
  return (
    <div className="flex justify-between items-center px-4 md:px-12 py-4">
      <div>
        <span className="text-2xl font-heading font-black tracking-tight uppercase">
          Chronos
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-sm font-medium leading-none"
                href="/docs"
              >
                Why Chronos
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px]">
                  {dropdownContent.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-sm font-medium leading-none"
                href="/docs"
              >
                Speak to Advisor
              </NavigationMenuLink>
            </NavigationMenuItem>
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
                  <DrawerClose asChild>
                    <a href="/docs" className="text-lg font-medium">
                      Why Chronos
                    </a>
                  </DrawerClose>
                  <div className="space-y-3">
                    <div className="font-medium text-lg">Products</div>
                    <div className="pl-4 space-y-3">
                      {dropdownContent.map((item) => (
                        <DrawerClose asChild key={item.title}>
                          <a
                            href={item.href}
                            className="block text-base text-muted-foreground"
                          >
                            {item.title}
                          </a>
                        </DrawerClose>
                      ))}
                    </div>
                  </div>
                  <DrawerClose asChild>
                    <a href="/docs" className="text-lg font-medium">
                      Speak to Advisor
                    </a>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Button className="w-full">Contact us</Button>
                  </DrawerClose>
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
