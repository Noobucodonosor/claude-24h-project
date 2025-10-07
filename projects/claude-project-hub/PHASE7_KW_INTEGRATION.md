# 🧠 Phase 7: Knowledge Weaver Integration

> **Prerequisites**: Hub Checkpoints 0.1 through 6.3 complete, KW validated as external client

**External Docs Required**: Upload `projects/knowledge-weaver/PROJECT.md` to claude.ai Project before starting

---

## 🎯 WHAT IS KNOWLEDGE WEAVER

Learning discovery system where interests converge to create meta-interests recursively. Similar architecture to Hub but for learning domain.

**Core Concept**: "Nautica" + "Coworking" share operational dimension "space management" → new interest → converges further → infinite exploration.

**Isomorphism with Hub**:
| | Hub | Knowledge Weaver |
|-|-----|------------------|
| Corpus | Projects + docs | Interests + academic programs |
| Query | Task | Problem/exam |
| Retrieval | Semantic search | Convergence detection |
| Growth | New projects | New interests discovered |

---

## 📋 TWO-PHASE STRATEGY

### Why Not Integrate Immediately?

Attempting deep KW integration now = scope creep. With mature Hub (RAG working, plugins stable, workflows tested), integrating KW becomes straightforward reuse of validated patterns.

### Phase 1 (Current → Checkpoint 4.3): Foundation
- KW operates as **external client**
- Uses Hub APIs when available
- Separate repositories
- Focus: Build solid Hub infrastructure

### Phase 2 (After Checkpoint 4.3): Deep Integration
- KW becomes **internal Hub module**
- Shared vector store, unified database
- Single UI with "Projects" and "Knowledge" tabs
- Implementation: Phase 7 (5 checkpoints)

**Trigger**: Checkpoint 4.3 complete + KW validated externally

---

## 🚀 PHASE 7 CHECKPOINTS

### Checkpoint 7.1: KW Module Structure 🏗️
**Goal**: Restructure KW as Hub internal module  
**Est**: 4-6h  
**Prerequisites**: 6.3 complete, KW operational externally

**Tasks**:
- [ ] Create `hub/src/modules/knowledge/` directory
- [ ] Migrate interests data (JSON → Supabase schema)
- [ ] Integrate with existing vector store (namespace approach)
- [ ] UI: Add "Knowledge" navigation tab
- [ ] Test: Seamless Projects ↔ Knowledge switching

**Deliverable**: KW accessible from Hub UI, zero functionality loss

**Technical**:
```typescript
// Unified entity access
const entity = await hub.getEntity({
  type: 'project' | 'interest',
  id: string
});

// Same vector store, different namespace
vectorStore.search(query, { namespace: 'interests' })
```

---

### Checkpoint 7.2: Unified Data Layer 🗄️
**Goal**: Single database serving Projects + Interests  
**Est**: 3-5h  
**Prerequisites**: 7.1 complete

**Tasks**:
- [ ] Extend Supabase schema:
  ```sql
  CREATE TABLE interests (
    id UUID PRIMARY KEY,
    name TEXT,
    operational_dimensions JSONB,
    embedding vector(1536)
  );
  
  CREATE TABLE convergences (
    id UUID PRIMARY KEY,
    entity_a_type TEXT, -- 'project' or 'interest'
    entity_a_id UUID,
    entity_b_type TEXT,
    entity_b_id UUID,
    shared_dimension TEXT,
    validated BOOLEAN
  );
  ```
- [ ] Migration script: KW JSON → Supabase
- [ ] Single vector store for all entity types
- [ ] Test cross-domain semantic search

**Deliverable**: Query "optimization" returns both Projects and Interests

---

### Checkpoint 7.3: Shared Plugin System 🔌
**Goal**: Zero plugin duplication, works on any entity type  
**Est**: 2-3h  
**Prerequisites**: 7.2 complete

**Tasks**:
- [ ] Update plugin interface (generic Entity type)
- [ ] "intreccia" plugin: detects entity type, runs convergence
- [ ] PDF processor: auto-detects (project doc vs syllabus)
- [ ] Test plugins work unchanged on Interests

**Deliverable**: Existing plugins generic

**Example**:
```typescript
// Before:
await plugins.run('pdf-processor', { 
  projectId: 'università' 
});

// After:
await plugins.run('pdf-processor', { 
  entity: { type: 'interest', id: 'fisica-syllabus' }
});
```

---

### Checkpoint 7.4: Cross-Domain Workflows 🔄
**Goal**: n8n workflows connecting Projects ↔ Interests  
**Est**: 4-6h  
**Prerequisites**: 7.3 complete

**Tasks**:
- [ ] Workflow "Study Optimizer":
  - Trigger: Exam scheduled (Università)
  - Steps: Find KW interests → Convergences → Study plan
- [ ] Workflow "Project Enrichment":
  - Trigger: New project created
  - Steps: Analyze → Find related interests → Suggest connections
- [ ] Test: 2+ cross-domain workflows operational

**Deliverable**: Automated bridges Projects ↔ Learning

**Example Output**:
```
Workflow: "Study Optimizer" for Fisica 2 exam

Found convergences:
- Interest "Nautica" shares "force dynamics"
- Interest "IoT agricoltura" shares "sensor analysis"

Study plan generated:
1. Review forces using boat navigation examples
2. Practice with agricultural sensor datasets
3. 45 flashcards: theory ↔ practice

Guide: projects/università/exams/fisica-2-plan.md
```

---

### Checkpoint 7.5: Unified Intelligence Layer 🧠
**Goal**: Pattern detection across Projects + Interests  
**Est**: 3-4h  
**Prerequisites**: 7.4 complete

**Tasks**:
- [ ] Analytics: Track patterns across domains
- [ ] Meta-pattern detection: "optimization-under-constraints" in:
  - Hub (context tokens)
  - Nautica (routes)
  - Università (scheduling)
  - Coworking (space+budget)
- [ ] Proactive suggestions: "Interest X might improve Project Y"
- [ ] Dashboard: Holistic Projects + Knowledge graph

**Deliverable**: System recognizes cross-domain opportunities

**Example Intelligence**:
```
🧠 Pattern Detected: "optimization-under-constraints"

Observed in:
- 4 Projects: Hub, Università, Coworking, MTG
- 6 Interests: Nautica, IoT, Cucina, Engineering

Suggestion: Recurring meta-pattern
→ Consider studying Operations Research
→ Solutions applicable across 10+ entities
→ ROI: High
```

---

## 📊 PHASE 7 SUMMARY

**Duration**: 15-20h total  
**Trigger**: Hub Checkpoint 4.3 complete  
**Result**: Unified system, zero duplication, isomorphic architecture validated  
**Next**: Continuous evolution, new domains easily added

---

## 🎓 WHAT THIS ENABLES

### Before Phase 7
- Hub: Manage projects
- KW: Separate learning system
- No cross-pollination

### After Phase 7
- **Single UI**: Projects + Knowledge unified
- **Shared Infrastructure**: One vector store, one DB, one plugin system
- **Cross-Domain Discovery**: "Your Project X converges with Interest Y"
- **Automated Learning**: Workflows bridge doing ↔ understanding
- **Meta-Patterns**: System discovers universal structures across domains

---

## 🔐 PREREQUISITES CHECKLIST

Before starting Phase 7:

- [ ] Hub Checkpoint 6.3 complete (all phases done)
- [ ] Hub used for 1+ complete project cycle
- [ ] Knowledge Weaver developed and validated as external client
- [ ] KW PROJECT.md uploaded to claude.ai Project
- [ ] Understanding: Phase 7 is reuse of proven patterns, not new complexity

---

## 📚 EXTERNAL DOCS NEEDED

**When starting Phase 7**, upload to claude.ai Project:
- `projects/knowledge-weaver/PROJECT.md`

**Why**: Contains KW data schemas, operational dimensions, convergence logic.

**Current Status**: Not needed until Checkpoint 4.3 complete (months away).

---

<div align="center">

**🧠 PHASE 7: KNOWLEDGE WEAVER INTEGRATION v1.0**

*Unified Discovery Engine: Projects + Learning*

**Trigger**: Hub mature (Checkpoint 4.3+)  
**Duration**: 15-20h  
**Result**: Single system, dual domain

---

*From efficiency to enlightenment*

</div>