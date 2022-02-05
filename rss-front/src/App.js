import { BrowserRouter, Routes, Route } from "react-router-dom";
import RssList from "./components/RssList/RssList";
import RssItem from "./components/RssItem/RssItem";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<RssList />} />
          <Route path="/:title" element={<RssItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
