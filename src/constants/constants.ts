import giveRandomGitQuestion from "../questions/giveRandomGitQuestion";
import giveRandomCSSQuestion from "../questions/giveRandomCSSQuestion";
import giveRandomRESTAPIQuestion from "../questions/giveRandomRESTAPIQuestion";
import giveRandomHTMLQuestion from "../questions/giveRandomHTMLQuestions";
import giveRandomJSQuestion from "../questions/giveRandomJSQuestions";
import giveRandomNodeQuestion from "../questions/giveRandomNodeQuestions";
import giveRandomReactQuestion from "../questions/giveRandomReactQuestions";
import { SkillToFuncMapType } from "../types/types";

export const skills = [
  "CSS",
  "Git",
  "RESTAPI",
  "HTML",
  "JS",
  "Node",
  "React",
  "Mixed",
];

export const skillsToFunctions: SkillToFuncMapType = {
  CSS: giveRandomCSSQuestion,
  Git: giveRandomGitQuestion,
  RESTAPI: giveRandomRESTAPIQuestion,
  HTML: giveRandomHTMLQuestion,
  JS: giveRandomJSQuestion,
  Node: giveRandomNodeQuestion,
  React: giveRandomReactQuestion,
  Mixed: (): string =>
    [
      giveRandomCSSQuestion,
      giveRandomGitQuestion,
      giveRandomHTMLQuestion,
      giveRandomJSQuestion,
      giveRandomNodeQuestion,
      giveRandomReactQuestion,
      giveRandomRESTAPIQuestion,
    ][Math.floor(Math.random() * (skills.length - 1))](),
};
