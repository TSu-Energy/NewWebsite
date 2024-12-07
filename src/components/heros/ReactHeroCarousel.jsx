import React, { useState } from 'react';
import ButtonGrid from './ButtonGrid';
import DynamicBackground from './DynamicBackground';
import RightContent from './RightContent';
import { useWindowSize } from '../../hooks/useWindowSize';

const ReactHeroCarousel = () => {
  const [activeButton, setActiveButton] = useState(1);
  const { width } = useWindowSize();

  const buttons = [
  {
      id: 1,
      label: '产业园区',
      page: '/solutions/industries',
      image: './images/resource/nav/industrial-park.png',
      background: './images/resource/switch-zone-background.jpg',
      rightContent: {
        cards: [
          { src: './images/resource/demo-co2-emission-forecast.svg', alt: 'CO2 预测', width: '', position: 'left-[20%] top-[10%]' },
          { src: './images/resource/demo-hvac.svg', alt: 'HVAC', width: '', position: 'top-[5%] left-[50%]' },
          { src: './images/resource/demo-electricity.svg', alt: 'Electricity', width: '', position: 'top-1/2 left-[30%]' },
        ],
        description: `产业园区是经济发展的重要载体，通过智能化管理和数据分析，我们助力园区优化资源配置，推动绿色和可持续发展。`,
      },
    },
    {
      id: 2,
      label: '实验室和认证机构',
      page: '/solutions/labs',
      image: './images/resource/nav/labs-and-certification.png',
      background: './images/resource/switch-labs-background.png',
      rightContent: {
        cards: [
          { src: './images/resource/demo-certification.svg', alt: '认证示例', width: '', position: 'center top-[10%] ml-0' },
          { src: './images/resource/demo-ai-reporting.svg', alt: 'AI 报告', width: '', position: 'top-1/3 left-[60%]' },
        ],
        description: `我们为实验室和认证机构提供 AI 驱动的解决方案，从实验室管理到数据分析，提升效率与准确性。`,
      },
    },
    {
      id: 3,
      label: '全球贸易',
      page: '/solutions/trade',
      image: './images/resource/nav/global-trade.png',
      background: './images/resource/switch-trade-background.jpg',
      rightContent: {
        cards: [
          { src: './images/resource/demo-wegreenpass.svg', alt: '全球贸易', width: 'w-fit', position: 'top-[20%] left-[30%] mx-auto' },
          { src: './images/resource/demo-policy-tool.svg', alt: 'Policy', width: 'w-fit', position: 'center top-[50%] mx-auto' },
        ],
        description: `全球贸易正在快速发展，我们通过智能分析和预测工具，为贸易决策提供深刻洞察与优化建议。`,
      },
    },
    {
      id: 4,
      label: '电池与建模',
      page: '/solutions/batteries',
      image: './images/resource/nav/logistics.png',
      background: './images/resource/switch-logistics-background.jpg',
      rightContent: {
        cards: [
          { src: './images/resource/demo-batteries.jpg', alt: '物流示例', width: 'w-1/2', position: 'center mx-0 top-[10%]' },
        ],
        description: `能源行业在电池技术、安全性和计算方法方面的快速发展。`,
      },
    },  
  ];

  const activeButtonData = buttons.find((button) => button.id === activeButton);

  return (
    <div className="grid w-full">
      <DynamicBackground background={activeButtonData.background} />
      
      <main className={`relative z-10 flex flex-col ${width > 768 ? 'md:flex-row justify-between' : 'flex-col justify-center'} items-center p-8`}>
        <div className="left-hero space-y-6 max-w-1/2">
          <h1 className="text-4xl font-bold before:text-white">TSu-Energy <span class="text-accent before:text-white"></span>天苏能源</h1>
          <ButtonGrid 
            buttons={buttons} 
            activeButton={activeButton} 
            onButtonClick={setActiveButton} 
          />
        </div>

        <RightContent 
          rightContent={activeButtonData.rightContent} 
          page={activeButtonData.page} 
        />
      </main>
    </div>
  );
};

export default ReactHeroCarousel;
