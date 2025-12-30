import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AbstractArches } from "./components/AbstractArches";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/ui/accordion";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const gridScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.995]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Abstract arches with lighting */}
      <AbstractArches />

      {/* Subtle texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]" />

      {/* Header with animated fade */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-start"
      >
        <div className="flex items-baseline gap-3">
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-foreground/40">Alex Czako</div>
          <div className="w-px h-4 bg-foreground/20" />
          <div className="text-[0.65rem] tracking-[0.2em] uppercase text-foreground/30">BizOps Leader</div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        style={{ scale: gridScale }}
        className="relative"
      >
        {/* Hero Grid Layout */}
        <div className="min-h-screen grid grid-cols-12 gap-px bg-border">
          {/* Left decorative column */}
          <div className="col-span-1 bg-background" />

          {/* Main content area */}
          <div className="col-span-10 bg-background">
            <div className="min-h-screen flex flex-col justify-center px-12 py-24">
              {/* Masthead */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-16"
              >
                <div className="border-t border-b border-foreground/10 py-8">
                  <h1
                    className="tracking-tight leading-[0.9]"
                    style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
                  >
                    Alex Czako
                  </h1>
                </div>
              </motion.div>

              {/* Three column layout - newspaper style */}
              <div className="grid grid-cols-3 gap-12">
                {/* Column 1 - Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-4"
                >
                  <div className="h-px bg-foreground/20 mb-6" />
                  <p className="text-[0.7rem] tracking-[0.25em] uppercase text-foreground/50 mb-4">
                    Head of Business Operations
                  </p>
                  <p className="text-[0.95rem] leading-relaxed text-foreground/70">
                    At Wefunder (YC13). Building automation, tooling, and analytics so founder-facing teams can take precise, timely action.
                  </p>
                </motion.div>

                {/* Column 2 - Main copy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="space-y-6"
                >
                  <div className="h-px bg-foreground/20 mb-6" />
                </motion.div>

                {/* Column 3 - Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-6"
                >
                  <div className="h-px bg-foreground/20 mb-6" />
                  <div className="space-y-3">
                    <a
                      href="mailto:alex.czako@gmail.com"
                      className="group block text-[0.85rem] tracking-wide text-foreground/60 hover:text-[#ff5722] transition-colors"
                    >
                      <span className="inline-block group-hover:translate-x-1 transition-transform">
                        Email →
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="group block text-[0.85rem] tracking-wide text-foreground/60 hover:text-[#ff5722] transition-colors"
                    >
                      <span className="inline-block group-hover:translate-x-1 transition-transform">
                        LinkedIn →
                      </span>
                    </a>
                    <a
                      href="https://github.com/czakoa"
                      target="_blank"
                      rel="noreferrer"
                      className="group block text-[0.85rem] tracking-wide text-foreground/60 hover:text-[#ff5722] transition-colors"
                    >
                      <span className="inline-block group-hover:translate-x-1 transition-transform">
                        GitHub →
                      </span>
                    </a>
                    <a
                      href="https://instagram.com/alex.czako"
                      target="_blank"
                      rel="noreferrer"
                      className="group block text-[0.85rem] tracking-wide text-foreground/60 hover:text-[#ff5722] transition-colors"
                    >
                      <span className="inline-block group-hover:translate-x-1 transition-transform">
                        Instagram →
                      </span>
                    </a>
                    <a
                      href="https://x.com/alexczako"
                      target="_blank"
                      rel="noreferrer"
                      className="group block text-[0.85rem] tracking-wide text-foreground/60 hover:text-[#ff5722] transition-colors"
                    >
                      <span className="inline-block group-hover:translate-x-1 transition-transform">
                        X →
                      </span>
                    </a>
                    <a
                      href="https://www.human.food"
                      target="_blank"
                      rel="noreferrer"
                      className="group block text-[0.85rem] tracking-wide text-foreground/60 hover:text-[#ff5722] transition-colors"
                    >
                      <span className="inline-block group-hover:translate-x-1 transition-transform">
                        human.food →
                      </span>
                    </a>
                  </div>

                  {/* Neon accent - orange */}
                  <div className="pt-8">
                    <a
                      href="#contact"
                      className="group relative inline-block"
                    >
                      <div className="absolute inset-0 bg-[#ff5722] blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                      <div className="relative border border-[#ff5722] px-6 py-3 text-[0.7rem] tracking-[0.25em] uppercase text-[#ff5722] hover:bg-[#ff5722] hover:text-background transition-all duration-300">
                        Get in touch
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>


              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-24 flex items-center gap-4"
              >
                <div className="text-[0.65rem] tracking-[0.3em] uppercase text-foreground/30">
                  Scroll to explore
                </div>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-foreground/30"
                >
                  ↓
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right decorative column */}
          <div className="col-span-1 bg-background relative" />
        </div>


        {/* Experience Section */}
        <div className="grid grid-cols-12 gap-px bg-border">
          <div className="col-span-1 bg-background" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-10 bg-background py-24 px-12"
          >
            {/* Section label */}
            <div className="flex items-center gap-8 mb-12">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-foreground/40">
                Experience
              </div>
              <div className="h-px flex-1 bg-foreground/10" />
            </div>

            {/* Experience items */}
            <Accordion type="multiple" className="space-y-6">
              {/* Wefunder - with nested accordion for multiple positions */}
              <AccordionItem value="wefunder" className="border border-foreground/10">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center gap-4 w-full">
                    <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">Wefunder (YC13)</span>
                    <span className="text-[0.75rem] text-foreground/40">Aug. 2023 - Present</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="multiple" className="px-6 space-y-4">
                    {/* Head of BizOps */}
                    <AccordionItem value="wefunder-head" className="border-l-2 border-[#ff5722] pl-6">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex flex-col items-start gap-2">
                          <div className="flex items-center gap-4">
                            <span className="text-[0.75rem] text-foreground/40">Jun. 2025 - Present</span>
                          </div>
                          <h3 className="text-[1.1rem] font-medium text-foreground">Head of Business Operations (promoted twice)</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                          <li>• Own BizOps tooling and automation for Business Development, Fundraising, Account Management, and Investor Success.</li>
                          <li>• Designed founder-facing segmentation based on sector and raise size and investor reengagement based on prior activity and interest.</li>
                          <li>• Built dashboards in SQL, Zapier, and Make to track stages, campaign performance, and team metrics, enabling timely founder outreach.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Volume Team Lead */}
                    <AccordionItem value="wefunder-volume" className="border-l-2 border-foreground/20 pl-6">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex flex-col items-start gap-2">
                          <div className="flex items-center gap-4">
                            <span className="text-[0.75rem] text-foreground/40">Nov. 2024 - Jun. 2025</span>
                          </div>
                          <h3 className="text-[1.1rem] font-medium text-foreground">Volume Team Lead</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                          <li>• Owned the high-volume business responsible for $30M+ investment volume YTD (~40% of platform revenue).</li>
                          <li>• Led a six-person team across sales, fundraising, and operations; rebuilt onboarding and tracking flows, cutting time-to-launch by 20%.</li>
                          <li>• Forged strategic partnerships (Third Derivative, Fibe) that sourced ~$1M additional volume and produced founder events with industry and community leaders.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Inbound BD */}
                    <AccordionItem value="wefunder-inbound" className="border-l-2 border-foreground/20 pl-6">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex flex-col items-start gap-2">
                          <div className="flex items-center gap-4">
                            <span className="text-[0.75rem] text-foreground/40">Aug. 2023 - Nov. 2024</span>
                          </div>
                          <h3 className="text-[1.1rem] font-medium text-foreground">Inbound BD & Operations Associate</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                          <li>• Qualified leads, led founder intake calls, and maintained CRM for 10,000+ annual inbound applications.</li>
                          <li>• Supported cross-functional projects, including overhauling founder overview dashboards and communications.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

              {/* Credit Suisse */}
              <AccordionItem value="credit-suisse" className="border border-foreground/10">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">Credit Suisse</span>
                      <span className="text-[0.75rem] text-foreground/40">Jul. 2022 - Jul. 2023</span>
                    </div>
                    <h3 className="text-[1.1rem] font-medium text-foreground">Investment Banking Analyst - Primaries & Secondaries</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                    <li>• Raised ~$5.5B in private equity and private debt capital for top quartile private market investors.</li>
                    <li>• Structured a +$100M debt fund into a marketable instrument and produced LP market maps, benchmarking, teasers, and model updates.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* UBS */}
              <AccordionItem value="ubs" className="border border-foreground/10">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">UBS</span>
                      <span className="text-[0.75rem] text-foreground/40">Jun. 2021 - Jan. 2022</span>
                    </div>
                    <h3 className="text-[1.1rem] font-medium text-foreground">Fixed Income Trading Off-Cycle Intern</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                    <li>• Supported a $30B AUM multi-sector team covering securitized products, rates, and investment grade/high yield credit.</li>
                    <li>• Analyzed structured hedging positions and flagged duration drift to inform rebalancing.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Scotiabank */}
              <AccordionItem value="scotiabank" className="border border-foreground/10">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">Scotiabank</span>
                      <span className="text-[0.75rem] text-foreground/40">Mar. 2021 - Jun. 2021</span>
                    </div>
                    <h3 className="text-[1.1rem] font-medium text-foreground">Equity Research Spring Analyst - Financial Institutions</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                    <li>• Built exhibits, models, and research to initiate coverage on LatAm fintechs PagSeguro, Stone, and Cielo and briefed trading teams.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* GRI / MIT Lincoln Labs */}
              <AccordionItem value="gri" className="border border-foreground/10">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">GRI / MIT Lincoln Labs</span>
                      <span className="text-[0.75rem] text-foreground/40">May 2020 - Sep. 2020</span>
                    </div>
                    <h3 className="text-[1.1rem] font-medium text-foreground">Researcher</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                    <li>• Interviewed small business owners, educators, and public officials for FEMA to assess early COVID-19 economic impacts and remedies.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <div className="col-span-1 bg-background" />
        </div>

        {/* Education Section */}
        <div className="grid grid-cols-12 gap-px bg-border">
          <div className="col-span-1 bg-background" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-10 bg-background py-24 px-12"
          >
            {/* Section label */}
            <div className="flex items-center gap-8 mb-12">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-foreground/40">
                Education
              </div>
              <div className="h-px flex-1 bg-foreground/10" />
            </div>

            <p className="text-[1.1rem] leading-relaxed text-foreground/70 mb-16 max-w-3xl">
              Frameworks that still guide my thinking.
            </p>

            {/* Education cards */}
            <div className="grid grid-cols-1 gap-8">
              <div className="border border-foreground/10 p-8">
                <h3 className="text-[1.1rem] font-medium text-foreground mb-3">Northeastern University - D'Amore-McKim School of Business</h3>
                <p className="text-[0.85rem] text-foreground/50 mb-4">Sep. 2018 - Apr. 2022</p>
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 bg-background" />
        </div>

        {/* Podcast Section */}
        <div className="grid grid-cols-12 gap-px bg-border">
          <div className="col-span-1 bg-background" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-10 bg-background py-24 px-12"
          >
            {/* Section label */}
            <div className="flex items-center gap-8 mb-12">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-foreground/40">
                Podcast
              </div>
              <div className="h-px flex-1 bg-foreground/10" />
            </div>

            <h2 className="text-[1.8rem] font-medium text-foreground mb-8">Warm Intro</h2>
            <p className="text-[1.1rem] leading-relaxed text-foreground/70 mb-12 max-w-3xl">
              A podcast I produce exploring meaningful conversations and connections.
            </p>

            {/* Embedded podcast episodes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-foreground/10 p-6">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/show/YOUR_SHOW_ID?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Warm Intro Podcast - Episode 1"
                />
              </div>
              <div className="border border-foreground/10 p-6">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/show/YOUR_SHOW_ID?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Warm Intro Podcast - Episode 2"
                />
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 bg-background" />
        </div>

        {/* Contact Section */}
        <div id="contact" className="grid grid-cols-12 gap-px bg-border">
          <div className="col-span-1 bg-background" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-10 bg-background py-24 px-12"
          >
            {/* Section label */}
            <div className="flex items-center gap-8 mb-12">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-foreground/40">
                Contact
              </div>
              <div className="h-px flex-1 bg-foreground/10" />
            </div>

            <p className="text-[1.1rem] leading-relaxed text-foreground/70 mb-16 max-w-3xl">
              Drop a note or connect on socials.
            </p>

            {/* Contact info */}
            <div className="space-y-8">
              <a
                href="mailto:alex.czako@gmail.com"
                className="group inline-block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ff5722] blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative border border-[#ff5722] px-8 py-4 text-[1.2rem] tracking-wide text-[#ff5722] hover:bg-[#ff5722] hover:text-background transition-all duration-300">
                    alex.czako@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex gap-8 flex-wrap">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.85rem] tracking-[0.2em] uppercase text-foreground/40 hover:text-[#ff5722] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/czakoa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.85rem] tracking-[0.2em] uppercase text-foreground/40 hover:text-[#ff5722] transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://instagram.com/alex.czako"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.85rem] tracking-[0.2em] uppercase text-foreground/40 hover:text-[#ff5722] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://x.com/alexczako"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.85rem] tracking-[0.2em] uppercase text-foreground/40 hover:text-[#ff5722] transition-colors"
                >
                  X
                </a>
                <a
                  href="https://www.human.food"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.85rem] tracking-[0.2em] uppercase text-foreground/40 hover:text-[#ff5722] transition-colors"
                >
                  human.food
                </a>
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 bg-background" />
        </div>

        {/* Footer */}
        <div className="grid grid-cols-12 gap-px bg-border">
          <div className="col-span-1 bg-background" />

          <div className="col-span-10 bg-background px-12 py-16">
            <div className="border-t border-foreground/10 pt-8 flex justify-between items-center">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-foreground/30">
                © 2025 Alex Czako
              </div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-foreground/30">
                Built on GitHub Pages
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-background" />
        </div>
      </motion.div>
    </div>
  );
}
