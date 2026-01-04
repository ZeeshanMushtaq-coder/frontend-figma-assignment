import NavbarLogo from "./Components/Navbar/NavbarLogo";
import NavbarElements from "./Components/Navbar/NavbarElements";
import BgImage from "./Components/BgImage";
import CHISiamo from "./Components/CHISiamo";
import SIRE from "./Components/SIRE";
import Resistence from "./Components/Resistence";
import PercheSIRE from "./Components/PercheSIRE";
import Scegli from "./Components/Scegli";
import Connettiti from "./Components/Connettiti";
import Contact from "./Components/Contact/Contact";
import Subscribe from "./Components/Contact/Subscribe";
import Footer from "./Components/Footer/Footer";
import AskedQuestions from "./Components/AskedQuestions";

export default function App() {
  return (
    <div>
      <NavbarLogo />
      <NavbarElements />
      <BgImage />
      <CHISiamo />
      <SIRE />
      <Resistence />
      <PercheSIRE />
      <Scegli />
      <Connettiti />
      <AskedQuestions />
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}
