import managers from "../data/managers";
import ManagerCard from "./ManagerCard";
import { Link } from "react-router-dom";

function Managers() {
  return (
    <section className="managers-section">
      <h2>Managers</h2>

      <div className="manager-box">
        <div className="manager-header">
          <div>Manager</div>
          <div>Titles Won</div>
          <div>Regular Season Record</div>
        </div>

        

        {managers.map((manager) => (
          <ManagerCard key={manager.id} manager={manager} />
        ))}
      </div>

      <p className="managers-history-link-wrap">
        <Link to="/manager-history" className="managers-history-link">
          View full manager history
        </Link>
      </p>
    </section>
  );
}

export default Managers;
