import React, { useEffect } from "react";
import Login from "./components/login";
import Header from "./components/header";
import Footer from "./components/footer";
import { useHistory } from "react-router-dom";

export default function Unauthenticated() {
  const history = useHistory();
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      history.push("/dashboard");
    }
  }, [history]);
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}
