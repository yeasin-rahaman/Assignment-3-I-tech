import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1e293b] text-slate-300">
            {/* TOP CURVE / OVERLAP SECTION (Optional: if you want a transition from white/purple) */}


            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* BRAND SECTION */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-[#8b5cf6] rounded-lg flex items-center justify-center font-bold text-white">H</div>
                            <span className="text-2xl font-black text-white tracking-tighter">HERO.IO</span>
                        </div>
                        <p className="text-sm leading-relaxed opacity-70">
                            Crafting digital experiences that simplify life and empower productivity. Built with passion for millions of users worldwide.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Products</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-[#8b5cf6] transition-colors">Forest Focus</a></li>
                            <li><a href="#" className="hover:text-[#8b5cf6] transition-colors">SelfPlan</a></li>
                            <li><a href="#" className="hover:text-[#8b5cf6] transition-colors">Flip Timer</a></li>
                            <li><a href="#" className="hover:text-[#8b5cf6] transition-colors">Pomodoro Pro</a></li>
                        </ul>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-[#8b5cf6] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[#8b5cf6] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[#8b5cf6] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#8b5cf6] transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* NEWSLETTER / CTA */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Stay Updated</h4>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full bg-[#334155] border-none text-white focus:outline-none" placeholder="Email Address" />
                            <button className="btn bg-[#8b5cf6] hover:bg-[#7c3aed] border-none join-item text-white">Go</button>
                        </div>
                        <div className="flex gap-4 mt-6">
                            {/* Social Icons Placeholder */}
                            <div className="w-8 h-8 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#8b5cf6] cursor-pointer transition-all">f</div>
                            <div className="w-8 h-8 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#8b5cf6] cursor-pointer transition-all">t</div>
                            <div className="w-8 h-8 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#8b5cf6] cursor-pointer transition-all">i</div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-slate-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
                    <p>© 2026 HERO.IO - All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:underline">Support</a>
                        <a href="#" className="hover:underline">Contact</a>
                        <a href="#" className="hover:underline">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;