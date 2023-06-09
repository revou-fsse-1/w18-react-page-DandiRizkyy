export const HeaderComponent = () => {
  return (
    <div>
      <h1 className="mt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
        Cat
        <mark className="ml-2 mr-2 rounded-lg px-3 py-1 text-white bg-blue-600 hover:bg-blue-500">
          Photo Club 😺
        </mark>
        Gallery
      </h1>
      <h2 className="text-2xl text-center">List of Member Photos</h2>
    </div>
  );
};
