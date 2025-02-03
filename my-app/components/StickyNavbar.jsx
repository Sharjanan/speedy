import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "../assets/pneuspeedy-removebg-preview.png";
import ContactScreen from "../screens/ContactScreen";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 " >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="ContactScreen" className="flex items-center">
          PRICING
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          CONTACT
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          ABOUT US
        </a>
      </Typography>
    </ul>
  );
 
  return (
      <Navbar className="sticky top-0 z-10 h-32 max-w-full rounded-none px-12 py-0 lg:px-8 lg:py-0">
      <div className="flex items-center justify-between text-blue-gray-900">
      <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto">
          <img
            alt="Logo"
            className="lg:ml-4 cursor-pointer mt-[-40px]"
            src="../assets/pneuspeedy-removebg-preview.png"
            // style={{width: 'auto', height: '100%'}}
          />
        </div>
          <div className="flex items-center mt-[-50px] gap-4 ">
            <div className=" mr-40 hidden lg:block ">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>FR</span>
              </Button>
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block border  rounded-lg font-extrabold mr-4"
              >
                <span>(514) 624-0229</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              aria-label="Toggle navigation"
              className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <div className="bg-gray-500 rounded" >
        <MobileNav open={openNav} data-testid="mobile-menu"  >
          {navList}
          <div className="flex items-center gap-x-1 ">
            <Button fullWidth variant="text" size="sm" className="">
              <span>FR</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>(514) 624-0229</span>
            </Button>
          </div>
        </MobileNav>
        </div>
      </Navbar>
    

  );
}

