import { useState } from "react";
import "../styles/predictions.css";

import managers from "../data/managers";
import { nflTeams, winTotalsSource } from "../data/NFLTeams";
import { divisions, awardCategories } from "../data/predictionOptions";

function Predictions() {
  const lockDate = new Date("2026-09-09T17:00:00-04:00");
  const isLocked = new Date() > lockDate;

  const activeManagers = managers.filter((manager) => manager.active !== false);
  const submissionEndpoint = import.meta.env.VITE_PREDICTIONS_ENDPOINT;
  const afcTeams = nflTeams.filter((team) => team.division.startsWith("AFC"));
  const nfcTeams = nflTeams.filter((team) => team.division.startsWith("NFC"));
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

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

  function renderTeamOptions(teams) {
    return teams.map((team) => (
      <option key={team.name} value={team.name}>{team.name}</option>
    ));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (new Set(formData.afcWildCards).size !== 3) {
      setSubmissionStatus("error");
      setSubmissionMessage("Choose three different AFC Wild Card teams.");
      return;
    }

    if (new Set(formData.nfcWildCards).size !== 3) {
      setSubmissionStatus("error");
      setSubmissionMessage("Choose three different NFC Wild Card teams.");
      return;
    }

    if (![formData.afcChampion, formData.nfcChampion].includes(formData.superBowlWinner)) {
      setSubmissionStatus("error");
      setSubmissionMessage("The Super Bowl winner must be one of your conference champions.");
      return;
    }

    if (!submissionEndpoint) {
      setSubmissionStatus("error");
      setSubmissionMessage("Submission is not connected yet. Add the Google Sheets URL to VITE_PREDICTIONS_ENDPOINT.");
      return;
    }

    setSubmissionStatus("submitting");
    setSubmissionMessage("");

    try {
      const response = await fetch(submissionEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ...formData,
          season: 2026,
          winTotals: Object.fromEntries(
            nflTeams.map((team) => [team.name, {
              line: team.winTotal,
              pick: formData.winTotals[team.name],
            }])
          ),
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "The submission could not be saved.");
      }

      setSubmissionStatus("success");
      setSubmissionMessage("Your predictions have been saved. Good luck this season!");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSubmissionStatus("error");
      setSubmissionMessage(error.message || "Something went wrong. Please try again.");
    }
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
        {submissionStatus === "success" && (
          <p className="submission-message success" role="status">{submissionMessage}</p>
        )}
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
          <p className="odds-source">
            Win-total information from {winTotalsSource.sportsbook} is accurate as of {winTotalsSource.updated}.
          </p>

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
                  <select
                    value={formData.afcWildCards[index]}
                    onChange={(e) =>
                      updateWildCard("afcWildCards", index, e.target.value)
                    }
                    required
                  >
                    <option value="">Choose team</option>
                    {renderTeamOptions(afcTeams)}
                  </select>
                </label>
              ))}
            </div>

            <div>
              <h3>NFC Wild Cards</h3>

              {[0, 1, 2].map((index) => (
                <label key={`nfc-wild-card-${index}`}>
                  Wild Card {index + 1}
                  <select
                    value={formData.nfcWildCards[index]}
                    onChange={(e) =>
                      updateWildCard("nfcWildCards", index, e.target.value)
                    }
                    required
                  >
                    <option value="">Choose team</option>
                    {renderTeamOptions(nfcTeams)}
                  </select>
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
              <select
                value={formData.afcChampion}
                onChange={(e) =>
                  setFormData({ ...formData, afcChampion: e.target.value })
                }
                required
              >
                <option value="">Choose team</option>
                {renderTeamOptions(afcTeams)}
              </select>
            </label>

            <label>
              NFC Champion
              <select
                value={formData.nfcChampion}
                onChange={(e) =>
                  setFormData({ ...formData, nfcChampion: e.target.value })
                }
                required
              >
                <option value="">Choose team</option>
                {renderTeamOptions(nfcTeams)}
              </select>
            </label>

            <label>
              Super Bowl Winner
              <select
                value={formData.superBowlWinner}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    superBowlWinner: e.target.value,
                  })
                }
                required
              >
                <option value="">Choose champion</option>
                {[formData.afcChampion, formData.nfcChampion]
                  .filter(Boolean)
                  .map((team) => <option key={team} value={team}>{team}</option>)}
              </select>
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

        {submissionStatus === "error" && (
          <p className="submission-message error" role="alert">{submissionMessage}</p>
        )}

        <button
          className="submit-predictions"
          type="submit"
          disabled={submissionStatus === "submitting" || submissionStatus === "success"}
        >
          {submissionStatus === "submitting" ? "Saving Predictions..." : "Submit Predictions"}
        </button>
      </form>
    </main>
  );
}

export default Predictions;