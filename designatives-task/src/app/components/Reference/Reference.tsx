import Image from "next/image";
import { IReference } from "@/app/types";
import "./Reference.scss";

interface ReferenceProps {
  reference: IReference;
}

const Reference: React.FC<ReferenceProps> = ({ reference }) => (
  <div className="reference-container" key={reference.title}>
    <img className="reference-img" src={reference.img} />
    <div className="reference-text">
      <div className="text-container">
        <div className="city">{reference.title}</div>
        <div className="text-title">{reference.description}</div>
      </div>
      <div className="arrow">
        <button>
          <Image src="/arrow.svg" alt="Arrow" width={14} height={14} />
        </button>
      </div>
    </div>
  </div>
);

export default Reference;
