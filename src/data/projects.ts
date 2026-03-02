export const projects = [
	{
		id: "project1",
		title: "坦克大战",
		description:
			'这是一款 <strong class="skill-highlight">纯C++</strong> 开发的类幸存者游戏。我利用 <strong class="skill-highlight">数据驱动</strong> 实现地图生成，并重构核心 <strong class="skill-highlight">3C</strong> 逻辑，将魔法AOE差异化为\'轰炸机支援\'；同时探索 <strong class="skill-highlight">AIGC</strong> 辅助 UI 管线提效。该项目最终获硕士全班最高分 <strong class="skill-highlight">A+</strong>，导师评价其具备\'<strong class="skill-highlight">惊人的制作水准</strong>\'。',
		tags: [
			{ text: "C++", color: "purple" as const },
			{ text: "数据驱动地图", color: "cyan" as const },
			{ text: "像素艺术", color: "pink" as const },
		],
		duration: 2,
		cover: "/images/projects/project1/main.webp",
		media: [
			"/images/projects/project1/main.webp",
			"/images/projects/project1/坦克1.webm",
			"/images/projects/project1/坦克2.webm",
			"/images/projects/project1/坦克3.webm",
		],
	},
	{
		id: "project2",
		title: "寂静之路",
		description:
			'我利用 <strong class="skill-highlight">Unity</strong> 快速构建了一款高性能移动端跑酷射击游戏。通过 <strong class="skill-highlight">对象池、FSM 及雾效优化方案</strong> 确保底层稳健与渲染效率；同时打通 <strong class="skill-highlight">Blender</strong> 至引擎的动画管线，并结合 <strong class="skill-highlight">AIGC</strong> 提升资源一致性。项目因深度打磨的 <strong class="skill-highlight">3C 打击反馈</strong> 与技术严谨性，获评等级 <strong class="skill-highlight">A</strong>。',
		tags: [
			{ text: "Unity", color: "cyan" as const },
			{ text: "c#", color: "green" as const },
			{ text: "低多边形风格", color: "amber" as const },
		],
		duration: 1.5,
		cover: "/images/projects/project2/main.webp",
		media: [
			"/images/projects/project2/main.webp",
			"/images/projects/project2/僵尸1.webm",
			"/images/projects/project2/僵尸2.webm",
			"/images/projects/project2/僵尸3.webm",
			"/images/projects/project2/僵尸4.webm",
		],
	},
	{
		id: "project3",
		title: "黄昏垂钓",
		description:
			'在面对 <strong class="skill-highlight">VR</strong> 题材开发时，我没有一味追求复杂的技术堆叠，而是优先思考 VR 的媒介本质——即\'<strong class="skill-highlight">沉浸</strong>\'与\'<strong class="skill-highlight">连接</strong>\'。我将\'<strong class="skill-highlight">元宇宙</strong>\'愿景具象化为一款日落时分的森林露营游戏。通过对钓鱼、烤火等休闲交互逻辑的细腻实现，我试图为玩家创造一个可以逃避现实、真实社交的温馨角落。这个项目让我意识到，<strong class="skill-highlight">我的使命是用技术实现最核心的用户需求</strong>。该项目最终因深刻的设计洞察与完成度获评等级 <strong class="skill-highlight">A</strong>。',
		tags: [
			{ text: "Unity", color: "purple" as const },
			{ text: "VR", color: "red" as const },
			{ text: "元宇宙", color: "cyan" as const },
		],
		duration: 1,
		cover: "/images/projects/project3/main.webp",
		media: [
			"/images/projects/project3/main.webp",
			"/images/projects/project3/钓鱼1.webm",
			"/images/projects/project3/钓鱼2.webm",
			"/images/projects/project3/钓鱼3.webm",
		],
	},
	{
		id: "project4",
		title: "追大鹅",
		description:
			'这个农场跑酷项目是我在图形学领域的一次深度实践。我<strong class="skill-highlight">从零开始手写了整个渲染管线</strong>，包括<strong class="skill-highlight">顶点</strong>的定义和<strong class="skill-highlight">光栅化</strong>逻辑，目的是彻底理解实时渲染的底层运行机制。在玩法上，我选择了经典的避障跑酷，以便将更多精力投入到<strong class="skill-highlight">视觉层次感</strong>的打磨中——例如通过多重景深机制来强化空间的延伸感。<strong class="skill-highlight">我的价值不在于对引擎工具的盲目依赖，而在于即使面对最基础的技术底座，也能通过逻辑与审美，创造出令人心动的视觉体验</strong>。',
		tags: [
			{ text: "GPU", color: "red" as const },
			{ text: "渲染", color: "purple" as const },
			{ text: "优化", color: "green" as const },
		],
		duration: 4,
		cover: "/images/projects/project4/main.webp",
		media: [
			"/images/projects/project4/main.webp",
			"/images/projects/project4/追大鹅1.webm",
			"/images/projects/project4/追大鹅2.webm",
			"/images/projects/project4/追大鹅3.webm",
		],
	},
];
