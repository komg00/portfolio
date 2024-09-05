import React from "react";

interface SkillContainerProps {
  title: string;
  skills: string[];
}

export default function SkillContainer({
  title,
  skills,
}: SkillContainerProps) {
  return (
    <div className="flex flex-col mb-2.5">
      <div className="flex items-center mt-2">
        <div className="mr-2 px-1 py-1.5">
          {title}
        </div>
      </div>
      <div className="flex gap-2 px-1 ">
        {skills.map((skill) => (
          <img src={skill} alt={skill}></img>
        ))}
      </div>
    </div>
  );
}
