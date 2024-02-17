/* eslint-disable react/prop-types */
import "./FreelancerProfile.css";

function FreelancerProfile({ setCurrentPage }) {
  return (
    <div className="bgg">
      <header>
        <h1>Freelancer Dashboard</h1>
        <div className="profile">
          <h2>Welcome, Freelancer Name</h2>
          <p>Current Wallet: $ 500</p>
        </div>
      </header>
      <main className="grid-container" style={{ marginBottom: "200px" }}>
        <section
          className="dashboard-section"
          onClick={() => setCurrentPage("Active")}
        >
          <h2>Active Projects</h2>
          <p>You are currently working on three active projects.</p>
        </section>
        <section
          className="dashboard-section"
          onClick={() => setCurrentPage("Milestone")}
        >
          <h2>Milestones</h2>
          <p>
            You have completed 2 out of 5 milestones in your current project.
          </p>
        </section>
        <section
          className="dashboard-section"
          onClick={() => setCurrentPage("FileShare")}
        >
          <h2>File Sharing</h2>
          <p>Share and manage project files with your clients efficiently.</p>
        </section>
        <section
          className="dashboard-section"
          onClick={() => setCurrentPage("Communication")}
        >
          <h2>Communication</h2>
          <p>
            Stay in touch with your clients and team members through seamless
            communication channels.
          </p>
        </section>
        <section
          className="dashboard-section"
          onClick={() => setCurrentPage("Payment")}
        >
          <h2>Payment History</h2>
          <p>
            View your complete payment history including earnings, withdrawals,
            and pending payments.
          </p>
        </section>
        <section
          className="dashboard-section"
          onClick={() => setCurrentPage("Feedback")}
        >
          <h2>Client Feedback</h2>
          <p>
            Receive valuable feedback from clients to improve your services and
            reputation.
          </p>
        </section>
        <section
          className="dashboard-section"
          onClick={() => setCurrentPage("Portfolio")}
        >
          <h2>Portfolio</h2>
          <p>
            Showcase your skills and completed projects to attract new clients.
          </p>
        </section>

        <section
          className="dashboard-section"
          onClick={() => setCurrentPage("ProjectHistory")}
        >
          <h2>Project History</h2>
          <p>
            Track your own previously done projects and the details of the
            clients
          </p>
        </section>
      </main>
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
    </div>
  );
}

export default FreelancerProfile;
