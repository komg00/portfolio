import React from "react";
import ContentWrapper from "../UI/ContentWrapper";

export default function Content() {
  return (
    <ContentWrapper>
      <div className="font-NotoSans overflow-auto">
        <div className="flex bg-gray-200 p-2 border border-zinc-300">
          <p className="mx-auto text-xl font-semibold">3DBox</p>
          <button className="border-zinc-400 border rounded-lg px-1.5 py-1 bg-slate-50 text-xs text-zinc-700">
            github
          </button>
        </div>
        <div className="flex px-4 py-2 justify-between bg-gray-100 border-zinc-300 border-x border-b">
          <p className="text-font-blue font-semibold text-base">Team</p>{" "}
          <p className="font-">2024.03~2024.06</p>
        </div>
        <div className="p-4">
          <p className="text-lg font-bold">주요 기능 및 특징</p> 
          <p>기존의 드롭박스 기능을 포함한 이미지 전용 드라이브 프로젝트입니다. <br/>
            파일 업로드/다운로드, 파일 복사, 파일/폴더 이동, 파일/폴더 삭제의 기능을 구현하였습니다. <br/>
            Drag & Drop을 활용했으며, 직관적인 Context menu와 폴더 트리가 특징입니다. 
          </p>
          <span className="bg-gray-100 text-gray-800 text-base font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">React</span>
          <span className="bg-gray-100 text-gray-800 text-base font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Context API</span>
        </div>
      </div>
    </ContentWrapper>
  );
}
