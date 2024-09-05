import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <p className="text-font-main text-xl font-DungGeunMo border-b-2">
        About Me
      </p>
      <div className="flex">
        <Image src="/images/sample.png" alt="avatar" width={150} height={100} />
        <div className="w-full my-5 mx-3 p-3 border-dashed border-gray-300 border-2 rounded-2xl bg-teal-50">
          <p>안녕하세요! 프론트엔드 개발자 고민경입니다.</p>
          <p>저는 사용자 경험을 중시합니다.</p>
        </div>
      </div>
    </>
  );
}
