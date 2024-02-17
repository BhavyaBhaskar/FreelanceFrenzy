import "./FreelancerFileSharing.css";

function FreelancerFileSharing() {
  return (
    <div className="body" style={{ marginBottom: "200px" }}>
      <header style={{ paddingBottom: "20px" }}>
        <h1>File Sharing</h1>
      </header>
      <main>
        <section className="file-upload">
          <h2 style={{ color: "black" }}>Upload Files</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="file"
                name="files[]"
                multiple
                style={{ marginLeft: "60%" }}
              />
              <button type="submit" style={{ marginLeft: "85%" }}>
                Upload
              </button>
            </div>
          </form>
        </section>
        <section className="shared-files">
          <h2 style={{ color: "black" }}>Shared Files</h2>
          <ul>
            <li>Project Proposal.pdf</li>
            <li>Presentation Slides.pptx</li>
            <li>Design Mockup.sketch</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default FreelancerFileSharing;
