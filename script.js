// Video slideshow
const videos = document.querySelectorAll('.video-bg');
let currentVideo = 0;

function showVideo(index) {
  videos.forEach((video, i) => {
    video.classList.toggle('opacity-100', i === index);
    video.classList.toggle('opacity-0', i !== index);
  });
}

function nextVideo() {
  currentVideo = (currentVideo + 1) % videos.length;
  showVideo(currentVideo);
}

showVideo(currentVideo);
setInterval(nextVideo, 8000);

// Typewriter effect
const words = ["Agrawal Tech: Shaping the Future of Digital Innovation", "Web. Branding. Growth.", "Your Tech Partner in the Digital Era"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function type() {
  const currentWord = words[wordIndex];
  const visibleText = isDeleting ? currentWord.slice(0, charIndex--) : currentWord.slice(0, charIndex++);
  typewriter.textContent = visibleText;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    setTimeout(() => isDeleting = true, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Easter-Egg Arcade Logic
(() => {
  const eggs = [...document.querySelectorAll('.pixel-egg')];
  const eggBadge = document.getElementById('egg-badge');
  const eggCounter = document.getElementById('egg-counter');
  const totalEggs = eggs.length;
  let foundEggs = new Set();
  const discountCodes = [
    "AGRAWAL10",
    "TECH20",
    "INNOVATE15",
    "ELEVATE25",
    "DOMINATE30"
  ];

  // Sound setup
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  function playBeep() {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.15);
  }

  function showBadge(message) {
    eggBadge.textContent = message;
    eggBadge.classList.add('show');
    eggBadge.focus();
    setTimeout(() => {
      eggBadge.classList.remove('show');
    }, 3500);
  }

  function updateCounter() {
    eggCounter.textContent = `Eggs found: ${foundEggs.size} out of ${totalEggs}`;
    eggCounter.focus();
  }

  function onEggFound(index) {
    if (foundEggs.has(index)) return;
    foundEggs.add(index);
    playBeep();
    const code = discountCodes[Math.floor(Math.random() * discountCodes.length)];
    showBadge(`🎉 Egg #${index + 1} found! Use code: ${code}`);
    updateCounter();
  }

  eggs.forEach((egg, i) => {
    egg.addEventListener('click', () => onEggFound(i));
    egg.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onEggFound(i);
      }
    });
  });

  updateCounter();
})();

// Real-Time Project Pulse Logic
(() => {
  const pulseContainer = document.getElementById('pulse-container');
  const updates = [
    "Client site deployed 🚀",
    "New UI approved 🎨",
    "Backend API optimized ⚙️",
    "Bug fix pushed 🐞",
    "Marketing campaign launched 📢",
    "Accessibility audit passed ♿",
    "New feature: Dark Mode 🌙",
    "Database migration completed 🗄️",
    "Performance improved by 30% ⚡",
    "User feedback integrated 💬",
    "SEO audit successful 🔍",
    "Automated tests added ✅",
    "Design sprint started 🏃‍♂️",
    "Cloud infrastructure updated ☁️",
    "Customer onboarding improved 🤝"
  ];

  let currentIndex = 0;
  const maxVisible = 5;
  const visibleUpdates = [];

  function createUpdateElement(text) {
    const div = document.createElement('div');
    div.setAttribute('role', 'listitem');
    div.className = "bg-gradient-to-r from-red-700 via-red-900 to-black rounded-xl p-4 shadow-lg opacity-0 transform translate-y-6 transition-all duration-700 ease-in-out";
    div.textContent = text;
    return div;
  }

  function addUpdate() {
    const text = updates[currentIndex];
    const updateEl = createUpdateElement(text);
    pulseContainer.prepend(updateEl);
    visibleUpdates.unshift(updateEl);

    // Animate in
    requestAnimationFrame(() => {
      updateEl.style.opacity = "1";
      updateEl.style.transform = "translateY(0)";
    });

    if (visibleUpdates.length > maxVisible) {
      const last = visibleUpdates.pop();
      last.style.opacity = "0";
      last.style.transform = "translateY(20px)";
      setTimeout(() => {
        last.remove();
      }, 700);
    }

    currentIndex = (currentIndex + 1) % updates.length;
  }

  addUpdate();
  setInterval(addUpdate, 3500);
})();

// Digital Garden Logic
(() => {
  const gardenGrid = document.getElementById('garden-grid');
  const posts = [
    {
      title: "Designing for Accessibility",
      snippet: "Exploring WCAG guidelines and practical tips to make your web apps usable for everyone.",
      tags: ["#UX", "#Accessibility"],
      id: 1
    },
    {
      title: "AI in Frontend Development",
      snippet: "How AI tools can accelerate UI prototyping and improve user experience.",
      tags: ["#AI", "#Frontend"],
      id: 2
    },
    {
      title: "CSS Grid vs Flexbox",
      snippet: "A deep dive into layout techniques and when to use each for responsive design.",
      tags: ["#CSS", "#Design"],
      id: 3
    },
    {
      title: "Optimizing Web Performance",
      snippet: "Tips and tricks to reduce load times and improve Core Web Vitals scores.",
      tags: ["#Performance", "#SEO"],
      id: 4
    },
    {
      title: "State Management Simplified",
      snippet: "Understanding state in modern frameworks and how to keep your app predictable.",
      tags: ["#JavaScript", "#State"],
      id: 5
    },
    {
      title: "Microinteractions Matter",
      snippet: "Small animations that make a big difference in user engagement.",
      tags: ["#UX", "#Animation"],
      id: 6
    },
    {
      title: "Progressive Web Apps",
      snippet: "Building reliable, installable web apps that work offline.",
      tags: ["#PWA", "#Web"],
      id: 7
    },
    {
      title: "Dark Mode Best Practices",
      snippet: "Designing visually comfortable dark themes without sacrificing usability.",
      tags: ["#Design", "#UX"],
      id: 8
    },
    {
      title: "Serverless Architecture",
      snippet: "Leveraging cloud functions to scale your backend effortlessly.",
      tags: ["#Cloud", "#Backend"],
      id: 9
    },
    {
      title: "CSS Variables for Theming",
      snippet: "Using CSS custom properties to create dynamic and maintainable themes.",
      tags: ["#CSS", "#Theming"],
      id: 10
    },
    {
      title: "Web Accessibility Testing Tools",
      snippet: "Automated and manual tools to ensure your site is accessible to all.",
      tags: ["#Accessibility", "#Testing"],
      id: 11
    },
    {
      title: "Introduction to WebAssembly",
      snippet: "Boosting web app performance with low-level code.",
      tags: ["#WebAssembly", "#Performance"],
      id: 12
    },
    {
      title: "Design Systems 101",
      snippet: "Creating reusable components and consistent UI across projects.",
      tags: ["#Design", "#Components"],
      id: 13
    },
    {
      title: "GraphQL vs REST",
      snippet: "Choosing the right API architecture for your app.",
      tags: ["#API", "#GraphQL"],
      id: 14
    },
    {
      title: "Effective Code Reviews",
      snippet: "Best practices to improve code quality and team collaboration.",
      tags: ["#Development", "#Collaboration"],
      id: 15
    }
  ];

  function createPostCard(post) {
    const card = document.createElement('article');
    card.className = "masonry-item focus:outline-none";
    card.tabIndex = 0;
    card.setAttribute('aria-label', `Digital garden post titled ${post.title}`);

    const tagsContainer = document.createElement('div');
    tagsContainer.className = "mb-3";

    post.tags.forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.className = "tag";
      tagEl.textContent = tag;
      tagsContainer.appendChild(tagEl);
    });

    const title = document.createElement('h3');
    title.className = "text-xl font-semibold mb-2 glow-red";
    title.textContent = post.title;

    const snippet = document.createElement('p');
    snippet.className = "text-gray-300 text-sm leading-relaxed";
    snippet.textContent = post.snippet;

    card.appendChild(tagsContainer);
    card.appendChild(title);
    card.appendChild(snippet);

    return card;
  }

  posts.forEach(post => {
    const card = createPostCard(post);
    gardenGrid.appendChild(card);
  });

  // IntersectionObserver for fade-in animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.masonry-item').forEach(item => {
    observer.observe(item);
  });
})();