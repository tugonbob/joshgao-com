import { ScrollDiv } from "../components/commonComponents";
import {
  PortfolioTrackerCard,
  RealEstateDealFinderCard,
  RedditLaughsCard,
} from "../components/projectComponents/other";

export function OtherPage() {
  return (
    <ScrollDiv className="fade-in-2">
      <RedditLaughsCard />
      <PortfolioTrackerCard />
      <RealEstateDealFinderCard />
    </ScrollDiv>
  );
}
