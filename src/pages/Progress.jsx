import React from "react";

const Progress = () => {
  return (
    <section>
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-500 inline-flex items-center justify-center text-white relative z-10"></div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  STEP 1
                </h2>
                <p className="leading-relaxed">
                Learn the Names of Guitar Parts.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-500 inline-flex items-center justify-center text-white relative z-10"></div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  STEP 2
                </h2>
                <p className="leading-relaxed">
                Learn Some Basic Finger Exercises.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-500 inline-flex items-center justify-center text-white relative z-10"></div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  STEP 3
                </h2>
                <p className="leading-relaxed">
                Learn Some Basic Guitar Riffs.

                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-500 inline-flex items-center justify-center text-white relative z-10"></div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  STEP 4
                </h2>
                <p className="leading-relaxed">
                Learn Some Easy Open Chords.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-500 inline-flex items-center justify-center text-white relative z-10"></div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  FINISH
                </h2>
                <p className="leading-relaxed">
                Learn Some Easy Strumming Patterns.
                </p>
              </div>
            </div>
          </div>
          <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 progress"
            src="./assets/images/guitarrist.jpeg"
            alt="step"
          />
        </div>
      </div>
    </section>
  );
};

export default Progress;
