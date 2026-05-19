# Fantasy Football Site

A React-based fantasy football website built to track league history, manager records, and long-term statistics in a clean and organized interface. The project focuses on dynamic data rendering, reusable React components, and scalable page structure for expanding league history and records over time.

## Site

Visit site: <a href="https://mgwolford.github.io/swftleague/" target="_blank" rel="noopener noreferrer">mgwolford.github.io/swftleague</a>

---

# Features

- React-based front-end application
- Dynamic rendering using reusable components
- Draft countdown clock for league events
- Manager profile pages with season-by-season stats
- League records page
- Head-to-head matchup history page
- Responsive layout and modern UI structure
- Expandable architecture for future features

---

# Pages

## Home Page

The home page serves as the main hub of the site and introduces the fantasy football league.

### Features:
- League welcome/header section
- Draft countdown clock
- Draft order display
- Quick previews for managers, records, and keepers
- Navigation to all major pages

### Main Files:
- `Home.jsx`
- `Home.css`

---

## Managers Page

The managers section displays all fantasy football owners and their league history.

### Features:
- Overall records
- Championships
- Playoff appearances
- Manager cards or row layouts
- Links to detailed manager pages

### Main Files:
- `Managers.jsx`
- `Managers.css`
- `managers.js`

---

## Individual Manager Pages

Each manager has their own detailed profile page showing season-by-season performance.

### Features:
- Yearly records
- Best score
- Lowest score
- Playoff appearances
- Historical stats tables

### Main Files:
- `ManagerPage.jsx`
- `ManagerSeasonBox.jsx`
- `managerData.js`

---

## Records Page

The records page displays league-wide top performances and historical statistics.

### Features:
- Highest scores
- Lowest scores
- Biggest blowouts
- Closest games
- Most points scored
- Most points against
- Playoff records

### Main Files:
- `Records.jsx`
- `Records.css`
- `recordsData.js`

---

## Head-to-Head Page

The head-to-head page tracks each manager’s record against every other manager in league history.

### Features:
- Win-loss records versus each manager
- Winning percentages
- Total games played
- Organized comparison tables

### Example:
| Opponent | Record | Win % | Games Played |
|----------|--------|--------|---------------|
| Alex | 7-4 | .636 | 11 |
| Mike | 7-4 | .636 | 11 |
| Greg | 3-7 | .300 | 10 |

### Main Files:
- `HeadToHead.jsx`
- `headToHead.js`

---

# Countdown Clock

One of the main interactive features of the site is the live draft countdown clock.

### Features:
- Real-time countdown updates
- Tracks time until the fantasy football draft
- Built using React state and effects

### Main Files:
- `DraftCountdown.jsx`

---
