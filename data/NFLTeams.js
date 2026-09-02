export const nflTeams = [
  { name: "Buffalo Bills", division: "AFC East", winTotal: 10.5 },
  { name: "New England Patriots", division: "AFC East", winTotal: 10.5 },
  { name: "New York Jets", division: "AFC East", winTotal: 5.5 },
  { name: "Miami Dolphins", division: "AFC East", winTotal: 4.5 },

  { name: "Baltimore Ravens", division: "AFC North", winTotal: 11.5 },
  { name: "Cincinnati Bengals", division: "AFC North", winTotal: 9.5 },
  { name: "Pittsburgh Steelers", division: "AFC North", winTotal: 8.5 },
  { name: "Cleveland Browns", division: "AFC North", winTotal: 5.5 },

  { name: "Houston Texans", division: "AFC South", winTotal: 9.5 },
  { name: "Jacksonville Jaguars", division: "AFC South", winTotal: 9.5 },
  { name: "Indianapolis Colts", division: "AFC South", winTotal: 7.5 },
  { name: "Tennessee Titans", division: "AFC South", winTotal: 6.5 },

  { name: "Kansas City Chiefs", division: "AFC West", winTotal: 10.5 },
  { name: "Los Angeles Chargers", division: "AFC West", winTotal: 10.5 },
  { name: "Denver Broncos", division: "AFC West", winTotal: 9.5 },
  { name: "Las Vegas Raiders", division: "AFC West", winTotal: 5.5 },
  
  { name: "Philadelphia Eagles", division: "NFC East", winTotal: 10.5 },
  { name: "Dallas Cowboys", division: "NFC East", winTotal: 9.5 },  
  { name: "Washington Commanders", division: "NFC East", winTotal: 7.5 },
  { name: "New York Giants", division: "NFC East", winTotal: 7.5 },
  
  { name: "Detroit Lions", division: "NFC North", winTotal: 10.5 },
  { name: "Chicago Bears", division: "NFC North", winTotal: 9.5 },
  { name: "Green Bay Packers", division: "NFC North", winTotal: 9.5 },
  { name: "Minnesota Vikings", division: "NFC North", winTotal: 8.5 },

  { name: "Tampa Bay Buccaneers", division: "NFC South", winTotal: 8.5 },
  { name: "Atlanta Falcons", division: "NFC South", winTotal: 7.5 },
  { name: "Carolina Panthers", division: "NFC South", winTotal: 7.5 },
  { name: "New Orleans Saints", division: "NFC South", winTotal: 7.5 },

  { name: "Los Angeles Rams", division: "NFC West", winTotal: 11.5 },
  { name: "San Francisco 49ers", division: "NFC West", winTotal: 10.5 },
  { name: "Seattle Seahawks", division: "NFC West", winTotal: 10.5 },
  { name: "Arizona Cardinals", division: "NFC West", winTotal: 3.5 },
];

export const winTotalsSource = {
  sportsbook: "BetMGM",
  updated: "September 1, 2026",
};

export const awardOptionsSource = {
  updated: "September 2, 2026",
  note: "Suggested choices are the eight shortest verified odds for each market. First Coach Fired uses BetOnline; other award markets use the latest cited sportsbook listings. Write-in picks are always allowed.",
};

export const awardOptions = {
  MVP: [
    { name: "Josh Allen (Bills)", odds: "+600" },
    { name: "Lamar Jackson (Ravens)", odds: "+800" },
    { name: "Joe Burrow (Bengals)", odds: "+850" },
    { name: "Patrick Mahomes (Chiefs)", odds: "+1000" },
    { name: "Justin Herbert (Chargers)", odds: "+1000" },
    { name: "Drake Maye (Patriots)", odds: "+1000" },
    { name: "Caleb Williams (Bears)", odds: "+1200" },
    { name: "Dak Prescott (Cowboys)", odds: "+1200" },
  ],

  "Coach of the Year": [
    { name: "John Harbaugh (Giants)", odds: "+600" },
    { name: "Jesse Minter (Ravens)", odds: "+1000" },
    { name: "Robert Saleh (Titans)", odds: "+1000" },
    { name: "Kellen Moore (Saints)", odds: "+1200" },
    { name: "Ben Johnson (Bears)", odds: "+1200" },
    { name: "Klint Kubiak (Raiders)", odds: "+1500" },
    { name: "Brian Schottenheimer (Cowboys)", odds: "+1500" },
    { name: "Todd Monken (Browns)", odds: "+1700" },
  ],

  "Offensive Player of the Year": [
    { name: "Jahmyr Gibbs (Lions)", odds: "+550" },
    { name: "Bijan Robinson (Falcons)", odds: "+900" },
    { name: "Ja'Marr Chase (Bengals)", odds: "+1000" },
    { name: "Puka Nacua (Rams)", odds: "+1300" },
    { name: "Justin Jefferson (Vikings)", odds: "+1400" },
    { name: "Christian McCaffrey (49ers)", odds: "+1700" },
    { name: "Saquon Barkley (Eagles)", odds: "+2000" },
    { name: "Jaxon Smith-Njigba (Seahawks)", odds: "+2000" },
  ],

  "Defensive Player of the Year": [
    { name: "Myles Garrett (Browns)", odds: "+450" },
    { name: "Will Anderson Jr. (Texans)", odds: "+700" },
    { name: "Aidan Hutchinson (Lions)", odds: "+850" },
    { name: "Maxx Crosby (Raiders)", odds: "+1200" },
    { name: "Nik Bonitto (Broncos)", odds: "+1200" },
    { name: "Nick Bosa (49ers)", odds: "+1800" },
    { name: "T.J. Watt (Steelers)", odds: "+2000" },
    { name: "Brian Burns (Giants)", odds: "+2000" },
  ],

  "Offensive Rookie of the Year": [
    { name: "Jeremiyah Love (Cardinals)", odds: "+425" },
    { name: "Fernando Mendoza (Raiders)", odds: "+550" },
    { name: "Carnell Tate (Titans)", odds: "+550" },
    { name: "Jordyn Tyson (Saints)", odds: "+600" },
    { name: "Jadarian Price (Seahawks)", odds: "+650" },
    { name: "Makai Lemon (Eagles)", odds: "+1100" },
    { name: "Carson Beck (Cardinals)", odds: "+2200" },
    { name: "KC Concepcion (Browns)", odds: "+2800" },
  ],

  "Defensive Rookie of the Year": [
    { name: "David Bailey (Jets)", odds: "+470" },
    { name: "Rueben Bain Jr. (Buccaneers)", odds: "+500" },
    { name: "Arvell Reese (Giants)", odds: "+700" },
    { name: "Sonny Styles (Commanders)", odds: "+850" },
    { name: "Caleb Downs (Cowboys)", odds: "+850" },
    { name: "Mansoor Delane (Chiefs)", odds: "+850" },
    { name: "Akheem Mesidor (Chargers)", odds: "+2000" },
    { name: "Dillon Thieneman (Bears)", odds: "+2000" },
  ],

  "First Coach Fired": [
    { name: "Dan Quinn (Commanders)", odds: "+200" },
    { name: "Todd Bowles (Buccaneers)", odds: "+350" },
    { name: "Aaron Glenn (Jets)", odds: "+400" },
    { name: "Zac Taylor (Bengals)", odds: "+900" },
    { name: "Shane Steichen (Colts)", odds: "+1000" },
    { name: "David Canales (Panthers)", odds: "+1000" },
    { name: "Nick Sirianni (Eagles)", odds: "+1400" },
    { name: "Brian Schottenheimer (Cowboys)", odds: "+1600" },
  ],
};