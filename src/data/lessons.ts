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

export const lessons: Lesson[] = [
  htmlLesson,
  cssLesson,
  jsLesson,
  typescriptLesson,
  reactLesson,
  nextjsLesson,
  tailwindLesson,
  nodejsLesson,
  databaseLesson,
  gitLesson,
  testingLesson,
  securityLesson,
  optimizationLesson,
  aiLesson
];
