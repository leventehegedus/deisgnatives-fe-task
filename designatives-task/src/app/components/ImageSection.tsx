interface ImagesSectionProps {}

const ImagesSection: React.FC<ImagesSectionProps> = () => (
  <div className="images-container">
    <ImageBlock title="Zöldfalaink felépítése" imgSrc="img_1.png" />
    <ImageBlock title="Zöldfalak karbantartása" imgSrc="img_2.png" />
    <ImageBlock title="Zöldfalaink karbantartása" imgSrc="img_3.png" />
  </div>
);

interface ImageBlockProps {
  title: string;
  imgSrc: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ title, imgSrc }) => (
  <div className="img-container" style={{ backgroundImage: `url(${imgSrc})` }}>
    <div className="title-container">
      <div className="title">{title}</div>
      <button>
        <img src="/arrow.svg" alt="Arrow" />
      </button>
    </div>
  </div>
);

export default ImagesSection;
