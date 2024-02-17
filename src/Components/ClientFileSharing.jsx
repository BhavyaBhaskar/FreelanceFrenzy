function ClientFileSharing() {
  return (
    <div>
      <header style={{ paddingBottom: "50px" }}>
        <h1>Send Document to Freelancer</h1>
      </header>
      <div className="form-container">
        <form id="document-form">
          <div className="form-group">
            <label htmlFor="client-name">Client Name:</label>
            <input type="text" id="client-name" name="client-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="freelancer-name">Freelancer Name:</label>
            <input
              type="text"
              id="freelancer-name"
              name="freelancer-name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="document-description">Document Description:</label>
            <textarea
              id="document-description"
              name="document-description"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="select-date">Select Date:</label>
            <input type="date" id="select-date" name="select-date" required />
          </div>
          <div className="form-group">
            <label htmlFor="select-time">Select Time:</label>
            <input type="time" id="select-time" name="select-time" required />
          </div>
          <div className="form-group">
            <label htmlFor="file-upload">Upload File:</label>
            <input
              type="file"
              id="file-upload"
              name="file-upload"
              accept=".pdf, .doc, .docx"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ClientFileSharing;
