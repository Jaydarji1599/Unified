'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [activeBank, setActiveBank] = useState('chase')

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-charcoal to-black">
      {/* Subtle background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[40rem] w-[40rem] rounded-full bg-teal/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-[35rem] w-[35rem] rounded-full bg-luxeGold/5 blur-3xl"></div>
      </div>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 border-r border-white/10 bg-charcoal/40 backdrop-blur-xl">
          <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="flex items-center gap-3 border-b border-white/10 p-6">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-teal to-luxeGold flex items-center justify-center shadow-lg shadow-teal/20">
                <span className="text-lg font-bold text-charcoal">U</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">Unified</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 p-4">
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl bg-teal/10 px-4 py-3 text-sm font-medium text-white shadow-sm shadow-teal/20 transition-all relative"
              >
                <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-teal"></div>
                <svg className="h-5 w-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-normal text-cloudGrey transition-all hover:bg-white/5 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>My Banks</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-normal text-cloudGrey transition-all hover:bg-white/5 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Transaction History</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-normal text-cloudGrey transition-all hover:bg-white/5 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span>Payment Transfer</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-normal text-cloudGrey transition-all hover:bg-white/5 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span>Connect Bank</span>
              </a>
            </nav>

            {/* User Profile */}
            <div className="border-t border-white/10 p-4">
              <div className="flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal to-luxeGold flex items-center justify-center text-sm font-semibold text-charcoal">
                  AH
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Adrian Hajdin</p>
                  <p className="text-xs text-slateGrey">adrian@jsmastery.pro</p>
                </div>
                <svg className="h-4 w-4 text-cloudGrey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl p-8 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-semibold mb-2">
                  Welcome, <span className="bg-gradient-to-r from-white via-teal to-luxeGold bg-clip-text text-transparent">Adrian</span>
                </h1>
                <p className="text-cloudGrey">Access & manage your account and transactions efficiently.</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-64 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 pl-10 text-sm text-white placeholder:text-slateGrey backdrop-blur-xl focus:border-teal/50 focus:outline-none focus:ring-2 focus:ring-teal/20"
                  />
                  <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slateGrey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Bank Accounts Summary */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-card-soft transition-transform hover:scale-[1.01]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-6">
                      {/* Circular Progress */}
                      <div className="relative h-32 w-32">
                        <svg className="h-32 w-32 -rotate-90 transform">
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="10"
                            fill="none"
                            className="text-white/10"
                          />
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="url(#gradient)"
                            strokeWidth="10"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${(2 / 2) * 2 * Math.PI * 56} ${2 * Math.PI * 56}`}
                            className="drop-shadow-lg"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#39D0C8" />
                              <stop offset="100%" stopColor="#F4C75B" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-3xl font-bold bg-gradient-to-br from-teal to-luxeGold bg-clip-text text-transparent">2</p>
                            <p className="text-xs text-slateGrey">Banks</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-1">2 Bank Accounts</h3>
                        <p className="text-sm text-cloudGrey mb-4">Total Current Balance</p>
                        <p className="text-4xl font-bold text-white">$2,698.12</p>
                      </div>
                    </div>

                    <button className="flex items-center gap-2 rounded-xl bg-teal/10 px-4 py-2 text-sm font-medium text-teal transition-all hover:bg-teal/20 hover:shadow-lg hover:shadow-teal/20">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Add bank
                    </button>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-card-soft">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Recent transactions</h2>
                    <button className="text-sm font-medium text-cloudGrey hover:text-teal transition-colors">
                      View all
                    </button>
                  </div>

                  {/* Bank Tabs */}
                  <div className="mb-6 flex gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
                    <button
                      onClick={() => setActiveBank('chase')}
                      className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                        activeBank === 'chase'
                          ? 'bg-teal/20 text-teal shadow-sm'
                          : 'text-cloudGrey hover:text-white'
                      }`}
                    >
                      Chase Bank
                    </button>
                    <button
                      onClick={() => setActiveBank('boa')}
                      className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                        activeBank === 'boa'
                          ? 'bg-teal/20 text-teal shadow-sm'
                          : 'text-cloudGrey hover:text-white'
                      }`}
                    >
                      Bank of America
                    </button>
                    <button
                      onClick={() => setActiveBank('platypus')}
                      className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                        activeBank === 'platypus'
                          ? 'bg-teal/20 text-teal shadow-sm'
                          : 'text-cloudGrey hover:text-white'
                      }`}
                    >
                      First Platypus Bank
                    </button>
                  </div>

                  {/* Bank Summary */}
                  {activeBank === 'chase' && (
                    <>
                      <div className="mb-6 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-teal/10">
                          <span className="text-sm font-bold text-teal">CB</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">Chase Bank</h3>
                          <p className="text-2xl font-bold text-teal">$2,588.12</p>
                        </div>
                        <div className="rounded-full bg-teal/20 px-3 py-1 text-xs font-medium text-teal">
                          savings
                        </div>
                      </div>

                      {/* Transactions Table */}
                      <div className="space-y-1">
                        {/* Header */}
                        <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-medium text-slateGrey">
                          <div className="col-span-4">Transaction</div>
                          <div className="col-span-2">Amount</div>
                          <div className="col-span-2">Status</div>
                          <div className="col-span-2">Date</div>
                          <div className="col-span-2">Category</div>
                        </div>

                        {/* Transaction Row */}
                        <div className="grid grid-cols-12 gap-4 items-center rounded-xl px-4 py-3.5 transition-colors hover:bg-white/5">
                          <div className="col-span-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1DB954]/20">
                              <svg className="h-5 w-5 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">Spotify</p>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm font-semibold text-softRed">- $15.00</p>
                          </div>
                          <div className="col-span-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slateGrey/20 px-2.5 py-1 text-xs font-medium text-cloudGrey">
                              <span className="h-1.5 w-1.5 rounded-full bg-cloudGrey"></span>
                              Processing
                            </span>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm text-cloudGrey">Wed 1:00pm</p>
                          </div>
                          <div className="col-span-2">
                            <span className="rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 text-xs font-medium text-teal">
                              Subscriptions
                            </span>
                          </div>
                        </div>

                        {/* Transaction Row 2 */}
                        <div className="grid grid-cols-12 gap-4 items-center rounded-xl px-4 py-3.5 transition-colors hover:bg-white/5">
                          <div className="col-span-4 flex items-center gap-3">
                            <div className="h-10 w-10 overflow-hidden rounded-xl">
                              <div className="h-full w-full bg-gradient-to-br from-slateGrey to-cloudGrey flex items-center justify-center text-xs font-bold text-charcoal">
                                AD
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">Alexa Doe</p>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm font-semibold text-teal">+ $88.00</p>
                          </div>
                          <div className="col-span-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/20 px-2.5 py-1 text-xs font-medium text-teal">
                              <span className="h-1.5 w-1.5 rounded-full bg-teal"></span>
                              Success
                            </span>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm text-cloudGrey">Wed 2:45am</p>
                          </div>
                          <div className="col-span-2">
                            <span className="rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 text-xs font-medium text-teal">
                              Deposit
                            </span>
                          </div>
                        </div>

                        {/* Transaction Row 3 */}
                        <div className="grid grid-cols-12 gap-4 items-center rounded-xl px-4 py-3.5 transition-colors hover:bg-white/5">
                          <div className="col-span-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black">
                              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 200 300">
                                <path d="M126.6 105.9l-38.5 38.5-14.1-14.1 38.5-38.5-24.4-24.4-62.6 62.6 62.6 62.6 62.6-62.6z"/>
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">Figma</p>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm font-semibold text-softRed">- $18.99</p>
                          </div>
                          <div className="col-span-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slateGrey/20 px-2.5 py-1 text-xs font-medium text-cloudGrey">
                              <span className="h-1.5 w-1.5 rounded-full bg-cloudGrey"></span>
                              Processing
                            </span>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm text-cloudGrey">Tue 6:10pm</p>
                          </div>
                          <div className="col-span-2">
                            <span className="rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 text-xs font-medium text-teal">
                              Income
                            </span>
                          </div>
                        </div>

                        {/* Transaction Row 4 */}
                        <div className="grid grid-cols-12 gap-4 items-center rounded-xl px-4 py-3.5 transition-colors hover:bg-white/5">
                          <div className="col-span-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xs font-bold text-cloudGrey">
                              FV
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">Fresh F&V</p>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm font-semibold text-softRed">- $88.00</p>
                          </div>
                          <div className="col-span-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/20 px-2.5 py-1 text-xs font-medium text-teal">
                              <span className="h-1.5 w-1.5 rounded-full bg-teal"></span>
                              Success
                            </span>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm text-cloudGrey">Tue 12:15pm</p>
                          </div>
                          <div className="col-span-2">
                            <span className="rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 text-xs font-medium text-teal">
                              Groceries
                            </span>
                          </div>
                        </div>

                        {/* Transaction Row 5 */}
                        <div className="grid grid-cols-12 gap-4 items-center rounded-xl px-4 py-3.5 transition-colors hover:bg-white/5">
                          <div className="col-span-4 flex items-center gap-3">
                            <div className="h-10 w-10 overflow-hidden rounded-xl">
                              <div className="h-full w-full bg-gradient-to-br from-slateGrey to-cloudGrey flex items-center justify-center text-xs font-bold text-charcoal">
                                SS
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">Sam Sulek</p>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm font-semibold text-softRed">- $40.20</p>
                          </div>
                          <div className="col-span-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-softRed/20 px-2.5 py-1 text-xs font-medium text-softRed">
                              <span className="h-1.5 w-1.5 rounded-full bg-softRed"></span>
                              Declined
                            </span>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm text-cloudGrey">Tue 5:40am</p>
                          </div>
                          <div className="col-span-2">
                            <span className="rounded-full border border-softRed/30 bg-softRed/10 px-2.5 py-1 text-xs font-medium text-softRed">
                              Food
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column - Sidebar Content */}
              <div className="space-y-8">
                {/* Bank Cards */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-card-soft">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">My Banks</h3>
                    <button className="flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal/80 transition-colors">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Add bank
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Card 1 */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-6 shadow-lg transition-transform hover:scale-[1.02]">
                      <div className="absolute top-4 right-4">
                        <svg className="h-12 w-12 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                        </svg>
                      </div>

                      <div className="relative z-10">
                        <div className="mb-8">
                          <p className="text-xs font-medium text-white/60 mb-1">JS Mastery Pro.</p>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-white/80 mb-2">ADRIAN HAJDIN</p>
                          <p className="text-lg font-mono tracking-wider text-white">1234 1234 1234 1234</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-sm text-white/80">06/24</p>
                          <div className="text-white/90 font-bold text-sm">VISA</div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-6 shadow-lg transition-transform hover:scale-[1.02]">
                      <div className="absolute top-4 right-4">
                        <svg className="h-12 w-12 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="9" cy="12" r="7"/>
                          <circle cx="15" cy="12" r="7" opacity="0.5"/>
                        </svg>
                      </div>

                      <div className="relative z-10">
                        <div className="mb-8">
                          <p className="text-xs font-medium text-white/60 mb-1">JS Mastery Pro.</p>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-white/80 mb-2">ADRIAN HAJDIN</p>
                          <p className="text-lg font-mono tracking-wider text-white">1234 1234 1234 1234</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-sm text-white/80">06/24</p>
                          <div className="text-white/90 font-bold text-sm">MASTERCARD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* My Budgets */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-card-soft">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">My budgets</h3>
                    <button className="text-slateGrey hover:text-white transition-colors">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Budget Item 1 */}
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/20">
                          <svg className="h-5 w-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">Subscriptions</p>
                          <p className="text-xs text-slateGrey">$25 left</p>
                        </div>
                        <p className="text-lg font-semibold text-teal">$25</p>
                      </div>
                      <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-teal to-teal/80" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    {/* Budget Item 2 */}
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-luxeGold/20">
                          <svg className="h-5 w-5 text-luxeGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">Food and booze</p>
                          <p className="text-xs text-slateGrey">$120 left</p>
                        </div>
                        <p className="text-lg font-semibold text-luxeGold">$120</p>
                      </div>
                      <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-luxeGold to-luxeGold/80" style={{ width: '60%' }}></div>
                      </div>
                    </div>

                    {/* Budget Item 3 */}
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/20">
                          <svg className="h-5 w-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">Savings</p>
                          <p className="text-xs text-slateGrey">$50 left</p>
                        </div>
                        <p className="text-lg font-semibold text-teal">$50</p>
                      </div>
                      <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
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
