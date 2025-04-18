import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { Analytics } from "@vercel/analytics/react"; 
import directoryData from './data/directoryData';
import { Helmet } from 'react-helmet';

function App() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

 
  const metaData = {
    en: {
      title: "Top Vietnam Brand",
      description: "Browse top brands in Vietnam, multi-language support, covering finance, telecom, shopping, dining and more.",
      keywords: "Vietnam brand, Top Vietnam Brand, finance, shopping, dining, coffee, fashion"
    },
    zh: {
      title: "越南顶级品牌 - Top Vietnam Brand",
      description: "浏览越南各大顶级品牌，支持多语言切换，涵盖金融、通信、购物、餐饮等多个行业。",
      keywords: "越南品牌,Top Vietnam Brand,金融,购物,餐饮,咖啡,时尚"
    },
    'zh-TW': {
      title: "越南顶级品牌 - Top Vietnam Brand",
      description: "瀏覽越南各大頂級品牌，支援多語言切換，涵蓋金融、電信、購物、餐飲等多個行業。",
      keywords: "越南品牌,Top Vietnam Brand,金融,購物,餐飲,咖啡,時尚"
    },
    vi: {
      title: "Thương hiệu hàng đầu Việt Nam",
      description: "Khám phá các thương hiệu hàng đầu tại Việt Nam, hỗ trợ đa ngôn ngữ, bao gồm tài chính, viễn thông, mua sắm, ẩm thực và nhiều lĩnh vực khác.",
      keywords: "Thương hiệu Việt Nam, Top Vietnam Brand, tài chính, mua sắm, ẩm thực, cà phê, thời trang"
    },
    ja: {
      title: "ベトナムトップブランド",
      description: "ベトナムのトップブランドを多言語で閲覧。金融、通信、ショッピング、飲食など多業種をカバー。",
      keywords: "ベトナムブランド,Top Vietnam Brand,金融,ショッピング,飲食,コーヒー,ファッション"
    },
    ko: {
      title: "베트남 최고 브랜드",
      description: "베트남의 최고 브랜드를 다양한 언어로 확인하세요. 금융, 통신, 쇼핑, 외식 등 다양한 업종 포함.",
      keywords: "베트남 브랜드,Top Vietnam Brand,금융,쇼핑,외식,커피,패션"
    },
    ru: {
      title: "Лучшие бренды Вьетнама",
      description: "Просматривайте лучшие бренды Вьетнама, поддержка нескольких языков, финансы, телеком, шопинг, рестораны и многое другое.",
      keywords: "Вьетнамские бренды, Top Vietnam Brand, финансы, шопинг, рестораны, кофе, мода"
    }
  };

  const currentLang = i18n.language in metaData ? i18n.language : 'en';
  const meta = metaData[currentLang];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  const mainCategories = [
    { id: 'finance', gradient: 'bg-gradient-to-r from-pink-300 to-orange-300' },
    { id: 'telecom', gradient: 'bg-gradient-to-r from-pink-300 to-purple-300' },
    { id: 'shopping', gradient: 'bg-gradient-to-r from-green-300 to-green-400' },
    { id: 'restaurant_chains', gradient: 'bg-gradient-to-r from-purple-300 to-indigo-300' },
    { id: 'coffee_chains', gradient: 'bg-gradient-to-r from-orange-300 to-red-300' },
    { id: 'fashion',gradient: 'bg-gradient-to-r from-orange-300 to-red-300' }
  ];

  const handleCardClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="alternate" href="https://www.topbrandsvn.org/" hreflang="en" />
        <link rel="alternate" href="https://www.topbrandsvn.org/zh" hreflang="zh" />
        <link rel="alternate" href="https://www.topbrandsvn.org/zh-TW" hreflang="zh-TW" />
        <link rel="alternate" href="https://www.topbrandsvn.org/vi" hreflang="vi" />
        <link rel="alternate" href="https://www.topbrandsvn.org/ja" hreflang="ja" />
        <link rel="alternate" href="https://www.topbrandsvn.org/ko" hreflang="ko" />
        <link rel="alternate" href="https://www.topbrandsvn.org/ru" hreflang="ru" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-703Z96SWLE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-703Z96SWLE');
            `,
          }}
        />
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-[#222222] dark:text-gray-100">
        <header className="border-b border-[#222222] dark:border-gray-700 py-6">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div>
              <h1 className="text-[22px] font-light tracking-[-0.01em]">{t('yourtitle')}</h1>
              <p className="text-[#555] dark:text-gray-400 text-[12px] mt-1">A-Z</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="theme-switch-container">
                <input 
                  type="checkbox" 
                  name="darkModeToggle" 
                  id="darkModeToggle" 
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <label htmlFor="darkModeToggle" className="label"></label>
              </div>
              <select onChange={handleLanguageChange} className="border dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-800">
                <option value="en">English</option>
                <option value="zh">简体中文</option>
                <option value="zh-TW">繁體中文</option>
                <option value="ko">한국어</option>
                <option value="vi">Tiếng Việt</option>
                <option value="ru">Русский</option>
                <option value="ja">日本語</option>
              </select>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-6 py-12">
          {selectedCategory && (
            <button 
              onClick={() => setSelectedCategory(null)}
              className="flex items-center mb-6 text-[#222222] dark:text-gray-300 hover:text-[#757575] dark:hover:text-gray-100 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>{t('back') || '返回'}</span>
            </button>
          )}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mainCategories.map(category => {
                  if (selectedCategory && selectedCategory !== category.id) {
                    return null;
                  }
                  return (
                    <div 
                      key={category.id}
                      onClick={() => handleCardClick(category.id)}
                      className={`relative overflow-hidden rounded-lg h-32 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 ${category.gradient} ${selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''}`}
                    >
                      <span className={`text-xl font-medium ${category.id === 'fashion' ? 'text-black' : 'text-white'}`}>
                        {t(`category.${category.id}`)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-16">
            {(!selectedCategory || selectedCategory === 'finance') && (
              <section>
                <h2 className="text-[18px] font-medium mb-8 dark:text-gray-100">{t('category.finance')}</h2>
                <ul className="space-y-[2px]">
                  {directoryData.finance.map(item => (
                    <li key={item}>
                      <a
                        href="#"
                        className="group flex items-center justify-between py-[3px] text-[13px] hover:underline hover:text-[#757575] dark:hover:text-gray-300 transition-colors duration-200"
                      >
                        <span>{item}</span>
                        <ChevronRight className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {(!selectedCategory || selectedCategory === 'telecom') && (
              <section>
                <h2 className="text-[18px] font-medium mb-8 dark:text-gray-100">{t('category.telecom')}</h2>
                <ul className="space-y-[2px]">
                  {directoryData.telecom.map(item => (
                    <li key={item}>
                      <a
                        href="#"
                        className="group flex items-center justify-between py-[3px] text-[13px] hover:underline hover:text-[#757575] dark:hover:text-gray-300 transition-colors duration-200"
                      >
                        <span>{item}</span>
                        <ChevronRight className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {Object.entries(directoryData.shopping).map(([category, items]) => {
              const shouldShow = !selectedCategory || 
                                selectedCategory === 'shopping' || 
                                selectedCategory === category ||
                                (category === 'fashion' && selectedCategory === 'fashion') ||
                                (category === 'coffee_chains' && selectedCategory === 'coffee_chains') ||
                                (category === 'restaurant_chains' && selectedCategory === 'restaurant_chains');
              if (!shouldShow) return null;
              return (
                <section key={category}>
                  <h2 className="text-[18px] font-medium mb-8 dark:text-gray-100">{t(`category.${category}`)}</h2>
                  {typeof items === 'object' && !Array.isArray(items) ? (
                    Object.entries(items).map(([subCategory, subItems]) => (
                      <div key={subCategory}>
                        <h3 className="text-[16px] font-medium mb-4 dark:text-gray-200">
                          {category === 'restaurant_chains'
                            ? t(`category.restaurant_subcategories.${subCategory}`)
                            : t(`category.${subCategory}`)}
                        </h3>
                        <ul className="space-y-[2px]">
                          {(subItems as string[]).map(item => (
                            <li key={item}>
                              <a
                                href="#"
                                className="group flex items-center justify-between py-[3px] text-[13px] hover:underline hover:text-[#757575] dark:hover:text-gray-300 transition-colors duration-200"
                              >
                                <span>{item}</span>
                                <ChevronRight className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <ul className="space-y-[2px]">
                      {(items as string[]).map(item => (
                        <li key={item}>
                          <a
                            href="#"
                            className="group flex items-center justify-between py-[3px] text-[13px] hover:underline hover:text-[#757575] dark:hover:text-gray-300 transition-colors duration-200"
                          >
                            <span>{item}</span>
                            <ChevronRight className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        </main>
        <footer className="border-t border-[#222222] dark:border-gray-700 py-6">
          <div className="container mx-auto px-6">
            <p className="text-[11px] text-center dark:text-gray-400">© 2025 TopBrandsVN</p>
          </div>
        </footer>
        <Analytics /> 
      </div>
    </>
  );
}

export default App;
