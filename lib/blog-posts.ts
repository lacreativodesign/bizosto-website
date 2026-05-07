export type BlogSection =
  | { type: "p"; content: string }
  | { type: "h2"; content: string }
  | { type: "ul"; items: string[] }
  | { type: "blockquote"; content: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-signs-your-service-business-has-outgrown-its-tools",
    title: "The 5 Signs Your Service Business Has Outgrown Its Current Tools",
    date: "2026-05-01",
    category: "Operations",
    readTime: "5 min read",
    excerpt:
      "Most service businesses don't outgrow their tools overnight. It happens gradually — until one day the cracks are everywhere and the workarounds are costing more than the tools themselves.",
    sections: [
      {
        type: "p",
        content:
          "Most service businesses don't outgrow their tools overnight. It happens gradually. First you add a spreadsheet to track something the CRM can't handle. Then a shared Google Doc to bridge the gap between sales and delivery. Then a Slack channel for status updates nobody actually reads. Before long, you have a stack of seven tools and none of them talk to each other.",
      },
      {
        type: "p",
        content:
          "Here are five clear signs it's time to consolidate — and what it costs to ignore them.",
      },
      { type: "h2", content: "1. Your team asks 'where does this live?' more than once a day" },
      {
        type: "p",
        content:
          "When information is scattered across tools, finding it becomes a job in itself. Project notes in Notion. Client emails in Gmail. Invoices in QuickBooks. Change requests in Slack. If your team spends meaningful time hunting for context that should be at their fingertips, the tools are failing you — not the other way around.",
      },
      { type: "h2", content: "2. Handoffs between departments require a meeting" },
      {
        type: "p",
        content:
          "When sales closes a deal, how does the delivery team get briefed? If the answer involves a manual handoff — an email, a call, a copy-paste into a new system — you're burning time and introducing error at every transition. A properly integrated system makes handoffs automatic. Information follows the work.",
      },
      { type: "h2", content: "3. Your finance numbers are always slightly wrong" },
      {
        type: "p",
        content:
          "Invoicing from one system, tracking expenses in another, running payroll in a third. Each tool is accurate in isolation — but the consolidated picture is always off by something. Revenue is understated. Margins are guesswork. Tax prep is painful. When finance is disconnected from delivery, you're always working from incomplete data.",
      },
      { type: "h2", content: "4. You find out about problems too late" },
      {
        type: "p",
        content:
          "A project went over budget three weeks ago. A client is unhappy with delivery but nobody flagged it. An invoice is 60 days overdue and finance just noticed. Disconnected tools mean disconnected visibility — and by the time a problem surfaces in your dashboard, it's already cost you money or a relationship.",
      },
      { type: "h2", content: "5. Onboarding a new team member takes more than a week" },
      {
        type: "p",
        content:
          "If getting someone up to speed requires training across five different tools, access requests across multiple platforms, and a tribal knowledge transfer from whoever remembers how it all works — your operational complexity has exceeded your team's bandwidth. New hires should be productive in days, not weeks.",
      },
      {
        type: "blockquote",
        content:
          "The cost of disconnected tools isn't just the subscription fees. It's the meetings to align them, the errors from re-entering data, and the decisions made on incomplete information.",
      },
      {
        type: "p",
        content:
          "If two or more of these apply to your business, the problem isn't your team — it's your tools. The right system doesn't just organise information. It makes the right information available to the right person at the right moment, automatically.",
      },
    ],
  },
  {
    slug: "hidden-cost-of-disconnected-tools",
    title: "The Hidden Cost of Running Your Business on 6 Different Tools",
    date: "2026-04-24",
    category: "Operations",
    readTime: "6 min read",
    excerpt:
      "The monthly subscription bill is the visible cost. The invisible cost — the hours lost to switching, syncing, and searching — is almost always larger.",
    sections: [
      {
        type: "p",
        content:
          "When service businesses calculate what their tools cost, they look at the subscription line items. CRM: $120/month. Project management: $80/month. Accounting: $60/month. Chat: $40/month. Total: roughly $300-500/month. That seems manageable.",
      },
      {
        type: "p",
        content:
          "What they don't calculate is the invisible cost — the hours every person on the team spends switching between tools, manually syncing information, re-entering data, and trying to get a clear picture of what's actually happening. That cost is almost always larger than the subscriptions.",
      },
      { type: "h2", content: "The context-switching tax" },
      {
        type: "p",
        content:
          "Research consistently shows that switching between applications costs 20-40 minutes of productive focus per day per person. For a 10-person team, that's 200-400 minutes — 3 to 7 hours — lost every single day to the overhead of moving between tools. At an average billing rate of $75/hour, that's $225 to $525 per day in unbillable lost time. Per month: $4,500 to $10,500.",
      },
      { type: "h2", content: "The data re-entry problem" },
      {
        type: "p",
        content:
          "Every time a lead moves from your CRM to your project management tool, someone enters data twice. Every time an invoice is created from a project, someone copies information from one system to another. These micro-tasks feel trivial individually. Collectively, they consume hours per week and introduce errors that show up later as billing disputes, missed deliverables, or incorrect financial reports.",
      },
      { type: "h2", content: "The visibility gap" },
      {
        type: "p",
        content:
          "When your pipeline is in one tool and your project status is in another, you can't see the connection between them. You don't know which deals in your pipeline have unrealistic timelines given your current capacity. You don't know which clients are at risk of churning based on delivery performance. You're managing in silos and hoping the pieces fit together.",
      },
      { type: "h2", content: "What integration actually costs" },
      {
        type: "ul",
        items: [
          "Zapier or Make subscriptions to connect tools that don't natively integrate",
          "Developer time to maintain those integrations when APIs change",
          "Data cleaning when automations break and duplicate or corrupt records",
          "Management time spent resolving conflicting information across systems",
        ],
      },
      {
        type: "p",
        content:
          "The honest calculation: most service businesses running on five or more disconnected tools are spending more on the overhead of those tools than the tools themselves cost. Consolidation isn't just cleaner — it's cheaper when you account for the full cost of fragmentation.",
      },
    ],
  },
  {
    slug: "ai-agents-for-service-businesses-2026",
    title: "AI Agents for Service Businesses: What's Real in 2026 and What's Hype",
    date: "2026-04-17",
    category: "AI",
    readTime: "7 min read",
    excerpt:
      "Every software company now claims AI capabilities. Most of what's being marketed is a chatbot with a new label. Here's how to tell the difference — and what genuine AI automation looks like in a service business context.",
    sections: [
      {
        type: "p",
        content:
          "In 2026, every software platform has added 'AI' to its feature list. Most of what's been shipped is a chatbot interface bolted onto existing functionality — asking questions and getting answers, but not actually changing how work gets done. Real AI automation in a service business context is different. It reads live operational data, executes tasks, and produces outputs that save real time.",
      },
      { type: "h2", content: "What AI agents actually are" },
      {
        type: "p",
        content:
          "An AI agent isn't a chat interface. It's a system that receives a task, decides which tools to call, executes those calls, and produces a structured output — without needing you to prompt it step by step. The key difference: an agent acts, not just responds.",
      },
      {
        type: "p",
        content:
          "In a service business, that means an agent can read your live CRM data, check your invoice records, look at your project statuses, and produce a consolidated summary — in seconds, not meetings.",
      },
      { type: "h2", content: "What's hype" },
      {
        type: "ul",
        items: [
          "AI that generates content but doesn't connect to your actual business data",
          "Chatbots that answer questions about your software but can't take action inside it",
          "AI summaries of documents you've manually uploaded",
          "'Automation' that still requires you to review and re-enter every output",
        ],
      },
      { type: "h2", content: "What's real" },
      {
        type: "ul",
        items: [
          "Agents that read live data from your CRM, finance, and project modules",
          "Automated daily summaries with specific numbers — not generic insights",
          "Approval-gated write actions — agent drafts, human approves, system executes",
          "Tool-calling loops that gather multiple data points before producing output",
        ],
      },
      { type: "h2", content: "The BYOK model: why it matters" },
      {
        type: "p",
        content:
          "One of the most important distinctions in enterprise AI tooling is whether the vendor runs the AI on your behalf (adding their markup and controlling your data) or whether you bring your own API key. The BYOK model means your AI requests go directly to OpenAI or Anthropic from your account — no intermediary, no markup, full data control. For service businesses managing sensitive client data, this isn't optional.",
      },
      {
        type: "blockquote",
        content:
          "The question for 2026 isn't whether AI will change how service businesses operate. It's whether the AI in your platform actually connects to your data — or just pretends to.",
      },
      {
        type: "p",
        content:
          "Before evaluating any AI feature in your business software, ask one question: does it read my live operational data, or does it only work with what I manually provide? The answer tells you whether you're looking at genuine automation or an expensive chat interface.",
      },
    ],
  },
  {
    slug: "agency-revenue-leaking-between-projects-and-invoices",
    title: "Why Your Agency Is Leaking Revenue Between Projects and Invoices",
    date: "2026-04-10",
    category: "Finance",
    readTime: "5 min read",
    excerpt:
      "The gap between project completion and invoice delivery is where agency revenue goes to disappear. Most agencies have no idea how much it's costing them.",
    sections: [
      {
        type: "p",
        content:
          "Most agency revenue problems don't happen at the proposal stage. They happen in the gap between work being done and work being invoiced. A project wraps up on Friday. The invoice gets created the following Tuesday. A revision was added at the last minute but wasn't documented. The scope had crept by 15% but nobody tracked it. The invoice goes out for the original amount, and the agency has quietly absorbed three days of additional work.",
      },
      {
        type: "p",
        content:
          "Multiply that across 20 active clients and you have a serious margin problem — and almost no visibility into where it's happening.",
      },
      { type: "h2", content: "The scope creep you're not measuring" },
      {
        type: "p",
        content:
          "Scope creep in agencies typically falls into two categories: the kind that gets caught (formal change requests) and the kind that doesn't (extra rounds of revisions, extended timelines, additional deliverables that 'weren't a big deal'). The first category gets invoiced. The second gets absorbed. Without a system that tracks time against deliverables in real time, the second category is essentially invisible.",
      },
      { type: "h2", content: "The invoicing delay tax" },
      {
        type: "p",
        content:
          "Every day between project completion and invoice delivery is a day that money that's owed to you sits uncollected. For agencies running on 30-day payment terms, a 7-day invoicing delay effectively extends that to 37 days. At scale — say $500K annual revenue — a consistent 7-day delay costs you the equivalent of roughly $9,600 in annual carrying cost.",
      },
      { type: "h2", content: "What the fix looks like" },
      {
        type: "ul",
        items: [
          "Invoice the moment a deliverable is approved — not at the end of the month",
          "Connect project milestones to invoice triggers automatically",
          "Document every out-of-scope request at the time it happens, not during billing",
          "Give finance visibility into project status so they can flag upcoming invoices proactively",
        ],
      },
      {
        type: "p",
        content:
          "The common thread in all of these is that finance needs to be connected to delivery. When invoicing and project management live in separate systems, the information finance needs to bill accurately is always slightly stale. The fix isn't a better invoicing process — it's removing the gap between the two systems entirely.",
      },
      {
        type: "blockquote",
        content:
          "Agencies that invoice within 24 hours of delivery collect 30% faster than those that batch invoice at month-end. The money was always there. The system just wasn't capturing it.",
      },
    ],
  },
  {
    slug: "how-to-build-client-portal-clients-actually-use",
    title: "How to Build a Client Portal Your Clients Will Actually Use",
    date: "2026-04-03",
    category: "Client Experience",
    readTime: "6 min read",
    excerpt:
      "Most client portals fail not because of missing features — but because they add friction instead of removing it. Here's what separates a portal clients ignore from one they check every week.",
    sections: [
      {
        type: "p",
        content:
          "The promise of a client portal is appealing: give clients a single place to see project progress, view invoices, approve deliverables, and communicate — instead of drowning in email threads. The reality for most agencies is that their portal sits unused within a month of launch while clients go back to WhatsApp and Gmail.",
      },
      {
        type: "p",
        content:
          "The reason isn't usually a missing feature. It's friction. Here's what drives adoption and what kills it.",
      },
      { type: "h2", content: "What kills portal adoption" },
      {
        type: "ul",
        items: [
          "Requiring clients to remember yet another password for a tool they only use occasionally",
          "Portals that show information without allowing action — clients can see invoices but can't pay them",
          "Real-time data that's actually 24 hours behind because of manual updates",
          "Cluttered interfaces that show everything at once instead of what's relevant right now",
        ],
      },
      { type: "h2", content: "What drives adoption" },
      {
        type: "ul",
        items: [
          "Magic link login — one click from email, no password required",
          "Actionable data — clients can approve, pay, and comment, not just view",
          "Live project status — automatically updated as your team works, not when someone remembers to update it",
          "Mobile-optimised design — most clients will check from their phone",
        ],
      },
      { type: "h2", content: "The adoption trigger" },
      {
        type: "p",
        content:
          "The most reliable way to get a client using a portal is to remove their alternative. If the invoice is in the portal and can only be paid there, they'll log in. If project updates appear in the portal before anywhere else, they'll check it. If feedback can only be submitted through the portal, they'll use it. Give clients a reason to log in that they can't get elsewhere.",
      },
      { type: "h2", content: "What a well-designed portal actually shows clients" },
      {
        type: "ul",
        items: [
          "Current project status and milestone progress",
          "Outstanding invoices with a pay button",
          "Deliverables awaiting their approval",
          "Files — briefs, assets, final deliverables — organised by project",
          "A simple way to raise a change request or ask a question",
        ],
      },
      {
        type: "p",
        content:
          "Notice what's absent: internal team notes, financial details beyond their own invoices, anything your client doesn't need to act on. A portal that shows clients everything is a portal that helps them focus on nothing.",
      },
    ],
  },
  {
    slug: "erp-vs-project-management-software",
    title: "ERP vs Project Management Software: What Service Businesses Actually Need",
    date: "2026-03-27",
    category: "Operations",
    readTime: "6 min read",
    excerpt:
      "Monday.com and Asana are excellent project management tools. They're not business operating systems. Understanding the difference could save your team thousands of hours a year.",
    sections: [
      {
        type: "p",
        content:
          "When service businesses look for operational software, they typically land on one of two categories: project management tools (Monday.com, Asana, ClickUp) or traditional ERP systems (NetSuite, SAP, Odoo). Most end up choosing a project management tool because it's cheaper, faster to implement, and easier to use. Then they realise it doesn't handle invoicing. Or HR. Or a real CRM. So they add more tools. And the fragmentation begins.",
      },
      { type: "h2", content: "What project management tools do well" },
      {
        type: "ul",
        items: [
          "Task assignment and tracking",
          "Visual project timelines and kanban boards",
          "Team collaboration and comments",
          "Simple workflow automation",
          "Easy adoption — low learning curve for most teams",
        ],
      },
      { type: "h2", content: "What they don't handle" },
      {
        type: "ul",
        items: [
          "CRM and sales pipeline",
          "Invoicing and payment collection",
          "Payroll and HR",
          "Financial reporting and margin tracking",
          "Client portals with payment capability",
          "Role-based access across departments",
        ],
      },
      { type: "h2", content: "What traditional ERP systems do well" },
      {
        type: "p",
        content:
          "Traditional ERP systems (designed for manufacturing and enterprise) handle the financial and operational complexity that project tools miss. They're integrated by design — finance, procurement, HR, and operations all share the same data layer. But they're built for a different type of business. Most weren't designed for service delivery workflows, client portals, or the kind of fast-moving project environment that agencies and consultancies live in.",
      },
      { type: "h2", content: "What service businesses actually need" },
      {
        type: "p",
        content:
          "A service business needs the integration of an ERP — CRM connected to delivery connected to finance connected to HR — but designed around how service businesses operate: leads becoming projects becoming invoices, client portals that replace email threads, approval workflows for discounts and scope changes, and role-based access that keeps sensitive data where it belongs.",
      },
      {
        type: "blockquote",
        content:
          "The question isn't ERP vs project management. It's whether the system you choose was designed for the way your business actually works.",
      },
      {
        type: "p",
        content:
          "The best outcome for a service business isn't the most powerful tool or the simplest tool — it's the tool that was built specifically for their context. That means purpose-built for service delivery, not adapted from manufacturing software or stretched beyond what a task tracker was designed to do.",
      },
    ],
  },
  {
    slug: "operations-stack-killing-agency-margins-2026",
    title: "The Operations Stack That's Killing Agency Margins in 2026",
    date: "2026-03-20",
    category: "Finance",
    readTime: "5 min read",
    excerpt:
      "The average agency spends $600-900/month on software subscriptions. Most can't name all the tools they're paying for. Here's where the margin actually goes.",
    sections: [
      {
        type: "p",
        content:
          "Agency margins have compressed significantly over the past three years. Clients are more price-sensitive. Talent costs have increased. And tool costs — a line item that felt trivial at 5 people — have quietly become a meaningful expense at 15 or 20.",
      },
      {
        type: "p",
        content:
          "A typical 15-person agency in 2026 is running something like this:",
      },
      {
        type: "ul",
        items: [
          "CRM: HubSpot Starter — $90/month",
          "Project management: Monday.com (15 seats) — $195/month",
          "Communication: Slack Pro (15 seats) — $135/month",
          "Accounting: QuickBooks Online — $85/month",
          "E-signature: DocuSign — $45/month",
          "Storage and docs: Google Workspace (15 seats) — $150/month",
          "Time tracking: Harvest — $108/month",
          "Proposals: Proposify — $60/month",
        ],
      },
      {
        type: "p",
        content:
          "Total: $868/month. $10,416/year. That's before integration costs (Zapier, developer time), training, and the management overhead of maintaining eight separate tools.",
      },
      { type: "h2", content: "The hidden cost isn't the subscriptions" },
      {
        type: "p",
        content:
          "The more significant cost is operational: the hours spent moving data between systems, the errors that come from information existing in multiple places, and the management time lost to reconciling conflicting reports from different tools. For a 15-person agency, this conservatively costs 10-15 hours per week in lost productivity across the team — at billing rates of $75-150/hour, that's $750 to $2,250 per week in unbillable overhead.",
      },
      { type: "h2", content: "Where agencies are consolidating" },
      {
        type: "p",
        content:
          "The agencies protecting margins in 2026 are the ones that have reduced their stack to a single platform covering CRM, project delivery, finance, client portal, and HR — and supplemented with only the specialised tools that genuinely can't be replaced. The goal isn't zero tools. It's removing the redundancy and the gaps between the essential ones.",
      },
      {
        type: "blockquote",
        content:
          "The agency that runs on one system spends less on software, loses less to operational overhead, and makes better decisions because everyone is working from the same data.",
      },
    ],
  },
  {
    slug: "how-to-invoice-clients-faster",
    title: "How to Invoice Clients Faster: The Finance-to-Delivery Connection Most Teams Miss",
    date: "2026-03-13",
    category: "Finance",
    readTime: "5 min read",
    excerpt:
      "The fastest invoice is the one that goes out before your client has forgotten the work was done. Here's why most teams invoice late — and the structural fix that changes it.",
    sections: [
      {
        type: "p",
        content:
          "The billing cycle in most service businesses looks like this: work is completed, someone remembers to create an invoice a few days later, it gets reviewed, approved internally, and sent — often a week after the work was delivered. By the time the client receives it, the project feels like history. Payment terms start late. Cash arrives even later.",
      },
      {
        type: "p",
        content:
          "The fix most businesses try is process-based: set a rule that invoices must go out within 24 hours. This works for about two weeks until the next busy period, and then the delays return. The reason is structural, not behavioural — the information finance needs to invoice is locked inside the delivery team's tools.",
      },
      { type: "h2", content: "Why invoices are late: the structural cause" },
      {
        type: "p",
        content:
          "When project status lives in Monday.com and invoices live in QuickBooks, the moment a project is complete there is no automatic trigger to the finance team. Someone from delivery has to notify finance. Finance has to pull the project details, confirm what was delivered, check the original quote, and then create the invoice. That handoff is where the delay happens — not because people are lazy, but because the systems don't communicate.",
      },
      { type: "h2", content: "The connected approach" },
      {
        type: "ul",
        items: [
          "When a project milestone is marked complete, finance is automatically notified",
          "The invoice is pre-populated with the project details, client information, and agreed amount",
          "Finance reviews, approves, and sends — no research required",
          "When the client pays, the payment is automatically matched to the project and the invoice is closed",
        ],
      },
      { type: "h2", content: "The impact on cash flow" },
      {
        type: "p",
        content:
          "A 2024 study of service businesses found that those invoicing within 24 hours of delivery were paid an average of 11 days faster than those invoicing at month-end. On $500K annual revenue with 30-day payment terms, that's a meaningful improvement in working capital — and it requires no change in payment terms, no uncomfortable conversations with clients, and no new finance headcount.",
      },
      {
        type: "blockquote",
        content:
          "The fastest invoice isn't the one with the best template. It's the one that goes out automatically the moment the work is done.",
      },
      {
        type: "p",
        content:
          "If your finance and delivery teams are in separate systems, the handoff will always create delay. The solution isn't a better process — it's removing the gap between the two systems entirely.",
      },
    ],
  },
  {
    slug: "role-based-access-for-growing-agencies",
    title: "What Role-Based Access Really Means for a 20-Person Agency",
    date: "2026-03-06",
    category: "Security",
    readTime: "5 min read",
    excerpt:
      "Everyone gets access to everything is the default state of most agency tools. It's also where data leaks, client conflicts, and team confusion come from.",
    sections: [
      {
        type: "p",
        content:
          "When a team is small, giving everyone access to everything feels efficient. Everyone can see the full picture. There are no bottlenecks around permissions. The downside — that your junior sales rep can see salary data, or that a client-facing account manager can see another client's invoice history — is easy to ignore when the team is five people who all trust each other.",
      },
      {
        type: "p",
        content:
          "At 20 people, this becomes a real problem.",
      },
      { type: "h2", content: "What goes wrong without role-based access" },
      {
        type: "ul",
        items: [
          "Employees see salary or HR data that creates internal friction",
          "Client-facing staff can access other clients' project or financial information",
          "New hires are given access to everything and leave with more than they should",
          "Audit trails don't exist — you can't see who changed what or when",
          "Finance data is accessible to people who don't need it and can't contextualise it",
        ],
      },
      { type: "h2", content: "What a well-implemented access model looks like" },
      {
        type: "p",
        content:
          "In a 20-person agency, you need at least five distinct access levels: executive (sees everything), finance (sees all financial data, limited HR), account management (sees their assigned clients only), production (sees tasks and files, no finance), and client (sees their own projects and invoices only). Anything fewer than this creates either security gaps or unnecessary friction.",
      },
      { type: "h2", content: "The client isolation requirement" },
      {
        type: "p",
        content:
          "The most overlooked aspect of agency access control is client isolation. When multiple clients exist in the same system, the data of Client A must be completely invisible to Client B — including in the client portal. A client logging into your portal should only ever see their own projects, invoices, and files. If your current tool doesn't enforce this at the data layer, you have a liability.",
      },
      { type: "h2", content: "Beyond access: audit trails" },
      {
        type: "p",
        content:
          "Role-based access tells you who can see what. Audit logs tell you what they did with it. For any service business handling sensitive client data, financial records, or confidential HR information, audit trails are not optional. When something goes wrong — a data dispute, an unauthorised change, a billing error — you need to know what happened and who was responsible. That requires a system that logs every action at the record level, not just the login level.",
      },
    ],
  },
  {
    slug: "bizosto-vs-monday-hubspot-quickbooks-cost-comparison",
    title: "Bizosto vs. Monday.com + HubSpot + QuickBooks: A Real Cost Comparison",
    date: "2026-02-27",
    category: "Pricing",
    readTime: "7 min read",
    excerpt:
      "Running three separate tools for project management, CRM, and accounting costs more than most teams realise — in subscriptions, integrations, and operational overhead. Here's the full picture.",
    sections: [
      {
        type: "p",
        content:
          "The most common alternative to a single integrated platform is a combination of specialised tools: Monday.com for project management, HubSpot for CRM, and QuickBooks for accounting. Each of these is excellent at what it does. Together, they create a stack that most 15-person service businesses use — and quietly overpay for.",
      },
      { type: "h2", content: "The subscription cost comparison (15 users)" },
      {
        type: "ul",
        items: [
          "Monday.com Business (15 seats): $195/month",
          "HubSpot Starter CRM Suite (15 seats): $450/month",
          "QuickBooks Online Plus: $85/month",
          "Zapier Professional (to connect them): $49/month",
          "Total: $779/month / $9,348/year",
        ],
      },
      {
        type: "p",
        content:
          "Bizosto Pro (covers all of the above, plus HR, client portal, approvals, and production workflows): $149/month / $1,788/year.",
      },
      { type: "h2", content: "The subscription gap: $7,560/year" },
      {
        type: "p",
        content:
          "That's the straightforward comparison. But the real cost difference is larger because subscriptions are only part of the picture.",
      },
      { type: "h2", content: "Integration maintenance cost" },
      {
        type: "p",
        content:
          "Connecting Monday.com, HubSpot, and QuickBooks requires Zapier workflows that break when APIs change, developer time to fix them, and data quality monitoring to catch errors before they affect clients or financials. A conservative estimate for a 15-person agency: 2-4 hours per month of someone's time. At $75/hour, that's $1,800-3,600/year in integration overhead.",
      },
      { type: "h2", content: "Training and onboarding cost" },
      {
        type: "p",
        content:
          "Every new hire needs to learn three tools instead of one. Most agencies estimate 3-5 additional hours of tool onboarding per new employee when running a multi-tool stack. At 3-4 hires per year, that's 9-20 hours of onboarding time — at manager rates of $75-100/hour, roughly $675-2,000/year.",
      },
      { type: "h2", content: "The full cost comparison" },
      {
        type: "ul",
        items: [
          "Subscriptions (3 tools + Zapier): $9,348/year",
          "Integration maintenance: $1,800-3,600/year",
          "Training overhead: $675-2,000/year",
          "Total 3-tool stack: $11,823-14,948/year",
          "Bizosto Pro: $1,788/year",
          "Difference: $10,035-13,160/year",
        ],
      },
      {
        type: "blockquote",
        content:
          "The comparison isn't three tools vs. one tool. It's three tools plus all the glue that holds them together — versus a system that's already connected by design.",
      },
      {
        type: "p",
        content:
          "The point isn't that Monday, HubSpot, and QuickBooks are bad products — they're not. It's that running three disconnected systems as a substitute for an integrated platform costs significantly more than it appears, and delivers less than it should.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
