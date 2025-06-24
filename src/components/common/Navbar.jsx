import React, { useEffect } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath } from 'react-router-dom'
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart ,  AiOutlineMenu} from "react-icons/ai"
import ProfileDropDown from "../core/Auth/ProfileDropDown"
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import { useState } from 'react'
import {IoIosArrowDropdownCircle} from "react-icons/io"
import { BsChevronDown } from "react-icons/bs"
import { ACCOUNT_TYPE } from "../../utils/constants"

/*const subLinks = [
    {
        title: "python",
        link:"/catalog/python"
    },
    {
        title: "web dev",
        link:"/catalog/web-development"
    },
];
*/

const Navbar = () => {
    console.log("Printing base url: ",process.env.REACT_APP_BASE_URL);
    const {token} = useSelector( (state) => state.auth );
    // console.log("token" , token);

    const {user}= useSelector((state)=>state.profile);
    // console.log ("redux user" , user);

    const {totalItems} = useSelector( (state) => state.cart )
    // console.log("ITEMS" , totalItems);

    const location = useLocation();


   
    const [loading, setLoading] = useState(false)
    const [subLinks, setSubLinks]  = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);



    const fetchSublinks = async() => {
        try{
            const result = await apiConnector("GET", categories.CATEGORIES_API);
            console.log("Printing Sublinks result:" , result);
            setSubLinks(result.data.data);
        }
        catch(error) {
            console.log("Could not fetch the category list");
        }
    }


    useEffect( () => {
        fetchSublinks();
    },[] )



    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
        {/* Image */}
      <Link to="/">
        <img src={logo} width={160} height={42} loading='lazy' alt="abc"/>
      </Link>
      

      {/* Navigation links */}
      <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
          {NavbarLinks.map((link, index) => (
  <li key={index}>
    {link.title === "Catalog" ? (
      <>
        <div
          className={`group relative flex cursor-pointer items-center gap-1 ${
            matchRoute("/catalog/:catalogName")
              ? "text-yellow-25"
              : "text-richblack-25"
          }`}
        >
          <p>{link.title}</p>
          <BsChevronDown />
          <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
            {console.log("subLinks:", subLinks)}
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : subLinks.length ? (
              <>
                {console.log("subLinks.length:", subLinks.length)}
                {subLinks
  ?.map((subLink, i) => {
    console.log("Rendering link:", subLink);
    return (
      <Link
        to={`/catalog/${subLink.name
          .split(" ")
          .join("-")
          .toLowerCase()}`}
        className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
        key={i}
      >
        <p>{subLink.name}</p>
      </Link>
    );
  })}
              </>
            ) : (
              <p className="text-center">No Courses Found</p>
            )}
          </div>
        </div>
      </>
    ) : (
      <Link to={link?.path}>
        <p
          className={`${
            matchRoute(link?.path)
              ? "text-yellow-25"
              : "text-richblack-25"
          }`}
        >
          {link.title}
        </p>
      </Link>
    )}
  </li>
))}
          </ul>
        </nav>
   {/* Login / Signup / Dashboard */}
   <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
        {/* <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button> */}
      
      <button
  className="mr-4 md:hidden"
  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
>
  <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
</button>

{isMobileMenuOpen && (
  <div className="absolute top-14 left-0 z-50 w-full bg-richblack-900 px-6 py-4 shadow-lg md:hidden">
    {/* Nav Links */}
    <ul className="flex flex-col gap-4 text-richblack-25">
      {NavbarLinks.map((link, index) => (
  <li key={index}>
    {link.title === "Catalog" ? (
      <div>
        <button
          className="flex w-full items-center justify-between text-left text-richblack-100"
          onClick={() => setIsCatalogOpen((prev) => !prev)}
        >
          <span className="flex items-center gap-2">
            Catalog
            <BsChevronDown
              className={`transition-transform duration-200 ${
                isCatalogOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>

        {isCatalogOpen && (
          <div className="ml-3 mt-2 flex flex-col gap-2">
            {subLinks?.map((subLink, i) => (
              <Link
                to={`/catalog/${subLink.name
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
                key={i}
                className="rounded-lg px-2 py-2 text-sm text-richblack-100 hover:bg-richblack-700"
                onClick={() => {
                  setIsCatalogOpen(false)
                  setIsMobileMenuOpen(false)
                }}
              >
                {subLink.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    ) : (
      <Link
        to={link?.path}
        onClick={() => setIsMobileMenuOpen(false)}
        className={`block text-richblack-100 ${
          matchRoute(link?.path) ? "text-yellow-25" : ""
        }`}
      >
        {link.title}
      </Link>
    )}
  </li>
))}

    </ul>

    {/* Auth Buttons / Cart / Profile */}
    <div className="mt-6 flex flex-col gap-3">
      {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
        <Link
          to="/dashboard/cart"
          className="relative w-fit"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
          {totalItems > 0 && (
            <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
              {totalItems}
            </span>
          )}
        </Link>
      )}

      {token === null && (
        <>
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full rounded-md border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100">
              Log in
            </button>
          </Link>
          <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full rounded-md border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100">
              Sign up
            </button>
          </Link>
        </>
      )}

      {token !== null && <div className="w-full">
    <ProfileDropDown mobile={true} />
  </div>}
    </div>
  </div>
)}


    </div>
    </div>
  )
}  

export default Navbar
