 function generateRoadmap(){
    const interest = document.getElementById('interest').value;
    const level = document.getElementById('level').value;
    const output = document.getElementById('roadmapOutput');

    const roadmaps = {
      "Front-End Development": {
        "Beginner": "1. HTML & CSS fundamentals\n2. JavaScript basics (DOM, events)\n3. Responsive layout with Flexbox/Grid\n4. Git & GitHub workflow\n5. Build 2 small static projects",
        "Intermediate": "1. Modern JS (ES6+, async/await)\n2. Tailwind CSS / component styling\n3. React fundamentals\n4. API integration\n5. Build a portfolio project with routing",
        "Advanced": "1. State management (Context/Redux)\n2. Performance optimization\n3. Testing (unit + integration)\n4. TypeScript adoption\n5. Ship a production-grade app"
      },
      "UI/UX Design": {
        "Beginner": "1. Design fundamentals (color, type, spacing)\n2. Wireframing basics\n3. Figma essentials\n4. Usability heuristics\n5. Redesign an existing screen",
        "Intermediate": "1. Design systems basics\n2. Prototyping & interaction design\n3. User research methods\n4. Accessibility standards\n5. Ship a mid-fidelity case study",
        "Advanced": "1. Design ops & systems at scale\n2. Advanced motion/interaction design\n3. Cross-functional collaboration with eng\n4. Data-informed design decisions\n5. Lead an end-to-end product redesign"
      },
      "Full-Stack Development": {
        "Beginner": "1. HTML/CSS/JS basics\n2. Intro to a backend language (Node/Python)\n3. Basic databases (SQL basics)\n4. Simple REST API\n5. Connect a static front-end to your API",
        "Intermediate": "1. Framework of choice (Express/Django)\n2. Authentication & authorization\n3. Relational + NoSQL databases\n4. Deployment basics (CI/CD)\n5. Build a full CRUD app",
        "Advanced": "1. System design fundamentals\n2. Scalability & caching\n3. Microservices or modular monolith\n4. Observability & monitoring\n5. Ship and operate a production system"
      }
    };

    output.textContent = `> generating roadmap for ${interest} · ${level}\n\n` + roadmaps[interest][level];
    output.classList.add('show');
  }
  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }
