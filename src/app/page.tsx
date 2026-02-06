"use client";

import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

const newsStories = [
  {
    number: "01",
    tag: "Open Source",
    title: "DeepSeek R1 Shocks the AI World",
    summary:
      "China-based DeepSeek released R1, an open-source reasoning model that stunned the industry by demonstrating what a relatively small firm could achieve with limited resources. It challenged the assumption that only Big Tech with massive budgets could build frontier AI models, sending shockwaves through Silicon Valley and triggering stock market reactions across the tech sector.",
    date: "January 2026",
  },
  {
    number: "02",
    tag: "Hardware",
    title: "NVIDIA Acquires Groq for $20B & Declares Physical AI Era",
    summary:
      "NVIDIA completed a $20 billion acquisition of Groq's inference chip technology while CEO Jensen Huang declared at CES 2026 that the 'ChatGPT moment for physical AI has arrived.' The company unveiled the Vera Rubin AI superchip platform, engineered for agentic AI and autonomous systems capable of multi-step tasks without human involvement.",
    date: "January 2026",
  },
  {
    number: "03",
    tag: "Big Tech",
    title: "Google Launches 'Personal Intelligence' Era with Gemini",
    summary:
      "Google announced a major leap forward with Personal Intelligence, allowing users to securely connect Gmail, Photos, YouTube, and Search to the Gemini app for deeply personalized AI assistance. Chrome received new features built on Gemini 3, including an 'auto browse' capability that handles complex multi-step tasks like booking travel autonomously.",
    date: "January 2026",
  },
  {
    number: "04",
    tag: "Robotics",
    title: "Boston Dynamics Atlas Begins Real-World Factory Deployment",
    summary:
      "CBS 60 Minutes reported that Boston Dynamics' humanoid robot Atlas began its first field test at Hyundai's plant near Savannah, Georgia. Standing 5'9\" and weighing 200 lbs, the fully electric, AI-powered robot autonomously performs warehouse sorting tasks — marking a landmark moment for robotics entering real manufacturing workflows.",
    date: "January 4, 2026",
  },
  {
    number: "05",
    tag: "Research",
    title: "Falcon-H1R 7B: The Compact Model Punching Above Its Weight",
    summary:
      "The Technology Innovation Institute unveiled Falcon-H1R 7B, a compact model built on a Transformer-Mamba hybrid architecture. With only 7 billion parameters, it delivers performance comparable to systems 7x its size and scored 88.1% on the AIME-24 math benchmark — reinforcing the powerful trend toward efficient, smaller AI models.",
    date: "January 2026",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For curious developers staying informed",
    features: [
      "Weekly email digest",
      "Top 5 stories per week",
      "Community access",
      "Basic search archive",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For developers who need the full picture",
    features: [
      "Daily email digest",
      "Unlimited story archive",
      "AI-powered summaries",
      "Code snippet examples",
      "Priority newsletter delivery",
      "Slack & Discord integration",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$39",
    period: "/month",
    description: "For engineering teams staying aligned",
    features: [
      "Everything in Pro",
      "Up to 25 team members",
      "Shared reading lists",
      "Team analytics dashboard",
      "Custom topic filters",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const faqItems = [
  {
    question: "What is Developer's Digest?",
    answer:
      "Developer's Digest is a curated AI news platform built specifically for software developers. We research, summarize, and deliver the most important AI stories, breakthroughs, and trends so you can stay informed without spending hours scrolling through news feeds.",
  },
  {
    question: "How often do you publish new content?",
    answer:
      "Free subscribers receive a weekly digest every Monday. Pro subscribers get daily digests delivered each morning, plus breaking news alerts for major announcements. All content is also available on our web platform in real time.",
  },
  {
    question: "Can I try Pro features before committing?",
    answer:
      "Absolutely! Every Pro subscription starts with a 14-day free trial. No credit card required upfront. You'll have full access to all Pro features during the trial period, and you can cancel anytime.",
  },
  {
    question: "What makes this different from other AI newsletters?",
    answer:
      "We focus exclusively on news that matters to developers — not hype, not investor speculation. Every story includes technical context, code implications, and practical takeaways. Our AI-powered summaries cut through the noise so you get signal, not noise.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes. If you're not satisfied with your subscription within the first 30 days, we'll issue a full refund — no questions asked. We want you to stay because the content is valuable, not because of a billing commitment.",
  },
  {
    question: "Can I integrate the digest into my existing workflow?",
    answer:
      "Pro and Team plans include integrations with Slack, Discord, and RSS feeds. Team plans also include full API access so you can build custom integrations and pipe stories directly into your internal tools or dashboards.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-lg font-medium text-foreground">{question}</span>
        <span className="ml-4 shrink-0 text-2xl text-muted">
          {isOpen ? "\u2212" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 text-muted leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <span className="text-sm font-bold text-white">&lt;/&gt;</span>
            </div>
            <span className="text-lg font-bold text-foreground">
              Developer&apos;s Digest
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#news" className="text-sm text-muted hover:text-foreground transition-colors">
              Top Stories
            </a>
            <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-muted hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#pricing"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Subscribe
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),_transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            January 2026 Edition
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            AI news, curated for{" "}
            <span className="gradient-text">developers</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted leading-relaxed md:text-xl">
            Stop doom-scrolling through AI hype. Developer&apos;s Digest delivers the
            breakthroughs, launches, and trends that actually matter to your
            work — distilled into 5-minute reads.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pricing"
              className="glow rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-dark"
            >
              Start Reading Free
            </a>
            <a
              href="#news"
              className="rounded-xl border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-surface"
            >
              See This Month&apos;s Top Stories
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              12,000+ readers
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              4.9/5 rating
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              5-minute reads
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Top 5 AI Stories — January 2026
            </h2>
            <p className="mx-auto max-w-2xl text-muted">
              The biggest breakthroughs, launches, and industry shifts from the
              month that set the tone for AI in 2026.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {newsStories.map((story) => (
              <article
                key={story.number}
                className="card-hover group rounded-2xl border border-border bg-surface p-6 md:p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                  <div className="shrink-0">
                    <span className="news-number text-5xl font-bold md:text-6xl">
                      {story.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                        {story.tag}
                      </span>
                      <span className="text-xs text-muted">{story.date}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground md:text-2xl">
                      {story.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {story.summary}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted">
              Key theme: January 2026 marked AI&apos;s shift from hype to pragmatism
              — smaller efficient models, physical AI entering real-world
              deployment, and AI becoming deeply personal infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Simple, developer-friendly pricing
            </h2>
            <p className="mx-auto max-w-2xl text-muted">
              Start free, upgrade when you need more. Every plan includes our
              curated AI news coverage.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`card-hover relative rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-accent bg-surface glow"
                    : "border-border bg-surface"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <ul className="mb-8 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full rounded-xl py-3 text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-accent text-white hover:bg-accent-dark"
                      : "border border-border text-foreground hover:bg-surface-light"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-muted">
              Everything you need to know about Developer&apos;s Digest.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            {faqItems.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="glow relative overflow-hidden rounded-3xl border border-border bg-surface p-12 text-center md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.1),_transparent_70%)]" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Stay ahead of the AI curve
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted">
                Join 12,000+ developers who start their week with the most
                important AI news, curated and summarized for technical minds.
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                />
                <button className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-dark">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-xs text-muted">
                Free forever plan. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-accent">
              <span className="text-xs font-bold text-white">&lt;/&gt;</span>
            </div>
            <span className="text-sm font-semibold text-foreground">
              Developer&apos;s Digest
            </span>
          </div>
          <div className="flex gap-8 text-sm text-muted">
            <a href="#news" className="hover:text-foreground transition-colors">Stories</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <p className="text-xs text-muted">
            &copy; 2026 Developer&apos;s Digest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
