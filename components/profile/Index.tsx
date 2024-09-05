import React from "react";
import LeftWrapper from "../UI/LeftWrapper";
import Link from "next/link";

export default function Index() {
  return (
    <LeftWrapper>
      <div>
        <p>▶ 프로필</p>
        <div className="flex px-2 py-1">
          <div className="w-3 h-3.5 mr-1 border-dashed border-gray-400 border-l border-b" />
          <Link href="/profile/#about" className="text-sm underline text-blue px-1">About me</Link>
        </div>
        <div className="flex px-2">
          <div className="w-3 h-3.5 mr-1 border-dashed border-gray-400 border-l border-b" />
          <Link href="/profile/#skills" className="text-sm underline text-blue px-1">Skills</Link>
        </div>
      </div>
    </LeftWrapper>
  );
}
