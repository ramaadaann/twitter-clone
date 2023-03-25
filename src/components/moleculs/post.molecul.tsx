import Image from "next/image";
import {
  ComentIcon,
  LoveIcon,
  MoreActionIcon,
  ReTweetIcon,
  ShareIcon,
  ViewIcon,
} from "../icons";
import { VertifiedMark } from "../../../public";

const PostCard: React.FC = () => {
  return (
    <div className="w-full max-w-[40rem] grid grid-flow-row border-b pb-2 px-4">
      <div className="grid grid-flow-col py-2">
        <div className="flex justify-center">
          <div className="rounded-full">
            <Image
              src="https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg"
              alt="freecodecamp"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="overflow-x-auto py-1 pl-5">
          <div className="flex justify-between">
            <div className="flex gap-2 w-full">
              <div className="flex gap-1 items-center justify-center">
                <span className="flex">
                  <h1 className="font-bold text-sm">freeCodeCamp.org</h1>
                  <Image
                    src={VertifiedMark}
                    alt="vertified"
                    width={17}
                    height={17}
                  />
                </span>
                <h1 className="text-sm text-gray-500">@freeCodeCamp</h1>
                <span>·</span>
                <h1 className="text-sm text-gray-500">16h</h1>
              </div>
            </div>
            <div className="px-2">
              <MoreActionIcon className="w-5 fill-gray-500" />
            </div>
          </div>
          <div className="flex gap-4 flex-col pr-6 text-md mb-3">
            <p>
              If you want to become a great JavaScript dev, you shouldnt ignore
              the basics.
            </p>

            <p>
              So youll want to get really comfortable working with strings,
              arrays, & objects.
            </p>

            <p>
              In this tutorial, Houssein explains how each one works along with
              their most common methods
            </p>
          </div>
          <div className="w-full rounded-xl overflow-hidden flex flex-col mb-2 gap-2 border">
            <Image
              src="https://www.freecodecamp.org/news/content/images/size/w2000/2023/02/js.png"
              alt="posts-freecodecamp"
              width={1000}
              height={1000}
              layout="responsive"
              className="w-full h-auto"
            />
            <div className="px-2 py-2">
              <h1 className="text-base text-gray-500">freecodecamp.org</h1>
              <h1 className="text-base">
                JavaScript Basics - How To Works With Strings, Arrays, And
                Objects in...
              </h1>
              <h1 className="text-base text-gray-500">
                JavaScript is a popular programming language that 78% of
                developers use. You can build almost anything with JavaScript.
                The problem is...
              </h1>
            </div>
          </div>
          <div className="flex gap-6 font-chiper">
            <div className="flex gap-1 items-center group cursor-pointer">
              <div className="p-2 rounded-full group-hover:bg-brand-800 group-hover:bg-opacity-10">
                <ComentIcon className="group-hover:fill-brand-800 fill-gray-500 w-5" />
              </div>
              <span className="group-hover:text-brand-800 text-xs">1.244</span>
            </div>
            <div className="flex gap-1 items-center group cursor-pointer">
              <div className="p-2 rounded-full group-hover:bg-green-400 group-hover:bg-opacity-20">
                <ReTweetIcon className="group-hover:fill-green-700 fill-gray-500 w-5" />
              </div>
              <span className="group-hover:text-green-800 text-xs">2.567</span>
            </div>
            <div className="flex gap-1 items-center group cursor-pointer">
              <div className="p-2 rounded-full group-hover:bg-pink-800 group-hover:bg-opacity-10">
                <LoveIcon className="group-hover:fill-pink-600 fill-gray-500 w-5" />
              </div>
              <span className="group-hover:text-pink-600 text-xs">10.967</span>
            </div>
            <div className="flex gap-1 items-center group cursor-pointer">
              <div className="p-2 rounded-full group-hover:bg-brand-800 group-hover:bg-opacity-10">
                <ViewIcon className="group-hover:fill-brand-800 fill-gray-500 w-5" />
              </div>
              <span className="group-hover:text-brand-800 text-xs">23.856</span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <div className="p-2 rounded-full group-hover:bg-brand-800 group-hover:bg-opacity-10">
                <ShareIcon className="group-hover:fill-brand-800 fill-gray-500 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
