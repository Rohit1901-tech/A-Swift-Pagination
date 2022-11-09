import { useState } from "react";
// import images from "./index";
import images from "./images";

// import img1 from "./logo192.png";
// import img2 from "./logo512.png";

export default function Size() {
  var [w, setW] = useState(window.innerWidth);
  var [h, setH] = useState(window.innerHeight);
  return (
    <>
    <div className="container">
    <div className="row">
    <div className="col-4">
    <img src={images.img1} style={{width:"100px",height:"100px"}} alt="" />
    </div>
    <div className="col-4">
    <h2>
        {w+" and "+h}
      </h2>
    </div>
    <div className="col-4">
    <img src={images.img2} style={{width:"100px",height:"100px"}} alt="" />
    </div>
    </div>
    </div>
    </>
  );
}
