import records from "../data/records";
import RecordCard from "./RecordCard";
import { Link } from "react-router-dom";

function RecordPreview() {
  return (
    <section className="records-preview-section">
      <h2>Records Preview (Top Highlights)</h2>

      <div className="records-preview-box">
        <div className="records-preview-header-row">
          <div>Record</div>
          <div>Value</div>
          <div>Manager</div>
          <div>Year</div>
        </div>

        {records.map((record) => (
          <RecordCard key={record.id} record={record} />
        ))}
      </div>

      <p className="records-preview-link-wrap">
        <Link to="/records" className="records-preview-link">
          View full records page
        </Link>
      </p>
    </section>
  );
}

export default RecordPreview;
