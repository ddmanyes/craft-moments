import React from 'react';

export default function Gallery() {
  // 從 Hugo 模板動態取得注入的文章資料
  const posts = window.hugoBlogData && window.hugoBlogData.length > 0
    ? window.hugoBlogData
    : [
        { 
          id: 'placeholder-1', 
          cover: '/craft-moments/images/default.png', 
          title: '尚無文章', 
          description: '請在 content/posts/ 中新增您的第一篇文章！',
          link: '#'
        }
      ];

  return (
    <div className="w-full max-w-full overflow-x-hidden p-4 sm:p-6 bg-background font-sans rounded-2xl">
      <h2 className="text-2xl sm:text-3xl font-serif text-secondary mb-6 sm:mb-8 text-center">服飾創作設計特輯 (Design Blog)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {posts.map(post => (
          <a
            key={post.id} 
            href={post.link}
            className="group block overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-primary bg-cardBg no-underline text-current"
          >
            <div className="h-64 sm:h-80 bg-primary/20 flex items-center justify-center text-secondary relative overflow-hidden">
              <img src={post.cover} alt={post.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="p-6 flex flex-col items-start text-left h-full">
              <h3 className="text-xl font-serif mb-3 text-secondary font-bold leading-relaxed">{post.title}</h3>
              <p className="text-sm text-textMain/80 line-clamp-3 leading-relaxed mb-4">{post.description}</p>
              <span className="mt-auto text-sm font-semibold text-accent group-hover:underline">閱讀完整文章 →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
