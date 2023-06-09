type LikedPhotoProps = {
  count: number;
};

export const LikedPhotos = (props: LikedPhotoProps) => {
  return (
    <div className="flex justify-end items-end  ">
      <p>You have liked {props.count} photos</p>
    </div>
  );
};
