import sessionBanner from './articleImages/session_banner.png'

export const blogCategories = ['All', 'Architecture', 'Performance', 'AI & Tools', 'Engineering']

export const blogPosts = [
  {
    id: 1,
    title: 'Mastering System Design & Modern Software Architecture: Practical Technical Insights',
    slug: 'mastering-system-design-software-architecture',
    excerpt:
      'A comprehensive guide and technical deep-dive into system design, microservices, scalable API engineering, and software architecture patterns by Engr. Abdulrehman.',
    category: 'Architecture',
    date: 'Sep 2026',
    readTime: '6 min read',
    featured: true,
    externalUrl: 'https://bit.ly/ArticlesByEngrAbdulrehman',
    tags: ['System Design', 'Architecture', 'Software Engineering', 'APIs'],
    image: sessionBanner,
    content: `
### The Challenge of High-Throughput Systems

When scaling web services to handle tens of thousands of concurrent users, traditional synchronous architectures quickly become a bottleneck. Database connections get exhausted, CPU loops lock up, and response latencies skyrocket.

In this article, we examine the architectural patterns required to maintain **sub-50ms response times** under heavy workloads.

#### Key Strategies Covered:
1. **Multi-layer Caching with Redis**: Moving hot paths out of the relational database and into in-memory key-value stores with smart invalidation policies.
2. **Asynchronous Task Queuing**: Offloading CPU-heavy operations (PDF generation, email notifications, webhooks) to background workers using BullMQ.
3. **Connection Pooling Optimization**: Tuning PostgreSQL and Node.js pool limits to prevent connection starvation.

\`\`\`javascript
// Example: Redis Cache-Aside Pattern
async function getCachedUser(userId) {
  const cacheKey = \`user:\${userId}\`;
  const cached = await redis.get(cacheKey);
  
  if (cached) return JSON.parse(cached);
  
  const user = await db.user.findUnique({ where: { id: userId } });
  await redis.set(cacheKey, JSON.stringify(user), 'EX', 300); // 5 min TTL
  return user;
}
\`\`\`

#### Conclusion
System performance is not about writing faster loops — it is about intelligent data routing and avoiding unnecessary compute work altogether.
    `,
  },
  {
    id: 2,
    title: 'Why Micro-Frontends Fail and When You Should Actually Use Them',
    slug: 'micro-frontends-architectural-tradeoffs',
    excerpt:
      'Exploring the hidden complexities of distributed frontend architectures and why a modular monolith is often the superior choice.',
    category: 'Engineering',
    date: 'Jul 28, 2026',
    readTime: '8 min read',
    featured: false,
    tags: ['Frontend', 'Architecture', 'React', 'Module Federation'],
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    content: `
Micro-frontends have become a popular buzzword in enterprise engineering teams. However, splitting a web frontend into dynamic Module Federation bundles introduces significant operational friction.

#### Common Pitfalls:
- **Dependency Duplication**: Loading multiple versions of React or UI libraries over the wire.
- **Cascading Bundle Loading**: Network waterfalls during route transitions.
- **Fragmented Styling Systems**: Maintaining design tokens across autonomous repos.

#### When to Use Micro-Frontends:
Only adopt micro-frontends when you have **multiple independent engineering squads** who need to deploy code without blocking each other's pipeline. For smaller teams, a clean **Modular Monolith** in Next.js or Vite is significantly easier to maintain.
    `,
  },
  {
    id: 3,
    title: 'Leveraging Local AI Models for Developer Tooling & Automation',
    slug: 'local-ai-models-developer-automation',
    excerpt:
      'How to run quantized LLMs locally with Ollama to automate code reviews, generate documentation, and secure private codebase context.',
    category: 'AI & Tools',
    date: 'Jul 15, 2026',
    readTime: '5 min read',
    featured: false,
    tags: ['AI', 'Ollama', 'Python', 'Developer Tools'],
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    content: `
Cloud LLM APIs are great, but for proprietary codebases, sending raw code to external servers poses privacy and compliance risks.

By hosting quantized 8-bit local models (like Llama 3 or Mistral) on developer workstations or internal servers, engineering teams can build custom automated workflows with zero API cost and 100% data privacy.

#### Use Cases:
- **Automated Pull Request Summaries**
- **Internal API Spec Generator**
- **Offline Code Refactoring Assistant**
    `,
  },
  {
    id: 4,
    title: 'Mastering Database Indexing: B-Trees, GiST, and Query Profiling',
    slug: 'mastering-database-indexing-postgresql',
    excerpt:
      'A practical guide to analyzing PostgreSQL query plans (`EXPLAIN ANALYZE`), choosing index types, and eliminating slow queries.',
    category: 'Performance',
    date: 'Jun 30, 2026',
    readTime: '7 min read',
    featured: false,
    tags: ['PostgreSQL', 'Database', 'SQL', 'Performance'],
    image:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    content: `
Slow database queries are the root cause of 90% of web application performance issues. Adding indexes randomly can degrade write throughput while failing to speed up read queries.

#### Index Types Explained:
1. **B-Tree**: The default choice for equality (\`=\`) and range queries (\`<\`, \`>\`).
2. **GIN (Generalized Inverted Index)**: Essential for full-text search and querying JSONB columns.
3. **GiST / BRIN**: Ideal for geometric data, timestamps, and massive append-only tables.

Always inspect query plans using \`EXPLAIN (ANALYZE, BUFFERS)\` before adding indexes to production databases!
    `,
  },
]
