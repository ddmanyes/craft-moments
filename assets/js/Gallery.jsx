import React from 'react';

export default function Gallery() {
  // 將假資料替換為您在 content/posts/ 中建立的三篇文章對應連結與簡述
  const posts = [
    { 
      id: 1, 
      src: '/craft-moments/images/fashion_sketch.png', 
      alt: '善用條紋與幾何，創造服飾奇幻視覺', 
      description: '服裝設計中的線條與幾何形狀，往往是形塑風格的第一步。從紙上的鉛筆手繪草圖開始，看見具有奇幻視覺美感的雛形。',
      link: '/craft-moments/posts/geometric-stripes/'
    },
    { 
      id: 2, 
      src: '/craft-moments/images/draping_mannequin.png', 
      alt: '立體剪裁：布料的呼吸與身體對話', 
      description: '跳脫傳統的平面打版，立體剪裁將設計過程轉移到了人台上。大頭針細膩固定流線抓皺，確保布料服貼曲線。',
      link: '/craft-moments/posts/draping-techniques/'
    },
    { 
      id: 3, 
      src: '/craft-moments/images/finished_garment.png', 
      alt: '極簡主義服裝中的雋永美學', 
      description: '「少即是多」在現代設計中佔有重要地位。溫和的大地色系、流暢版型與微開的衩口，展現最純粹的優雅底蘊。',
      link: '/craft-moments/posts/modern-minimalist/'
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
              <img src={post.src} alt={post.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="p-6 flex flex-col items-start text-left h-full">
              <h3 className="text-xl font-serif mb-3 text-secondary font-bold leading-relaxed">{post.alt}</h3>
              <p className="text-sm text-textMain/80 line-clamp-3 leading-relaxed mb-4">{post.description}</p>
              <span className="mt-auto text-sm font-semibold text-accent group-hover:underline">閱讀完整文章 →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
