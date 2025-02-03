import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect } from 'react';
import { Context } from '../MyContext';
import { useRef } from "react";

const Result = () => {
  const { setincorrectresponse, setmin, min, setcorrectresponse, TestQuestion, correctresponse, incorrectresponse, dark, Data, signIn } = useContext(Context);

  const style = {
    ui: dark ?
      "bg-slate-700"
      :
      "bg-gradient-to-b from-green-50 to-green-200 "
  }

  const questionlength = TestQuestion.length
  const percentage = useRef((correctresponse / questionlength) * 100)
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("result",(correctresponse / questionlength) * 100)
  }, [])
  
  return (
    <>
    {signIn ? (
      <div className={`${style.ui} h-screen flex justify-center items-center p-10 flex-col`}>
        <div className="bg-white shadow-lg rounded-2xl p-8 w-[90%] md:w-[50%] text-center animate-fadeIn">
          <h1 className="text-4xl font-bold text-green-600 mb-6">Test Results</h1>
          
          <div className="text-lg text-gray-700 space-y-3">
            <p className="font-semibold">Your Score Summary</p>
            <p>✅ Correct Responses: <span className="text-green-600 font-bold">{correctresponse}</span></p>
            <p>❌ Incorrect Responses: <span className="text-red-500 font-bold">{incorrectresponse}</span></p>
            <p>⚪ Unattempted Questions: <span className="text-gray-500 font-bold">{questionlength - (incorrectresponse + correctresponse)}</span></p>
            <p>📋 Total Questions: <span className="text-blue-600 font-bold">{questionlength}</span></p>
            <p>📊 Percentage: <span className="text-purple-600 font-bold">{Number(Math.round(percentage.current + 'e2') + 'e-2')}%</span></p>
          </div>

          <button
            onClick={() => {
              setincorrectresponse(0);
              setmin(Data.duration);
              setcorrectresponse(0);
              navigate("/");
            }}
            className="mt-6 px-6 py-3 text-white bg-gradient-to-br from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-lg shadow-lg transition-all duration-300"
          >
            Return to Menu
          </button>
        </div>
      </div>
    ) : (
      <div className="mainbg bg-no-repeat bg-left min-h-[87vh] flex flex-col justify-center items-center p-10 text-center">
        <h1 className="text-4xl font-semibold text-green-700 mb-6 animate-fadeIn">Please Log In</h1>
        <Link to={"/login"}>
          <button className="px-6 py-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 rounded-lg shadow-lg transition-all duration-300">
            Login
          </button>
        </Link>
      </div>
    )}
  </>
  )
}

export default Result