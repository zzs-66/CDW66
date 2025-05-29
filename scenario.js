// 游戏剧本
const script = [
    {
        background: 'bg-school',
        characters: [{id: 'sakura', position: 'left'}],
        speaker: "樱",
        dialog: "早上好！今天天气真好，不是吗？樱花盛开的时候总是让我心情愉悦。对了，你今天放学后有空吗？",
        choices: [
            { text: "当然有空！想去哪里？", next: 1, affection: +10 },
            { text: "抱歉，今天我有其他安排了", next: 2, affection: -5 }
        ]
    },
    {
        background: 'bg-school',
        characters: [{id: 'sakura', position: 'left'}],
        speaker: "樱",
        dialog: "太好了！我知道附近新开了一家咖啡馆，听说他们的樱花蛋糕非常棒。要不要一起去尝尝？",
        choices: [
            { text: "听起来很棒！我很喜欢甜点", next: 3, affection: +15 },
            { text: "我不太喜欢甜食，不过可以陪你去", next: 4, affection: +5 }
        ]
    },
    {
        background: 'bg-school',
        characters: [{id: 'sakura', position: 'left'}],
        speaker: "樱",
        dialog: "这样啊...没关系，下次有机会再一起去吧。",
        choices: [
            { text: "好的，明天怎么样？", next: 5, affection: +5 },
            { text: "嗯，改天吧", next: 6, affection: -10 }
        ]
    },
    {
        background: 'bg-school',
        characters: [{id: 'sakura', position: 'left'}],
        speaker: "樱",
        dialog: "太好了！那放学后我们在校门口见吧。期待和你一起品尝美味的蛋糕！",
        choices: [
            { text: "好的，不见不散！", next: 7, affection: +10 }
        ]
    },
    {
        background: 'bg-school',
        characters: [{id: 'sakura', position: 'left'}],
        speaker: "樱",
        dialog: "真的吗？谢谢你愿意陪我去！那放学后我们在校门口见面吧。",
        choices: [
            { text: "好的，一会儿见！", next: 7, affection: +5 }
        ]
    },
    {
        background: 'bg-school',
        characters: [{id: 'sakura', position: 'left'}],
        speaker: "樱",
        dialog: "明天？嗯...让我看看日程...明天下午我有空！",
        choices: [
            { text: "那明天放学后见？", next: 8, affection: +10 }
        ]
    },
    {
        background: 'bg-school',
        characters: [{id: 'sakura', position: 'left'}],
        speaker: "樱",
        dialog: "嗯...那好吧。记得联系我哦！",
        choices: [
            { text: "一定！", next: 9, affection: 0 }
        ]
    },
    {
        background: 'bg-cafe',
        characters: [{id: 'sakura', position: 'left'}],
        speaker: "樱",
        dialog: "这家咖啡馆真漂亮！看，那就是他们的招牌樱花蛋糕。",
        choices: [
            { text: "看起来真美味！", next: 10, affection: +5 },
            { text: "你选的地方真不错", next: 11, affection: +10 }
        ]
    },
    {
        background: 'bg-school',
        characters: [{id: 'sakura', position: 'left'}],
        speaker: "樱",
        dialog: "明天见！我会期待的！",
        choices: [
            { text: "明天见！", next: 12, affection: +5 }
        ]
    },
    {
        background: 'bg-school',
        characters: [{id: 'sakura', position: 'left'}],
        speaker: "樱",
        dialog: "嗯，再见！",
        choices: [
            { text: "再见", next: 0, affection: 0 }
        ]
    }
];
