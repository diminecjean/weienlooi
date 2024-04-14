import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import "./flickity.css";

const flickityOptions = {
  initialIndex: 2,
};

type CarouselProps = {
  title: string;
  description: string;
  image: string;
};

function Carousel({ title, description, image }: CarouselProps) {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <div className="carousell-cell border-grey-700 rounded-lg p-8">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} />
      </div>
      <div className="carousell-cell border-grey-700 rounded-lg p-8">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} />
      </div>
      <div className="carousell-cell border-grey-700 rounded-lg p-8">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} />
      </div>
    </Flickity>
  );
}

export default Carousel;
