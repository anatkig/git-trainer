import giveRandomGitQuestion from '../questions/giveRandomGitQuestion';
import giveRandomCSSQuestion from '../questions/giveRandomCSSQuestion';
import giveRandomRESTAPIQuestion from '../questions/giveRandomRESTAPIQuestion';
import giveRandomHTMLQuestion from '../questions/giveRandomHTMLQuestions';
import giveRandomJSQuestion from '../questions/giveRandomJSQuestions';
import giveRandomNodeQuestion from '../questions/giveRandomNodeQuestions';
import giveRandomReactQuestion from '../questions/giveRandomReactQuestions';
import giveRandomGoQuestion from '../questions/giveRandomGoQuestion';
import { SkillToFuncMapType } from '../types/types';
import giveRandomTypeScriptQuestion from '../questions/giveRandomTypeScriptQuestion';
import giveRandomDockerQuestion from '../questions/giveRandomDockerQuestion';

export const skills = [
  'CSS',
  'Git',
  'RESTAPI',
  'HTML',
  'JS',
  'Node',
  'React',
  'Go',
  'TypeScript',
  'Docker',
  'Mixed',
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
  Docker: giveRandomDockerQuestion,
  Mixed: (dataBlockNumber: number): string =>
    [
      giveRandomCSSQuestion,
      giveRandomGitQuestion,
      giveRandomHTMLQuestion,
      giveRandomJSQuestion,
      giveRandomNodeQuestion,
      giveRandomReactQuestion,
      giveRandomRESTAPIQuestion,
      giveRandomGoQuestion,
      giveRandomTypeScriptQuestion,
      giveRandomDockerQuestion,
    ][Math.floor(Math.random() * (skills.length - 1))](dataBlockNumber),
};
