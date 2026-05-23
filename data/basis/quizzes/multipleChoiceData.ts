/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Quiz } from '../types.ts';
import { quizSet1 } from './quizSet1.ts';
import { quizSet2 } from './quizSet2.ts';

export const quizzes: Quiz[] = [
    ...quizSet1,
    ...quizSet2,
];