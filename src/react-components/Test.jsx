import React, { useRef } from 'react';
import '~/assets/styles/devprogress.css';

const Timeline = () => {
  const yearsContainerRef = useRef(null);
  const eventsContainerRef = useRef(null);

  const slide = (direction) => {
    const yearsContainer = yearsContainerRef.current;
    const eventsContainer = eventsContainerRef.current;
    const yearWidth = yearsContainer.firstChild.offsetWidth;
    const currentScroll = yearsContainer.scrollLeft;

    if (direction === 'left') {
      yearsContainer.scrollLeft = currentScroll - yearWidth;
      eventsContainer.scrollLeft = currentScroll - yearWidth;
    } else {
      yearsContainer.scrollLeft = currentScroll + yearWidth;
      eventsContainer.scrollLeft = currentScroll + yearWidth;
    }
  };

  return (
    <section className="timeline-container">
      <div className="timeline">
        <div className="timeline-header">
          <h1>发展历程</h1>
          <div className="yearsItem">
            <ul ref={yearsContainerRef} className="years-list" style={{ left: '-90px' }}>
              <li>
                2020.10<span></span>
              </li>
              <li>
                2021.1<span></span>
              </li>
              <li>
                2021.6<span></span>
              </li>
              <li>
                2022.9<span></span>
              </li>
              <li>
                2023.10<span></span>
              </li>
              <li>
                2024.1<span></span>
              </li>
              <li>
                2024.10<span></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrowBox">
          <div className="arrow">
            <i className="arrowLeft" onClick={() => slide('left')}>
              ←
            </i>
            <i className="arrowRight" onClick={() => slide('right')}>
              →
            </i>
          </div>
        </div>
        <div className="yearsCard">
          <div className="list" ref={eventsContainerRef} style={{ left: '-2660px' }}>
            <div className='yearsItem'>
              <span>
                2020.10
              </span>
            </div>
            <div className="item">
              <h3>2019</h3>
              <div className="divider" role="separator"></div>
              <ul>
                <li>智谱AI成立，源自清华技术成果</li>
              </ul>
            </div>
            <div className="item">
              <h3>2020</h3>
              <div className="divider" role="separator"></div>
              <ul>
                <li>专注大模型算法研究</li>
              </ul>
            </div>
            <div className="item">
              <h3>2021.9</h3>
              <div className="divider" role="separator"></div>
              <ul>
                <li>设计GLM算法，发布拥有自主知识产权的开源百亿大模型GLM-10B</li>
              </ul>
            </div>
            <div className="item">
              <h3>2022.8</h3>
              <div className="divider" role="separator"></div>
              <ul>
                <li>
                  发布高精度千亿大模型GLM-130B并开源，效果对标GPT-3 175B，收到70余个国家1000余个研究机构的使用需求
                </li>
              </ul>
            </div>
            <div className="item">
              <h3>2022.9</h3>
              <div className="divider" role="separator"></div>
              <ul>
                <li>发布代码生成模型CodeGeeX，每天帮助程序员编写1000万行代码</li>
              </ul>
            </div>
            <div className="item">
              <h3>2022.10</h3>
              <div className="divider" role="separator"></div>
              <ul>
                <li>发布开源的100+语言预训练模型mGLM-1B</li>
              </ul>
            </div>
            <div className="item">
              <h3>2023.3</h3>
              <div className="divider" role="separator"></div>
              <ul>
                <li>发布千亿基座的对话模型ChatGLM及其单卡开源版本ChatGLM-6B，全球下载量超过800万</li>
              </ul>
            </div>
            <div className="item">
              <h3>2023.5</h3>
              <div className="divider" role="separator"></div>
              <ul>
                <li>开源多模态对话模型VisualGLM-6B（CogVLM）</li>
              </ul>
            </div>
            <div className="item on">
              <h3>2023.6</h3>
              <div className="divider" role="separator"></div>
              <ul>
                <li>发布全面升级的ChatGLM2模型矩阵，多样尺寸，丰富场景，模型能力登顶C-Eval榜单</li>
              </ul>
            </div>
            <div className="item">
              <h3>2023.8</h3>
              <div className="divider" role="separator"></div>
              <ul>
                <li>作为国内首批通过备案的大模型产品，AI生成式助手“智谱清言”正式上线</li>
              </ul>
            </div>
            <div className="item">
              <h3>2023.10</h3>
              <div className="divider" role="separator"></div>
              <ul>
                <li>推出新一代多模态大模型CogVLM</li>
                <li>发布全面升级的ChatGLM3模型及相关系列产品</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;