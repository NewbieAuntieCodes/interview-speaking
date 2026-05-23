import type { Topic } from './types.ts';

// Variations of the same prompt are grouped together in `en` so the sidebar stays concise.
export const advancedTopics: Topic[] = [
  {
    category: "第一类 Self-introduction 自我介绍",
    questions: [
      {
        q: "【自我介绍】 Tell me about yourself.",
        en: [
          "Tell me something about you, including your family background and where you grew up?",
          "Describe yourself or tell me more about yourself.",
          "What's your name? May I have your name, please?"
        ],
        thoughts: [
          "name 中文姓名+英文姓名 My name's ___ / I am ___ / Please call me ___",
          "city 城市 I come from ___",
          "family background 家庭背景 (简单介绍家庭成员人数，爸爸妈妈职业等)",
          "education/awards 教育/奖项",
          "hobbies/interest 兴趣爱好",
          "likes and dislikes 喜欢与不喜欢的东西",
          "personality, etc. 性格描述"
        ],
        expressions: [
          { term: "adventurous", definition: "有冒险精神的" },
          { term: "courageous", definition: "勇敢的" },
          { term: "creative", definition: "创新的" },
          { term: "curious", definition: "充满好奇的" },
          { term: "energetic", definition: "精力充沛的" },
          { term: "enthusiastic", definition: "热情的" },
          { term: "positive", definition: "积极的" },
          { term: "helpful", definition: "乐于助人的" },
          { term: "observant", definition: "善于观察的" },
          { term: "organized", definition: "有组织性的" },
          { term: "patient", definition: "耐心的" },
          { term: "focused", definition: "专注的" },
          { term: "hardworking/industrious", definition: "努力的" },
          { term: "dedicated", definition: "热衷的" },
          { term: "reliable", definition: "可靠的" }
        ],
        example: `Thank you for giving this opportunity to me to introduce myself. I am ___ (your name). There are five members in my family including me. I am native to a ___ (city name). Currently, I am studying at the ___ (school name). -- 个人背景信息介绍

I am a self-motivated and disciplined soul. I am always keen to improve myself by learning new things whenever I get a chance. -- 性格描述

I have received ___ (awards). -- 获得的学校奖励

Apart from studies, I enjoy participating in drama. I am a badminton player too.

In my spare time, I enjoy spending time with friends, sometimes cooking, listening to music, reading, travelling, and playing outdoor sports. -- 个人爱好/兴趣

Thank you!`
      },
      {
        q: "【名字含义】 Does your name have any special meaning?",
        thoughts: ["how you got it 名字的由来", "meaning 含义"],
        expressions: [
          "I got my name from my ___",
          'The word "___" means ___ in Chinese. (bravery 勇敢, kindness 善良, love 爱, etc.)',
          "My parents hope I could become a ___ (brave/kind/caring, etc.) person one day.",
          "My parents hope the name would bring me luck."
        ]
      },
      {
        q: "【生日】 When is your birthday?",
        thoughts: [
          "date 日期",
          "how to celebrate 如何庆祝",
          "talk about a gift that you treasure the most 讲一个对自己很重视的礼物"
        ],
        expressions: [
          "My birthday is on ___ (month 月份 + day 日期)",
          "celebrate my birthday with a bunch of close friends 与好友一起庆祝",
          "have a big feast 吃大餐",
          "hang out 出去",
          "receive gifts from friends and family members 收获家人和朋友的礼物",
          "shopping mall 商场"
        ]
      },
      {
        q: "【家乡】 Briefly introduce the place where you were born.",
        thoughts: [
          "locations 地点",
          "what is it like 怎么样",
          "what is it renowned for 以什么而出名",
          "landscapes 景点",
          "food 食物",
          "culture 文化",
          "why you like it or dislike it 喜欢和不喜欢的理由"
        ],
        expressions: [
          "It's located in ... 它位于...",
          "It's a densely-populated city. 它是一个人口密集的城市。",
          "There are many skyscrapers. 有很多高楼大厦。",
          "places of interest 名胜古迹",
          "beautiful landscapes 漂亮的风景",
          "It's renowned/well-known/famous for ... 它以...出名。",
          "I like my city because/the reason why I like my city is (that) ___... 我喜欢我城市的原因是..."
        ]
      }
    ]
  },
  {
    category: "第二类 Hobby 爱好",
    questions: [
      {
        q: "【兴趣爱好】 What do you like to do in your free time?",
        en: [
          "Do you have any hobbies or special interests?",
          "What do you like doing in your free time? Why do you like it? What do you often do at weekend time?",
          "What do you usually do in your house/flat/room?",
          "How do you like to spend your holidays and vacations?",
          "What do you often do after class at your present school?",
          "Tell us what you do outside of school?",
          "What do you usually do on weekends?",
          "Did you do anything special last weekend?",
          "What will you do next weekend?",
          "What do you do to stay happy?",
          "What will you do in your free time?",
          "What is your hobby?",
          "What is your typical day like?"
        ]
      },
      {
        q: "【最喜欢】 Tell me about your favorites.",
        en: [
          "Please tell me about your favourite food.",
          "Is there one thing you would really love to learn more about, what would it be and why?",
          "What are your favourite sports?",
          "What is your favourite place?",
          "What's your favourite color of clothes?",
          "Which morning do you like the best in a week?"
        ]
      },
      {
        q: "【阅读】 Do you like reading?",
        en: [
          "How often do you read?",
          "What's your favorite book?",
          "Do people in your country do enough reading?",
          "Do you like to read at home or at other places?",
          "Do you enjoy reading by yourself or with others?",
          "What kind of people enjoy reading?"
        ]
      },
      {
        q: "【博物馆】 Do you like visiting museums?",
        en: [
          "How often do you visit museums?",
          "Are there any museums near where you live?",
          "Do you think there should be more museums near where you live?",
          "Tell me about a time when you visited a museum.",
          "Do you think people should pay to visit museums? Or should museums be free?",
          "Describe a place you go to very often."
        ]
      },
      {
        q: "【看电视/唱歌】 Do you enjoy watching TV?",
        en: [
          "What kinds of TV programs do you enjoy watching?",
          "Do you watch the same type of TV program all the time?",
          "Do you enjoy singing?",
          "Do you like watching singing contests on TV?",
          "How often do you sing?",
          "Do people in your country enjoy singing?"
        ]
      },
      {
        q: "【信息沟通】 How do you prefer to communicate?",
        en: [
          "Do you like texting?",
          "Do you prefer sending or receiving messages?",
          "Have you ever received a confusing text message?",
          "In what circumstances is making a phone call better than texting?",
          "Do you like meeting new people?",
          "How do you feel when people welcome you?",
          "Do you often meet new people?",
          "Are you good at telling jokes?"
        ]
      },
      {
        q: "【观窗景】 Do you enjoy sitting by a window and enjoying the view?",
        en: [
          "How often do you sit by a window to enjoy the view?",
          "Is sitting by the window and enjoying the view a good way to relax?"
        ]
      },
      {
        q: "【其他喜好】 Do you like meeting new people?",
        en: [
          "Do you like to watch comedies?",
          "Do you like fishing? Where do you usually fish?"
        ]
      },
      {
        q: "【频率】 How often do you meet new people/read/visit museums?",
        en: [
          "Do you often meet new people?",
          "Do you often read books?",
          "How often do you visit a museum?"
        ]
      },
      {
        q: "【选择】 Do you prefer to read newspaper or magazine?",
        en: [
          "Do you prefer to read news online or on newspaper?",
          "Do you prefer to eat fish or meat?"
        ]
      },
      {
        q: "【其他经历】 Did anything make you happy recently?",
        en: [
          "Are you good at telling jokes?",
          "How do you feel when people welcome you?"
        ]
      }
    ]
  },
  {
    category: "第三类 Personality Description 性格描述",
    questions: [
      {
        q: "【性格】 How might your best friend describe you?",
        en: [
          "Are you talkative or shy?",
          "What three adjectives best describe your personality?"
        ]
      },
      {
        q: "【优缺点】 What makes you unique?",
        en: [
          "What is your greatest strength?",
          "Please describe your greatest strength.",
          "Do you have any strengths and weaknesses?",
          "What is your weakness?"
        ]
      },
      {
        q: "【模范】 Name a role model or a public figure who you admire.",
        en: [
          "Why does this person inspire you?",
          "What person has influenced you most in your life?"
        ]
      },
      { q: "【其他】 What's the influence of good luck and bad luck?" }
    ]
  },
  {
    category: "第四类 Personal Experience 个人经历",
    questions: [
      {
        q: "【描述特定时刻】 Tell me about a memorable moment.",
        en: [
          "Tell me about your happiest/saddest moment.",
          "Tell me about a time when you were disappointed or embarrassed."
        ]
      },
      {
        q: "【挑战与失败】 Describe a challenge you faced and how you handled it.",
        en: [
          "What do you do when you meet challenge?",
          "What is an obstacle you've faced and how did you get through it?",
          "Describe a time that you fail to do something."
        ]
      },
      {
        q: "【个人话题】 Tell me about a treasured gift or achievement.",
        en: [
          "Tell me about your biggest achievement.",
          "Do you wear the same style of clothes on weekdays and weekends?",
          "Can you describe the place where you live?",
          "If you had unlimited money, what would you do with it and why?",
          "Can you be happy all the time? Is it important to be happy?"
        ]
      },
      {
        q: "【社会类话题】 What do you think can improve your local community and make it a better place to live?",
        en: [
          "What current events are you following closely and how do they impact you and your community?",
          "What story in the news in the past few months has really caught your attention and why?",
          "Describe immoral behaviors that you see in public."
        ]
      },
      {
        q: "【专注类话题】 When do you need to be focused?",
        en: [
          "What may distract you when you're trying to stay focused?",
          "What do you do to help you concentrate?",
          "Is it difficult for you to stay focused on something?"
        ]
      },
      {
        q: "【匆忙类话题】 What do you always do in a hurry? Why?",
        en: [
          "What kind of things would you never do in a hurry?",
          "Do you usually go out in a hurry?",
          "Do you like to be in a hurry?"
        ]
      },
      {
        q: "【野餐类话题】 Did you go on a picnic when you were a child?",
        en: [
          "How often do you go on a picnic now?",
          "Where do you go on a picnic?",
          "What's the difference between a picnic and cooking at home?"
        ]
      },
      {
        q: "【熬夜类话题】 Do you often stay up late?",
        en: [
          "What do you do when you stay up late?",
          "How do you feel when you stay up late?"
        ]
      },
      {
        q: "【早起类话题】 Do you often get up early in the morning?",
        en: [
          "What do you usually do when you get up early?",
          "Do you get up early on weekends?",
          "Why do you get up early?"
        ]
      }
    ]
  },
  {
    category: "第五类 School 学校",
    questions: [
      {
        q: "【择校目标】 What are your educational goals and how will our school help you reach them?",
        en: [
          "Why do you want to study in XX School?",
          "Why do you choose XX programme?",
          "What's the most important part of your education?"
        ]
      },
      { q: "【择校标准】 What are your most important criteria in looking at School?" },
      {
        q: "【择校原因】 Why are you interested in our school?",
        en: [
          "What is of the most interest to you about our school?",
          "Why do you want to attend this particular XX School?",
          "What do you know about our school?",
          "Why do you want to apply our school?"
        ]
      },
      { q: "【学校为什么选择你？】 Why should we accept you?" },
      { q: "【学校应该鼓励运动吗？】 Do you think schools should make sure that the students do sports?" },
      { q: "【最喜欢的老师】 Who is your favourite teacher in school? Why?" },
      {
        q: "【母校】 What is your school like?",
        en: [
          "How would you describe your school?",
          "Do you like your school?",
          "In which school do you study? How do you go to school?"
        ]
      },
      {
        q: "【学校活动】 What activities do you take part in at the school?",
        en: [
          "What social activities have you participated in school?"
        ]
      },
      {
        q: "【其他类问题】 What has been your greatest contribution to an extracurricular activity?",
        en: [
          "What was your role?",
          "Please describe your responsibility.",
          "What did you like most about our school's Academy?",
          "Do you have any questions about our school?"
        ]
      }
    ]
  },
  {
    category: "第六类 Study 学习",
    questions: [
      {
        q: "【学校科目】 Please tell me about your studies.",
        en: [
          "Do you like studying? Why or why not?",
          "How many languages can you speak?",
          "What do you study at school?",
          "What school subjects do you like?",
          "Introduce your favourite subjects in the school.",
          "Tell me something about your courses, what is your favourite subject at school?",
          "Why or what courses have been most difficult or most challenging for you?",
          "What is your greatest academic accomplishment or failure?",
          "Which subjects are you best at? Please describe the reasons.",
          "What is your least favourite subject, and why do you dislike it?",
          "Do you have much homework every day?",
          "What are your favourite/best subjects?"
        ]
      },
      {
        q: "【理科学习】 Do you like solving math problems?",
        en: [
          "Is math difficult for you?",
          "When do you usually use math skills in real life?",
          "Do people in your country consider math important?"
        ]
      },
      { q: "【文科学习】 Do you think it is important to study history?" },
      {
        q: "【学习时间和习惯】 Do you prefer to study in the mornings or the afternoons?",
        en: [
          "How do you balance life and study?",
          "Do you like studying? Why? Why not?",
          "How to evaluate your learning ability and attitude?",
          "Do you like studying alone or with others?"
        ]
      },
      {
        q: "【社团类】 What do you usually do during recess?",
        en: [
          "What activities do you often take part in at school?",
          "What is your favourite activity?"
        ]
      },
      {
        q: "【其他】 Which grade are you in now? Which grade will you take in our school?",
        en: [
          "What school are you studying at?"
        ]
      }
    ]
  },
  {
    category: "第七类 Future Plan 未来计划",
    questions: [
      {
        q: "【未来计划】 What's your dream?",
        en: [
          "What do you want to do in the future?",
          "What's your plan for the future?",
          "What do you plan to contribute to this school?",
          "What would you like to do in the future?",
          "What do you plan to change next year?",
          "Do you like changes? Why?"
        ],
        thoughts: [
          "职业/梦想工作 + 理由（兴趣/擅长/家庭影响/想帮助别人等）",
          "我现在在做什么准备（学习、训练、阅读、参加活动等）",
          "在学校想达成什么（知识、能力、合作、解决问题）",
          "能为学校做什么贡献（参与活动、志愿服务、代表学校、提升口碑 reputation）",
          "明年想改变什么 + 具体做法（把改变当成成长机会）"
        ],
        expressions: [
          { term: "lawyer", definition: "律师" },
          { term: "musician", definition: "音乐家" },
          { term: "artist", definition: "艺术家" },
          { term: "doctor", definition: "医生" },
          { term: "boss", definition: "老板" },
          { term: "scientist", definition: "科学家" },
          { term: "millionaire", definition: "百万富翁" },
          "gain more knowledge 获取知识",
          "have a good job 找到好工作",
          "reputation 名誉/口碑",
          "work in a group 团队合作",
          "share ideas 分享想法",
          "learn from each other 互相学习",
          "think outside the box 跳出固有思维",
          "solve the problem better 更好地解决问题",
          "a chance to be independent 成为更独立的机会",
          "adapt to a new environment 适应新环境",
          "overcome different problems by myself 自己解决不同的问题",
          "not rely on others for help 不依赖他人"
        ],
        example: `I want to become a doctor in the future because of my father's influence. I am also quite interested in this field. I will work hard now to realize my dream.

In the future, I plan to start my own business because being a boss is so cool.`
      }
    ]
  },
  {
    category: "第八类 Friends 朋友",
    questions: [
      {
        q: "【朋友】 Who's your best friend?",
        en: [
          "What qualities do you look for in a friend? Why are they important to you?",
          "Do you have a best friend? Tell me about a story/funny thing that happened.",
          "Do you discuss with your friend the kinds of TV programmes you watched?",
          "Do your friends like to tell jokes?",
          "Do you agree or disagree with the following statement: Your friends have the most important influence in your life?"
        ]
      }
    ]
  },
  {
    category: "第九类 Family 家庭",
    questions: [
      {
        q: "【家庭成员】 Tell me about your family.",
        en: [
          "How many people are there in your family?",
          "Do you have any brothers or sisters?",
          "Do you have siblings?",
          "What does your father/mother do?"
        ]
      },
      {
        q: "【动物和宠物】 Do you have a pet?",
        en: [
          "What animal do you like? Why?",
          "What animals are you afraid of? Why?",
          "What does your pet look like?"
        ]
      },
      {
        q: "【家庭活动】 What do you usually do on weekends?",
        en: [
          "Did you take part in any outdoor activities?",
          "What extracurricular activities do you like? Why?"
        ]
      },
      { q: "【亲密关系】 Who has the closest relationship with you in your family? Why?" },
      {
        q: "【交流】 Do you often talk with your parents?",
        en: [
          "Did you argue with your parents for something in the past?"
        ]
      }
    ]
  },
  {
    category: "第十类 Hometown 家乡",
    questions: [
      { q: "【来自哪里】 Where do you come from?" },
      {
        q: "【描述家乡】 How would you describe your hometown?",
        en: [
          "Can you describe your hometown?"
        ]
      },
      {
        q: "【喜欢家乡吗】 Do you like your hometown?",
        en: [
          "What do you like (most) about your hometown?"
        ]
      },
      { q: "【家乡的交通】 What's the most popular means of transportation in your hometown?" },
      { q: "【想住在祖国的什么地方】 Which part of your country do you want to live in?" },
      { q: "【国家让你自豪的原因】 What makes you feel proud of your country?" },
      { q: "【了解国家历史吗】 Do you know the history of your country well?" },
      { q: "【国家美食】 What is the food like in your country?" },
      {
        q: "【如何庆祝新年】 How do people in your country celebrate New Year?",
        en: [
          "Do you remember how you celebrated New Year last year?",
          "Is New Year celebration important to you?"
        ]
      }
    ]
  }
];
