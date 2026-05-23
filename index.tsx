import { courses } from './data.ts';
import type {
  Topic,
  Course,
  BasisCategory,
  BasisTopicSection,
  BasisPictureItem,
  BasisQuiz,
  HuafuCourseData,
  HuafuPhrase,
  HuafuTopic
} from './data.ts';

const DEFAULT_COURSE_ID = 'huafu';

document.addEventListener('DOMContentLoaded', () => {
  const topicList = document.getElementById('topic-list') as HTMLUListElement;
  const topicTitle = document.getElementById('topic-title') as HTMLHeadingElement;
  const questionList = document.getElementById('question-list') as HTMLDivElement;
  const courseSelector = document.getElementById('course-selector') as HTMLDivElement;
  const appTitle = document.getElementById('app-title') as HTMLHeadingElement;

  let currentCourse: Course | null = null;
  let currentSimpleTopics: Topic[] = [];
  let currentBasisCategories: BasisCategory[] = [];
  let currentHuafuData: HuafuCourseData | null = null;

  const scrollToTop = () => {
    document.getElementById('content-area')?.scrollTo(0, 0);
    window.scrollTo(0, 0);
  };

  const setActiveTopic = (target: HTMLElement) => {
    topicList.querySelectorAll('.topic-item.active').forEach(el => el.classList.remove('active'));
    target.classList.add('active');
  };

  const createListBlock = (title: string, items: string[], className = 'list-block') => {
    const block = document.createElement('div');
    block.className = className;

    const heading = document.createElement('div');
    heading.className = 'block-title';
    heading.textContent = title;
    block.appendChild(heading);

    const list = document.createElement('ul');
    list.className = 'content-list';
    items.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      list.appendChild(li);
    });
    block.appendChild(list);
    return block;
  };

  const createExpressionsBlock = (expressions?: Array<string | { term: string; definition?: string }>) => {
    if (!expressions || expressions.length === 0) return null;
    const block = document.createElement('div');
    block.className = 'list-block';

    const heading = document.createElement('div');
    heading.className = 'block-title';
    heading.textContent = '表达/词组';
    block.appendChild(heading);

    const list = document.createElement('ul');
    list.className = 'content-list';

    expressions.forEach(item => {
      const li = document.createElement('li');
      if (typeof item === 'string') {
        li.textContent = item;
      } else {
        const term = document.createElement('strong');
        term.textContent = item.term;
        li.appendChild(term);
        if (item.definition) {
          const definition = document.createElement('span');
          definition.textContent = ` — ${item.definition}`;
          li.appendChild(definition);
        }
      }
      list.appendChild(li);
    });

    block.appendChild(list);
    return block;
  };

  const createHuafuPhraseGrid = (phrases: HuafuPhrase[], className = '') => {
    const grid = document.createElement('div');
    grid.className = `huafu-phrase-grid ${className}`.trim();

    phrases.forEach(phrase => {
      const item = document.createElement('div');
      item.className = 'huafu-phrase-card';

      const term = document.createElement('div');
      term.className = 'huafu-phrase-term';
      term.textContent = phrase.term;
      item.appendChild(term);

      const definition = document.createElement('div');
      definition.className = 'huafu-phrase-definition';
      definition.textContent = phrase.definition;
      item.appendChild(definition);

      grid.appendChild(item);
    });

    return grid;
  };

  const createHuafuBulletPanel = (title: string, items: string[], tone: 'for' | 'against') => {
    const panel = document.createElement('div');
    panel.className = `huafu-argument-panel ${tone}`;

    const heading = document.createElement('h3');
    heading.textContent = title;
    panel.appendChild(heading);

    const list = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    panel.appendChild(list);

    return panel;
  };

  const createHuafuSampleLine = (label: string, text: string) => {
    const line = document.createElement('div');
    line.className = 'huafu-sample-line';

    const heading = document.createElement('div');
    heading.className = 'huafu-sample-label';
    heading.textContent = label;
    line.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    line.appendChild(paragraph);

    return line;
  };

  const renderHuafuOverview = () => {
    if (!currentHuafuData) return;
    topicTitle.textContent = '考试流程与训练方法';
    questionList.innerHTML = '';

    const overview = document.createElement('div');
    overview.className = 'huafu-page';

    const hero = document.createElement('section');
    hero.className = 'huafu-hero';

    const eyebrow = document.createElement('div');
    eyebrow.className = 'huafu-eyebrow';
    eyebrow.textContent = 'HFI Interview Speaking';
    hero.appendChild(eyebrow);

    const title = document.createElement('h2');
    title.textContent = '华附面试口语 2026 年 5 月备考页';
    hero.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.textContent = '根据最新流程文档、PDF 教材和截图样式整理：先练听文章和笔记整理，再练 1 分钟个人陈述与 8-10 分钟小组讨论。';
    hero.appendChild(subtitle);

    overview.appendChild(hero);

    const infoGrid = document.createElement('section');
    infoGrid.className = 'huafu-info-grid';
    currentHuafuData.examInfo.forEach(text => {
      const card = document.createElement('div');
      card.className = 'huafu-info-card';
      card.textContent = text;
      infoGrid.appendChild(card);
    });
    overview.appendChild(infoGrid);

    const flow = document.createElement('section');
    flow.className = 'huafu-section';
    const flowTitle = document.createElement('h3');
    flowTitle.textContent = '最新面试流程 Interview Structure';
    flow.appendChild(flowTitle);

    const flowGrid = document.createElement('div');
    flowGrid.className = 'huafu-flow-grid';
    currentHuafuData.debateFlow.forEach(item => {
      const card = document.createElement('div');
      card.className = 'huafu-flow-card';

      const stage = document.createElement('h4');
      stage.textContent = item.stage;
      card.appendChild(stage);

      item.sentences.forEach(sentence => {
        const p = document.createElement('p');
        p.textContent = sentence;
        card.appendChild(p);
      });
      flowGrid.appendChild(card);
    });
    flow.appendChild(flowGrid);
    overview.appendChild(flow);

    const training = document.createElement('section');
    training.className = 'huafu-section';
    const trainingTitle = document.createElement('h3');
    trainingTitle.textContent = '课堂训练重点';
    training.appendChild(trainingTitle);
    const trainingGrid = document.createElement('div');
    trainingGrid.className = 'huafu-flow-grid';
    [
      ['听文章训练', '老师现场朗读英文短文，学生边听边抓主题、观点、原因、例子和转折信息。'],
      ['2 分钟笔记框架', 'Topic / Main idea / Reasons / Examples / My opinion / Useful words。'],
      ['1 分钟陈述结构', '观点 + 理由 + 例子 + 总结。重点是清楚自然，不是背长稿。'],
      ['小组互动能力', '练同意、补充、委婉反对、追问原因、邀请他人发言和总结讨论。'],
      ['已知主题方向', 'Home-School Cooperation 家校合作：家长与老师沟通、学生成长、适度参与和独立空间。'],
      ['反馈维度', '从内容、逻辑、语言和互动四个方面检查学生表现。'],
    ].forEach(([headingText, bodyText]) => {
      const card = document.createElement('div');
      card.className = 'huafu-flow-card';
      const heading = document.createElement('h4');
      heading.textContent = headingText;
      card.appendChild(heading);
      const p = document.createElement('p');
      p.textContent = bodyText;
      card.appendChild(p);
      trainingGrid.appendChild(card);
    });
    training.appendChild(trainingGrid);
    overview.appendChild(training);

    const bankSection = document.createElement('section');
    bankSection.className = 'huafu-section';
    const bankTitle = document.createElement('h3');
    bankTitle.textContent = '万能素材';
    bankSection.appendChild(bankTitle);
    bankSection.appendChild(createHuafuPhraseGrid(currentHuafuData.universalBank, 'compact'));
    overview.appendChild(bankSection);

    questionList.appendChild(overview);
  };

  const renderHuafuTopic = (topicIndex: number) => {
    const topic = currentHuafuData?.topics[topicIndex];
    if (!topic) return;

    topicTitle.textContent = `TOPIC ${String(topic.id).padStart(2, '0')} ${topic.title}`;
    questionList.innerHTML = '';

    const page = document.createElement('div');
    page.className = 'huafu-page';

    const header = document.createElement('section');
    header.className = 'huafu-topic-header';

    const topicNo = document.createElement('div');
    topicNo.className = 'huafu-eyebrow';
    topicNo.textContent = `TOPIC ${String(topic.id).padStart(2, '0')} / ${topic.category}`;
    header.appendChild(topicNo);

    const title = document.createElement('h2');
    title.textContent = topic.title;
    header.appendChild(title);

    const englishTitle = document.createElement('p');
    englishTitle.textContent = topic.englishTitle;
    header.appendChild(englishTitle);

    page.appendChild(header);

    const reading = document.createElement('section');
    reading.className = 'huafu-reading-card';
    const readingTitle = document.createElement('h3');
    readingTitle.textContent = '文章材料 Background Reading / Listening Script';
    reading.appendChild(readingTitle);
    topic.background.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      reading.appendChild(p);
    });
    page.appendChild(reading);

    const debate = document.createElement('section');
    debate.className = 'huafu-debate-topic';
    const debateLabel = document.createElement('div');
    debateLabel.textContent = 'Debate Topic 辩题';
    debate.appendChild(debateLabel);
    const debateQuestion = document.createElement('p');
    debateQuestion.textContent = topic.debateTopic;
    debate.appendChild(debateQuestion);
    page.appendChild(debate);

    const argumentsGrid = document.createElement('section');
    argumentsGrid.className = 'huafu-arguments-grid';
    argumentsGrid.appendChild(createHuafuBulletPanel('支持方 Arguments For', topic.argumentsFor, 'for'));
    argumentsGrid.appendChild(createHuafuBulletPanel('反对方 Arguments Against', topic.argumentsAgainst, 'against'));
    page.appendChild(argumentsGrid);

    const phraseSection = document.createElement('section');
    phraseSection.className = 'huafu-section';
    const phraseTitle = document.createElement('h3');
    phraseTitle.textContent = '核心词组 Key Phrases';
    phraseSection.appendChild(phraseTitle);
    phraseSection.appendChild(createHuafuPhraseGrid(topic.keyPhrases));
    page.appendChild(phraseSection);

    const expressions = document.createElement('section');
    expressions.className = 'huafu-section';
    const expressionsTitle = document.createElement('h3');
    expressionsTitle.textContent = '小组讨论示范 Debate Expressions';
    expressions.appendChild(expressionsTitle);

    const expressionGrid = document.createElement('div');
    expressionGrid.className = 'huafu-expression-grid';
    [
      ['Opening 开场', topic.discussionExpressions.opening, 'blue'],
      ['Agreeing 同意', topic.discussionExpressions.agreeing, 'green'],
      ['Disagreeing 反驳', topic.discussionExpressions.disagreeing, 'red'],
      ['Example 举例', topic.discussionExpressions.example, 'yellow'],
    ].forEach(([label, text, tone]) => {
      const card = document.createElement('div');
      card.className = `huafu-expression-card ${tone}`;
      const labelEl = document.createElement('h4');
      labelEl.textContent = label;
      card.appendChild(labelEl);
      const textEl = document.createElement('p');
      textEl.textContent = text;
      card.appendChild(textEl);
      expressionGrid.appendChild(card);
    });
    expressions.appendChild(expressionGrid);
    page.appendChild(expressions);

    const sample = document.createElement('section');
    sample.className = 'huafu-sample-card';
    const sampleTitle = document.createElement('h3');
    sampleTitle.textContent = '示范例句 Sample Answer';
    sample.appendChild(sampleTitle);
    sample.appendChild(createHuafuSampleLine('Opening', topic.sample.opening));
    sample.appendChild(createHuafuSampleLine('Reason', topic.sample.reason));
    sample.appendChild(createHuafuSampleLine('Example', topic.sample.example));
    sample.appendChild(createHuafuSampleLine('Conclusion', topic.sample.conclusion));
    page.appendChild(sample);

    const universal = document.createElement('section');
    universal.className = 'huafu-universal-box';
    const universalTitle = document.createElement('h3');
    universalTitle.textContent = '万能素材';
    universal.appendChild(universalTitle);
    universal.appendChild(createHuafuPhraseGrid(topic.universalPhrases, 'plain'));
    page.appendChild(universal);

    questionList.appendChild(page);
  };

  const renderSimpleQuestions = (topicIndex: number) => {
    const topic = currentSimpleTopics[topicIndex];
    if (!topic) return;

    topicTitle.textContent = topic.category;
    questionList.innerHTML = '';

    topic.questions.forEach((qObj, index) => {
      const card = document.createElement('div');
      card.className = 'question-card';

      const questionText = document.createElement('p');
      questionText.className = 'question-text';
      questionText.textContent = `${index + 1}. ${qObj.q}`;
      card.appendChild(questionText);

      if (qObj.en && qObj.en.length > 0) {
        const translationsDiv = document.createElement('div');
        translationsDiv.className = 'question-translations';
        qObj.en.forEach(translation => {
          const p = document.createElement('p');
          p.className = 'translation-item';
          p.textContent = `・${translation}`;
          translationsDiv.appendChild(p);
        });
        card.appendChild(translationsDiv);
      }

      const hasDetails =
        Boolean(qObj.img) ||
        Boolean(qObj.keywords?.length) ||
        Boolean(qObj.thoughts?.length) ||
        Boolean(qObj.expressions?.length) ||
        Boolean(qObj.example);

      if (hasDetails) {
        const details = document.createElement('details');
        details.className = 'question-details';

        const summary = document.createElement('summary');
        summary.className = 'question-details-summary';
        summary.textContent = '展开参考';
        details.appendChild(summary);

        if (qObj.img) {
          const img = document.createElement('img');
          img.src = qObj.img;
          img.alt = qObj.q;
          img.className = 'question-image';
          details.appendChild(img);
        }

        if (qObj.keywords && qObj.keywords.length > 0) {
          const keywordsTitle = document.createElement('h3');
          keywordsTitle.className = 'keywords-title';
          keywordsTitle.textContent = '答案词：';
          details.appendChild(keywordsTitle);

          const keywordsContainer = document.createElement('div');
          keywordsContainer.className = 'keywords-container';
          qObj.keywords.forEach(keyword => {
            const tag = document.createElement('span');
            tag.className = 'keyword-tag';
            tag.textContent = keyword;
            keywordsContainer.appendChild(tag);
          });
          details.appendChild(keywordsContainer);
        }

        if (qObj.thoughts && qObj.thoughts.length > 0) {
          details.appendChild(createListBlock('思路提示', qObj.thoughts));
        }

        const expressionsBlock = createExpressionsBlock(qObj.expressions);
        if (expressionsBlock) {
          details.appendChild(expressionsBlock);
        }

        if (qObj.example) {
          const example = document.createElement('div');
          example.className = 'example-block';
          const heading = document.createElement('div');
          heading.className = 'block-title';
          heading.textContent = '示范';
          const pre = document.createElement('pre');
          pre.className = 'example-text';
          pre.textContent = qObj.example;
          example.appendChild(heading);
          example.appendChild(pre);
          details.appendChild(example);
        }

        card.appendChild(details);
      }

      questionList.appendChild(card);
    });
  };

  const renderPictureItem = (item: BasisPictureItem) => {
    const block = document.createElement('div');
    block.className = 'picture-item';

    const titleEl = document.createElement('h4');
    titleEl.textContent = item.title;
    block.appendChild(titleEl);

    if (item.questions?.length) {
      block.appendChild(createListBlock('Questions', item.questions, 'list-block compact'));
    }

    const hasDetails =
      Boolean(item.imageUrl) ||
      Boolean(item.thoughts?.length) ||
      Boolean(item.expressions?.length) ||
      Boolean(item.example);

    if (hasDetails) {
      const details = document.createElement('details');
      details.className = 'section-details';

      const summary = document.createElement('summary');
      summary.className = 'section-details-summary';
      summary.textContent = '展开参考';
      details.appendChild(summary);

      if (item.imageUrl) {
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.title;
        img.className = 'picture-image';
        details.appendChild(img);
      }

      if (item.thoughts?.length) {
        details.appendChild(createListBlock('思路提示', item.thoughts, 'list-block compact'));
      }

      const expressions = createExpressionsBlock(item.expressions);
      if (expressions) {
        expressions.classList.add('compact');
        details.appendChild(expressions);
      }

      if (item.example) {
        const example = document.createElement('div');
        example.className = 'example-block';
        const heading = document.createElement('div');
        heading.className = 'block-title';
        heading.textContent = '示范';
        const pre = document.createElement('pre');
        pre.className = 'example-text';
        pre.textContent = item.example;
        example.appendChild(heading);
        example.appendChild(pre);
        details.appendChild(example);
      }

      block.appendChild(details);
    }

    return block;
  };

  const renderQuiz = (quiz: BasisQuiz) => {
    const quizBlock = document.createElement('div');
    quizBlock.className = 'quiz-block';

    const title = document.createElement('h4');
    title.textContent = quiz.title;
    quizBlock.appendChild(title);

    const passage = document.createElement('pre');
    passage.className = 'quiz-passage';
    passage.textContent = quiz.passage;
    quizBlock.appendChild(passage);

    const questionsWrapper = document.createElement('div');
    questionsWrapper.className = 'quiz-questions';

    quiz.questions.forEach(q => {
      const questionCard = document.createElement('div');
      questionCard.className = 'quiz-question';

      const prompt = document.createElement('p');
      prompt.className = 'quiz-question-text';
      prompt.textContent = `(${q.id}) ${q.options.join(' / ')}`;
      questionCard.appendChild(prompt);

      const answer = document.createElement('p');
      answer.className = 'quiz-answer';
      answer.textContent = `Answer: ${q.answer}`;
      questionCard.appendChild(answer);

      if (q.explanation) {
        const explanation = document.createElement('p');
        explanation.className = 'quiz-explanation';
        explanation.textContent = q.explanation;
        questionCard.appendChild(explanation);
      }

      questionsWrapper.appendChild(questionCard);
    });

    quizBlock.appendChild(questionsWrapper);
    return quizBlock;
  };

  const renderSection = (section: BasisTopicSection) => {
    const card = document.createElement('div');
    card.className = 'section-card';

    const title = document.createElement('h3');
    title.className = 'section-title';
    title.textContent = section.title;
    card.appendChild(title);

    if (section.questions?.length) {
      card.appendChild(createListBlock('Questions', section.questions));
    }

    const hasDetails =
      Boolean(section.imageUrl) ||
      Boolean(section.thoughts?.length) ||
      Boolean(section.expressions?.length) ||
      Boolean(section.example) ||
      Boolean(section.pictureItems?.length) ||
      Boolean(section.quiz);

    if (hasDetails) {
      const details = document.createElement('details');
      details.className = 'section-details';

      const summary = document.createElement('summary');
      summary.className = 'section-details-summary';
      summary.textContent = '展开参考';
      details.appendChild(summary);

      if (section.imageUrl) {
        const img = document.createElement('img');
        img.src = section.imageUrl;
        img.alt = section.title;
        img.className = 'section-image';
        details.appendChild(img);
      }

      if (section.questions?.length) {
        details.appendChild(createListBlock('Questions', section.questions));
      }

      if (section.thoughts?.length) {
        details.appendChild(createListBlock('思路提示', section.thoughts));
      }

      const expressionsBlock = createExpressionsBlock(section.expressions);
      if (expressionsBlock) {
        details.appendChild(expressionsBlock);
      }

      if (section.example) {
        const example = document.createElement('div');
        example.className = 'example-block';
        const heading = document.createElement('div');
        heading.className = 'block-title';
        heading.textContent = '示范';
        const pre = document.createElement('pre');
        pre.className = 'example-text';
        pre.textContent = section.example;
        example.appendChild(heading);
        example.appendChild(pre);
        details.appendChild(example);
      }

      if (section.pictureItems?.length) {
        section.pictureItems.forEach(item => {
          details.appendChild(renderPictureItem(item));
        });
      }

      if (section.quiz) {
        details.appendChild(renderQuiz(section.quiz));
      }

      card.appendChild(details);
    }

    return card;
  };

  const renderBasisTopic = (catIndex: number, topicIndex: number) => {
    const category = currentBasisCategories[catIndex];
    const topic = category?.topics[topicIndex];
    if (!topic) return;

    topicTitle.textContent = topic.title;
    questionList.innerHTML = '';

    const meta = document.createElement('div');
    meta.className = 'topic-meta';

    const badge = document.createElement('span');
    badge.className = 'category-badge';
    badge.textContent = category.title;
    meta.appendChild(badge);

    if (topic.description) {
      const desc = document.createElement('p');
      desc.className = 'topic-description';
      desc.textContent = topic.description;
      meta.appendChild(desc);
    }

    questionList.appendChild(meta);

    topic.sections.forEach(section => {
      const sectionCard = renderSection(section);
      questionList.appendChild(sectionCard);
    });
  };

  const renderBasisSidebar = () => {
    topicList.innerHTML = '';
    currentBasisCategories.forEach((category, catIndex) => {
      const header = document.createElement('li');
      header.textContent = category.title;
      header.className = 'category-header';
      topicList.appendChild(header);

      category.topics.forEach((topic, topicIdx) => {
        const item = document.createElement('li');
        item.textContent = topic.title;
        item.className = 'topic-item rich-topic';
        item.dataset.index = `${catIndex}-${topicIdx}`;
        item.addEventListener('click', () => {
          setActiveTopic(item);
          renderBasisTopic(catIndex, topicIdx);
          scrollToTop();
        });
        topicList.appendChild(item);
      });
    });
  };

  const renderHuafuSidebar = () => {
    topicList.innerHTML = '';

    const overview = document.createElement('li');
    overview.textContent = '考试流程与训练方法';
    overview.className = 'topic-item huafu-topic';
    overview.addEventListener('click', () => {
      setActiveTopic(overview);
      renderHuafuOverview();
      scrollToTop();
    });
    topicList.appendChild(overview);

    const grouped = new Map<string, Array<{ topic: HuafuTopic; index: number }>>();
    currentHuafuData?.topics.forEach((topic, index) => {
      const topics = grouped.get(topic.category) ?? [];
      topics.push({ topic, index });
      grouped.set(topic.category, topics);
    });

    grouped.forEach((topics, category) => {
      const header = document.createElement('li');
      header.textContent = category;
      header.className = 'category-header';
      topicList.appendChild(header);

      topics.forEach(({ topic, index }) => {
        const item = document.createElement('li');
        item.textContent = `${String(topic.id).padStart(2, '0')} ${topic.title}`;
        item.className = 'topic-item huafu-topic';
        item.dataset.index = index.toString();
        item.addEventListener('click', () => {
          setActiveTopic(item);
          renderHuafuTopic(index);
          scrollToTop();
        });
        topicList.appendChild(item);
      });
    });
  };

  const renderSimpleTopics = () => {
    topicList.innerHTML = '';
    currentSimpleTopics.forEach((topic, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = topic.category;
      listItem.dataset.index = index.toString();
      listItem.className = 'topic-item simple-topic';

      listItem.addEventListener('click', () => {
        setActiveTopic(listItem);
        renderSimpleQuestions(index);
        scrollToTop();
      });

      topicList.appendChild(listItem);
    });
  };

  const renderCourseSelector = () => {
    courseSelector.innerHTML = '';
    courses.forEach(course => {
      const btn = document.createElement('button');
      btn.className = 'course-btn';
      btn.textContent = course.title;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.course-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        switchCourse(course.id);
      });

      if (course.id === DEFAULT_COURSE_ID) {
        btn.classList.add('active');
      }

      courseSelector.appendChild(btn);
    });
  };

  const switchCourse = (courseId: string) => {
    const selectedCourse = courses.find(c => c.id === courseId) ?? courses[0];
    if (!selectedCourse) return;

    currentCourse = selectedCourse;
    appTitle.textContent = selectedCourse.title;
    document.title = selectedCourse.title;

    if (selectedCourse.type === 'basis') {
      currentBasisCategories = selectedCourse.data as BasisCategory[];
      currentSimpleTopics = [];
      currentHuafuData = null;
      renderBasisSidebar();
      const firstTopic = topicList.querySelector('li.rich-topic') as HTMLLIElement | null;
      if (firstTopic) {
        firstTopic.click();
      } else {
        topicTitle.textContent = '';
        questionList.innerHTML = '';
      }
    } else if (selectedCourse.type === 'huafu') {
      currentHuafuData = selectedCourse.data as HuafuCourseData;
      currentSimpleTopics = [];
      currentBasisCategories = [];
      renderHuafuSidebar();
      const firstTopic = topicList.querySelector('li.huafu-topic') as HTMLLIElement | null;
      if (firstTopic) {
        firstTopic.click();
      } else {
        topicTitle.textContent = '';
        questionList.innerHTML = '';
      }
    } else {
      currentSimpleTopics = selectedCourse.data as Topic[];
      currentBasisCategories = [];
      currentHuafuData = null;
      renderSimpleTopics();
      const firstTopic = topicList.querySelector('li.simple-topic') as HTMLLIElement | null;
      if (firstTopic) {
        firstTopic.click();
      } else {
        topicTitle.textContent = '';
        questionList.innerHTML = '';
      }
    }
  };

  const initializeApp = () => {
    renderCourseSelector();
    switchCourse(DEFAULT_COURSE_ID);
  };

  initializeApp();
});
