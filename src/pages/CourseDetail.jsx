import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { BASE_URL } from "../confing/BaseURL";

const CourseDetail = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState(null);
  const getCourses = async (myid) => {
    await fetch(BASE_URL + "api/Course/" + myid)
      .then((cs) => cs.json())
      .then((cs) => setCourses(cs));
  };
  // console.log(courses);
  useEffect(() => {
    getCourses(id);
  }, [id]);
  return (
    <>
    <Header/>
    {courses ?(
      <h3>{courses.courseName}</h3>

    ):(<p>Loading</p>)}
    <Footer/>
    </>
  );
};

export default CourseDetail;