import { Helmet } from "react-helmet-async";

const Support = () => {
  return (
    <section>
      <Helmet>
        <title>Support/FAQ - IndusNet</title>
      </Helmet>
      <h2 className="text-3xl text-center mx-auto font-bold py-6 my-3 rounded-2xl bg-[#1313130D]">
        Support/FAQ
      </h2>
      <img
        src="https://i.ibb.co/SyGW99f/architecture-2605057-1920.jpg"
        alt=""
        className="h-52 md:h-[400px] w-full"
      />
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center">
            Get Answers: Common Inquiries
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What industries does IndusNet serve?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  IndusNet caters to a wide range of industries, including
                  manufacturing, automotive, aerospace, electronics, energy, and
                  more. Our solutions are tailored to meet the specific needs
                  and challenges of each industry we serve.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What types of products does IndusNet offer?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  IndusNet offers a diverse range of industrial products,
                  including machinery, equipment, components, tools, and
                  supplies. Our product catalog features high-quality products
                  from leading manufacturers to ensure reliability and
                  performance.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Does IndusNet provide technical support for its products?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Yes, IndusNet offers comprehensive technical support for all
                  of its products. Our team of knowledgeable experts is
                  available to assist with installation, troubleshooting,
                  maintenance, and any technical questions or issues you may
                  encounter.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What are the shipping options available for IndusNet products?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  IndusNet offers flexible shipping options to accommodate your
                  needs. We partner with trusted carriers to ensure safe and
                  timely delivery of your orders. Shipping options may vary
                  depending on your location and the size and weight of the
                  items being shipped.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How can I request a quote for a product?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  To request a quote for a product, simply navigate to the
                  product page on our website and click on the Request a Quote
                  button. Fill out the required information, including product
                  details and quantity, and our team will get back to you with a
                  customized quote as soon as possible.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Support;
