import { LuaTool } from "lua-cli";
import { z } from "zod";

export class HiringPitchTool implements LuaTool {
    name = "hiring_pitch";
    description = "Provides compelling arguments for why employers should hire Sankalp";
    inputSchema = z.object({
        question: z.string().optional(),
        jobType: z.string().optional().default("Full Stack Developer"), 
        company: z.string().optional()
    });

    async execute(input: z.infer<typeof this.inputSchema>) {
        const { question, jobType, company } = input;

        const baseArguments = {
            technical_excellence: {
                title: "🎯 Technical Excellence That Delivers Results",
                points: [
                    "Master of MERN stack (MongoDB, Express.js, React, Node.js) with production experience",
                    "Advanced proficiency in Next.js, TypeScript, and Tailwind CSS for modern web development",
                    "350+ LeetCode problems solved - proves algorithmic thinking and optimization skills",
                    "Experience with authentication systems, API integrations, and real-time features"
                ]
            },
            proven_experience: {
                title: "💼 Proven Track Record in Production Environments",
                points: [
                    "Full Stack Developer Intern at Writecream - built customer-facing features",
                    "Software Engineering Intern at CreditSea - improved existing systems",
                    "Real collaboration experience with engineering teams",
                    "Features he built are actively used by customers today"
                ]
            },
            innovation_capability: {
                title: "🚀 Innovation & Product Development Skills",
                points: [
                    "Created CodeVision: AI-powered code generation platform from scratch",
                    "Built entire system end-to-end: frontend, backend APIs, real-time autosave",
                    "Integrated Gemini AI API for intelligent code generation",
                    "Demonstrates ability to ship complete, user-focused products independently"
                ]
            },
            problem_solver: {
                title: "🧩 Exceptional Problem-Solving Abilities",
                points: [
                    "Writes clean, efficient, and optimized code",
                    "Fast learner who adapts quickly to new technologies",
                    "Strong algorithmic foundation with 350+ solved problems",
                    "Enjoys tackling complex engineering challenges across full stack"
                ]
            }
        };

        let response = `\n🔥 **WHY YOU NEED TO HIRE SANKALP RIGHT NOW** 🔥\n\n`;
        
        if (company) {
            response += `Listen ${company}, you're looking at exactly what you need for your ${jobType} position.\n\n`;
        }

        Object.values(baseArguments).forEach(arg => {
            response += `## ${arg.title}\n`;
            arg.points.forEach(point => {
                response += `• ${point}\n`;
            });
            response += `\n`;
        });

        response += `## 🎯 The Bottom Line\n`;
        response += `Sankalp isn't just another developer - he's a proven performer who:\n`;
        response += `• Delivers real features that customers use\n`;
        response += `• Builds innovative products from concept to deployment\n`;
        response += `• Solves complex problems with clean, efficient code\n`;
        response += `• Brings both theoretical knowledge and practical experience\n`;
        response += `• Adapts fast and contributes immediately\n\n`;
        
        response += `**You're not just hiring a developer - you're getting a complete package of technical skill, real-world experience, and innovative thinking. Sankalp is ready to contribute from day one and grow with your team.**\n\n`;
        response += `❗ Don't let this talent slip away to your competitors. Make the smart choice.`;

        return {
            success: true,
            data: {
                pitch: response,
                key_strengths: Object.keys(baseArguments),
                recommendation: "IMMEDIATE_HIRE"
            }
        };
    }
}

export class TechnicalSkillsTool implements LuaTool {
    name = "technical_skills";
    description = "Details Sankalp's comprehensive technical skill set and expertise";
    inputSchema = z.object({
        category: z.string().optional().default("all"),
        depth: z.string().optional().default("detailed")
    });

    async execute(input: z.infer<typeof this.inputSchema>) {
        const { category, depth } = input;

        const technicalStack = {
            frontend: {
                title: "🎨 Frontend Mastery",
                technologies: [
                    "React.js - Component architecture, state management, hooks",
                    "Next.js - SSR, SSG, routing, optimization, production deployment", 
                    "TypeScript - Type safety, interfaces, generics, advanced patterns",
                    "Tailwind CSS - Responsive design, custom components, utility-first CSS",
                    "JavaScript (ES6+) - Modern syntax, async/await, modules, DOM manipulation"
                ],
                experience: "Production-level experience building scalable, user-friendly interfaces"
            },
            backend: {
                title: "⚙️ Backend Expertise", 
                technologies: [
                    "Node.js - Server-side JavaScript, event-driven architecture",
                    "Express.js - RESTful APIs, middleware, routing, error handling",
                    "MongoDB - Document databases, aggregation, indexing, schemas",
                    "Authentication - JWT, sessions, OAuth, secure login systems",
                    "API Integration - Third-party services, webhooks, real-time data"
                ],
                experience: "Built scalable backend systems handling real user traffic"
            },
            ai_integration: {
                title: "🤖 AI & Modern Tech",
                technologies: [
                    "Gemini API Integration - AI-powered applications and responses",
                    "Real-time Features - WebSockets, live updates, autosave functionality", 
                    "State Management - Redux, Context API, complex application state",
                    "Project Architecture - Modular design, scalable folder structure",
                    "API Design - RESTful principles, data modeling, performance"
                ],
                experience: "Built complete AI-powered platform (CodeVision) from scratch"
            },
            problem_solving: {
                title: "🧠 Problem-Solving & Algorithms",
                technologies: [
                    "Data Structures - Arrays, objects, trees, graphs, hash maps",
                    "Algorithms - Sorting, searching, dynamic programming, recursion",
                    "Code Optimization - Time/space complexity, performance improvements",
                    "LeetCode - 350+ problems solved across all difficulty levels",
                    "Clean Code - Readable, maintainable, well-documented solutions"
                ],
                experience: "Strong algorithmic foundation enables efficient, optimized solutions"
            }
        };

        let response = `\n📋 **SANKALP'S TECHNICAL ARSENAL** 📋\n\n`;

        if (category === "all") {
            Object.values(technicalStack).forEach(stack => {
                response += `## ${stack.title}\n`;
                if (depth === "detailed") {
                    stack.technologies.forEach(tech => {
                        response += `• ${tech}\n`;
                    });
                    response += `\n**Real Experience:** ${stack.experience}\n\n`;
                } else {
                    response += `${stack.technologies.map(t => t.split(' - ')[0]).join(' • ')}\n\n`;
                }
            });
        } else if (category in technicalStack) {
            const stack = technicalStack[category as keyof typeof technicalStack];
            response += `## ${stack.title}\n`;
            stack.technologies.forEach(tech => {
                response += `• ${tech}\n`;
            });
            response += `\n**Experience:** ${stack.experience}\n`;
        }

        response += `\n## 🎯 What This Means for You\n`;
        response += `• **Full Stack Capability**: Can handle your entire web application stack\n`;
        response += `• **Modern Tech Stack**: Uses current industry-standard technologies\n`;
        response += `• **AI Integration**: Can build intelligent, future-ready applications\n`;
        response += `• **Problem Solver**: Strong algorithmic foundation for efficient solutions\n`;
        response += `• **Production Ready**: Proven experience in real-world applications\n`;

        return {
            success: true,
            data: {
                technical_summary: response,
                stack_categories: Object.keys(technicalStack),
                proficiency_level: "EXPERT"
            }
        };
    }
}

export class ExperienceTool implements LuaTool {
    name = "experience_showcase";
    description = "Highlights Sankalp's internship experience and real-world impact";
    inputSchema = z.object({
        company: z.string().optional().default("both"),
        focus: z.string().optional().default("impact")
    });

    async execute(input: z.infer<typeof this.inputSchema>) {
        const { company, focus } = input;

        const experiences = {
            writecream: {
                title: "📝 Full Stack Developer Intern - Writecream",
                role: "Full Stack Developer Intern",
                duration: "Professional Internship",
                achievements: [
                    "Built customer-facing features used by real users in production",
                    "Worked directly with engineering teams in collaborative environment",
                    "Contributed to existing codebase and implemented new functionality",
                    "Gained experience with production deployment and user feedback cycles",
                    "Developed features that directly impact user experience and business metrics"
                ],
                impact: "Features built by Sankalp are actively used by Writecream's customer base today",
                skills_used: ["React", "Node.js", "API Integration", "Team Collaboration", "Production Deployment"]
            },
            creditsea: {
                title: "💳 Software Engineering Intern - CreditSea",
                role: "Software Engineering Intern", 
                duration: "Professional Internship",
                achievements: [
                    "Improved existing systems and enhanced application performance",
                    "Worked on fintech applications requiring high reliability and security",
                    "Collaborated with engineering teams on system optimizations",
                    "Gained experience with financial technology and secure coding practices",
                    "Contributed to codebase improvements that enhanced user experience"
                ],
                impact: "Improvements made by Sankalp enhanced system reliability for CreditSea users",
                skills_used: ["System Optimization", "Fintech", "Security", "Performance", "Code Review"]
            }
        };

        let response = `\n💼 **SANKALP'S PROFESSIONAL EXPERIENCE** 💼\n\n`;

        if (company === "both") {
            Object.values(experiences).forEach(exp => {
                response += `## ${exp.title}\n`;
                response += `**Role:** ${exp.role}\n`;
                response += `**Duration:** ${exp.duration}\n\n`;
                
                response += `**Key Achievements:**\n`;
                exp.achievements.forEach(achievement => {
                    response += `• ${achievement}\n`;
                });
                
                response += `\n**Real Impact:** ${exp.impact}\n`;
                response += `**Technologies Used:** ${exp.skills_used.join(' • ')}\n\n`;
            });
        } else if (company in experiences) {
            const exp = experiences[company as keyof typeof experiences];
            response += `## ${exp.title}\n`;
            response += `**Role:** ${exp.role}\n\n`;
            
            response += `**Achievements:**\n`;
            exp.achievements.forEach(achievement => {
                response += `• ${achievement}\n`;
            });
            
            response += `\n**Impact:** ${exp.impact}\n`;
            response += `**Skills:** ${exp.skills_used.join(' • ')}\n`;
        }

        response += `\n## 🎯 Why This Experience Matters\n`;
        response += `• **Production Experience**: Not just side projects - real features used by customers\n`;
        response += `• **Team Collaboration**: Proven ability to work effectively with engineering teams\n`;
        response += `• **Business Impact**: Built features that directly affect user experience and metrics\n`;
        response += `• **Professional Growth**: Demonstrated ability to improve existing systems\n`;
        response += `• **Industry Exposure**: Experience in content creation (Writecream) and fintech (CreditSea)\n`;
        response += `\n**Bottom Line: Sankalp has already proven he can deliver value in professional environments.**`;

        return {
            success: true,
            data: {
                experience_summary: response,
                companies: Object.keys(experiences),
                total_internships: 2,
                impact_level: "HIGH"
            }
        };
    }
}

export class ProjectShowcaseTool implements LuaTool {
    name = "project_showcase";
    description = "Showcases Sankalp's flagship project CodeVision and technical capabilities";
    inputSchema = z.object({
        project: z.string().optional().default("codevision"),
        detail_level: z.string().optional().default("comprehensive")
    });

    async execute(input: z.infer<typeof this.inputSchema>) {
        const { project, detail_level } = input;

        const projects = {
            codevision: {
                title: "🚀 CodeVision - AI-Powered Code Generation Platform",
                tagline: "Converting Natural Language to Production-Ready Code",
                overview: "An end-to-end AI-powered platform that transforms natural language prompts into customizable, real frontend code",
                technical_architecture: {
                    frontend: "React.js with TypeScript for type-safe, scalable user interface",
                    backend: "Node.js + Express.js RESTful API architecture",
                    database: "MongoDB for flexible data storage and project management", 
                    ai_integration: "Gemini API integration for intelligent code generation",
                    realtime: "Real-time autosave functionality for seamless user experience",
                    state_management: "Complex application state management across components"
                },
                key_features: [
                    "Natural language to code conversion using advanced AI",
                    "Real-time autosave - no lost work, ever",
                    "Customizable output with multiple framework support",
                    "Project state management for multiple concurrent projects",
                    "Intelligent code optimization and best practices enforcement",
                    "User-friendly interface with live preview capabilities"
                ],
                technical_challenges: [
                    "Integrating Gemini AI API for reliable, high-quality code generation",
                    "Building real-time autosave without performance degradation", 
                    "Managing complex application state across multiple projects",
                    "Ensuring generated code follows best practices and is production-ready",
                    "Creating intuitive UX for complex technical functionality"
                ],
                business_impact: "Demonstrates ability to identify market need and build complete solution independently",
                skills_demonstrated: [
                    "Full-stack development from concept to deployment",
                    "AI/ML integration and API management", 
                    "Complex state management and real-time features",
                    "User experience design and interface development",
                    "Product development and project management",
                    "Independent problem-solving and innovation"
                ]
            }
        };

        const project_data = projects[project as keyof typeof projects];

        if (!project_data) {
            return {
                success: false,
                error: "Project not found"
            };
        }

        let response = `\n🎯 **PROJECT SPOTLIGHT: ${project_data.title}** 🎯\n\n`;
        response += `**${project_data.tagline}**\n\n`;
        response += `${project_data.overview}\n\n`;

        if (detail_level === "comprehensive") {
            response += `## 🏗️ Technical Architecture\n`;
            Object.entries(project_data.technical_architecture).forEach(([key, value]) => {
                response += `• **${key.replace('_', ' ').toUpperCase()}**: ${value}\n`;
            });
            response += `\n`;

            response += `## ✨ Key Features Built\n`;
            project_data.key_features.forEach(feature => {
                response += `• ${feature}\n`;
            });
            response += `\n`;

            response += `## 🔧 Technical Challenges Solved\n`;
            project_data.technical_challenges.forEach(challenge => {
                response += `• ${challenge}\n`;
            });
            response += `\n`;
        }

        response += `## 💡 Skills Demonstrated\n`;
        project_data.skills_demonstrated.forEach(skill => {
            response += `• ${skill}\n`;
        });
        response += `\n`;

        response += `## 🎯 What This Proves About Sankalp\n`;
        response += `• **Complete Product Vision**: Can take idea from concept to working product\n`;
        response += `• **Technical Leadership**: Built entire system architecture independently\n`;
        response += `• **Innovation Mindset**: Created AI-powered solution to real developer pain point\n`;
        response += `• **Full-Stack Mastery**: Handled frontend, backend, database, and AI integration\n`;
        response += `• **User-Focused Development**: Built with real user experience and needs in mind\n`;
        response += `• **Modern Tech Integration**: Successfully integrated cutting-edge AI capabilities\n\n`;

        response += `**This isn't just a side project - it's proof that Sankalp can build production-quality, innovative applications that solve real problems.**`;

        return {
            success: true,
            data: {
                project_showcase: response,
                complexity_level: "ENTERPRISE",
                innovation_score: "HIGH", 
                technical_depth: "FULL_STACK"
            }
        };
    }
}