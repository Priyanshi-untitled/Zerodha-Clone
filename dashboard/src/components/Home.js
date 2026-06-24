import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { GeneralContext } from "../context/GeneralContext";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL || "http://localhost:3000/login";

const Home = () => {
  const [isChecking, setIsChecking] = useState(true);
  const { setUser } = useContext(GeneralContext);

  useEffect(() => {
    axios
      .get(`${API_URL}/verify`, { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          setUser(res.data.user);
          setIsChecking(false);
        } else {
          window.location.href = LOGIN_URL;
        }
      })
      .catch(() => {
        window.location.href = LOGIN_URL;
      });
  }, [setUser]);

  if (isChecking) {
    return <h3 style={{ textAlign: "center", marginTop: "50px" }}>Checking login...</h3>;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;