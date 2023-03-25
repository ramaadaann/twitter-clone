import { MoreActionIcon } from "../icons";

const TrendCard: React.FC = () => {
  return (
    <div className="w-full hover:bg-gray-200 cursor-pointer px-2 py-2 flex justify-between items-start">
      <div className="flex gap-0 px-2 py-2 flex-col font-chiper">
        <p className="text-sm text-gray-600 leading-5">
          Trending in Indonesian topics
        </p>
        <span className="text-base font-semibold leading-5">
          #ramadanGanteng
        </span>
        <p className="text-sm text-gray-600 leading-5">23,6k Tweets</p>
      </div>
      <div className="p-2 group rounded-full hover:bg-brand-800 hover:bg-opacity-10 flex items-center justify-center">
        <MoreActionIcon className="w-5 fill-gray-500 group-hover:fill-brand-800" />
      </div>
    </div>
  );
};

export default TrendCard;
