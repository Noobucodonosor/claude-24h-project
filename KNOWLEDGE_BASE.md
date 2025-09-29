# 🎯 Claude Project Hub - Knowledge Base

**QUICK CONTEXT**: Meta-system for managing unlimited AI-assisted projects with standardized workflows.

---

## ⚡ CLAUDE QUICK START

### What You Need to Know Immediately
- **🎯 PURPOSE**: I manage multiple projects (MTG, Cucina, Università, etc.) using standardized PROJECT.md files
- **📂 STRUCTURE**: Each project in `projects/[name]/PROJECT.md` with complete context
- **🤖 YOUR ROLE**: Read PROJECT.md, understand current phase, generate production code
- **🚀 WORKFLOW**: Context → Code → Iterate → Deliverables

### Current Active Projects (3)
1. **🎮 MTG Web App** (Planning, 40%) - AI deck generator + live referee
2. **🥗 Cucina Vegana** (Active, 65%) - Meal planning system  
3. **📚 Università** (Active, 30%) - Study optimization tools

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

---

## 🤖 CLAUDE INTEGRATION RULES

### When Starting Work
1. **Read PROJECT.md completely** for context
2. **Identify current phase** and progress
3. **Generate complete code** (no placeholders/TODOs)
4. **Validate against project constraints**
5. **Suggest next logical steps**

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

What should we build/fix/optimize?"
```

---

## 🏗️ SYSTEM ARCHITECTURE

### 3-Layer Design
1. **Storage Layer**: Structured file system (`projects/`, `templates/`, `docs/`)
2. **Integration Layer**: Claude context loading + code generation
3. **Interface Layer**: Dashboard HTML app for project management

### Workflow Loop
```
Select Project → Load Context → Work with Claude → Save Deliverables → Update Progress → Commit
```

---

## 📊 PROJECT TYPES & TEMPLATES

### Available Templates
- **WebApp**: Full-stack applications (FastAPI, React, etc.)
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
"Work on [project-name]. Read projects/[name]/PROJECT.md for context."
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
- **Git**: All projects version controlled
- **Editor**: VS Code recommended

### AI/ML Specific (Apple Silicon)
- **Framework**: MLX for local model optimization
- **Models**: Llama-3-8B, Whisper, local deployment preferred
- **Memory**: 16GB unified memory limit consideration
- **Performance**: CPU + Neural Engine, no external GPU

### General Principles
- **Local-first**: Offline capability preferred
- **Privacy**: Sensitive data stays local
- **Open source**: Favor FOSS tools when possible
- **Simplicity**: Working solution > perfect architecture

---

## 🎯 SUCCESS METRICS

### For Claude Sessions
- **Context Load Time**: <30 seconds to understand project
- **Code Quality**: Production-ready, complete implementations
- **Progress**: Measurable advancement each session
- **Documentation**: Updated PROJECT.md logs

### For Projects
- **Completion Rate**: Projects reach "Completed" status
- **Time Efficiency**: Faster development with AI assistance
- **Code Quality**: Maintainable, well-documented outputs
- **Learning**: Skills/knowledge gained per project

---

## 📚 QUICK REFERENCE

### Key Files
- `KNOWLEDGE_BASE.md` ← This file (system overview)
- `PROJECT_TEMPLATE.md` ← Standard template for new projects  
- `README.md` ← Repository overview and setup
- `app/frontend/index.html` ← Project dashboard

### Git Workflow
- `main` branch for stable versions
- Feature branches for experiments
- Frequent commits with descriptive messages
- Push regularly for backup

### Dashboard Usage
1. Open `app/frontend/index.html`
2. View project cards with status/progress
3. Click "🤖 Claude" to copy context
4. Paste in Claude session to start working

---

## 🔧 TROUBLESHOOTING

### Context Loading Issues
- **Problem**: Claude doesn't understand project
- **Solution**: Ensure PROJECT.md is complete and current
- **Check**: All sections filled, current phase clear

### Code Generation Problems  
- **Problem**: Generated code doesn't work
- **Solution**: Verify tech stack constraints in PROJECT.md
- **Check**: Dependencies, environment, platform specifics

### Progress Tracking
- **Problem**: Lost track of what's done
- **Solution**: Update PROJECT.md log section after each session
- **Check**: Status percentages, completed tasks marked

---

## 📋 CURRENT SYSTEM STATUS

**Repository**: claude-project-hub (structured, documented)  
**Projects**: 3 active, all with complete PROJECT.md files  
**Templates**: WebApp, Study, Creative available  
**Dashboard**: Functional HTML interface  
**Documentation**: Complete (setup, workflow, guides)

**Ready for**: Development work on any active project or creation of new projects using established templates and workflows.

---

<div align="center">

**🎯 KNOWLEDGE BASE v2.0**

*Optimized for rapid Claude context loading*

*Quick start → Full context in <30 seconds*

</div>