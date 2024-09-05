import React from "react";
import ContentWrapper from "../UI/ContentWrapper";
import About from "./About";
import Skills from "./Skills";

export default function Content() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <ContentWrapper>
     <About />
     <Skills />
    </ContentWrapper>
  );
}
