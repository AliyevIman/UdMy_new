import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { BASE_URL } from "../confing/BaseURL";

const CatCourses = () => {
  const { id } = useParams();
  const [courses, setcourses] = useState([]);
  const getInstructors = (myid) => {
    fetch(BASE_URL + "api/Course/category/" + myid)
      .then((cs) => cs.json())
      .then((cs) => setcourses(cs));
  };
  useEffect(() => {
    getInstructors(id);
  }, [id]);
  // console.log(courses)
  return (
    <>
    <Header/>
    
    <div className="container">
      {/* <div className="row"> */}
      <div className="course-card-2">

        <div className="row">

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
    <Footer/>
    </>
  );
};

export default CatCourses;
