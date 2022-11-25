import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slider1 from "./imag1.avif";
import Slider2 from "./imag2.jpg";
import Slider3 from "./imag1.jpg";

const Slider = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      showIndicators={false}
      dynamicHeight="300px"
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1593938637471-cb705e42d533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA5fHxiYWxpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="slider1"
        />
        <aside className="legend">
          <h1>Coorg</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            tempora. Esse earum eos voluptatem, unde quis minima! Temporibus,
            recusandae! Sapiente quos impedit maxime sint dolore minus. Fugiat
            saepe, alias porro ducimus, quis animi repellat repudiandae rerum
            nulla vitae quis nemo velit in repellat corporis blanditiis
            doloribus facere.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1561648844-30a7c30ec7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHx0b3VyaXN0JTIwcGxhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="slider2"
        />
        <aside className="legend">
          <h1>Bangalore</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            tempora. Esse earum eos voluptatem, unde quis minima! Temporibus,
            recusandae! Sapiente quos impedit maxime sint dolore minus. Fugiat
            saepe, alias porro ducimus, quis animi repellat repudiandae rerum
            nulla vitae quis nemo velit in repellat corporis blanditiis
            doloribus facere.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider3} alt="slider3" />
        <aside className="legend">
          {" "}
          <h1>Mysore</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            tempora. Esse earum eos voluptatem, unde quis minima! Temporibus,
            recusandae! Sapiente quos impedit maxime sint dolore minus. Fugiat
            saepe, alias porro ducimus, quis animi repellat repudiandae rerum
            nulla vitae quis nemo velit in repellat corporis blanditiis
            doloribus facere.
          </p>
          <button>View More</button>
        </aside>
      </div>
    </Carousel>
  );
};

export default Slider;
