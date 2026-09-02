function DraftCountdown() {
  return (
    <section className="countdown-section">
      <button type="button" className="champion-callout" aria-label="Celebrate the 2025 champion">
        <span className="champion-content">
          <span className="champion-label">2025 Champion</span>
          <span className="champion-name">Daniel!</span>
        </span>
        <span className="champion-confetti" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
      </button>
    </section>
  );
}

export default DraftCountdown;