import { useState } from "react";

function ClientBillingAndPayment() {
  // const [isPaid, setIsPaid] = useState(false);
  return (
    <div className="container" style={{ marginBottom: "150px" }}>
      <h2>Payment Information</h2>

      <form id="paymentForm">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amountPaid"
          name="amount"
          placeholder="Enter Amount"
        />

        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="1234 5678 9012 3456"
        />

        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          placeholder="MM/YYYY"
        />

        <label htmlFor="cvv">CVV</label>
        <input type="number" id="cvv" name="cvv" placeholder="123" />

        <label htmlFor="name">Name on Card</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" />
      </form>

      <button onClick={() => setIsPaid(true)}>Pay Now</button>

      <div className="invoice">
        <h2>Invoice</h2>
        <div className="invoice-details">
          <p>
            <strong>Transaction ID:</strong> 1234567890
          </p>
          <p>
            <strong>Date:</strong> February 16, 2024
          </p>
          <p>
            <strong>Amount Paid:</strong> <span id="amount"></span>
          </p>
        </div>
        <table className="invoice-items">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Name</td>
              <td id="productAmount">10000</td>
            </tr>
          </tbody>
        </table>
        <div className="total">
          <p>
            <strong>Total:</strong> <span>10000</span>
          </p>
        </div>
      </div>
      <div className="button-container">
        <a className="button">Print Invoice</a>
      </div>
    </div>
  );
}

export default ClientBillingAndPayment;
