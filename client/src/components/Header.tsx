import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Image } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLink = ({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) => {
    const isActive = location === href;
    const baseClasses = mobile 
      ? "block px-3 py-2 text-base font-medium rounded-md transition-colors"
      : "text-gray-600 hover:text-primary transition-colors font-medium";
    
    const activeClasses = isActive 
      ? mobile 
        ? "bg-primary/10 text-primary" 
        : "text-gray-900"
      : "";

    return (
      <Link href={href}>
        <span className={`${baseClasses} ${activeClasses}`} onClick={() => mobile && setIsOpen(false)}>
          {label}
        </span>
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image className="text-primary text-2xl mr-3 h-6 w-6" />
              <h1 className="text-xl font-bold text-gray-900">JPG2PNG</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <NavLink key={item.href} href={item.href} label={item.label} mobile />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
