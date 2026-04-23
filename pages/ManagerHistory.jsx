import { useEffect } from "react";
import managerHistory from "../data/managerHistory";
import ManagerSeasonBox from "../components/ManagerSeasonBox";

function createManagerAnchorId(name) {
  return `manager-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

function ManagerHistory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="manager-history-page">
    
      <h1>Manager History</h1>
      <p>A season-by-season breakdown of each manager's performance.</p>
      <p className="manager-history-note">*🏆 indicates season champion</p>
      <nav className="manager-history-nav" aria-label="Jump to manager">
        {managerHistory.map((manager) => (
          <a key={manager.id} href={`#${createManagerAnchorId(manager.manager)}`}>
            {manager.manager}
          </a>
        ))}
      </nav>      
      {managerHistory.map((manager) => (
        <ManagerSeasonBox
          key={manager.id}
          managerData={manager}
          sectionId={createManagerAnchorId(manager.manager)}
        />
      ))}
    </main>
  );
}

export default ManagerHistory;