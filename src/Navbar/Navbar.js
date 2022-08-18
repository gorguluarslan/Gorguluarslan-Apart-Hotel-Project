import React from "react";

import style from "../Navbar/Navbar.module.scss";
import Reservation from "../Reservation/Reservation";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <div>
        <img
          src="Img/Mylogo.png"
          alt=""
          className={style.Navbar__picture2}
        ></img>
        <img
          src="Img/Gorguluarslanhome.png"
          alt=""
          className={style.Navbar__picture1}
        ></img>
      </div>
      <div className={style.Navbar__Img}>{/* <img src={Img} /> */}</div>
      <div className={style.Reservation}>
        <div className={style.Navbar__Reservation}>
          <Reservation />
        </div>

        <div className={style.Navbar__DropdownMenu}>
          <DropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
