import {Link} from "react-router-dom";
import {useTheme} from '@/components/context/theme-provider';
import { Sun, Moon } from "lucide-react";
import CitySearch from '@/components/city-search'


const Header = () => {

    const {theme,setTheme} = useTheme();
    const isDark = theme === "dark";

  return <header className="sticky top-0 z-50 w-full border-b 
  bg-background/95 backdrop-blur py-2 upports-[backdrop-filter]:bg-background/60">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
        <img
        src={isDark ? "/logo.png":"/logo2.png"}
        alt="Klimate Logo"
        className="h-19"
        />
        </Link>

        <div>
            {/* search */}
            <CitySearch/>

            {/* theme toggle  */}
            <div onClick={()=> setTheme(isDark ? "light":"dark")}
                className={`flex items-center cursor-pointer transition-transform duration-500
                    ${isDark ? "rotate-180" : "rotate-0"}
                    mt-2
                    `}
                >
                {isDark ? (
                    <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all"/>
                ):(
                    <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all"/>
                )}
            </div>
        </div>
    </div>
  </header>;
}

export default Header
