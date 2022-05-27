import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../confing/BaseURL";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  const getCourses = async () => {
    await fetch(BASE_URL + "api/Course/GetAll")
      .then((res) => res.json())
      .then((cs) => setCourses(cs));
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
    <div className="popular-course">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cours-top">
              <h1>Most Popular Courses</h1>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor{" "}
                <br />
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>    
              <div className="title-btn">
                <button  className="btn btn-tra-grey rose-hover">View All Courses</button>
              </div>
            </div>
          </div>
        </div>
        <div className="course-cards">
          <div  className="row">
            {courses.map((cr) => (
              <div key={cr.courseId} className=" col-lg-4 col-xl-3 ">
                <div className="card-1">
                  <Link to={`/popular/` + cr.courseId}>
                    <img
                      className="img-fluid"
                      src={cr.photoUrl}
                      alt="ayuye-balasi"  	
                    />
                  </Link>
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
                      <span className="old-price">${cr.price}</span>$
                      {cr.discount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default PopularCourses;
