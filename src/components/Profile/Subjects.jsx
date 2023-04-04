import React from 'react'
import Stars from '../common/Stars';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';
import PortfolioCard from '../common/PortfolioCard';
import HTML from "../../assests/images/portfolio/HTML.jpeg";
import react from "../../assests/images/portfolio/react.jpeg";
import javaScript from "../../assests/images/portfolio/javaScript.jpeg";

const Subjects = () => {
  return (
    <>
      <section className="page-section portfolio" >
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Subjects
          </h2>

          <Stars color="dark" />

          <div className="row">
            <div className="col-md-4 col-lg-4 mb-5">
              <Link to={routes.subjects.reactjs}>
                {" "}
                <PortfolioCard src={react} />
              </Link>
            </div>
            <div className="col-md-4 col-lg-4 mb-5">
              <Link to={routes.subjects.javaScript}>
                {" "}
                <PortfolioCard src={javaScript}/>
              </Link>
            </div>
            <div className="col-md-4 col-lg-4 mb-5">
              <Link to={routes.subjects.html}>
                {" "}
                <PortfolioCard src={HTML} />
              </Link>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Subjects
