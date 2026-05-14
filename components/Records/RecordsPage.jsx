function RecordsPage({
    title,
    records,
    valueKey = "points",
    valueLabel = "Points",
    sectionId,
  }) {
    return (
      <div id={sectionId} className="records-section">
        <h2>{title}</h2>
  
        <div className="records-table">
          <div className="records-header">
            <div>Rank</div>
            <div>Name</div>
            <div>{valueLabel}</div>
            <div>Year</div>
          </div>
  
          {records.map((record, index) => (
            <div key={`${record.name}-${record.year}-${index}`} className="records-row">
              <div>{index + 1}</div>
              <div className="records-name">{record.name}</div>
              <div>{record[valueKey]}</div>
              <div>{record.year}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default RecordsPage;