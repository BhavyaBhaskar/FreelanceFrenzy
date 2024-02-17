import "./FreelancerMileStone.css";

function FreelancerMileStone() {
  return (
    <div>
      <header style={{ paddingBottom: "50px" }}>
        <h1>Milestone</h1>
      </header>
      <main>
        <section className="milestone" style={{ color: "black" }}>
          <h2 className="milestone" style={{ color: "black" }}>
            Milestone Progress
          </h2>
          <div className="progress">
            <div className="progress-bar" style={{ marginRight: "240px" }}>
              <p>70%</p>
            </div>
          </div>
          <ul className="checkpoints">
            <li>Phase 1: Research and Planning - 50%</li>
            <li>Phase 2: Development - 0%</li>
            <li>Phase 3: Testing - 0%</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default FreelancerMileStone;
