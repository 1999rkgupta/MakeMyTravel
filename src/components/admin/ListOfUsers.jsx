import React, { useEffect, useState } from "react";
import { db } from "../../Apis/firebase";
import { getDocs, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import Moment from "react-moment";
import Styles from "./_admin.module.css";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { Link } from "react-router-dom";

const ListOfUsers = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      let fetchUsers = async () => {
        let userCollectionRef = collection(db, "users");
        let userData = await getDocs(userCollectionRef);
        // console.log(userData);
        let payload = userData.docs.map(user => {
          return { ...user.data(), id: user.id };
        });
        setUsers(payload);
      };
      fetchUsers();
    } catch (error) {
      toast.error(error.code);
    }
  }, []);
  return (
    <div className={Styles.card}>
      <h2>
        <span>
          <AiOutlineUserSwitch />
        </span>
        &nbsp;Users
      </h2>
      <p>
        <span>total users </span>
        <span>{users.length > 0 && users.length}</span>
      </p>
      <p className={Styles.time}>
        <Moment format="D/MM/YYYY" withTitle>
          {new Date()}
        </Moment>
      </p>
      <p>
        <Link to="/admin/users">view more</Link>
      </p>
    </div>
  );
};

export default ListOfUsers;
