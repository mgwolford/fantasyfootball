import { useState } from "react";
import "../styles/predictions.css";

import managers from "../data/managers";
import { nflTeams } from "../data/NFLTeams";
import { divisions, awardCategories } from "../data/predictionOptions";

function Predictions() {
  const lockDate = new Date("2026-09-09T17:00:00-04:00");
  const isLocked = new Date() > lockDate;

  const activeManagers = managers.filter((manager) => manager.active !== false);

  const [formData, setFormData] = useState({
    manager: "",
    winTotals: {},
    divisionWinners: {},
    afcWildCards: ["", "", ""],
    nfcWildCards: ["", "", ""],
    afcChampion: "",
    nfcChampion: "",
    superBowlWinner: "",
    awards: {},
  });

  function updateField(section, key, value) {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  }

  function updateWildCard(conference, index, value) {
    setFormData((prev) => {
      const updated = [...prev[conference]];
      updated[index] = value;

      return {
        ...prev,
        [conference]: updated,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Prediction submission:", formData);
    alert("Predictions submitted. Google Sheets connection will be added next.");
  }

  if (isLocked) {
    return (
      <main className="predictions-page">
        <section className="predictions-hero">
          <h1>Season Predictions</h1>
          <p>Predictions are locked for the season.</p>
          <p className="lock-note">Locked on September 9 at 5:00 PM ET.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="predictions-page">
      <section className="predictions-hero">
        <h1>Season Predictions</h1>
        <p>
          Pick your NFL season predictions before the deadline. Predictions lock
          on September 9 at 5:00 PM ET.
        </p>
      </section>

      <form className="predictions-form" onSubmit={handleSubmit}>
        <section className="prediction-card">
          <h2>Manager</h2>

          <label>
            Select your name
            <select
              value={formData.manager}
              onChange={(e) =>
                setFormData({ ...formData, manager: e.target.value })
              }
              required
            >
              <option value="">Choose manager</option>

              {activeManagers.map((manager) => (
                <option key={manager.id} value={manager.manager}>
                  {manager.manager}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className="prediction-card">
          <h2>Over / Under Win Totals</h2>

          <div className="team-grid">
            {nflTeams.map((team) => (
              <div className="team-pick" key={team.name}>
                <div>
                  <strong>{team.name}</strong>
                  <span>{team.winTotal} wins</span>
                </div>

                <select
                  value={formData.winTotals[team.name] || ""}
                  onChange={(e) =>
                    updateField("winTotals", team.name, e.target.value)
                  }
                  required
                >
                  <option value="">Pick</option>
                  <option value="Over">Over</option>
                  <option value="Under">Under</option>
                </select>
              </div>
            ))}
          </div>
        </section>

        <section className="prediction-card">
          <h2>Division Winners</h2>

          <div className="division-grid">
            {divisions.map((division) => {
              const divisionTeams = nflTeams.filter(
                (team) => team.division === division
              );

              return (
                <label key={division}>
                  {division}
                  <select
                    value={formData.divisionWinners[division] || ""}
                    onChange={(e) =>
                      updateField("divisionWinners", division, e.target.value)
                    }
                    required
                  >
                    <option value="">Choose winner</option>

                    {divisionTeams.map((team) => (
                      <option key={team.name} value={team.name}>
                        {team.name}
                      </option>
                    ))}
                  </select>
                </label>
              );
            })}
          </div>
        </section>

        <section className="prediction-card">
          <h2>Wild Card Teams</h2>

          <div className="conference-grid">
            <div>
              <h3>AFC Wild Cards</h3>

              {[0, 1, 2].map((index) => (
                <label key={`afc-wild-card-${index}`}>
                  Wild Card {index + 1}
                  <input
                    type="text"
                    placeholder="Enter team name"
                    value={formData.afcWildCards[index]}
                    onChange={(e) =>
                      updateWildCard("afcWildCards", index, e.target.value)
                    }
                    required
                  />
                </label>
              ))}
            </div>

            <div>
              <h3>NFC Wild Cards</h3>

              {[0, 1, 2].map((index) => (
                <label key={`nfc-wild-card-${index}`}>
                  Wild Card {index + 1}
                  <input
                    type="text"
                    placeholder="Enter team name"
                    value={formData.nfcWildCards[index]}
                    onChange={(e) =>
                      updateWildCard("nfcWildCards", index, e.target.value)
                    }
                    required
                  />
                </label>
              ))}
            </div>
          </div>
        </section>

        <section className="prediction-card">
          <h2>Playoff Picks</h2>

          <div className="division-grid">
            <label>
              AFC Champion
              <input
                type="text"
                placeholder="Enter team name"
                value={formData.afcChampion}
                onChange={(e) =>
                  setFormData({ ...formData, afcChampion: e.target.value })
                }
                required
              />
            </label>

            <label>
              NFC Champion
              <input
                type="text"
                placeholder="Enter team name"
                value={formData.nfcChampion}
                onChange={(e) =>
                  setFormData({ ...formData, nfcChampion: e.target.value })
                }
                required
              />
            </label>

            <label>
              Super Bowl Winner
              <input
                type="text"
                placeholder="Enter team name"
                value={formData.superBowlWinner}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    superBowlWinner: e.target.value,
                  })
                }
                required
              />
            </label>
          </div>
        </section>

        <section className="prediction-card">
          <h2>Awards</h2>

          <div className="division-grid">
            {awardCategories.map((award) => (
              <label key={award}>
                {award}
                <input
                  type="text"
                  placeholder="Enter player or coach"
                  value={formData.awards[award] || ""}
                  onChange={(e) =>
                    updateField("awards", award, e.target.value)
                  }
                  required
                />
              </label>
            ))}
          </div>
        </section>

        <button className="submit-predictions" type="submit">
          Submit Predictions
        </button>
      </form>
    </main>
  );
}

export default Predictions;