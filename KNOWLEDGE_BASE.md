# 🎯 Claude Project Hub - Knowledge Base

**QUICK CONTEXT**: Meta-system for managing unlimited AI-assisted projects with standardized workflows.

---

## ⚡ CLAUDE QUICK START

### What You Need to Know Immediately
- **🎯 PURPOSE**: I manage multiple projects (MTG, Cucina, Università, Hub) using standardized PROJECT.md files
- **📂 STRUCTURE**: Each project in `projects/[name]/PROJECT.md` with complete context
- **🤖 YOUR ROLE**: Read PROJECT.md, understand current phase, generate production code
- **🚀 WORKFLOW**: Context → Code → Iterate → Deliverables

### Current Active Projects (4)
1. **🌐 Claude Project Hub** (Active, 30%) - PWA web app for project management
2. **🎮 MTG Web App** (Planning, 40%) - AI deck generator + live referee
3. **🥗 Cucina Vegana** (Active, 65%) - Meal planning system  
4. **📚 Università** (Active, 30%) - Study optimization tools

---

## 📋 PROJECT STANDARD FORMAT

Every project follows this structure:
```
projects/[name]/
├── PROJECT.md          ← Complete specification (follows template)
├── context/            ← Supporting files
└── deliverables/       ← Generated outputs/code
```

### PROJECT.md Contains
- **META**: Type, priority, status, timeline
- **CONTEXT**: Problem, background, goals
- **TECH STACK**: Specific technologies, constraints
- **PHASES**: Development steps with deliverables
- **CURRENT STATUS**: Where we are, next steps
- **SESSION_HANDOFF**: Critical for continuity between sessions

---

## 🤖 CLAUDE INTEGRATION RULES

### When Starting Work
1. **Read PROJECT.md completely** for context
2. **Check SESSION_HANDOFF section** for immediate next steps
3. **Identify current phase** and progress
4. **Generate complete code** (no placeholders/TODOs)
5. **Validate against project constraints**
6. **Suggest next logical steps**

### Code Generation Standards
- ✅ **Complete implementations** ready to run
- ✅ **Error handling** included
- ✅ **Comments** for complex logic
- ✅ **File/folder structure** specified
- ❌ **No placeholders** or TODO comments

### Session Format
```
"📋 Project: [Name]
🎯 Goal: [Primary objective]
📍 Phase: [Current phase]
🔧 Stack: [Key technologies]

[Read SESSION_HANDOFF section]

What should we build/fix/optimize?"
```

---

## 🏗️ SYSTEM ARCHITECTURE

### 3-Layer Design
1. **Storage Layer**: Structured file system (`projects/`, `hub/`, `docs/`)
2. **Integration Layer**: Claude context loading + code generation
3. **Interface Layer**: 
   - **Legacy**: Static HTML dashboard (`app/frontend/index.html`) - still functional
   - **V1.0 (in development)**: Hub PWA - Progressive Web App (React + Vercel)

### Workflow Loop
```
Select Project → Load Context → Work with Claude → Save Deliverables → Update Progress → Commit
```

### Hub Evolution
- **Current (Legacy)**: Static HTML dashboard for quick project overview
- **V1.0 (Developing)**: Progressive Web App with:
  - Claude API integration
  - GitHub API for PROJECT.md auto-updates
  - Mobile-optimized (iPhone + desktop)
  - Offline-capable
  - Deployed on Vercel

---

## 📊 PROJECT TYPES & TEMPLATES

### Available Templates
- **WebApp**: Full-stack applications (FastAPI, React, PWA, etc.)
- **Study**: Academic/learning projects (Obsidian, methodologies)
- **Creative**: Lifestyle/design projects (recipes, planning)
- **Tool**: Utilities and automation scripts

### Project Status Levels
- **Planning**: Defining scope, architecture
- **Active**: Development in progress  
- **Paused**: Temporarily on hold
- **Completed**: Delivered and documented

---

## 🎯 PROJECT EXAMPLES

### 🌐 Claude Project Hub (Meta-Project)
- **Goal**: PWA web app for managing all projects with Claude API integration
- **Stack**: React + TypeScript + Vercel Serverless + GitHub API
- **Phase**: Phase 0 - Repository optimization (30%)
- **Complexity**: High (meta-system, PWA, API integrations)

### 🎮 MTG Web App (Complex)
- **Goal**: AI deck generator + live audio referee
- **Stack**: FastAPI + React + MLX (Apple Silicon)
- **Phase**: Environment setup (dependencies, MLX config)
- **Complexity**: High (ML, real-time audio, monetization)

### 🥗 Cucina Vegana (Medium)  
- **Goal**: Complete vegan kitchen management
- **Stack**: HTML/JS + JSON database
- **Phase**: Recipe database completion
- **Complexity**: Medium (data processing, UI)

### 📚 Università (Medium)
- **Goal**: Evidence-based study system
- **Stack**: Obsidian + Claude + Anki
- **Phase**: Note system templates
- **Complexity**: Medium (methodology, workflow)

---

## 🚀 COMMON COMMANDS

### Project Selection
```bash
# Navigate to project
cd projects/[project-name]/

# Load in Claude
"Work on [project-name]. Read projects/[name]/PROJECT.md for context.
Pay special attention to SESSION_HANDOFF section."
```

### New Project Creation
```bash
# Create structure
mkdir -p projects/new-project/{context,deliverables}
cp PROJECT_TEMPLATE.md projects/new-project/PROJECT.md

# Ask Claude to compile template
"New project: [idea]. Help compile PROJECT_TEMPLATE.md"
```

### Progress Updates
```bash
# After work session
git add projects/[name]/
git commit -m "[Project]: [what accomplished]"
git push
```

---

## ⚙️ TECHNICAL CONSTRAINTS

### Development Environment
- **OS**: macOS (Apple Silicon M1/M2/M3)
- **Python**: 3.12+ for all Python projects
- **Node.js**: 18+ for web projects (Hub, React apps)
- **Git**: All projects version controlled
- **Editor**: VS Code recommended

### AI/ML Specific (Apple Silicon)
- **Framework**: MLX for local model optimization
- **Models**: Llama-3-8B, Whisper, local deployment preferred
- **Memory**: 16GB unified memory limit consideration
- **Performance**: CPU + Neural Engine, no external GPU

### Web Development (Hub)
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Vercel Serverless Functions (Node.js)
- **APIs**: Claude API, GitHub API (Octokit)
- **Deployment**: Vercel (free tier)
- **Mobile**: PWA for iPhone + desktop

### General Principles
- **Local-first**: Offline capability preferred
- **Privacy**: Sensitive data stays local when possible
- **Open source**: Favor FOSS tools when possible
- **Simplicity**: Working solution > perfect architecture
- **Mobile-friendly**: Design for iPhone usage

---

## 🎯 SUCCESS METRICS

### For Claude Sessions
- **Context Load Time**: <30 seconds to understand project
- **Session Continuity**: SESSION_HANDOFF enables immediate resumption
- **Code Quality**: Production-ready, complete implementations
- **Progress**: Measurable advancement each session
- **Documentation**: Updated PROJECT.md logs

### For Projects
- **Completion Rate**: Projects reach "Completed" status
- **Time Efficiency**: Faster development with AI assistance
- **Code Quality**: Maintainable, well-documented outputs
- **Learning**: Skills/knowledge gained per project

### For Hub (Target V1.0)
- **Load Time**: <3s on 3G connection
- **Mobile UX**: Lighthouse score >90
- **API Latency**: Context loading <1s
- **Offline**: Core features work without internet
- **Cross-device**: Seamless iPhone ↔ desktop

---

## 📚 QUICK REFERENCE

### Key Files
- `KNOWLEDGE_BASE.md` ← This file (system overview)
- `PROJECT_TEMPLATE.md` ← Standard template for new projects  
- `README.md` ← Repository overview and setup
- `app/frontend/index.html` ← Legacy dashboard (still works)
- `hub/` ← Hub PWA development (V1.0 in progress)

### Current Interfaces
**Legacy Dashboard** (Functional):
- Location: `app/frontend/index.html`
- Purpose: Quick project overview, context copy
- Status: Working, will coexist with Hub V1.0

**Hub PWA** (In Development):
- Location: `hub/deliverables/`
- Purpose: Full-featured project management with Claude API
- Status: Phase 0 - Repository optimization
- Target: November 2025

### Git Workflow
- `main` branch for stable versions
- Feature branches for experiments
- Frequent commits with descriptive messages
- Push regularly for backup

### Dashboard Usage (Legacy)
1. Open `app/frontend/index.html`
2. View project cards with status/progress
3. Click "🤖 Claude" to copy context
4. Paste in Claude session to start working

---

## 🔧 TROUBLESHOOTING

### Context Loading Issues
- **Problem**: Claude doesn't understand project
- **Solution**: Ensure PROJECT.md is complete and current
- **Check**: All sections filled, SESSION_HANDOFF updated, current phase clear

### Session Continuity Issues
- **Problem**: Lost track of where we were
- **Solution**: Read SESSION_HANDOFF section in PROJECT.md
- **Check**: "Immediate Next Steps" subsection

### Code Generation Problems  
- **Problem**: Generated code doesn't work
- **Solution**: Verify tech stack constraints in PROJECT.md
- **Check**: Dependencies, environment, platform specifics

### Progress Tracking
- **Problem**: Lost track of what's done
- **Solution**: Update PROJECT.md log section after each session
- **Check**: Status percentages, completed tasks marked, SESSION_HANDOFF updated

---

## 📋 CURRENT SYSTEM STATUS

**Repository**: claude-24h-project (structured, documented)  
**Projects**: 4 active (Hub, MTG, Cucina, Università), all with complete PROJECT.md files  
**Templates**: WebApp, Study, Creative available  
**Dashboard**: 
- Legacy HTML dashboard ✅ Functional
- Hub PWA 🚧 In development (Phase 0 - 30%)

**Documentation**: Complete (setup, workflow, guides)

**Ready for**: 
- Development work on any active project using established templates and workflows
- Hub development using new web-first architecture
- Creation of new projects with standardized format

---

## 🌐 HUB PWA SPECIFICS

### What Hub Will Be (V1.0)
- **Progressive Web App**: Installable on iPhone + desktop
- **Claude API Integration**: Direct chat with auto-context loading
- **GitHub Integration**: Auto-read/write PROJECT.md files
- **Mobile-Optimized**: Touch-friendly, responsive, offline-capable
- **Session Persistence**: Conversations saved locally (IndexedDB)

### Current Hub Status
- **Phase**: Phase 0 - Repository Optimization (30%)
- **Location**: `hub/` folder (structure created)
- **Next Steps**: 
  1. Setup React + Vite project
  2. Implement Claude API integration
  3. Build context engine (PROJECT.md parser)
  4. Deploy to Vercel

### Hub vs Legacy Dashboard
| Feature | Legacy Dashboard | Hub V1.0 |
|---------|------------------|----------|
| Tech | Static HTML | React PWA |
| Context | Manual copy/paste | Auto-loaded |
| Claude | External (claude.ai) | Integrated API |
| Mobile | Responsive | Native PWA |
| Offline | Static only | Full offline support |
| Updates | Manual | Auto via GitHub API |

---

## 🔄 WORKFLOW UPDATES

### Using Hub (When V1.0 Ready)
1. Open Hub PWA (hub.yourname.vercel.app)
2. Install to home screen (iPhone/desktop)
3. Select project → Context auto-loads
4. Chat with Claude in-app
5. Code auto-saves, PROJECT.md auto-updates
6. Work from anywhere (phone, tablet, desktop)

### Using Legacy Dashboard (Now)
1. Open `app/frontend/index.html`
2. Click "🤖 Claude" on project card
3. Paste context in claude.ai
4. Manual workflow (copy code, update files)
5. Commit changes manually

---

<div align="center">

**🎯 KNOWLEDGE BASE v3.0**

*Optimized for rapid Claude context loading*

*Quick start → Full context in <30 seconds*

**Updated for Hub PWA architecture**

</div>