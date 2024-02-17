import "./FreelancePaymentHistory.css";

function FreelancePaymentHistory() {
  return (
    <div className="body">
      <header>
        <h1>Payment History</h1>
      </header>
      <main>
        <section className="payment-entries">
          <h2>Payment Entries</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Print Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>January 15, 2024</td>
                <td>₹100</td>
                <td>Completed</td>
                <td>
                  <button>
                    <span>Print</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>February 2, 2024</td>
                <td>₹75</td>
                <td>Pending</td>
                <td>
                  <button>
                    <span>Print</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>February 10, 2024</td>
                <td>₹150</td>
                <td>Completed</td>
                <td>
                  <button>
                    <span>Print</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default FreelancePaymentHistory;
