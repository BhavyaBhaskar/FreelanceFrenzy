import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src="public\ShortLogo.jpg" style={{ width: "300px" }} />
        <h1 style={{ color: "white" }}>Welcome To Freelancing Frenzy</h1>
        <p style={{ color: "white" }}>
          Connect with freelancers and clients around the world
        </p>
        <button style={{ marginLeft: "38%", color: "black" }}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
