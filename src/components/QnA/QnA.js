import React from "react";
import './QnA.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const QnA = () => {
  return (
    <div>
      <div className="flexible-item">
        <h2>Frequently asked questions about React JS</h2>&nbsp;&nbsp;
        <FontAwesomeIcon style={{ fontSize: 25 }} icon={faQuestionCircle}></FontAwesomeIcon>
      </div>
      <div className="qna-container">
        <p style={{ fontWeight: 700, marginTop: 0, fontSize: 20 }}>Q: How React works?</p>
        <p className="text">React implements a virtual DOM which is a DOM tree representation in JavaScript. This virtual DOM find the most efficient way to update the browser's DOM. React elements are plain objects and cheap to create. Besides, JavaScript is quite fast. So, virtual DOM of React updates the browser's DOM to match the React elements.</p>
      </div>
      <div className="qna-container">
        <p style={{ fontWeight: 700, marginTop: 0, fontSize: 20 }}>Q: Difference between props and use state?</p>
        <p className="text">Props is short form for properties. It is passed from a parent component to a child component. State determine the current condition of the component in a React application. The React useState Hook tracks the state in a function component.</p>
      </div>
      <div id="gap" className="qna-container">
        <p style={{ fontWeight: 700, marginTop: 0, fontSize: 20 }}>Q: How useState works?</p>
        <p className="text">useState is a Hook that allows to have state variables in functional components. The the initial state is passed to this function. Likewise, it returns a variable with the current state value. Furthermore, it returns another function to update the value.</p>
      </div>
    </div>
  );
}

export default QnA;