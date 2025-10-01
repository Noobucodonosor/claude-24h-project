# Claude Project Hub - Web Platform

> 🎯 **VISION**: Progressive Web App with Claude API integration - accessible from desktop and mobile (iPhone), eliminating need for claude.ai web interface.

---

## 📊 META

- **Type**: Web App (PWA - Progressive Web App)
- **Priority**: 🔴 CRITICAL (Blocks all other project efficiency)
- **Duration**: 4-6 weeks (phased rollout)
- **Status**: 🏗️ Phase 0 - Repository Optimization
- **Started**: 2025-10-01
- **Target V1.0**: 2025-11-15
- **Budget**: €10/month (hosting) + €50/month (Claude API)

---

## 🎯 CONTEXT

### Problem Statement
**Current State**: Developing projects using claude.ai web interface is inefficient:
- Manual context copy/paste every session (2-5 min overhead)
- No automatic PROJECT.md updates (manual editing)
- Code artifacts require manual file creation
- No memory between sessions (context reset)
- Can't work from iPhone (claude.ai mobile UX limited)
- **No cloud-native workflow** (code stuck in browser, not in GitHub)

**Impact**: ~30% time wasted on "context management overhead" instead of actual development.

### Opportunity
**Target State**: Hub = cloud-native development platform where:
- Claude API access with **automatic context injection**
- In-browser chat with **persistent session memory**
- Code generation → **automatic GitHub commit** (no downloads!)
- PROJECT.md **auto-updates** via GitHub API
- **Mobile-optimized** (iPhone Safari PWA)
- **5G-first design** (always online, cloud storage)
- **Zero local filesystem** (everything on GitHub)

**Expected Impact**: 
- Context switching: 5 min → 10 seconds (97% reduction)
- Time to productivity: 10 min → instant
- Work from anywhere: iPhone, iPad, Mac
- Code delivery: Browser → GitHub (no manual steps)
- Development velocity: 2-3x improvement

### Success Criteria
**V1.0 Complete When**:
- ✅ Web app loads on desktop + iPhone Safari
- ✅ Installable as PWA (Add to Home Screen)
- ✅ Connects to Claude API successfully
- ✅ Selecting project auto-loads complete context
- ✅ Chat generates code → **auto-commits to GitHub**
- ✅ PROJECT.md updates via GitHub API commits
- ✅ Session memory persists (refresh = continue conversation)
- ✅ **No downloads required** (cloud-to-cloud workflow)
- ✅ Used exclusively for 1 complete project cycle
---

## 🛠️ TECH STACK (Web-First)

### Frontend (Single Page Application)
**Framework**: **React 18 + TypeScript**
- **Why**: Component reusability, ecosystem, mobile-friendly
- **Styling**: Tailwind CSS (responsive, mobile-first)
- **State**: Zustand (lightweight state management)
- **PWA**: Workbox (service worker, offline support)
- **Mobile**: Touch-optimized, responsive design

**Build Tool**: Vite (fast, modern)
**Deployment**: Vercel / Netlify (free tier, auto HTTPS)

### Backend (Serverless)
**Platform**: **Vercel Serverless Functions** (or Netlify Functions)
- **Why**: No server management, auto-scaling, free tier
- **Language**: Node.js / TypeScript
- **Database**: Vercel KV (Redis-compatible, serverless)
- **Alternative**: Supabase (PostgreSQL + Auth + Storage)

### APIs & Integrations
**Claude API**: Direct integration (anthropic-sdk-js)
**GitHub API**: For reading/writing PROJECT.md files
**Storage**: Browser IndexedDB (offline data) + Cloud sync

### Context Engine (Client-Side)
**Implementation**: JavaScript module
- PROJECT.md parser (fetch from GitHub → parse → structure)
- Context builder (format for Claude system prompt)
- Token counter (tiktoken-js)
- Smart truncation (prioritize SESSION_HANDOFF)

### Mobile Optimization
**PWA Features**:
- Add to Home Screen (icon, splash screen)
- Offline mode (service worker)
- Push notifications (optional)
- Touch gestures (swipe, long-press)

**Responsive Design**:
- Mobile-first CSS (Tailwind breakpoints)
- Bottom navigation (iPhone-friendly)
- Large tap targets (44px minimum)
- Pull-to-refresh

---

## 📋 DEVELOPMENT PHASES (5 Sprints)

### Phase 0: Repository Optimization 🏗️ (CURRENT - Week 1)
**Goal**: Prepare repository structure to support Hub development

**Tasks**:
- [x] Define Hub vision (web app, not desktop)
- [ ] Create hub/ folder with subfolders
- [ ] Create comprehensive PROJECT.md (this document)
- [ ] Create ARCHITECTURE.md (web app architecture)
- [ ] Create API_DESIGN.md (serverless functions spec)
- [ ] Add SESSION_HANDOFF to all project PROJECT.md files
- [ ] Update KNOWLEDGE_BASE.md

**Deliverables**: 
- Optimized repository structure
- Complete Hub documentation suite
- Ready for Phase 1 development

**Duration**: 2 days (2025-10-01 to 2025-10-02)  
**Status**: 🟡 In Progress (30%)

---

### Phase 1: Basic Web App + Claude API 🔌 (Week 2)
**Goal**: Working web app with Claude chat

**Tasks**:
- [ ] Setup React + Vite project
- [ ] Basic UI layout (header, sidebar, chat panel)
- [ ] Claude API integration (serverless function)
- [ ] Simple chat interface (send message, receive response)
- [ ] Environment config (.env for API keys)
- [ ] Deploy to Vercel (staging environment)

**Deliverables**:
- Web app accessible at hub.yourname.vercel.app
- Can chat with Claude (no context yet)
- Works on desktop + iPhone

**Duration**: 4 days  
**Status**: 🔴 Not Started

**Definition of Done**:
```
1. Open hub.yourname.vercel.app on iPhone Safari
2. Type message to Claude
3. Receive response
4. ✅ Basic chat works!
```

---

### Phase 2: GitHub Integration + Context Engine 🧠 (Week 3)
**Goal**: Automatic PROJECT.md loading from GitHub

**Tasks**:
- [ ] GitHub API integration (Octokit.js)
- [ ] Fetch PROJECT.md from repository
- [ ] PROJECT.md parser (JavaScript)
- [ ] Context builder module
- [ ] Context injection in Claude calls
- [ ] Project selector UI (list from GitHub)
- [ ] Cache layer (IndexedDB for offline)

**Deliverables**:
- Can select any project from GitHub
- PROJECT.md auto-loads and parses
- Context automatically injected in chat
- Works offline (cached contexts)

**Duration**: 5 days  
**Status**: 🔴 Not Started

**Definition of Done**:
```
1. Select "MTG Web App" from project list
2. Context loads (12K tokens)
3. Ask Claude: "What's the current phase?"
4. Claude responds with context awareness
5. ✅ Context engine works!
```

---

### Phase 3: Code Artifacts + Downloads 💾 (Week 4)
**Goal**: Generated code downloadable with one click

**Tasks**:
- [ ] Code block detection in responses
- [ ] Syntax highlighting (Prism.js)
- [ ] Download button for code blocks
- [ ] Copy to clipboard functionality
- [ ] File naming suggestions
- [ ] Multi-file downloads (ZIP)
- [ ] Mobile-optimized code viewer

**Deliverables**:
- Code blocks highlighted and downloadable
- Works smoothly on iPhone
- Can download multiple files as ZIP

**Duration**: 4 days  
**Status**: 🔴 Not Started

**Definition of Done**:
```
1. Ask Claude: "Generate FastAPI endpoint"
2. Claude responds with code
3. Click "Download" button
4. File saves: auth.py
5. ✅ Artifact download works!
```

---

### Phase 4: GitHub Auto-Commit + Session Memory 🔄 (Week 5)
**Goal**: Auto-update PROJECT.md on GitHub, persistent sessions

**Tasks**:
- [ ] GitHub API write operations
- [ ] Auto-commit functionality (update PROJECT.md)
- [ ] Session persistence (IndexedDB)
- [ ] Conversation history (load past chats)
- [ ] Progress auto-update logic
- [ ] Log entry generation
- [ ] Conflict detection

**Deliverables**:
- PROJECT.md updates automatically on GitHub
- Sessions persist (refresh browser = continue chat)
- Conversation history accessible

**Duration**: 5 days  
**Status**: 🔴 Not Started

**Definition of Done**:
```
1. Complete task in chat
2. Hub auto-commits to GitHub
3. Check GitHub: PROJECT.md updated ✅
4. Refresh browser
5. Conversation still there ✅
```

---

### Phase 5: PWA + Mobile Optimization + Polish 🚀 (Week 6)
**Goal**: Production-ready PWA, perfect mobile UX

**Tasks**:
- [ ] PWA manifest (icons, splash screens)
- [ ] Service worker (offline support)
- [ ] Install prompt (Add to Home Screen)
- [ ] Touch gestures (swipe, long-press)
- [ ] Bottom navigation (iPhone-friendly)
- [ ] Dark mode toggle
- [ ] Performance optimization
- [ ] Error handling + recovery
- [ ] User onboarding flow
- [ ] Beta testing

**Deliverables**:
- Installable PWA on iPhone
- Works offline
- Perfect mobile UX
- Production deployment

**Duration**: 7 days  
**Status**: 🔴 Not Started

**V1.0 Release Criteria**:
- [ ] Installable as PWA (iPhone + desktop)
- [ ] All Phase 1-4 features working
- [ ] Zero critical bugs
- [ ] Works offline
- [ ] Validated with 2 projects
- [ ] Lighthouse score >90 (performance, accessibility)

---

## 🎁 DELIVERABLES ROADMAP

### V1.0 - MVP (Target: 2025-11-15)
**Must Have**:
- [x] Repository structure optimized
- [ ] Web app deployed (Vercel/Netlify)
- [ ] Claude API integration (chat)
- [ ] GitHub API integration (read/write PROJECT.md)
- [ ] Context engine (auto-load PROJECT.md)
- [ ] Code artifacts downloadable
- [ ] SESSION_HANDOFF auto-injection
- [ ] Session persistence (IndexedDB)
- [ ] PWA installable (iPhone + desktop)
- [ ] Mobile-optimized UI

**Won't Have (Defer to V1.5+)**:
- ❌ Multi-user accounts (single user V1.0)
- ❌ Real-time collaboration
- ❌ Voice input (Whisper)
- ❌ Visual code editor (use external)
- ❌ n8n/Zapier integration

### V1.5 - Enhanced (Target: 2025-12-15)
**Add**:
- Multi-user authentication (Supabase Auth)
- Team collaboration (share projects)
- Advanced code editor (Monaco)
- Voice input (Speech-to-Text API)

### V2.0 - Platform (Target: 2026-01)
**Add**:
- Template marketplace
- Plugin system
- Automation workflows (n8n)
- Native mobile app (React Native)

---

## 📝 CONSTRAINTS & TECHNICAL NOTES

### Technical Constraints
- **Claude API Context**: 200K tokens max, keep <128K for cost
- **GitHub API Rate Limit**: 60 req/hour (unauthenticated), 5000 (authenticated)
- **Browser Storage**: IndexedDB ~50MB typical, plan compression
- **Mobile Performance**: Target <3s load time on 3G
- **Offline Mode**: Queue API calls, sync when online

### Cost Constraints
- **Hosting**: Vercel free tier (100GB bandwidth/month)
- **Claude API**: ~$50-100/month for normal usage
- **GitHub**: Free (public repository)
- **Total**: ~$60/month operational cost

### Development Constraints
- **Time**: Solo developer, ~10-15 hours/week
- **Complexity**: Web-first, simpler than desktop app
- **Testing**: Manual testing + Lighthouse audits
- **Mobile**: Test on real iPhone (Safari quirks)

### Key Architectural Decisions

**1. Web App vs Desktop App**
- **Decision**: Web App (PWA)
- **Rationale**: Cross-platform (iPhone!), no install friction, easier deployment
- **Trade-off**: No filesystem access (downloads instead)

**2. Serverless vs Traditional Backend**
- **Decision**: Serverless Functions (Vercel)
- **Rationale**: Zero maintenance, auto-scaling, free tier
- **Trade-off**: Cold starts (~300ms), stateless

**3. GitHub as Database**
- **Decision**: GitHub repository = source of truth
- **Rationale**: Already using it, version control, free
- **Trade-off**: Rate limits, slower than real database

**4. Client-Side Context Engine**
- **Decision**: Parse PROJECT.md in browser
- **Rationale**: Reduce server load, works offline
- **Trade-off**: Initial load slightly slower

---

## 🔄 SESSION HANDOFF

### Current Working Context
**Phase**: Phase 0 - Repository Optimization  
**Task**: Regenerating PROJECT.md for web app (not desktop)  
**Last Action**: Defined complete vision for PWA with mobile support

### What Works
- ✅ Clear vision (web app, PWA, iPhone accessible)
- ✅ Tech stack decided (React + Vercel + GitHub API)
- ✅ 5-phase roadmap realistic

### What's Missing
- ❌ Repository folders not created yet (hub/, hub/deliverables/, etc.)
- ❌ ARCHITECTURE.md not created (web app specific)
- ❌ API_DESIGN.md not created (serverless functions)
- ❌ SESSION_HANDOFF sections not added to other projects

### Immediate Next Steps
```
1. User saves this PROJECT.md to: projects/claude-project-hub/PROJECT.md
2. User commits to GitHub
3. Next session: Create hub/ folder structure
4. Generate ARCHITECTURE.md (web app architecture)
5. Generate API_DESIGN.md (serverless API spec)
6. Add SESSION_HANDOFF to MTG/Cucina/Università projects
```

### Blockers/Decisions Needed
- [ ] **Hosting choice**: Vercel vs Netlify (recommend Vercel - better DX)
- [ ] **Database**: Vercel KV vs Supabase (start with IndexedDB, add cloud later)
- [ ] **Authentication**: Defer to V1.5 (single user V1.0)

---

## 📊 PROGRESS TRACKING

### Overall Progress
```
Phase 0: Repo Optimization    [██████░░░░░░░░░░░░░░]  30%
Phase 1: Basic Web App         [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 2: GitHub + Context      [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 3: Code Artifacts        [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 4: Auto-Commit + Memory  [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 5: PWA + Mobile Polish   [░░░░░░░░░░░░░░░░░░░░]   0%

🎯 V1.0 Completion: 5% (Phase 0 in progress)
```

### Sprint Calendar
- **Week 1** (Oct 1-2): Phase 0 ← WE ARE HERE
- **Week 2** (Oct 7-10): Phase 1
- **Week 3** (Oct 14-18): Phase 2
- **Week 4** (Oct 21-24): Phase 3
- **Week 5** (Oct 28-Nov 1): Phase 4
- **Week 6** (Nov 4-10): Phase 5
- **Buffer** (Nov 11-15): Testing & fixes

**Target V1.0 Release**: November 15, 2025 🚀

---

## 📖 PROJECT LOG

### 2025-10-01 - Vision Pivot: Desktop → Web App
**Context**: User needs iPhone access, not just desktop

**Decisions**:
- **Web App (PWA)** instead of Tauri desktop app
- **Serverless backend** (Vercel Functions) instead of FastAPI
- **GitHub API** for PROJECT.md read/write (no local filesystem)
- **Mobile-first design** (iPhone Safari primary target)

**Key Changes from Desktop Vision**:
- ✅ Accessible from any device (iPhone, iPad, Mac)
- ✅ No installation needed (browser-based)
- ✅ Easier deployment (Vercel auto-deploy)
- ❌ No direct filesystem access (downloads instead)
- ❌ Slightly higher latency (GitHub API calls)

**Rationale**:
Web app wins because:
1. **Accessibility**: Work from anywhere, any device
2. **Simplicity**: No native app maintenance
3. **Iteration speed**: Push updates instantly
4. **Cost**: Free hosting (Vercel/Netlify free tier)

**Trade-offs Accepted**:
- Code generated → download (can't auto-save to local filesystem)
- GitHub API rate limits (5000/hour authenticated - sufficient)
- Requires internet (offline mode limited to cached data)

**Next Steps**:
1. Complete Phase 0 (repository structure)
2. Prototype Phase 1 (basic React app + Claude chat)
3. Test on real iPhone (Safari quirks, PWA install)

---

## 🎓 LEARNINGS & ANTI-PATTERNS

### What Worked (Design Principles)
- **Mobile-first thinking**: Forces simplicity, benefits desktop too
- **Serverless architecture**: Zero maintenance, auto-scaling
- **GitHub as database**: Leverage existing infrastructure
- **Progressive enhancement**: Works in browser, better as PWA

### What to Avoid
- ❌ **Over-engineering V1.0**: Ship functional MVP first
- ❌ **Ignoring mobile**: 40%+ usage will be iPhone
- ❌ **Complex auth early**: Single user V1.0, multi-user V1.5
- ❌ **Perfect code editor**: Download files, edit in VSCode (V1.0)

### Best Practices Established
- **Mobile testing mandatory**: Every feature tested on iPhone
- **Offline-first**: Design for spotty connections
- **Performance budget**: <3s load time on 3G
- **Accessibility**: WCAG 2.1 AA minimum (keyboard nav, screen readers)

---

## 📚 RESOURCES

### Technical Documentation
- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/
- **Vercel**: https://vercel.com/docs
- **Claude API**: https://docs.anthropic.com/
- **GitHub API**: https://docs.github.com/en/rest
- **PWA**: https://web.dev/progressive-web-apps/

### Web App Examples
- **Cursor IDE**: https://cursor.sh/ (Claude integration reference)
- **GitHub Codespaces**: https://github.com/features/codespaces (web IDE)
- **Vercel AI SDK**: https://sdk.vercel.ai/ (streaming chat patterns)

### Mobile Web Best Practices
- **iPhone Safari**: https://webkit.org/blog/ (Safari-specific features)
- **PWA iOS**: https://web.dev/install-criteria/ (Add to Home Screen)
- **Touch Targets**: https://web.dev/accessible-tap-targets/

---

## 🚀 QUICK START (For Claude Sessions)

### Starting Work on Hub
```
Project: Claude Project Hub (Web App Development)
File: projects/claude-project-hub/PROJECT.md
Phase: Phase 0 - Repository Optimization
Focus: Building Progressive Web App for iPhone + desktop

Context: Hub = web-based development platform (not desktop app)
Goal: Eliminate manual context management, auto-update PROJECT.md via GitHub API
Platform: React PWA, Vercel serverless, accessible from iPhone Safari

[Paste SESSION_HANDOFF section here]

What should we build today?
```

### Definition of "Done" for V1.0
```
✅ Open hub.yourname.vercel.app on iPhone
✅ Install as PWA (Add to Home Screen)
✅ Select "MTG Web App" project
✅ Context auto-loads from GitHub
✅ Chat with Claude → code generated
✅ Download code with one tap
✅ PROJECT.md auto-updates on GitHub
✅ Refresh browser → session persists
✅ Works offline (cached contexts)
✅ Lighthouse score >90
```

---

<div align="center">

**🎯 CLAUDE PROJECT HUB - WEB PLATFORM**

*Progressive Web App for AI-assisted development*

**Status**: Phase 0 - Repository Optimization (30%)  
**Target V1.0**: November 15, 2025  
**Platform**: React PWA + Vercel + GitHub API

**Vision**: Work from anywhere - iPhone, iPad, Mac - with full Claude context

---

*"The web app that manages all your projects, accessible from your pocket"*

</div>