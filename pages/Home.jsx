import Header from "../components/Header.jsx";
import DraftCoundown from "../components/DraftCoundown.jsx";
import DraftOrder from "../components/DraftOrder.jsx";
import Managers from "../components/Managers.jsx";
import Keepers from "../components/Keepers.jsx";
import RecordPreview from "../components/RecordPreview.jsx";
import Footer from "../components/Footer.jsx";
import BackToTop from "../components/BackToTop.jsx";


function Home() {
  return (
    <main>
      <Header />
      <DraftCoundown />
      <DraftOrder />
      <Managers />
      <Keepers />
      <RecordPreview />
      <BackToTop />
      <Footer />

    </main>
  );
}

export default Home;