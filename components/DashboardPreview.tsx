'use client'

export default function DashboardPreview() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-navy via-charcoal to-black overflow-hidden">
      {/* Subtle background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-teal/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-luxeGold/5 blur-3xl"></div>
      </div>

      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-48 flex-shrink-0 border-r border-white/10 bg-charcoal/40 backdrop-blur-xl">
          <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="flex items-center gap-2 border-b border-white/10 p-4">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal to-luxeGold flex items-center justify-center shadow-lg shadow-teal/20">
                <span className="text-sm font-bold text-charcoal">U</span>
              </div>
              <span className="text-sm font-semibold tracking-tight">Unified</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 p-3">
              <div className="flex items-center gap-2 rounded-lg bg-teal/10 px-3 py-2 text-xs font-medium text-white shadow-sm relative">
                <div className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-teal"></div>
                <svg className="h-3.5 w-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-xs">Home</span>
              </div>

              <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-normal text-cloudGrey">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-xs">My Banks</span>
              </div>

              <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-normal text-cloudGrey">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-xs">Transaction History</span>
              </div>

              <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-normal text-cloudGrey">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span className="text-xs">Payment Transfer</span>
              </div>

              <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-normal text-cloudGrey">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span className="text-xs">Connect Bank</span>
              </div>
            </nav>

            {/* User Profile */}
            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-lg px-2 py-1.5">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-teal to-luxeGold flex items-center justify-center text-[10px] font-semibold text-charcoal">
                  AH
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium truncate">Adrian Hajdin</p>
                  <p className="text-[9px] text-slateGrey truncate">adrian@jsmastery.pro</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <div className="h-full p-5 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold mb-1">
                  Welcome, <span className="bg-gradient-to-r from-white via-teal to-luxeGold bg-clip-text text-transparent">Adrian</span>
                </h1>
                <p className="text-[10px] text-cloudGrey">Access & manage your account and transactions efficiently.</p>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-32 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 pl-7 text-[10px] text-white placeholder:text-slateGrey backdrop-blur-xl"
                />
                <svg className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-slateGrey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-3 gap-4 h-[calc(100%-4rem)]">
              {/* Left Column - Main Content */}
              <div className="col-span-2 space-y-4 overflow-hidden">
                {/* Bank Accounts Summary */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-card-soft">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {/* Circular Progress */}
                      <div className="relative h-16 w-16">
                        <svg className="h-16 w-16 -rotate-90 transform">
                          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="5" fill="none" className="text-white/10" />
                          <circle cx="32" cy="32" r="28" stroke="url(#gradient)" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray={`${(2 / 2) * 2 * Math.PI * 28} ${2 * Math.PI * 28}`} className="drop-shadow-lg" />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#39D0C8" />
                              <stop offset="100%" stopColor="#F4C75B" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-lg font-bold bg-gradient-to-br from-teal to-luxeGold bg-clip-text text-transparent">2</p>
                            <p className="text-[8px] text-slateGrey">Banks</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-[10px] font-semibold mb-0.5">2 Bank Accounts</h3>
                        <p className="text-[9px] text-cloudGrey mb-1">Total Current Balance</p>
                        <p className="text-xl font-bold text-white">$2,698.12</p>
                      </div>
                    </div>

                    <button className="flex items-center gap-1 rounded-lg bg-teal/10 px-2 py-1 text-[10px] font-medium text-teal">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Add bank
                    </button>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-card-soft overflow-hidden">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-sm font-semibold">Recent transactions</h2>
                    <button className="text-[10px] font-medium text-cloudGrey">View all</button>
                  </div>

                  {/* Bank Tabs */}
                  <div className="mb-3 flex gap-0.5 rounded-lg border border-white/10 bg-white/5 p-0.5">
                    <button className="flex-1 rounded-md bg-teal/20 px-2 py-1.5 text-[9px] font-medium text-teal">
                      Chase Bank
                    </button>
                    <button className="flex-1 rounded-md px-2 py-1.5 text-[9px] font-medium text-cloudGrey">
                      Bank of America
                    </button>
                    <button className="flex-1 rounded-md px-2 py-1.5 text-[9px] font-medium text-cloudGrey">
                      First Platypus Bank
                    </button>
                  </div>

                  {/* Bank Summary */}
                  <div className="mb-3 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-teal/20 to-teal/10">
                      <span className="text-[9px] font-bold text-teal">CB</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[10px] font-semibold text-white">Chase Bank</h3>
                      <p className="text-sm font-bold text-teal">$2,588.12</p>
                    </div>
                    <div className="rounded-full bg-teal/20 px-2 py-0.5 text-[8px] font-medium text-teal">savings</div>
                  </div>

                  {/* Transactions - Compact */}
                  <div className="space-y-1">
                    {/* Header */}
                    <div className="grid grid-cols-12 gap-2 px-2 py-1 text-[8px] font-medium text-slateGrey">
                      <div className="col-span-4">Transaction</div>
                      <div className="col-span-2">Amount</div>
                      <div className="col-span-3">Status</div>
                      <div className="col-span-3">Category</div>
                    </div>

                    {/* Transaction Rows */}
                    <div className="grid grid-cols-12 gap-2 items-center rounded-lg px-2 py-1.5 hover:bg-white/5">
                      <div className="col-span-4 flex items-center gap-1.5">
                        <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-[#1DB954]/20">
                          <svg className="h-3 w-3 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                        </div>
                        <p className="text-[9px] font-medium text-white truncate">Spotify</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[9px] font-semibold text-softRed">-$15.00</p>
                      </div>
                      <div className="col-span-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-slateGrey/20 px-1.5 py-0.5 text-[8px] font-medium text-cloudGrey">
                          <span className="h-1 w-1 rounded-full bg-cloudGrey"></span>
                          Processing
                        </span>
                      </div>
                      <div className="col-span-3">
                        <span className="rounded-full border border-teal/30 bg-teal/10 px-1.5 py-0.5 text-[8px] font-medium text-teal">Subscriptions</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-2 items-center rounded-lg px-2 py-1.5 hover:bg-white/5">
                      <div className="col-span-4 flex items-center gap-1.5">
                        <div className="h-5 w-5 rounded-lg bg-gradient-to-br from-slateGrey to-cloudGrey flex items-center justify-center text-[8px] font-bold text-charcoal">AD</div>
                        <p className="text-[9px] font-medium text-white truncate">Alexa Doe</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[9px] font-semibold text-teal">+$88.00</p>
                      </div>
                      <div className="col-span-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-teal/20 px-1.5 py-0.5 text-[8px] font-medium text-teal">
                          <span className="h-1 w-1 rounded-full bg-teal"></span>
                          Success
                        </span>
                      </div>
                      <div className="col-span-3">
                        <span className="rounded-full border border-teal/30 bg-teal/10 px-1.5 py-0.5 text-[8px] font-medium text-teal">Deposit</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-2 items-center rounded-lg px-2 py-1.5 hover:bg-white/5">
                      <div className="col-span-4 flex items-center gap-1.5">
                        <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-black">
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 200 300">
                            <path d="M126.6 105.9l-38.5 38.5-14.1-14.1 38.5-38.5-24.4-24.4-62.6 62.6 62.6 62.6 62.6-62.6z"/>
                          </svg>
                        </div>
                        <p className="text-[9px] font-medium text-white truncate">Figma</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[9px] font-semibold text-softRed">-$18.99</p>
                      </div>
                      <div className="col-span-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-slateGrey/20 px-1.5 py-0.5 text-[8px] font-medium text-cloudGrey">
                          <span className="h-1 w-1 rounded-full bg-cloudGrey"></span>
                          Processing
                        </span>
                      </div>
                      <div className="col-span-3">
                        <span className="rounded-full border border-teal/30 bg-teal/10 px-1.5 py-0.5 text-[8px] font-medium text-teal">Income</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar Content */}
              <div className="space-y-4 overflow-hidden">
                {/* Bank Cards */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-card-soft">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-[11px] font-semibold">My Banks</h3>
                    <button className="text-[9px] font-medium text-teal">
                      + Add bank
                    </button>
                  </div>

                  <div className="space-y-2">
                    {/* Card 1 */}
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-3">
                      <div className="absolute top-2 right-2">
                        <svg className="h-6 w-6 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        </svg>
                      </div>

                      <div className="relative z-10">
                        <p className="text-[8px] font-medium text-white/60 mb-3">JS Mastery Pro.</p>
                        <p className="text-[8px] font-medium text-white/80 mb-1">ADRIAN HAJDIN</p>
                        <p className="text-[9px] font-mono tracking-wider text-white mb-2">1234 1234 1234 1234</p>
                        <div className="flex items-center justify-between">
                          <p className="text-[8px] text-white/80">06/24</p>
                          <div className="text-white/90 font-bold text-[8px]">VISA</div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-3">
                      <div className="absolute top-2 right-2">
                        <svg className="h-6 w-6 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="9" cy="12" r="7"/>
                          <circle cx="15" cy="12" r="7" opacity="0.5"/>
                        </svg>
                      </div>

                      <div className="relative z-10">
                        <p className="text-[8px] font-medium text-white/60 mb-3">JS Mastery Pro.</p>
                        <p className="text-[8px] font-medium text-white/80 mb-1">ADRIAN HAJDIN</p>
                        <p className="text-[9px] font-mono tracking-wider text-white mb-2">1234 1234 1234 1234</p>
                        <div className="flex items-center justify-between">
                          <p className="text-[8px] text-white/80">06/24</p>
                          <div className="text-white/90 font-bold text-[8px]">MASTERCARD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* My Budgets */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-card-soft">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-[11px] font-semibold">My budgets</h3>
                  </div>

                  <div className="space-y-3">
                    {/* Budget Item 1 */}
                    <div>
                      <div className="mb-1.5 flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal/20">
                          <svg className="h-3 w-3 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-medium text-white">Subscriptions</p>
                          <p className="text-[8px] text-slateGrey">$25 left</p>
                        </div>
                        <p className="text-[10px] font-semibold text-teal">$25</p>
                      </div>
                      <div className="relative h-1 overflow-hidden rounded-full bg-white/10">
                        <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-teal to-teal/80" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    {/* Budget Item 2 */}
                    <div>
                      <div className="mb-1.5 flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-luxeGold/20">
                          <svg className="h-3 w-3 text-luxeGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-medium text-white">Food and booze</p>
                          <p className="text-[8px] text-slateGrey">$120 left</p>
                        </div>
                        <p className="text-[10px] font-semibold text-luxeGold">$120</p>
                      </div>
                      <div className="relative h-1 overflow-hidden rounded-full bg-white/10">
                        <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-luxeGold to-luxeGold/80" style={{ width: '60%' }}></div>
                      </div>
                    </div>

                    {/* Budget Item 3 */}
                    <div>
                      <div className="mb-1.5 flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal/20">
                          <svg className="h-3 w-3 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-medium text-white">Savings</p>
                          <p className="text-[8px] text-slateGrey">$50 left</p>
                        </div>
                        <p className="text-[10px] font-semibold text-teal">$50</p>
                      </div>
                      <div className="relative h-1 overflow-hidden rounded-full bg-white/10">
                        <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-teal to-teal/80" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
