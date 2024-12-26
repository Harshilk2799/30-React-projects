import React from "react";

function QuestionList({ question, options, handleClick, currentAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => {
          return (
            <li
              key={index}
              onClick={() => handleClick(option)}
              className={currentAnswer === option ? "selected" : ""}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuestionList;