import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../confing/BaseURL";

const Category = () => {
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    await fetch(BASE_URL + "api/Category/getall")
      .then((res) => res.json())
      .then((j) => setCategory(j));
  };
  
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <li className="main">

    <ul>
      {category.map((e) =>
          <li key={e.categoryId} className="category">
                 <Link to={`/courses/`+ e.categoryId}>{e.categoryName}</Link> 
          </li>
          )}
    </ul>
    <Link to="#"> Category</Link>

    </li>
  );
};

export default Category;
