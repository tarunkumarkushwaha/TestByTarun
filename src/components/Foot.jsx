import { Link} from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../MyContext';

const Foot = () => {

  const {dark} = useContext(Context);
  const style = {
    uiMode: dark ?
      "text-white bg-yellow-900"
      :
      "text-black bg-yellow-300"
  }
  return (
    <>
       <footer className="">
       <span className={`block md:text-sm text-xs ${style.uiMode} text-center`}>© 2025 Tarun<Link to="/about" className="hover:underline">. All Rights Reserved.</Link></span>
       </footer>
    </>
  )
}

export default Foot