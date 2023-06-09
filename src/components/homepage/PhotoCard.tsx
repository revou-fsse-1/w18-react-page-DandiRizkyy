import { useState } from "react";

type PhotoCardProps = {
  id: number;
  title: string;
  imgUrl: string;
  isLiked?: boolean;
  likePhoto: (id: number, isLiked: boolean) => void;
};
export const PhotoCard = (props: PhotoCardProps) => {
  return (
    // <div className="mt-4 max-w-[900px] flex flex-wrap flex-col justify-center items-center gap-4">
    <div className="rounded-lg hover:scale-110 duration-500 relative">
      <img
        src={props.imgUrl}
        alt=""
        className="w-[200px] h-[270px] rounded-lg object-cover"
      />
      <h3 className="text-center">{props.title}</h3>
      <div>
        {!props.isLiked ? (
          <button
            className="border border-black rounded-lg px-3 bg-blue-500 hover:bg-blue-300"
            onClick={() => props.likePhoto(props.id, true)}
          >
            Like
          </button>
        ) : (
          <button
            className="border border-black rounded-lg px-3 bg-red-500 hover:bg-red-300"
            onClick={() => props.likePhoto(props.id, false)}
          >
            Unlike
          </button>
        )}
      </div>
    </div>
    // </div>
  );
};
