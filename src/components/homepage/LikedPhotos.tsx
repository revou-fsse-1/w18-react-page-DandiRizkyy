type LikedPhotoProps = {
  count: number;
};

export const LikedPhotos = (props: LikedPhotoProps) => {
  return (
    <div>
      <p>You have liked {props.count} photos</p>
    </div>
  );
};
