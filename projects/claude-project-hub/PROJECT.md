# Claude Project Hub - Development Platform

> 🎯 **VISION**: Local development environment with integrated Claude API, eliminating need for claude.ai web interface for project work.

---

## 📊 META

- **Type**: Tool / Platform / Meta-System
- **Priority**: 🔴 CRITICAL (Blocks all other project efficiency)
- **Duration**: 6-8 weeks (phased rollout)
- **Status**: 🏗️ Phase 0 - Repository Optimization
- **Started**: 2025-09-29
- **Target V1.0**: 2025-11-15
- **Budget**: €50 (Claude API credits for testing)

---

## 🎯 CONTEXT

### Problem Statement
**Current State**: Developing projects using claude.ai web interface is inefficient:
- Manual context copy/paste every session (2-5 min overhead)
- No automatic PROJECT.md updates (manual editing)
- Code artifacts require manual file creation/editing
- No memory between sessions (context reset)
- No integration with local dev workflow (git, IDE, automation)

**Impact**: ~30% time wasted on "context management overhead" instead of actual development.

### Opportunity
**Target State**: Hub = integrated development environment where:
- Claude API access with **automatic context injection**
- In-app chat with **persistent session memory**
- Code generation → **auto-save to deliverables/**
- PROJECT.md **auto-updates** (progress, logs)
- **n8n/Zapier integrations** for workflow automation
- **Zero manual overhead** for context management

**Expected Impact**: 
- Context switching: 5 min → 10 seconds (97% reduction)
- Time to productivity: 10 min → instant
- Development velocity: 2-3x improvement

### Success Criteria
**V1.0 Complete When**:
- ✅ Desktop app launches and connects to Claude API
- ✅ Selecting project auto-loads complete context
- ✅ Chat generates code → saves directly to filesystem
- ✅ PROJECT.md updates automatically (progress, logs)
- ✅ Session memory persists (close app, reopen = continue conversation)
- ✅ Git integration (auto-commit on milestones)
- ✅ Used exclusively for 1 complete project cycle (no claude.ai needed)

---

## 🛠️ TECH STACK

### Frontend (Desktop App)
**Primary Choice**: **Tauri** (Rust + Web)
- **Why**: Lightweight (~10MB vs Electron ~150MB), native performance, modern
- **Web Tech**: React + TypeScript (UI components)
- **Styling**: Tailwind CSS (consistency with current dashboard)
- **Alternative**: Electron (if Tauri learning curve too steep)

### Backend (API Server)
**Framework**: **FastAPI** (Python 3.12+)
- **Why**: Async support, WebSocket for streaming, fast, well-documented
- **Database**: SQLite (local caching, metadata)
- **ORM**: SQLAlchemy (database abstraction)
- **Background Tasks**: Celery (optional, for heavy processing)

### Context Engine (Core Innovation)
**Language**: Python (module)
- **Components**:
  - PROJECT.md parser (extract context, structure data)
  - SESSION_HANDOFF injector (system prompt builder)
  - Smart truncation (prioritize relevant context when >128K tokens)
  - Embedding cache (semantic search for relevant past sessions)
- **Libraries**:
  - LangChain (optional, for advanced RAG if needed)
  - tiktoken (token counting)
  - sentence-transformers (embeddings for semantic cache)

### Claude API Integration
**SDK**: anthropic-sdk-python
- **Features Used**:
  - Messages API (chat completions)
  - Streaming responses (real-time typing effect)
  - Function calling (for PROJECT.md updates, file operations)
  - Token counting (cost optimization)

### Automation Integrations
**n8n**: Self-hosted workflow automation
- **Use Cases**:
  - Project milestone reached → Notion database update
  - Daily summary → Email/Slack notification
  - Backup trigger → Cloud storage sync
**Zapier**: Webhook triggers (if n8n not feasible)

### Development Tools
- **Editor**: VS Code (for Hub development itself)
- **Git**: Version control (Hub code + all projects)
- **API Testing**: Postman / Insomnia
- **UI Design**: Figma (wireframes)

---

## 📋 DEVELOPMENT PHASES (6 Sprints)

### Phase 0: Repository Optimization 🏗️ (CURRENT - Week 1)
**Goal**: Prepare repository structure to support Hub development & usage

**Tasks**:
- [x] Define Hub vision & architecture
- [ ] Restructure repository (new folders: hub/, system/, etc.)
- [ ] Create Hub PROJECT.md (this document)
- [ ] Create ARCHITECTURE.md (technical deep-dive)
- [ ] Create API_DESIGN.md (endpoint specifications)
- [ ] Create ROADMAP.md (sprint breakdown with dates)
- [ ] Update KNOWLEDGE_BASE.md (include Hub context)
- [ ] Add SESSION_HANDOFF sections to all active projects

**Deliverables**: 
- Optimized repository structure
- Complete Hub documentation suite
- Ready for Phase 1 development

**Duration**: 3 days (2025-10-01 to 2025-10-03)  
**Status**: 🟡 In Progress (20%)

---

### Phase 1: Backend Core + Claude API 🔌 (Week 2)
**Goal**: Working FastAPI server with Claude integration

**Tasks**:
- [ ] Setup FastAPI project structure
- [ ] Implement `/api/health` endpoint (basic test)
- [ ] Integrate Claude API SDK
- [ ] Implement `/api/chat` endpoint (streaming)
- [ ] Environment config (API keys, settings.json)
- [ ] Error handling & logging
- [ ] Unit tests (pytest)

**Deliverables**:
- FastAPI server running on `localhost:8000`
- Postman collection with test requests
- Can send message to Claude API and receive response

**Duration**: 5 days  
**Status**: 🔴 Not Started

**Definition of Done**:
```bash
# Start server
python hub/deliverables/backend/main.py

# Test endpoint (works!)
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello Claude"}'
```

---

### Phase 2: Context Engine 🧠 (Week 3)
**Goal**: Automatic PROJECT.md loading & context injection

**Tasks**:
- [ ] PROJECT.md parser (extract meta, context, current phase)
- [ ] SESSION_HANDOFF extractor
- [ ] Context builder (format for Claude system prompt)
- [ ] Token counter (ensure <128K context window)
- [ ] Smart truncation (if context too large)
- [ ] `/api/projects` endpoint (list all projects)
- [ ] `/api/projects/{id}/context` endpoint (load project context)
- [ ] Integration tests

**Deliverables**:
- `context_engine/` Python module
- API endpoints for project management
- Can load any project and extract full context

**Duration**: 7 days  
**Status**: 🔴 Not Started

**Definition of Done**:
```python
# Load project context
from context_engine import ContextBuilder

context = ContextBuilder.load_project("mtg-webapp")
print(context.system_prompt)  # Full PROJECT.md formatted for Claude
print(context.token_count)    # e.g. 12,450 tokens
```

---

### Phase 3: Basic Frontend (Tauri) 🎨 (Week 4)
**Goal**: Desktop app with chat interface

**Tasks**:
- [ ] Setup Tauri project (Rust + React)
- [ ] Basic UI layout (sidebar + chat panel)
- [ ] Project selector (connect to `/api/projects`)
- [ ] Chat interface (connect to `/api/chat`)
- [ ] Streaming response rendering (typing effect)
- [ ] Settings panel (API key configuration)
- [ ] Build & packaging (macOS .dmg)

**Deliverables**:
- Tauri app builds and runs
- Can select project from list
- Can chat with Claude in-app
- Context automatically loaded

**Duration**: 7 days  
**Status**: 🔴 Not Started

**Definition of Done**:
- Double-click `Hub.app` on macOS
- Select "MTG Webapp" from sidebar
- Type "What's the current phase?" → Claude responds with context awareness
- Screenshot saved in `hub/deliverables/frontend/demos/`

---

### Phase 4: File Operations & Auto-Save 💾 (Week 5)
**Goal**: Code generation auto-saves to deliverables/

**Tasks**:
- [ ] File system watcher (monitor changes)
- [ ] Artifact detector (identify code blocks in Claude responses)
- [ ] Auto-save handler (prompt user: "Save to deliverables/code/xyz.py?")
- [ ] PROJECT.md updater (modify progress %, add log entries)
- [ ] Git integration (auto-commit on save)
- [ ] Conflict detection (if file exists)
- [ ] Rollback mechanism (undo last save)

**Deliverables**:
- Code generated in chat → auto-saved to correct location
- PROJECT.md progress updates automatically
- Git commits created with meaningful messages

**Duration**: 7 days  
**Status**: 🔴 Not Started

**Definition of Done**:
```
1. Chat with Claude: "Generate FastAPI endpoint for user auth"
2. Claude responds with code artifact
3. Hub prompts: "Save to hub/deliverables/backend/auth.py?"
4. Click "Yes"
5. File created, PROJECT.md updated, git commit made
6. No manual file operations needed
```

---

### Phase 5: Session Memory & Advanced Features 🧠 (Week 6)
**Goal**: Persistent conversations, advanced context management

**Tasks**:
- [ ] Session database (SQLite schema)
- [ ] Conversation persistence (save/load chat history)
- [ ] Multi-project tabs (work on multiple projects simultaneously)
- [ ] Context search (semantic search past sessions)
- [ ] Code diff viewer (compare versions)
- [ ] Keyboard shortcuts (power user features)
- [ ] Dark mode toggle

**Deliverables**:
- Close app → reopen → conversation continues
- Can switch between 3 projects in tabs
- Search: "when did we implement authentication?" → finds session

**Duration**: 7 days  
**Status**: 🔴 Not Started

---

### Phase 6: Automation & Polish 🚀 (Week 7-8)
**Goal**: n8n integration, final polish, V1.0 release

**Tasks**:
- [ ] n8n self-hosted setup
- [ ] Webhook endpoints for automation triggers
- [ ] Example workflows (Notion sync, email notifications)
- [ ] Performance optimization (caching, lazy loading)
- [ ] Error recovery (offline mode, API failures)
- [ ] User documentation (in-app help, guides)
- [ ] Beta testing (dogfood on 2 projects)
- [ ] Bug fixes from testing
- [ ] V1.0 release build

**Deliverables**:
- Hub V1.0 production-ready
- n8n workflows functional
- Complete documentation
- Used successfully for 1 full project without claude.ai

**Duration**: 10-14 days  
**Status**: 🔴 Not Started

**V1.0 Release Criteria**:
- [ ] All Phase 1-5 features working
- [ ] Zero critical bugs
- [ ] Documentation complete
- [ ] Validated with 2 projects (e.g., Cucina Vegana + Università)
- [ ] Backup/restore functionality
- [ ] Claude API cost tracking (<€20/month for normal usage)

---

## 🎁 DELIVERABLES ROADMAP

### V1.0 - MVP (Target: 2025-11-15)
**Must Have**:
- [x] Optimized repository structure
- [ ] Desktop app (Tauri build)
- [ ] Claude API integration (chat interface)
- [ ] Context engine (auto-load PROJECT.md)
- [ ] File operations (auto-save artifacts)
- [ ] PROJECT.md auto-updates
- [ ] Session persistence
- [ ] Git integration (auto-commit)

**Won't Have (Defer to V1.5+)**:
- ❌ Mobile app
- ❌ Multi-user collaboration
- ❌ Cloud sync
- ❌ Voice input (Whisper integration)
- ❌ Visual code editor (use external for now)

### V1.5 - Enhanced (Target: 2025-12-15)
**Add**:
- Advanced RAG (semantic search entire repo)
- LangChain integration (multi-step workflows)
- Visual PROJECT.md editor (in-app editing)
- Code review mode (Claude suggests improvements)

### V2.0 - Platform (Target: 2026-01)
**Add**:
- Plugin system (community extensions)
- Template marketplace (share project templates)
- Team collaboration (multi-user)
- Web version (browser-based Hub)

---

## 📝 CONSTRAINTS & TECHNICAL NOTES

### Technical Constraints
- **Context Window**: Claude 3.5 Sonnet = 200K tokens, but keep <128K for cost
- **API Rate Limits**: Tier 1 = 50 requests/min (throttle if needed)
- **Tauri Rust**: Learning curve if new to Rust (fallback: Electron)
- **Desktop Only V1.0**: No mobile, no web (focus on power users)

### Cost Constraints
- **Claude API**: ~$3/1M input tokens, $15/1M output tokens
- **Expected Usage**: ~10-20M tokens/month = ~$50-100/month
- **Optimization**: Cache contexts, minimize redundant API calls

### Development Constraints
- **Time**: Solo developer, ~10-15 hours/week available
- **Complexity**: Minimize scope creep, V1.0 = functional MVP only
- **Testing**: Manual testing acceptable for V1.0 (automate in V1.5)

### Key Architectural Decisions

**1. Tauri vs Electron**
- **Decision**: Start with Tauri
- **Rationale**: 10x smaller binary, faster, modern
- **Fallback**: Switch to Electron if Rust learning curve blocks progress
- **Timeline**: Decide by end of Phase 3

**2. Local-First Architecture**
- **Decision**: SQLite + filesystem, no cloud dependencies
- **Rationale**: Privacy, offline-capable, simpler
- **Future**: Cloud sync optional in V2.0

**3. Context Engine Approach**
- **Decision**: Deterministic parsing (no ML initially)
- **Rationale**: PROJECT.md is structured → regex/parsing works
- **Future**: Add embeddings for semantic search in V1.5

**4. Git Integration**
- **Decision**: Auto-commit on significant changes (not every edit)
- **Rationale**: Balance automation vs commit clutter
- **Implementation**: Configurable (user can disable)

---

## 🔄 SESSION HANDOFF

### Current Working Context
**Phase**: Phase 0 - Repository Optimization  
**File**: Multiple (repository restructure)  
**Last Action**: Defined Hub complete vision, started PROJECT.md creation

### What Works
- ✅ Vision clear (local Claude IDE)
- ✅ Architecture defined (Tauri + FastAPI + Context Engine)
- ✅ Phases planned (6 sprints, realistic timeline)

### What's Missing
- ❌ Repository restructure not applied yet (folders not created)
- ❌ ARCHITECTURE.md not created (technical deep-dive)
- ❌ API_DESIGN.md not created (endpoint specs)
- ❌ ROADMAP.md not created (sprint details with dates)

### Immediate Next Steps (Copy-Paste to Resume)
```
Continue Hub Phase 0 optimization.

Tasks:
1. Create new folder structure (hub/, system/, reorganize app/)
2. Generate ARCHITECTURE.md (technical details: Tauri setup, FastAPI structure, Context Engine design)
3. Generate API_DESIGN.md (all backend endpoints with request/response examples)
4. Generate ROADMAP.md (sprint planning with dates, dependencies)
5. Add SESSION_HANDOFF sections to MTG/Cucina/Università PROJECT.md files
6. Update KNOWLEDGE_BASE.md (include Hub as meta-project)

Priority: Items 1-2 (structure + architecture doc) to unblock development start.
```

### Blockers/Decisions Needed
- [ ] **Tauri vs Electron**: Research Tauri learning curve (2h) before Phase 3
- [ ] **LangChain**: Evaluate necessity for V1.0 (may be overkill, defer to V1.5)
- [ ] **n8n vs Zapier**: Test n8n self-hosting feasibility (Phase 6)

---

## 📊 PROGRESS TRACKING

### Overall Progress
```
Phase 0: Repo Optimization    [████░░░░░░░░░░░░░░░░]  20%
Phase 1: Backend Core          [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 2: Context Engine        [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 3: Frontend (Tauri)      [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 4: File Operations       [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 5: Session Memory        [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 6: Automation & Polish   [░░░░░░░░░░░░░░░░░░░░]   0%

🎯 V1.0 Completion: 3% (2 of 6 phases done)
```

### Sprint Calendar
- **Week 1** (Oct 1-3): Phase 0 ← WE ARE HERE
- **Week 2** (Oct 7-11): Phase 1
- **Week 3** (Oct 14-18): Phase 2
- **Week 4** (Oct 21-25): Phase 3
- **Week 5** (Oct 28-Nov 1): Phase 4
- **Week 6** (Nov 4-8): Phase 5
- **Week 7-8** (Nov 11-22): Phase 6
- **Buffer** (Nov 25-Dec 1): Testing & fixes

**Target V1.0 Release**: December 1, 2025 🚀

---

## 📖 PROJECT LOG

### 2025-09-29 - Project Inception
- Created initial PROJECT.md (basic structure)
- Recognized Hub as meta-project
- Started documenting as own project in system

**Learnings**:
- Self-referential approach validates framework
- Hub itself tests the methodology

---

### 2025-10-01 - Vision Refinement & Architecture
**Progress**:
- Complete vision statement (eliminate claude.ai web dependency)
- Tech stack decisions (Tauri + FastAPI + Context Engine)
- 6-phase roadmap with realistic timeline
- Created comprehensive PROJECT.md

**Decisions**:
- **Tauri over Electron**: Lightweight, modern (with Electron fallback)
- **Local-first**: No cloud dependencies V1.0 (privacy + simplicity)
- **Context Engine = Core Innovation**: Auto-load PROJECT.md + smart injection
- **Phased rollout**: 6 sprints, each self-contained (agile approach)

**Key Insight**:
Hub is not just a "chat wrapper" - it's a **development orchestration platform**. The Context Engine is what makes it transformative (vs just another Electron app).

**Blockers**:
- None currently
- Potential: Tauri learning curve (mitigated by Electron fallback plan)

**Next Session**:
1. Create repository folder structure
2. Write ARCHITECTURE.md (technical deep-dive)
3. Write API_DESIGN.md (backend spec)
4. Begin Phase 1 development (backend scaffold)

---

## 🎓 LEARNINGS & ANTI-PATTERNS

### What Worked (Design Principles)
- **Local-first approach**: Privacy + simplicity wins
- **Context Engine innovation**: Differentiation from "yet another Claude wrapper"
- **Phased rollout**: Each phase = usable increment (agile)
- **Dogfooding**: Hub manages itself (ultimate validation)

### What to Avoid
- ❌ **Over-engineering V1.0**: Resist adding "nice to have" features
- ❌ **Scope creep**: Mobile/web can wait for V2.0
- ❌ **Perfectionism**: Ship functional MVP, iterate
- ❌ **Analysis paralysis**: Don't spend 3 weeks on architecture docs

### Best Practices Established
- **Definition of Done**: Every phase has concrete completion criteria
- **Fallback plans**: Tauri → Electron, LangChain → simple parsing
- **Time boxing**: Fixed sprint durations, cut scope if needed
- **Cost consciousness**: Track Claude API usage, optimize early

---

## 📚 RESOURCES

### Technical Documentation
- **Tauri**: https://tauri.app/v1/guides/
- **FastAPI**: https://fastapi.tiangolo.com/
- **Claude API**: https://docs.anthropic.com/claude/reference/
- **SQLAlchemy**: https://docs.sqlalchemy.org/
- **React**: https://react.dev/
- **n8n**: https://docs.n8n.io/

### Research & Inspiration
- **VSCode Architecture**: https://github.com/microsoft/vscode (plugin system reference)
- **Cursor IDE**: https://cursor.sh/ (Claude integration inspiration)
- **Obsidian**: https://obsidian.md/ (local-first philosophy)

### Community
- **Tauri Discord**: For Rust/Tauri questions
- **FastAPI Discord**: Backend troubleshooting
- **Claude API Forum**: Best practices, rate limits

---

## 🚀 QUICK START (For Claude Sessions)

### Starting Work on Hub
```
Project: Claude Project Hub (Hub Development)
File: hub/PROJECT.md
Phase: [Current phase from SESSION_HANDOFF]
Today's focus: [Specific task from current phase]

Context: Hub = local development environment replacing claude.ai web interface.
Goal: Eliminate manual context management, auto-save artifacts, integrate Claude API.

[Paste SESSION_HANDOFF section here]

What should we build today?
```

### Definition of "Done" for V1.0
```
✅ Can launch Hub desktop app
✅ Can select any project → context auto-loads
✅ Can chat with Claude → code auto-saves to deliverables/
✅ PROJECT.md updates automatically
✅ Session persists (close/reopen = continue)
✅ Git commits automatically on milestones
✅ Used for 1 complete project without touching claude.ai web
```

---

<div align="center">

**🎯 CLAUDE PROJECT HUB - THE META-PROJECT**

*Building the platform to build all other platforms*

**Status**: Phase 0 - Repository Optimization (20%)  
**Target V1.0**: December 1, 2025  
**Vision**: Eliminate manual context overhead, 10x development velocity

---

*"The system that manages itself, to manage everything else"*

</div>