
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Context } from '../MyContext';
import { useContext } from 'react';

const Home = () => {
  const { signIn, setstart, Data } = useContext(Context);
  let navigate = useNavigate()

  const Starttest = () => {
    setstart(true)
    toast.warn("test has started")
    navigate("/test")
  }
  console.log(Data)

  return (
    <>
      <div className="mainbg bg-no-repeat bg-left h-screen">
        <div className="bg-cyan-200 h-screen flex justify-center m-0 item-center flex-col">
          <div className="flex flex-col smooth-entry justify-center items-center">
            <h1 className="text-3xl md:text-6xl font-extrabold m-5">
              Welcome to <span className="text-lime-400">Test App</span>
            </h1>
            <div className="mt-6 mx-5 text-2xl md:text-3xl text-gray-100 bg-gray-800 bg-opacity-75 rounded-lg p-4 shadow-md"> 
              <p className="mb-2"> 
                <span className="font-semibold text-green-900">Subject:</span> {Data ? Data.title : "please Wait ..."} 
              </p>
              <p>
                <span className="font-semibold text-violet-900">Topic:</span> {Data ? Data.topic : "please Wait ..."}
              </p>
            </div>
          </div>

          <div className="my-10 flex justify-center items-center w-full smooth-entry">
            {signIn ? <button type="button" onClick={Starttest} className="h-10 sm:w-48 w-44 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg sm:text-sm text-xs px-5 py-2.5 text-center">
              Start Test
            </button> : <button type="button" className="h-10 sm:w-48 w-44 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg sm:text-sm text-xs px-5 py-2.5 text-center">
              <Link to="/login">Login</Link>
            </button>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home