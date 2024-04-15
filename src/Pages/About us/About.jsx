import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <section>
      <Helmet>
        <title>About - IndusNet</title>
      </Helmet>
      <h2 className="text-3xl text-center mx-auto font-bold py-6 my-3 rounded-2xl bg-[#1313130D]">
        About Us
      </h2>
      <img
        src="https://i.ibb.co/SyGW99f/architecture-2605057-1920.jpg"
        alt=""
        className="h-[500px] w-full"
      />
      <div className="flex justify-center items-center my-6">
        <div className="bg-white px-4 py-4 md:px-10 md:py-6">
          <h1 className="text-5xl font-bold mb-8">Welcome to IndusNet</h1>
          <p>
            At IndusNet, we are more than just a provider of industrial
            solutions we are the architects of transformation. With a rich
            heritage rooted in innovation and a steadfast commitment to
            excellence, we stand at the forefront of the industry, driving
            progress and redefining standards. Our journey is fueled by a
            passion for empowering businesses with the tools they need to thrive
            in an ever-evolving landscape. From pioneering technologies to agile
            methodologies, we leverage our expertise to unlock new possibilities
            and propel organizations towards success. At IndusNet, we dont just
            adapt to change we embrace it, harnessing its potential to build a
            brighter future for our clients and partners alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
