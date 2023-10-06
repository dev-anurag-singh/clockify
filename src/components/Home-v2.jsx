import RefreshIcon from '../assets/icon-refresh.svg?react';
import IconLess from '../assets/icon-less.svg?react';
import SunIcon from '../assets/icon-sun.svg?react';
import Button from './Button';
import IconMore from '../assets/icon-more.svg?react';
import { useState } from 'react';

function Home({ isDay }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${
        isDay ? 'bg-hero-day' : 'bg-hero-night'
      } bg-[#00000075] bg-cover bg-top bg-no-repeat bg-blend-multiply`}
    >
      <div
        className={`flex min-h-[100dvh] flex-col  ${
          isExpanded ? 'justify-end' : 'justify-between'
        } text-white`}
      >
        {!isExpanded && (
          <div className="px-6 pt-8 md:px-16 md:pt-20 xl:pt-14">
            <div className="mx-auto max-w-6xl">
              <div className="mb-auto text-xs leading-6 md:text-lg">
                <div className="flex">
                  <p className="basis-[33.75rem] ">
                    “The science of operations, as derived from mathematics more especially, is a
                    science of itself, and has its own abstract truth and value.”
                  </p>
                  <span className="ml-4 mt-1">
                    <RefreshIcon />
                  </span>
                </div>
                <div className="mt-2 font-bold">Ada Lovelace</div>
              </div>
            </div>
          </div>
        )}
        <div className={`px-6 py-10 md:px-16 md:py-16 ${isExpanded ? 'xl:py-14' : 'xl:py-24'} `}>
          <div className="mx-auto max-w-6xl">
            <div className="lg:flex lg:items-end lg:justify-between">
              <div className="text-sm uppercase md:text-lg">
                <div className="flex items-center">
                  <SunIcon />
                  <h2 className="ml-4 tracking-[.2em] lg:text-xl">
                    Good Morning
                    <span className="hidden md:inline-block">, It&apos;s currently</span>
                  </h2>
                </div>
                <div className="mt-4">
                  <h1 className="text-8xl font-bold md:text-[11rem] xl:text-[12.5rem] ">
                    11:37
                    <span className="text-sm font-light tracking-normal md:text-[2rem] xl:text-[2.5rem]">
                      BST
                    </span>{' '}
                  </h1>
                  <h4 className="mt-4 font-bold tracking-[.2em] xl:text-2xl">In London, UK</h4>
                </div>
              </div>
              <div className="mt-12">
                {isExpanded ? (
                  <Button onClick={() => setIsExpanded(false)}>
                    Less
                    <IconLess />
                  </Button>
                ) : (
                  <Button onClick={() => setIsExpanded(true)}>
                    More
                    <IconMore />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        {isExpanded && (
          <div
            className={`bg-white-700 px-6 py-12 text-gray backdrop-blur-[20px] dark:bg-black-dark dark:text-white  md:px-16 md:py-28 lg:py-[4.5rem] `}
          >
            <div className="">
              <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-4 md:grid md:grid-cols-[repeat(2,minmax(auto,1fr))] md:gap-x-20 md:gap-y-12">
                  <TimeDetailItem title="current timezone" value="Europe/London" />
                  <TimeDetailItem title="day of the week" value="5" />
                  <TimeDetailItem title="Day of the year" value="295" />
                  <TimeDetailItem title="week number" value="42" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// px-6 py-10 pt-8 md:px-16 md:py-32 lg:py-20

const TimeDetailItem = ({ title, value }) => {
  return (
    <div className="flex justify-between align-middle md:flex-col xl:gap-2">
      <p className="text-[10px] uppercase leading-7 tracking-[.2em] md:text-[13px] xl:text-sm">
        {title}
      </p>
      <p className="text-xl font-bold leading-[100%] md:text-[2.5rem] xl:text-[3.5rem]">{value}</p>
    </div>
  );
};

export default Home;
