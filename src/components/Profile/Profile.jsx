import avataaars from "../../assests/images/portfolio/avataaars.svg";
import Stars from "../common/Stars";
const Profile = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column mb-5">
      <img className="masthead-avatar mb-5" src={avataaars} alt="..." />

      <h1 className="masthead-heading text-uppercase mb-0">
        Muhammad Zubair
      </h1>

      <Stars color="light" />

      <p className="masthead-subheading font-weight-light mb-0">
        Frontend Developer
      </p>
    </div>
  </header>
  );
};

export default Profile;
