import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/solid"

function Header(){
    return (
      <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:p-10'>
          {/* Left div */}
          <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image
              src="https://links.papareact.com/qd3"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              alt="Airbnb logo"
            />
          </div>

          {/* Middle div */}
          <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
            <input className='pl-5 bg--transparent outline-none flex-grow text-gray-600 text-sm placeholder-gray-400' type="text" placeholder="Start your Search.."/>
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
          </div>

          {/* Right div */}
          <div className="flex items-center justify-end text-gray-500 space-x-4">
            <p className="hidden md:inline cursor-pointer">Become a host</p> 
            <GlobeAltIcon className='h-6 cursor-pointer'/>
            <div className="rounded-full border-2 flex items-center space-x-4 shadow-sm p-2 cursor-pointer">
            <MenuIcon className="h-6"/>
                <UserCircleIcon className="h-6"/>
                </div>
            
          </div>
      </header>
    );
}
export default  Header;