type PhotoFilterSearchProps = {
  setFilterValue: (value: string) => void;
};

export const PhotoFilterSearch = (props: PhotoFilterSearchProps) => {
  const { setFilterValue } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterValue(value);
  };
  return (
    <input
      type="text"
      placeholder="search for photos.."
      onChange={handleInputChange}
    />
  );
};
