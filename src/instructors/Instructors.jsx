import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../confing/BaseURL";
const Instructors = () => {
  const [Instructors, setInstrucotrs] = useState([]);
  const getInstructors = async () => {
    await fetch(BASE_URL + "api/Instructor/GetAll")
      .then((cs) => cs.json())
      .then((cs) => setInstrucotrs(cs));
  };
  useEffect(() => {
    getInstructors();
  }, []);
  // console.log(Instructors);

  return (
    <>
        {/* <h3>{Instructors.fullName}</h3> */}
        {
            <li className="main">

            <ul>
              {Instructors.map((e) =>
                  <li key={e.id} className="category">
                          <Link to={`/instcours/`+e.id}>{e.fullName}</Link>
                  </li>
                  )}
            </ul>
            <Link to="#"> Instrucotrs</Link>
        
            </li>
        }
    </>
  );
};

export default Instructors;
