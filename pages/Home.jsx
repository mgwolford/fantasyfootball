import Header from "../components/Layout/Header.jsx";
import DraftCoundown from "../components/Home/DraftCoundown.jsx";
import DraftOrder from "../components/Home/DraftOrder.jsx";
import Managers from "../components/Home/Managers.jsx";
import Keepers from "../components/Home/Keepers.jsx";
import RecordPreview from "../components/Home/RecordPreview.jsx";
import Footer from "../components/Layout/Footer.jsx";
import BackToTop from "../components/Layout/BackToTop.jsx";


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