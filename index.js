const element = (
  // Write your code here.
  <div className="mainContainer">
    <h1 className="heading">Congratulations</h1>
    <div className="profileContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="photo"
      />

      <p className="name">Kiran V</p>
      <p className="instituteName">
        vishnu institute of Computer education and Technology,
        <br />
        <p className="center">Bhimavaram</p>
      </p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
