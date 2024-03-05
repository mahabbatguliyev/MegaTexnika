import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Techniques from "./Pages/Techniques"
import Terms from "./Pages/Terms"
import Blog from "./Pages/Blog"
import NotFound from "./Pages/NotFound"
import Contact from "./Pages/Contact"
import Detail from "./Pages/Detail"
import './assets/css/reset.css'
import './assets/css/responsive.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/haqqımızda" element={<About />} />
        <Route path="/texnikalar" element={<Techniques />} />
        <Route path="/icarə şərtləri" element={<Terms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/əlaqə" element={<Contact />} />
        <Route path="/texnikalar/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
