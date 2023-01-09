function Card({ myDetails }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={myDetails.picture?.large}
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">
            {myDetails.name?.first}- {myDetails.phone}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
