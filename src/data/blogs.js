import sessionBanner from './articleImages/session_banner.png'
import dockerBanner from './articleImages/docker_banner.png'
import linkedinBanner from './articleImages/linkedin_banner_v4.png'

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
    title: 'Docker Bloated Images, Slow Deploys: How I Fixed It',
    slug: 'docker-bloated-images-slow-deploys-how-i-fixed-it',
    excerpt:
      'A real-world engineering walkthrough on optimizing Docker container sizes from 1.2GB down to 120MB, multi-stage builds, and speeding up CI/CD deployments.',
    category: 'Performance',
    date: 'Jul 2026',
    readTime: '5 min read',
    featured: false,
    externalUrl: 'https://medium.com/@abdulrehmantech.me/docker-bloated-images-slow-deploys-how-i-fixed-it-f595780e6eae',
    tags: ['Docker', 'DevOps', 'CI/CD', 'Optimization'],
    image: dockerBanner,
    content: `
### The Problem: Giant Docker Images & Slow CI/CD

Bloated container images consume excessive storage, strain network bandwidth during pulls, and drastically slow down deployment pipelines.

In this deep dive, learn how we shrank our production Docker image by over 90% (from 1.2GB to 120MB) using multi-stage builds, alpine base images, and clean caching techniques.
    `,
  },
  {
    id: 3,
    title: 'From Heap Crashes to a Live Multi-Vendor App: A DevOps Case Study',
    slug: 'from-heap-crashes-to-live-multi-vendor-app-aws-devops',
    excerpt:
      'A complete DevOps case study on debugging memory leaks, resolving Node.js heap crashes, and deploying a scalable MERN stack application to AWS EC2.',
    category: 'Engineering',
    date: 'Jun 2026',
    readTime: '7 min read',
    featured: false,
    externalUrl: 'https://medium.com/@abdulrehmantech.me/from-heap-crashes-to-a-live-multi-vendor-app-a-devops-case-study-on-deploying-a-mern-stack-to-aws-d67ad3798d4c',
    tags: ['AWS', 'DevOps', 'MERN Stack', 'Node.js'],
    image: linkedinBanner,
    content: `
### DevOps & Production Engineering Case Study

Deploying a complex multi-vendor application to cloud infrastructure comes with unexpected hurdles — from memory constraints causing process kills to reverse proxy configuration headaches.

This engineering case study documents the end-to-end journey of diagnosing heap limit issues, configuring system swap, containerizing workloads, and orchestrating stable deployments on AWS.
    `,
  },
]
