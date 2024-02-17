/* eslint-disable react/prop-types */
import FreelancePaymentHistory from "../Components/FreelancePaymentHistory";
import FreelancerActiveProject from "../Components/FreelancerActiveProject";
// import FreelancerMileStone from "../Components/FreelancerMileStone";
import FreelancerProfile from "../Components/FreelancerProfile";
import FreelancerMileStone from "../Components/FreelancerMileStone";
import FreelancerFileSharing from "../Components/FreelancerFileSharing";
import FreelancerCommunication from "../Components/FreelancerCommunication";
import FreelancerProjectHistory from "../Components/FreelancerProjectHistory";
import FreelancerPortfolio from "../Components/FreelancerPortfolio";
import FreelancerFeedback from "../Components/FreelancerFeedback";

function Freelancer({ currentPage, setCurrentPage }) {
  return (
    <div>
      {currentPage === "Profile" && (
        <FreelancerProfile setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "Active" && <FreelancerActiveProject />}
      {currentPage === "Milestone" && <FreelancerMileStone />}
      {currentPage === "Payment" && <FreelancePaymentHistory />}
      {currentPage === "FileShare" && <FreelancerFileSharing />}
      {currentPage === "Communication" && <FreelancerCommunication />}
      {currentPage === "ProjectHistory" && <FreelancerProjectHistory />}
      {currentPage === "Portfolio" && <FreelancerPortfolio />}
      {currentPage === "Feedback" && <FreelancerFeedback />}
    </div>
  );
}

export default Freelancer;
