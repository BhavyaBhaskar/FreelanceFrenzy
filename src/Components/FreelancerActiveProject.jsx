/* eslint-disable react/no-unescaped-entities */
import "./FreelancerActiveProject.css";

function FreelancerActiveProject() {
  return (
    <div className="body" style={{ display: "flex", flexDirection: "column" }}>
      <header>
        <h1>Active Projects</h1>
      </header>
      <main className="body">
        <section className="project">
          <h2>Website Redesign</h2>
          <p>
            <strong>Client:</strong> XYZ Company
          </p>
          <p>
            <strong>Status:</strong> In Progress
          </p>
          <p>
            <strong>Description:</strong> Redesigning the company website to
            improve user experience and modernize the design.
          </p>
        </section>
        <section className="project">
          <h2>E-commerce App Development</h2>
          <p>
            <strong>Client:</strong> ABC Retail
          </p>
          <p>
            <strong>Status:</strong> Pending
          </p>
          <p>
            <strong>Description:</strong> Building a mobile app for ABC Retail
            to sell their products online and reach a wider audience.
          </p>
        </section>
        <section className="project">
          <h2>Content Writing for Blog</h2>
          <p>
            <strong>Client:</strong> Blogging Co.
          </p>
          <p>
            <strong>Status:</strong> Completed
          </p>
          <p>
            <strong>Description:</strong> Writing engaging and informative blog
            posts for Blogging Co.'s website on various topics.
          </p>
        </section>
        <section className="project">
          <h2>Content Creation for Travel Blog</h2>
          <p>
            <strong>Client:</strong> Wanderlust Adventures
          </p>
          <p>
            <strong>Status:</strong> Completed
          </p>
          <p>
            <strong>Description:</strong> Writing engaging travel articles and
            producing visually appealing content for Wanderlust Adventures' blog
            to inspire and inform travelers.
          </p>
        </section>
        <section className="project">
          <h2>E-commerce Website Development</h2>
          <p>
            <strong>Client:</strong> Fashion Boutique
          </p>
          <p>
            <strong>Status:</strong> In Progress
          </p>
          <p>
            <strong>Description:</strong> Building an e-commerce website for
            Fashion Boutique to showcase and sell their clothing and accessories
            online.
          </p>
        </section>
        <section className="project">
          <h2>Social Media Marketing Campaign</h2>
          <p>
            <strong>Client:</strong> Trendy Cafe
          </p>
          <p>
            <strong>Status:</strong> Pending Approval
          </p>
          <p>
            <strong>Description:</strong> Creating and executing a social media
            marketing campaign to promote Trendy Cafe's new menu items and
            increase customer engagement.
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

export default FreelancerActiveProject;
