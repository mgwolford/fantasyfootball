import managers from "../data/managers";
import ManagerCard from "./ManagerCard";

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
    </section>
  );
}

export default Managers;
