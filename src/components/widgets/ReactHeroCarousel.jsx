import React, { useState } from 'react';

const ReactHeroCarousel = () => {
  const [activeButton, setActiveButton] = useState(1);

  const buttons = [
  {
      id: 1,
      label: '产业园区',
      image: './images/resource/nav/industrial-park.png',
      background: './images/resource/switch-zone-background.jpg',
      rightContent: {
        cards: [
          { src: './images/resource/demo-co2-emission-forecast.svg', alt: 'CO2 预测', width: 'w-1/2', position: 'left-0 top-0' },
          { src: './images/resource/demo-hvac.svg', alt: 'HVAC', width: 'w-1/3', position: 'top-0 left-[60%]' },
          { src: './images/resource/demo-electricity.svg', alt: 'Electricity', width: 'w-2/3', position: 'top-1/2 left-[10%]' },
        ],
        description: `产业园区是经济发展的重要载体，通过智能化管理和数据分析，我们助力园区优化资源配置，推动绿色和可持续发展。`,
      },
    },
    {
      id: 2,
      label: '实验室和认证机构',
      image: './images/resource/nav/labs-and-certification.png',
      background: './images/resource/switch-labs-background.png',
      rightContent: {
        cards: [
          { src: './images/resource/demo-certification.svg', alt: '认证示例', width: 'w-3/5', position: 'ml-0' },
          { src: './images/resource/demo-ai-reporting.svg', alt: 'AI 报告', width: 'w-1/3', position: 'top-5 left-[60%]' },
        ],
        description: `我们为实验室和认证机构提供 AI 驱动的解决方案，从实验室管理到数据分析，提升效率与准确性。`,
      },
    },
    {
      id: 3,
      label: '全球贸易',
      image: './images/resource/nav/global-trade.png',
      background: './images/resource/switch-trade-background.jpg',
      rightContent: {
        cards: [
          { src: './images/resource/demo-wegreenpass.svg', alt: '全球贸易', width: 'w-fit', position: 'left-[10%] mx-auto' },
          { src: './images/resource/demo-policy-tool.svg', alt: 'Policy', width: 'w-fit', position: 'top-[20%] mx-auto' },
        ],
        description: `全球贸易正在快速发展，我们通过智能分析和预测工具，为贸易决策提供深刻洞察与优化建议。`,
      },
    },
    {
      id: 4,
      label: '航运与物流',
      image: './images/resource/nav/logistics.png',
      background: './images/resource/switch-logistics-background.jpg',
      rightContent: {
        cards: [
          { src: './images/resource/demo-shipping.svg', alt: '物流示例', width: 'w-1/2', position: 'mx-0' },
        ],
        description: `航运与物流是供应链的重要环节，我们的 AI 工具帮助企业优化路线、降低成本、提高效率。`,
      },
    },  
  ];

  const activeButtonData = buttons.find((button) => button.id === activeButton);

  return (
    <div className="react-hero-carousel grid">
      {/* 动态背景 */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: `url(${activeButtonData.background})`, opacity: 0.6,
      backgroundSize: 'cover',
    backgroundPosition: 'center', }}
      ></div>

      {/* 主体内容 */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-between p-20 gap-8">
        {/* 左侧内容 */}
        <div className="left-hero space-y-4 max-w-1/2">
          <div className='text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-3 font-heading dark:text-gray-200'>
            TSu-Energy <span class="text-accent dark:text-white highlight"> 天苏能源 </span>
          </div>

          <h1 className="text-2xl font-bold ">我们使用领先 AI 技术</h1>
          <h2 className="text-lg ">赋能全球供应链 ESG 建设和可持续发展</h2>

          {/* 按钮部分 */}
          <div className="button-grids grid grid-cols-2 gap-4">
            {buttons.map(button => (
              <button
                key={button.id}
                onClick={() => setActiveButton(button.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                  activeButton === button.id ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {button.label}
                <img src={button.image} alt={`${button.label} 图标`} className="w-6 h-6" />
              </button>
            ))}
          </div>
        </div>

        {/* 右侧内容 */}
        <div
            className="space-y-4"
            style={{
              display: "grid",
              gridTemplateRows: "1fr auto",
              rowGap: "6rem",
              height: "80%",
              paddingBottom: "10vh",
              flexBasis: "50%",
              flexGrow: 0,
              boxSizing: "border-box"
            }}
          >

          {/* 示例卡片 */}
          <div className="relative flex flex-wrap gap-4 items-center justify-center">
            {activeButtonData.rightContent.cards.map((card, index) => (
              <div key={index} className={`${card.position} ${card.width} border border-solid border-gray-300/20 
              bg-white
                p-2
                rounded-lg 
                shadow-lg 
                shadow-gray-300/30 
                absolute 
                overflow-hidden 
                animate-fly-in`
                }>
                <img src={card.src} alt={card.alt} />
              </div>
            ))}
          </div>

          {/* 描述文案 */}
          <div className="bg-blue-900 text-white p-6 rounded shadow-md mt-20 shadow-lime-50 overflow-hidden animate-fly-in opacity-85">
            <p className="mb-4 w-full">{activeButtonData.rightContent.description}</p>
            <div className="flex items-center justify-end">
              <button className="flex gap-2 text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-900">
                <span>了解更多</span>
                <svg className="w-4 h-4" viewBox="64 64 896 896" fill="currentColor" aria-hidden="true">
                  <path
                    d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReactHeroCarousel;