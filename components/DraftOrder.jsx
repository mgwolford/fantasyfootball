function DraftOrder() {
  const draftOrder = [
    { pick: 1, name: "TBD" },
    { pick: 2, name: "TBD" },
    { pick: 3, name: "TBD" },
    { pick: 4, name: "TBD" },
    { pick: 5, name: "TBD" },
    { pick: 6, name: "TBD" },
    { pick: 7, name: "TBD" },
    { pick: 8, name: "TBD" },
  ];

  return (
    <section className="draft-order-section">
      <h2>Draft Order</h2>
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