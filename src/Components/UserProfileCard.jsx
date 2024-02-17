function UserProfileCard() {
  return (
    <>
      <h2 style={{ color: "white" }}>Top FreeLancers</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="user-profile" style={{ color: "white" }}>
          {/* <img src={user.profilePicture} alt={`${user.name}'s profile picture`} /> */}
          <h2>Mark Jonas</h2>
          {/* <p>Skills: {user.skills.join(", ")}</p> */}
          Skill: Blockchain Development , Quantum Computing
          <p>Experience: 12 Years </p>
          <p>
            {/* Portfolio: <a href={user.portfolio}>{user.portfolio}</a> */}
            Check my Portfolio Here
          </p>
        </div>
        <div className="user-profile" style={{ color: "white" }}>
          {/* <img src={user.profilePicture} alt={`${user.name}'s profile picture`} /> */}
          <h2>Marian Benjamin</h2>
          {/* <p>Skills: {user.skills.join(", ")}</p> */}
          Skill: Javascript Dev , Python , Data Science
          <p>Experience: 8 Years</p>
          <p>
            {/* Portfolio: <a href={user.portfolio}>{user.portfolio}</a> */}
            Check my Portfolio Here
          </p>
        </div>
        <div className="user-profile" style={{ color: "white" }}>
          {/* <img src={user.profilePicture} alt={`${user.name}'s profile picture`} /> */}
          <h2>Naman Sharma</h2>
          {/* <p>Skills: {user.skills.join(", ")}</p> */}
          Skill: Machine Learning , App Dev , AI
          <p>Experience: 10 Years</p>
          <p>
            {/* Portfolio: <a href={user.portfolio}>{user.portfolio}</a> */}
            Check my Portfolio Here
          </p>
        </div>
        <div className="user-profile" style={{ color: "white" }}>
          {/* <img src={user.profilePicture} alt={`${user.name}'s profile picture`} /> */}
          <h2>Leo wino</h2>
          {/* <p>Skills: {user.skills.join(", ")}</p> */}
          Skill: Data Science , App Dev , Blockchain Dev .
          <p>Experience: 5 Years</p>
          <p>
            {/* Portfolio: <a href={user.portfolio}>{user.portfolio}</a> */}
            Check my Portfolio Here
          </p>
        </div>
      </div>
    </>
  );
}

export default UserProfileCard;
