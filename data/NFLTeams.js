export const nflTeams = [
    { name: "Buffalo Bills", division: "AFC East", winTotal: 10.5 },
    { name: "Miami Dolphins", division: "AFC East", winTotal: 3.5 },
    { name: "New England Patriots", division: "AFC East", winTotal: 9.5 },
    { name: "New York Jets", division: "AFC East", winTotal: 5.5 },
  
    { name: "Baltimore Ravens", division: "AFC North", winTotal: 11.5 },
    { name: "Cincinnati Bengals", division: "AFC North", winTotal: 10.5 },
    { name: "Cleveland Browns", division: "AFC North", winTotal: 5.5 },
    { name: "Pittsburgh Steelers", division: "AFC North", winTotal: 8.5 },
  
    { name: "Houston Texans", division: "AFC South", winTotal: 9.5 },
    { name: "Indianapolis Colts", division: "AFC South", winTotal: 7.5 },
    { name: "Jacksonville Jaguars", division: "AFC South", winTotal: 8.5 },
    { name: "Tennessee Titans", division: "AFC South", winTotal: 6.5 },
  
    { name: "Denver Broncos", division: "AFC West", winTotal: 9.5 },
    { name: "Kansas City Chiefs", division: "AFC West", winTotal: 10.5 },
    { name: "Las Vegas Raiders", division: "AFC West", winTotal: 6.5 },
    { name: "Los Angeles Chargers", division: "AFC West", winTotal: 9.5 },
  
    { name: "Dallas Cowboys", division: "NFC East", winTotal: 9.5 },
    { name: "New York Giants", division: "NFC East", winTotal: 7.5 },
    { name: "Philadelphia Eagles", division: "NFC East", winTotal: 10.5 },
    { name: "Washington Commanders", division: "NFC East", winTotal: 7.5 },
  
    { name: "Chicago Bears", division: "NFC North", winTotal: 9.5 },
    { name: "Detroit Lions", division: "NFC North", winTotal: 10.5 },
    { name: "Green Bay Packers", division: "NFC North", winTotal: 9.5 },
    { name: "Minnesota Vikings", division: "NFC North", winTotal: 8.5 },
  
    { name: "Atlanta Falcons", division: "NFC South", winTotal: 7.5 },
    { name: "Carolina Panthers", division: "NFC South", winTotal: 7.5 },
    { name: "New Orleans Saints", division: "NFC South", winTotal: 7.5 },
    { name: "Tampa Bay Buccaneers", division: "NFC South", winTotal: 8.5 },
  
    { name: "Arizona Cardinals", division: "NFC West", winTotal: 3.5 },
    { name: "Los Angeles Rams", division: "NFC West", winTotal: 11.5 },
    { name: "San Francisco 49ers", division: "NFC West", winTotal: 10.5 },
    { name: "Seattle Seahawks", division: "NFC West", winTotal: 10.5 },
  ];

export const winTotalsSource = {
  sportsbook: "BetMGM",
  updated: "August 17, 2026",
};

export const awardOptionsSource = {
  updated: "August 20, 2026",
  note: "Suggested choices are the eight shortest available odds for each market. Write-in picks are always allowed.",
};

export const awardOptions = {
  "MVP": [
    { name: "Josh Allen", odds: "+650" },
    { name: "Lamar Jackson", odds: "+850" },
    { name: "Joe Burrow", odds: "+900" },
    { name: "Justin Herbert", odds: "+1000" },
    { name: "Drake Maye", odds: "+1100" },
    { name: "Matthew Stafford", odds: "+1200" },
    { name: "Patrick Mahomes", odds: "+1200" },
    { name: "Dak Prescott", odds: "+1400" },
  ],
  "Coach of the Year": [
    { name: "John Harbaugh", odds: "+600" },
    { name: "Jesse Minter", odds: "+900" },
    { name: "Robert Saleh", odds: "+1000" },
    { name: "Kellen Moore", odds: "+1200" },
    { name: "Joe Brady", odds: "+1400" },
    { name: "Todd Monken", odds: "+1400" },
    { name: "Mike McCarthy", odds: "+1600" },
    { name: "Kevin Stefanski", odds: "+1900" },
  ],
  "Offensive Player of the Year": [
    { name: "Jahmyr Gibbs", odds: "+650" },
    { name: "Bijan Robinson", odds: "+900" },
    { name: "Ja'Marr Chase", odds: "+1000" },
    { name: "Puka Nacua", odds: "+1200" },
    { name: "Christian McCaffrey", odds: "+1500" },
    { name: "Justin Jefferson", odds: "+1500" },
    { name: "CeeDee Lamb", odds: "+1800" },
    { name: "Amon-Ra St. Brown", odds: "+1800" },
  ],
  "Defensive Player of the Year": [
    { name: "Myles Garrett", odds: "+400" },
    { name: "Will Anderson Jr.", odds: "+700" },
    { name: "Aidan Hutchinson", odds: "+900" },
    { name: "Maxx Crosby", odds: "+1100" },
    { name: "Nik Bonitto", odds: "+1400" },
    { name: "T.J. Watt", odds: "+1800" },
    { name: "Nick Bosa", odds: "+2000" },
    { name: "Brian Burns", odds: "+2500" },
  ],
  "Offensive Rookie of the Year": [
    { name: "Jeremiyah Love", odds: "+475" },
    { name: "Fernando Mendoza", odds: "+550" },
    { name: "Carnell Tate", odds: "+550" },
    { name: "Makai Lemon", odds: "+1400" },
    { name: "De'Zhaun Stribling", odds: "+1500" },
    { name: "KC Concepcion", odds: "+2000" },
    { name: "Ja'Kobi Lane", odds: "+2200" },
    { name: "Carson Beck", odds: "+2500" },
  ],
  "Defensive Rookie of the Year": [
    { name: "Rueben Bain Jr.", odds: "+475" },
    { name: "David Bailey", odds: "+500" },
    { name: "Sonny Styles", odds: "+750" },
    { name: "Caleb Downs", odds: "+750" },
    { name: "Arvell Reese", odds: "+800" },
    { name: "Mansoor Delane", odds: "+950" },
    { name: "Akheem Mesidor", odds: "+1300" },
    { name: "CJ Allen", odds: "+2000" },
  ],
  "First Coach Fired": [
    { name: "Dan Quinn", odds: "+300" },
    { name: "Todd Bowles", odds: "+350" },
    { name: "Aaron Glenn", odds: "+400" },
    { name: "Zac Taylor", odds: "+900" },
    { name: "Shane Steichen", odds: "+900" },
    { name: "Nick Sirianni", odds: "+1400" },
    { name: "Mike Vrabel", odds: "+1600" },
    { name: "Brian Schottenheimer", odds: "+1600" },
  ],
};