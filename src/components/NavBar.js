import React from "react";
import "../Style/NavBar.css"
function NavBar () {
    return (
    <nav class="navbar">
      <div id="trapezoid">
        <a class="sub-home" href="#">Home</a>
        <a href="#About" class="expandHome">Catagories</a>
        <a href="#About" class="expandHome">Products</a>
     <div class="subnav">
     <button class="subnavbtn">Auction<i class="fa fa-caret-down"></i></button>
    </div>
  
     
     
  </div>
</nav>

    )
}
export default NavBar;