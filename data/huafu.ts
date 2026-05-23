export type HuafuPhrase = {
  term: string;
  definition: string;
  source?: 'extra';
};

export type HuafuSample = {
  opening: string;
  reason: string;
  example: string;
  conclusion: string;
};

export type HuafuSampleAnswer = HuafuSample & {
  label: string;
  tone: 'agree' | 'disagree' | 'balanced';
};

export type HuafuTopic = {
  id: number;
  category: string;
  title: string;
  englishTitle: string;
  background: string[];
  debateTopic: string;
  keyPhrases: HuafuPhrase[];
  universalPhrases: HuafuPhrase[];
  argumentsFor: string[];
  argumentsAgainst: string[];
  discussionExpressions: {
    opening: string;
    agreeing: string;
    disagreeing: string;
    example: string;
  };
  sample: HuafuSample;
  sampleAnswers?: HuafuSampleAnswer[];
};

export type HuafuCourseData = {
  examInfo: string[];
  debateFlow: Array<{
    stage: string;
    sentences: string[];
  }>;
  universalBank: HuafuPhrase[];
  topics: HuafuTopic[];
};

const bank = {
  improveLearningEfficiency: { term: 'improve learning efficiency', definition: '提高学习效率' },
  thinkIndependently: { term: 'think independently', definition: '独立思考' },
  relyTooHeavilyOnTechnology: { term: 'rely too heavily on technology', definition: '过度依赖科技' },
  developCriticalThinking: { term: 'develop critical thinking', definition: '培养批判性思维' },
  reduceScreenTime: { term: 'reduce screen time', definition: '减少屏幕使用时间' },
  compareThemselvesWithOthers: { term: 'compare themselves with others', definition: '与他人比较自己' },
  buildSelfConfidence: { term: 'build self-confidence', definition: '建立自信心' },
  relieveAcademicPressure: { term: 'relieve academic pressure', definition: '缓解学业压力' },
  maintainMentalWellBeing: { term: 'maintain mental well-being', definition: '保持心理健康' },
  achievePersonalGrowth: { term: 'achieve personal growth', definition: '实现个人成长' },
  balanceStudyAndLeisure: { term: 'balance study and leisure', definition: '平衡学习与休闲' },
  broadenPersonalHorizons: { term: 'broaden personal horizons', definition: '开阔个人视野' },
  developPracticalLifeSkills: { term: 'develop practical life skills', definition: '培养实际生活技能' },
  strengthenSocialResponsibility: { term: 'strengthen social responsibility', definition: '增强社会责任感' },
  participateInVolunteerActivities: { term: 'participate in volunteer activities', definition: '参加志愿活动' },
  protectTheNaturalEnvironment: { term: 'protect the natural environment', definition: '保护自然环境' },
  reduceEnvironmentalPollution: { term: 'reduce environmental pollution', definition: '减少环境污染' },
  encourageFaceToFaceCommunication: { term: 'encourage face-to-face communication', definition: '鼓励面对面交流' },
  spreadFalseInformation: { term: 'spread false information', definition: '传播虚假信息' },
  formHealthyHabits: { term: 'form healthy habits', definition: '养成健康习惯' },
  improveCommunicationSkills: { term: 'improve communication skills', definition: '提升沟通能力' },
  developProblemSolvingSkills: { term: 'develop problem-solving skills', definition: '培养解决问题能力' },
  stayMotivatedAndProductive: { term: 'stay motivated and productive', definition: '保持积极性与效率' },
  reduceFeelingsOfAnxiety: { term: 'reduce feelings of anxiety', definition: '减少焦虑感' },
  createUnrealisticExpectations: { term: 'create unrealistic expectations', definition: '制造不切实际的期待' },
  gainRealLifeExperience: { term: 'gain real-life experience', definition: '获得真实生活经验' },
  prepareStudentsForTheFuture: { term: 'prepare students for the future', definition: '为未来做好准备' },
  improveSelfDiscipline: { term: 'improve self-discipline', definition: '提升自律能力' },
  makeResponsibleDecisions: { term: 'make responsible decisions', definition: '做出负责任的决定' },
  encourageCreativeThinking: { term: 'encourage creative thinking', definition: '鼓励创造性思维' },
};

export const huafuData: HuafuCourseData = {
  examInfo: [
    '最新流程：小组面试形式，通常 4 人一组，先听华附老师现场朗读一篇英文文章。',
    '听完文章后，学生约有 2 分钟整理笔记；随后每位学生依次进行约 1 分钟个人陈述。',
    '个人陈述结束后，进入约 8-10 分钟小组讨论或辩论。已知主题方向包括 Home-School Cooperation 家校合作。'
  ],
  debateFlow: [
    { stage: 'Stage 1 Article Listening 英文文章听取', sentences: ['Listen for the topic, main idea, reasons and examples.', 'The main issue here is whether...'] },
    { stage: 'Stage 2 Note Organization 2 分钟笔记整理', sentences: ['Topic / Main idea / Reasons / Examples / My opinion', 'This topic mainly focuses on...'] },
    { stage: 'Stage 3 Individual Statement 约 1 分钟个人陈述', sentences: ['In my opinion, ...', 'One important reason is that...', 'For example, ...', 'Therefore, I believe that...'] },
    { stage: 'Stage 4 Group Discussion 8-10 分钟小组讨论', sentences: ['I agree with you because...', 'I see your point, but I think...', 'I would like to add that...', 'What do you think about this idea?'] },
    { stage: 'Interaction 回应与追问', sentences: ['Could you explain why you think so?', 'May I briefly respond to that point?', 'What you mentioned reminds me of...'] },
    { stage: 'Conclusion 总结讨论', sentences: ['To sum up, our group believes that...', 'Overall, I still firmly believe that...'] },
  ],
  universalBank: Object.values(bank),
  topics: [
    {
      id: 1,
      category: '网络、科技与数字生活',
      title: 'AI作业与学术诚信',
      englishTitle: 'AI Homework & Academic Integrity',
      background: [
        'Since the release of advanced AI tools such as ChatGPT, more students have started using artificial intelligence to complete homework, write essays, and prepare school projects.',
        'Some schools around the world have even reported cases where students submitted AI-generated assignments without doing independent thinking themselves.',
        'Supporters believe AI can improve efficiency and help students learn more effectively, especially when used responsibly. However, many teachers worry that overreliance on AI may weaken students\' creativity, writing ability, and academic honesty.',
        'As AI technology develops rapidly, schools are facing growing challenges in balancing innovation and academic integrity.'
      ],
      debateTopic: 'Should schools impose stricter rules on students\' use of AI for schoolwork?',
      keyPhrases: [bank.relyTooHeavilyOnTechnology, bank.developCriticalThinking, bank.encourageCreativeThinking, bank.improveLearningEfficiency, bank.thinkIndependently, { term: 'academic integrity', definition: '学术诚信' }],
      universalPhrases: [bank.balanceStudyAndLeisure, bank.achievePersonalGrowth, bank.prepareStudentsForTheFuture, bank.broadenPersonalHorizons, bank.reduceScreenTime, bank.maintainMentalWellBeing, bank.buildSelfConfidence, bank.strengthenSocialResponsibility, bank.improveCommunicationSkills],
      argumentsFor: ['AI improves learning efficiency', 'Clear rules protect academic honesty', 'Students can still use AI responsibly', 'Rules help students think independently'],
      argumentsAgainst: ['Too many rules may limit creativity', 'AI is already part of future learning', 'Students need guidance more than punishment', 'It is difficult to check every use of AI'],
      discussionExpressions: {
        opening: 'I think schools should set rules about AI.',
        agreeing: 'I agree. AI can help, but we need rules.',
        disagreeing: 'I see your point, but students may become lazy.',
        example: 'For example, some students just copy AI answers.'
      },
      sample: {
        opening: 'I think schools should set rules about AI because if students use AI too much, they will not think by themselves.',
        reason: 'One important reason is that clear rules can help students use AI in a responsible way.',
        example: 'For example, some students just copy AI answers and do not learn anything. That is not good for their future.',
        conclusion: 'So I believe we should use AI carefully, not rely on it too much.'
      }
    },
    {
      id: 2,
      category: '网络、科技与数字生活',
      title: 'Deepfake技术与网络安全',
      englishTitle: 'Deepfake Technology & Online Safety',
      background: [
        'In recent years, deepfake technology has become increasingly advanced.',
        'By using artificial intelligence, people can now create highly realistic fake videos and audio recordings that are difficult to distinguish from real ones.',
        'While some creators use deepfake technology for entertainment and filmmaking, others have used it to spread misinformation, damage reputations, or create online scams.',
        'Governments and technology companies are now discussing how to regulate deepfake content without limiting creativity and freedom of expression.'
      ],
      debateTopic: 'Does deepfake technology pose a greater threat than benefit to society?',
      keyPhrases: [bank.spreadFalseInformation, bank.makeResponsibleDecisions, { term: 'online scams', definition: '网络诈骗' }, { term: 'damage reputations', definition: '损害名誉' }],
      universalPhrases: [bank.developCriticalThinking, bank.strengthenSocialResponsibility, bank.prepareStudentsForTheFuture, bank.encourageCreativeThinking],
      argumentsFor: ['It can spread false information', 'It may damage people\'s reputations', 'Teenagers may find it hard to tell what is real', 'It can be used in online scams'],
      argumentsAgainst: ['It can support filmmaking and entertainment', 'It encourages creative thinking', 'The technology itself is not wrong', 'Better rules can reduce the risks'],
      discussionExpressions: {
        opening: 'Personally, I think deepfake technology is more dangerous than helpful.',
        agreeing: 'I agree because fake videos can mislead many people.',
        disagreeing: 'That may be true, but we should also consider its creative uses.',
        example: 'For example, a fake video may quickly spread false information online.'
      },
      sample: {
        opening: 'From my perspective, deepfake technology brings more threats because it can make fake information look very real.',
        reason: 'The reason is that many people may believe fake videos before checking the truth.',
        example: 'For example, if someone creates a fake video of a student or teacher, it may damage that person\'s reputation.',
        conclusion: 'Therefore, society should control deepfake technology carefully and teach teenagers to check information.'
      }
    },
    {
      id: 3,
      category: '网络、科技与数字生活',
      title: '短视频算法与青少年注意力',
      englishTitle: 'Short-Video Algorithms & Teenagers\' Attention',
      background: [
        'Short-video platforms such as TikTok, Reels, and Xiaohongshu have become extremely popular because their algorithms continuously recommend personalized content to users.',
        'Many teenagers spend hours scrolling through short videos every day without realizing how much time has passed.',
        'Some researchers believe these algorithms are designed to keep users addicted by constantly stimulating their brains with fast and entertaining content.',
        'Educators worry that teenagers may gradually lose patience for deep reading, long discussions, and critical thinking. At the same time, others argue that short videos are simply a new and efficient way of receiving information.'
      ],
      debateTopic: 'Are recommendation algorithms negatively affecting teenagers\' concentration and thinking habits?',
      keyPhrases: [bank.reduceScreenTime, bank.thinkIndependently, bank.developCriticalThinking, bank.formHealthyHabits, bank.improveSelfDiscipline],
      universalPhrases: [bank.balanceStudyAndLeisure, bank.maintainMentalWellBeing, bank.prepareStudentsForTheFuture],
      argumentsFor: ['They reduce attention span', 'Teenagers may lose patience for deep reading', 'They encourage endless scrolling', 'Too much screen time affects healthy habits'],
      argumentsAgainst: ['Short videos can provide quick information', 'Algorithms help users find useful content', 'The problem is self-control, not technology itself', 'Students can learn to use platforms wisely'],
      discussionExpressions: {
        opening: 'I believe recommendation algorithms can hurt teenagers\' concentration.',
        agreeing: 'I agree. Short videos are easy to watch for a long time.',
        disagreeing: 'I understand your opinion; however, short videos can also teach useful knowledge.',
        example: 'For example, many students plan to watch for five minutes but continue for one hour.'
      },
      sample: {
        opening: 'I think recommendation algorithms negatively affect teenagers because they make short videos too addictive.',
        reason: 'One reason is that they show too many interesting videos, so students may watch them for a long time.',
        example: 'For example, when students keep scrolling, they may find it hard to read a long article or focus on homework.',
        conclusion: 'So teenagers should reduce screen time and build better study habits.'
      }
    },
    {
      id: 4,
      category: '网络、科技与数字生活',
      title: '数字化课堂与传统学习方式',
      englishTitle: 'Digital Classrooms & Traditional Learning',
      background: [
        'After the COVID-19 pandemic, many schools continued introducing digital classrooms, online homework systems, and electronic textbooks into daily education.',
        'Students today can attend lessons online, submit assignments digitally, and access large amounts of educational information through technology.',
        'Supporters believe digital learning is more flexible and better prepares students for a technology-driven future.',
        'However, critics argue that excessive screen time reduces face-to-face communication and weakens students\' ability to focus deeply. Some teachers also believe traditional classroom learning still provides stronger discipline and interaction.'
      ],
      debateTopic: 'Should digital learning become the dominant form of education in the future?',
      keyPhrases: [bank.improveLearningEfficiency, bank.developCriticalThinking, bank.reduceScreenTime, bank.encourageFaceToFaceCommunication, bank.prepareStudentsForTheFuture, bank.improveSelfDiscipline, bank.encourageCreativeThinking],
      universalPhrases: [bank.thinkIndependently, bank.balanceStudyAndLeisure, bank.improveCommunicationSkills],
      argumentsFor: ['Digital learning is flexible', 'It gives students more learning resources', 'It prepares students for the future', 'It can improve learning efficiency'],
      argumentsAgainst: ['Too much screen time is unhealthy', 'Face-to-face communication may become weaker', 'Students need classroom discipline', 'Not every student learns well online'],
      discussionExpressions: {
        opening: 'I support digital learning, but I do not think it should replace classrooms completely.',
        agreeing: 'That is a reasonable point because technology is useful.',
        disagreeing: 'I respectfully disagree because students still need real classroom interaction.',
        example: 'For example, online homework is convenient, but group discussion is better in person.'
      },
      sample: {
        opening: 'I believe digital learning should be used more often, but it should not become the only form of education.',
        reason: 'One reason is that students still need face-to-face communication and classroom discipline.',
        example: 'For example, online resources can help students review lessons, but face-to-face classes improve communication and discipline.',
        conclusion: 'Therefore, schools should combine digital learning with traditional classrooms.'
      }
    },
    {
      id: 5,
      category: '网络、科技与数字生活',
      title: '社交媒体与“完美生活”文化',
      englishTitle: 'Social Media & Perfect-Life Culture',
      background: [
        'On social media platforms, teenagers are constantly exposed to carefully edited photos, luxury lifestyles, and videos showing "perfect" appearances and achievements.',
        'Many influencers share glamorous daily routines, expensive products, and ideal body images that attract millions of followers.',
        'Psychologists have warned that long-term exposure to this type of content may increase anxiety, insecurity, and unhealthy comparison among teenagers.',
        'Some young people feel pressure to present perfect versions of themselves online in order to gain likes and attention.'
      ],
      debateTopic: 'Is social media creating unrealistic expectations for teenagers\' lives and appearance?',
      keyPhrases: [bank.compareThemselvesWithOthers, bank.createUnrealisticExpectations, bank.maintainMentalWellBeing, bank.reduceFeelingsOfAnxiety, bank.encourageFaceToFaceCommunication, bank.spreadFalseInformation],
      universalPhrases: [bank.buildSelfConfidence, bank.makeResponsibleDecisions, bank.reduceScreenTime, bank.formHealthyHabits],
      argumentsFor: ['It makes teenagers compare themselves with others', 'Edited content creates unrealistic expectations', 'It may increase anxiety and insecurity', 'Teenagers may chase likes instead of real growth'],
      argumentsAgainst: ['Social media can inspire students', 'Teenagers can choose positive content', 'It helps people share ideas and experiences', 'Media education can reduce the negative influence'],
      discussionExpressions: {
        opening: 'I think social media often creates unrealistic expectations.',
        agreeing: 'I agree because many online photos are carefully edited.',
        disagreeing: 'That may be true, but social media can also be positive.',
        example: 'For example, some teenagers feel unhappy after seeing perfect lives online.'
      },
      sample: {
        opening: 'I believe social media can create unrealistic expectations because teenagers may compare themselves with influencers.',
        reason: 'The reason is that many online photos and videos only show perfect moments, not real life.',
        example: 'For example, when they see perfect appearances and expensive lifestyles every day, they may feel anxious about their own lives.',
        conclusion: 'So teenagers should use social media carefully and build self-confidence in real life.'
      }
    },
    {
      id: 6,
      category: '网络、科技与数字生活',
      title: 'AI是否正在削弱学生独立思考能力',
      englishTitle: 'AI & Independent Thinking',
      background: [
        'As AI tools become more powerful and convenient, many students now rely on artificial intelligence to summarize articles, answer questions, and generate ideas instantly.',
        'Some educators believe this technology saves time and allows students to learn more efficiently.',
        'However, others are concerned that students may stop thinking independently because AI can provide answers so quickly.',
        'Researchers have also warned that overdependence on AI may weaken creativity, problem-solving ability, and critical thinking skills among young people.'
      ],
      debateTopic: 'Is artificial intelligence weakening teenagers\' independent thinking ability?',
      keyPhrases: [bank.thinkIndependently, bank.relyTooHeavilyOnTechnology, bank.developCriticalThinking, bank.developProblemSolvingSkills, bank.encourageCreativeThinking, bank.improveLearningEfficiency],
      universalPhrases: [bank.prepareStudentsForTheFuture, bank.improveSelfDiscipline, bank.achievePersonalGrowth],
      argumentsFor: ['Students may stop thinking by themselves', 'AI can weaken problem-solving skills', 'Students may copy answers too quickly', 'Overdependence reduces creativity'],
      argumentsAgainst: ['AI can explain difficult ideas', 'It saves time and improves learning efficiency', 'Students can use it as a tool', 'Good guidance can protect independent thinking'],
      discussionExpressions: {
        opening: 'I think AI may weaken independent thinking if students use it too much.',
        agreeing: 'I completely agree. Fast answers can make students lazy.',
        disagreeing: 'I see your point, but AI can also help students learn better.',
        example: 'For example, students may ask AI for answers before trying themselves.'
      },
      sample: {
        opening: 'I think AI is weakening independent thinking when students rely on it too heavily.',
        reason: 'One important reason is that students may get answers too quickly and stop trying by themselves.',
        example: 'For example, if a student always asks AI to write ideas, he may not develop his own problem-solving skills.',
        conclusion: 'Therefore, AI should be used after students first try to think by themselves.'
      }
    },
    {
      id: 7,
      category: '心理健康、学业压力与成长',
      title: '心理健康与学业成绩',
      englishTitle: 'Mental Health vs Academic Performance',
      background: [
        'In many countries, academic competition among teenagers has become increasingly intense.',
        'Students are expected to achieve high grades, participate in extracurricular activities, and prepare for future university admissions at a very young age.',
        'As a result, cases of stress, anxiety, and emotional burnout among teenagers have risen significantly in recent years.',
        'Some schools have started introducing mental health lessons, counseling services, and stress-management programs to support students emotionally. However, others believe academic achievement should still remain the main priority of schools because grades strongly influence students\' future opportunities.'
      ],
      debateTopic: 'Should schools place greater emphasis on emotional well-being rather than academic performance?',
      keyPhrases: [bank.maintainMentalWellBeing, bank.relieveAcademicPressure, bank.achievePersonalGrowth, bank.buildSelfConfidence],
      universalPhrases: [bank.reduceFeelingsOfAnxiety, bank.balanceStudyAndLeisure, bank.stayMotivatedAndProductive, bank.improveCommunicationSkills, bank.gainRealLifeExperience, bank.developPracticalLifeSkills],
      argumentsFor: ['Mental health is fundamental', 'Happy students learn better', 'It reduces stress and anxiety', 'Students need confidence and emotional support'],
      argumentsAgainst: ['Grades affect future opportunities', 'Academic achievement is important', 'Competition motivates students', 'Schools must keep learning standards'],
      discussionExpressions: {
        opening: 'I think schools should care more about students\' emotional well-being.',
        agreeing: 'I agree because mental health affects learning.',
        disagreeing: 'I understand your point; however, academic performance is also important.',
        example: 'For example, students under too much stress may not study efficiently.'
      },
      sample: {
        opening: 'I believe schools should place greater emphasis on emotional well-being because mental health is the basis of good learning.',
        reason: 'One reason is that students cannot study well if they feel too stressed or anxious.',
        example: 'For example, if students feel anxious every day, they may lose motivation and confidence even when they study hard.',
        conclusion: 'So schools should balance academic performance with mental health support.'
      }
    },
    {
      id: 8,
      category: '心理健康、学业压力与成长',
      title: '学业压力与成长',
      englishTitle: 'Academic Pressure & Personal Growth',
      background: [
        'Teenagers today often face heavy academic workloads, long study hours, and constant pressure from exams.',
        'In some countries, students attend school during the day and continue taking extra classes at night or on weekends.',
        'Although academic competition may motivate students to work harder, many teenagers report feeling exhausted, anxious, and emotionally overwhelmed.',
        'Parents and educators are beginning to question whether excessive pressure is harming students\' creativity, confidence, and overall happiness.'
      ],
      debateTopic: 'Is academic pressure becoming the biggest obstacle to teenagers\' personal growth?',
      keyPhrases: [bank.relieveAcademicPressure, bank.maintainMentalWellBeing, bank.achievePersonalGrowth, bank.balanceStudyAndLeisure, bank.formHealthyHabits, bank.stayMotivatedAndProductive],
      universalPhrases: [bank.buildSelfConfidence, bank.reduceFeelingsOfAnxiety, bank.improveLearningEfficiency],
      argumentsFor: ['Too much pressure harms confidence', 'Students need time for hobbies and communication', 'Stress can reduce creativity', 'Personal growth is more than grades'],
      argumentsAgainst: ['Pressure can motivate students', 'Exams help students stay disciplined', 'Academic success opens future opportunities', 'Students need to learn how to face challenges'],
      discussionExpressions: {
        opening: 'I think excessive academic pressure can block personal growth.',
        agreeing: 'I agree because teenagers need time to develop different skills.',
        disagreeing: 'That may be true, but some pressure can keep students motivated.',
        example: 'For example, if students only study for exams, they may not develop hobbies or communication skills.'
      },
      sample: {
        opening: 'I believe academic pressure can become an obstacle when it is too heavy.',
        reason: 'The reason is that too much pressure leaves students little time for hobbies, rest, and personal growth.',
        example: 'For example, students who spend all their time on extra classes may have no chance to build confidence, hobbies, or communication skills.',
        conclusion: 'Therefore, teenagers should balance study and leisure to achieve personal growth.'
      }
    },
    {
      id: 9,
      category: '心理健康、学业压力与成长',
      title: '“躺平文化”与青少年竞争压力',
      englishTitle: 'Lying Flat & Competition Pressure',
      background: [
        'In recent years, the term "lying flat" has become widely discussed among young people in many Asian countries.',
        'Some teenagers and young adults feel exhausted by intense academic competition, social expectations, and pressure to constantly succeed.',
        'As a result, some people choose a slower and less competitive lifestyle, focusing more on personal happiness and mental well-being.',
        'Supporters believe this attitude helps reduce stress and protects mental health. However, critics argue that giving up ambition too early may reduce motivation and negatively affect personal growth and future development.'
      ],
      debateTopic: 'Is the "lying flat" attitude harmful to teenagers\' future development?',
      keyPhrases: [bank.compareThemselvesWithOthers, bank.buildSelfConfidence, bank.relieveAcademicPressure, bank.maintainMentalWellBeing, bank.improveCommunicationSkills, bank.stayMotivatedAndProductive],
      universalPhrases: [bank.reduceFeelingsOfAnxiety, bank.balanceStudyAndLeisure, bank.achievePersonalGrowth, bank.encourageFaceToFaceCommunication],
      argumentsFor: ['It may reduce motivation', 'Teenagers may give up too early', 'It can affect future development', 'Students still need goals and self-discipline'],
      argumentsAgainst: ['It helps reduce stress', 'It protects mental well-being', 'Teenagers should not compare themselves with others all the time', 'A slower lifestyle can support personal happiness'],
      discussionExpressions: {
        opening: 'I think lying flat can be harmful if teenagers lose motivation.',
        agreeing: 'I agree because students still need goals for the future.',
        disagreeing: 'I see your point, but slowing down can also protect mental health.',
        example: 'For example, some students may stop trying because they feel competition is too stressful.'
      },
      sample: {
        opening: 'I think the lying flat attitude can be harmful when it means giving up all effort.',
        reason: 'One reason is that teenagers still need goals and motivation to prepare for the future.',
        example: 'For example, teenagers who stop working toward goals may lose chances to improve themselves and prepare for the future.',
        conclusion: 'So students should reduce unnecessary pressure, but they should still stay motivated and productive.'
      }
    },
    {
      id: 10,
      category: '心理健康、学业压力与成长',
      title: 'Gap Year与“慢节奏成长”',
      englishTitle: 'Gap Year & Slow Growth',
      background: [
        'More students around the world are considering taking a gap year before entering university.',
        'During this time, some choose to travel, volunteer, work part-time, or explore personal interests instead of continuing formal education immediately.',
        'Supporters believe a gap year helps teenagers gain life experience, reduce stress, and better understand their future goals.',
        'However, critics worry that students may lose motivation for study or fall behind academically.'
      ],
      debateTopic: 'Should teenagers be encouraged to slow down and explore life beyond academics?',
      keyPhrases: [bank.relieveAcademicPressure, bank.maintainMentalWellBeing, bank.achievePersonalGrowth, bank.balanceStudyAndLeisure, bank.broadenPersonalHorizons, bank.participateInVolunteerActivities, bank.improveCommunicationSkills, bank.gainRealLifeExperience],
      universalPhrases: [bank.prepareStudentsForTheFuture, bank.stayMotivatedAndProductive, bank.developProblemSolvingSkills],
      argumentsFor: ['A gap year gives real-life experience', 'It helps students understand future goals', 'It can reduce stress', 'It broadens personal horizons'],
      argumentsAgainst: ['Students may lose study motivation', 'They may fall behind academically', 'Not every family can support it', 'Some students may waste the time'],
      discussionExpressions: {
        opening: 'I think teenagers can benefit from exploring life beyond academics.',
        agreeing: 'I agree because real-life experience is also important.',
        disagreeing: 'That may be true, but some students may lose motivation.',
        example: 'For example, volunteering can help teenagers improve communication skills.'
      },
      sample: {
        opening: 'I believe teenagers should have chances to explore life beyond academics, but they need a clear plan.',
        reason: 'One reason is that real-life experience can help students understand themselves and their future goals.',
        example: 'For example, during a gap year, students can volunteer or work part-time to gain real-life experience.',
        conclusion: 'Therefore, a slower path can be helpful if students use the time responsibly.'
      }
    },
    {
      id: 11,
      category: '心理健康、学业压力与成长',
      title: '学校与心理健康责任',
      englishTitle: 'Schools & Mental Health Responsibility',
      background: [
        'In recent years, teenage mental health problems such as anxiety, depression, and emotional stress have received growing public attention.',
        'Many students spend most of their time at school, where academic pressure and social relationships strongly affect their emotional well-being.',
        'As a result, some schools have introduced counseling rooms, mental health education, and emotional support programs.',
        'However, others argue that mental health should mainly be the responsibility of families and individuals rather than schools.'
      ],
      debateTopic: 'To what extent should schools be responsible for students\' mental health?',
      keyPhrases: [bank.maintainMentalWellBeing, bank.relieveAcademicPressure, bank.reduceFeelingsOfAnxiety, { term: 'emotional support', definition: '情绪支持' }],
      universalPhrases: [bank.improveCommunicationSkills, bank.buildSelfConfidence, bank.formHealthyHabits, bank.achievePersonalGrowth],
      argumentsFor: ['Students spend much time at school', 'School pressure affects emotions', 'Counseling can help students early', 'Teachers can notice problems quickly'],
      argumentsAgainst: ['Families also play a major role', 'Schools cannot solve every personal problem', 'Students need personal responsibility', 'Schools may not have enough professional resources'],
      discussionExpressions: {
        opening: 'I think schools should take some responsibility for students\' mental health.',
        agreeing: 'I agree because students spend a lot of time at school.',
        disagreeing: 'I understand your opinion; however, families are also important.',
        example: 'For example, counseling rooms can help students talk about stress.'
      },
      sample: {
        opening: 'I think schools should be partly responsible for students\' mental health because school life strongly affects teenagers.',
        reason: 'The reason is that teachers can often notice stress and problems early at school.',
        example: 'For example, if a student is under great academic pressure, a teacher or counselor may notice the problem and offer support.',
        conclusion: 'So schools, families, and students should work together to protect mental well-being.'
      }
    },
    {
      id: 12,
      category: '校园教育与社会责任',
      title: '社区服务与社会实践',
      englishTitle: 'Community Service & Social Practice',
      background: [
        'More schools around the world are encouraging students to participate in volunteer work and community service activities.',
        'Some students visit nursing homes, join environmental projects, or help organize local charity events.',
        'Supporters believe these experiences help teenagers develop responsibility, communication skills, and a stronger understanding of society.',
        'However, critics argue that forcing students to participate may reduce their genuine interest in helping others.'
      ],
      debateTopic: 'Should community service and social practice become compulsory parts of secondary education?',
      keyPhrases: [bank.achievePersonalGrowth, bank.developPracticalLifeSkills, bank.strengthenSocialResponsibility, bank.participateInVolunteerActivities, bank.improveCommunicationSkills, bank.gainRealLifeExperience, bank.makeResponsibleDecisions],
      universalPhrases: [bank.broadenPersonalHorizons, bank.developProblemSolvingSkills, bank.maintainMentalWellBeing],
      argumentsFor: ['It strengthens social responsibility', 'Students gain real-life experience', 'It improves communication skills', 'It helps students understand society'],
      argumentsAgainst: ['Forced service may reduce genuine interest', 'Students already face academic pressure', 'Some activities may become formal tasks', 'Students need personal choice'],
      discussionExpressions: {
        opening: 'I think community service should be part of secondary education.',
        agreeing: 'I agree because students can learn responsibility from real life.',
        disagreeing: 'That may be true, but forcing students may reduce their interest.',
        example: 'For example, helping in a charity event can improve communication skills.'
      },
      sample: {
        opening: 'I believe community service should be encouraged because it helps students learn outside the classroom.',
        reason: 'One reason is that students can learn responsibility and communication through real activities.',
        example: 'For example, when students visit nursing homes or join charity events, they can develop social responsibility and communication skills.',
        conclusion: 'Therefore, schools should include community service, but they should give students different choices.'
      }
    },
    {
      id: 13,
      category: '校园教育与社会责任',
      title: '校园劳动教育回归',
      englishTitle: 'Labor Education in Schools',
      background: [
        'Many schools have recently started paying more attention to labor education, encouraging students to participate in activities such as cleaning classrooms, cooking, gardening, and community service.',
        'Educators believe these activities help students develop responsibility, independence, and practical life skills.',
        'However, some parents argue that students are already under heavy academic pressure and should spend more time focusing on their studies instead of doing physical labor.',
        'As modern education increasingly emphasizes all-round development, society continues debating whether labor education should play a larger role in schools.'
      ],
      debateTopic: 'Should labor education become a more important part of secondary school education?',
      keyPhrases: [bank.developPracticalLifeSkills, bank.strengthenSocialResponsibility, bank.formHealthyHabits, bank.developProblemSolvingSkills, bank.gainRealLifeExperience, bank.improveSelfDiscipline],
      universalPhrases: [bank.achievePersonalGrowth, bank.makeResponsibleDecisions, bank.prepareStudentsForTheFuture],
      argumentsFor: ['It develops practical life skills', 'It builds responsibility and independence', 'It supports all-round development', 'Students learn to respect labor'],
      argumentsAgainst: ['Students already have heavy workloads', 'It may take time away from academic study', 'Some tasks may not be meaningful', 'Families can teach life skills at home'],
      discussionExpressions: {
        opening: 'I think labor education should become more important in schools.',
        agreeing: 'I agree because students need practical life skills.',
        disagreeing: 'I see your point, but students already have too much academic pressure.',
        example: 'For example, cooking and cleaning can make students more independent.'
      },
      sample: {
        opening: 'I believe labor education is important because students should not only learn from books.',
        reason: 'One reason is that practical tasks can help students become more independent and responsible.',
        example: 'For example, cleaning classrooms or gardening can help students build responsibility and practical life skills.',
        conclusion: 'So labor education should be included, but it should not create too much extra pressure.'
      }
    },
    {
      id: 14,
      category: '娱乐文化与青少年消费',
      title: '演唱会与文旅经济热潮',
      englishTitle: 'Concerts & Cultural Tourism',
      background: [
        'In recent years, large concerts, music festivals, and live performances have become increasingly popular among young people.',
        'Many cities now organize major entertainment events to attract tourists and boost local economies.',
        'Teenagers often travel to different cities to attend concerts of their favorite singers or bands, spending significant amounts of money on tickets, transportation, and merchandise.',
        'Some people believe these activities help young people relax and support cultural industries. Others argue that teenagers may become overly obsessed with entertainment consumption and ignore more meaningful personal goals.'
      ],
      debateTopic: 'Do large entertainment events bring more benefits or drawbacks to teenagers?',
      keyPhrases: [bank.balanceStudyAndLeisure, bank.broadenPersonalHorizons, bank.improveCommunicationSkills, bank.createUnrealisticExpectations, bank.encourageCreativeThinking],
      universalPhrases: [bank.makeResponsibleDecisions, bank.achievePersonalGrowth, bank.buildSelfConfidence],
      argumentsFor: ['They help teenagers relax', 'They support cultural industries', 'They create shared experiences with friends', 'They can broaden personal horizons'],
      argumentsAgainst: ['Teenagers may spend too much money', 'They may become obsessed with entertainment', 'They may ignore study or personal goals', 'Online trends may create unrealistic consumption pressure'],
      discussionExpressions: {
        opening: 'I think large entertainment events can be positive if teenagers spend responsibly.',
        agreeing: 'I agree because concerts can help students relax.',
        disagreeing: 'That may be true, but teenagers may spend too much money.',
        example: 'For example, some fans buy expensive tickets and merchandise again and again.'
      },
      sample: {
        opening: 'I think large entertainment events bring both benefits and drawbacks, but teenagers must make responsible decisions.',
        reason: 'The reason is that entertainment can help students relax, but too much spending may become a problem.',
        example: 'For example, a concert can help students relax after exams, but spending too much money on tickets is not wise.',
        conclusion: 'Therefore, teenagers can enjoy entertainment, but they should balance it with study and personal goals.'
      }
    },
    {
      id: 15,
      category: '娱乐文化与青少年消费',
      title: '环保行动与学生责任',
      englishTitle: 'Environmental Action & Student Responsibility',
      background: [
        'As environmental problems become more serious worldwide, many schools have started encouraging students to participate in environmental activities such as garbage sorting, recycling programs, and volunteer projects.',
        'Some people believe teenagers should actively take part in protecting the environment because small daily actions can create long-term positive change.',
        'However, others argue that students should focus mainly on their studies, while governments and large companies should handle environmental issues instead.',
        'This debate reflects different opinions about the role teenagers should play in solving global environmental problems.'
      ],
      debateTopic: 'Should teenagers spend more time participating in environmental protection activities?',
      keyPhrases: [bank.strengthenSocialResponsibility, bank.participateInVolunteerActivities, bank.protectTheNaturalEnvironment, bank.reduceEnvironmentalPollution, bank.formHealthyHabits, bank.makeResponsibleDecisions],
      universalPhrases: [bank.developPracticalLifeSkills, bank.achievePersonalGrowth, bank.improveCommunicationSkills],
      argumentsFor: ['Small daily actions create long-term change', 'It strengthens social responsibility', 'Teenagers can form healthy habits', 'Environmental activities are practical education'],
      argumentsAgainst: ['Students should focus mainly on studies', 'Governments and companies have greater responsibility', 'Some activities may take too much time', 'Individual action may have limited impact'],
      discussionExpressions: {
        opening: 'I think teenagers should spend some time on environmental protection.',
        agreeing: 'I agree because small actions can make a difference.',
        disagreeing: 'I understand your point; however, students also need to focus on studies.',
        example: 'For example, students can join recycling programs or garbage sorting at school.'
      },
      sample: {
        opening: 'I believe teenagers should take part in environmental protection because they are also members of society.',
        reason: 'One reason is that small actions from students can help build better habits and protect the environment.',
        example: 'For example, students can reduce waste, sort garbage, and join volunteer activities to protect the natural environment.',
        conclusion: 'So teenagers should help the environment while still balancing their schoolwork.'
      }
    }
  ]
};

const extra = (term: string, definition: string): HuafuPhrase => ({
  term,
  definition,
  source: 'extra',
});

const extraKeyPhrasesByTopic: Record<number, HuafuPhrase[]> = {
  1: [
    extra('set clear rules', '制定明确规则'),
    extra('use AI wisely', '明智使用 AI'),
    extra('check the answer', '检查答案'),
    extra('write in your own words', '用自己的话写'),
    extra('ask teachers for help', '向老师求助'),
    extra('learn step by step', '一步步学习'),
  ],
  2: [
    extra('fake video', '虚假视频'),
    extra('tell the truth', '辨别真相'),
    extra('protect personal information', '保护个人信息'),
    extra('be careful online', '上网要小心'),
    extra('check before sharing', '分享前先核实'),
    extra('hurt other people', '伤害他人'),
    extra('make clear laws', '制定明确法律'),
    extra('use technology safely', '安全使用科技'),
  ],
  3: [
    extra('watch short videos', '看短视频'),
    extra('waste too much time', '浪费太多时间'),
    extra('keep scrolling', '一直刷'),
    extra('focus on homework', '专心做作业'),
    extra('take a short break', '短暂休息'),
    extra('control screen time', '控制屏幕时间'),
  ],
  4: [
    extra('online lessons', '线上课程'),
    extra('use learning apps', '使用学习软件'),
    extra('talk with classmates', '和同学交流'),
    extra('learn in the classroom', '在教室学习'),
    extra('combine two ways', '结合两种方式'),
    extra('keep good study habits', '保持好的学习习惯'),
  ],
  5: [
    extra('edited photos', '修过的照片'),
    extra('real life', '真实生活'),
    extra('feel less confident', '变得不自信'),
    extra('care about likes', '在意点赞'),
    extra('follow positive accounts', '关注积极账号'),
    extra('be yourself', '做自己'),
  ],
  6: [
    extra('try first', '先自己尝试'),
    extra('find ideas quickly', '快速找思路'),
    extra('solve problems by yourself', '自己解决问题'),
    extra('use AI as a tool', '把 AI 当工具'),
    extra('not copy directly', '不要直接照抄'),
    extra('keep practicing', '保持练习'),
  ],
  7: [
    extra('feel stressed', '感到压力大'),
    extra('talk to someone', '找人聊一聊'),
    extra('get enough sleep', '睡眠充足'),
    extra('study with a calm mind', '平静地学习'),
    extra('ask for support', '寻求支持'),
    extra('care about feelings', '关注感受'),
    extra('do better in school', '在学校表现更好'),
    extra('keep a healthy mind', '保持健康心态'),
  ],
  8: [
    extra('too much homework', '太多作业'),
    extra('have time for hobbies', '有时间发展爱好'),
    extra('take enough rest', '充分休息'),
    extra('learn from pressure', '从压力中学习'),
    extra('set small goals', '设立小目标'),
    extra('enjoy school life', '享受校园生活'),
  ],
  9: [
    extra('slow down', '慢下来'),
    extra('do not give up', '不要放弃'),
    extra('keep a simple goal', '保持简单目标'),
    extra('avoid too much comparison', '避免过度比较'),
    extra('take care of yourself', '照顾自己'),
    extra('move forward slowly', '慢慢向前'),
  ],
  10: [
    extra('make a clear plan', '制定清晰计划'),
    extra('learn from life', '从生活中学习'),
    extra('try new things', '尝试新事物'),
    extra('know yourself better', '更了解自己'),
    extra('do useful activities', '做有意义的活动'),
    extra('return to study', '回到学习中'),
  ],
  11: [
    extra('school counselor', '学校心理老师'),
    extra('listen to students', '倾听学生'),
    extra('notice problems early', '及早发现问题'),
    extra('work with parents', '和家长合作'),
    extra('give simple help', '提供简单帮助'),
    extra('safe school life', '安全的校园生活'),
    extra('share feelings', '分享感受'),
    extra('not face it alone', '不要独自面对'),
  ],
  12: [
    extra('help people in need', '帮助有需要的人'),
    extra('join school activities', '参加学校活动'),
    extra('learn kindness', '学会善意'),
    extra('work with others', '与他人合作'),
    extra('choose suitable tasks', '选择合适任务'),
    extra('serve the community', '服务社区'),
  ],
  13: [
    extra('clean the classroom', '打扫教室'),
    extra('learn basic life skills', '学习基本生活技能'),
    extra('help at home', '在家帮忙'),
    extra('respect hard work', '尊重劳动'),
    extra('do simple tasks', '做简单任务'),
    extra('be more independent', '更加独立'),
  ],
  14: [
    extra('buy tickets wisely', '理性买票'),
    extra('spend money carefully', '谨慎花钱'),
    extra('relax after exams', '考试后放松'),
    extra('go with friends', '和朋友一起去'),
    extra('do not follow blindly', '不要盲目跟风'),
    extra('keep study first', '学习优先'),
  ],
  15: [
    extra('sort rubbish', '垃圾分类'),
    extra('save water', '节约用水'),
    extra('use less plastic', '少用塑料'),
    extra('join a clean-up activity', '参加清洁活动'),
    extra('start with small actions', '从小事做起'),
    extra('make the school cleaner', '让学校更干净'),
  ],
};

const sampleAddOnsByTopic: Record<number, { disagree: HuafuSample; balanced: HuafuSample }> = {
  1: {
    disagree: {
      opening: 'I do not think schools should make very strict rules about AI.',
      reason: 'One reason is that AI can help students learn faster if they use it in the right way.',
      example: 'For example, students can ask AI to explain a difficult word, but they still write the answer by themselves.',
      conclusion: 'So schools should give guidance, not only strict punishment.',
    },
    balanced: {
      opening: 'I think schools should allow AI, but they need clear rules.',
      reason: 'The reason is that AI is useful, but students should not copy answers directly.',
      example: 'For example, students can use AI to check ideas, and then write in their own words.',
      conclusion: 'Therefore, the best way is to use AI wisely and honestly.',
    },
  },
  2: {
    disagree: {
      opening: 'I do not think deepfake technology is always harmful.',
      reason: 'One reason is that it can be used for movies, videos, and creative projects.',
      example: 'For example, a film team can use this technology to make a story more interesting.',
      conclusion: 'So the technology itself is not the problem; the problem is how people use it.',
    },
    balanced: {
      opening: 'I think deepfake technology has both good and bad sides.',
      reason: 'It can be creative, but it can also spread fake information.',
      example: 'For example, it may help in filmmaking, but a fake video may also hurt someone.',
      conclusion: 'Therefore, we should use it carefully and check information before sharing.',
    },
  },
  3: {
    disagree: {
      opening: 'I do not fully agree that recommendation algorithms are always bad.',
      reason: 'One reason is that short videos can also teach useful information quickly.',
      example: 'For example, students may watch a short English video and learn a new phrase.',
      conclusion: 'So the key is self-control, not stopping all short videos.',
    },
    balanced: {
      opening: 'I think short-video algorithms can be useful, but students must control their time.',
      reason: 'They can give quick information, but too much scrolling hurts concentration.',
      example: 'For example, watching for ten minutes is fine, but watching for two hours is not healthy.',
      conclusion: 'Therefore, teenagers should use short videos with a time limit.',
    },
  },
  4: {
    disagree: {
      opening: 'I do not think digital learning should become the main form of education.',
      reason: 'One reason is that students still need face-to-face communication with teachers and classmates.',
      example: 'For example, group discussion is easier and more natural in a real classroom.',
      conclusion: 'So traditional classrooms should still play an important role.',
    },
    balanced: {
      opening: 'I think schools should combine digital learning and traditional classrooms.',
      reason: 'Digital tools are convenient, but classroom learning gives better interaction.',
      example: 'For example, students can review online after having a face-to-face lesson.',
      conclusion: 'Therefore, using both ways is better than choosing only one.',
    },
  },
  5: {
    disagree: {
      opening: 'I do not think social media always creates unrealistic expectations.',
      reason: 'One reason is that students can choose positive and useful content online.',
      example: 'For example, they can follow accounts about study tips, sports, or healthy habits.',
      conclusion: 'So social media can be helpful if teenagers use it carefully.',
    },
    balanced: {
      opening: 'I think social media can influence teenagers, but it depends on how they use it.',
      reason: 'Some posts create pressure, while others can give useful ideas.',
      example: 'For example, edited photos may make students compare themselves, but positive posts can encourage them.',
      conclusion: 'Therefore, teenagers should follow healthy content and be confident in real life.',
    },
  },
  6: {
    disagree: {
      opening: 'I do not think AI must weaken independent thinking.',
      reason: 'One reason is that AI can explain difficult ideas and help students understand faster.',
      example: 'For example, a student can ask AI for a simple explanation and then solve the problem by himself.',
      conclusion: 'So AI can support thinking if students use it as a tool.',
    },
    balanced: {
      opening: 'I think AI can help students, but they should try by themselves first.',
      reason: 'AI is useful, but using it too early may make students lazy.',
      example: 'For example, students can think for ten minutes before asking AI for help.',
      conclusion: 'Therefore, students should use AI after they have tried their own ideas.',
    },
  },
  7: {
    disagree: {
      opening: 'I do not think schools should put emotional well-being above academic performance all the time.',
      reason: 'One reason is that grades are also important for students\' future choices.',
      example: 'For example, good study habits can help students enter better schools later.',
      conclusion: 'So schools should still keep clear learning standards.',
    },
    balanced: {
      opening: 'I think schools should care about both mental health and academic performance.',
      reason: 'Students need good grades, but they also need a healthy mind.',
      example: 'For example, a stressed student may study hard but still do badly because he feels tired.',
      conclusion: 'Therefore, schools should balance study goals with emotional support.',
    },
  },
  8: {
    disagree: {
      opening: 'I do not think academic pressure is always bad for teenagers.',
      reason: 'One reason is that some pressure can push students to work harder.',
      example: 'For example, a small exam goal can help students stay focused and organized.',
      conclusion: 'So pressure can be useful if it is not too heavy.',
    },
    balanced: {
      opening: 'I think academic pressure can help students, but too much pressure is harmful.',
      reason: 'Students need goals, but they also need rest and hobbies.',
      example: 'For example, homework can help learning, but too many extra classes may make students tired.',
      conclusion: 'Therefore, teenagers should keep a healthy balance between study and life.',
    },
  },
  9: {
    disagree: {
      opening: 'I do not think the lying flat attitude is always harmful.',
      reason: 'One reason is that slowing down can help students reduce stress.',
      example: 'For example, a student may take a short break and then return to study with a better mood.',
      conclusion: 'So lying flat is not wrong if it only means taking care of yourself.',
    },
    balanced: {
      opening: 'I think teenagers can slow down, but they should not give up.',
      reason: 'Rest is important, but students still need simple goals.',
      example: 'For example, they can study step by step instead of comparing themselves with others all the time.',
      conclusion: 'Therefore, students should protect their mental health and keep moving forward.',
    },
  },
  10: {
    disagree: {
      opening: 'I do not think every teenager should be encouraged to slow down beyond academics.',
      reason: 'One reason is that some students may lose study motivation without a clear plan.',
      example: 'For example, if a student takes a gap year but only plays games, the year may be wasted.',
      conclusion: 'So exploration is useful only when students have a plan.',
    },
    balanced: {
      opening: 'I think exploring life can be good, but teenagers need clear goals.',
      reason: 'Life experience can help students grow, but study is still important.',
      example: 'For example, volunteering during a break is useful, but students should also prepare to return to school.',
      conclusion: 'Therefore, a slower path should be planned carefully.',
    },
  },
  11: {
    disagree: {
      opening: 'I do not think schools should be fully responsible for students\' mental health.',
      reason: 'One reason is that families also know students very well and should offer support.',
      example: 'For example, parents can listen to their children and help them after school.',
      conclusion: 'So schools should help, but families and students also have responsibility.',
    },
    balanced: {
      opening: 'I think schools should share the responsibility for students\' mental health.',
      reason: 'Schools see students every day, but families are also very important.',
      example: 'For example, teachers may notice stress at school, and parents can give support at home.',
      conclusion: 'Therefore, schools and families should work together.',
    },
  },
  12: {
    disagree: {
      opening: 'I do not think community service should be compulsory for every student.',
      reason: 'One reason is that forced service may make students less interested in helping others.',
      example: 'For example, some students may only finish the hours and not really care about the activity.',
      conclusion: 'So schools should encourage service, but they should also give students choices.',
    },
    balanced: {
      opening: 'I think community service is useful, but it should be flexible.',
      reason: 'Students can learn responsibility, but they should choose suitable activities.',
      example: 'For example, some students may like charity work, while others may prefer environmental projects.',
      conclusion: 'Therefore, community service should be encouraged with different choices.',
    },
  },
  13: {
    disagree: {
      opening: 'I do not think labor education should take too much school time.',
      reason: 'One reason is that students already have heavy academic work.',
      example: 'For example, if students spend too much time on extra tasks, they may have less time to review lessons.',
      conclusion: 'So labor education should be simple and not add too much pressure.',
    },
    balanced: {
      opening: 'I think labor education is helpful, but it should be simple and meaningful.',
      reason: 'Students need life skills, but they also need time for study.',
      example: 'For example, cleaning the classroom once a week can build responsibility without taking too much time.',
      conclusion: 'Therefore, schools should include labor education in a light way.',
    },
  },
  14: {
    disagree: {
      opening: 'I do not think large entertainment events are mostly bad for teenagers.',
      reason: 'One reason is that concerts can help students relax and enjoy culture.',
      example: 'For example, after exams, going to a concert with friends can be a happy memory.',
      conclusion: 'So entertainment is fine if students spend money carefully.',
    },
    balanced: {
      opening: 'I think entertainment events can be good, but teenagers should be responsible.',
      reason: 'They can help students relax, but too much spending is not wise.',
      example: 'For example, buying one ticket is fine, but buying many expensive items may create pressure.',
      conclusion: 'Therefore, teenagers should enjoy entertainment without following trends blindly.',
    },
  },
  15: {
    disagree: {
      opening: 'I do not think teenagers should spend too much time on environmental activities.',
      reason: 'One reason is that students also need to focus on their studies.',
      example: 'For example, joining a clean-up activity every day may take too much time from homework.',
      conclusion: 'So students should help the environment in simple daily ways.',
    },
    balanced: {
      opening: 'I think teenagers should protect the environment, but they should keep a balance.',
      reason: 'Small actions are useful, but schoolwork is also important.',
      example: 'For example, students can sort rubbish and save water without spending too much extra time.',
      conclusion: 'Therefore, teenagers should start with small actions and balance their studies.',
    },
  },
};

const buildSampleAnswers = (topic: HuafuTopic): HuafuSampleAnswer[] => {
  const addOns = sampleAddOnsByTopic[topic.id];
  if (!addOns) {
    return [{ label: 'Agree 正方', tone: 'agree', ...topic.sample }];
  }

  return [
    { label: 'Agree 正方', tone: 'agree', ...topic.sample },
    { label: 'Disagree 反方', tone: 'disagree', ...addOns.disagree },
    { label: 'Balanced 平衡', tone: 'balanced', ...addOns.balanced },
  ];
};

huafuData.topics = huafuData.topics.map(topic => ({
  ...topic,
  keyPhrases: [...topic.keyPhrases, ...(extraKeyPhrasesByTopic[topic.id] ?? [])],
  sampleAnswers: buildSampleAnswers(topic),
}));
