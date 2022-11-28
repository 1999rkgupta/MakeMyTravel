import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminMain from "./AdminMain";
import Styles from "./_admin.module.css";

const Admin = () => {
  return (
    <section id={Styles.adminPanel}>
      <article>
        <AdminSidebar />
        <AdminMain />
      </article>
    </section>
  );
};

export default Admin;
