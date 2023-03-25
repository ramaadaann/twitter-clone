const Tabbar: React.FC = () => {
  return (
    <div className="w-full h-28 border-b border-r grid grid-flow-row font-chiper bg-white bg-opacity-50 backdrop-blur-2xl fixed top-0 max-w-[40rem]">
      <div className="px-4 pt-5">
        <h1 className="text-xl font-semibold">Home</h1>
      </div>
      <div className="grid grid-flow-col grid-cols-2">
        <button className="flex items-center justify-center font-semibold text-base py-4 hover:bg-gray-200 relative">
          For you
          <div className="absolute w-20 h-1 rounded-full bottom-0 bg-brand-800"></div>
        </button>
        <button className="flex items-center justify-center font-semibold text-base py-4 hover:bg-gray-200">
          Followings
        </button>
      </div>
    </div>
  );
};
export default Tabbar;
