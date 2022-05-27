import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../confing/BaseURL";
import "./Footer.scss";
const Footer = () => {
  const [courses, setCourses] = useState([]);
  const getCourses = async () => {
    await fetch(BASE_URL + "api/Category/getall")
      .then((res) => res.json())
      .then((cs) => setCourses(cs));
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-xl-4 col-lg-5">
            <div className="footer-info">
              <img src="./image/logo.png" alt="" />
              <p>
                Aliquam orci a nullam tempor sapien gravida donec enim ipsum
                porta justo velna an auctor
              </p>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2">
            <div className="footer-links">
              <h5>Quick Links</h5>
              <ul className="foo-links">
                <li>
                  <a href="#">About eTreeks</a>
                </li>
                <li>
                  <a href="#">Courses Catalog</a>
                </li>
                <li>
                  <a href="#">Our Testimonials</a>
                </li>
                <li>
                  <a href="#">Premium Learning</a>
                </li>
                <li>
                  <a href="#">From the Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-3">
            <div className="footer-links">
              <h5>Popular Categories</h5>
              <ul className="foo-links">
                {courses.map((pop) => (
                  <li key={pop.categoryId}>
                    <a href="#">{pop.categoryName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-7 col-xl-3">
            <div className="footer-form">
              <h5>Stay in Touch</h5>
              <form noValidate="true" className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  autoComplete="off"
                  className="form-control"
                />
                <span>
                  <button className="btn btn-rose black-hover" type="submit">
                    Subscribe
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="row">
            <div className="col-lg-8">
              <ul className="list-unstyled">
                <li>
                  <p>© Copyright eTreeks 2020</p>
                </li>
                <li>
                    <button href="#">508.746.9892</button>
                </li>
                <li className="last-li">
                <p >
                    <a href="#">
                    hello@domain.com
                    </a>
                </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
                <ul className="social">
                    <li>
                    <i class="fab fa-facebook-f"></i>
                    </li>
                    <li>
                    <i class="fab fa-twitter"></i>
                    </li>
                    <li>
                    <i class="fab fa-google-plus-g"></i>
                    </li>
                    <li>
                    <i class="fab fa-tumblr"></i>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
