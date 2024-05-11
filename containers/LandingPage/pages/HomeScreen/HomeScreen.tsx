import Highlight from "./fragments/Highlight/Highlight";
import Banner from "./fragments/Banner/Banner";
import Promote from "./fragments/Promote/Promote";
import SecondaryNav from "./fragments/SecondaryNav/SecondaryNav";
import OurStores from "./fragments/OurStores/OurStores";
import OurPartners from "./fragments/OurPartners/OurPartners";

export default function HomeScreen() {
  return (
    <>
      <Banner />
      <Highlight />
      <Promote />
      <SecondaryNav />
      <OurStores />
      <OurPartners />
    </>
  );
}
