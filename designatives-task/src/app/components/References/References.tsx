import { IReference } from "@/app/types";
import Reference from "../Reference/Reference";
import "./References.scss";

const References: React.FC = () => {
  const references: IReference[] = [
    {
      title: "Budaörs",
      description: "Decathlon",
      img: "/ref_1.png",
    },
    {
      title: "Budaörs",
      description: "Decathlon",
      img: "/ref_2.png",
    },
    {
      title: "Budaörs",
      description: "Decathlon",
      img: "/ref_3.png",
    },
  ];

  return (
    <div className="references">
      <div className="title">Referenciák</div>
      <div className="slider">
        {references.map((ref: IReference, index) => (
          <Reference reference={ref} key={index} />
        ))}
      </div>
    </div>
  );
};

export default References;
