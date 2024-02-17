import "./FreelancerCommunication.css";

/* eslint-disable react/no-unescaped-entities */
function FreelancerCommunication() {
  return (
    <div>
      <header style={{ paddingBottom: "50px" }}>
        <h1>Communication</h1>
      </header>
      <main>
        <section className="messages">
          <h2>Messages</h2>
          <ul>
            <li>
              <strong>User 1:</strong> Hi, how are you?
            </li>
            <li>
              <strong>User 2:</strong> I'm good, thanks!
            </li>
            <li>
              <strong>User 1:</strong> Any Updates on the project you were
              working on.
            </li>
            <li>
              <strong>User 2:</strong> Yes, I am done with the front-end part.
            </li>
          </ul>
        </section>
        <section className="message-input">
          <h2>Send a Message</h2>
          <form action="#" method="post">
            <textarea
              name="message"
              placeholder="Type your message here"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default FreelancerCommunication;
