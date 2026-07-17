import Hero from "@/components/InvestorsPage/Hero/Hero";
import FinancialPerformance from "@/components/InvestorsPage/FinancialPerformance/FinancialPerformance";
import AnnualReports from "@/components/InvestorsPage/AnnualReports/AnnualReports";
import FinancialResults from "@/components/InvestorsPage/FinancialResults/FinancialResults";
// import CorporateGovernance from "@/components/InvestorsPage/CorporateGovernance/CorporateGovernance";
// import ShareholdingPattern from "@/components/InvestorsPage/ShareholdingPattern/ShareholdingPattern";
// import StockExchange from "@/components/InvestorsPage/StockExchange/StockExchange";
// import InvestorContact from "@/components/InvestorsPage/InvestorContact/InvestorContact";

export default function InvestorsPage() {
  return (
    <>
      <Hero />
      <FinancialPerformance />
      <AnnualReports />
      <FinancialResults />
      {/* <CorporateGovernance />
      <ShareholdingPattern />
      <StockExchange />
      <InvestorContact /> */}
    </>
  );
}
