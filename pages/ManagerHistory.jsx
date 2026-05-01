import { useEffect } from "react";
import managerHistory from "../data/managerHistory";
import ManagerSeasonBox from "../components/ManagerSeasonBox";
import BackToTop from "../components/BackToTop";
import coachImg from "../assets/coach.png";

function createManagerAnchorId(name) {
  return `manager-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

function ManagerHistory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="manager-history-page">
      <div className="manager-history-title-row">
        <img src={coachImg} alt="Fantasy football coach silhouette" />
        <h1>Manager History</h1>
      </div>
      <p>A season-by-season breakdown of each manager's performance.</p>
      <nav className="manager-history-nav" aria-label="Jump to manager">
        {managerHistory.map((manager) => (
          <a key={manager.id} href={`#${createManagerAnchorId(manager.manager)}`}>
            {manager.manager}
          </a>
        ))}
      </nav>
      <p className="manager-history-note">*🏆 indicates season champion</p>
      {managerHistory.map((manager) => (
        <ManagerSeasonBox
          key={manager.id}
          managerData={manager}
          sectionId={createManagerAnchorId(manager.manager)}
        />
      ))}
      <BackToTop />
    </main>
  );
}

export default ManagerHistory;