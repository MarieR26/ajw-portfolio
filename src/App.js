import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Partners from "./components/partners/Partners";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Sidebar />
      <Home />
      <About />
      <Services />
      <Experience />
      <Blog />
      <Partners />
      <Contact />
    </>
  );
}

export default App;
