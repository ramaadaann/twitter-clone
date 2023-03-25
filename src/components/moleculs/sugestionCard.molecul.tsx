import Image from "next/image";
import { VertifiedMark } from "../../../public";

const SuggestionCard: React.FC = () => {
  return (
    <div className="w-full hover:bg-gray-200 cursor-pointer px-2 py-1 flex justify-between items-start">
      <div className="flex gap-3 px-2 py-2 font-chiper">
        <Image
          src="https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg"
          alt="freecodecamp"
          width={45}
          height={45}
          className="rounded-full"
        />
        <div className="flex flex-col py-1">
          <span className="flex gap-1">
            <h1 className="font-bold text-sm">freeCodeCamp.org</h1>
            <Image src={VertifiedMark} alt="vertified" width={18} height={18} />
          </span>
          <span className="text-sm text-gray-500">@freeCodeCamp</span>
        </div>
      </div>
      <div className="flex items-center h-full justify-center">
        <button className="px-4 flex text-sm items-center py-2 text-white font-semibold rounded-full font-chiper bg-black justify-center">
          Follow
        </button>
      </div>
    </div>
  );
};
export default SuggestionCard;
