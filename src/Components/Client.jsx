/* eslint-disable react/prop-types */
import "./Client.css";

function Client({ setCurrentPage }) {
  return (
    <div className="bg">
      <header style={{ backgroundColor: "transparent" }}>
        <h1 style={{ color: "Red" }}>Welcome to Your Dashboard</h1>
      </header>
      <div className="dashboard">
        <section className="features">
          <h2 style={{ color: "white" }}>Features</h2>
          <div
            style={{ color: "white" }}
            className="feature"
            onClick={() => setCurrentPage("freelancerdiscovery")}
          >
            <h3 style={{ color: "white" }}>Freelancer Discovery</h3>
            <p>
              Browse through skilled freelancers and find the perfect match for
              your project.
            </p>
          </div>
          <div
            style={{ color: "white" }}
            className="feature"
            onClick={() => setCurrentPage("billingpayment")}
          >
            <a
              style={{ color: "white" }}
              href="Client\Billing and Payment Management\Payment.html"
            >
              <h3 style={{ color: "white" }}>Billing & Payment</h3>
            </a>
            <p>Your Billing and Payment Page .</p>
          </div>
          <div
            style={{ color: "white" }}
            className="feature"
            onClick={() => setCurrentPage("projectcreation")}
          >
            <h3 style={{ color: "white" }}>Project Creation </h3>
            <p>Your Billing and Payment Page .</p>
          </div>
          <div
            style={{ color: "white" }}
            className="feature"
            onClick={() => setCurrentPage("stone")}
          >
            <h3 style={{ color: "white" }}>Real Time Milestone Tracking </h3>
            <p>Your Billing and Payment Page .</p>
          </div>
          <div
            style={{ color: "white" }}
            className="feature"
            onClick={() => setCurrentPage("fileshare")}
          >
            <h3 style={{ color: "white" }}>
              File Sharing & Colaboration Tools
            </h3>
            <p>Your Billing and Payment Page .</p>
          </div>
          <div
            style={{ color: "white" }}
            className="feature"
            onClick={() => setCurrentPage("customersupport")}
          >
            <h3 style={{ color: "white" }}>Customer Support</h3>
            <p>Your Billing and Payment Page .</p>
          </div>
          <div
            style={{ color: "white" }}
            className="feature"
            onClick={() => setCurrentPage("contactus")}
          >
            <h3 style={{ color: "white" }}>Contact Us</h3>
            <p>Your Billing and Payment Page .</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Client;
