import React from "react";
import { Link } from "react-router-dom";
import Styles from "./_admin.module.css";
import { AiOutlineDashboard } from "react-icons/ai";

const AdminSidebar = () => {
  return (
    <aside className={Styles.adminSidebar}>
      <nav>
        <Link to="/admin/dashboard">
          <span className={Styles.icons}>
            <AiOutlineDashboard />
          </span>
          <span className={Styles.content}>Dashboard</span>
        </Link>
      </nav>
      <main></main>
      <footer></footer>
    </aside>
  );
};

export default AdminSidebar;
