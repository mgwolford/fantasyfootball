function ManagerCard({ manager }) {
  return (
    <div className="manager-row">
      <div className="manager-name">{manager.manager}</div>
      <div>🏆 {manager.championships}</div>
      <div>{manager.overallRecord}</div>

    </div>
  );
}

export default ManagerCard;