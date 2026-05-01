function BackToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="back-to-top-wrap">
      <button type="button" className="back-to-top-button" onClick={handleClick}>
        Back to Top
      </button>
    </div>
  );
}

export default BackToTop;
