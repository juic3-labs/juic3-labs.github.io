import React, { useEffect } from 'react';

const AwddVipPage = () => {
    useEffect(() => {
        document.title = 'Juic3 久榯能源 - 開放式儲能網路';
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Noto Sans TC', sans-serif;
          margin: 0;
          padding: 0;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #ff4df9 0%, #9A0095 100%);
        }

        .gradient-bg:hover {
          background: linear-gradient(135deg, #9A0095 0%, #ff4df9 100%);
        }

        .service-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #9A0095;
          transition: width 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

            <div className="bg-slate-50 text-slate-800">
                {/* 導航欄 */}
                <nav className="bg-white shadow-lg fixed w-full z-50">
                    <div className="container mx-auto px-6 py-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <a href="/">
                                    <img src="assets/logo/久榯黑.png" alt="久榯能源" className="h-8 w-auto" />
                                </a>
                            </div>

                            <div className="hidden md:flex space-x-8 items-center">
                                <a onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="nav-link text-slate-700 hover:text-[#9A0095] transition-colors cursor-pointer">關於 Juic3</a>
                                <a onClick={(e) => { e.preventDefault(); document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' }); }} className="nav-link text-slate-700 hover:text-[#9A0095] transition-colors cursor-pointer">解決問題</a>
                                <a onClick={(e) => { e.preventDefault(); document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' }); }} className="nav-link text-slate-700 hover:text-[#9A0095] transition-colors cursor-pointer">解決方案</a>
                                <a onClick={(e) => { e.preventDefault(); document.getElementById('g2m')?.scrollIntoView({ behavior: 'smooth' }); }} className="nav-link text-slate-700 hover:text-[#9A0095] transition-colors cursor-pointer">G2M</a>
                                <a onClick={(e) => { e.preventDefault(); document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' }); }} className="nav-link text-slate-700 hover:text-[#9A0095] transition-colors cursor-pointer">商業模式</a>
                                <a onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn gradient-bg text-white font-medium py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all cursor-pointer">聯絡我們</a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section: Juic3 在幹嘛？ */}
                <section id="about" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900 z-0">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#9A0095 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    </div>
                    <div className="container mx-auto px-4 py-20 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-block py-1 px-3 rounded-full bg-purple-900 text-purple-200 text-sm font-semibold mb-6 border border-purple-700">
                                🟡 Juic3 在幹嘛？
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                開放式儲能網路<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4df9] to-[#9A0095]">
                                    每一顆電池都是微型電廠
                                </span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                                Juic3 透過聚合分散在工廠中的電池，將原本閒置的儲能資產轉化為具有經濟價值的電網緩衝資源。<br />
                                我們讓每一顆電池都能成為「微型電廠」，共同參與即時電網平衡。
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a href="#solution" className="btn bg-white text-[#9A0095] font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-purple-50 transition-all">
                                    了解方案
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem Section: 解決的問題 */}
                <section id="problem" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-[#9A0095] font-bold tracking-wider uppercase text-sm">CHALLENGES</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">🔥 解決的問題</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                當前能源轉型面臨的三大核心挑戰
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="service-card bg-slate-50 rounded-xl p-8 border border-slate-100">
                                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600">
                                    <i className="fa-solid fa-bolt text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4">基礎建設老舊</h3>
                                <p className="text-slate-600">輸配電能力不足，使電網雍塞，難以負荷日益增長的用電需求。</p>
                            </div>

                            {/* Card 2 */}
                            <div className="service-card bg-slate-50 rounded-xl p-8 border border-slate-100">
                                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                                    <i className="fa-solid fa-chart-line text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4">頻繁失衡</h3>
                                <p className="text-slate-600">AI 與再生能源的普及導致電能波動劇烈，電網頻率穩定性面臨考驗。</p>
                            </div>

                            {/* Card 3 */}
                            <div className="service-card bg-slate-50 rounded-xl p-8 border border-slate-100">
                                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 text-yellow-600">
                                    <i className="fa-solid fa-coins text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4">儲能導入困難</h3>
                                <p className="text-slate-600">大型電池成本高昂、維運門檻高，讓許多潛在參與者望而卻步。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Section: 解決方案 */}
                <section id="solution" className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-[#9A0095] font-bold tracking-wider uppercase text-sm">OUR SOLUTION</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">🧠 三階段儲能聚合架構</h2>
                        </div>

                        <div className="max-w-5xl mx-auto space-y-8">
                            {/* Step 1 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9A0095] text-white flex items-center justify-center font-bold text-xl">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-slate-900">Zero-Cost Delivery</h3>
                                    <p className="text-slate-600 text-lg">優化用電時序，幫助工廠降低用電成本。</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9A0095] text-white flex items-center justify-center font-bold text-xl">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-slate-900">Grid Buffer</h3>
                                    <p className="text-slate-600 text-lg">協調多點電池不同步充放電，提供即時的電網緩衝。</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9A0095] text-white flex items-center justify-center font-bold text-xl">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-slate-900">Compliant Activation</h3>
                                    <p className="text-slate-600 text-lg">符合國內備轉市場規範，串接台電交易平台。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* G2M Strategy */}
                <section id="g2m" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-[#9A0095] font-bold tracking-wider uppercase text-sm">STRATEGY</span>
                                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">🚀 G2M 策略</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <i className="fa-solid fa-bullseye text-[#9A0095] text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">初期市場聚焦</h4>
                                            <p className="text-slate-600">台灣高耗能製造業（如半導體、重工）。</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <i className="fa-solid fa-handshake text-[#9A0095] text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">商業合作模式</h4>
                                            <p className="text-slate-600">與能源服務商（ESCO）及設備商聯合進場。</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <i className="fa-solid fa-globe text-[#9A0095] text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">擴展策略</h4>
                                            <p className="text-slate-600">將累積的設備與電力資料轉化為演算法優勢，加速複製至其他區域市場。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 bg-slate-100 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
                                <div className="text-center text-slate-400">
                                    <i className="fa-solid fa-rocket text-6xl mb-4"></i>
                                    <p>Go-to-Market Strategy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Business Model */}
                <section id="business" className="py-20 bg-slate-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-[#ff4df9] font-bold tracking-wider uppercase text-sm">REVENUE</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">💸 商業模式</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-[#9A0095] transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#ff4df9]">容量收益</h3>
                                <p className="text-slate-300">向電網賣出即時備轉容量。</p>
                            </div>
                            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-[#9A0095] transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#ff4df9]">節電分潤</h3>
                                <p className="text-slate-300">協助用電端削峰填谷，與客戶共享節省的電費。</p>
                            </div>
                            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-[#9A0095] transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#ff4df9]">平台串接分潤</h3>
                                <p className="text-slate-300">協助獨立開發商串接平台，解決合規與資本門檻，並收取對應分潤。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 gradient-bg opacity-10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">👉 快來找我們聊聊</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
                            我們正在尋找志同道合的合作夥伴與策略投資人，共同打造下一代的能源基礎建設。<br />
                            歡迎來跟我們聊聊！
                        </p>
                        <a href="mailto:ramosc@juic3.xyz" className="inline-flex items-center gap-3 bg-[#9A0095] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#7a0076] transition-all transform hover:scale-105">
                            <i className="fa-regular fa-envelope text-xl"></i>
                            <span>ramosc@juic3.xyz</span>
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-slate-900 text-slate-400 py-8">
                    <div className="container mx-auto px-4 text-center">
                        <p>&copy; 2025 Juic3 Energy. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default AwddVipPage;
