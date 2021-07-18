import React, { useState } from "react";
import { Link } from "react-router-dom";

function SlideImage({ Title, ImageUrl, Subtitle }) {
  const [loaded, setLoaded] = useState(false);

  const slideContainerClass =
    "slide-container" + " " + (loaded ? "slide-container-loaded" : null);

  const slideImageClass =
    "slide-image" + " " + (loaded ? "slide-image-loaded" : null);

  return (
    <div key={Title} className={slideContainerClass}>
      <img
        className={slideImageClass}
        src={ImageUrl}
        onLoad={() => setLoaded(true)}
      />
      <div class="slide-content-wrapper">
        <div className="slide-content">
          <h1>{Title}</h1>
          <p>{Subtitle}</p>
          <Link to="/contact-us" className="buttonLink">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SlideImage;
