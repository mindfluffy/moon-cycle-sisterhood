
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Moon,
  LayoutDashboard,
  Calendar,
  BookOpen,
  Settings,
  Info,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  path: string;
  label: string;
  icon: React.ElementType;
  requiresAuth?: boolean;
}

const navItems: NavItem[] = [
  { path: "/", label: "Accueil", icon: Moon },
  { path: "/dashboard", label: "Tableau de bord", icon: LayoutDashboard, requiresAuth: true },
  { path: "/calendar", label: "Calendrier", icon: Calendar, requiresAuth: true },
  { path: "/journal", label: "Journal", icon: BookOpen, requiresAuth: true },
  { path: "/settings", label: "Paramètres", icon: Settings, requiresAuth: true },
  { path: "/info", label: "Informations", icon: Info },
];

const MainNav = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Navigation Desktop */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-night-800/90 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-playfair font-bold text-cream-100">
              Moon is a Girl
            </Link>
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-rose-300/20 text-rose-300"
                      : "text-silver-300 hover:text-rose-300 hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-night-800/90 backdrop-blur-lg border-t border-white/10 z-50">
        <div className="grid grid-cols-5 gap-1 p-2">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
                isActive(item.path)
                  ? "text-rose-300"
                  : "text-silver-300 hover:text-rose-300"
              }`}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-full h-full flex flex-col items-center justify-center text-silver-300 hover:text-rose-300"
              >
                <Menu className="w-5 h-5 mb-1" />
                <span className="text-xs">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-night-800/95 backdrop-blur-xl border-white/10">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.slice(4).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center p-3 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-rose-300/20 text-rose-300"
                        : "text-silver-300 hover:text-rose-300 hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
