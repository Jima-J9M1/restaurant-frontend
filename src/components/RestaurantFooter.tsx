
interface RestaurantFooterProps {
  brand?: string;
}

export default function RestaurantFooter({ brand = "Your Company" }: RestaurantFooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 w-full bg-[#1F1D2B] text-gray-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        {/* Company */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-white" href="#">About us</a></li>
            <li><a className="hover:text-white" href="#">Team</a></li>
            <li><a className="hover:text-white" href="#">Careers</a></li>
            <li><a className="hover:text-white" href="#">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-white" href="#">Help &amp; Support</a></li>
            <li><a className="hover:text-white" href="#">Partner with us</a></li>
            <li><a className="hover:text-white" href="#">Ride with us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-white" href="#">Terms &amp; Conditions</a></li>
            <li><a className="hover:text-white" href="#">Refund &amp; Cancellation</a></li>
            <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white" href="#">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Follow us / Subscribe */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">Follow us</h4>
          <div className="mb-4 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-.75a1 1 0 110 2 1 1 0 010-2z"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.02H7.9v-2.91h2.4V9.41c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.54.73-1.54 1.48v1.77h2.63l-.42 2.91h-2.21v7.02c4.78-.8 8.44-4.94 8.44-9.93z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.17 4.17 0 001.83-2.3 8.36 8.36 0 01-2.64 1.01 4.16 4.16 0 00-7.09 3.8 11.8 11.8 0 01-8.57-4.35 4.16 4.16 0 001.29 5.55 4.12 4.12 0 01-1.88-.52v.05a4.16 4.16 0 003.33 4.08 4.2 4.2 0 01-1.88.07 4.17 4.17 0 003.89 2.89A8.35 8.35 0 012 19.54 11.79 11.79 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.33 8.33 0 0022.46 6z"/></svg>
            </a>
          </div>
          <p className="mb-3 text-sm text-gray-400">Receive exclusive offers in your mailbox</p>
          <div className="flex items-center gap-2">
            <div className="relative w-full max-w-xs">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </span>
              <input
                type="email"
                placeholder="Enter Your email"
                className="w-full rounded-md border border-gray-600 bg-[#2A2838] py-2 pl-9 pr-3 text-sm text-gray-200 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none"
              />
            </div>
            <button className="rounded-md bg-[#FFB30E] px-4 py-2 text-sm font-semibold text-[#1F1D2B] shadow-md hover:brightness-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-gray-400 md:flex-row md:px-6">
          <p>All rights Reserved © {year} {brand}, {year}</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-[#FFB30E]">❤</span> by <a className="hover:text-white" href="#">Themewagon</a>
          </p>
        </div>
      </div>
    </footer>
  );
}