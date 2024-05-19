import React from 'react';

const ContentPanel = ({ item }) => {
  if (!item) return null;

  const moduleWidth = '7xl'; // 定义模块的最大宽度，例如 '3xl' 对应于 Tailwind 中的 1200px
  const imageHeight = 'md'; // 定义图片的高度，例如 'md' 对应于 Tailwind 中的 5rem

  return (
    <div className={`flex items-center gap-4 p-8 bg-white rounded-lg shadow-md w-full max-w-${moduleWidth} dark:bg-slate-900`}>
      <div className="w-1/2">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className={`rounded-lg h-${imageHeight} w-full object-cover`}
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default ContentPanel;
