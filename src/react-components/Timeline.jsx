import React, { useRef } from 'react';
import '~/assets/styles/devprogress2.css';

const Timeline = () => {
  const yearsContainerRef = useRef(null);
  const eventsContainerRef = useRef(null);

  const slide = (direction) => {
    const eventsContainer = eventsContainerRef.current;
    const eventWidth = eventsContainer.firstChild.offsetWidth;
    const currentScroll = eventsContainer.scrollLeft;
    const yearsContainer = yearsContainerRef.current;
    // const yearWidth = yearsContainer.firstChild.offsetWidth;
    if (direction === 'left') {
      yearsContainer.scrollLeft = currentScroll - eventWidth;
      eventsContainer.scrollLeft = currentScroll - eventWidth;
    } else {
      yearsContainer.scrollLeft = currentScroll + eventWidth;
      eventsContainer.scrollLeft = currentScroll + eventWidth;
    }
  };

  return (
    <section className="timeline-container">
      <div className="timeline">
        <div className="timeline-header">
          <h2 className="title">发展历程</h2>
          <div className="timeline-line">
            {/* <div className="event" style={{ left: '20%' }}>2021.5</div>
            <div className="event" style={{ left: '40%' }}>2022.6</div>
            <div className="event" style={{ left: '60%' }}>2023.8</div>
            <div className="event" style={{ left: '80%' }}>2024.1</div> */}
            {/* <div className='events' ref={yearsContainerRef}>
              <div className="year">2021.5</div>
              <div className="year">2022.6</div>
              <div className="year">2023.8</div>
              <div className="year">2024.1</div>
            </div> */}
          </div>
        </div>
        <div className="timeline-content">
          <button className="nav-button left-button" onClick={() => slide('left')}>←</button>
          <div className="events" ref={eventsContainerRef}>
            <div className="event-content" data-date="2023.5">
              <div className="year-inline">2021.5</div>
              {/* <h3>2021.5</h3> */}
              <p>正式建立团队</p>
            </div>
            <div className="event-content" data-date="2023.6">
              <h3>2022.6</h3>
              <p>天苏一期完成:达成了........目标,实现了.........阿的司法凯瑟琳大街法赛季芬兰的</p>
            </div>
            <div className="event-content" data-date="2023.8">
              <h3>2023.8</h3>
              <p>开展天苏十条,队伍重组,实现了阿斯顿佛教卡桑德拉佛教拉斯的技法的斯拉夫卡刘阿司法的</p>
            </div>
            <div className="event-content" data-date="2023.10">
              <h3>2024.1</h3>
              <p>描述1月份的大事记内容</p>
            </div>
          </div>
          <button className="nav-button right-button" onClick={() => slide('right')}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
