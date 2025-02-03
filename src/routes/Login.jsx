import { Link, useNavigate } from "react-router-dom"
// import Foot from "../components/Foot"
// import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { useContext } from 'react';
import { Context } from '../MyContext';
import { toast } from "react-toastify"

const Login = () => {
  const [userName, setuserName] = useState("")
  const [password, setpassword] = useState("")
  const { name, pwd, setsignIn } = useContext(Context);

  let navigate = useNavigate()

  const handleSignin = () => {
    if (userName == name && password == pwd) {
      setsignIn(true)
      localStorage.setItem('login', JSON.stringify(true));
      toast.success(`User - ${userName} successfully login`)
      navigate("/")
    }
    else{toast.error(`User - ${userName} not found`)}
  }

  useEffect(() => {
    const NAME = JSON.parse(localStorage.getItem('Name'));
    const PASSWORD = JSON.parse(localStorage.getItem('Password'));
    if (NAME) {
      setuserName(NAME);
    }
    if (PASSWORD) {
      setpassword(PASSWORD);
    }
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="mainbg bg-no-repeat bg-left h-screen">
        <div className="bg-slate-950/60 h-screen flex justify-center m-0 item-center flex-col">
          <section className="smooth-entry flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email or Username</label>
                  <input
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                    type="email" name="email" id="email" className="bg-green-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type="password" name="password" id="password" placeholder="••••••••" className="bg-green-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <button onClick={handleSignin} className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <button type="button"
          className="h-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <Link to={"/testsetting"}>test setting</Link>
        </button> */}
      </div>
      </div>
      {/* <Foot /> */}
    </>
  )
}

export default Login