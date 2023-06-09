import { useState } from "react";

type PhotoCardProps = {
  id: number;
  title: string;
  imgUrl: string;
  isLiked?: boolean;
  likePhoto: (id: number, isLiked: boolean) => void;
};
export const PhotoCard = (props: PhotoCardProps) => {
  // const [isLiked, setIsLiked] = useState(false);
  return (
    <div>
      <img src={props.imgUrl} alt="" />
      <h3>{props.title}</h3>
      <div>
        {!props.isLiked ? (
          <button onClick={() => props.likePhoto(props.id, true)}>Like</button>
        ) : (
          <button onClick={() => props.likePhoto(props.id, false)}>
            Unlike
          </button>
        )}
      </div>
    </div>
  );
};
