import React from "react";
import Slider from "./sliders/Slider";
import Styles from "./_pages.module.css";
import SearchInput from './../components/hotelsandcity/SearchInput';
 
const Home = () => {
  return (
    <section id={Styles.pagesBlock}>
      <article>
        <Slider />
        <SearchInput />
      </article>
    </section>
  );
};

export default Home;
