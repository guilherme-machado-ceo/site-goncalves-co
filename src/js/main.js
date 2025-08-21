// Sistema de idiomas
const translations = {
  'pt': {
    'nav_home': 'Início',
    'nav_about': 'Quem Somos',
    'nav_services': 'Nossos Serviços',
    'nav_contact': 'Entre em Contato',
    'hero_title': 'Gonçalves & Co. - Comércio, Gestão e Logística',
    'hero_subtitle': 'Old Trade and Old Money',
    'hero_tagline': '(O Melhor dos Dois Mundos)',
    'hero_location': 'São Paulo - SP - Brasil',
    'about_title': 'Quem Somos',
    'about_content': 'Somos uma empresa tradicional com mais de 50 anos de experiência no mercado brasileiro, especializada em comércio, gestão e logística. Nossa missão é manter os valores tradicionais do comércio, combinados com as melhores práticas modernas de gestão.',
    'services_title': 'Nossos Serviços',
    'service_1_title': 'Comércio Internacional',
    'service_1_desc': 'Importação e exportação de produtos com expertise em mercados emergentes.',
    'service_2_title': 'Gestão Empresarial',
    'service_2_desc': 'Consultoria estratégica para otimização de processos e aumento de eficiência.',
    'service_3_title': 'Logística Integrada',
    'service_3_desc': 'Soluções completas de transporte, armazenagem e distribuição.',
    'contact_title': 'Entre em Contato',
    'contact_address': 'São Paulo - SP - Brasil',
    'contact_phone': '(11) 994555772',
    'contact_email': 'goncalvesecodeepbusinesshub@gmail.com',
    'footer_copyright': '© 2024 - Gonçalves & Co. Todos os Direitos Reservados.'
  },
  'en': {
    'nav_home': 'Home',
    'nav_about': 'About Us',
    'nav_services': 'Our Services',
    'nav_contact': 'Contact',
    'hero_title': 'Gonçalves & Co. - Commerce, Management & Logistics',
    'hero_subtitle': 'Old Trade and Old Money',
    'hero_tagline': '(The Best of Both Worlds)',
    'hero_location': 'São Paulo - SP - Brazil',
    'about_title': 'About Us',
    'about_content': 'We are a traditional company with over 50 years of experience in the Brazilian market, specialized in commerce, management and logistics. Our mission is to maintain the traditional values of commerce, combined with the best modern management practices.',
    'services_title': 'Our Services',
    'service_1_title': 'International Trade',
    'service_1_desc': 'Import and export of products with expertise in emerging markets.',
    'service_2_title': 'Business Management',
    'service_2_desc': 'Strategic consulting for process optimization and efficiency improvement.',
    'service_3_title': 'Integrated Logistics',
    'service_3_desc': 'Complete solutions for transportation, warehousing and distribution.',
    'contact_title': 'Contact Us',
    'contact_address': 'São Paulo - SP - Brazil',
    'contact_phone': '(11) 994555772',
    'contact_email': 'goncalvesecodeepbusinesshub@gmail.com',
    'footer_copyright': '© 2024 - Gonçalves & Co. All Rights Reserved.'
  },
  'es': {
    'nav_home': 'Inicio',
    'nav_about': 'Quienes Somos',
    'nav_services': 'Nuestros Servicios',
    'nav_contact': 'Contáctenos',
    'hero_title': 'Gonçalves & Co. - Comercio, Gestión y Logística',
    'hero_subtitle': 'Old Trade and Old Money',
    'hero_tagline': '(Lo Mejor de Ambos Mundos)',
    'hero_location': 'São Paulo - SP - Brasil',
    'about_title': 'Quienes Somos',
    'about_content': 'Somos una empresa tradicional con más de 50 años de experiencia en el mercado brasileño, especializada en comercio, gestión y logística. Nuestra misión es mantener los valores tradicionales del comercio, combinados con las mejores prácticas modernas de gestión.',
    'services_title': 'Nuestros Servicios',
    'service_1_title': 'Comercio Internacional',
    'service_1_desc': 'Importación y exportación de productos con experiencia en mercados emergentes.',
    'service_2_title': 'Gestión Empresarial',
    'service_2_desc': 'Consultoría estratégica para optimización de procesos y mejora de eficiencia.',
    'service_3_title': 'Logística Integrada',
    'service_3_desc': 'Soluciones completas de transporte, almacenamiento y distribución.',
    'contact_title': 'Contáctenos',
    'contact_address': 'São Paulo - SP - Brasil',
    'contact_phone': '(11) 994555772',
    'contact_email': 'goncalvesecodeepbusinesshub@gmail.com',
    'footer_copyright': '© 2024 - Gonçalves & Co. Todos los Derechos Reservados.'
  }
};

// Variável global para idioma atual
let currentLanguage = localStorage.getItem('language') || 'pt';

// Função para trocar idioma
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updateContent();
  updateLanguageButtons();
  
  // Atualizar meta tag do idioma
  document.documentElement.lang = lang === 'pt' ? 'pt-br' : lang;
}

// Função para atualizar conteúdo
function updateContent() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}

// Função para atualizar botões de idioma
function updateLanguageButtons() {
  const buttons = document.querySelectorAll('[data-lang]');
  buttons.forEach(button => {
    const lang = button.getAttribute('data-lang');
    button.classList.toggle('active', lang === currentLanguage);
  });
}

// Classe para efeitos LED modernos
class ModernEffects {
  static init() {
    this.addScrollAnimations();
    this.addHoverEffects();
    this.addParticleBackground();
    this.addCyberEffects();
    this.addSmoothScrolling();
  }

  // Animações de scroll
  static addScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Adicionar animação específica baseada no elemento
          if (entry.target.classList.contains('service-card')) {
            entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
          }
        }
      });
    }, observerOptions);

    // Observar elementos para animação
    const elementsToAnimate = document.querySelectorAll('.service-card, .contact-item, .content-section h2, .content-section p');
    elementsToAnimate.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  // Efeitos de hover modernos
  static addHoverEffects() {
    // Efeito de cursor personalizado
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // CSS para cursor personalizado
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
      .custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #ff006e, #8338ec);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        opacity: 0;
      }
      .custom-cursor.active {
        opacity: 1;
        transform: scale(1.5);
      }
    `;
    document.head.appendChild(cursorStyle);

    // Seguir movimento do mouse
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
      cursor.classList.add('active');
    });

    // Efeitos especiais em elementos interativos
    const interactiveElements = document.querySelectorAll('.service-card, .contact-item, .nav-link, .btn');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.background = 'radial-gradient(circle, #00d4ff, #ff0080)';
      });
      
      element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = 'radial-gradient(circle, #ff006e, #8338ec)';
      });
    });
  }

  // Sistema de partículas de fundo
  static addParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 0.3;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 60 + 280}, 100%, 70%)`,
        opacity: Math.random() * 0.5 + 0.2
      };
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(createParticle());
      }
    }

    function updateParticles() {
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        
        // Conectar partículas próximas
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
    }

    function animate() {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
  }

  // Efeitos cyber modernos
  static addCyberEffects() {
    // Efeito de glitch no título principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      setInterval(() => {
        if (Math.random() < 0.1) {
          heroTitle.style.textShadow = `
            ${Math.random() * 10 - 5}px 0 #ff006e,
            ${Math.random() * 10 - 5}px 0 #00d4ff
          `;
          setTimeout(() => {
            heroTitle.style.textShadow = '';
          }, 100);
        }
      }, 2000);
    }

    // Efeito de scan line
    const scanLine = document.createElement('div');
    scanLine.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #00d4ff, transparent);
      z-index: 1000;
      pointer-events: none;
      animation: scanLine 3s linear infinite;
    `;
    
    const scanLineStyle = document.createElement('style');
    scanLineStyle.textContent = `
      @keyframes scanLine {
        0% { top: 0; opacity: 1; }
        100% { top: 100vh; opacity: 0; }
      }
    `;
    document.head.appendChild(scanLineStyle);
    document.body.appendChild(scanLine);
  }

  // Scroll suave
  static addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Classe para gerenciar performance
class PerformanceManager {
  static init() {
    this.optimizeImages();
    this.lazyLoadContent();
    this.preloadCriticalResources();
  }

  static optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'lazy';
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
    });
  }

  static lazyLoadContent() {
    const lazyElements = document.querySelectorAll('.service-card, .contact-item');
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          lazyObserver.unobserve(entry.target);
        }
      });
    });

    lazyElements.forEach(el => lazyObserver.observe(el));
  }

  static preloadCriticalResources() {
    const criticalImages = [
      'dist/assets/AdobeStock_39708222_Preview.jpeg',
      'dist/assets/fundo-de-textura-de-estilo-grunge-detalhado_1048-6236.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar idioma
  updateContent();
  updateLanguageButtons();
  
  // Inicializar efeitos modernos
  ModernEffects.init();
  
  // Inicializar otimizações de performance
  PerformanceManager.init();
  
  // Navbar transparente no scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
      navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
  });
  
  // Animação de entrada da página
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
  
  // Easter egg - Konami Code
  let konamiCode = [];
  const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  
  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konami.length) {
      konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konami.join(',')) {
      document.body.style.filter = 'hue-rotate(180deg)';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 3000);
    }
  });
});

// Exportar funções globais
window.GoncalvesCo = {
  changeLanguage,
  currentLanguage,
  translations,
  ModernEffects,
  PerformanceManager
};

