import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Context } from "./MyContext";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Result from './routes/Result';
import Test from "./routes/Test";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";

function App() {
  const [min, setmin] = useState(10)
  const [TestQuestion, setTestQuestion] = useState()
  const [dark, setdark] = useState(false)
  const [signIn, setsignIn] = useState(false)
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [correctresponse, setcorrectresponse] = useState(0)
  const [incorrectresponse, setincorrectresponse] = useState(0)
  const [pastpercentage, setpastpercentage] = useState(0)
  const [start, setstart] = useState(false)
  const [Data, setData] = useState({})

  const themeChange = () => {
    dark ? localStorage.setItem('Theme', JSON.stringify(false)) : localStorage.setItem('Theme', JSON.stringify(true));
    setdark(prevtheme => !prevtheme)
  }

  useEffect(() => {
    const item1 = localStorage.getItem('Name');
    const item2 = localStorage.getItem('Password');
    const item3 = localStorage.getItem('login');
    const THEME = localStorage.getItem('Theme');
    const PERCENT = localStorage.getItem('result');
    if (item1) {
      setName(JSON.parse(item1));
    }
    if (item2) {
      setPwd(JSON.parse(item2));
    }
    if (item3) {
      setsignIn(JSON.parse(item3));
    }
    if (THEME) {
      setdark(JSON.parse(THEME));
    }
    if (PERCENT) {
      setpastpercentage(JSON.parse(PERCENT));
    }
  }, []);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setTestQuestion(data.questions)
        setmin(data.duration)
        setData(data)
      }
    ).catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <>
      <Context.Provider value={{
        start, setstart, Data,
        TestQuestion, setTestQuestion, min, setmin,
        name, setName, pwd, pastpercentage,
        setPwd, signIn, setsignIn, dark, themeChange,
        correctresponse, setcorrectresponse, setincorrectresponse,
        incorrectresponse
      }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<Test />} />
            <Route path="/result" element={<Result />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Foot />
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
        {/* </Usercontext> */}
      </Context.Provider>
    </>
  )
}

export default App
