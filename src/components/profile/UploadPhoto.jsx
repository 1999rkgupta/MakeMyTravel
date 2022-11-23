import React from "react";
import Styles from "./_profile.module.css";

const UploadPhoto = () => {
  return (
    <section className={Styles.profilePhotoBlock}>
      <h1>Upload Profile Photo</h1>
      <article>
        <form>
          <div className="form-group">
            <label htmlFor="">Upload Photo</label>
            <input type="file" name="uploadPhoto" id="uploadPhoto" />
          </div>
          <div className="form-group">
            <button>upload</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default UploadPhoto;
