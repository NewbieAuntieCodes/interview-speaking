/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Topic } from '../types.ts';

export const mockTestG7V3Topic: Topic = {
    title: '贝赛思模拟面试二模测试试卷 G7',
    description: '基于真实试卷的 BASIS G7 模拟面试，包含常规问答、看图说话和选词填空。',
    sections: [
        {
            title: '第一部分 常规问答',
            questions: [
                '1. Can you introduce yourself?',
                '2. Why did you choose BASIS?',
                '3. What is your favorite subject and why?',
                '4. Can you tell me about a hobby or activity that you really enjoy?',
                '5. How do you spend your weekends or holidays?',
                '6. Can you describe a time when you worked with a group and what you learned from it?',
                '7. Who is someone you admire and why?',
                '8. What new skill or knowledge do you want to learn this year and why?',
            ],
        },
        {
            title: '第二部分 看图说话',
            pictureItems: [
                {
                    title: '看图说话',
                    imageUrl: 'https://media.istockphoto.com/id/1021838772/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BB%D1%8E%D0%B4%D0%B8-%D1%83%D0%B1%D0%B8%D1%80%D0%B0%D1%8E%D1%89%D0%B8%D0%B5-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D1%83.jpg?s=1024x1024&w=is&k=20&c=47Ei9XpqSyJ74kJHkZJ30JrepBpbtVL54N3MDH5sMmE=',
                    questions: [
                        'Please describe this picture.',
                        'What are the people in the picture doing?',
                        'Why do you think they are doing this activity?',
                        'How do you think the people are feeling? Why?',
                        'What is the importance of activities like this?',
                    ],
                    thoughts: [
                        '主体: 一群穿着蓝色T恤的人，看起来像志愿者。',
                        '动作: 他们正在树林里捡垃圾，把垃圾放进绿色的袋子里。',
                        '环境: 这是一个公园或森林，有很多树。',
                        '细节: 中间的女士拿着一个装满垃圾的袋子，微笑着指向镜头。其他人也在忙着清理。',
                        '思考/联想: 这是一项社区服务或环保活动。这表明了团队合作和保护环境的重要性。',
                    ],
                    expressions: [
                        { term: 'a group of volunteers', definition: '一群志愿者' },
                        { term: 'cleaning up a park/forest', definition: '清理公园/森林' },
                        { term: 'picking up trash/litter', definition: '捡垃圾' },
                        { term: 'community service', definition: '社区服务' },
                        { term: 'protecting the environment', definition: '保护环境' },
                        { term: 'working together as a team', definition: '团队合作' },
                        { term: 'making a positive impact', definition: '产生积极影响' },
                    ],
                    example: `This picture shows a group of people, who look like volunteers, cleaning up a forest or a park. They are all wearing matching light blue T-shirts and caps.

In the center of the picture, a woman is holding a large green trash bag that seems to be full. She is smiling and pointing towards the camera. Other people in the background are also busy picking up litter with tools and putting it into bags.

I think they are doing this because they care about the environment and want to keep their community clean and beautiful. They seem to feel happy and proud of their work. They are working together as a team to make a positive difference. This kind of activity is very important because it helps protect nature and teaches us about responsibility.`
                }
            ]
        },
        {
            title: '第三部分 选词填空并朗读',
            quiz: {
                id: 'quiz-g7-mock-test-v3',
                title: 'Basking Sharks',
                passage: "Basking sharks are the second-largest kind of ({1}) in the world. In the summer, they are easy to spot. These huge, slow-moving North Atlantic fish eat plankton near the water's surface. But during the winter, basking sharks seem to ({2}). Where do they go? Scientists have discovered the answer. Experts used to think that the sharks hibernated in deeper ocean waters during the winter. However, a new study ({3}) that theory. Researchers tagged 25 basking sharks near Cape Cod, Massachusetts, and used satellites to track the sharks' movements. The tags also sent information about water depth, temperature, and ({4}). The results showed that basking sharks migrate much farther than anyone expected. They don't hibernate deep in the ocean. Instead, they swim huge distances from the North Atlantic to warmer tropical water. One of the tagged sharks even swam 5,500 ({5}).",
                questions: [
                    { 
                        id: 1, 
                        options: ['shark', 'fish', 'whale'], 
                        answer: 'fish', 
                        explanation: 'The passage later describes them as "North Atlantic fish", which makes "fish" the most fitting word in this context.' 
                    },
                    { 
                        id: 2, 
                        options: ['disappear', 'swim', 'sleep'], 
                        answer: 'disappear', 
                        explanation: 'The following sentences "Where do they go? Scientists have discovered the answer" suggest that the sharks seem to vanish or "disappear" from their usual spots.' 
                    },
                    { 
                        id: 3, 
                        options: ['disproves', 'proves', 'ignores'], 
                        answer: 'disproves', 
                        explanation: 'The sentence starts with "However," indicating a contrast with what experts "used to think." Therefore, the new study "disproves" the old theory.' 
                    },
                    { 
                        id: 4, 
                        options: ['light levels', 'wind speed', 'waves'], 
                        answer: 'light levels', 
                        explanation: 'Information like water depth and temperature is often correlated with "light levels" to understand an animal\'s behavior at different depths. It is a common type of data collected by satellite tags.'
                    },
                    { 
                        id: 5, 
                        options: ['miles', 'meters', 'kilometers'], 
                        answer: 'miles', 
                        explanation: '5,500 meters or kilometers, while long distances, are less common in general-knowledge texts from a US context (like Cape Cod). 5,500 miles represents a very long migration, fitting the description "huge distances".'
                    }
                ]
            }
        }
    ]
};
