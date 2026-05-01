import { useEffect } from "react";
import RecordsPage from "../components/RecordsPage";
import BackToTop from "../components/BackToTop";
import "../styles/global.css";
import trophyImg from "../assets/trophy.png";

const recordSections = [
  { id: "best-regular-season-records", title: "Best Regular Season Records" },
  { id: "highest-score-in-a-game", title: "Highest Score In A Game" },
  { id: "lowest-score-in-a-game", title: "Lowest Score In A Game" },
  { id: "closest-game", title: "Closest Game" },
  { id: "biggest-blowout", title: "Biggest Blowout" },
  { id: "most-points-in-a-season", title: "Most Points Scored In A Season" },
  { id: "least-points-against-in-a-season", title: "Least Points Scored Against In A Season" },
];

const regularSeasonRecords = [
  { name: "Alex", record: "11-2", year: 2021 },
  { name: "Alex", record: "10-3", year: 2020 },
  { name: "Daniel", record: "10-3", year: 2023 },
  { name: "Jesse", record: "10-3", year: 2024 },
  { name: "6 tied", record: "9-4", year: "2020-current" },
];

const highestScoreInAGame = [
  { name: "Matt", points: 272.22, year: 2024 },
  { name: "Daniel", points: 264.29, year: 2025 },
  { name: "Jesse", points: 257.61, year: 2025},
  { name: "Matt", points: 255.74, year: 2024},
  { name: "Daniel", points: 254.16, year: 2024}
];

const lowestScoreInAGame = [
  { name: "Greg", points: 73.24, year: 2020 },
  { name: "Daniel", points: 89.64, year: 2021 },
  { name: "Mike", points: 98.54, year: 2023 },
  { name: "Mike", points: 98.82, year: 2022 },
  { name: "Jesse", points: 101.74, year: 2020 },
];

const closestGame = [
  { name: "Matt over Greg", points: 0.15, year: 2023 },
  { name: "Matt over Daniel", points: 0.21, year: 2025 },
  { name: "Erich over Matt", points: 1.37, year: 2023 },
  { name: "Greg over Daniel", points: 1.50, year: 2020 },
  { name: "Greg over Daniel", points: 1.66, year: 2021 },
];

const biggestBlowout = [
  { name: "Daniel over Jesse", points: 151.08, year: 2025 },
  { name: "Jesse over Alex", points: 119.62, year: 2025 },
  { name: "Erich over Mike", points: 114.04, year: 2022 },
  { name: "Josh over Daniel", points: 113.15, year: 2021 },
  { name: "Matt over Alex", points: 111.40, year: 2024 },
];

const mostPointsInASeason = [
    { name: "Daniel", points: 2573.87, year: 2025 },
    { name: "Daniel", points: 2484.25, year: 2023 },
    { name: "Mike", points: 2426.32, year: 2023 },
    { name: "Matt", points: 2371.20, year: 2024},
    { name: "Daniel", points: 2364.95, year: 2024 },
]

const leastPointsScoredAgainstInASeason = [
    { name: "Erich", points: 1932.46, year: 2022 },
    { name: "Alex", points: 2007.86, year: 2022 },
    { name: "Daniel", points: 2017.31, year: 2024 },
    { name: "Jesse", points: 2054.57, year: 2025 },
    { name: "Daniel", points: 2087.72, year: 2023 },
]


function Records() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="records-page">
      <section>
        <div className="records-title-row">
          <img src={trophyImg} alt="Fantasy football trophy" />
          <h1>League Records</h1>
        </div>
        <p>
          A collection of the top performances, worst luck, and biggest fantasy
          football numbers across league history. Started in 2020 on ESPN, before moving to Sleeper in 2023.
        </p>
      </section>
      <nav className="records-nav" aria-label="Jump to record section">
        {recordSections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.title}
          </a>
        ))}
      </nav>

            <section className="records-sections-wrap">
        <RecordsPage
          title="Best Regular Season Records"
          records={regularSeasonRecords}
          valueKey="record"
          valueLabel="Record"
          sectionId="best-regular-season-records"
        />
        <RecordsPage
          title="Highest Score In A Game"
          records={highestScoreInAGame}
          sectionId="highest-score-in-a-game"
        />
        <RecordsPage
          title="Lowest Score In A Game"
          records={lowestScoreInAGame}
          sectionId="lowest-score-in-a-game"
        />
    <RecordsPage title="Closest Game" records={closestGame} sectionId="closest-game" />
    <RecordsPage title="Biggest Blowout" records={biggestBlowout} sectionId="biggest-blowout" />
    <RecordsPage
          title="Most Points Scored In A Season"
          records={mostPointsInASeason}
          sectionId="most-points-in-a-season"
        />
        <RecordsPage
          title="Least Points Scored Against In A Season"
          records={leastPointsScoredAgainstInASeason}
          sectionId="least-points-against-in-a-season"
        />
      </section>
      <BackToTop />
    </main>
  );
}

export default Records;