import Client from "../Components/Client";
import ClientBillingAndPayment from "../Components/ClientBillingAndPayment";
import ClientCustomerSupport from "../Components/ClientCustomerSupport";
import ClientDocumentShareToFreelancer from "../Components/ClientDocumentShareToFreelancer";
import ClientFeedBackRating from "../Components/ClientFeedBackRating";

function ClientPage() {
  return (
    <div style={{ height: "100%" }}>
      <Client />
      <ClientFeedBackRating />
      <ClientCustomerSupport />
      <ClientBillingAndPayment />
      <ClientDocumentShareToFreelancer />
    </div>
  );
}

export default ClientPage;
