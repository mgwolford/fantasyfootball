function RecordCard({ record }) {
  return (
    <div className="record-row">
      <div className="record-name">{record.title}</div>
      <div>{record.value}</div>
      <div>{record.holder}</div>
      <div>{record.year}</div>
    </div>
  );
}

export default RecordCard;
