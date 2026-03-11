function Stars({ note }) {
  const rounded = Math.round(note);

  return (
    <div className="stars" aria-label={`Note ${note} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`bi ${star <= rounded ? "bi-star-fill" : "bi-star"} me-1`}
        ></i>
      ))}
      <span>{note}/5</span>
    </div>
  );
}

export default Stars;