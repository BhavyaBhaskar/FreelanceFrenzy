/* eslint-disable no-unused-vars */
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { useState } from "react";
import Project from "./Pages/Project";
import Profile from "./Components/Profile";
import FreelancerProfile from "./Components/FreelancerProfile";
import Freelancer from "./Pages/Freelancer";
import Contact from "./Components/Contact";
import Client from "./Components/Client";
import ClientPage from "./Pages/ClientPage";
import LoginSignupPage from "./Components/LoginSignupPage";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [isLogin, setIsLogin] = useState(false);
  const user = "Freelancer";

  console.log(currentPage);
  return (
    <div style={{ backgroundColor: "white" }}>
      {!isLogin && <LoginSignupPage setIsLogin={setIsLogin} />}
      {isLogin && <Header setCurrentPage={setCurrentPage} user={user} />}
      {currentPage === "Home" && isLogin && <Home />}
      {currentPage === "Project" && isLogin && <Project />}
      {currentPage === "Freelancer" && isLogin && <Freelancer />}
      {currentPage === "Client" && isLogin && <ClientPage />}
      {currentPage === "Contact Us" && isLogin && <Contact />}
      {isLogin && <Footer />}
    </div>
  );
}

export default App;
