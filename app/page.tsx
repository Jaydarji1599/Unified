'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import DashboardPreview from '@/components/DashboardPreview'

function HomeContent() {
  const searchParams = useSearchParams()
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())

    if (searchParams.get('success')) {
      alert("You're on the Unified waitlist. We'll be in touch soon.")
    }

    const items = document.querySelectorAll('.title-anim-item')
    let index = 2
    const interval = setInterval(() => {
      items[index]?.classList.remove('active')
      index = (index + 1) % items.length
      items[index]?.classList.add('active')
    }, 2800)

    return () => clearInterval(interval)
  }, [searchParams])

  return (
    <div>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-44 -right-44 h-[32rem] w-[32rem] rounded-full bg-teal/20 blur-3xl parallax"></div>
        <div className="absolute top-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-luxeGold/10 blur-3xl parallax"></div>
      </div>

      <header className="sticky top-0 z-30 border-b border-white/5 bg-charcoal/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-teal to-luxeGold flex items-center justify-center text-charcoal font-bold">
              U
            </div>
            <span className="text-lg font-semibold">Unified</span>
          </div>

          <a
            href="#waitlist"
            className="hidden md:inline-flex rounded-full bg-teal px-4 py-2 text-sm font-semibold text-charcoal shadow-lg shadow-teal/30 hover:bg-teal/90"
          >
            Join Waitlist
          </a>

        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4">
        <section className="pt-2 sm:pt-4 md:pt-8 pb-0">
          <ContainerScroll
            titleComponent={
              <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6 md:mb-8">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-cloudGrey border border-white/10 bg-white/5 px-3 py-1.5 rounded-full">
                  <span className="h-2.5 w-2.5 bg-teal rounded-full"></span>
                  Early access • Waitlist open
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
                  All your money.<br />
                  <span className="gradient-txt">One unified dashboard.</span>
                </h1>

                <p className="title-anim text-base sm:text-lg md:text-xl font-medium mx-auto">
                  <span className="title-anim-item gradient-txt">to control all your money in one place</span>
                  <span className="title-anim-item gradient-txt">to reduce financial noise and stress</span>
                  <span className="title-anim-item gradient-txt active">and finally see the full picture</span>
                </p>

                <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-cloudGrey px-4 sm:px-0">
                  Securely connect your banks, track balances in real time, and understand your spending – without switching apps.
                </p>

                <form
                  id="waitlist"
                  action="https://formspree.io/f/xgvgjrro"
                  method="POST"
                  className="flex flex-col sm:flex-row gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 max-w-2xl mx-auto"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 text-white placeholder:text-slateGrey focus:ring-2 focus:ring-teal outline-none"
                  />
                  <input type="hidden" name="source" value="hero_waitlist" />
                  <input type="hidden" name="_redirect" value={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://unified-landing.vercel.app'}/?success=true`} />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-teal text-charcoal font-semibold shadow-lg shadow-teal/30 hover:bg-teal/90 whitespace-nowrap"
                  >
                    Join the Waitlist
                  </button>
                </form>

                <p className="text-sm text-cloudGrey">No spam. Unsubscribe anytime.</p>
              </div>
            }
          >
            <DashboardPreview />
          </ContainerScroll>
        </section>

        <section className="py-20 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Everything you need to <span className="gradient-txt">master your money</span>
            </h2>
            <p className="text-lg text-cloudGrey max-w-2xl mx-auto">
              Built for the modern era, designed for simplicity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-teal/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Sync</h3>
              <p className="text-cloudGrey">
                See your balances update instantly across all your connected accounts
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-luxeGold/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-luxeGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
              <p className="text-cloudGrey">
                Understand your spending patterns with AI-powered analytics
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-teal/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bank-level Security</h3>
              <p className="text-cloudGrey">
                256-bit encryption and read-only access keeps your data safe
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Built with enterprise-grade security.</h3>
              <p className="text-cloudGrey text-lg">Encrypted. Validated. Permission-based.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-cloudGrey">
              <span className="flex items-center gap-2">
                <span className="text-teal">✓</span> SSR Authentication
              </span>
              <span className="flex items-center gap-2">
                <span className="text-teal">✓</span> Plaid Integration
              </span>
              <span className="flex items-center gap-2">
                <span className="text-teal">✓</span> Dwolla Transfers
              </span>
              <span className="flex items-center gap-2">
                <span className="text-teal">✓</span> Real-time Sync
              </span>
            </div>
          </div>
        </section>

        <section className="pb-28 max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-br from-navy via-charcoal to-black rounded-3xl p-12 shadow-soft-3d border border-white/10">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Take control of your money – <span className="gradient-txt">effortlessly</span>
            </h2>
            <p className="text-xl text-cloudGrey mb-8">
              Join the waitlist and shape what Unified becomes.
            </p>

            <form
              action="https://formspree.io/f/xgvgjrro"
              method="POST"
              className="mx-auto max-w-md flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-black/40 text-white placeholder:text-slateGrey focus:ring-2 focus:ring-teal outline-none"
              />
              <input type="hidden" name="source" value="final_cta" />
              <input type="hidden" name="_redirect" value={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://unified-landing.vercel.app'}/?success=true`} />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-teal text-charcoal font-semibold shadow-lg shadow-teal/30 hover:bg-teal/90 whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>

            <p className="text-sm text-cloudGrey mt-6">
              No credit card required. Early access is free.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-cloudGrey">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {year} Unified. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-charcoal" />}>
      <HomeContent />
    </Suspense>
  )
}