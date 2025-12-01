async (input) => {
  
  // Execute the bundled tool code
  var p=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var v=(s,a)=>{for(var o in a)p(s,o,{get:a[o],enumerable:!0})},b=(s,a,o,c)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of f(a))!y.call(s,i)&&i!==o&&p(s,i,{get:()=>a[i],enumerable:!(c=g(a,i))||c.enumerable});return s};var S=s=>b(p({},"__esModule",{value:!0}),s);var k={};v(k,{ExperienceTool:()=>m,HiringPitchTool:()=>d,ProjectShowcaseTool:()=>h,TechnicalSkillsTool:()=>u});module.exports=S(k);var r=require("zod"),d=class{name="hiring_pitch";description="Provides compelling arguments for why employers should hire Sankalp";inputSchema=r.z.object({question:r.z.string().optional(),jobType:r.z.string().optional().default("Full Stack Developer"),company:r.z.string().optional()});async execute(a){let{question:o,jobType:c,company:i}=a,t={technical_excellence:{title:"\u{1F3AF} Technical Excellence That Delivers Results",points:["Master of MERN stack (MongoDB, Express.js, React, Node.js) with production experience","Advanced proficiency in Next.js, TypeScript, and Tailwind CSS for modern web development","350+ LeetCode problems solved - proves algorithmic thinking and optimization skills","Experience with authentication systems, API integrations, and real-time features"]},proven_experience:{title:"\u{1F4BC} Proven Track Record in Production Environments",points:["Full Stack Developer Intern at Writecream - built customer-facing features","Software Engineering Intern at CreditSea - improved existing systems","Real collaboration experience with engineering teams","Features he built are actively used by customers today"]},innovation_capability:{title:"\u{1F680} Innovation & Product Development Skills",points:["Created CodeVision: AI-powered code generation platform from scratch","Built entire system end-to-end: frontend, backend APIs, real-time autosave","Integrated Gemini AI API for intelligent code generation","Demonstrates ability to ship complete, user-focused products independently"]},problem_solver:{title:"\u{1F9E9} Exceptional Problem-Solving Abilities",points:["Writes clean, efficient, and optimized code","Fast learner who adapts quickly to new technologies","Strong algorithmic foundation with 350+ solved problems","Enjoys tackling complex engineering challenges across full stack"]}},e=`
\u{1F525} **WHY YOU NEED TO HIRE SANKALP RIGHT NOW** \u{1F525}

`;return i&&(e+=`Listen ${i}, you're looking at exactly what you need for your ${c} position.

`),Object.values(t).forEach(n=>{e+=`## ${n.title}
`,n.points.forEach(l=>{e+=`\u2022 ${l}
`}),e+=`
`}),e+=`## \u{1F3AF} The Bottom Line
`,e+=`Sankalp isn't just another developer - he's a proven performer who:
`,e+=`\u2022 Delivers real features that customers use
`,e+=`\u2022 Builds innovative products from concept to deployment
`,e+=`\u2022 Solves complex problems with clean, efficient code
`,e+=`\u2022 Brings both theoretical knowledge and practical experience
`,e+=`\u2022 Adapts fast and contributes immediately

`,e+=`**You're not just hiring a developer - you're getting a complete package of technical skill, real-world experience, and innovative thinking. Sankalp is ready to contribute from day one and grow with your team.**

`,e+="\u2757 Don't let this talent slip away to your competitors. Make the smart choice.",{success:!0,data:{pitch:e,key_strengths:Object.keys(t),recommendation:"IMMEDIATE_HIRE"}}}},u=class{name="technical_skills";description="Details Sankalp's comprehensive technical skill set and expertise";inputSchema=r.z.object({category:r.z.string().optional().default("all"),depth:r.z.string().optional().default("detailed")});async execute(a){let{category:o,depth:c}=a,i={frontend:{title:"\u{1F3A8} Frontend Mastery",technologies:["React.js - Component architecture, state management, hooks","Next.js - SSR, SSG, routing, optimization, production deployment","TypeScript - Type safety, interfaces, generics, advanced patterns","Tailwind CSS - Responsive design, custom components, utility-first CSS","JavaScript (ES6+) - Modern syntax, async/await, modules, DOM manipulation"],experience:"Production-level experience building scalable, user-friendly interfaces"},backend:{title:"\u2699\uFE0F Backend Expertise",technologies:["Node.js - Server-side JavaScript, event-driven architecture","Express.js - RESTful APIs, middleware, routing, error handling","MongoDB - Document databases, aggregation, indexing, schemas","Authentication - JWT, sessions, OAuth, secure login systems","API Integration - Third-party services, webhooks, real-time data"],experience:"Built scalable backend systems handling real user traffic"},ai_integration:{title:"\u{1F916} AI & Modern Tech",technologies:["Gemini API Integration - AI-powered applications and responses","Real-time Features - WebSockets, live updates, autosave functionality","State Management - Redux, Context API, complex application state","Project Architecture - Modular design, scalable folder structure","API Design - RESTful principles, data modeling, performance"],experience:"Built complete AI-powered platform (CodeVision) from scratch"},problem_solving:{title:"\u{1F9E0} Problem-Solving & Algorithms",technologies:["Data Structures - Arrays, objects, trees, graphs, hash maps","Algorithms - Sorting, searching, dynamic programming, recursion","Code Optimization - Time/space complexity, performance improvements","LeetCode - 350+ problems solved across all difficulty levels","Clean Code - Readable, maintainable, well-documented solutions"],experience:"Strong algorithmic foundation enables efficient, optimized solutions"}},t=`
\u{1F4CB} **SANKALP'S TECHNICAL ARSENAL** \u{1F4CB}

`;if(o==="all")Object.values(i).forEach(e=>{t+=`## ${e.title}
`,c==="detailed"?(e.technologies.forEach(n=>{t+=`\u2022 ${n}
`}),t+=`
**Real Experience:** ${e.experience}

`):t+=`${e.technologies.map(n=>n.split(" - ")[0]).join(" \u2022 ")}

`});else if(o in i){let e=i[o];t+=`## ${e.title}
`,e.technologies.forEach(n=>{t+=`\u2022 ${n}
`}),t+=`
**Experience:** ${e.experience}
`}return t+=`
## \u{1F3AF} What This Means for You
`,t+=`\u2022 **Full Stack Capability**: Can handle your entire web application stack
`,t+=`\u2022 **Modern Tech Stack**: Uses current industry-standard technologies
`,t+=`\u2022 **AI Integration**: Can build intelligent, future-ready applications
`,t+=`\u2022 **Problem Solver**: Strong algorithmic foundation for efficient solutions
`,t+=`\u2022 **Production Ready**: Proven experience in real-world applications
`,{success:!0,data:{technical_summary:t,stack_categories:Object.keys(i),proficiency_level:"EXPERT"}}}},m=class{name="experience_showcase";description="Highlights Sankalp's internship experience and real-world impact";inputSchema=r.z.object({company:r.z.string().optional().default("both"),focus:r.z.string().optional().default("impact")});async execute(a){let{company:o,focus:c}=a,i={writecream:{title:"\u{1F4DD} Full Stack Developer Intern - Writecream",role:"Full Stack Developer Intern",duration:"Professional Internship",achievements:["Built customer-facing features used by real users in production","Worked directly with engineering teams in collaborative environment","Contributed to existing codebase and implemented new functionality","Gained experience with production deployment and user feedback cycles","Developed features that directly impact user experience and business metrics"],impact:"Features built by Sankalp are actively used by Writecream's customer base today",skills_used:["React","Node.js","API Integration","Team Collaboration","Production Deployment"]},creditsea:{title:"\u{1F4B3} Software Engineering Intern - CreditSea",role:"Software Engineering Intern",duration:"Professional Internship",achievements:["Improved existing systems and enhanced application performance","Worked on fintech applications requiring high reliability and security","Collaborated with engineering teams on system optimizations","Gained experience with financial technology and secure coding practices","Contributed to codebase improvements that enhanced user experience"],impact:"Improvements made by Sankalp enhanced system reliability for CreditSea users",skills_used:["System Optimization","Fintech","Security","Performance","Code Review"]}},t=`
\u{1F4BC} **SANKALP'S PROFESSIONAL EXPERIENCE** \u{1F4BC}

`;if(o==="both")Object.values(i).forEach(e=>{t+=`## ${e.title}
`,t+=`**Role:** ${e.role}
`,t+=`**Duration:** ${e.duration}

`,t+=`**Key Achievements:**
`,e.achievements.forEach(n=>{t+=`\u2022 ${n}
`}),t+=`
**Real Impact:** ${e.impact}
`,t+=`**Technologies Used:** ${e.skills_used.join(" \u2022 ")}

`});else if(o in i){let e=i[o];t+=`## ${e.title}
`,t+=`**Role:** ${e.role}

`,t+=`**Achievements:**
`,e.achievements.forEach(n=>{t+=`\u2022 ${n}
`}),t+=`
**Impact:** ${e.impact}
`,t+=`**Skills:** ${e.skills_used.join(" \u2022 ")}
`}return t+=`
## \u{1F3AF} Why This Experience Matters
`,t+=`\u2022 **Production Experience**: Not just side projects - real features used by customers
`,t+=`\u2022 **Team Collaboration**: Proven ability to work effectively with engineering teams
`,t+=`\u2022 **Business Impact**: Built features that directly affect user experience and metrics
`,t+=`\u2022 **Professional Growth**: Demonstrated ability to improve existing systems
`,t+=`\u2022 **Industry Exposure**: Experience in content creation (Writecream) and fintech (CreditSea)
`,t+=`
**Bottom Line: Sankalp has already proven he can deliver value in professional environments.**`,{success:!0,data:{experience_summary:t,companies:Object.keys(i),total_internships:2,impact_level:"HIGH"}}}},h=class{name="project_showcase";description="Showcases Sankalp's flagship project CodeVision and technical capabilities";inputSchema=r.z.object({project:r.z.string().optional().default("codevision"),detail_level:r.z.string().optional().default("comprehensive")});async execute(a){let{project:o,detail_level:c}=a,t={codevision:{title:"\u{1F680} CodeVision - AI-Powered Code Generation Platform",tagline:"Converting Natural Language to Production-Ready Code",overview:"An end-to-end AI-powered platform that transforms natural language prompts into customizable, real frontend code",technical_architecture:{frontend:"React.js with TypeScript for type-safe, scalable user interface",backend:"Node.js + Express.js RESTful API architecture",database:"MongoDB for flexible data storage and project management",ai_integration:"Gemini API integration for intelligent code generation",realtime:"Real-time autosave functionality for seamless user experience",state_management:"Complex application state management across components"},key_features:["Natural language to code conversion using advanced AI","Real-time autosave - no lost work, ever","Customizable output with multiple framework support","Project state management for multiple concurrent projects","Intelligent code optimization and best practices enforcement","User-friendly interface with live preview capabilities"],technical_challenges:["Integrating Gemini AI API for reliable, high-quality code generation","Building real-time autosave without performance degradation","Managing complex application state across multiple projects","Ensuring generated code follows best practices and is production-ready","Creating intuitive UX for complex technical functionality"],business_impact:"Demonstrates ability to identify market need and build complete solution independently",skills_demonstrated:["Full-stack development from concept to deployment","AI/ML integration and API management","Complex state management and real-time features","User experience design and interface development","Product development and project management","Independent problem-solving and innovation"]}}[o];if(!t)return{success:!1,error:"Project not found"};let e=`
\u{1F3AF} **PROJECT SPOTLIGHT: ${t.title}** \u{1F3AF}

`;return e+=`**${t.tagline}**

`,e+=`${t.overview}

`,c==="comprehensive"&&(e+=`## \u{1F3D7}\uFE0F Technical Architecture
`,Object.entries(t.technical_architecture).forEach(([n,l])=>{e+=`\u2022 **${n.replace("_"," ").toUpperCase()}**: ${l}
`}),e+=`
`,e+=`## \u2728 Key Features Built
`,t.key_features.forEach(n=>{e+=`\u2022 ${n}
`}),e+=`
`,e+=`## \u{1F527} Technical Challenges Solved
`,t.technical_challenges.forEach(n=>{e+=`\u2022 ${n}
`}),e+=`
`),e+=`## \u{1F4A1} Skills Demonstrated
`,t.skills_demonstrated.forEach(n=>{e+=`\u2022 ${n}
`}),e+=`
`,e+=`## \u{1F3AF} What This Proves About Sankalp
`,e+=`\u2022 **Complete Product Vision**: Can take idea from concept to working product
`,e+=`\u2022 **Technical Leadership**: Built entire system architecture independently
`,e+=`\u2022 **Innovation Mindset**: Created AI-powered solution to real developer pain point
`,e+=`\u2022 **Full-Stack Mastery**: Handled frontend, backend, database, and AI integration
`,e+=`\u2022 **User-Focused Development**: Built with real user experience and needs in mind
`,e+=`\u2022 **Modern Tech Integration**: Successfully integrated cutting-edge AI capabilities

`,e+="**This isn't just a side project - it's proof that Sankalp can build production-quality, innovative applications that solve real problems.**",{success:!0,data:{project_showcase:e,complexity_level:"ENTERPRISE",innovation_score:"HIGH",technical_depth:"FULL_STACK"}}}};0&&(module.exports={ExperienceTool,HiringPitchTool,ProjectShowcaseTool,TechnicalSkillsTool});

  
  // Get the tool class from exports
  const ToolClass = module.exports.default || module.exports.TechnicalSkillsTool || module.exports;
  
  // Create and execute the tool
  const toolInstance = new ToolClass();
  return await toolInstance.execute(input);
}