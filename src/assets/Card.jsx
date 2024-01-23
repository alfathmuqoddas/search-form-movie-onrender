const Card = ({ title, year, overviewPart, poster, rating, btnRender }) => {
  return (
    <div className="card border-0 d-flex mb-3 flex-row">
      <div>
        <img
          className="rounded-4"
          src={poster}
          width="128"
          height="auto"
          loading="lazy"
        />
      </div>
      <div className="ps-4">
        <h5 className="card-title">
          {title} ({year})
        </h5>
        <p className="card-text fw-lighter">{overviewPart}</p>
        {btnRender}
        <h4>{rating}</h4>
      </div>
    </div>
  );
};

export default Card;
