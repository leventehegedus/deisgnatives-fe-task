import ImageBlock from "../ImageBlock/ImageBlock";
import "./ImagesSection.scss";

const ImagesSection: React.FC = () => (
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

export default ImagesSection;
