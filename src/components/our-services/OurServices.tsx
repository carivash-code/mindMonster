import { ServiceType } from "../../Types/ServicesType"
import './OurServices.scss'

export const OurServices = (service: ServiceType) => {
  const {title, subtitle, services, servicesDescription} = service;

  return(
    <div className="Title__lg__and__description service-page">
      <div className="container-service">
        <div className="title-page">
          <div className="title">
            <h1>
              <span>
                <strong>
                  Our 
                </strong>
              </span>
              <span>
                {' ' + title}
              </span>
            </h1>
          </div>
          <h2>{subtitle}</h2>
        </div>

        <div className="table-services">
        {
          services.map((res, index) => (
            <a className="card" href="#!">
              <div className="item-table front">
                <h5>
                  <span>
                  <strong>{res.title}</strong>
                  </span>
                </h5>
                <h5>
                <span>{res.subtitle}</span>
                </h5>
              </div>
              <div className="item-table back">
                <div>
                  <span>{servicesDescription[index].text}</span>
                </div>
              </div>
          </a>
          ))
        }
        </div>
      </div>
    </div>
  );
}