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
    <div className="flex justify-center items-center py-2">
      <input
        className="py-1 px-12 border border-black rounded-xl text-center"
        type="text"
        placeholder="search for photos.."
        onChange={handleInputChange}
      />
    </div>
  );
};
