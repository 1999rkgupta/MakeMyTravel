import React from "react";
import Styles from "./_pages.module.css";

const SearchHotel = () => {
  return (
    <section id={Styles.searchHotel}>
      <article>
        <form>
          <div className="form-group">
            <input
              type="text"
              name=""
              id=""
              placeholder="Where are you going"
            />
          </div>
          <div className="form-group">
            <aside className={Styles.dateSearch}>
              <input type="text" name="" id="" placeholder="check-in" />
              <input type="text" name="" id="" placeholder="check-out" />
            </aside>
          </div>
          <div className="form-group">
            <select name="" id="">
              <option value="adults">Adults</option>
              <option value="children">Children</option>
              <option value="rooms">Rooms</option>
            </select>
          </div>
          <div className="form-group">
            <button>Search</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default SearchHotel;
