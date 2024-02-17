function ClientProjectCreation() {
  return (
    <div>
      <div className="container">
        <header style={{ paddingBottom: "50px" }}>
          <h1>Upload Your Project</h1>
        </header>
        <form
          action="/submit-project"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="project-title">Project Title:</label>
            <input
              type="text"
              id="project-title"
              name="projectTitle"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="project-description">Project Description:</label>
            <textarea
              id="project-description"
              name="projectDescription"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="tech-stack">Tech Stacks:</label>
            <input type="text" id="tech-stack" name="techStack" required />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget:</label>
            <input type="number" id="budget" name="budget" required />
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline:</label>
            <input type="date" id="deadline" name="deadline" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact-name">Your Name:</label>
            <input type="text" id="contact-name" name="contactName" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Your Email:</label>
            <input
              type="email"
              id="contact-email"
              name="contactEmail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="project-category">Project Category:</label>
            <select id="project-category" name="projectCategory" required>
              <option value="">Select a category</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="project-duration">
              Project Duration (in days):
            </label>
            <input
              type="number"
              id="project-duration"
              name="projectDuration"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="additional-comments">Additional Comments:</label>
            <textarea
              id="additional-comments"
              name="additionalComments"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="project-file">Upload Project File:</label>
            <input
              type="file"
              id="project-file"
              name="projectFile"
              accept=".zip,.rar"
              required
            />
          </div>
          <button type="submit">Submit Project</button>
        </form>
      </div>
    </div>
  );
}

export default ClientProjectCreation;
