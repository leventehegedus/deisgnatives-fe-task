import Image from "next/image";
import "./ImageBlock.scss";

interface ImageBlockProps {
  children: React.ReactNode;
  imgSrc: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ children, imgSrc }) => (
  <div className="img-block" style={{ backgroundImage: `url(${imgSrc})` }}>
    <div className="title-container">
      <div className="title">{children}</div>
      <button>
        <Image src="/arrow.svg" alt="Arrow" width={12} height={12} />
      </button>
    </div>
  </div>
);

export default ImageBlock;
