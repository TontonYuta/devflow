import { Lesson } from '../types';
import { htmlLesson } from './lessons/html';
import { cssLesson } from './lessons/css';
import { jsLesson } from './lessons/js';
import { reactLesson } from './lessons/react';
import { tailwindLesson } from './lessons/tailwind';
import { aiLesson } from './lessons/ai';
import { securityLesson } from './lessons/security';
import { optimizationLesson } from './lessons/optimization';
import { typescriptLesson } from './lessons/typescript';
import { gitLesson } from './lessons/git';
import { testingLesson } from './lessons/testing';
import { nodejsLesson } from './lessons/nodejs';
import { databaseLesson } from './lessons/database';
import { nextjsLesson } from './lessons/nextjs';
import { networkingLesson } from './lessons/networking';
import { cybersecurityLesson} from './lessons/cybersecurity';

export const lessons: Lesson[] = [
  htmlLesson,
  cssLesson,
  jsLesson,
  gitLesson,
  typescriptLesson,
  reactLesson,
  tailwindLesson,
  nextjsLesson,
  nodejsLesson,
  databaseLesson,
  networkingLesson,
  cybersecurityLesson,  
  securityLesson,
  testingLesson,
  optimizationLesson,
  aiLesson,
];