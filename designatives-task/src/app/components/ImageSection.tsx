interface ImagesSectionProps {}

const ImagesSection: React.FC<ImagesSectionProps> = () => (
  <div className="images-container">
    <ImageBlock imgSrc="img_1.png">
      <p>Zöldfalaink</p>
      <p>felépítése</p>
    </ImageBlock>
    <ImageBlock imgSrc="img_2.png">
      <p>Mobil</p>
      <p>zöldfalaink</p>
    </ImageBlock>
    <ImageBlock imgSrc="img_3.png">
      <p>Zöldfalaink</p>
      <p>karbantartása</p>
    </ImageBlock>
  </div>
);

interface ImageBlockProps {
  children: React.ReactNode;
  imgSrc: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ children, imgSrc }) => (
  <div className="img-container" style={{ backgroundImage: `url(${imgSrc})` }}>
    <div className="title-container">
      <div className="title">{children}</div>
      <button>
        <img src="/arrow.svg" alt="Arrow" />
      </button>
    </div>
  </div>
);

export default ImagesSection;
