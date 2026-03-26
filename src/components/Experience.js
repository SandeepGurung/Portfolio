export const Experience = () => `
  <section class="mb-24 px-4 md:px-8 max-w-7xl mx-auto pt-24" id="experience">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-12 md:mb-24 transition-opacity">
      <div class="md:col-span-12 lg:col-span-4">
        <h1 class="text-4xl md:text-6xl lg:text-8xl font-headline font-bold tracking-tighter leading-none text-primary break-words">
          Academic <br/> Journey.
        </h1>
      </div>
      <div class="md:col-span-12 lg:col-span-8 max-w-md pb-4">
        <p class="text-secondary text-sm md:text-base lg:text-lg leading-relaxed">
          A systematic chronicle of technical mastery, from foundational principles to advanced architectural design in modern information systems.
        </p>
      </div>
    </div>

    <!-- Timeline Section -->
    <div class="space-y-16 md:space-y-32">
      <!-- Education Focus -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
        <div class="md:col-span-4 md:sticky md:top-40 h-fit">
          <span class="font-label text-xs uppercase tracking-widest text-outline mb-2 md:mb-4 block">Current Pursuit</span>
          <h2 class="text-2xl md:text-3xl font-headline font-bold text-on-background">Education</h2>
        </div>
        <div class="md:col-span-8 space-y-8 md:space-y-16 border-l-0 md:border-l border-outline-variant/30 md:pl-12">
          <!-- Master's Entry -->
          <div class="group relative">
            <div class="absolute -left-[3.25rem] top-1 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-primary ring-8 ring-surface"></div>
            <div class="bg-white p-5 md:p-8 rounded-xl shadow-sm border border-outline-variant/10 group-hover:shadow-md transition-shadow">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 md:mb-6 gap-3 md:gap-4">
                <div>
                  <h3 class="text-lg md:text-2xl font-headline font-bold text-on-surface mb-1">Master of Information Technology</h3>
                  <p class="text-primary font-medium text-sm md:text-base">King’s Own Institute (KOI)</p>
                </div>
                <div class="bg-secondary-container px-2 md:px-3 py-1 rounded text-secondary font-label text-xs md:text-sm font-semibold w-fit">
                  Aug 2024 — June 2026
                </div>
              </div>
              <ul class="space-y-3 md:space-y-4 text-on-surface-variant">
                <li class="flex gap-2 md:gap-3">
                  <span class="material-symbols-outlined text-secondary text-base mt-0.5 md:mt-1 md:text-sm">school</span>
                  <span class="text-xs md:text-base">Advanced study in software engineering and information systems architecture.</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bachelor's Entry -->
          <div class="group relative pt-4 md:pt-16">
            <div class="absolute -left-[3.25rem] top-17 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-outline-variant/30 ring-8 ring-surface"></div>
            <div class="bg-white p-5 md:p-8 rounded-xl shadow-sm border border-outline-variant/10 group-hover:shadow-md transition-shadow">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h3 class="text-lg md:text-2xl font-headline font-bold text-on-surface mb-1">Bachelor of Information Technology</h3>
                  <p class="text-primary font-medium text-sm md:text-base">Lincoln University</p>
                </div>
                <div class="bg-surface-container px-2 md:px-3 py-1 rounded text-secondary font-label text-xs md:text-sm font-semibold w-fit">
                  July 2017 — July 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Professional Experience Focus -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
        <div class="md:col-span-4 md:sticky md:top-40 h-fit">
          <span class="font-label text-xs uppercase tracking-widest text-outline mb-2 md:mb-4 block">Industry Record</span>
          <h2 class="text-2xl md:text-3xl font-headline font-bold text-on-background">Experience</h2>
        </div>
        <div class="md:col-span-8 space-y-8 md:space-y-16 border-l-0 md:border-l border-outline-variant/30 md:pl-12">
          <!-- Internship Entry -->
          <div class="group relative">
            <div class="absolute -left-[3.25rem] top-1 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-primary ring-8 ring-surface"></div>
            <div class="bg-white p-5 md:p-8 rounded-xl shadow-sm border border-outline-variant/10 group-hover:shadow-md transition-shadow">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 md:mb-6 gap-3 md:gap-4">
                <div>
                  <h3 class="text-lg md:text-2xl font-headline font-bold text-on-surface mb-1">Onsite Wordpress Developer</h3>
                  <p class="text-primary font-medium text-sm md:text-base">Jasper IT Solutions</p>
                </div>
                <div class="bg-primary text-on-primary px-2 md:px-3 py-1 rounded font-label text-xs md:text-sm font-semibold w-fit whitespace-nowrap">
                  June 2021 — July 2024
                </div>
              </div>
              <ul class="space-y-3 md:space-y-4 text-on-surface-variant">
                <li class="flex gap-2 md:gap-3">
                  <span class="material-symbols-outlined text-primary text-base mt-0.5 md:mt-1 md:text-sm">check_circle</span>
                  <span class="text-xs md:text-base">Engineered 60+ custom WordPress websites using PHP and Elementor.</span>
                </li>
                <li class="flex gap-2 md:gap-3">
                  <span class="material-symbols-outlined text-primary text-base mt-0.5 md:mt-1 md:text-sm">check_circle</span>
                  <span class="text-xs md:text-base">Optimized site performance by 60% through advanced caching and compression.</span>
                </li>
                <li class="flex gap-2 md:gap-3">
                  <span class="material-symbols-outlined text-primary text-base mt-0.5 md:mt-1 md:text-sm">check_circle</span>
                  <span class="text-xs md:text-base">Architected responsive UI/UX from Figma wireframes to final deployment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

