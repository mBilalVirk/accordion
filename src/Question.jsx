import React, { useState, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const contentRef = useRef(null);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const getContentHeight = () => {
    return showInfo ? `${contentRef.current.scrollHeight}px` : '0';
  };

  return (
    <>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={toggleInfo}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        <p
          ref={contentRef}
          style={{
            maxHeight: getContentHeight(),
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-out'
          }}
        >
          {info}
        </p>
      </article>
    </>
  );
};

export default Question;
