import Props from "../icons/interface/props.interface";
import Image from "next/image";
import {
  BlueIcon,
  HastagIcon,
  HomeIcon,
  MessageIcon,
  MoreActionIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  SaveIcon,
  TwitterLogo,
} from "../icons";

const Sidebar: React.FC = () => {
  return (
    <div className="col-span-16 max-w-[20rem] bg-white border-r">
      <div className="w-full h-full fixed max-w-[19rem]">
        <div className="flex justify-between h-full max-w-[18rem] flex-col pt-1 pb-3 px-3">
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
              <div className="px-3 py-3 hover:bg-gray-200 flex gap-6 w-48 items-center rounded-full">
                <SaveIcon className="w-7" />
                <h1 className="text-xl">Bookmarks</h1>
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
            <button className="w-11/12 max-w-[18rem] flex items-center py-4 text-white font-bold rounded-full font-chiper bg-brand-800 hover:bg-brand-900 justify-center">
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
    </div>
  );
};
export default Sidebar;
