import giveRandomGitQuestion from "../questions/giveRandomGitQuestion";
import giveRandomCSSQuestion from "../questions/giveRandomCSSQuestion";
import giveRandomRESTAPIQuestion from "../questions/giveRandomRESTAPIQuestion";
import giveRandomHTMLQuestion from "../questions/giveRandomHTMLQuestions";
import giveRandomJSQuestion from "../questions/giveRandomJSQuestions";
import giveRandomNodeQuestion from "../questions/giveRandomNodeQuestions";
import giveRandomReactQuestion from "../questions/giveRandomReactQuestions";
import giveRandomGoQuestion from "../questions/giveRandomGoQuestion";
import { SkillToFuncMapType } from "../types/types";
import giveRandomTypeScriptQuestion from "../questions/giveRandomTypeScriptQuestion";

export const skills = [
  "CSS",
  "Git",
  "RESTAPI",
  "HTML",
  "JS",
  "Node",
  "React",
  "Go",
  "TypeScript",
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
  Go: giveRandomGoQuestion,
  TypeScript: giveRandomTypeScriptQuestion,
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
