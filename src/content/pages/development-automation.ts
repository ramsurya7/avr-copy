import type { PageContent } from "@/content/types";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import aiRetrieval from "@/assets/ai-retrieval.jpg.asset.json";
import aiSearch from "@/assets/ai-search.jpg.asset.json";

const crumb = (label: string, to: string) => ({ label, to });
const webBase = [crumb("Home", "/"), crumb("Web Design & Development", "/web-design-development")];
const autoBase = [
  crumb("Home", "/"),
  crumb("Automation & AI Agents", "/automation-ai-agents/n8n-automation"),
];

export const fullStackDevelopment: PageContent = {
  slug: "/web-design-development/full-stack-web-development",
  title: "Full-Stack Web Development Services | AVR Web Consulting",
  h1: "Build powerful digital experiences with full-stack web development",
  description:
    "Custom websites and web applications built with React, JavaScript, Node.js, Python, Java and databases. Full-stack web development by AVR Web Consulting.",
  eyebrow: "Full-Stack Web Development",
  serviceName: "Full-Stack Web Development",
  answer:
    "Full-stack web development covers both the interface a user sees and the server, database and integrations behind it. When standard website solutions are not enough, AVR Web Consulting builds custom websites and web applications, selecting the technology stack according to the requirements of each project.",
  hero: {
    image: "/images/full-stack-hero-new.jpg",
    imageAlt: "Full-Stack Web Development Services | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Frontend", value: "React, JS, HTML, CSS" },
    { label: "Backend", value: "Node.js, Python, Java" },
    { label: "Data", value: "Databases & JSON APIs" },
    { label: "Scope", value: "Sites & web apps" },
  ],
  breadcrumb: [
    ...webBase,
    crumb("Full-Stack Web Development", "/web-design-development/full-stack-web-development"),
  ],
  related: [
    {
      label: "Vibe coding & AI-assisted development",
      to: "/web-design-development/vibe-coding-ai-assisted-development",
    },
    { label: "WordPress development", to: "/web-design-development/wordpress-development" },
    { label: "E-commerce development", to: "/web-design-development/ecommerce-development" },
    { label: "n8n automation", to: "/automation-ai-agents/n8n-automation" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Full-Stack Web Development Services",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "introduction",
      heading: "What full-stack web development means",
      blocks: [
        {
          kind: "paragraph",
          text: "A full-stack project is one where the same team is responsible for the interface, the server-side logic, the data layer and the connections between them. The frontend handles what people see and interact with. The backend applies business rules, validates input and talks to other systems. The database stores the information, and APIs move data between the parts.",
        },
        {
          kind: "paragraph",
          text: "Most business websites do not need this. A content site with pages, a blog and a contact form is usually better served by WordPress. Custom development becomes the right answer when the site has to do something specific to your business — user accounts, calculations, internal workflows, or a connection to software you already run.",
        },
        {
          kind: "callout",
          title: "Stack chosen per project",
          text: "We do not use every technology on every project. The stack is selected around requirements, timeline, hosting and who will maintain the result afterwards.",
        },
      ],
    },
    {
      id: "technology-stack",
      heading: "Technology stack we work with",
      blocks: [
        {
          kind: "table",
          head: ["Layer", "Technology", "Typically used for"],
          rows: [
            ["Frontend", "React", "Interactive interfaces, dashboards, multi-step forms"],
            ["Frontend", "JavaScript", "Application behaviour, validation, browser logic"],
            ["Frontend", "HTML", "Semantic structure that search engines and AI systems can parse"],
            ["Frontend", "CSS", "Responsive layout, design system implementation, accessibility"],
            ["Backend", "Node.js", "APIs, server logic, real-time and integration-heavy work"],
            ["Backend", "Python", "Data processing, scripting, automation-adjacent services"],
            ["Backend", "Java", "Structured backend services for larger business systems"],
            ["Data", "JSON", "API payloads, configuration, structured data exchange"],
            ["Data", "Databases", "Persistent storage, relationships, reporting and queries"],
          ],
        },
      ],
    },
    {
      id: "what-we-build",
      heading: "What we can build",
      blocks: [
        {
          kind: "list",
          items: [
            "Custom business websites where a template does not fit the requirement",
            "Web applications with defined user roles and workflows",
            "Customer portals for accounts, documents, requests or order history",
            "Admin dashboards for internal teams to manage data and operations",
            "E-commerce applications with custom checkout or catalogue logic",
            "API-connected applications that exchange data with existing software",
            "Database-driven applications with search, filtering and reporting",
            "Business management systems built around your internal processes",
          ],
        },
      ],
    },
    {
      id: "benefits",
      heading: "Why businesses choose custom development",
      blocks: [
        {
          kind: "list",
          items: [
            "Custom functionality that matches how your business actually works, rather than adapting the business to a plugin",
            "Scalability, because the architecture is chosen for the expected data and traffic",
            "Better control over performance, code quality and what gets shipped",
            "Integration with the CRM, accounting, inventory or third-party services you already use",
            "Performance, since the application only loads the code it needs",
            "Business-specific workflows, approvals and permissions built into the product",
          ],
        },
      ],
    },
    {
      id: "process",
      heading: "Our development process",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "01 — Requirement analysis",
              text: "We document what the application must do, who uses it and which systems it needs to talk to.",
            },
            {
              title: "02 — Architecture & planning",
              text: "Stack selection, data model, integration points, hosting and a delivery sequence.",
            },
            {
              title: "03 — UI / frontend development",
              text: "Responsive interfaces built from a shared design system with accessibility in mind.",
            },
            {
              title: "04 — Backend development",
              text: "APIs, business rules, authentication and permissions implemented server-side.",
            },
            {
              title: "05 — Database & integration",
              text: "Schema, queries and connections to external services and internal tools.",
            },
            {
              title: "06 — Testing",
              text: "Functional testing, edge cases, cross-device checks and review before release.",
            },
            {
              title: "07 — Deployment & maintenance",
              text: "Release, monitoring, documentation and ongoing fixes or improvements.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is full-stack web development?",
      answer:
        "Full-stack web development means building both the frontend a user interacts with and the backend, database and integrations that support it, so the whole application is delivered and maintained as one system.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We work with React, JavaScript, HTML and CSS on the frontend, Node.js, Python and Java on the backend, and JSON with databases for data and integrations. The exact stack is chosen per project rather than applied to every build.",
    },
    {
      question: "Can you build custom web applications?",
      answer:
        "Yes. We build applications such as customer portals, admin dashboards, database-driven tools and business management systems, scoped around the workflows your team needs.",
    },
    {
      question: "Can you integrate APIs and databases?",
      answer:
        "Yes. We connect applications to third-party APIs and internal systems, and design database structures for the data your application needs to store, query and report on.",
    },
    {
      question: "How is full-stack development different from WordPress development?",
      answer:
        "WordPress is a content management system that is quick and cost-effective for content-led sites. Full-stack development is for cases where you need custom logic, custom data structures or application behaviour that a CMS and plugins cannot cleanly provide.",
    },
    {
      question: "Do I need custom development or a WordPress site?",
      answer:
        "If your site is mainly pages, a blog and enquiry forms, WordPress is usually the better value. If users log in, data is processed, or another system must be connected, custom development is generally the more maintainable choice.",
    },
    {
      question: "Will the application be responsive?",
      answer:
        "Yes. Interfaces are built to work on desktop, tablet and mobile, and are tested across screen sizes before release.",
    },
    {
      question: "Who owns the code?",
      answer:
        "You do. Source code and credentials are handed over, and we document the setup so another developer can pick the project up.",
    },
    {
      question: "How long does a custom project take?",
      answer:
        "It depends on scope. A small custom application is measured in weeks, while a larger system with multiple roles and integrations takes longer. We give a timeline after the requirement analysis stage, not before.",
    },
    {
      question: "Do you support the application after launch?",
      answer:
        "Yes. We can continue with fixes, improvements and new features after deployment, or hand over documentation if your own team takes it forward.",
    },
  ],
};

export const vibeCoding: PageContent = {
  slug: "/web-design-development/vibe-coding-ai-assisted-development",
  title: "Vibe Coding & AI-Assisted Web Development | AVR Web Consulting",
  h1: "Build and develop websites faster with AI-assisted development",
  description:
    "Vibe coding and AI-assisted web development at AVR Web Consulting: faster prototyping and implementation, with human review, testing and engineering decisions kept in place.",
  eyebrow: "Vibe Coding / AI-Assisted Development",
  serviceName: "AI-Assisted Web Development",
  answer:
    "Vibe coding is an AI-assisted development approach where developers use AI tools to generate, modify, explore and debug code through natural-language instructions and short iterations. AVR Web Consulting uses these workflows to speed up prototyping and implementation while keeping architecture, review, testing and final decisions with the developer.",
  hero: {
    image: "/images/vibe-coding.webp",
    imageAlt: "Vibe Coding & AI-Assisted Web Development | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Best for", value: "Prototypes & iteration" },
    { label: "Review", value: "Human, every change" },
    { label: "Stack", value: "React, Node, Python" },
    { label: "Testing", value: "Before every release" },
  ],
  breadcrumb: [
    ...webBase,
    crumb(
      "Vibe Coding / AI-Assisted Development",
      "/web-design-development/vibe-coding-ai-assisted-development",
    ),
  ],
  related: [
    {
      label: "Full-stack web development",
      to: "/web-design-development/full-stack-web-development",
    },
    { label: "WordPress development", to: "/web-design-development/wordpress-development" },
    { label: "AI agent development", to: "/automation-ai-agents/ai-agent-development" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Vibe Coding & AI-Assisted Web Development",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "what-is-vibe-coding",
      heading: "What is vibe coding?",
      blocks: [
        {
          kind: "paragraph",
          text: "Vibe coding describes a way of working where a developer directs AI tools in natural language and iterates quickly: describe the intended behaviour, review what the tool produces, correct it, run it, and repeat. It shifts more of the developer's time from typing boilerplate to specifying, reviewing and testing.",
        },
        {
          kind: "paragraph",
          text: "It is a workflow, not a product. The output is ordinary code in ordinary frameworks, which still has to be read, understood and maintained by people.",
        },
      ],
    },
    {
      id: "how-we-use-it",
      heading: "How we use AI-assisted development",
      blocks: [
        {
          kind: "list",
          items: [
            "Rapid prototyping, so an idea can be seen and discussed before it is committed to",
            "UI implementation from an agreed design direction",
            "Code generation assistance for repetitive or well-defined pieces of work",
            "Debugging assistance when tracing an error across several files",
            "Refactoring assistance to tidy structure without changing behaviour",
            "Development workflow acceleration on routine tasks",
            "Feature experimentation, where several approaches can be compared cheaply",
          ],
        },
      ],
    },
    {
      id: "technologies",
      heading: "Technologies used",
      blocks: [
        {
          kind: "table",
          head: ["Layer", "Technology", "Where it fits"],
          rows: [
            [
              "Frontend",
              "React, JavaScript, HTML, CSS",
              "Interfaces, components, responsive layouts",
            ],
            ["Backend", "Node.js, Python, Java", "APIs, business logic, services"],
            ["Data", "Databases, JSON", "Storage, queries, structured data exchange"],
          ],
        },
      ],
    },
    {
      id: "human-and-ai",
      heading: "Human and AI working together",
      blocks: [
        {
          kind: "paragraph",
          text: "AI is used as an assistant. Architecture, security decisions, data modelling and the judgement about whether something is actually correct stay with the developer.",
        },
        {
          kind: "steps",
          items: [
            {
              title: "Planning",
              text: "Requirements and approach are agreed before any code is written.",
            },
            {
              title: "AI-assisted implementation",
              text: "AI tools help produce and modify code within that agreed plan.",
            },
            {
              title: "Developer review",
              text: "Every change is read and understood by a developer before it is kept.",
            },
            {
              title: "Testing",
              text: "Functional and cross-device testing, including the cases AI tools commonly miss.",
            },
            {
              title: "Optimization",
              text: "Performance, structure and readability are improved where needed.",
            },
            {
              title: "Deployment",
              text: "Release with documentation, so the codebase remains maintainable.",
            },
          ],
        },
      ],
    },
    {
      id: "benefits",
      heading: "Benefits",
      blocks: [
        {
          kind: "list",
          items: [
            "Faster prototyping, so decisions are made against something visible",
            "Faster iteration between feedback and the next version",
            "Less time spent on repetitive coding",
            "Rapid experimentation with alternative approaches",
            "More efficient development workflows on well-defined tasks",
          ],
        },
      ],
    },
    {
      id: "limitations",
      heading: "Limitations we are honest about",
      blocks: [
        {
          kind: "paragraph",
          text: "AI-assisted coding is useful, not magic. Used without review it introduces real problems, and pretending otherwise would be misleading.",
        },
        {
          kind: "list",
          title: "What can go wrong without oversight",
          items: [
            "Incorrect code that looks plausible but does the wrong thing",
            "Security issues, such as weak validation or exposed credentials",
            "Bugs in edge cases that were never described in the instruction",
            "Inefficient implementations that do not scale with real data",
            "Misunderstood requirements, where the output solves a different problem",
          ],
        },
        {
          kind: "callout",
          title: "Review and testing are not optional",
          text: "Every AI-assisted change goes through developer review and testing before it reaches a live site. That step is what makes the speed usable.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is vibe coding?",
      answer:
        "Vibe coding is an AI-assisted development approach where developers use AI tools to generate, modify, explore and debug code through natural-language instructions and quick iteration, with the developer reviewing and directing the work.",
    },
    {
      question: "Is AI replacing developers?",
      answer:
        "No. AI tools speed up parts of implementation, but architecture, security, data modelling, testing and the judgement about whether the result is correct still require a developer.",
    },
    {
      question: "Can you build complete websites using AI-assisted development?",
      answer:
        "Yes, complete websites and applications can be delivered this way, but the code is reviewed, tested and adjusted by developers before release rather than shipped straight from a tool.",
    },
    {
      question: "What technologies can be used?",
      answer:
        "The same technologies we use in conventional projects: React, JavaScript, HTML and CSS on the frontend, Node.js, Python or Java on the backend, and databases with JSON for data and integrations.",
    },
    {
      question: "Is AI-generated code reviewed and tested?",
      answer:
        "Yes. Every change is read by a developer and tested functionally and across devices before deployment, because AI tools can produce code that looks correct but behaves incorrectly.",
    },
    {
      question: "Is AI-assisted development cheaper?",
      answer:
        "It can reduce the time spent on repetitive implementation, which affects cost on some projects. It does not remove the time needed for planning, review, testing and maintenance.",
    },
    {
      question: "Will the code be maintainable by other developers?",
      answer:
        "That is the intention. We keep to standard frameworks and conventional project structure, and we document the setup, so the codebase does not depend on any particular tool.",
    },
    {
      question: "Do you use AI on every project?",
      answer:
        "No. It is applied where it helps, mainly prototyping, UI implementation and routine work. Sensitive or complex logic is written and reviewed carefully by hand.",
    },
    {
      question: "Is AI-assisted code secure?",
      answer:
        "No code is secure simply because of how it was written. We review authentication, input validation, permissions and credential handling as a separate step, regardless of whether AI tools were involved.",
    },
    {
      question: "Can you improve an existing project using this approach?",
      answer:
        "Yes. AI-assisted workflows are often useful for refactoring, debugging and adding features to an existing codebase, provided a developer understands the code before changing it.",
    },
  ],
};

export const n8nAutomation: PageContent = {
  slug: "/automation-ai-agents/n8n-automation",
  title: "n8n Automation Services — Workflow Automation | AVR Web Consulting",
  h1: "Automate repetitive workflows with n8n",
  description:
    "Connect your tools, automate repetitive processes and build flexible business workflows with n8n automation from AVR Web Consulting.",
  eyebrow: "n8n Automation",
  serviceName: "n8n Workflow Automation",
  answer:
    "n8n is a workflow automation platform that connects applications, APIs, databases and services so repetitive processes can run automatically. AVR Web Consulting designs, builds and tests n8n workflows for tasks such as lead handling, notifications, data synchronisation and reporting, with error handling and monitoring built in.",
  hero: {
    image: "/images/n8n-workflow-automation.webp",
    imageAlt: "n8n Automation Services — Workflow Automation | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Platform", value: "n8n" },
    { label: "Connects", value: "Apps, APIs, databases" },
    { label: "Built with", value: "Testing & error handling" },
    { label: "Works with", value: "AI agents" },
  ],
  breadcrumb: [crumb("Home", "/"), crumb("n8n Automation", "/automation-ai-agents/n8n-automation")],
  related: [
    { label: "AI agent development", to: "/automation-ai-agents/ai-agent-development" },
    {
      label: "Full-stack web development",
      to: "/web-design-development/full-stack-web-development",
    },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for n8n Automation Services — Workflow Automation",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "what-is-n8n",
      heading: "What is n8n?",
      blocks: [
        {
          kind: "paragraph",
          text: "n8n is a workflow automation platform. A workflow is a sequence of steps that starts from a trigger — a form submission, a scheduled time, a webhook, a new record — and then moves data between applications, transforms it, applies conditions and performs actions.",
        },
        {
          kind: "paragraph",
          text: "Because it can talk to APIs and databases directly, it is not limited to a fixed list of shortcuts. It suits processes that involve several tools and a few decisions along the way.",
        },
      ],
    },
    {
      id: "what-we-automate",
      heading: "What we can automate",
      blocks: [
        {
          kind: "list",
          title: "Examples of workflows we build",
          items: [
            "Lead collection from website forms into a sheet, database or CRM",
            "Lead notifications to email, chat or messaging channels",
            "Form-to-email workflows with formatting and routing rules",
            "CRM workflows such as record creation, updates and follow-up reminders",
            "Data synchronisation between two systems that do not talk to each other",
            "Notifications and alerts based on conditions or thresholds",
            "Content workflows for scheduling, distribution and internal review",
            "Reporting workflows that assemble data and send a summary on a schedule",
            "API-based workflows that call and combine external services",
            "Business process automation for internal, repeatable procedures",
          ],
        },
        {
          kind: "callout",
          title: "Scoped to the process",
          text: "These are examples, not a promise that every process in a business can be automated. We look at the process first and say honestly which parts are worth automating.",
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How an automation works",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Trigger",
              text: "A form submission, webhook, schedule or change in a connected system starts the workflow.",
            },
            {
              title: "Data collection",
              text: "The workflow gathers the relevant data from the trigger and any connected sources.",
            },
            {
              title: "Processing",
              text: "Data is cleaned, formatted, validated or combined so the next steps can use it.",
            },
            {
              title: "Decision",
              text: "Conditions decide which path to follow, so different cases are handled differently.",
            },
            {
              title: "Action",
              text: "Records are created or updated, messages sent, files generated or APIs called.",
            },
            {
              title: "Notification / storage",
              text: "The result is stored and the right people are informed, including when something fails.",
            },
          ],
        },
      ],
    },
    {
      id: "capabilities",
      heading: "Capabilities we work with",
      blocks: [
        {
          kind: "list",
          items: [
            "Workflow automation across multiple steps and branches",
            "API integrations with services that expose an interface",
            "Webhooks for receiving events from other applications",
            "Data processing: mapping, formatting, filtering and transformation",
            "Conditional workflows that respond differently to different inputs",
            "Multi-step workflows that carry data through a longer process",
            "Application integrations between the tools your team already uses",
          ],
        },
      ],
    },
    {
      id: "benefits",
      heading: "Business benefits",
      blocks: [
        {
          kind: "list",
          items: [
            "Reduce repetitive manual work such as copying data between systems",
            "Improve consistency, because the same steps run the same way every time",
            "Connect tools that were never designed to work together",
            "Save operational time on routine coordination and follow-ups",
            "Reduce manual data transfer, and the errors that come with it",
            "Create repeatable processes that do not depend on one person remembering them",
          ],
        },
      ],
    },
    {
      id: "limitations",
      heading: "Considerations and limitations",
      blocks: [
        {
          kind: "paragraph",
          text: "Automation removes repetitive work; it does not remove responsibility for the process. A workflow that is not monitored will eventually fail quietly when an API changes or a credential expires.",
        },
        {
          kind: "list",
          items: [
            "Correct workflow design matters more than the number of automations",
            "Testing with real data before the workflow handles anything important",
            "Monitoring, so failures are noticed rather than discovered weeks later",
            "Error handling and retries for steps that depend on external services",
            "Maintenance when connected applications change their APIs or plans",
            "Secure credential management and least-privilege access for each connection",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is n8n?",
      answer:
        "n8n is a workflow automation platform that connects applications, APIs, databases and services, so a sequence of steps can run automatically from a trigger such as a form submission or a schedule.",
    },
    {
      question: "What types of business workflows can be automated?",
      answer:
        "Common examples include lead collection and notification, form-to-email routing, CRM updates, data synchronisation between systems, scheduled reporting and other repeatable internal processes.",
    },
    {
      question: "Can n8n connect different applications?",
      answer:
        "Yes. n8n connects applications through their available integrations, and through generic HTTP and webhook steps when a service exposes an API.",
    },
    {
      question: "Can n8n work with APIs?",
      answer:
        "Yes. Workflows can call external APIs, receive webhooks, send and transform JSON, and pass the results into later steps.",
    },
    {
      question: "Do automated workflows need maintenance?",
      answer:
        "Yes. Connected services change, credentials expire and business rules evolve, so workflows need monitoring and periodic updates to keep running correctly.",
    },
    {
      question: "Will automation replace our staff?",
      answer:
        "That is not how we position it. Automation is best used for repetitive, rule-based steps so that people can spend their time on work that needs judgement.",
    },
    {
      question: "What happens if a workflow fails?",
      answer:
        "We build error handling into workflows so failures are logged and notified rather than silent, and where appropriate the step is retried or queued for manual review.",
    },
    {
      question: "Can you automate a process we have not documented?",
      answer:
        "We start by mapping the process with your team. Documenting the steps is part of the work, because an unclear process cannot be automated reliably.",
    },
    {
      question: "How are credentials and data handled?",
      answer:
        "Credentials are stored in the platform's credential store rather than inside workflows, access is limited to what each connection needs, and we agree with you what data a workflow is allowed to move.",
    },
    {
      question: "Can n8n work together with AI agents?",
      answer:
        "Yes. A common pattern is an AI agent interpreting a request and an n8n workflow carrying out the resulting actions in your connected applications.",
    },
  ],
};

export const aiAgentDevelopment: PageContent = {
  slug: "/automation-ai-agents/ai-agent-development",
  title: "AI Agent Development Services | AVR Web Consulting",
  h1: "Build AI agents for smarter business workflows",
  description:
    "AI agent development by AVR Web Consulting: design AI-powered agents that assist with business tasks, information processing and connected workflows, with human oversight.",
  eyebrow: "AI Agent Development",
  serviceName: "AI Agent Development",
  answer:
    "An AI agent is a software system that interprets a task, uses the tools or information available to it, makes decisions inside defined boundaries and carries out actions according to its configuration. AVR Web Consulting builds focused agents for defined business processes, with access controls, logging and human oversight where decisions matter.",
  hero: {
    image: "/images/ai-agent-concepts-diagram.webp",
    imageAlt: "AI Agent Development Services | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Scope", value: "Defined tasks" },
    { label: "Connects to", value: "Tools & workflows" },
    { label: "Controls", value: "Permissions & logging" },
    { label: "Oversight", value: "Human in the loop" },
  ],
  breadcrumb: [
    ...autoBase,
    crumb("AI Agent Development", "/automation-ai-agents/ai-agent-development"),
  ],
  related: [
    { label: "n8n automation", to: "/automation-ai-agents/n8n-automation" },
    { label: "AI SEO services", to: "/ai-seo" },
    {
      label: "Full-stack web development",
      to: "/web-design-development/full-stack-web-development",
    },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for AI Agent Development Services",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "what-is-an-ai-agent",
      heading: "What is an AI agent?",
      blocks: [
        {
          kind: "paragraph",
          text: "An AI agent is a software system designed to interpret a task, use available tools or information, make decisions within defined boundaries and execute actions according to its configuration. In practice that means it can read a request, look up what it needs, choose from a limited set of permitted actions and report back.",
        },
        {
          kind: "paragraph",
          text: "The useful ones are narrow. An agent with a clear job, a clear set of tools and clear limits is far more dependable than one asked to handle anything.",
        },
      ],
    },
    {
      id: "what-we-build",
      heading: "What we can build",
      blocks: [
        {
          kind: "list",
          items: [
            "Customer support assistants that answer from your own approved content",
            "Lead qualification agents that ask defined questions and route enquiries",
            "Internal knowledge assistants for policies, documentation and process questions",
            "Data-processing agents that summarise, classify or extract structured information",
            "Workflow agents that trigger and follow up on connected processes",
            "Research assistants that gather and organise information for review",
            "Business task assistants for repetitive, well-defined internal requests",
            "AI-powered workflow systems that combine an agent with automation steps",
          ],
        },
      ],
    },
    {
      id: "agent-workflow",
      heading: "How an AI agent works",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "User / trigger",
              text: "A person asks something, or an event in a connected system starts the agent.",
            },
            {
              title: "Understand task",
              text: "The agent interprets the request against its instructions and boundaries.",
            },
            {
              title: "Retrieve information",
              text: "It looks up the documents, records or data it has been given access to.",
            },
            {
              title: "Use tools",
              text: "It calls the specific tools or APIs it is permitted to use.",
            },
            {
              title: "Perform action",
              text: "It carries out the allowed action, or requests human approval when required.",
            },
            {
              title: "Return result",
              text: "It returns an answer or outcome, and the interaction is logged.",
            },
          ],
        },
      ],
    },
    {
      id: "agents-and-automation",
      heading: "AI agents with automation",
      blocks: [
        {
          kind: "paragraph",
          text: "Agents and workflow automation solve different halves of the same problem. The agent handles interpretation and decision-making; the automation platform reliably carries out the steps. Conceptually the pattern looks like this:",
        },
        {
          kind: "list",
          items: [
            "User request arrives through a form, chat or connected application",
            "The AI agent interprets the request and gathers what it needs",
            "A decision is made within the boundaries the agent has been given",
            "An n8n workflow executes the resulting steps",
            "External applications are updated through their APIs",
            "The result is returned to the user and recorded",
          ],
        },
        {
          kind: "callout",
          title: "Designed per use case",
          text: "This is a conceptual pattern. The actual design depends on your tools, data and how much autonomy is appropriate.",
        },
      ],
    },
    {
      id: "benefits",
      heading: "Benefits",
      blocks: [
        {
          kind: "list",
          items: [
            "Automate repetitive tasks that still need some interpretation",
            "Assist employees by handling first-line questions and lookups",
            "Process information such as long documents, forms or enquiry text",
            "Connect business workflows that currently require manual coordination",
            "Improve operational efficiency on high-volume, low-complexity requests",
            "Create digital assistants scoped to your own content and systems",
          ],
        },
      ],
    },
    {
      id: "limitations",
      heading: "Limitations you should know about",
      blocks: [
        {
          kind: "paragraph",
          text: "AI agents are not autonomous and they are not error-free. We would rather set expectations correctly than sell an idea that fails in production.",
        },
        {
          kind: "list",
          items: [
            "They can make incorrect decisions, particularly on unusual inputs",
            "They can misunderstand instructions that are ambiguous or incomplete",
            "They can produce incorrect information stated confidently",
            "They require monitoring of what they answer and what they do",
            "They require access controls, so an agent can only touch what it should",
            "They require testing against real cases before being trusted",
            "They require human oversight for decisions that carry cost or risk",
          ],
        },
      ],
    },
    {
      id: "security",
      heading: "Security and reliability",
      blocks: [
        {
          kind: "list",
          items: [
            "Access control and least-privilege permissions for every tool an agent can use",
            "Authentication for the interfaces through which the agent is reached",
            "Data protection rules covering what the agent may read, store and send",
            "Logging of requests, decisions and actions for review",
            "Monitoring so unexpected behaviour is noticed early",
            "Error handling and safe fallbacks when a step fails",
            "Human approval steps before actions that are costly or hard to reverse",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is an AI agent?",
      answer:
        "An AI agent is a software system that interprets a task, uses the tools and information available to it, makes decisions within defined boundaries and performs actions according to its configuration.",
    },
    {
      question: "What can an AI agent do?",
      answer:
        "Typical uses include answering questions from approved content, qualifying leads, summarising or classifying information, and triggering connected workflows. Agents work best when scoped to a defined task.",
    },
    {
      question: "Can AI agents connect with business tools?",
      answer:
        "Yes, through APIs and integrations, limited to the specific tools and permissions you approve for the agent.",
    },
    {
      question: "Can AI agents work with n8n?",
      answer:
        "Yes. A common design has the agent interpret the request and decide what should happen, while an n8n workflow reliably executes the steps in your connected applications.",
    },
    {
      question: "Do AI agents require human monitoring?",
      answer:
        "Yes. Agents can misunderstand instructions or produce incorrect information, so monitoring, logging and human approval for important actions are part of a responsible setup.",
    },
    {
      question: "Are AI agents fully autonomous?",
      answer:
        "No. We build agents with defined boundaries and permitted actions, and we recommend human approval for anything costly, sensitive or hard to reverse.",
    },
    {
      question: "Can an agent answer only from our own content?",
      answer:
        "Yes. Agents can be restricted to a defined knowledge source, which reduces the chance of answers being invented and keeps responses consistent with your documentation.",
    },
    {
      question: "How do you keep our data safe?",
      answer:
        "Through least-privilege access, authentication, agreed rules about what data the agent may read or send, and logging of what the agent did. We do not claim any compliance certification we do not hold.",
    },
    {
      question: "How long does it take to build an agent?",
      answer:
        "It depends on the scope, the systems involved and how much testing the use case requires. We define the task and boundaries first, then give a timeline.",
    },
    {
      question: "What happens when the agent gets something wrong?",
      answer:
        "Interactions are logged so mistakes can be reviewed, instructions and boundaries are adjusted, and steps that carry real consequences are placed behind human approval.",
    },
  ],
};

export const developmentAutomationPages = [
  fullStackDevelopment,
  vibeCoding,
  n8nAutomation,
  aiAgentDevelopment,
];
