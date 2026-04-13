import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Reusable SVG Icons
const IconInstagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const IconFacebook = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconMapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  const navLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Báo Giá', path: '/pricing' },
    { name: 'Liên Hệ', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-[0.3em] uppercase">
          CƯỜNG TRANG <span className="font-light opacity-70">WEDDING</span>
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={`text-xs uppercase tracking-[0.2em] hover:text-[#B8860B] transition-all relative group ${location.pathname === link.path ? 'text-[#B8860B]' : ''}`}>
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-[#B8860B] transition-all ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <button className="px-8 py-2.5 border border-[#B8860B] text-[10px] uppercase tracking-[0.3em] hover:bg-[#B8860B] hover:text-white transition-all duration-500 rounded-sm">
            Đặt Lịch
          </button>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? '✕' : '☰'}</button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-t border-white/10 p-8 flex flex-col gap-6 shadow-2xl animate-fade-in">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-lg uppercase tracking-[0.3em] py-3 border-b border-white/5 last:border-0">{link.name}</Link>
          ))}
        </div>
      )}
    </nav>
  );
};

// Home Page Component
const Home = () => (
  <>
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://res.cloudinary.com/dlguhia0l/image/upload/v1771096555/thai-bao-studio/og-image.jpg" className="w-full h-full object-cover animate-slow-zoom" alt="Hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0A0A0A]"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h2 className="text-lg md:text-xl font-light tracking-[0.5em] mb-6 animate-slide-up opacity-80 uppercase">Premium Wedding Photography</h2>
        <h1 className="text-5xl md:text-9xl font-bold mb-10 tracking-[0.15em] animate-slide-up-delayed leading-tight text-white uppercase">CƯỜNG TRANG WEDDING</h1>
        <p className="text-xl md:text-2xl font-light tracking-[0.15em] mb-12 opacity-90 italic font-serif">"Tối Giản · Tinh Tế · Trường Tồn"</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/portfolio" className="px-12 py-5 bg-[#B8860B] text-white uppercase tracking-[0.3em] text-[10px] hover:bg-[#8B6508] transition-all">Khám Phá Portfolio</Link>
          <Link to="/pricing" className="px-12 py-5 border border-white/30 text-white uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition-all">Báo Giá Dịch Vụ</Link>
        </div>
      </div>
    </section>
    <section className="py-24 text-center">
       <h2 className="text-3xl font-bold tracking-[0.2em] mb-8 uppercase">Chào mừng bạn đến với Cường Trang Wedding</h2>
       <p className="opacity-60 max-w-2xl mx-auto px-6">Hãy khám phá các trang Catalogue và Portfolio của chúng tôi để xem những tác phẩm mới nhất.</p>
    </section>
  </>
);

// Generic Page Layout Wrapper
const PageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[60vh]">
    <span className="text-[#B8860B] uppercase tracking-[0.4em] text-sm mb-4 block font-medium">{title}</span>
    <div className="w-16 h-px bg-[#B8860B] mb-12"></div>
    {children}
  </div>
);

// Pages
const Catalogue = () => (
  <PageLayout title="Catalogue Dịch Vụ">
    <h2 className="text-4xl font-bold mb-10 tracking-[0.1em]">Bộ Sưu Tập Váy Cưới & Studio</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-white/5 aspect-[3/4] flex items-center justify-center border border-white/10 group cursor-pointer hover:border-[#B8860B] transition-all">
          <span className="text-sm opacity-30 uppercase tracking-[0.2em] group-hover:text-[#B8860B] group-hover:opacity-100 transition-all">Coming Soon Album {i}</span>
        </div>
      ))}
    </div>
  </PageLayout>
);

const Portfolio = () => (
  <PageLayout title="Dự Án Đã Thực Hiện">
    <h2 className="text-4xl font-bold mb-10 tracking-[0.1em]">Tình Yêu Qua Lăng Kính</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="bg-white/5 aspect-video flex items-center justify-center border border-white/10 group cursor-pointer hover:border-[#B8860B] transition-all overflow-hidden relative">
           <img src="https://res.cloudinary.com/dlguhia0l/image/upload/v1771096555/thai-bao-studio/og-image.jpg" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-all duration-700" alt="" />
           <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm uppercase tracking-[0.3em] font-bold">Project #{i}</span>
           </div>
        </div>
      ))}
    </div>
  </PageLayout>
);

const Pricing = () => (
  <PageLayout title="Báo Giá Dịch Vụ">
    <h2 className="text-4xl font-bold mb-10 tracking-[0.1em]">Các Gói Chụp Ảnh Cưới</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {['Basic', 'Premium', 'Elite'].map(pkg => (
         <div key={pkg} className="p-10 border border-white/10 hover:border-[#B8860B] transition-all bg-white/[0.02]">
            <h3 className="text-2xl font-bold mb-4 tracking-[0.1em] uppercase">{pkg}</h3>
            <p className="text-[#B8860B] text-xl font-bold mb-8">Liên hệ để báo giá</p>
            <ul className="space-y-4 text-sm opacity-60 mb-10">
               <li>• Chụp tại Studio & Ngoại cảnh</li>
               <li>• 01 Váy cưới cao cấp</li>
               <li>• 01 Album photobook</li>
               <li>• Toàn bộ file gốc</li>
            </ul>
            <button className="w-full py-3 border border-[#B8860B] hover:bg-[#B8860B] text-xs tracking-[0.2em] uppercase transition-all">Đăng Ký Tư Vấn</button>
         </div>
       ))}
    </div>
  </PageLayout>
);

const Contact = () => (
  <PageLayout title="Liên Hệ Với Chúng Tôi">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
       <div>
          <h2 className="text-4xl font-bold mb-8 tracking-[0.1em]">Gửi Tin Nhắn Cho Cường Trang Wedding</h2>
          <form className="space-y-6">
             <input type="text" placeholder="Họ và tên" className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#B8860B] outline-none transition-all" />
             <input type="email" placeholder="Email / Số điện thoại" className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#B8860B] outline-none transition-all" />
             <textarea placeholder="Nội dung cần tư vấn..." rows={5} className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#B8860B] outline-none transition-all"></textarea>
             <button className="px-12 py-4 bg-[#B8860B] text-white uppercase tracking-[0.2em] text-xs hover:bg-[#8B6508] transition-all shadow-lg">Gửi Yêu Cầu</button>
          </form>
       </div>
       <div className="space-y-10">
          <div>
             <h4 className="text-[#B8860B] uppercase tracking-[0.3em] text-xs mb-4">Địa Chỉ</h4>
             <p className="text-lg opacity-70">TP. Thanh Hóa, Thanh Hóa</p>
          </div>
          <div>
             <h4 className="text-[#B8860B] uppercase tracking-[0.3em] text-xs mb-4">Hotline</h4>
             <p className="text-lg opacity-70">09xx xxx xxx</p>
          </div>
       </div>
    </div>
  </PageLayout>
);

const Footer = () => (
  <footer className="bg-[#0A0A0A] py-20 px-6 border-t border-white/5 mt-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-3xl font-bold tracking-[0.3em] uppercase mb-6">CƯỜNG TRANG WEDDING</h2>
        <p className="opacity-40 max-w-sm mb-8 text-sm leading-relaxed">Studio chụp ảnh cưới cao cấp hàng đầu Thanh Hóa. Tối Giản · Tinh Tế · Trường Tồn.</p>
        <div className="flex gap-8">
          <span className="opacity-40 hover:opacity-100 hover:text-[#B8860B] transition-all cursor-pointer"><IconInstagram /></span>
          <span className="opacity-40 hover:opacity-100 hover:text-[#B8860B] transition-all cursor-pointer"><IconFacebook /></span>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-bold mb-8 uppercase tracking-[0.2em] text-[#B8860B]">Liên Hệ</h4>
        <ul className="space-y-4 opacity-50 text-xs tracking-[0.1em]">
          <li className="flex items-center gap-3"><IconMapPin /> TP. Thanh Hóa, Thanh Hóa</li>
          <li className="flex items-center gap-3"><IconPhone /> 09xx xxx xxx</li>
          <li className="italic lowercase tracking-wider">contact@cuongtrangwedding.com</li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-bold mb-8 uppercase tracking-[0.2em] text-[#B8860B]">Hỗ Trợ</h4>
        <ul className="space-y-4 opacity-50 text-xs tracking-[0.1em] uppercase">
          <li>Chính sách bảo mật</li>
          <li>Điều khoản sử dụng</li>
          <li>Quy trình làm việc</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-[10px] opacity-30 tracking-[0.4em] uppercase font-medium">
      &copy; {new Date().getFullYear()} Cường Trang Wedding. All rights reserved.
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#B8860B] selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
