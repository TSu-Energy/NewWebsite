import React from 'react';
import FlyInCardContainer from './FlyInCardContainer';

const RightContent = ({ rightContent, page }) => {
  const { cards, description } = rightContent;

  return (
    <div
        className="space-y-4 overflow-hidden max-w-1/2"
        style={{
            display: "grid",
            gridTemplateRows: "1fr auto",
            rowGap: "6rem",
            height: "60vh",
            paddingBottom: "5vh",
            flexBasis: "60%",
            flexGrow: 0,
            boxSizing: "border-box"
        }}
    >
      <FlyInCardContainer cards={cards}/>
      <div className="bg-blue-900 text-white p-6 rounded shadow-md mt-20">
        <p className="mb-4 w-full">{description}</p>
        <div className="flex items-center justify-end">
          <a href={page}>
            <button className="flex gap-2 text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-900">
              <span>了解更多</span>
              <svg className="w-4 h-4" viewBox="64 64 896 896" fill="currentColor" aria-hidden="true">
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
