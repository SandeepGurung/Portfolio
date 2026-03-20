import './index.css'
import { Experience } from './components/Experience'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'

document.querySelector('#app').innerHTML = `
  <nav class="glass-nav">
    <div class="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
      <div class="text-xl font-bold tracking-tighter text-on-background font-headline">Sandeep Gurung</div>
      <div class="hidden md:flex items-center gap-8">
        <a class="nav-link" href="#experience">Experience</a>
        <a class="nav-link" href="#certifications">Certifications</a>
        <a class="nav-link" href="#contact">Contact</a>
      </div>
      
      <div class="flex items-center gap-4">
        <a href="/Sandeep Gurung CV.docx" download class="hidden md:inline-block bg-primary-container text-on-primary px-5 py-2 rounded font-medium hover:opacity-80 transition-all duration-300 scale-95 active:scale-90">
          Download CV
        </a>
        <button id="mobile-menu-btn" class="md:hidden text-on-background p-2">
          <span class="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-surface z-[100] translate-x-full transition-transform duration-500 ease-in-out md:hidden">
      <div class="flex flex-col h-full">
        <div class="flex justify-between items-center px-8 py-4 border-b border-outline-variant/10">
          <div class="text-xl font-bold tracking-tighter text-on-background font-headline">Sandeep Gurung</div>
          <button id="close-menu-btn" class="text-on-background p-2">
            <span class="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
        <div class="flex flex-col gap-6 p-12">
          <a class="mobile-nav-link text-3xl font-headline font-bold" href="#experience">Experience</a>
          <a class="mobile-nav-link text-3xl font-headline font-bold" href="#certifications">Certifications</a>
          <a class="mobile-nav-link text-3xl font-headline font-bold" href="#contact">Contact</a>
          <div class="pt-8">
            <a href="/Sandeep Gurung CV.docx" download class="btn-primary w-full justify-center">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <main class="relative min-h-screen flex flex-col justify-center overflow-hidden">
    <div class="absolute inset-0 blueprint-grid pointer-events-none"></div>
    
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-8 w-full py-24 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Content -->
        <div class="lg:col-span-7 space-y-8 animate-fade-in">
          <div class="space-y-4">
            <div class="flex items-center gap-2 text-secondary font-label font-medium tracking-widest text-xs">
              <span class="w-8 h-[1px] bg-secondary-container"></span>
              PORTFOLIO
            </div>
            <h1 class="font-headline text-5xl md:text-7xl font-bold text-on-background tracking-tighter leading-[1.05]">
              Full-Stack Web Developer <span class="text-primary italic">Sandeep Gurung</span>
            </h1>
          </div>
          
          <div class="flex flex-col md:flex-row gap-8 md:items-start">
            <p class="text-on-surface-variant text-lg leading-relaxed max-w-md">
              Dynamic Full-Stack Developer and Master's degree student with 3+ years of professional experience in custom WordPress and React development.
            </p>
            <div class="hidden md:block w-[1px] h-20 bg-outline-variant/30"></div>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-xl">code</span>
                <span class="text-sm font-label text-secondary uppercase tracking-wider">React / WordPress / PHP</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-xl">speed</span>
                <span class="text-sm font-label text-secondary uppercase tracking-wider">Performance Ninja</span>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 pt-4">
            <a href="#projects" class="btn-primary">
              View My Work
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a href="#contact" class="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <!-- Right Content -->
        <div class="lg:col-span-5 relative animate-fade-in" style="animation-delay: 0.2s;">
          <div class="aspect-square rounded-xl bg-surface-container-low relative p-8 flex items-center justify-center overflow-hidden border border-outline-variant/10">
            <div class="absolute inset-0 opacity-5 border-[10px] border-primary m-12 rotate-12"></div>
            <div class="absolute inset-0 opacity-5 border-[1px] border-secondary m-4 -rotate-6"></div>
            
            <div class="z-10 bg-white p-8 shadow-2xl shadow-indigo-900/10 rounded-lg max-w-sm w-full space-y-6 transform hover:scale-105 transition-transform duration-500 animate-float">
              <div class="flex justify-between items-start">
                <div class="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded text-primary">
                  <span class="material-symbols-outlined font-fill-1">cloud_done</span>
                </div>
                <span class="font-label text-[10px] text-outline px-2 py-1 border border-outline-variant/30 rounded uppercase tracking-tighter text-secondary">Status: Active</span>
              </div>
              <div class="space-y-2">
                <h3 class="font-headline font-bold text-lg text-on-background">System Architecture</h3>
                <p class="text-xs text-on-surface-variant">Converting technical requirements into scalable digital systems with architectural precision.</p>
              </div>
              <div class="space-y-4 pt-4">
                <div class="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div class="bg-primary h-full transition-all duration-1000 ease-out" style="width: 0;" id="progress-bar"></div>
                </div>
                <div class="flex justify-between text-[10px] font-label font-bold text-secondary uppercase tracking-widest">
                  <span>Cloud Deployment</span>
                  <span>75% Complete</span>
                </div>
              </div>
            </div>

            <div class="absolute bottom-12 right-4 z-20 bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-xl border border-outline-variant/20 flex items-center gap-4 animate-float" style="animation-delay: 1s;">
              <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span class="text-xs font-bold font-headline text-on-background">Serverless Specialist</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tech Stack Marquee -->
    <div class="py-12 bg-surface-container-low w-full overflow-hidden border-y border-outline-variant/10">
      <div class="max-w-7xl mx-auto px-8 mb-8">
        <span class="font-label text-[10px] text-secondary/60 uppercase tracking-[0.3em] font-bold">Technology Stack</span>
      </div>
      <div class="marquee-container">
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">code</span> REACT</span>
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">javascript</span> JAVASCRIPT</span>
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">terminal</span> PHP</span>
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">layers</span> WORDPRESS</span>
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">brush</span> FIGMA</span>
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">cached</span> SEO</span>
        <!-- Duplicated for seamless loop -->
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">code</span> REACT</span>
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">javascript</span> JAVASCRIPT</span>
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">terminal</span> PHP</span>
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">layers</span> WORDPRESS</span>
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">brush</span> FIGMA</span>
        <span class="text-2xl font-headline font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">cached</span> SEO</span>
      </div>
    </div>

    ${Experience()}
    ${Certifications()}
    ${Contact()}

  </main>

  <footer class="w-full py-12 px-8 bg-surface-container-low border-t border-outline-variant/10 mt-24">
    <div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full gap-4">
       <div class="text-lg font-bold text-on-background font-headline">Sandeep Gurung</div>
       <div class="text-sm text-on-surface-variant italic">© 2024 Sandeep Gurung. Built with Precision.</div>
       <div class="flex gap-6">
         <a class="text-secondary hover:text-primary transition-colors text-sm font-bold" href="http://www.linkedin.com/in/issandeepgurung">LinkedIn</a>
         <a class="text-secondary hover:text-primary transition-colors text-sm font-bold" href="https://github.com/SandeepGurung">GitHub</a>
       </div>
    </div>
  </footer>
`

// Animate progress bar on load
setTimeout(() => {
  const bar = document.querySelector('#progress-bar');
  if (bar) bar.style.width = '75%';
}, 500);

// Mobile Menu Logic
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

const toggleMenu = (open) => {
  mobileMenu.style.transform = open ? 'translateX(0)' : 'translateX(100%)';
  document.body.style.overflow = open ? 'hidden' : '';
};

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
if (closeMenuBtn) closeMenuBtn.addEventListener('click', () => toggleMenu(false));

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu(false);
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for sticky nav
        behavior: 'smooth'
      });
    }
  });
});

// Contact Form Submission Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Feedback: Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span>Sending...</span>
      <span class="material-symbols-outlined animate-spin">sync</span>
    `;

    const formData = new FormData(contactForm);
    
    try {
      const response = await fetch('https://formspree.io/f/sandeepgrg444@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        contactForm.innerHTML = `
          <div class="text-center py-12 space-y-4 animate-fade-in">
            <div class="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 class="text-2xl font-headline font-bold text-on-surface">Transmission Successful</h3>
            <p class="text-secondary">Thank you for reaching out, Sandeep. Your message has been received.</p>
            <button onclick="location.reload()" class="btn-primary mt-8 inline-flex items-center gap-2">
              <span class="material-symbols-outlined">refresh</span>
              <span>Send Another Message</span>
            </button>
          </div>
        `;
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      alert('Oops! There was a problem sending your message. Please try again.');
    }
  });
}
