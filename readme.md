# Fantasy Football League Hub

A custom-built web application for tracking league history, draft details, and key statistics for a fantasy football league.

## Site

Visit site: <a href="https://mgwolford.github.io/fantasyfootball/" target="_blank" rel="noopener noreferrer">mgwolford.github.io/fantasyfootball</a>

## Overview

This site serves as a central hub for league information, combining draft details, historical records, and manager performance into a structured and accessible interface.

The project is built using React, with a focus on reusable components, organized data handling, and responsive design.

## Current Features

### Homepage

The main landing page includes the following sections:

* **Header / Intro**

  * Overview of the league and purpose of the site

* **Draft Countdown**

  * Live countdown timer to draft day
  * Updates in real time

* **Draft Order**

  * Responsive draft order layout
  * Mobile-friendly stacked view
  * Desktop grid view

* **Managers**

  * All-time records for each manager
  * Includes championships, overall record, and playoff appearances

* **Keepers**

  * Current season keeper selections (two per manager)

* **Record Preview**

  * Snapshot of key league records, including:

    * Highest score
    * Lowest score
    * Closest game
    * Biggest blowout

## Tech Stack

* React (component-based architecture)
* JavaScript (ES6+)
* HTML5
* CSS3 (custom styling and responsive design)

## Project Structure

```
src/
├── components/
├── data/
├── pages/
├── styles/
├── App.jsx
└── main.jsx
```

The application is structured to separate:

* Data (league statistics and records)
* Components (reusable UI elements)
* Pages (layout and structure)
* Styles (global and section-specific styling)

## Development Focus

This project emphasizes:

* Component reusability
* Mapping structured data into UI components
* Responsive, mobile-first design
* Practical application of core React concepts

## Coming Soon

Planned features include:

* Full records page with expanded stat categories
* Manager profile pages with detailed history
* Playoff statistics and performance tracking
