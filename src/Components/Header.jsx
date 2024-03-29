/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Header.css";

function Header({
  setCurrentPage,
  user,
  setFreelanceCurrentPage,
  setClientCurrentPage,
}) {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li onClick={() => setCurrentPage("Home")}>
            <h3>
              <a>Freelancing Frenzy</a>
            </h3>
          </li>
          <li onClick={() => setCurrentPage("Project")}>
            <h3>
              <a>Projects</a>
            </h3>
          </li>
          <li
            onClick={() => {
              setCurrentPage("Freelancer");
              setFreelanceCurrentPage("Profile");
            }}
          >
            <h3>
              <a>{user === "Freelancer" ? "Freelancer" : "Client"}</a>
            </h3>
          </li>
          <li
            onClick={() => {
              setCurrentPage("Client");
              setClientCurrentPage("Profile");
            }}
          >
            <h3>
              <a>{user !== "Freelancer" ? "Freelancer" : "Client"}</a>
            </h3>
          </li>
          <li>
            <h3>
              <a onClick={() => setCurrentPage("Contact Us")}>Contact Us</a>
            </h3>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
