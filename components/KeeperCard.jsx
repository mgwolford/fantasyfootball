function KeeperCard({ keeper }) {
  return (
    <div className="keeper-row">
      <div className="keeper-name">{keeper.manager}</div>
      <div>{keeper.keeperOne}</div>
      <div>{keeper.keeperTwo}</div>
    </div>
  );
}

export default KeeperCard;
