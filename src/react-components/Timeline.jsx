import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '~/assets/styles/devprogress2.css';

const Timeline = () => {
  // const yearsContainerRef = useRef(null);
  const eventsContainerRef = useRef(null);

  const slide = (direction) => {
    const eventsContainer = eventsContainerRef.current;
    const eventWidth = eventsContainer.firstChild.offsetWidth;
    const currentScroll = eventsContainer.scrollLeft;
    // const yearsContainer = yearsContainerRef.current;
    console.log(eventsContainer)
    console.log(eventWidth)
    console.log(currentScroll)
    // const yearWidth = yearsContainer.firstChild.offsetWidth;
    if (direction === 'left') {
      // yearsContainer.scrollLeft = currentScroll - eventWidth;
      eventsContainer.scrollLeft = currentScroll - eventWidth;
    } else {
      // yearsContainer.scrollLeft = currentScroll + eventWidth;
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
          <button className=" nav-button left-button" onClick={() => slide('left')}>
            <FontAwesomeIcon className="mx-2" icon={faArrowLeft} />
          </button>
          <div className="events" ref={eventsContainerRef}>
            <div className="event-content" data-date="2023.5">
              <div className="year-inline">2013</div>
              <p>TS的概念被首次提出。</p>
            </div>
            <div className="event-content" data-date="2023.6">
              <div className="year-inline">2015.09</div>
              <p>天苏进入商业化试运行，成立了第一支试错小队TS dreamer, 用于参加校园赛事。</p>
            </div>
            <div className="event-content" data-date="2023.8">
              <div className="year-inline">2017.9</div>
              <p>天苏第一批创始人团队创建，初创团队成员为马皓天，张晟源，季思宇，陈睿，董华钊，霍雅超，黄萱，潘子杰。最终帮助江苏省某民营企业实现上市。</p>
            </div>
            <div className="event-content" data-date="2023.10">
              <div className="year-inline">2018.9</div>
              <p>天苏商业化启动，确定能源与碳中和的长期发展路线，天苏陕西能建开始筹划。</p>
            </div>
            <div className="event-content" data-date="2023.10">
              <div className="year-inline">2020.9</div>
              <p>全球突发新冠疫情，在国际局势与科技独立的浪潮影响下，天苏走上自研道路。同年，天苏上海新投团队组建完成。</p>
            </div>
            <div className="event-content" data-date="2023.10">
              <div className="year-inline">2021.09</div>
              <p>天苏上海与天苏欧洲同时开始商业运营，天苏能源开始在专利及论文中屡有收获</p>
            </div>
            <div className="event-content" data-date="2023.10">
              <div className="year-inline">2022.09</div>
              <p>天苏上海正式成立，并于12月选址闵行区，该企业是天苏在上海的第一家示范性企业先行军，掌握着天苏能源的主要投资性基金。该企业将为天苏的产业布局及科技研发投入而稳定的现金流。并用以试错并将成功与失败经验推广。</p>
            </div>
            <div className="event-content" data-date="2023.10">
              <div className="year-inline">2023.09</div>
              <p>天苏上海能投与上海理工大学、东南大学能源与环境学院建立战略合作关系。开始定点校招培养方案设计。</p>
            </div>
            <div className="event-content" data-date="2023.10">
              <div className="year-inline">2023.09</div>
              <p>同年，天苏公众号及网站正式投入使用，天苏十条概念被首次提出。</p>
            </div>
            <div className="event-content" data-date="2023.10">
              <div className="year-inline">2023.12</div>
              <p>天苏能源正式实现自研、自产、自销的全面自立。天苏上海三期团队成立，确定电化学赛道，开始深度研发之旅。并在欧洲建立了广泛的工业及高校合作网络。</p>
            </div>
            <div className="event-content" data-date="2024.01">
              <div className="year-inline">2023.09</div>
              <p>天苏能源继续扩展陕西业务版图与能源研发板块，天苏陕西能建正式成立，并已达成与陕西慕白支护企业，西安理工大学的战略合作。天苏继续深化与欧洲的战略合作，拟在德国慕尼黑建立天苏能源研发中心，同时，天苏成立碳中和服务小队，定点支持碳中和业务发展。</p>
            </div>
            <div className="event-content" data-date="2023.10">
              <div className="year-inline">今天</div>
              <p>天苏将预计于2024年年末，完成第二次天使投资。并做出对第一次投资者年报。</p>
            </div>
          </div>
          <button className="nav-button right-button" onClick={() => slide('right')}>
            <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
