import cartImg from "./assets/demo-app (1).webp"
import bannerImg from "./assets/hero.png"
import playStoreIcon from "./assets/Playstore.png"
import appStore from "./assets/appStore.png"

function App() {
  return (
    <div className="bg-gray-100">

      {/* NAVBAR */}
      <div className="w-full bg-[#f5f6f8] border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="font-semibold text-[14px] text-gray-700">HERO.IO</span>
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex gap-8 text-sm">
            <a className="text-purple-600 font-medium">Home</a>
            <a className="text-gray-600">Apps</a>
            <a className="text-gray-600">Installation</a>
          </div>

          {/* Button */}
          <button className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white border-none rounded-md px-4">
            Contribute
          </button>
        </div>
      </div>


      {/* HERO */}
      <section className="text-center pt-20 px-6 bg-[#f5f6f8]">

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
          We Build <br />
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-500 text-sm">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler,
          smarter, and more exciting. Our goal is to turn your ideas into digital experiences.
        </p>

        {/* Store Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-md bg-white shadow-sm hover:shadow">
            <img src={playStoreIcon} className="w-5" />
            <span className="text-sm font-medium">Google Play</span>
          </button>

          <button className="flex items-center gap-2 border px-4 py-2 rounded-md bg-white shadow-sm hover:shadow">
            <img src={appStore} className="w-5" />
            <span className="text-sm font-medium">App Store</span>
          </button>
        </div>

        {/* HERO IMAGE */}
        <div className="relative flex justify-center mt-14">

          <img src={bannerImg} className="" />



        </div>
      </section>


      {/* STATS */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 text-center">

        <h2 className="text-2xl font-semibold mb-10">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <div>
            <p className="text-sm opacity-80">Total Downloads</p>
            <h3 className="text-5xl font-bold mt-2">29.6M</h3>
            <p className="text-xs opacity-80 mt-1">21% More Than Last Month</p>
          </div>

          <div>
            <p className="text-sm opacity-80">Total Reviews</p>
            <h3 className="text-5xl font-bold mt-2">906K</h3>
            <p className="text-xs opacity-80 mt-1">46% More Than Last Month</p>
          </div>

          <div>
            <p className="text-sm opacity-80">Active Apps</p>
            <h3 className="text-5xl font-bold mt-2">132+</h3>
            <p className="text-xs opacity-80 mt-1">31 More Will Launch</p>
          </div>

        </div>
      </section>


      {/* TRENDING */}
      <section className="py-16 px-6 bg-[#f5f6f8]">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Trending Apps</h2>
          <p className="text-gray-500 text-sm mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition">

              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img src={cartImg} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-sm font-semibold mt-3 text-gray-700 line-clamp-2">
                Forest: Focus For Productivity
              </h3>

              <div className="flex justify-between mt-2">
                <span className="text-green-500 text-xs bg-green-50 px-2 py-1 rounded">
                  ⬇ 9M
                </span>

                <span className="text-orange-500 text-xs bg-orange-50 px-2 py-1 rounded">
                  ★ 5
                </span>
              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-md text-sm">
            Show All
          </button>
        </div>
      </section>


      {/* FOOTER */}
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

    </div>
  )
}

export default App