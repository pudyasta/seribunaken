import React from "react";

const page = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10 mt-20 font-libre ">
        Video Dokumenter Perjalanan Nelayan
      </h2>
      <div className="flex items-center justify-center px-5">
        <iframe className="bg-gray-100 md:w-1/2 h-[50vh] rounded-2xl shadow"></iframe>
      </div>
    </div>
  );
};

export default page;
