/* eslint-disable react/prop-types */
import Client from "../Components/Client";
import ClientBillingAndPayment from "../Components/ClientBillingAndPayment";
import ClientCustomerSupport from "../Components/ClientCustomerSupport";
import ClientDocumentShareToFreelancer from "../Components/ClientDocumentShareToFreelancer";
import ClientFileSharing from "../Components/ClientFileSharing";
import ClientFreelancerDiscovery from "../Components/ClientFreelancerDiscovery";
import ClientMileStoneTraacking from "../Components/ClientMileStoneTraacking";
import ClientProjectCreation from "../Components/ClientProjectCreation";
import Contact from "../Components/Contact";

function ClientPage({ currentPage, setCurrentPage }) {
  console.log(currentPage);
  return (
    <div style={{ height: "100%" }}>
      {currentPage === "Profile" && <Client setCurrentPage={setCurrentPage} />}
      {currentPage === "customersupport" && <ClientCustomerSupport />}
      {currentPage === "billingpayment" && <ClientBillingAndPayment />}
      {currentPage === "documentshare" && <ClientDocumentShareToFreelancer />}
      {currentPage === "contactus" && <Contact />}
      {currentPage === "fileshare" && <ClientFileSharing />}
      {currentPage === "stone" && <ClientMileStoneTraacking />}
      {currentPage === "projectcreation" && <ClientProjectCreation />}
      {currentPage === "freelancerdiscovery" && <ClientFreelancerDiscovery />}
    </div>
  );
}

export default ClientPage;
