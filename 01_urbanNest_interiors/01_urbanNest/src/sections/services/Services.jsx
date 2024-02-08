import "./Services.css";
import SingleService from "./SingleService";

export default function Services() {
  return (
    <div className="servicesRoot">
      <div className="servicesContainer">
        <SingleService
          serviceName={"Design Consultations"}
          serviceDescription={
            "Collaborate with our experienced designers to create a customized plan for your space."
          }
        />
        <SingleService
          serviceName={"Space Planning"}
          serviceDescription={
            "Optimize your layout for functionality and flow."
          }
        />
        <SingleService
          serviceName={"Furniture Selection"}
          serviceDescription={
            "Let us curate the perfect pieces to reflect your style and budget."
          }
        />
        <SingleService
          serviceName={"Color and Material"}
          serviceDescription={
            "Receive expert advice on creating a cohesive design scheme."
          }
        />
        <SingleService
          serviceName={"Project Management"}
          serviceDescription={
            "Relax while we oversee every detail, ensuring a smooth process from start to finish."
          }
        />
      </div>
    </div>
  );
}
