import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courseInfo }) => {
  return (
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="course-item">
        <Link to={`/course-details/${courseInfo.courseId}`}>
          <img
            class="img-fluid"
            src={courseInfo.photoUrl}
            alt="course-preview"
          />
          <div class="cbox-4-txt">
            {/* <p class="course-tags">
              <span>Languages</span>
              <span>English</span>
            </p> */}
            <h5 class="h5-xs">{courseInfo.courseName}</h5 >
            <div class="course-rating clearfix">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>{courseInfo.reyting}</span>
            </div>
            <span class="course-price">
              <span class="old-price">
                {courseInfo.discount > 0 ? (
                  <>
                    <del>{courseInfo.price} $</del> {" "}
                    <span>{courseInfo.discount} $</span> 
                  </>
                ) : (
                  <span>{courseInfo.price} $</span>
                )}
              </span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
