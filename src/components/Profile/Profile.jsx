import { Link } from "react-router-dom";
import routes from "../../config/routes";
import profile from "../../assests/images/profile.jpeg";

const Profile = () => {
  return (
    <div style={{ padding: "128px" }} className="bg-primary bg-opacity-25">
      <div className="row  slide-row">
        <div className="col-md text-slide">
          <p
            className="mx-lg-5 fs-2"
            style={{
              fontWeight: "600",
              fontSize: "10rem",
              fontFamily: "sans-serif",
            }}
            data-aos="fade-up-right"
          >
            {" "}
            Muhammad Zubair
          </p>
          <h1 className="mx-lg-5  fs-1 fw-bold" data-aos="fade-up-right">
            Frontend Developer
          </h1>
          <p className="mx-lg-5 fs-2" data-aos="fade-up-right">
            This is my so far progress in frontend development. <br />{" "}
          </p>
          <button
            className="btn btn-dark rounded-5 mx-lg-5 my-3"
            style={{
              minWidth: "140px",
              minHeight: "50px",
              fontWeight: "600",
              fontFamily: "sans-serif",
              background: "white",
              border: "2px solid black",
            }}
          >
            <Link to={routes.appDetail} style={{ color: "black" }}>
              Explore now
            </Link>
          </button>
        </div>
        <div className="col-md">
          {" "}
          <img
            src={profile}
            className="d-block slide-pix picture-slide"
            alt="..."
            style={{ width: "400px", height: "400px", borderRadius: "30px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
