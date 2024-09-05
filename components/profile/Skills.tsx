import React from "react";
import SkillContainer from "./SkillContainer";

export default function Skills() {
  const language = [
    "https://img.shields.io/badge/c++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  ];
  const frontend = [
    "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black",
    "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white",
    "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white",
    "https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=Expo&logoColor=white",
  ];
  const backend = [
    "https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white",
    "https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white",
    "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white",
    "https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
    "https://img.shields.io/badge/Amazon Web Services-232F3E?style=for-the-badge&logo=AmazonWebServices&logoColor=white",
  ];
  const tools = [
    "https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white",
    "https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
    "https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white",
    "https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white",
    "https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white",
  ];

  return (
    <div id="skills">
      <p className="text-font-main text-xl font-DungGeunMo border-b-2">
        Skills
      </p>
      <SkillContainer title="Language" skills={language} />
      <SkillContainer title="Frontend" skills={frontend} />
      <SkillContainer title="Backend" skills={backend} />
      <SkillContainer title="Tools" skills={tools} />
    </div>
  );
}
