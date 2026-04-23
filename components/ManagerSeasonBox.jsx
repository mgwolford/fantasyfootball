function ManagerSeasonBox({ managerData, heading, description, sectionId }) {
    return (
      <section id={sectionId} className="manager-history-section">
        {heading && <h1>{heading}</h1>}
        {description && <p>{description}</p>}
        <h2>{managerData.manager}</h2>
  
        <div className="manager-history-box">
          <div className="manager-history-header">
            <div>Year</div>
            <div>Record</div>
            <div>Highest Score</div>
            <div>Lowest Score</div>
            <div>Playoffs</div>
          </div>
  
          {managerData.seasons.map((season) => (
            <div key={season.year} className="manager-history-row">
              <div>
                {season.year}
              </div>
              <div>{season.record}</div>
              <div>{season.highestScore}</div>
              <div>{season.lowestScore}</div>
              <div>{season.playoffs ? "Yes" : "No"} {season.leagueWinner ? "🏆" : ""}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default ManagerSeasonBox;