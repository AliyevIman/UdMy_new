import React, { useEffect, useState } from "react";
import { BASE_URL } from "../confing/BaseURL";

const BestCourses = () => {
  const [courses, setcourses] = useState([]);
  const getCourses = async () => {
    await fetch(BASE_URL + "api/Course/GetAll")
      .then((c) => c.json())
      .then((c) => setcourses(c));
  };
  useEffect(()=>{
    getCourses();
  },[])
  return (
    <>
    <div className="course-cards">
      <div className="row">
        {courses.map((cr) => (
          <div key={cr.courseId} className=" col-lg-4 col-xl-3 ">
            <div className="card-1">
              <img className="img-fluid" src={cr.photoUrl} alt="ayuye-balasi" />
              <div className="card-text">
                <div className="card-tags">
                  <span>{cr.categoryName}</span>
                  <span>{cr.courseName}</span>
                </div>
                <h4>{cr.description}</h4>
                <div className="card-ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span>{cr.reyting}()</span>
                </div>
                <span className="card-price">
                  <span className="old-price">${cr.price}</span>${cr.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
  );
};

export default BestCourses;
