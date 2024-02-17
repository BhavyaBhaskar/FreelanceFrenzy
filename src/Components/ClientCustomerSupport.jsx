function ClientCustomerSupport() {
  return (
    <div>
      <header style={{ paddingBottom: "50px" }}>
        <h1>Customer Support</h1>
      </header>
      <div className="support-container" style={{ paddingLeft: "40px" }}>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, please fill out the form
          below.
        </p>

        <form action="#" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ClientCustomerSupport;
