import records from "../data/records";
import RecordCard from "./RecordCard";

function RecordPreview() {
  return (
    <section className="records-section">
      <h2>Record Preview</h2>

      <div className="record-box">
        <div className="record-header">
          <div>Record</div>
          <div>Value</div>
          <div>Holder</div>
          <div>Year</div>
        </div>

        {records.map((record) => (
          <RecordCard key={record.id} record={record} />
        ))}
      </div>
    </section>
  );
}

export default RecordPreview;
