import React from "react";
import LeftWrapper from "../UI/LeftWrapper";
import ListContainer from "./ListContainer";

export default function List() {
  const projects = ['3DBox', '고민친구', '포트폴리오 사이트', 'English AI Tutor', 'MBTI 챗봇'];
  return (
    <LeftWrapper>
      <div className="flex flex-col gap-1.5 font-DungGeunMo">
        <p className="border-b-2">프로젝트</p> 
        {projects.map((project) => <ListContainer title={project} />)}
      </div>
    </LeftWrapper>
  );
}
