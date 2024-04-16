import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    image,
    estate_title,
    id,
    description,
    price,
    status,
    area,
    location,
  } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body px-5">
        <h2 className="card-title text-2xl font-bold">{estate_title}</h2>
        <p>{description}</p>
        <p>Location : {location}</p>
        <p>Area : {area}</p>
        <p>Price : {price}</p>
        <p>Status : {status}</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${id}`}>
            <button className="btn bg-[#587187] text-white">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
