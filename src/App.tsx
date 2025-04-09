import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const { t } = useTranslation();

  const directoryData = {
    finance: [
      'ACB',
      'Agribank',
      'BIDV',
      'MB',
      'Sacombank',
      'Techcombank',
      'VIB',
      'Vietcombank',
      'VietinBank'
    ],
    telecom: [
      'MobiFone',
      'Vietnamobile',
      'Viettel Group',
      'Vinaphone'
    ],
    shopping: {
      supermarket: [
        'Bach Hoa Xanh',
        'Big C',
        'Co.opmart',
        'Emart',
        'Lotte Mart',
        'MM Mega Market',
        'WinMart'
      ],
      mall: [
        'AEON Mall',
        'Big C',
        'Co.opMart',
        'Lotte Mart',
        'Trang Tien Plaza',
        'Vincom Center'
      ],
      mobile_retail: [
        'CellphoneS',
        'Điện Máy XANH',
        'FPT Shop',
        'The Gioi Di Dong (Thế Giới Di Động)',
        'Viettel Store'
      ],
      convenience_store: [
        'Circle K',
        'Co.op Food',
        'FamilyMart',
        'GS25',
        'MiniStop',
        'VinMart+'
      ],
      fashion: {
        female_fashion: [
          'Chic-Land',
          'ELISE',
          'Ivy Moda',
          'JUNO',
          'Nem Fashion',
          'Seven AM'
        ],
        male_fashion: [
          'Coolmate',
          'LỰU ĐẠN',
          'Viet Tien'
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222]">
      <header className="border-b border-[#222222] py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-[22px] font-light tracking-[-0.01em]">{t('yourtitle')}</h1>
          <div className="space-x-2">
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('zh')}>简</button>
            <button onClick={() => i18n.changeLanguage('zh-TW')}>繁</button>
            <button onClick={() => i18n.changeLanguage('ko')}>한국어</button>
            <button onClick={() => i18n.changeLanguage('vi')}>Tiếng Việt</button>
            <button onClick={() => i18n.changeLanguage('ru')}>Русский</button>
            <button onClick={() => i18n.changeLanguage('ja')}>日本語</button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-16">
          <section>
            <h2 className="text-[18px] font-medium mb-8">{t('category.finance')}</h2>
            <ul className="space-y-[2px]">
              {directoryData.finance.map(item => (
                <li key={item}>
                  <a href="#" className="group flex items-center justify-between py-[3px] text-[13px] hover:text-[#757575] transition-colors duration-200">
                    <span>{item}</span>
                    <ChevronRight className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"/>
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
                  <a href="#" className="group flex items-center justify-between py-[3px] text-[13px] hover:text-[#757575] transition-colors duration-200">
                    <span>{item}</span>
                    <ChevronRight className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"/>
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
                    <h3 className="text-[16px] font-medium mb-4">{t(`category.${subCategory}`)}</h3>
                    <ul className="space-y-[2px]">
                      {(subItems as string[]).map(item => (
                        <li key={item}>
                          <a href="#" className="group flex items-center justify-between py-[3px] text-[13px] hover:text-[#757575] transition-colors duration-200">
                            <span>{item}</span>
                            <ChevronRight className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"/>
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
                      <a href="#" className="group flex items-center justify-between py-[3px] text-[13px] hover:text-[#757575] transition-colors duration-200">
                        <span>{item}</span>
                        <ChevronRight className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"/>
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
    </div>
  );
}

export default App;
