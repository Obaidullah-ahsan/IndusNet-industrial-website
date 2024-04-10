import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <div className="text-center mx-auto md:max-w-3xl mb-10">
        <h2 className="text-4xl font-bold mb-4">Our Service</h2>
        <p className="">
          We specialize in providing a comprehensive range of industrial
          services tailored to meet your unique needs. From cutting-edge
          technological solutions to streamlined processes, our dedicated team
          ensures your operations thrive in today dynamic marketplace.
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 mb-12">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
