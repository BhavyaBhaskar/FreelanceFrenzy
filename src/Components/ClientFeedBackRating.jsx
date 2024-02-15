/* eslint-disable react/no-unescaped-entities */
function ClientFeedBackRating() {
  return (
    <div>
      <header>
        <h1>Feedback & Rating</h1>
      </header>
      <div className="feedback-container" style={{ paddingLeft: "40px" }}>
        <h2>Provide Feedback and Rating</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>Freelancer's Name:</label>
          <br />
          <input
            type="text"
            id="freelancer-name"
            name="freelancer-name"
            required
          />

          <label>Rating:</label>
          <select id="rating" name="rating">
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          <label>Feedback:</label>
          <textarea id="feedback" name="feedback" rows="4" required></textarea>
          <br />
          <a
            href="Client\Feedback and Rating System\thankyou.html"
            className="button"
          >
            <button type="submit">Submit Feedback</button>
          </a>
        </form>
      </div>
    </div>
  );
}

export default ClientFeedBackRating;
