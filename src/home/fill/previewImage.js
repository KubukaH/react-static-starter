import * as React from "react";
import { useParams } from "react-router-dom";
import { getImageById } from "../../settings/images";

const ImagePreview = () => {
  let { id } = useParams();
  let image = getImageById(id);

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <img width={400} height={400} src={image.img} alt={image.author} />
    </div>
  );
}

export default ImagePreview;