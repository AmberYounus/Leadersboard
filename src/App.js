import React, { Component }  from 'react';

import Student from "./Component/Student";
import './Component/style.css';

export default function App() {
  return (
    <div className="App">
      <h1 className="leader-Board">Leadersboard</h1>

      <Student name="Amber Younus" university="Fuuast" score={350} />
      <Student
        name="Hania Ramzan"
        university="Jinnah University "
        score={348}
      />
      <Student
        name="Muhammad Masood"
        university="Karachi univerity"
        score={349}
      />
      <Student
        name="Muhammad Faisal"
        university="Bahria University"
        score={349}
      />
    </div>
  );
}


