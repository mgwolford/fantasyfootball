import keepers from "../data/keepers";
import KeeperCard from "./KeeperCard";

function Keepers() {
  return (
    <section className="keepers-section">
      <h2>Keepers</h2>

      <div className="keeper-box">
        <div className="keeper-header">
          <div>Manager</div>
          <div>Keeper 1</div>
          <div>Keeper 2</div>
        </div>

        {keepers.map((keeper) => (
          <KeeperCard key={keeper.id} keeper={keeper} />
        ))}
      </div>
    </section>
  );
}

export default Keepers;
