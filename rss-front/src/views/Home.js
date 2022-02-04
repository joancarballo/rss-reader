import { Outlet } from "react-router-dom";

import "../App.css";

import Header from "../components/Header/Header";
import RssList from "../components/RssList/RssList";

function Home() {
  return (
    <div className="App">
      <Header />
      {/* <RssList /> */}
      <Outlet />
    </div>
  );
}

export default Home;
