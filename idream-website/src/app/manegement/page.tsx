import Hero from "@/components/ManagementPage/Hero/Hero";
import BoardOfDirectors from "@/components/ManagementPage/BoardOfDirectors/BoardOfDirectors";
import KeyManagerialPersonnel from "@/components/ManagementPage/KeyManagerialPersonnel/KeyManagerialPersonnel";
import SeniorLeadership from "@/components/ManagementPage/SeniorLeadership/SeniorLeadership";
import BoardCommittees from "@/components/ManagementPage/BoardCommittees/BoardCommittees";
import PoliciesAndCodes from "@/components/ManagementPage/PoliciesCodes/PoliciesCodes";
import InvestorInquiries from "@/components/ManagementPage/InvestorBoardInquiries/InvestorBoardInquiries";


export default function ManagementPage() {
  return (
    <main>
      <Hero />
      <BoardOfDirectors />
      <KeyManagerialPersonnel />
      <SeniorLeadership />
      <BoardCommittees />
      <PoliciesAndCodes />
      <InvestorInquiries />
    </main>
  );
}