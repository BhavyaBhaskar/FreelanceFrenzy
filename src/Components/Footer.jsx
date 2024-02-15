import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Freelancer Frenzy. All rights
          reserved.
        </p>
        <p className="text-center">
          Contact us:{" "}
          <a href="mailto:info@freelancerfrenzy.com">
            info@freelancerfrenzy.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
