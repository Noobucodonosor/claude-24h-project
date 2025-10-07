# 🏗️ Claude Project Hub - System Architecture

> **Complete architectural design for Discovery Engine that facilitates recursive exploration of project spaces**

**Version**: 2.1 (Discovery-Focused Architecture)  
**Last Updated**: 2025-10-07  
**Status**: Design Phase → Implementation Starting

---

## 🎯 VISION STATEMENT

**Claude Project Hub è un Discovery Engine che facilita l'esplorazione ricorsiva di spazi progettuali complessi attraverso l'identificazione di convergenze operative cross-progetto, non un semplice project manager.**

### Core Principles

1. **Discovery-First**: Sistema ottimizza per scoperta di connessioni non ovvie, non per efficienza operativa
2. **Graph-Based Context**: Progetti, documenti, interessi rappresentati come grafo semantico dove vicinanza indica applicabilità condivisa
3. **Convergence Identification**: Capacità di rilevare quando soluzioni sviluppate in un progetto sono strutturalmente applicabili ad altri
4. **Recursive Exploration**: Ogni scoperta suggerisce ulteriori direzioni di indagine
5. **Emergent Structure**: Connessioni tra progetti emergono da analisi semantica, non da categorizzazione manuale
6. **Mobile Native**: iPhone-first design, 5G-optimized PWA
7. **Cloud Native**: Zero local filesystem, GitHub as single source of truth

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

**3. Discovery Engine Layer** (Core)
- **Graph Builder** (PROJECT.md → Graph representation)
- **Convergence Detector** (Identify cross-project applicability)
- **Context Optimizer** (Load only relevant nodes)
- **Exploration Suggester** (Propose recursive directions)
- **Claude API Integration** (Anthropic SDK)

**4. Plugin System Layer**
- Plugin Registry (Convergences materialized)
- Plugin Executor
- Dependency Manager
- Hot-reload System

**5. Workflow Automation Layer**
- n8n Workflow Engine (Self-hosted)
- Task Queue (BullMQ + Redis)
- Event-driven workflows

**6. Intelligence Layer**
- Pattern Recognition
- Meta-pattern Discovery
- Usage Analytics
- Convergence Validation

**7. Data Layer**
- **GitHub** (Source of truth - PROJECT.md files)
- **Supabase** (Cloud DB - sessions, analytics, graph cache)
- **Vector Store** (Embeddings for semantic search)
- **IndexedDB** (Local cache - offline PWA)

**8. External Integrations**
- Push APIs (Notifications)
- Email (SendGrid)
- Slack (Optional)

---

## 🧩 CORE COMPONENTS

### 1. Discovery Engine (Core Innovation)

**Purpose**: Central intelligence that identifies relevant nodes in project graph and suggests recursive explorations

**Key Responsibilities**:
- Parse PROJECT.md files and build graph representation
- **Convergence Detection**: Identify when problems in different projects share operational structure
- **Cross-project Suggestions**: Propose explorations connecting apparently distant problems
- **Recursive Traversal**: Enable discoveries to generate new queries
- Maintain conversation memory across sessions

**Technology Stack**:
```typescript
// Core
- LangChain.js (graph traversal, semantic search)
- Claude API (Anthropic SDK - convergence analysis)
- NetworkX or Neo4j (graph database)

// Semantic Analysis  
- OpenAI/Anthropic Embeddings (semantic similarity)
- Supabase pgvector (vector store)

// Context Management
- tiktoken (token counting)
- Smart loading: 5-10K tokens vs 150K (90% reduction)
```

**Discovery Patterns**:

```typescript
// Pattern 1: Direct Query with Cross-Project Discovery
User: "How to implement audio pipeline for MTG?"
    ↓
Discovery Engine: 
  1. Loads MTG PROJECT.md (audio section)
  2. Semantic search identifies related concepts
  3. Discovers: Università (time-series processing), Cucina (scheduling patterns)
    ↓
Output: MTG docs + Università patterns + Cucina scheduling + convergence insight
"Real-time audio processing shares structure with time-series data analysis"

// Pattern 2: Convergence Suggestion (Proactive)
User: Working on Hub notification system
    ↓
Discovery Engine:
  1. Analyzes notification requirements
  2. Searches graph for similar problems solved
  3. Identifies: Università spaced-repetition + Cucina meal-prep reminders
    ↓
Suggests: "These projects share notification structure. Explore for insights?"

// Pattern 3: Recursive Exploration
User: Explores suggested convergence
    ↓
Discovery Engine:
  1. Convergence itself becomes new query
  2. Discovers meta-pattern: "scheduling-under-constraints"
  3. Identifies: Applies to Hub (context), Nautica (routes), Università (study)
    ↓
Suggests: "This is a meta-interest. Want to explore optimization theory?"
```

**Not Just Retrieval**: Sistema non cerca keyword matches ma convergenze strutturali attraverso analisi semantica profonda.

---

### 2. Plugin System as Materialized Convergences

**Design Philosophy**: Plugin non sono utilities per efficienza ma materializzazioni di convergenze operative scoperte

**Core Insight**: Quando sviluppi soluzione per problema in progetto A, sistema analizza se struttura è applicabile a B, C. Se convergenza esiste, suggerisce astrazione in plugin **perché convergenza stessa è insight interessante**.

**Plugin Structure**:
```typescript
interface Plugin {
  id: string;
  name: string;
  version: string;
  
  // Metadata Semantico (Critical)
  operationalDimensions: string[];  // Dimensioni operative indirizzate
  
  discoveredFrom: {
    originalProject: string;
    problem: string;
    date: Date;
  };
  
  appliesTo: {
    project: string;
    useCases: string[];
    validatedBy: 'system' | 'user';
  }[];
  
  // Lifecycle
  init(): Promise<void>;
  execute(context: PluginContext): Promise<PluginResult>;
  cleanup(): Promise<void>;
  
  // Dependencies
  dependencies?: string[];
  config: PluginConfig;
}
```

**Example - PDF Processor Plugin**:
```typescript
{
  id: "pdf-processor",
  name: "PDF → Structured Summary",
  
  operationalDimensions: [
    "extraction-structured-info-from-unstructured",
    "document-understanding",
    "summarization-under-constraints"
  ],
  
  discoveredFrom: {
    originalProject: "università",
    problem: "Process lecture slides efficiently",
    date: "2025-10-15"
  },
  
  appliesTo: [
    {
      project: "università",
      useCases: ["lecture slides", "textbook chapters", "research papers"],
      validatedBy: "user"
    },
    {
      project: "mtg-webapp", 
      useCases: ["rules PDFs", "tournament regulations"],
      validatedBy: "system" // Suggested by convergence detector
    },
    {
      project: "cucina-vegana",
      useCases: ["recipe books", "nutrition papers"],
      validatedBy: "system"
    },
    {
      project: "knowledge-weaver",
      useCases: ["academic syllabi", "course materials"],
      validatedBy: "user"
    }
  ]
}
```

**Cascading Discovery**: 
- Plugin usato frequentemente in contesto non anticipato → genera nuovo operationalDimension
- Sistema impara dalla struttura dei problemi che risolvi
- Ogni plugin = testimonianza tangibile di classe problemi ricorrente scoperta

**Plugin Installation Flow**:
```
1. User discovers plugin in marketplace UI
2. Click "Install" → Plugin downloaded
3. Dependencies resolved automatically
4. Plugin initialized with project config
5. Usage tracked for pattern analysis
6. If used in unexpected context → new operational dimension emerges
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

---

### 4. Intelligence Layer as Pattern Recognizer

**Purpose**: Non predire azioni future ma scoprire pattern latenti nella struttura del lavoro

**Components**:

**Pattern Detection**:
```typescript
interface DiscoveredPattern {
  id: string;
  name: string;
  description: string;
  
  // Dove pattern osservato
  occurrences: {
    project: string;
    context: string;
    timestamp: Date;
  }[];
  
  // Frequenza
  frequency: number;
  
  // Convergenze rilevate
  relatedPatterns: string[];
}
```

**Example Patterns Discovered**:
- "optimization-under-multiple-constraints": Nautica (meteo), Università (tempo), Coworking (budget), Hub (tokens)
- "scheduling-recurring-events": Università (study), MTG (tournaments), Cucina (meal prep)
- "real-time-monitoring-with-alerts": MTG (audio), Hub (performance), IoT agricoltura

**Suggestions Based on Patterns**:
```typescript
// Sistema rileva pattern ricorrente
const pattern = detectPattern("scheduling-under-constraints");

// Suggerisce esplorazione
suggest({
  message: "Detected 'scheduling-under-constraints' across 4 projects",
  exploration: "This might be meta-interest worth exploring",
  suggestedActions: [
    "Abstract scheduling logic into reusable component",
    "Study optimization algorithms (operations research)",
    "Connect with Knowledge Weaver: formal scheduling theory"
  ]
});
```

**Usage Analytics**:
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
    convergencesDiscovered: string[];
  };
}
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

**Tier 2: Supabase (Session & Analytics & Graph Cache)**
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

-- Graph cache (for performance)
CREATE TABLE graph_cache (
  id UUID PRIMARY KEY,
  updated_at TIMESTAMP,
  nodes JSONB,
  edges JSONB
);

-- Discovered convergences
CREATE TABLE convergences (
  id UUID PRIMARY KEY,
  project_a TEXT,
  project_b TEXT,
  operational_dimension TEXT,
  discovered_at TIMESTAMP,
  validated_by_user BOOLEAN
);
```

**Tier 3: Vector Store (Supabase pgvector)**
```sql
-- Enable pgvector extension
CREATE EXTENSION vector;

-- Store embeddings
CREATE TABLE document_embeddings (
  id UUID PRIMARY KEY,
  project_id TEXT,
  content TEXT,
  embedding vector(1536),
  metadata JSONB
);

-- Similarity search
SELECT content, 1 - (embedding <=> query_embedding) as similarity
FROM document_embeddings
ORDER BY embedding <=> query_embedding
LIMIT 5;
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
- ✅ Browse plugin marketplace (cached)
- ✅ Explore graph (cached)

**Requires Online**:
- ❌ Claude API calls
- ❌ GitHub commits (queued)
- ❌ Convergence detection (queued)

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
- Supabase (Database + Auth + Vector Store)
- Upstash Redis (Cache)
- n8n (Self-hosted workflows)

---

## 📊 METRICS & TARGETS

### Discovery Metrics (Primary)

- **Convergences identified per week**: Target ≥3 cross-project convergences recognized as valuable
- **Recursive exploration depth**: Average chain length (query → convergence → new query → ...)
- **Pattern emergence rate**: New operational dimensions discovered per month
- **User validation rate**: % of suggested convergences that user explores (target >60%)

### Performance Metrics (Secondary)

**Load Times**
- **First Load**: <3s (3G)
- **Repeat Load**: <1s (cached)
- **Time to Interactive**: <5s
- **Lighthouse Score**: >90

**API Response Times**
- **Claude API**: 2-5s (streaming)
- **GitHub API**: 100-500ms
- **Database**: <100ms
- **Plugin execution**: <2s
- **Graph traversal**: <500ms

### Success Criteria for Discovery Engine

- [ ] Proposes at least 1 non-obvious cross-project connection per day of active use
- [ ] User recognizes suggested convergences as genuinely interesting >70% of time
- [ ] At least 3 meta-patterns discovered after 3 months of usage
- [ ] Average recursive exploration depth ≥2 (user follows suggestions that generate further suggestions)

---

## 🎯 INTEGRATION WITH KNOWLEDGE WEAVER

Hub e Knowledge Weaver sono **isomorfi** (stessa struttura matematica applicata a domini diversi):

| Aspect | Hub | Knowledge Weaver |
|--------|-----|------------------|
| **Corpus** | Progetti + documentazione | Interessi + programmi accademici |
| **Query** | Task corrente utente | Problema pratico / esame |
| **Retrieval** | Semantic search cross-project | Convergenze dimensioni operative |
| **Output** | Context ottimizzato + suggestions | Percorso apprendimento |
| **Growth** | Nuovi progetti, nuova docs | Nuovi interessi, nuovi programmi |
| **Pattern** | Retrieval-Augmented Project Management | Retrieval-Augmented Learning |

**Unified Architecture Possible**: 
- Stesso retrieval engine
- Stesso vector store con namespace: "projects", "interests", "academic-programs"
- Stesso graph database
- Discovery logic condivisa

**Example Integration**:
```typescript
// User working on Hub feature
const task = "Implement notification system";

// Discovery Engine queries both domains
const hubSuggestions = await discover({
  domain: "projects",
  query: task
});
// Returns: Università spaced-rep, Cucina meal-prep reminders

const kwSuggestions = await discover({
  domain: "interests", 
  query: task
});
// Returns: "notification-systems" might be interest worth exploring
//          Connects to HCI, psychology of attention, push protocols

// User can explore both or either
```

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
- LangChain.js (discovery engine)
- Zod (validation)
```

### Database & Cache
```typescript
- Supabase (PostgreSQL + Auth + pgvector)
- Upstash Redis (KV store)
- IndexedDB (client storage)
```

### Graph & Semantic
```typescript
- NetworkX or Neo4j (graph database)
- OpenAI/Anthropic Embeddings
- Supabase pgvector (vector store)
```

### Automation
```typescript
- n8n (workflow engine)
- BullMQ (job queue)
- node-cron (scheduling)
```

---

## 📈 IMPLEMENTATION PHASES (REVISED)

### Phase 0: Foundation (architecture + skeleton) ← **CURRENT**
- [x] Architecture defined (this document)
- [ ] React + Vite setup
- [ ] Vercel deployment
- [ ] Test on iPhone

### Phase 1: Discovery Engine Core
- [ ] **Checkpoint 1.1**: Graph-based context engine (not just token optimization)
  - Parse PROJECT.md → graph representation
  - Basic graph traversal
  - Test: query "audio" returns MTG + related projects
  
- [ ] **Checkpoint 1.2**: Claude API integration with context optimization
  
- [ ] **Checkpoint 1.3**: Convergence Detection (NEW)
  - Automatically identify when solution A applies to project B
  - UI to display discovered convergences
  - User validation feedback loop

### Phase 2: Plugin Architecture (convergences materialized)
- [ ] Plugin registry with operational dimensions metadata
- [ ] Plugin executor
- [ ] Test: PDF processor cascades to 3+ projects

### Phase 3: Workflow Automation (n8n integration)
- [ ] n8n setup and integration
- [ ] First complex workflow (e.g., exam prep automation)

### Phase 4: Intelligence Layer (pattern recognizer)
- [ ] Usage analytics
- [ ] Pattern detection
- [ ] Proactive suggestions

### Phase 5: PWA Polish (mobile optimization)
- [ ] Service worker
- [ ] Offline mode
- [ ] Install prompt
- [ ] Touch optimization

### Phase 6: Production Hardening
- [ ] Error monitoring
- [ ] Performance optimization
- [ ] Documentation

---

## 🎓 ARCHITECTURE VALIDATION CHECKLIST

Before implementation:

- [ ] **Scalability**: Can handle 10x users without refactor?
- [ ] **Discovery-First**: Sistema ottimizza per scoperta, non efficienza?
- [ ] **Security**: All sensitive data encrypted + validated?
- [ ] **Reliability**: Graceful degradation when services fail?
- [ ] **Performance**: Meets all targets on slow connections?
- [ ] **Maintainability**: Clear separation of concerns?
- [ ] **Extensibility**: Easy to add plugins/features?
- [ ] **Cost**: Stays within budget at projected scale?
- [ ] **UX**: Feels fast and native on iPhone?
- [ ] **Isomorphic with KW**: Architecture reusable for knowledge domain?

---

## 📚 REFERENCES

### Technical Documentation
- **LangChain**: https://js.langchain.com/docs/
- **Anthropic API**: https://docs.anthropic.com/
- **n8n**: https://docs.n8n.io/
- **Vercel**: https://vercel.com/docs
- **Supabase**: https://supabase.com/docs
- **Neo4j**: https://neo4j.com/docs/

### Architecture Patterns
- **Graph-Based Knowledge Management**: Neo4j patterns
- **Semantic Retrieval**: RAG patterns
- **Convergence Detection**: Similar to recommendation systems but optimized for discovery
- **Plugin Architecture**: Hexagonal Architecture (Ports & Adapters)
- **Event-Driven Architecture**: For workflow automation

### Philosophical Alignment
- **Knowledge Weaver PROJECT.md**: Isomorphic architecture for learning domain
- **Research**: Serendipity in information retrieval, exploratory search systems

---

<div align="center">

**🏗️ ARCHITECTURE v2.1**

*Discovery Engine for Recursive Project Exploration*

**Status**: Design Complete → Implementation Starting  
**Key Innovation**: From Efficiency Optimization to Discovery Facilitation

---

*Built with intelligence, designed for exploration*

</div>