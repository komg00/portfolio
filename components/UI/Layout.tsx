import React from "react";
import Navigation from "@/components/navigation/Navigation";
import MenuBox from "../menu/MenuBox";

interface LayoutProps {
  leftComponent: React.ReactNode;
  contentComponent: React.ReactNode;
}

export default function Layout({
  leftComponent,
  contentComponent,
}: LayoutProps) {
  return (
    <main className="w-full h-screen bg-cover bg-main flex">
      <div className="w-3/5 h-5/6 my-16 ml-auto mr-20 bg-bg-main border border-border-main rounded-2xl flex">
        <div className="w-full border-white border-2 border-dashed m-3.5 rounded-2xl flex">
          <div className="w-3/12 ml-3 mr-2 my-3 p-4 bg-bg-gray rounded-2xl font-DungGeunMo">
            <p className="text-base ml-3 mt-8">TODAY 42 | TOTAL 120</p>
            {leftComponent}
          </div>
          <div className="w-9/12 ml-1 mr-3 my-3 p-4 bg-bg-gray rounded-2xl font-NeoDunggeunmoPro">
            <p className="text-font-blue text-xl mt-6 ml-4">
              즐겁게 코딩하자 ☾˚₊✩‧₊* ⋆⁺₊⋆ ☾⋆⁺₊⋆
            </p>
            {contentComponent}
          </div>
        </div>
        <Navigation />
      </div>
      <MenuBox />
    </main>
  );
}
