function DraftOrder() {
  const draftOrder = [
    { pick: 1, name: "Matt" },
    { pick: 2, name: "Mike" },
    { pick: 3, name: "Sejla" },
    { pick: 4, name: "Erich" },
    { pick: 5, name: "Greg" },
    { pick: 6, name: "Jesse" },
    { pick: 7, name: "Alex" },
    { pick: 8, name: "Daniel" },
  ];

  return (
    <section className="draft-order-section">
      <h2>Draft Order 2026</h2>
      <p>The winner of the lower seed bracket from the previous season will choose their draft position first. All other will be chosen at random. Matt is the winner of the lower seed bracket from the previous season.</p>

      <div className="draft-order-box">
        {draftOrder.map((item) => (
          <div key={item.pick} className="draft-order-item">
            <div className="draft-pick">{item.pick}</div>
            <div className="draft-name">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DraftOrder;