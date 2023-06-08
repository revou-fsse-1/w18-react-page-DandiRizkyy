type PhotoCardProps = {
  title: string;
  imgUrl: string;
  isLiked?: boolean;
};
export const PhotoCard = (props: PhotoCardProps) => {
  return (
    <div>
      <img src={props.imgUrl} alt="" />
      <h3>{props.title}</h3>
    </div>
  );
};
