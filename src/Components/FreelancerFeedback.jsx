function FreelancerFeedback() {
  return (
    <div>
      <header style={{ paddingBottom: "50px" }}>
        <h1>Client Feedback</h1>
      </header>
      <main>
        <section className="feedback-form">
          <h2>Submit Feedback</h2>
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default FreelancerFeedback;
