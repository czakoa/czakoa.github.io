import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AbstractArches } from "./components/AbstractArches";

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
                    style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
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
                  <p className="text-[1.05rem] leading-[1.7] text-foreground/80">
                    BizOps leadership that modernizes founder motion, fundraising, and community programs.
                  </p>
                  <p className="text-[1.05rem] leading-[1.7] text-foreground/80">
                    I align automation, tooling, analytics, and partner programs so teams can operate with fewer meetings and more impact.
                  </p>
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
                      href="mailto:alex@alexczako.com"
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

              {/* Highlights chips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 flex flex-wrap gap-3"
              >
                <span className="px-4 py-2 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">
                  Promoted twice at Wefunder
                </span>
                <span className="px-4 py-2 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">
                  $30M+ handled, 70+ founders
                </span>
                <span className="px-4 py-2 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">
                  Automation, SQL, dashboards
                </span>
                <span className="px-4 py-2 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">
                  Community & strategic partnerships
                </span>
              </motion.div>

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
                  animate={{ x: [0, 10, 0] }}
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

        {/* About Section */}
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
                About
              </div>
              <div className="h-px flex-1 bg-foreground/10" />
            </div>

            <p className="text-[1.1rem] leading-relaxed text-foreground/70 mb-16 max-w-3xl">
              Modern builder blending finance rigor, automation, and relationship design.
            </p>

            {/* Three cards */}
            <div className="grid grid-cols-3 gap-8">
              <div className="border border-foreground/10 p-8">
                <h3 className="text-[0.8rem] tracking-[0.2em] uppercase text-foreground/50 mb-4">Current focus</h3>
                <p className="text-[0.95rem] leading-relaxed text-foreground/70">
                  Leading BizOps for Business Development, Fundraising, Account Management, and Investor Success at Wefunder; building automation, segmentation, and tooling pipelines so teams can operate with fewer meetings and more impact.
                </p>
              </div>

              <div className="border border-foreground/10 p-8">
                <h3 className="text-[0.8rem] tracking-[0.2em] uppercase text-foreground/50 mb-4">Process</h3>
                <ul className="space-y-3 text-[0.95rem] leading-relaxed text-foreground/70">
                  <li>• Segmented founder emails by sector and raise size for precise nurturing.</li>
                  <li>• Reengaged investors by prior activity and areas of interest.</li>
                  <li>• Built self-serve dashboards (SQL, Zapier, Make) to track fundraising stages, campaign performance, and operational health.</li>
                </ul>
              </div>

              <div className="border border-foreground/10 p-8">
                <h3 className="text-[0.8rem] tracking-[0.2em] uppercase text-foreground/50 mb-4">Why it matters</h3>
                <p className="text-[0.95rem] leading-relaxed text-foreground/70">
                  I build for clarity: fewer tools, decisive data, and experiences that let founders spend more time building their business.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 bg-background" />
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

            <p className="text-[1.1rem] leading-relaxed text-foreground/70 mb-16 max-w-3xl">
              Selected roles that shaped how I build systems for operators.
            </p>

            {/* Experience items */}
            <div className="space-y-12">
              {/* Wefunder - Head of BizOps */}
              <div className="border-l-2 border-[#ff5722] pl-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">Wefunder (YC13)</span>
                  <span className="text-[0.75rem] text-foreground/40">Jun. 2025 - Present</span>
                </div>
                <h3 className="text-[1.2rem] font-medium text-foreground mb-4">Head of Business Operations (promoted twice)</h3>
                <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  <li>• Own BizOps tooling and automation for Business Development, Fundraising, Account Management, and Investor Success.</li>
                  <li>• Designed founder-facing segmentation based on sector and raise size and investor reengagement based on prior activity and interest.</li>
                  <li>• Built dashboards in SQL, Zapier, and Make to track stages, campaign performance, and team metrics, enabling timely founder outreach.</li>
                </ul>
              </div>

              {/* Wefunder - Volume Team Lead */}
              <div className="border-l-2 border-foreground/20 pl-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">Wefunder (YC13)</span>
                  <span className="text-[0.75rem] text-foreground/40">Nov. 2024 - Jun. 2025</span>
                </div>
                <h3 className="text-[1.2rem] font-medium text-foreground mb-4">Volume Team Lead</h3>
                <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  <li>• Owned the high-volume business responsible for $30M+ investment volume YTD (~40% of platform revenue).</li>
                  <li>• Led a six-person team across sales, fundraising, and operations; rebuilt onboarding and tracking flows, cutting time-to-launch by 20%.</li>
                  <li>• Forged strategic partnerships (Third Derivative, Fibe) that sourced ~$1M additional volume and produced founder events with industry and community leaders.</li>
                </ul>
              </div>

              {/* Wefunder - Inbound BD */}
              <div className="border-l-2 border-foreground/20 pl-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">Wefunder (YC13)</span>
                  <span className="text-[0.75rem] text-foreground/40">Aug. 2023 - Nov. 2024</span>
                </div>
                <h3 className="text-[1.2rem] font-medium text-foreground mb-4">Inbound BD & Operations Associate</h3>
                <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  <li>• Qualified leads, led founder intake calls, and maintained CRM for 10,000+ annual inbound applications.</li>
                  <li>• Supported cross-functional projects, including overhauling founder overview dashboards and communications.</li>
                </ul>
              </div>

              {/* Credit Suisse */}
              <div className="border-l-2 border-foreground/20 pl-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">Credit Suisse</span>
                  <span className="text-[0.75rem] text-foreground/40">Jul. 2022 - Jul. 2023</span>
                </div>
                <h3 className="text-[1.2rem] font-medium text-foreground mb-4">Investment Banking Analyst - Primaries & Secondaries</h3>
                <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  <li>• Raised ~$5.5B in private equity and private debt capital for top quartile private market investors.</li>
                  <li>• Structured a +$100M debt fund into a marketable instrument and produced LP market maps, benchmarking, teasers, and model updates.</li>
                </ul>
              </div>

              {/* UBS */}
              <div className="border-l-2 border-foreground/20 pl-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">UBS</span>
                  <span className="text-[0.75rem] text-foreground/40">Jun. 2021 - Jan. 2022</span>
                </div>
                <h3 className="text-[1.2rem] font-medium text-foreground mb-4">Fixed Income Trading Off-Cycle Intern</h3>
                <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  <li>• Supported a $30B AUM multi-sector team covering securitized products, rates, and investment grade/high yield credit.</li>
                  <li>• Analyzed structured hedging positions and flagged duration drift to inform rebalancing.</li>
                </ul>
              </div>

              {/* Scotiabank */}
              <div className="border-l-2 border-foreground/20 pl-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">Scotiabank</span>
                  <span className="text-[0.75rem] text-foreground/40">Mar. 2021 - Jun. 2021</span>
                </div>
                <h3 className="text-[1.2rem] font-medium text-foreground mb-4">Equity Research Spring Analyst - Financial Institutions</h3>
                <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  <li>• Built exhibits, models, and research to initiate coverage on LatAm fintechs PagSeguro, Stone, and Cielo and briefed trading teams.</li>
                </ul>
              </div>

              {/* GRI / MIT Lincoln Labs */}
              <div className="border-l-2 border-foreground/20 pl-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 text-[0.7rem] tracking-wide border border-foreground/20 text-foreground/60">GRI / MIT Lincoln Labs</span>
                  <span className="text-[0.75rem] text-foreground/40">May 2020 - Sep. 2020</span>
                </div>
                <h3 className="text-[1.2rem] font-medium text-foreground mb-4">Researcher</h3>
                <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  <li>• Interviewed small business owners, educators, and public officials for FEMA to assess early COVID-19 economic impacts and remedies.</li>
                </ul>
              </div>
            </div>
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
            <div className="grid grid-cols-2 gap-8">
              <div className="border border-foreground/10 p-8">
                <h3 className="text-[1.1rem] font-medium text-foreground mb-3">Northeastern University - D'Amore-McKim School of Business</h3>
                <p className="text-[0.85rem] text-foreground/50 mb-4">B.S.B.A. - Finance & Financial Technologies - Sep. 2018 - Apr. 2022</p>
                <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  <li>• 3.76 GPA - Dean's List - Magna Cum Laude - Honors Program</li>
                  <li>• TAMID (VP / Director of the Investment Fund), independent research projects in finance and international business.</li>
                </ul>
              </div>

              <div className="border border-foreground/10 p-8">
                <h3 className="text-[1.1rem] font-medium text-foreground mb-3">London School of Economics</h3>
                <p className="text-[0.85rem] text-foreground/50 mb-4">Certificate in Machine Learning for Practical Applications - May - Aug. 2020</p>
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 bg-background" />
        </div>

        {/* Skills Section */}
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
                Skills & interests
              </div>
              <div className="h-px flex-1 bg-foreground/10" />
            </div>

            <p className="text-[1.1rem] leading-relaxed text-foreground/70 mb-16 max-w-3xl">
              Tools, certifications, and curiosities.
            </p>

            {/* Skills cards */}
            <div className="grid grid-cols-2 gap-8">
              <div className="border border-foreground/10 p-8">
                <h3 className="text-[0.8rem] tracking-[0.2em] uppercase text-foreground/50 mb-4">Skills</h3>
                <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  <li>• SQL - R - Bloomberg - CapIQ - Figma - HubSpot - Zapier - Make</li>
                  <li>• Dashboard design, automation orchestration, CRM hygiene, community programming</li>
                </ul>
              </div>

              <div className="border border-foreground/10 p-8">
                <h3 className="text-[0.8rem] tracking-[0.2em] uppercase text-foreground/50 mb-4">Interests & credentials</h3>
                <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  <li>• Gaming, trivia (LL), and indie rock/folk playlists</li>
                  <li>• LGBTQ+ rights advocacy, inclusive community building, and cooking</li>
                  <li>• Series 7, 63, and Securities Industries Essentials (SIE)</li>
                </ul>
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
                href="mailto:alex@alexczako.com"
                className="group inline-block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ff5722] blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative border border-[#ff5722] px-8 py-4 text-[1.2rem] tracking-wide text-[#ff5722] hover:bg-[#ff5722] hover:text-background transition-all duration-300">
                    alex@alexczako.com
                  </div>
                </div>
              </a>

              <div className="flex gap-8">
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
