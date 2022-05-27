// import { Image, Flex, Button, HStack, chakra } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./header.scss";
import Category from "../../category/Category";
import '../../category/Category.scss'
import Instructors from "../../instructors/Instructors";
import { useSelector } from "react-redux";
const Header = () => {
    const myReng = useSelector(state=>state.colorReducer)
   
  return (
    <header className={myReng.reng!=="#fff"?"active":""} id="header">
        <input type="text" />
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-2">
                    <div className="logo">
                        <img className="img-fluid" src="./image/logo.png" alt="" />
                    </div>
                </div>
                
                <div className="col-auto">
                <nav className="menu">
                    <ul className="d-flex list-unstyled m-0">
                    <li>
                            <Link to="#">About</Link>
                        </li>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                            <Category /> 
                        <li>
                                <Instructors /> 
                        </li>
                        <li>
                            <Link to="#">item 4</Link>
                        </li>
                        <li>
                            <Link to="#">item 5</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
                </div>
                
            </div>
        </div>
        
    </header>
  );
};

export default Header;
