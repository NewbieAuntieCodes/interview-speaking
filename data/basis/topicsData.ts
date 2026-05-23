/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { AppCategory } from './types.ts';
import { selfIntroductionTopic } from './topics/selfIntroduction.ts';
import { hobbyTopic } from './topics/hobby.ts';
import { personalityDescriptionTopic } from './topics/personalityDescription.ts';
import { personalExperienceTopic } from './topics/personalExperience.ts';
import { schoolTopic } from './topics/school.ts';
import { studyTopic } from './topics/study.ts';
import { mockTestG7Topic } from './topics/mockTestG7.ts';
import { mockTestG7V2Topic } from './topics/mockTestG7V2.ts';
import { mockTestG7V3Topic } from './topics/mockTestG7V3.ts';
import { pictureDescription_1_5 } from './topics/pictureDescription_1_5.ts';
import { pictureDescription_6_10 } from './topics/pictureDescription_6_10.ts';

export const appContentData: AppCategory[] = [
    {
        title: '教材内容',
        topics: [
            selfIntroductionTopic,
            hobbyTopic,
            personalityDescriptionTopic,
            personalExperienceTopic,
            schoolTopic,
            studyTopic,
            { title: '第七类 Future Plan 未来计划', description: '关于未来的规划和设想。', sections: [] },
            { title: '第八类 Friends 朋友', description: '关于朋友和友谊的话题。', sections: [] },
            { title: '第九类 Family 家庭', description: '讨论家庭成员、宠物、休闲活动和亲密关系。', sections: [] },
            { title: '第十类 Hometown 家乡', description: '介绍家乡、交通、美食，以及对国家的了解和自豪感。', sections: [] },
            { 
                title: '第十一类 Picture Description 看图说话', 
                description: '分为三种：生活场景类、学术场景类、数据图标描述（偏学术）', 
                sections: [
                    {
                        title: '一、生活场景类',
                        pictureItems: [
                            ...pictureDescription_1_5,
                            ...pictureDescription_6_10
                        ]
                    }
                ] 
            },
            { title: '第十二类 Read aloud 朗读', description: '朗读练习，提升发音和流利度。', sections: [] },
            { title: '第十三类 Multiple Choice 选词填空', description: '练习选词填空题，提升语法和词汇。', sections: [], isQuiz: true },
        ]
    },
    {
        title: '模拟测试',
        topics: [
            mockTestG7Topic,
            mockTestG7V2Topic,
            mockTestG7V3Topic
        ]
    }
];