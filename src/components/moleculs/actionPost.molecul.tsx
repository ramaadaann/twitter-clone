import Image from "next/image";
import {
  GiffIcon,
  ImageIcon,
  QuestionList,
  SmileIcon,
  CalendarIcon,
  LocationIcon,
} from "../icons";
const ActionPostCard: React.FC = () => {
  return (
    <>
      <div className="w-full box-border border-b">
        <div className="flex gap-2 py-3 mx-5">
          <div className="rounded-full">
            <Image
              src="https://pbs.twimg.com/profile_images/1523712353074040833/ExbYJXpa_400x400.jpg"
              alt="muhamad-firly-ramadan"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          {/* action posts */}
          <div className="flex w-full">
            <div className="flex w-full gap-5 flex-col">
              <div className="flex py-2 mx-2 font-chiper">
                <h1 className="text-xl text-gray-600">What`s Happening?</h1>
              </div>
              <div className="flex items-center justify-between">
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

                <button className="w-24 flex items-center py-2 text-white font-bold rounded-full font-chiper bg-brand-800 bg-opacity-50 justify-center">
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
    </>
  );
};

export default ActionPostCard;
