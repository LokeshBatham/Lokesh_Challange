import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home-head">Welcome to Food's Kitchen</h1>

      <Link to="/menu" className=" home-btn">
        GO TO MENU{""}
      </Link>
    </div>
  );
}

export default Home;
