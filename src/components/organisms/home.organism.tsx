import { MoreActionIcon, SearchIcon } from "../icons";
import {
  ActionPostCard,
  PostCard,
  Sidebar,
  SuggestionCarc,
  Tabbar,
  TrendCard,
} from "../moleculs";

const HomePage: React.FC = () => {
  return (
    <div className="grid grid-flow-col w-full ">
      <Sidebar />
      <div className="border-r grid grid-flow-row max-w-[40rem]">
        {/* Tabbar */}
        <Tabbar />
        <div className="w-full h-auto max-w-[40rem] row-span-full mt-28">
          <ActionPostCard />
          {/* posts section */}
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          {/* end posts section */}
        </div>
      </div>
      <div className="max-w-[20rem] h-max max-h-max">
        <div className="flex w-full flex-col">
          <div className="sticky w-full max-w-[20rem] bg-white top-0 py-2 z-40">
            <div className="w-full group border-gray-200 border-opacity-50 bg-gray-200 transition-all duration-200 bg-opacity-50 focus-within:bg-white focus-within:border-brand-800 border px-5 py-3 rounded-full items-center justify-between flex gap-5">
              <SearchIcon className="fill-gray-600 group-focus-within:fill-brand-800 w-5" />
              <input
                type="search"
                name="search"
                className="w-full outline-none bg-transparent placeholder:text-gray-600"
                placeholder="Search In Twitter"
              />
            </div>
          </div>
          <div className="w-full h-full rounded-2xl mt-3 bg-gray-200 bg-opacity-30 pt-4">
            <div className="flex items-center px-4 pb-3">
              <h1 className="text-lg font-extrabold font-chiper">
                Trends For You
              </h1>
            </div>
            <div className="grid grid-flow-row auto-rows-rows-10">
              <TrendCard />
              <TrendCard />
              <TrendCard />
              <TrendCard />
              <TrendCard />
              <TrendCard />
              <TrendCard />
              <TrendCard />
              <TrendCard />
              <TrendCard />
            </div>
            <div className="flex items-center p-4 hover:bg-gray-200">
              <h1 className="text-md font-medium text-brand-800 font-chiper cursor-pointer">
                Show More
              </h1>
            </div>
          </div>
          <div className="w-full h-full rounded-2xl mt-5 bg-gray-200 bg-opacity-30 pt-4 overflow-hidden">
            <div className="flex items-center px-4 pb-3">
              <h1 className="text-lg font-extrabold font-chiper">
                Who to follow
              </h1>
            </div>
            <div className="grid grid-flow-row auto-rows-rows-10">
              <SuggestionCarc />
              <SuggestionCarc />
              <SuggestionCarc />
            </div>
            <div className="flex items-center p-4 hover:bg-gray-200">
              <h1 className="text-md font-medium text-brand-800 font-chiper cursor-pointer">
                Show More
              </h1>
            </div>
          </div>
          <footer className="w-full h-full pt-4 gap-1 px-4 grid grid-flow-row overflow-hidden">
            <div className="flex gap-2">
              <span className="text-xs text-gray-500 hover:underline">
                <a href="#">Terms of Service</a>
              </span>
              <span className="text-xs text-gray-500 hover:underline">
                <a href="#">Privacy Policy</a>
              </span>
              <span className="text-xs text-gray-500 hover:underline">
                <a href="#">Cookie Policy</a>
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-xs text-gray-500 hover:underline">
                <a href="#">Accessibility</a>
              </span>
              <span className="text-xs text-gray-500 hover:underline">
                <a href="#">Ads info</a>
              </span>
              <span className="text-xs flex gap-1 text-gray-500 hover:underline">
                <a href="#">More</a>
                <MoreActionIcon className="w-3 fill-gray-500 mt-1" />
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-xs text-gray-500 hover:underline">
                <a href="#">&copy; 2023 Twitter, Inc.</a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
