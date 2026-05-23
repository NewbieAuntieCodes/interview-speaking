import type { Topic, Question } from './data/types.ts';
import type {
  AppCategory as BasisCategory,
  Topic as BasisTopic,
  TopicSection as BasisTopicSection,
  PictureItem as BasisPictureItem,
  Quiz as BasisQuiz,
  QuizQuestion as BasisQuizQuestion
} from './data/basis/types.ts';
import { topic as topic1 } from './data/topic1.ts';
import { topic as topic2 } from './data/topic2.ts';
import { topic as topic3 } from './data/topic3.ts';
import { topic as topic4 } from './data/topic4.ts';
import { topic as topic5 } from './data/topic5.ts';
import { topic as topic6 } from './data/topic6.ts';
import { topic as topic7 } from './data/topic7.ts';
import { topic as topic8 } from './data/topic8.ts';
import { topic as topic9 } from './data/topic9.ts';
import { topic as topic10 } from './data/topic10.ts';
import { topic as topic11 } from './data/topic11.ts';
import { topic as topic12 } from './data/topic12.ts';
import { topic as topic13 } from './data/topic13.ts';
import { topic as topic14 } from './data/topic14.ts';
import { topic as topic15 } from './data/topic15.ts';
import { advancedTopics } from './data/advanced.ts';
import { appContentData } from './data/basis/topicsData.ts';
import { huafuData } from './data/huafu.ts';
import type { HuafuCourseData, HuafuPhrase, HuafuSample, HuafuSampleAnswer, HuafuTopic } from './data/huafu.ts';

export type { Question, Topic };
export type {
  BasisCategory,
  BasisTopic,
  BasisTopicSection,
  BasisPictureItem,
  BasisQuiz,
  BasisQuizQuestion,
  HuafuCourseData,
  HuafuPhrase,
  HuafuSample,
  HuafuSampleAnswer,
  HuafuTopic
};

const minxinData: Topic[] = [
  topic1,
  topic2,
  topic3,
  topic4,
  topic5,
  topic6,
  topic7,
  topic8,
  topic9,
  topic10,
  topic11,
  topic12,
  topic13,
  topic14,
  topic15,
];

type SimpleCourse = {
  id: string;
  title: string;
  type: 'simple';
  data: Topic[];
};

type BasisCourse = {
  id: string;
  title: string;
  type: 'basis';
  data: BasisCategory[];
};

type HuafuCourse = {
  id: string;
  title: string;
  type: 'huafu';
  data: HuafuCourseData;
};

export type Course = SimpleCourse | BasisCourse | HuafuCourse;

export const courses: Course[] = [
  {
    id: 'huafu',
    title: '华附面试口语 2026',
    type: 'huafu',
    data: huafuData
  },
  {
    id: 'advanced',
    title: '高级面试口语',
    type: 'simple',
    data: advancedTopics
  },
  {
    id: 'minxin',
    title: '民心面试口语',
    type: 'simple',
    data: minxinData
  },
  {
    id: 'basis',
    title: '贝赛思面试口语（高级）',
    type: 'basis',
    data: appContentData
  }
];
