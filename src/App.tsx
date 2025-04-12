import React, { useState, useEffect } from 'react';
import { ChevronRight, Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { Analytics } from "@vercel/analytics/react"; 
import directoryData from './data/directoryData';

function App() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [darkMode, setDarkMode] = useState(false);


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
        
        <div className="mb-16">

          <div className="max-w-4xl mx-auto"> {/* 添加最大宽度和居中容器 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* 修改网格布局 */}
              {mainCategories.map(category => (
                <div 
                  key={category.id}
                  onClick={() => handleCardClick(category.id)}
                  className={`relative overflow-hidden rounded-lg h-32 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 ${category.gradient} ${selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <span className={`text-xl font-medium ${category.id === 'fashion' ? 'text-black' : 'text-white'}`}>
                    {t(`category.${category.id}`)}
                  </span>
                </div>
              ))}
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
  );
}

export default App;
