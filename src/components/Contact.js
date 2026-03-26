export const Contact = () => `
  <section class="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24" id="skills">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 md:mb-32">
      <div class="lg:col-span-4">
        <h2 class="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-primary mb-6">Technical Architecture</h2>
        <p class="text-base md:text-lg text-secondary leading-relaxed mb-8">
          A curated stack of technologies employed to build resilient, scalable digital structures.
        </p>
      </div>
      <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 md:p-8 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-6">
            <span class="material-symbols-outlined text-secondary">code</span>
            <h3 class="font-headline font-bold text-lg md:text-xl tracking-tight">Languages</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            ${['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3/Tailwind', 'Figma'].map(skill => `
              <span class="px-2 md:px-3 py-1 bg-surface-container text-secondary text-xs md:text-sm font-label rounded border border-outline-variant/10">${skill}</span>
            `).join('')}
          </div>
        </div>
        <div class="bg-white p-6 md:p-8 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-6">
            <span class="material-symbols-outlined text-secondary">layers</span>
            <h3 class="font-headline font-bold text-lg md:text-xl tracking-tight">Frameworks</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            ${['WordPress (Custom Theme/Plugin)', 'PHP', 'REST APIs', 'Firebase'].map(skill => `
              <span class="px-2 md:px-3 py-1 bg-surface-container text-secondary text-xs md:text-sm font-label rounded border border-outline-variant/10">${skill}</span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="bg-surface-container-low rounded-2xl p-8 md:p-12 lg:p-20 relative overflow-hidden" id="contact">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 relative z-10">
        <div>
          <h2 class="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-on-surface mb-6 md:mb-8">Initiate Collaboration</h2>
          <p class="text-base md:text-lg text-secondary mb-8 md:mb-12 max-w-md italic">
            "Precision in syntax, clarity in architecture."
          </p>
          <div class="space-y-6 md:space-y-8">
            <div class="flex items-center gap-4 md:gap-6">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-primary">
                <span class="material-symbols-outlined">alternate_email</span>
              </div>
              <div class="overflow-hidden">
                <p class="text-[10px] md:text-sm font-label text-outline uppercase tracking-widest">Digital Coordinates</p>
                <p class="text-base md:text-lg font-medium truncate">sandeepgrg444@gmail.com</p>
                <p class="text-sm md:text-base text-secondary">+61-452639259</p>
                <p class="text-sm md:text-base text-secondary">Sydney, Granville NSW</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-4 md:gap-6 mt-6 md:mt-8">
              <a href="http://www.linkedin.com/in/issandeepgurung" class="text-primary hover:underline flex items-center gap-2 text-sm md:text-base font-label font-bold">
                <span class="material-symbols-outlined text-xl">link</span>
                LinkedIn
              </a>
              <a href="https://github.com/SandeepGurung" class="text-primary hover:underline flex items-center gap-2 text-sm md:text-base font-label font-bold">
                <span class="material-symbols-outlined text-xl">code</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white p-6 md:p-8 lg:p-12 rounded-xl shadow-sm border border-outline-variant/10">
          <form id="contact-form" class="space-y-4">
            <div class="space-y-1">
              <label class="text-[10px] md:text-xs font-label font-bold text-outline uppercase tracking-widest">Full Name</label>
              <input name="name" required class="w-full bg-surface-container-low border-none rounded py-2 md:py-3 px-4 focus:ring-1 focus:ring-primary h-10 md:h-12 text-sm md:text-base text-on-surface" placeholder="E.g. Sandeep Gurung"/>
            </div>
            <div class="space-y-1">
              <label class="text-[10px] md:text-xs font-label font-bold text-outline uppercase tracking-widest">Email Address</label>
              <input type="email" name="email" required class="w-full bg-surface-container-low border-none rounded py-2 md:py-3 px-4 focus:ring-1 focus:ring-primary h-10 md:h-12 text-sm md:text-base text-on-surface" placeholder="your@email.com"/>
            </div>
            <div class="space-y-1">
              <label class="text-[10px] md:text-xs font-label font-bold text-outline uppercase tracking-widest">Subject</label>
              <input name="subject" required class="w-full bg-surface-container-low border-none rounded py-2 md:py-3 px-4 focus:ring-1 focus:ring-primary h-10 md:h-12 text-sm md:text-base text-on-surface" placeholder="Project Inquiry"/>
            </div>
            <div class="space-y-1">
              <label class="text-[10px] md:text-xs font-label font-bold text-outline uppercase tracking-widest">Message</label>
              <textarea name="message" required class="w-full bg-surface-container-low border-none rounded py-2 md:py-3 px-4 focus:ring-1 focus:ring-primary text-sm md:text-base text-on-surface" rows="3" placeholder="Describe the architectural challenge..."></textarea>
            </div>
            <button type="submit" class="w-full btn-primary justify-center py-3 md:py-4 mt-2 text-sm md:text-base">Send Transmission</button>
          </form>
        </div>
      </div>
    </div>
  </section>
`;
