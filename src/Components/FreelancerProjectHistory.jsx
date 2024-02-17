function FreelancerProjectHistory() {
  return (
    <div>
      <header style={{ paddingBottom: "50px" }}>
        <h1>Project History</h1>
      </header>
      <main>
        <section className="project-history">
          <h2>Projects Completed</h2>
          <div className="project">
            <h3>Online Store Development</h3>
            <p>
              Developed an e-commerce platform for a clothing retailer, allowing
              customers to browse and purchase products online.
            </p>
            <p>Client: Fashion Forward Inc.</p>
            <p>Completion Date: January 2023</p>
          </div>
          <div className="project">
            <h3>Social Media Campaign Management</h3>
            <p>
              Managed social media marketing campaigns for a tech startup,
              increasing brand visibility and user engagement.
            </p>
            <p>Client: Tech Innovations Ltd.</p>
            <p>Completion Date: March 2023</p>
          </div>
          <div className="project">
            <h3>Website Redesign</h3>
            <p>
              Redesigned the website of a local restaurant to improve user
              experience and showcase their menu offerings.
            </p>
            <p>Client: TasteBuds Restaurant</p>
            <p>Completion Date: May 2023</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FreelancerProjectHistory;
