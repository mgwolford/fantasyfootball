import { useEffect } from "react";
import HeadtoHeadTable from "../components/HeadtoHead/HeadtoHeadTable";
import { headToHead } from "../data/headtoHead";
import BackToTop from "../components/Layout/BackToTop";
import faceoffImg from "../assets/faceoff.png";
import "../styles/global.css";

function HeadtoHead() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ownerSections = Object.keys(headToHead).map((owner) => ({
    owner,
    id: `${owner.toLowerCase()}-h2h`,
  }));

  return (
    <main className="head-to-head-page">
      <section>
        <div className="head-to-head-title-row">
          <img src={faceoffImg} alt="Head-to-head faceoff" />
          <h1>Head-to-Head Records</h1>
        </div>
        <p className="head-to-head-subtitle">
          All-time head-to-head regular season records between league owners. 78 games thru 6 seasons. 
        </p>
      </section>

      <nav className="head-to-head-nav" aria-label="Jump to owner section">
        {ownerSections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.owner}
          </a>
        ))}
      </nav>

      <section className="head-to-head-sections-wrap">
        {ownerSections.map((section) => (
          <HeadtoHeadTable
            key={section.owner}
            sectionId={section.id}
            owner={section.owner}
            records={headToHead[section.owner]}
          />
        ))}
      </section>
      <BackToTop />
    </main>
  );
}

export default HeadtoHead;