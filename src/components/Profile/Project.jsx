import React from 'react'
import Stars from '../common/Stars';
import appDetail from '../../constants/appDetail';
import { Link } from 'react-router-dom';
import PortfolioCard from '../common/PortfolioCard';
const Project = () => {
  return (
    <>
         <section className="page-section portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Projects
          </h2>

          <Stars color="dark" />

          <div className="row">
            {appDetail.map((item) => (
              <div className="col-md-4 col-lg-4 mb-5">
                <Link to={item.path}>
                  {" "}
                  <PortfolioCard
                    src={item.src}
                    style={{ width: "300px", height: "200px" }}
                    title={item.title}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
