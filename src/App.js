import { Header, Footer, SingleProject } from "./Components";
import Home from "./Container/Home";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingleBlog from "./Components/SingleBlog/SingleBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/single_project" element={<SingleProject />} />
          <Route path="/single_blog" element={<SingleBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
