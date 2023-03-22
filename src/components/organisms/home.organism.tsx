import Image from "next/image";
import {
  BlueIcon,
  GiffIcon,
  HastagIcon,
  HomeIcon,
  ImageIcon,
  MessageIcon,
  MoreActionIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  QuestionList,
  SaveIcon,
  TwitterLogo,
} from "../icons";
import { SmileIcon } from "../icons";
import { CalendarIcon } from "../icons";
import { LocationIcon } from "../icons";

const HomePage: React.FC = () => {
  return (
    <div className="grid grid-flow-col w-full h-[100vh]">
      <div className="w-full border-r">
        <div className="flex justify-between h-full flex-col pt-1 pb-3 px-3">
          <div className="w-full flex flex-col gap-5 font-chiper cursor-pointer">
            <div className="flex gap-2 flex-col">
              <div className="w-12 h-12 hover:bg-brand-800 hover:bg-opacity-10 flex items-center justify-center rounded-full">
                <TwitterLogo className="fill-brand-800 w-8" />
              </div>
              <div className="px-3 py-3 hover:bg-gray-200 flex gap-6 w-40 items-center rounded-full">
                <div className="relative">
                  <div className="w-2 h-2 absolute rounded-full bg-brand-800 -top-1 right-0"></div>
                  <HomeIcon className="w-7" />
                </div>
                <h1 className="text-xl font-semibold">Home</h1>
              </div>
              <div className="px-3 py-3 hover:bg-gray-200 flex gap-6 w-44 items-center rounded-full">
                <HastagIcon className="w-7" />
                <h1 className="text-xl ">Explore</h1>
              </div>
              <div className="px-3 py-3 hover:bg-gray-200 flex gap-6 w-52  items-center rounded-full">
                <NotificationIcon className="w-7" />
                <h1 className="text-xl">Notifications</h1>
              </div>
              <div className="px-3 py-3 hover:bg-gray-200 flex gap-6 w-48 items-center rounded-full">
                <MessageIcon className="w-7" />
                <h1 className="text-xl">Messages</h1>
              </div>
              <div className="px-3 py-3 hover:bg-gray-200 flex gap-6 w-44 items-center rounded-full">
                <SaveIcon className="w-7" />
                <h1 className="text-xl">Marked</h1>
              </div>
              <div className="px-3 py-3 hover:bg-gray-200 flex gap-6 w-48 items-center rounded-full">
                <BlueIcon className="w-7" />
                <h1 className="text-xl">Blue Twitter</h1>
              </div>
              <div className="px-3 py-3 hover:bg-gray-200 flex gap-6 w-40 items-center rounded-full">
                <ProfileIcon className="w-7" />
                <h1 className="text-xl">Profile</h1>
              </div>
              <div className="px-3 py-3 hover:bg-gray-200 flex gap-6 w-40 items-center rounded-full">
                <MoreIcon className="w-7" />
                <h1 className="text-xl">More</h1>
              </div>
            </div>
            <button className="w-11/12 flex items-center py-4 text-white font-bold rounded-full font-chiper bg-brand-800 hover:bg-brand-900 justify-center">
              Tweet
            </button>
          </div>
          <div className="p-3 hover:bg-gray-200 w-full cursor-pointer flex justify-between rounded-full">
            <div className="flex gap-3">
              <div className="overflow-hidden rounded-full">
                <Image
                  src="https://pbs.twimg.com/profile_images/1523712353074040833/ExbYJXpa_400x400.jpg"
                  alt="muhamad-firly-ramadan"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col leading-5">
                <h1 className="font-semibold">Muhamad Firly Ra...</h1>
                <h1 className="text-gray-500">@mframadann</h1>
              </div>
            </div>
            <MoreActionIcon className="w-5" />
          </div>
        </div>
      </div>
      <div className="col-[span_20_/_span_20] w-full grid grid-flow-col font-chiper">
        <div className="col-span-9  border-r sticky bg-transparent backdrop-blur-sm">
          <div className="">
            <div className="w-full h-28 border-b grid grid-flow-row font-chiper">
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
          </div>
          <div className="">
            <div className="w-full h-28 border-b grid grid-flow-col font-chiper">
              <div className="py-2 px-2 flex justify-center">
                <div className="rounded-full">
                  <Image
                    src="https://pbs.twimg.com/profile_images/1523712353074040833/ExbYJXpa_400x400.jpg"
                    alt="muhamad-firly-ramadan"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="col-[span_16_/_span_16] grid grid-flow-rows font-chiper">
                <div className="flex items-center pt-3 row-span-5 px-2">
                  <h1 className="text-xl text-gray-600">What is going on?</h1>
                </div>
                <div className="flex items-center justify-between pr-4">
                  <div className="flex items-center gap-1">
                    <div className=" hover:bg-brand-800 p-2 hover:bg-opacity-10 flex items-center justify-center rounded-full cursor-pointer">
                      <ImageIcon className="fill-brand-800 w-5" />
                    </div>
                    <div className=" hover:bg-brand-800 p-2 hover:bg-opacity-10 flex items-center justify-center rounded-full cursor-pointer">
                      <GiffIcon className="fill-brand-800 w-5" />
                    </div>
                    <div className=" hover:bg-brand-800 p-2 hover:bg-opacity-10 flex items-center justify-center rounded-full cursor-pointer">
                      <QuestionList className="fill-brand-800 w-5" />
                    </div>
                    <div className=" hover:bg-brand-800 p-2 hover:bg-opacity-10 flex items-center justify-center rounded-full cursor-pointer">
                      <SmileIcon className="fill-brand-800 w-5" />
                    </div>
                    <div className=" hover:bg-brand-800 p-2 hover:bg-opacity-10 flex items-center justify-center rounded-full cursor-pointer">
                      <CalendarIcon className="fill-brand-800 w-5" />
                    </div>
                    <div className=" hover:bg-brand-800 p-2 hover:bg-opacity-10 flex items-center justify-center rounded-full cursor-pointer">
                      <LocationIcon className="fill-brand-800 w-5" />
                    </div>
                  </div>
                  <div className="pb-2">
                    <button className="px-5 flex items-center py-2 text-white font-bold rounded-full font-chiper bg-brand-800 bg-opacity-50 justify-center">
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 text-center border-b font-chiper hover:bg-gray-100 cursor-pointer">
            <h1 className="text-brand-800 text-base">Showing 2,436 Tweets</h1>
          </div>
        </div>
        <div className="col-[span_16_/_span_16]"></div>
      </div>
    </div>
  );
};

export default HomePage;
