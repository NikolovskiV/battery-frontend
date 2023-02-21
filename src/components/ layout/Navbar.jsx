import React, { useContext ,useRef} from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Logo from "../../assets/images/logo.png";
import AuthContext from "../../context/AuthContext";
import SignOutBtn from "../auth/SignOutBtn";


export default function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const burger = useRef(null)
  
  const toggling=()=>{
    burger.current.classList.toggle(Styles.display_property)
    
    
  }
  const hidediv_signout_responsive=()=>{
    burger.current.classList.remove(Styles.display_property)
  }
  const hidediv=()=>{
    burger.current.classList.remove(Styles.display_property)
  }

  return (
    <>
    <div className={Styles.mob_wrapper} ref={burger}>
      <div className={Styles.mob_inner_container}>
      {loggedIn === false && (
        <div className={Styles.mainHeader_menu_wrapper_mob}  >
          <ul className={Styles.mainHeader_menu_mob}>
            <li className={Styles.mainHeader_item_mob} onClick={hidediv}>
              <Link className={Styles.mainHeader_link} to="/">
                Home
              </Link>
            </li>

            <li className={Styles.mainHeader_item_mob} onClick={hidediv_signout_responsive}>
              <Link className={Styles.mainHeader_link} to="/product">
                Products
              </Link>
            </li>
            <li className={Styles.mainHeader_item_mob} onClick={hidediv_signout_responsive}>
              <Link className={Styles.mainHeader_link} to="/">
                Our services
              </Link>
            </li>
            <li className={Styles.mainHeader_item_mob} onClick={hidediv}>
              <Link className={Styles.mainHeader_link} to="/">
                Contact us
              </Link>
            </li>
            <li className={Styles.mainHeader_item_mob} onClick={hidediv}>
              <Link className={Styles.mainHeader_link} to="/">
                About us
              </Link>
            </li>
            <li className={Styles.mainHeader_item_mob} onClick={hidediv}>
              <Link className={Styles.mainHeader_link} to="/login">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      )}
      {loggedIn === true && (
        <>
          <SignOutBtn />
        </>
      )}
      </div>
    
    </div>
    <div className={Styles.mainHeader}>
    
      <div className={Styles.mainHeader_icon} onClick={toggling}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={Styles.mainHeader_imgContainer}>
        <Link className={Styles.mainHeader_link} to="/">
          <img
            src={Logo}
            alt="Logo GPBM industry"
            className={Styles.mainHeader_img}
          />
        </Link>
      </div>
      {/* for Desktop  */}
      {loggedIn === false && (
        <div className={Styles.mainHeader_menu_wrapper}>
          <ul className={Styles.mainHeader_menu}>
            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/">
                Home
              </Link>
            </li>

            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/">
                Products
              </Link>
            </li>
            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/">
                Our services
              </Link>
            </li>
            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/">
                Contact us
              </Link>
            </li>
            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/">
                About us
              </Link>
            </li>
            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/login">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      )}
      {loggedIn === true && (
        <>
          <SignOutBtn />
        </>
      )}

      {/* for mobile */}
      
    </div>
    </>
  );
}
