import helmetImg from "../assets/helmet.png";

function Header() {
  return (
    <header className="header">
      <img src={helmetImg} alt="Super Wacky Fun Times Football Helmet" />
      <div className="header-text">
        <h1>Super Wacky Fun Times Fantasy Football League</h1>
        <p>The home for the Super Wacky Fun Times Fantasy Football League! See the managers, keepers, stats and records for the league. Located on <a href="https://sleeper.com/leagues/1182011896999837696/league" target="_blank" rel="noopener noreferrer">Sleeper</a>. In it's 7th season!</p>
      </div>
    </header>
  );
}

export default Header;