import Banner from "./fragments/Banner/Banner";
import Maps from "./fragments/Maps/Maps";
import SupportInfo from "./fragments/SupportInfo/SupportInfo";

export default function Contact() {
  return (
    <article aria-label="Contato">
      <Banner />
      <SupportInfo />
      <Maps />
    </article>
  );
}
