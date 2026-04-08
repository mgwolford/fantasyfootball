import Header from "../componets/Header.jsx";
import DraftCoundown from "../componets/DraftCoundown.jsx";
import DraftOrder from "../componets/DraftOrder.jsx";
import Managers from "../componets/Managers.jsx";
import Keepers from "../componets/Keepers.jsx";
import RecordPreview from "../componets/RecordPreview.jsx";
import Footer from "../componets/Footer.jsx";


function Home() {
  return (
    <main>
      <Header />
      <DraftCoundown />
      <DraftOrder />
      <Managers />
      <Keepers />
      <RecordPreview />
      <Footer />
    </main>
  );
}

export default Home;