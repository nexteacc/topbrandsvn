import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { Analytics } from "@vercel/analytics/react"; 
import directoryData from './data/directoryData';

function App() {
  const { t } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222]">
      <header className="border-b border-[#222222] py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-[22px] font-light tracking-[-0.01em]">{t('yourtitle')}</h1>
            <p className="text-[12px] text-[#555] mt-1">A-Z</p>
          </div>
          <select onChange={handleLanguageChange} className="border rounded px-2 py-1">
            <option value="en">English</option>
            <option value="zh">简体中文</option>
            <option value="zh-TW">繁體中文</option>
            <option value="ko">한국어</option>
            <option value="vi">Tiếng Việt</option>
            <option value="ru">Русский</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-16">
          <section>
            <h2 className="text-[18px] font-medium mb-8">{t('category.finance')}</h2>
            <ul className="space-y-[2px]">
              {directoryData.finance.map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center justify-between py-[3px] text-[13px] hover:underline hover:text-[#757575] transition-colors duration-200"
                  >
                    <span>{item}</span>
                    <ChevronRight className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] font-medium mb-8">{t('category.telecom')}</h2>
            <ul className="space-y-[2px]">
              {directoryData.telecom.map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center justify-between py-[3px] text-[13px] hover:underline hover:text-[#757575] transition-colors duration-200"
                  >
                    <span>{item}</span>
                    <ChevronRight className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {Object.entries(directoryData.shopping).map(([category, items]) => (
            <section key={category}>
              <h2 className="text-[18px] font-medium mb-8">{t(`category.${category}`)}</h2>
              {typeof items === 'object' && !Array.isArray(items) ? (
                Object.entries(items).map(([subCategory, subItems]) => (
                  <div key={subCategory}>
                    <h3 className="text-[16px] font-medium mb-4">
                      {category === 'restaurant_chains'
                        ? t(`category.restaurant_subcategories.${subCategory}`)
                        : t(`category.${subCategory}`)}
                    </h3>
                    <ul className="space-y-[2px]">
                      {(subItems as string[]).map(item => (
                        <li key={item}>
                          <a
                            href="#"
                            className="group flex items-center justify-between py-[3px] text-[13px] hover:underline hover:text-[#757575] transition-colors duration-200"
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
                        className="group flex items-center justify-between py-[3px] text-[13px] hover:underline hover:text-[#757575] transition-colors duration-200"
                      >
                        <span>{item}</span>
                        <ChevronRight className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
      <footer className="border-t border-[#222222] py-6">
        <div className="container mx-auto px-6">
          <p className="text-[11px] text-center">© 2025 TopBrandsVN</p>
        </div>
      </footer>
      <Analytics /> 
    </div>
  );
}

export default App;
