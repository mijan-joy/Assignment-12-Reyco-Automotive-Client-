import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useUserOrders from "../../Hooks/useUserOrders";

const AboutMe = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useUserOrders([]);
  return (
    <div>
      <h3>
        Name : <span className="font-semibold"> {user?.displayName}</span>
      </h3>
      <h3>
        Email : <span className="font-semibold">{user?.email}</span>{" "}
      </h3>
      <h3>
        Total Order Placed:{" "}
        <span className="font-semibold">{orders?.length}</span>
      </h3>
    </div>
  );
};

export default AboutMe;