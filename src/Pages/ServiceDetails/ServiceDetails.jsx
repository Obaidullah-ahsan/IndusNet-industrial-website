import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { id } = useParams();
  const details = serviceDetails.find(
    (singleDetails) => singleDetails.id === id
  );
  const {
    image,
    estate_title,
    segment_name,
    facilities,
    description,
    price,
    status,
    area,
    location,
  } = details;
  return (
    <div>
      <Helmet>
        <title>Service Details - IndusNet</title>
      </Helmet>
      <div className="h-[450px] mx-5">
        <img className="h-full w-full rounded-xl" src={image} alt="" />
      </div>
      <div className="mx-6 my-6 px-4">
        <h2 className="text-3xl font-bold">{estate_title}</h2>
        <p className="mb-4 mt-2">
          <span className="font-bold">Description :</span> {description}
        </p>
        <p className="text-lg border-y font-bold py-2">{segment_name}</p>
        <p className="font-semibold mb-2 mt-4">Location : {location}</p>
        <p className="font-semibold mb-2">Area : {area}</p>
        <p className="font-semibold mb-2">Price : {price}</p>
        <p className="font-semibold mb-2">Status : {status}</p>
        <div className="flex gap-2">
          <p className="text-xl font-bold">Facilities : </p>
          <ul className="flex flex-col md:flex-row">
            {facilities.map((facilitie, idx) => (
              <li className="p-1 " key={idx}>
                <span className="bg-[#bcc8d2] rounded-lg text-[#4a6e8d] font-bold p-1">
                  #{facilitie}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
