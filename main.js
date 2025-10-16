const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

// Toggle menu open/close
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('open');
  });
});

// Index Hero Section - SVG Animation

  // const svg = document.getElementById('interactive-svg');
  // document.addEventListener('mousemove', (e) => {
  //   const { innerWidth, innerHeight } = window;
  //   const x = (e.clientX / innerWidth - 2.5) * 35; 
  //   const y = (e.clientY / innerHeight - 2.5) * 35;
  //   svg.style.transform = `translate(${x}px, ${y}px)`;
  // });



    // Testiomonial
    const testimonials = document.querySelectorAll('.testimonial');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function showTestimonial(i) {
      testimonials.forEach(t => t.classList.remove('active'));
      testimonials[i].classList.add('active');
    }

    prev.addEventListener('click', () => {
      index = (index - 1 + testimonials.length) % testimonials.length;
      showTestimonial(index);
    });

    next.addEventListener('click', () => {
      index = (index + 1) % testimonials.length;
      showTestimonial(index);
    });

    // Auto-play every 6 seconds
    setInterval(() => {
      index = (index + 1) % testimonials.length;
      showTestimonial(index);
    }, 6000);

    // about us

    // Simple scroll-trigger animation
    const aboutSection = document.querySelector('.about');
    window.addEventListener('scroll', () => {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 150) {
        aboutSection.classList.add('visible');
      }
    });
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');

    // Show or hide button on scroll
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // Services Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
      });
    });


    const chatButton = document.getElementById('chatButton');
const chatbox = document.getElementById('chatbox');
const closeChat = document.getElementById('closeChat');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatMessages = document.getElementById('chatMessages');

// Toggle chat box open
chatButton.addEventListener('click', () => {
  chatbox.style.display = 'flex';
});

// Close chat box
closeChat.addEventListener('click', () => {
  chatbox.style.display = 'none';
});

// Send message
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;
  appendMessage('user', msg);
  userInput.value = '';
  setTimeout(() => botReply(msg.toLowerCase()), 500);
}

function appendMessage(sender, text) {
  const div = document.createElement('div');
  div.className = sender;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(message) {
  let reply;
  if (message.includes('hi') || message.includes('hello')) {
    reply = "Hello! 👋 How can I help you today?";
  } else if (message.includes('service')) {
    reply = "We provide tax planning, GST, audit, company registration, and more.";
  } else if (message.includes('contact')) {
    reply = "📞 You can reach us at +91 98765 43210 or email info@rrrco.com.";
  } else if (message.includes('about')) {
    reply = "We are RRR & CO — experts in tax, audit, and compliance solutions for businesses and individuals.";
  } else if (message.includes('thank')) {
    reply = "You're welcome! 😊 Anything else you'd like to know?";
  } else {
    reply = "I can help with questions about services, contact info, or our company.";
  }
  appendMessage('bot', reply);
}



// Main About

