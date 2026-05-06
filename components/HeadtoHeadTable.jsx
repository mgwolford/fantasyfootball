function HeadToHeadTable({ owner, records, sectionId }) {
    return (
      <section id={sectionId} className="head-to-head-section">
        <h2>{owner} vs</h2>
  
        <table className="head-to-head-table">
          <thead>
            <tr>
              <th>Opponent</th>
              <th>Record</th>
              <th>Win %</th>
              <th>Games</th>
            </tr>
          </thead>
  
          <tbody>
            {records.map((record) => {
              const games = record.wins + record.losses;
  
              const winPercentage = (
                (record.wins / games) *
                100
              ).toFixed(1);
  
              return (
                <tr key={record.opponent}>
                  <td>{record.opponent}</td>
  
                  <td>
                    {record.wins}-{record.losses}
                  </td>
  
                  <td>{winPercentage}%</td>
  
                  <td>{games}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
  
  export default HeadToHeadTable;