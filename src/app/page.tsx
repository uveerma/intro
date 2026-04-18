"use client";

import { useEffect } from "react";
import { clx } from "~~/utils";

// ── Brand colors ────────────────────────────────────────────────────────────
const BRAND = {
  cleopetra: "#11100D",
  candypay: "#8B55FF",
  askanon: "#3974F1",
  social: "#FF5C00",
} as const;

const COLLAGE_IMAGES = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"];

// ── Shared styles ───────────────────────────────────────────────────────────
const LINK_CLASSES =
  "font-medium text-gray-500 underline underline-offset-4 decoration-gray-300 transition-colors duration-150";
const BULLET_CLASSES = "text-[16px] leading-relaxed text-gray-600 pl-1";

// ── Hooks ───────────────────────────────────────────────────────────────────
function useColorHover(color: string) {
  const onMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = color;
  };
  const onMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "";
  };
  return { onMouseEnter, onMouseLeave };
}

// ── Reusable components ─────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-xs font-medium uppercase tracking-widest text-gray-400">
      {children}
    </h2>
  );
}

function ArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-1 inline-block"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function SummaryLink({
  href,
  logo,
  hoverColor,
  children,
}: {
  href: string;
  logo?: string;
  hoverColor: string;
  children: React.ReactNode;
}) {
  const handlers = useColorHover(hoverColor);
  return (
    <>
      {logo && (
        <img
          src={logo}
          alt=""
          className="inline-block h-5 w-5 rounded-full object-cover align-text-bottom"
        />
      )}{" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASSES}
        {...handlers}
      >
        {children}
        <ArrowUpRight />
      </a>
    </>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ── Sections ────────────────────────────────────────────────────────────────
function HeroSection() {
  const handlers = useColorHover(BRAND.social);
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Umang Verma
        </h1>
        <div className="flex items-center gap-3">
          <a
            href="mailto:uv@umangverma.com"
            className="text-gray-400 transition-colors duration-150"
            {...handlers}
          >
            <MailIcon />
          </a>
          <a
            href="https://x.com/umang_veerma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-150"
            {...handlers}
          >
            <XIcon />
          </a>
        </div>
      </div>
      <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
        I'm a 21 yr old self-taught developer turned growth hacker.
        <br />
        Most happy when people use my products.
      </p>
    </section>
  );
}

function SummaryBullets() {
  return (
    <section className="mb-12">
      <SectionHeading>Summary</SectionHeading>
      <ul className="list-disc space-y-3 pl-5 marker:text-gray-300">
        <li className={BULLET_CLASSES}>
          Founder{" "}
          <SummaryLink href="https://x.com/cleopetrafun" logo="/cleo.png" hoverColor={BRAND.cleopetra}>
            Cleopetra
          </SummaryLink>{" "}
          — Building a new trading instrument called Thesis Index. Anyone with a macro view about the world can now become a fund manager.
        </li>
        <li className={BULLET_CLASSES}>
          Previously bootstrapped{" "}
          <SummaryLink href="https://x.com/candypayfun" logo="/candypay.png" hoverColor={BRAND.candypay}>
            CandyPay
          </SummaryLink>{" "}
          — a crypto payments platform trusted by 500+ apps & developers
        </li>
        <li className={BULLET_CLASSES}>
          Built{" "}
          <SummaryLink href="https://x.com/search?q=askanon.fun" logo="/askanon.png" hoverColor={BRAND.askanon}>
            AskAnon
          </SummaryLink>{" "}
          — send anon messages to crypto influencers on Twitter, 14K+ messages sent
        </li>
        <li className={BULLET_CLASSES}>
          Won 7+ global Solana hackathons and built consumer crypto products used by 200K+ unique wallets
        </li>
      </ul>
    </section>
  );
}

function WritingSection() {
  const handlers = useColorHover(BRAND.social);
  return (
    <section className="mb-12">
      <SectionHeading>Writing</SectionHeading>
      <div>
        <a
          href="https://x.com/umang_veerma/status/2016645663321444755?s=20"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline gap-4 text-[16px] text-gray-500 transition-colors duration-150"
          {...handlers}
        >
          <span className="shrink-0 text-sm tabular-nums text-gray-400">
            Jan 29, 2026
          </span>
          <span className="underline underline-offset-4 decoration-gray-300 text-inherit">
            State of Prediction Markets on Solana
            <ArrowUpRight />
          </span>
        </a>
      </div>
    </section>
  );
}

function ImageCollage() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-3 gap-3">
        {COLLAGE_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="aspect-[4/3] w-full rounded-[5px] object-cover"
          />
        ))}
      </div>
    </section>
  );
}

function YearProgressGrid() {
  const now = new Date();
  const year = now.getFullYear();
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const totalDays = isLeapYear ? 366 : 365;
  const start = new Date(year, 0, 1);
  const dayOfYear = Math.floor(
    (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
  ) + 1;
  const percentage = Math.round((dayOfYear / totalDays) * 100);

  return (
    <section>
      <div className="mb-3 flex items-baseline justify-between">
        <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
          {year}
        </span>
        <span className="text-xs tabular-nums text-gray-400">
          {percentage}% complete
        </span>
      </div>
      <div className="flex flex-wrap gap-[3px]">
        {Array.from({ length: totalDays }, (_, i) => (
          <div
            key={i}
            className={clx(
              "h-[6px] w-[6px] rounded-full",
              i < dayOfYear ? "bg-[#FF5C00]" : "bg-gray-200",
            )}
          />
        ))}
      </div>
    </section>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  useEffect(() => {
    console.log("%c🦇 I'm Batman.", "font-size: 16px; color: #A78BFA;");
  }, []);

  return (
    <>
      <HeroSection />
      <SummaryBullets />
      <WritingSection />
      <ImageCollage />
      <YearProgressGrid />
    </>
  );
}
