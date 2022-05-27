import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { BASE_URL } from "../confing/BaseURL";

const InstCourses = () => {
  const { id } = useParams();
  const [instcourse, setinstcourse] = useState(null);
  const getinstCourses = (myid) => {
    fetch(BASE_URL + "api/Instructor/findCourse/" + myid)
      .then((c) => c.json())
      .then((c) => setinstcourse(c));
  };
  useEffect(() => {
    getinstCourses(id);
  }, [id]);
  // console.log(instcourse);
  return (
    <div>
      <Header/>
      <div className="instCourse">
        <div className="container">
          <div className="row d-flex">
            {instcourse?.courseList.map((ins) => (
              <div key={ins.courseId} className=" col-lg-4 col-xl-3 ">
                <div className="card-1">
                  <Link to={`/popular/` + ins.courseId}>
                    <img
                      className="img-fluid"
                      src={ins.photoUrl}
                      alt="ayuye-balasi"
                    />
                  </Link>
                  <div className="card-text">
                    <div className="card-tags">
                      <span>{ins.categoryName}</span>
                      <span>{ins.courseName}</span>
                    </div>
                    <h4>{ins.description}</h4>
                    <div className="card-ratings">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <span>{ins.reyting}()</span>
                    </div>
                    <span className="card-price">
                      <span className="old-price">${ins.price}</span>$
                      {ins.discount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default InstCourses;
