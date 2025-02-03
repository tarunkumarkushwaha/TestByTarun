import { Link, NavLink, useNavigate, useLocation } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
// import logo from '/assets/logo.png'
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../MyContext';
import { toast } from "react-toastify";

const Navbar = () => {
  const [menu, setmenu] = useState(false)
  const { dark, themeChange, signIn, setsignIn, name } = useContext(Context);
  let navigate = useNavigate()
  const location = useLocation()

  const changemenu = () => {
    setmenu(!menu)
  };

  // console.log("rerendering")

  const handleLogout = () => {
    toast.success(`user ${name} has successfully signed out`)
    localStorage.setItem('login', JSON.stringify(false));
    navigate("/login")
    setsignIn(false)
  }

  const loginClick = () => {
    navigate('/login')
  }

  const style = {
    btnMode: dark
      ? "from-indigo-600 to-purple-800 hover:from-indigo-700 hover:to-purple-900"
      : "from-teal-500 to-cyan-700 hover:from-teal-600 hover:to-cyan-800",

    uiMode: dark
      ? "bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg"
      : "bg-gradient-to-b from-gray-100 to-white shadow-md",

    text: dark
      ? "text-gray-200"
      : "text-gray-700",

    card: dark
      ? "bg-gray-800 bg-opacity-75 backdrop-blur-lg shadow-xl"
      : "bg-white bg-opacity-80 backdrop-blur-lg shadow-lg border border-gray-200",

    border: dark
      ? "border-gray-700"
      : "border-gray-300"
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setmenu(true)
      }
      else { setmenu(false) }
    };
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect(() => {

  // }, []);

  return (
    <>
      <header className="">
        <nav className={`${style.uiMode} sticky top-0 z-10 px-8 md:px-auto min-h-20`}>
          <button className={`absolute top-5 left-4 h-8 w-8 md:hidden flex duration-200 ${menu ? "rotate-180" : "rotate-0"}`} onClick={changemenu}>
            <MenuIcon className={`${style.text}`} fontSize="large" />
          </button>
          <div className="absolute top-7 md:left-10 left-1/2 md:translate-x-0 -translate-x-1/2">
            <Link to="/" className="block">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">
                <span className="text-lime-400">Test App</span>
              </h1>
            </Link>
          </div>
          {menu &&
            <div className="flex md:flex-row flex-col justify-between items-center">
              <div className="h-12 w-28 m-4"></div>
              <div className={`${style.text}`}>
                <ul className="flex font-semibold md:justify-between justify-center items-center md:flex-row flex-col gap-5">
                  <li className={`${location.pathname == "/" ? "text-indigo-500" : `${style.text}`} hover:text-indigo-700`}><NavLink to="/" >Home</NavLink></li>
                  <li className={`${location.pathname == "/about" ? "text-indigo-500" : `${style.text}`} hover:text-indigo-700`}><NavLink to="/about">About</NavLink></li>
                  <li className={`${location.pathname == "/contact" ? "text-indigo-500" : `${style.text}`} hover:text-indigo-700`}><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
              <div className="my-5 mr-0 md:mr-10">
                {signIn ?
                  <button type="button" onClick={handleLogout} className="h-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    log out
                  </button>
                  :
                  <button type="button" onClick={loginClick} className="h-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    login
                  </button>
                }
              </div>
            </div>
          }
          <button className={`${style.btnMode} absolute right-2 top-5 h-10 text-white bg-gradient-to-br hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-2 text-center`}
            onClick={themeChange}>
            {dark ?
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="10" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24" />
                <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,
              0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1
              ,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,
              1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39
              ,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,
              1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="10" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24" />
                <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" /></svg>
            }
          </button>
        </nav>
      </header>
    </>
  )
}

export default React.memo(Navbar)