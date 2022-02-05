import { Outlet } from "react-router-dom";

import "../App.css";

import Header from "../components/Header/Header";

function Home() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default Home;
