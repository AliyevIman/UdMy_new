import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_URL } from "../confing/BaseURL";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const TopCategories = () => {
  const [Category, setCategory] = useState([]);
  const getCategory = async () => {
    await fetch(BASE_URL + "api/Category/getall")
      .then((c) => c.json())
      .then((c) => setCategory(c));
  };
  useEffect(()=>{
    getCategory();
  },[])
  return (
    <>
    <div className="col-lg-12">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {Category.map((cat) => (
          <SwiperSlide key={cat.categoryId} className="category-card">
            <div className="top-icon">
              <img className="img-fluid" src="./image/calculator.png" alt="" />
            </div>
            <div className="card-text">
              <h3>{cat.categoryName}</h3>
              {/* <p>{cat.lessons.name}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
    </>
  );
};

export default TopCategories;
