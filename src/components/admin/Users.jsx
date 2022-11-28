import React, { useEffect, useState } from "react";
import { db } from "../../Apis/firebase";
import { getDocs, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import Styles from "./_admin.module.css";
import { Link } from "react-router-dom";
import Spinner from "../../pages/Spinner";
import User from "./User";

const Users = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      let fetchUsers = async () => {
        let userCollectionRef = collection(db, "users");
        let userData = await getDocs(userCollectionRef);
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
    <div className={Styles.cardBody}>
      {users.map.length === 0 ? (
        <Spinner />
      ) : (
        users?.map(user => {
          return <User key={user.id} {...user} />;
        })
      )}
    </div>
  );
};

export default Users;
