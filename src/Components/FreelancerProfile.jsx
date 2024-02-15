import "./FreelancerProfile.css";

function FreelancerProfile() {
  return (
    <div>
      <header style={{ backgroundColor: "white" }}>
        <h1 style={{ color: "Red" }}>Welcome to Your Dashboard</h1>
        <nav>
          <ul>
            <li>
              <a style={{ color: "black" }} href="#">
                Edit Profile
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="dashboard">
        <section className="features">
          <h2>Features</h2>
          <div className="feature">
            <h3>Project Discovery</h3>
            <p>
              Browse through Latest Projects and find the perfect match for you.
            </p>
          </div>
          <div className="feature">
            <a href="Client\Billing and Payment Management\Payment.html">
              <h3>Billing & Payment</h3>
            </a>
            <p>Your Billing and Payment Page .</p>
          </div>
          <div className="feature">
            <h3>Project Status </h3>
            <p>Your Billing and Payment Page .</p>
          </div>
          <div className="feature">
            <h3>Secure Messaging System </h3>
            <p>Your Billing and Payment Page .</p>
          </div>
          <div className="feature">
            <h3>Real Time Milestone Tracking </h3>
            <p>Your Billing and Payment Page .</p>
          </div>
          <div className="feature">
            <h3>File Sharing & Colaboration Tools</h3>
            <p>Your Billing and Payment Page .</p>
          </div>
          <div className="feature">
            <h3>Customer Support</h3>
            <p>Your Billing and Payment Page .</p>
          </div>
          <div className="feature">
            <h3>Contact Us</h3>
            <p>Your Billing and Payment Page .</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FreelancerProfile;
