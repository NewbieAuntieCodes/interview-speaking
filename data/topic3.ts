import type { Topic } from './types.ts';

export const topic: Topic = {
  category: "三、日常活动",
  questions: [
    {
      q: "你在周末或空闲时间通常喜欢做什么？",
      en: [
        "What do you usually like to do on weekends or in your free time?",
        "What do you like to do in your free time?",
        "How do you like to spend your free time?"
      ],
      keywords: [
        "do some exercise 做运动，锻炼", "go outdoors 去户外", "hiking 远足", "volunteering 志愿服务",
        "yoga 瑜伽", "meditation 冥想", "outdoor activity 户外活动", "indoor activity 室内活动",
        "photography 摄影", "cycling 骑自行车", "board game 桌游", "stargaze 观星", "explore nature 探索自然"
      ]
    },
    {
      q: "你分担多少家务？你都做些什么？",
      en: [
        "How much do you do around the house? What chores do you do?",
        "How often do you help with chores? What chores can you handle?"
      ],
      keywords: [
        "frequently 经常", "occasionally 偶尔", "vacuum 用真空吸尘器清扫", "sweep 扫",
        "mop 用拖把擦干净", "laundry 洗衣物的活", "iron 熨烫", "tidy up 整理",
        "organize 整理", "fold 折叠"
      ]
    },
    {
      q: "你如何管理你的时间？你能控制你的屏幕使用时间吗？",
      en: [
        "How do you manage your time? Can you limit your screen time?",
        "How do you handle your schedule? Do you have control over how much time you spend on electronic devices?"
      ],
      keywords: [
        "organization 组织", "priority 优先事项", "schedule 日程", "deadline 截止日期",
        "screen time 屏幕时间", "balance 平衡", "self - control 自我控制", "self - discipline 自律",
        "routine 日常习惯", "limit 限制", "focus 专注", "regular 定期的", "goal 目标"
      ]
    }
  ]
};
