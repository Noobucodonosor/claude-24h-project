# 🚀 PROJECT CREATION GUIDE - Claude Project Hub

**Metodologia strutturata per creare nuovi progetti compliant con il sistema**

---

## 📋 QUICK START: New Project Process

**User dice**: *"Voglio creare un nuovo progetto: [idea]"*

**Claude risponde con**: Discovery Questions + Template Generation + Setup Instructions

---

## 🔍 DISCOVERY QUESTIONS FRAMEWORK

### 1. PROJECT ESSENCE (Required)
- **Idea Core**: "Descrivi in una frase il problema che vuoi risolvere o l'opportunità"
- **Goal**: "Qual è il risultato finale che vuoi ottenere?"
- **Type**: "È un WebApp, Tool, Creative, Study, o Research project?"

### 2. CONTEXT & SCOPE (Required)
- **Why Now**: "Perché questo progetto ora? Cosa lo ha scatenato?"
- **Success**: "Come capisci che il progetto è completato con successo?"
- **Constraint**: "Hai vincoli di tempo, budget o tecnologie specifiche?"

### 3. TECHNICAL DIRECTION (If Applicable)
- **Stack Preference**: "Hai preferenze tecnologiche o vuoi che suggerisca io?"
- **Experience Level**: "Hai esperienza con le tecnologie coinvolte?"
- **Platform**: "Dove deve funzionare? (Web, mobile, desktop, API, etc.)"

### 4. PRIORITY & TIMELINE (Required)
- **Priority**: "Alta, Media, o Bassa priorità rispetto agli altri progetti?"
- **Timeline**: "Hai una deadline o è flessibile?"
- **Effort**: "Quante ore/settimana puoi dedicare?"

### 5. DELIVERABLES VISION (Required)
- **Must Have**: "Quali sono le 3 feature assolutamente necessarie?"
- **Nice to Have**: "Cosa sarebbe bello avere se c'è tempo?"
- **Won't Have**: "Cosa sicuramente NON includerai in v1.0?"

---

## 🛠️ CLAUDE RESPONSE TEMPLATE

Dopo le Discovery Questions, Claude genera:

```markdown
## 📊 PROJECT ANALYSIS

**Project Name**: [Generated name]
**Type**: [WebApp/Tool/Creative/Study/Research]
**Complexity**: [Low/Medium/High - based on scope]
**Estimated Duration**: [X weeks/months]

## 🎯 REFINED OBJECTIVES

**Primary Goal**: [Refined from user input]
**Success Metrics**: [Concrete, measurable]

## 🏗️ SUGGESTED ARCHITECTURE

**Recommended Stack**: [Based on requirements + user experience]
**Why This Stack**: [Brief rationale]
**Alternatives Considered**: [If applicable]

## 📋 PHASE BREAKDOWN

### Phase 1: [Name] (X days)
- [Key tasks]
- **Deliverable**: [Concrete output]

### Phase 2: [Name] (X days)
- [Key tasks]  
- **Deliverable**: [Concrete output]

[Continue based on complexity...]

## 🚨 IDENTIFIED RISKS & MITIGATIONS

- **Risk 1**: [Potential issue] → **Mitigation**: [How to handle]
- **Risk 2**: [Potential issue] → **Mitigation**: [How to handle]

## 💡 NEXT STEPS

1. **Create project structure**: `mkdir -p projects/[name]/{context,deliverables}`
2. **Generate PROJECT.md**: [I'll create it based on this analysis]
3. **Setup environment**: [Specific steps if technical project]
4. **First milestone**: [What to focus on first]
```

---

## 🎨 PROJECT TYPE SPECIALIZATIONS

### WebApp Projects - Additional Questions
- "Frontend, backend, o full-stack?"
- "Hai necessità di database? Che tipo di dati?"
- "Serve autenticazione utenti?"
- "Deploy locale o cloud?"

### Study/Research Projects - Additional Questions
- "È per un esame specifico o skill development?"
- "Che tipo di materiali devi processare?"
- "Serve integrazione con sistemi esistenti (Notion, Anki, etc.)?"

### Creative Projects - Additional Questions
- "È per uso personale o da condividere?"
- "Che tipo di contenuto crei/gestisci?"
- "Serve workflow automation?"

### Tool Projects - Additional Questions
- "CLI, GUI, o web-based?"
- "Solo per te o per distribuzione?"
- "Integrazione con altri tool esistenti?"

---

## 📝 PROJECT.MD GENERATION CHECKLIST

Claude genera PROJECT.md completo verificando:

### ✅ META Section
- [ ] Type corretto basato su discovery
- [ ] Priority allineata a workload corrente  
- [ ] Timeline realistica
- [ ] Status = Planning (nuovo progetto)

### ✅ CONTEXT Section
- [ ] Problem/Goal clear da user input
- [ ] Background sufficiente per Claude future
- [ ] Success criteria concrete e misurabili

### ✅ OBJECTIVES Section  
- [ ] Primary objective SMART (Specific, Measurable, Achievable, Relevant, Time-bound)
- [ ] Secondary objectives che supportano il primary
- [ ] Aligned con user Must Have/Nice to Have

### ✅ STACK Section
- [ ] Technology choices giustificate
- [ ] Compatible con user experience level
- [ ] Alternative considerate se stack complesso

### ✅ PHASES Section
- [ ] Almeno 3 phases concrete
- [ ] Deliverables specifici per fase
- [ ] Duration estimates realistiche
- [ ] Dependencies tra phases identificate

### ✅ DELIVERABLES Section
- [ ] Must Have = MVP functionale
- [ ] Should Have = importante ma non blockers
- [ ] Could Have = nice extras
- [ ] Won't Have = clear scope limits

### ✅ CONSTRAINTS Section
- [ ] Technical constraints identificati
- [ ] Resource constraints (time/budget) chiari
- [ ] Known risks documentati

---

## 🔧 FOLDER STRUCTURE GENERATION

Claude fornisce exact commands:

```bash
# Create project structure
mkdir -p projects/[project-name]
mkdir -p projects/[project-name]/context
mkdir -p projects/[project-name]/deliverables

# Type-specific subfolders
# WebApp:
mkdir -p projects/[project-name]/deliverables/{code,docs,assets}

# Study:  
mkdir -p projects/[project-name]/deliverables/{notes,flashcards,summaries}

# Creative:
mkdir -p projects/[project-name]/deliverables/{designs,content,exports}

# Tool:
mkdir -p projects/[project-name]/deliverables/{code,docs,tests}
```

---

## 🎯 INTEGRATION WITH EXISTING PROJECTS

### Portfolio Balance Check
Before creating, Claude checks:
- **Current active projects**: [Count from knowledge base]
- **Resource allocation**: User time capacity
- **Priority conflicts**: How this fits with existing High priority projects
- **Technology overlap**: Can leverage existing learnings?

### Recommendation Logic
- **If >3 active projects**: Suggest completing one first OR deprioritizing existing
- **If high complexity + multiple active**: Suggest starting with simpler project
- **If similar tech stack to existing**: Highlight synergies and knowledge transfer

---

## 📊 QUALITY GATES

Before finalizing PROJECT.md, verify:

### Gate 1: Clarity
- [ ] Any Claude team member could understand and work on this project
- [ ] Success criteria are unambiguous  
- [ ] Technical approach is clearly defined

### Gate 2: Feasibility
- [ ] Timeline is realistic given user constraints
- [ ] Technical complexity matches user skill level
- [ ] Resource requirements are reasonable

### Gate 3: Value
- [ ] Project solves a real problem/need
- [ ] Effort/benefit ratio is reasonable
- [ ] Aligns with user's broader goals

### Gate 4: Completeness
- [ ] All PROJECT.md sections are meaningfully filled
- [ ] Phases have concrete deliverables
- [ ] Dependencies and risks are identified

---

## 🚀 POST-CREATION WORKFLOW

After PROJECT.md creation:

### Immediate Setup (User)
1. **Create folder structure** (copy exact commands from Claude)
2. **Save PROJECT.md** in correct location  
3. **First commit**: `git add projects/[name]/ && git commit -m "New project: [name] - Initial setup"`
4. **Update dashboard** (if dynamic dashboard not yet implemented)

### First Work Session
1. **Load in Claude**: Copy PROJECT.md or use dashboard "🤖 Claude" button
2. **Validate architecture**: "Review this PROJECT.md and suggest any improvements"
3. **Start Phase 1**: Focus on first concrete deliverable
4. **Log progress**: Update PROJECT.md log section after session

---

## 🎨 EXAMPLE INTERACTION FLOW

### User Input
*"Voglio creare un'app per tracciare le mie corse con GPS e statistiche"*

### Claude Discovery (Automatic)
*"Ottima idea! Per creare il PROJECT.md ottimale, ho bisogno di alcune info:*

*🎯 **CONTEXT**: Usi già app per running (Strava, Nike Run Club)? Cosa manca che ti serve?*
*📱 **PLATFORM**: App mobile nativa, web app, o entrambi?*
*🔧 **FEATURES**: Oltre GPS e stats, serve social sharing, training plans, o altro?*
*⚡ **PRIORITY**: Quanto è importante vs progetti MTG/Cucina/Università?*
*🕒 **TIMELINE**: Hai deadline particolari o è explorazione?*
*💻 **TECH**: Hai esperienza mobile dev o preferisci web technologies?*"

### User Response
*"Uso Strava ma voglio privacy completa (dati locali). Web app va bene, so HTML/JS. Priorità media, flessibile timeline. Features: GPS tracking, stats basic, export GPX."*

### Claude Output
*"Perfetto! 🎯 Ecco il progetto strutturato:"*

[Genera PROJECT.md completo + folder structure commands + immediate next steps]

---

## 🧠 CLAUDE MEMORY INTEGRATION

### Project Context Retention
- **Active Project Count**: Update knowledge of current workload  
- **User Skill Profile**: Learn from previous projects what works
- **Preference Patterns**: Tech choices, project types, work rhythms
- **Success Patterns**: What approaches worked well before

### Continuous Improvement
- **Template Evolution**: Improve discovery questions based on project success
- **Risk Database**: Learn common risks for project types
- **Duration Calibration**: Improve time estimates based on completed projects

---

## 📚 INTEGRATION WITH KNOWLEDGE BASE

This guide supplements:
- **PROJECT_TEMPLATE.md**: Raw template structure
- **KNOWLEDGE_BASE.md**: System overview for Claude
- **WORKFLOW.md**: Post-creation work processes

Position in system:
- **Pre-creation**: This guide (PROJECT_CREATION_GUIDE.md)
- **Creation**: PROJECT_TEMPLATE.md
- **Execution**: WORKFLOW.md
- **Management**: Dashboard + git workflow

---

<div align="center">

**🚀 PROJECT CREATION GUIDE v1.0**

*From idea to structured project in 10 minutes*

*Optimized for Claude Project Hub ecosystem*

</div>