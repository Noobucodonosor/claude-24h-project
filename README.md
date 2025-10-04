# 🎯 Claude Project Hub

**The AI-powered project management system that scales from 1 to 100+ projects without chaos.**

![Status](https://img.shields.io/badge/status-active_development-success)
![Version](https://img.shields.io/badge/version-2.1-blue)
![Projects](https://img.shields.io/badge/active_projects-4-orange)

---

## 🌟 Why Claude Project Hub?

**Stop context-switching chaos. Stop recreating project setups. Stop losing track of what you're building.**

### The Problem
- 🔥 Multiple projects = context switching nightmare
- 📝 Each new project = starting from scratch  
- 🤖 Claude forgets your project every session
- 📱 Can't work from mobile (limited claude.ai mobile UX)

### The Solution  
- 🎯 **Standardized PROJECT.md** → Claude understands instantly
- 🚀 **Template system** → New projects in 10 minutes
- 📊 **Unified dashboard** + **Hub PWA** (in development)
- 🤖 **AI-optimized workflows** → Maximum productivity with Claude
- 📱 **Mobile-first Hub** → Work from iPhone, iPad, anywhere

---

## ⚡ Quick Start (2 Minutes)

### 1. Clone & Setup
```bash
git clone https://github.com/Noobucodonosor/claude-24h-project
cd claude-24h-project
open app/frontend/index.html  # Launch legacy dashboard
```

### 2. Load in Claude
```
"Add from GitHub: https://github.com/Noobucodonosor/claude-24h-project

I use Claude Project Hub to manage multiple AI-assisted projects. 
What projects do you see and what should we work on?"
```

### 3. Start Building
Choose project from dashboard → Copy context → Work with Claude → Ship faster! 🚀

---

## 📊 Active Projects

### 🌐 **Claude Project Hub** (Meta-Project)
Progressive Web App for Project Management
- **Stack**: React + Vercel + Claude API + GitHub API
- **Status**: Phase 0 - Repository Optimization (30%)
- **Mobile**: iPhone-first PWA design
- **Next**: Phase 1 - Basic web app + Claude API integration

### 🎮 **MTG Web App**
AI Deck Generator + Live Audio Referee
- **Stack**: FastAPI + React + MLX (Apple Silicon)
- **Status**: Phase 1 - Environment Setup (40%, paused)
- **Features**: Collection → Optimized decks, Real-time audio rules enforcement
- **Next**: Complete MLX setup, Scryfall integration

### 🥗 **Cucina Vegana**
Complete Vegan Kitchen Management
- **Stack**: HTML/JS + JSON Database + USDA API
- **Status**: Phase 2 - Recipe Database (65%, paused)
- **Features**: 50+ recipe database, Menu generator, Shopping lists
- **Next**: Complete 30-recipe milestone, ingredient mapping

### 📚 **Università**
AI-Enhanced Study System
- **Stack**: Obsidian + Claude + Anki + Spaced Repetition
- **Status**: Phase 2 - Note System (60%, paused)
- **Features**: Evidence-based methodologies, Flashcard automation
- **Next**: Test workflow on real lectures, Claude integration

---

## 🏗️ System Architecture

**3 Core Layers:**

1. **📂 Storage Layer**: Structured projects with standardized PROJECT.md files
2. **🤖 AI Integration Layer**: Optimized Claude context loading via GitHub
3. **🎨 Interface Layer**: 
   - **Legacy Dashboard** (functional, static HTML)
   - **Hub PWA V1.0** (in development, React + Claude API + GitHub sync)

**Workflow**:
```
Select Project → Load Context → Work with Claude → 
Save Deliverables → Update Progress → Commit
```

---

## 🚀 Key Features

### ✅ Currently Available
- **📋 Standardized PROJECT.md** - Claude understands any project instantly
- **🎨 Project Templates** - WebApp, Study, Creative, Research ready-to-use
- **📊 Legacy Dashboard** - All projects status at a glance  
- **🧠 Knowledge Base** - Fast Claude context loading (<30 seconds)
- **📱 Mobile-Friendly** - Dashboard works on all devices

### 🚧 In Active Development (Hub PWA)
- **🌐 Progressive Web App** - Installable on iPhone + desktop
- **📱 Mobile-First UX** - Touch-optimized, responsive interface
- **🤖 Claude API Integration** - In-app chat with auto-context loading
- **🔄 GitHub Auto-Sync** - Auto-read/write PROJECT.md files
- **💾 Offline Mode** - Work without internet, sync later
- **🔐 Session Persistence** - Conversations saved locally

### 💡 Planned Features
- **👥 Multi-User Collaboration** - Share projects with team
- **🎙️ Voice Input** - Voice-to-text for mobile
- **🔌 Workflow Automation** - n8n/Zapier integrations

---

## 🛠️ Tech Stack

### Core System
- **Storage**: File system + Git (version controlled)
- **Dashboard**: HTML5 + CSS3 + Vanilla JS (zero dependencies)
- **Hub PWA**: React 18 + TypeScript + Vite
- **Backend**: Vercel Serverless Functions
- **AI**: Claude API + local LLMs (planned)

### Project Technologies
- **Web Apps**: React, FastAPI, PostgreSQL
- **AI/ML**: MLX (Apple Silicon), Ollama
- **Study Tools**: Obsidian, Markdown, Anki
- **Creative**: Custom HTML/JS, JSON databases

### Development
- **Platform**: macOS optimized (Apple Silicon native)
- **Version Control**: Git + GitHub
- **Editor**: VS Code
- **Deployment**: Vercel (Hub), local (other projects)

---

## 📋 Project Templates

| Template | Use Case | Example | Tech Stack |
|----------|----------|---------|------------|
| 🌐 **WebApp** | Full-stack apps | Hub PWA, MTG | React, FastAPI |
| 📚 **Study** | Learning & research | University | Obsidian + AI |
| 🎨 **Creative** | Design & lifestyle | Vegan Kitchen | HTML/JS |
| 🔧 **Tool** | Utilities | Scripts & CLIs | Python |

**Each template includes:**
- Complete PROJECT.md structure with all sections
- Folder organization (context/, deliverables/)
- Development phases with clear deliverables
- SESSION_HANDOFF for continuity between sessions

---

## 🔄 Workflow Examples

### Using Legacy Dashboard (Current)
```bash
open app/frontend/index.html
# Click project → Copy context → Paste in claude.ai → Work
```

### Using Hub PWA (When V1.0 Ready - Nov 2025)
```bash
# Open hub.yourname.vercel.app
# Install to home screen (iPhone/desktop)
# Select project → Context auto-loads
# Chat with Claude in-app → Code auto-saves
```

### New Project (10 Minutes)
```bash
mkdir -p projects/my-app/{context,deliverables}
cp PROJECT_TEMPLATE.md projects/my-app/PROJECT.md
# Ask Claude to help fill template → Start building!
```

---

## 📊 System Stats

- **📂 Projects**: 4 active + unlimited capacity
- **⚡ Setup Time**: <5 min first time, <30 sec per session
- **📝 Documentation**: 100+ pages optimized for AI consumption
- **🤖 Claude Efficiency**: 10x faster context loading with SESSION_HANDOFF
- **💾 Storage**: ~50MB per project average

---

## 🎯 Success Stories

### Before Claude Project Hub
- ❌ 30 minutes context switching between projects
- ❌ Claude confused about project context
- ❌ Lost track of what was built where
- ❌ Can't work from mobile

### After Claude Project Hub  
- ✅ **30 seconds** to switch project context
- ✅ **10 minutes** to start any new project
- ✅ **Claude instantly** understands project scope
- ✅ **Zero projects abandoned** - all tracked and organized
- ✅ **Work from anywhere** - Hub PWA enables mobile workflow

---

## 🌐 Hub PWA - The Future (V1.0: Nov 2025)

### What Makes Hub Special

**Progressive Web App**:
- 📱 Install on iPhone home screen
- 💻 Works on desktop browsers
- 🔌 Offline-capable with service worker
- ⚡ Fast, native-like performance

**Claude API Integration**:
- 🤖 Chat with Claude directly in-app
- 📂 Auto-load PROJECT.md context from GitHub
- 💾 Auto-save generated code
- 🔄 Auto-update PROJECT.md

**Mobile-Optimized**:
- 👆 Touch-friendly interface
- 📲 Bottom navigation (iPhone-friendly)
- 🌙 Dark mode support

### Current Hub Status

```
Phase 0: Repo Optimization    [██████░░░░░░░░░░░░░░]  30%
Phase 1: Basic Web App         [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 2: GitHub + Context      [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 3: Code Artifacts        [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 4: Auto-Commit + Memory  [░░░░░░░░░░░░░░░░░░░░]   0%
Phase 5: PWA + Mobile Polish   [░░░░░░░░░░░░░░░░░░░░]   0%
```

**Next Milestone**: Setup React + Vite, Claude API integration

---

## 🚀 Get Started Now

### For Individual Developers
1. **Fork/Clone this repository**
2. **Open legacy dashboard** (`app/frontend/index.html`)
3. **Load in Claude** (copy repo URL)
4. **Start your first project!**
5. **Watch for Hub V1.0** (November 2025)

### For Hub Development
```bash
cd hub/deliverables/frontend
# Setup coming in Phase 1 (Week 2)
```

---

## 🤝 Contributing

### Ways to Contribute
- 🐛 **Bug Reports**: Open issues
- 💡 **Feature Requests**: Suggest new functionality
- 📋 **Templates**: Share your project templates
- 🌐 **Hub Development**: Help build the PWA

### Development Setup
```bash
git clone https://github.com/Noobucodonosor/claude-24h-project
cd claude-24h-project
# Legacy dashboard: No build - open index.html
# Hub PWA: Coming in Phase 1
```

---

## 📚 Documentation

- **[📋 PROJECT_TEMPLATE.md](PROJECT_TEMPLATE.md)** - Standard template
- **[🧠 KNOWLEDGE_BASE.md](KNOWLEDGE_BASE.md)** - System context for Claude  
- **[🔄 docs/WORKFLOW.md](docs/WORKFLOW.md)** - Detailed workflows
- **[⚙️ docs/SETUP.md](docs/SETUP.md)** - Technical setup
- **[🚀 project-creation-guide.md](project-creation-guide.md)** - How to create projects

---

## 🔮 Roadmap

### Q4 2025
- ✅ Repository optimization complete
- 🚧 Hub Phase 1: Basic web app + Claude API
- 🚧 Hub Phase 2: GitHub integration

### Q1 2026
- 🎯 Hub V1.0 Release (full PWA features)
- 🎯 Mobile-first workflow validated

### Q2 2026+
- 💡 Multi-user features
- 💡 Voice input (Whisper)
- 💡 Workflow automation
- 💡 Template marketplace

---

## 📜 License

**Personal Use** - Built for individual productivity optimization.

Feel free to fork and adapt! If you build something cool, let me know! 🚀

---

## 🌟 Star This Repo!

If Claude Project Hub helps you build faster, give it a ⭐!

**Questions?** Open an issue or start a discussion.

---

<div align="center">

**🎯 CLAUDE PROJECT HUB**

*Your AI-Powered Project Command Center*

*From Chaos to Clarity • From Ideas to Shipped Products*

**[🚀 Get Started](#-get-started-now) • [📊 See Projects](#-active-projects) • [📋 Use Templates](PROJECT_TEMPLATE.md)**

---

*Built with ❤️ and 🤖 for developers who ship*

</div>