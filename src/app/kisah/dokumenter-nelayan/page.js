import React from "react";

const page = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <h1 className="md:text-[64px] text-[40px] tracking-tighter font-libre font-medium text-bluecustom text-[#0313FF] mt-12 text-center mb-10">
        Video Dokumenter Perjalanan Nelayan
      </h1>
      <div className="flex items-center justify-center px-5">
        <iframe className="bg-gray-100 md:w-1/2 h-[50vh] rounded-2xl shadow"></iframe>
      </div>
    </div>
  );
};

export default page;
