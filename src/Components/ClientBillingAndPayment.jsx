function ClientBillingAndPayment() {
  return (
    <div>
      <header>
        <h1>Billing & Payment</h1>
      </header>
      <form style={{ paddingLeft: "40px" }}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" placeholder="Amount" />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default ClientBillingAndPayment;
