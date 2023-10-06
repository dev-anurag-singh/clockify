import RefreshIcon from '../assets/icon-refresh.svg?react';
import IconLess from '../assets/icon-less.svg?react';
import SunIcon from '../assets/icon-sun.svg?react';
import Button from './Button';
import IconMore from '../assets/icon-more.svg?react';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { getQuote } from './apiQuotes';

function Home({ isDay, time, timezoneDetails }) {
  const initialState = {
    quote: '',
    author: '',
    error: '',
    isLoading: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'loading':
        return { ...state, isLoading: true };
      case 'quote/loaded':
        return {
          ...state,
          isLoading: false,
          quote: action.payload.content,
          author: action.payload.originator.name,
        };
      case 'rejected':
        return { ...state, isLoading: false, error: action.payload };
    }
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [{ quote, author }, dispatch] = useReducer(reducer, initialState);

  const fetchQuote = useCallback(async function () {
    try {
      dispatch({ type: 'loading' });
      const result = await getQuote();
      dispatch({ type: 'quote/loaded', payload: result });
    } catch (err) {
      if (err) console.log(err.message);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  const { code, timezone, weekNumber, dayOfWeek, dayOfYear } = timezoneDetails;

  return (
    <div
      className={`${
        isDay ? 'bg-hero-day' : 'bg-hero-night'
      } bg-[#00000075] bg-cover bg-top bg-no-repeat bg-blend-multiply`}
    >
      <div
        className={`flex min-h-[100dvh] flex-col overflow-hidden  ${
          isExpanded ? 'justify-end' : 'justify-between'
        } text-white`}
      >
        {!isExpanded && (
          <div className="px-6 pt-8 md:px-16 md:pt-20 xl:pt-14">
            <div className="mx-auto max-w-6xl">
              <div className="mb-auto text-xs leading-6 md:text-lg">
                <div className="flex items-start">
                  <p className="basis-[33.75rem] ">{!quote ? 'Loading...' : quote}</p>
                  <span onClick={() => fetchQuote()} className="ml-4 mt-1 cursor-pointer">
                    <RefreshIcon />
                  </span>
                </div>
                <div className="mt-2 font-bold">{author}</div>
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
                    Good {isDay ? 'Morning' : 'Night'}
                    <span className="hidden md:inline-block">, It&apos;s currently</span>
                  </h2>
                </div>
                <div className="mt-4">
                  <h1 className="text-8xl font-bold md:text-[11rem] xl:text-[12.5rem] ">
                    {time}
                    <span className="text-sm font-light tracking-normal md:text-[2rem] xl:text-[2.5rem]">
                      {code}
                    </span>{' '}
                  </h1>
                  <h4 className="mt-4 font-bold tracking-[.2em] xl:text-2xl">In {timezone}</h4>
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
            className={` animate-[moveup_1s_ease] bg-white-700 px-6 py-12 text-gray backdrop-blur-[20px] dark:bg-black-dark dark:text-white  md:px-16 md:py-28 lg:py-[4.5rem] `}
          >
            <div className="">
              <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-4 md:grid md:grid-cols-[repeat(2,minmax(auto,1fr))] md:gap-x-20 md:gap-y-12">
                  <TimeDetailItem title="current timezone" value={timezone} />
                  <TimeDetailItem title="day of the week" value={dayOfWeek} />
                  <TimeDetailItem title="Day of the year" value={dayOfYear} />
                  <TimeDetailItem title="week number" value={weekNumber} />
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
