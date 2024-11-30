import React, { useState, useRef } from 'react';

const LogoSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position
  const logoContainerRef = useRef(null);

  const logos = [
    '/image/logo/xiehua.png',
    '/image/logo/yidayun.png',
    '/image/logo/yingke.png',
    '/image/logo/ngfs.png',
    '/image/logo/pecc.png',
    '/image/logo/pri.png',
    '/image/logo/gsc.png',
    '/image/logo/columbia.png',
    '/image/logo/jlr.png',
    '/image/logo/nex.png',
    '/image/logo/unitar.png',
    '/image/logo/tuv.png',
    '/image/logo/gf60.png',
    '/image/logo/shcw.png',
    '/image/logo/hkqaa.png',
    '/image/logo/apea-transparent.png',
    '/image/logo/boc.png',
    '/image/logo/ceprei.png',
    '/image/logo/cn100-chinese.png',
    '/image/logo/cic.png',
    '/image/logo/cnc-chinese.png',
    '/image/logo/cqc-chinese.png',
    '/image/logo/cyte.png',
    '/image/logo/daocaoxiong.png',
    '/image/logo/for-good.png',
    '/image/logo/haojing.png',
    '/image/logo/jiangshan.png',
    '/image/logo/shccig.png',
    '/image/logo/sheeex.png',
    '/image/logo/shenzhen-port.png',
  ];

  const handlePrevClick = () => {
    setScrollPosition((prev) => prev - 300); // Move the scroll left by 300px
  };

  const handleNextClick = () => {
    setScrollPosition((prev) => prev + 300); // Move the scroll right by 300px
  };

  return (
    <section className="Section_Wrapper__HZ1gk LogoSection_Root__kecb_">
      <div className="Section_Background___NXYe undefined"></div>
      <div className="Section_Content__unNcK LogoSection_Section__4REfR">
        <h5>客户及合作伙伴</h5>
        <h3>我们与全球领先企业和机构建立长期服务与合作关系，共同塑造可持续未来</h3>
        <div className="LogoSection_Spacing___8ro3"></div>
        <div className="Slick_Root__naias">
          <button
            className="Slick_Button__lOzW7 Slick_Button__lOzW7-light"
            onClick={handlePrevClick}
          >
            <span
              role="img"
              aria-label="left"
              className="anticon anticon-left"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="left"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
              </svg>
            </span>
          </button>

          <div className="Slick_Contents__f8o_I">
            <div
              className="slick-slider Slick_Slick__WK6xx"
              dir="ltr"
              ref={logoContainerRef}
              style={{
                transform: `translate3d(${scrollPosition}px, 0, 0)`, // Apply the dynamic scroll position
              }}
            >
              <div className="slick-list">
                <div className="slick-track">
                  {logos.map((logo, index) => (
                    <div key={index} className="slick-slide" style={{ width: '300px' }}>
                      <div>
                        <div tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                          <div className="LogoSection_Logo__8Hex7">
                            <img src={logo} alt={`Logo ${index}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            className="Slick_Button__lOzW7 Slick_Button__lOzW7-light"
            onClick={handleNextClick}
          >
            <span
              role="img"
              aria-label="right"
              className="anticon anticon-right"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="right"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M372 218.3V141c0-6.7 7.7-10.4 12.9-6.3L825.7 486.8a31.86 31.86 0 010 50.3l-450.8 352.1c-5.3 4.1-12.9.4-12.9-6.3v-77.3c0-4.9 2.3-9.6 6.1-12.6l360-281-360-281.1c-3.8-3-6.1-7.7-6.1-12.6z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
