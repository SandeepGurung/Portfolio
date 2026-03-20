export const Certifications = () => `
  <section class="relative bg-surface-container-low py-24 overflow-hidden" id="certifications">
    <div class="absolute inset-0 blueprint-grid pointer-events-none"></div>
    <div class="relative max-w-7xl mx-auto px-8">
      <div class="mb-16 border-l-4 border-primary pl-6">
        <h2 class="text-3xl font-headline font-bold tracking-tight text-on-surface">Technical Credentials</h2>
        <p class="text-secondary font-label">Industry-standard validations of cloud and infrastructure expertise.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <!-- AWS Card -->
        <div class="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/20 hover:shadow-md transition-all group">
          <div class="mb-8 flex justify-between items-start">
            <div class="w-16 h-16 bg-surface-container flex items-center justify-center rounded">
              <span class="material-symbols-outlined text-4xl text-primary">cloud</span>
            </div>
            <span class="text-xs font-label text-outline bg-surface px-2 py-1 rounded">ID: 882194</span>
          </div>
          <h3 class="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">AWS Certified Cloud Practitioner</h3>
          <p class="text-sm text-secondary mb-6 font-body">Amazon Web Services (AWS)</p>
          <div class="flex items-center justify-between pt-6 border-t border-outline-variant/10">
            <span class="text-xs font-label text-outline uppercase tracking-wider">Issued Nov 2023</span>
            <a class="text-primary font-label text-sm font-bold flex items-center gap-1 hover:underline" href="#">
              Verify <span class="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>

        <!-- Azure Card -->
        <div class="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/20 hover:shadow-md transition-all group">
          <div class="mb-8 flex justify-between items-start">
            <div class="w-16 h-16 bg-surface-container flex items-center justify-center rounded">
              <span class="material-symbols-outlined text-4xl text-primary">database</span>
            </div>
            <span class="text-xs font-label text-outline bg-surface px-2 py-1 rounded">ID: AZ-900</span>
          </div>
          <h3 class="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">Azure Fundamentals</h3>
          <p class="text-sm text-secondary mb-6 font-body">Microsoft</p>
          <div class="flex items-center justify-between pt-6 border-t border-outline-variant/10">
            <span class="text-xs font-label text-outline uppercase tracking-wider">Issued Jan 2024</span>
            <a class="text-primary font-label text-sm font-bold flex items-center gap-1 hover:underline" href="#">
              Verify <span class="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>

        <!-- GCP Card -->
        <div class="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/20 hover:shadow-md transition-all group">
          <div class="mb-8 flex justify-between items-start">
            <div class="w-16 h-16 bg-surface-container flex items-center justify-center rounded">
              <span class="material-symbols-outlined text-4xl text-primary">terminal</span>
            </div>
            <span class="text-xs font-label text-outline bg-surface px-2 py-1 rounded">ID: GCP-DL</span>
          </div>
          <h3 class="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">Google Cloud Digital Leader</h3>
          <p class="text-sm text-secondary mb-6 font-body">Google Cloud</p>
          <div class="flex items-center justify-between pt-6 border-t border-outline-variant/10">
            <span class="text-xs font-label text-outline uppercase tracking-wider">Issued Feb 2024</span>
            <a class="text-primary font-label text-sm font-bold flex items-center gap-1 hover:underline" href="#">
              Verify <span class="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 border-t border-outline-variant/10">
        <div class="relative pl-12 animate-fade-in">
          <span class="material-symbols-outlined absolute left-0 top-0 text-primary/10 text-6xl select-none">format_quote</span>
          <blockquote class="text-xl font-body leading-relaxed text-on-surface mb-8 italic">
            "Sandeep's ability to deliver high-quality WordPress websites on such tight schedules is remarkable. His punctuality and attention to detail are top-tier."
          </blockquote>
          <cite class="not-italic font-headline font-bold text-on-surface block">Saurav Lamichhane</cite>
          <span class="text-sm text-secondary font-label">Project Manager, Digital Hero</span>
        </div>
        <div class="relative pl-12 animate-fade-in" style="animation-delay: 0.2s;">
          <span class="material-symbols-outlined absolute left-0 top-0 text-primary/10 text-6xl select-none">format_quote</span>
          <blockquote class="text-xl font-body leading-relaxed text-on-surface mb-8 italic">
            "We were impressed by the speed and efficiency of his WordPress development. He always meets deadlines without compromising on the quality of the architecture."
          </blockquote>
          <cite class="not-italic font-headline font-bold text-on-surface block">Manoj KC</cite>
          <span class="text-sm text-secondary font-label">Web Solutions</span>
        </div>
      </div>
    </div>
  </section>
`;
