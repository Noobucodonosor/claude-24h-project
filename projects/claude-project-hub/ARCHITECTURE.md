# 🏗️ Claude Project Hub - System Architecture

> **Complete architectural design for agentic AI-powered project management system**

**Version**: 2.0 (Agentic Architecture)  
**Last Updated**: 2025-10-01  
**Status**: Design Phase → Implementation Starting

---

## 🎯 VISION STATEMENT

**Claude Project Hub is not a project manager - it's an autonomous AI ecosystem that learns, automates, and evolves with you.**

### Core Principles

1. **Agentic First**: System executes operations autonomously based on context
2. **Plugin Architecture**: Components reusable across all projects (cascading features)
3. **Intelligence Layer**: System learns from usage and predicts next actions
4. **Mobile Native**: iPhone-first design, 5G-optimized PWA
5. **Cloud Native**: Zero local filesystem, GitHub as single source of truth
6. **Context Aware**: Deep integration with PROJECT.md for intelligent automation

---

## 📐 SYSTEM ARCHITECTURE OVERVIEW

### Layer Structure

**1. User Interface Layer**
- Web App (React)
- Mobile PWA (iPhone)
- CLI Tool (Optional)

**2. API Gateway Layer**
- Vercel Edge Functions (Global CDN)
- Authentication & Authorization
- Rate Limiting & Caching

**3. Core Agentic Layer**
- **Agent Orchestrator** (Langchain)
  - Context Builder (PROJECT.md → Agent Context)
  - Task Planner (Break down user intent)
  - Execution Engine (Run autonomous operations)
  - Memory System (Session persistence)
- **Claude API Integration** (Anthropic SDK)
  - Streaming responses
  - Context optimization (200K token management)
  - Artifact extraction

**4. Plugin System Layer**
- PDF Parser Plugin
- Notifier Plugin
- Git Manager Plugin
- Scheduler Plugin
- Analytics Plugin
- Custom Plugins...

**5. Workflow Automation Layer**
- n8n Workflow Engine (Self-hosted)
- Task Queue (BullMQ + Redis)
- Event-driven workflows

**6. Intelligence Layer**
- Usage Analytics & Learning
- Pattern detection
- Predictive suggestions
- Context optimization

**7. Data Layer**
- **GitHub** (Source of truth - PROJECT.md files)
- **Supabase** (Cloud DB - sessions, analytics)
- **IndexedDB** (Local cache - offline PWA)

**8. External Integrations**
- Push APIs (Notifications)
- Email (SendGrid)
- Slack (Optional)

---

## 🧩 CORE COMPONENTS

### 1. Agent Orchestrator (Langchain-based)

**Purpose**: Central intelligence that interprets user intent and executes autonomous operations

**Key Responsibilities**:
- Parse PROJECT.md files and build agent context
- Understand user commands (natural language → actions)
- Plan multi-step operations
- Execute tasks via plugin system
- Maintain conversation memory across sessions

**Technology Stack**:
```typescript
// Core
- LangChain.js (agent framework)
- Claude API (Anthropic SDK)
- Vercel AI SDK (streaming helpers)

// Memory
- Upstash Redis (serverless KV store)
- IndexedDB (client-side persistence)

// Context Management
- tiktoken (token counting)
- Custom PROJECT.md parser
```

**Agent Types**:
1. **Context Agent**: Loads and optimizes PROJECT.md context
2. **Task Agent**: Breaks down complex requests into steps
3. **Execution Agent**: Runs operations via plugins
4. **Learning Agent**: Analyzes usage patterns, suggests improvements

**Example Flow**:
```
User: "Start working on MTG project"
    ↓
Context Agent: Fetches mtg-webapp/PROJECT.md from GitHub
    ↓
Task Agent: Plans session (load context → suggest next steps)
    ↓
Execution Agent: Prepares Claude with optimized context
    ↓
User sees: Instant project load + intelligent suggestions
```

---

### 2. Plugin System Architecture

**Design Pattern**: Registry + Factory + Dependency Injection

**Plugin Structure**:
```typescript
interface Plugin {
  id: string;
  name: string;
  version: string;
  
  // Lifecycle
  init(): Promise<void>;
  execute(context: PluginContext): Promise<PluginResult>;
  cleanup(): Promise<void>;
  
  // Dependencies
  dependencies?: string[];
  config: PluginConfig;
}
```

**Core Plugins (Phase 1-2)**:

**PDF Processor Plugin**
- Extract text from PDFs
- Send to Claude for summarization
- Generate structured output (markdown/JSON)
- Used by: università, mtg-webapp, cucina-vegana

**Notification Manager Plugin**
- Push notifications (web + mobile)
- Email notifications
- Slack messages
- Custom webhook triggers
- Used by: all projects

**GitHub Auto-Committer Plugin**
- Auto-commit PROJECT.md updates
- Create branches for experiments
- Generate commit messages via Claude
- Used by: all projects

**Plugin Installation Flow**:
```
1. User discovers plugin in marketplace UI
2. Click "Install" → Plugin downloaded
3. Dependencies resolved automatically
4. Plugin initialized with project config
5. Plugin available in project context menu
6. Usage tracked for analytics
```

**Cascading Features Example**:
```
Scenario: Develop "Scheduler" plugin for Università
    ↓
Test with Università project (study sessions)
    ↓
Realize MTG needs same feature (tournament scheduling)
    ↓
Install Scheduler in MTG project → Works out-of-box
    ↓
Later: Cucina uses it for meal prep scheduling
    ↓
Plugin validated across 3 different domains
```

---

### 3. Workflow Automation Engine (n8n)

**Why n8n**:
- Self-hosted (data privacy)
- Visual workflow builder (no code for simple flows)
- 300+ pre-built integrations
- Webhook support
- Error handling + retry logic built-in

**Deployment**:
```bash
docker run -d --name n8n -p 5678:5678 n8nio/n8n
```

**Integration with Hub**:
```typescript
// Hub triggers n8n workflow via webhook
await fetch('http://localhost:5678/webhook/process-pdf', {
  method: 'POST',
  body: JSON.stringify({
    projectId: 'università',
    pdfUrl: 'https://...',
    action: 'summarize'
  })
});

// n8n workflow:
// 1. Download PDF
// 2. Extract text → Send to Claude
// 3. Save summary to GitHub
// 4. Trigger notification
// 5. Update PROJECT.md progress
```

**Example Workflows**:

**Università: "Prepare for Exam"**
```
Trigger: User clicks "Prepare for Exam: Fisica 2"
1. Gather all lecture notes (GitHub API)
2. Send to Claude for comprehensive summary
3. Generate flashcards (Anki format)
4. Create study schedule (spaced repetition)
5. Send push notification: "Study plan ready!"

Result: 1 click → full exam prep automated
```

**MTG WebApp: "Generate & Test Deck"**
```
Trigger: User provides collection CSV
1. Parse collection → send to Claude
2. Generate 3 deck options
3. Simulate matches (vs meta decks)
4. Rank decks by win rate
5. Generate deck PDF + sideboard guide
6. Notify user with results
```

---

### 4. Intelligence Layer

**Purpose**: System that learns from usage and becomes smarter over time

**Components**:

**Usage Analytics**
```typescript
interface UsageEvent {
  userId: string;
  projectId: string;
  action: string;
  timestamp: Date;
  context: {
    timeOfDay: string;
    dayOfWeek: string;
    sessionDuration: number;
    pluginsUsed: string[];
  };
}
```

**Tracked Metrics**:
- Most used projects
- Common action sequences
- Peak usage times
- Plugin popularity
- Context loading times
- Claude API token usage

**Predictive Suggestions**
```typescript
// After 1 month of usage, system detects patterns

Pattern: Every Sunday evening user works on Università
Suggestion: "Want to auto-open Università project on Sundays?"

Pattern: User always uses PDF Processor → Notifier
Suggestion: "Create workflow to chain these automatically?"

Pattern: MTG work correlates with weekends
Suggestion: "Schedule MTG notifications for Saturdays?"
```

**Context Optimization**
```typescript
// Smart context builder learns which sections of PROJECT.md
// are most relevant for different task types

Task: "Generate code"
Optimized Context: Load STACK + CURRENT_PHASE + SESSION_HANDOFF
Skip: LOG, RESOURCES (saves 40% tokens)

Task: "Review progress"
Optimized Context: Load PROGRESS + LOG + DELIVERABLES
Skip: STACK details (saves 30% tokens)

Result: Faster responses + lower API costs
```

---

### 5. Data Layer Architecture

**Cloud-First Storage Strategy**:

**Tier 1: GitHub (Source of Truth)**
```
projects/
  mtg-webapp/
    PROJECT.md          ← Single source of truth
    deliverables/
      code/             ← Generated code auto-committed
```

**Read/Write Operations**: Via Octokit (GitHub API)  
**Rate Limit**: 5000 req/hour (authenticated)

**Code Commit Flow**:
```typescript
// When user clicks "Commit to GitHub"
1. Check if file exists (GET /repos/.../contents/path)
2. If exists: use existing SHA for update
3. If new: create file
4. Commit with auto-generated message
5. Return commit URL
```

**Tier 2: Supabase (Session & Analytics)**
```sql
-- User sessions (cloud-synced)
CREATE TABLE sessions (
  id UUID PRIMARY KEY,
  user_id UUID,
  project_id TEXT,
  started_at TIMESTAMP,
  context_snapshot JSONB,
  conversation_history JSONB[]
);

-- Claude API usage tracking
CREATE TABLE api_usage (
  id UUID PRIMARY KEY,
  user_id UUID,
  month TEXT,
  tokens_used INTEGER,
  cost_usd DECIMAL
);
```

**Budget Protection**:
```typescript
// Check every 6h via Vercel Cron
if (monthlySpend > 100) showWarning();
if (monthlySpend > 150) disableAPI();
```

**Tier 3: Browser Session Cache (Temporary)**
```typescript
// In-memory only, NO IndexedDB persistence
const sessionCache = {
  conversationBuffer: [],    // Last 10 messages
  projectList: null,          // Cached 1 hour
  apiResponses: new Map()     // Dedupe, 5min TTL
};

// Clears on: page refresh, app close, timeout (30min)
```

**Connection Handling**:
```typescript
if (navigator.onLine === false) {
  showBanner("⚠️ Offline - Reconnecting...");
  queueWrites(); // Auto-retry when online
}
```

---

## 📱 iOS PWA CONSTRAINTS

### Known Limitations
- **Storage**: 50MB quota (iOS clears if exceeded)
- **Notifications**: ❌ NO push on iOS Safari → Email fallback
- **Background Sync**: Only if app opened weekly
- **Session Persistence**: iOS may kill PWA after inactivity

### Mitigation Strategy
- Design for email notifications (iOS)
- Compress PROJECT.md contexts (gzip)
- Warn user if >45MB cached data
- Auto-save to Supabase every 30s

---

## 🔐 SECURITY ARCHITECTURE

### Authentication & Authorization
**Auth Provider**: Supabase Auth (GitHub OAuth)

```typescript
// User flow
1. User signs in with GitHub
2. Supabase creates JWT token
3. Token stored in httpOnly cookie
4. Every API call validates token
5. GitHub permissions inherited
```

### API Security
**Rate Limiting** (Vercel Edge Config):
```typescript
const limits = {
  claude_api: "100 req/hour",
  github_api: "5000 req/hour",
  plugin_execution: "50 req/hour"
};
```

**Input Validation**:
```typescript
import { z } from 'zod';

const ProjectInputSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500)
});
```

**Secrets Management**:
```bash
# Environment variables (Vercel)
ANTHROPIC_API_KEY=sk-ant-...
GITHUB_TOKEN=ghp_...
SUPABASE_URL=https://...

# Never exposed to client
```

---

## 📱 PWA ARCHITECTURE

### Service Worker Strategy

```typescript
import { precacheAndRoute } from 'workbox-precaching';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';

// Precache static assets
precacheAndRoute(self.__WB_MANIFEST);

// Cache-first for assets
registerRoute(/\.(?:js|css|png|jpg|svg)$/, new CacheFirst());

// Network-first for API calls (with fallback)
registerRoute(/\/api\/.*/, new NetworkFirst({
  networkTimeoutSeconds: 3
}));

// Background sync for offline operations
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-operations') {
    event.waitUntil(syncPendingOperations());
  }
});
```

### Offline Capabilities

**Works Offline**:
- ✅ View cached projects
- ✅ Read conversation history
- ✅ Edit PROJECT.md (queued for sync)
- ✅ Browse plugin marketplace (cached)

**Requires Online**:
- ❌ Claude API calls (no offline LLM in V1.0)
- ❌ GitHub commits (queued)
- ❌ Plugin installations (cached after first)

---

## 🚀 DEPLOYMENT ARCHITECTURE

### Production Infrastructure

**Vercel Edge Network**:
- Static assets (React build)
- Edge functions (API routes)
- Automatic HTTPS
- Global CDN

**Vercel Serverless Functions**:
- Node.js runtime
- Auto-scaling (0 → 1000+ concurrent)
- Cold start: ~300ms

**External Services**:
- Supabase (Database + Auth)
- Upstash Redis (Cache)

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy Hub

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: npm test
      - uses: amondnet/vercel-action@v20

# Total time: ~2 minutes
```

---

## 📊 SCALABILITY CONSIDERATIONS

### Current Targets (V1.0)
- **Users**: 1 → 10 → 100
- **Projects per user**: 10-20
- **Concurrent sessions**: 50
- **API calls/day**: ~10,000

### Future Scale (V2.0+)
- **Users**: 1,000 → 10,000
- **Projects per user**: 50+
- **Concurrent sessions**: 1,000+
- **API calls/day**: 1M+

### Scaling Strategy

**Database**: Supabase free → Pro ($25/mo) → Self-hosted PostgreSQL  
**Claude API**: Direct calls → Batching + caching → Local LLM fallback  
**Redis/Cache**: Upstash free → Pro → Self-hosted cluster

---

## 🔧 TECHNOLOGY STACK SUMMARY

### Frontend
```typescript
- React 18 (UI)
- TypeScript (type safety)
- Vite (build tool)
- TailwindCSS (styling)
- Zustand (state)
- React Query (server state)
- Workbox (PWA)
```

### Backend
```typescript
- Vercel Serverless (hosting)
- Node.js 20 (runtime)
- Anthropic SDK (Claude)
- Octokit (GitHub)
- LangChain.js (agents)
- Zod (validation)
```

### Database & Cache
```typescript
- Supabase (PostgreSQL + Auth)
- Upstash Redis (KV store)
- IndexedDB (client storage)
```

### Automation
```typescript
- n8n (workflow engine)
- BullMQ (job queue)
- node-cron (scheduling)
```

### DevOps
```typescript
- GitHub Actions (CI/CD)
- Sentry (error monitoring)
- Vercel Analytics (performance)
```

---

## 📈 PERFORMANCE TARGETS

### Load Times
- **First Load**: <3s (3G)
- **Repeat Load**: <1s (cached)
- **Time to Interactive**: <5s
- **Lighthouse Score**: >90

### API Response Times
- **Claude API**: 2-5s (streaming)
- **GitHub API**: 100-500ms
- **Database**: <100ms
- **Plugin execution**: <2s

### Resource Usage
- **Bundle Size**: <500KB (gzipped)
- **Memory**: <100MB (browser)
- **Battery**: Minimal impact (PWA optimized)

---

## 🎯 ARCHITECTURE VALIDATION CHECKLIST

Before implementation:

- [ ] **Scalability**: Can handle 10x users without refactor?
- [ ] **Security**: All sensitive data encrypted + validated?
- [ ] **Reliability**: Graceful degradation when services fail?
- [ ] **Performance**: Meets all targets on slow connections?
- [ ] **Maintainability**: Clear separation of concerns?
- [ ] **Extensibility**: Easy to add plugins/features?
- [ ] **Cost**: Stays within budget at projected scale?
- [ ] **UX**: Feels fast and native on iPhone?

---

## 🚀 IMPLEMENTATION PHASES

This architecture will be built in 6 phases:

**Phase 0**: Foundation (architecture + skeleton) ← **NOW**  
**Phase 1**: Core Agentic System (Langchain + Claude)  
**Phase 2**: Plugin Architecture (cascading features)  
**Phase 3**: Workflow Automation (n8n integration)  
**Phase 4**: Intelligence Layer (analytics + learning)  
**Phase 5**: PWA Polish (mobile optimization)  
**Phase 6**: Production Hardening (monitoring + docs)

---

## 📚 REFERENCES

### Technical Documentation
- **LangChain**: https://js.langchain.com/docs/
- **Anthropic API**: https://docs.anthropic.com/
- **n8n**: https://docs.n8n.io/
- **Vercel**: https://vercel.com/docs
- **Supabase**: https://supabase.com/docs

### Architecture Patterns
- **Hexagonal Architecture**: Ports & Adapters for plugins
- **Event-Driven Architecture**: For workflow automation
- **CQRS**: Command Query Responsibility Segregation

---

<div align="center">

**🏗️ ARCHITECTURE v2.0**

*Agentic AI System for Autonomous Project Management*

**Status**: Design Complete → Implementation Starting  
**Next**: Phase 0 - Foundation Setup

---

*Built with intelligence, designed for evolution*

</div>