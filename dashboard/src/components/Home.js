import React, { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL || "http://localhost:3000/login";

const Home = () => {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/verify`, { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          setIsChecking(false);
        } else {
          window.location.href = LOGIN_URL;
        }
      })
      .catch(() => {
        window.location.href = LOGIN_URL;
      });
  }, []);

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