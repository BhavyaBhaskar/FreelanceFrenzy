/* eslint-disable react/no-unescaped-entities */
function FreelancerPortfolio() {
  return (
    <div style={{ marginBottom: "200px" }}>
      <header style={{ paddingBottom: "50px" }}>
        <h1>Portfolio</h1>
      </header>
      <main>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <div className="project-details">
              <h3>Website Redesign</h3>
              <p>
                Description of Project: Redesigned client's website to improve
                user experience and modernize the design.
              </p>
            </div>
          </div>
          <div className="project">
            <div className="project-details">
              <h3>Mobile App Development</h3>
              <p>
                Description of Project: Developed a mobile app for tracking
                fitness activities and providing workout routines
              </p>
            </div>
          </div>
          <div className="project">
            <div className="project-details">
              <h3>E-commerce Store Setup</h3>
              <p>
                Description of Project: Set up an e-commerce store for a client
                to sell their products online.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FreelancerPortfolio;
