

const ServiceCard = ({service}) => {
    console.log(service);
    const {image,estate_title,id,segment_name,description,price,status,area,location,facilities}=service;
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default ServiceCard;