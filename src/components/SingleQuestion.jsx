import pkg from "prop-types";
import { useState } from "react";


const SingleQuestion = ({ question, response, setresponse, disabled, selected, setselected }) => {

  const handleSelect = (item, index) => {
    if (!disabled) {
      setselected(index);
      setresponse(item.is_correct);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h2 className="text-xl text-lime-600 font-bold mb-5">{question.description}</h2>

      <ul className="w-full max-w-md space-y-4">
        {question.options.map((item, i) => (
          <li
            key={i}
            onClick={() => handleSelect(item, i)}
            className={`cursor-pointer rounded-lg border-cyan-400 border-2 p-3 transition-all duration-200 ${
              selected === i ? "bg-lime-400 border-orange-600 border-2" : "bg-white"
            } hover:bg-cyan-300`}
          >
            <p className={`text-lg font-semibold ${disabled ? (item.is_correct ? "text-green-600" : "text-red-600") : "text-gray-700"}`}>
              {String.fromCharCode(97 + i)}. {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default SingleQuestion;