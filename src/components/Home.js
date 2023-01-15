import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
 <div>
    <Link to={"/bse"} style={{ color: "white" }}> bse </Link>;
    <Link to={"/nse"} style={{ color: "white" }}> nse </Link>;
    <Link to={"/cipla"} style={{ color: "white" }}> cipla </Link>;
    <Link to={"/reliance"} style={{ color: "white" }}> reliance </Link>;
    <Link to={"/tatasteel"} style={{ color: "white" }}> tatasteel </Link>;
    <Link to={"/eichermot"} style={{ color: "white" }}> eichermot </Link>;
    <Link to={"/ashokley"} style={{ color: "white" }}> ashokley </Link>;
  </div>
  )
};

export default Home;
