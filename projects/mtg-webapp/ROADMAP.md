# 🗺️ MTG Web App - Development Roadmap

> **AI-powered Magic: The Gathering deck generator + live referee**

**Status**: ⏸️ PAUSED (waiting for Hub V1.0)  
**Last Updated**: 2025-10-01  
**Progress**: 40% (Phase 1 - Environment Setup)

---

## 📍 CURRENT STATUS

**Phase**: Phase 1 - Environment Setup  
**Progress**: 40%  
**Paused On**: 2025-09-29  
**Reason**: Focusing on Hub development first

### When Paused
Was working on: Python environment setup + MLX installation  
Next planned: Complete dependency installation, test imports

### Resume Conditions
- ✅ Hub reaches Checkpoint 2.1 (Plugin System working)
- ✅ OR urgent need emerges (tournament coming up)
- ✅ OR Hub blocked and need context switch

---

## ✅ COMPLETED CHECKPOINTS

### Checkpoint 1.1: Environment Setup (Partial - 40%)
**Started**: 2025-09-29  
**Status**: In Progress (paused)  
**Time Spent**: 2h

**Completed Tasks**:
- [x] Created Python 3.12 virtual environment
- [x] Identified core dependencies (FastAPI, MLX, Whisper, etc.)
- [x] Defined Apple Silicon optimization strategy

**Pending Tasks**:
- [ ] Install MLX framework
- [ ] Install all Python dependencies
- [ ] Test imports
- [ ] Setup Ollama with Llama model

**Deliverable**: Working Python environment with all libraries importable

---

## 🚀 ALL CHECKPOINTS

### **PHASE 1: Environment Setup** (40% complete)

#### Checkpoint 1.1: Python Environment ⚡
**Status**: ⏸️ Paused (40% done)  
**Deliverable**: All dependencies installed, imports working  
**Est**: 2-3h total (2h done, 1h remaining)

#### Checkpoint 1.2: MLX Validation 🧠
**Status**: ⬜ Not Started  
**Deliverable**: MLX working on Apple Silicon, test inference  
**Est**: 1-2h  
**Prerequisites**: 1.1 complete

#### Checkpoint 1.3: Ollama Setup 🤖
**Status**: ⬜ Not Started  
**Deliverable**: Llama-3-8B model running locally  
**Est**: 2h  
**Prerequisites**: 1.2 complete

---

### **PHASE 2: MTG Data Pipeline** 📊

#### Checkpoint 2.1: Scryfall Integration 🃏
**Status**: ⬜ Not Started  
**Deliverable**: All MTG cards in local database  
**Est**: 3-4h  
**Prerequisites**: 1.3 complete

#### Checkpoint 2.2: Meta Data Collection 📈
**Status**: ⬜ Not Started  
**Deliverable**: Top decks from TopDeck.gg scraped  
**Est**: 2-3h  
**Prerequisites**: 2.1 complete

#### Checkpoint 2.3: Rules Parser 📖
**Status**: ⬜ Not Started  
**Deliverable**: MTG rules in structured JSON format  
**Est**: 4-5h  
**Prerequisites**: 2.1 complete

---

### **PHASE 3: Local LLM Fine-tuning** 🧠

#### Checkpoint 3.1: Dataset Preparation 📝
**Status**: ⬜ Not Started  
**Deliverable**: MTG training dataset (rules + interactions)  
**Est**: 5-6h  
**Prerequisites**: 2.3 complete

#### Checkpoint 3.2: MLX Fine-tuning 🔧
**Status**: ⬜ Not Started  
**Deliverable**: Fine-tuned Llama model for MTG  
**Est**: 8-10h  
**Prerequisites**: 3.1 complete

#### Checkpoint 3.3: Model Validation ✅
**Status**: ⬜ Not Started  
**Deliverable**: Model accuracy >90% on test cases  
**Est**: 3-4h  
**Prerequisites**: 3.2 complete

---

### **PHASE 4: FastAPI Backend** 🚀

#### Checkpoint 4.1: Core Endpoints 📡
**Status**: ⬜ Not Started  
**Deliverable**: Deck generation API working  
**Est**: 4-5h  
**Prerequisites**: 3.3 complete

#### Checkpoint 4.2: WebSocket Audio 🎤
**Status**: ⬜ Not Started  
**Deliverable**: Real-time audio transcription pipeline  
**Est**: 6-8h  
**Prerequisites**: 4.1 complete

#### Checkpoint 4.3: Database Setup 💾
**Status**: ⬜ Not Started  
**Deliverable**: SQLite → PostgreSQL migration  
**Est**: 2-3h  
**Prerequisites**: 4.1 complete

---

### **PHASE 5: Streamlit Prototype** 🎨

#### Checkpoint 5.1: UI Components 🖼️
**Status**: ⬜ Not Started  
**Deliverable**: Collection input, deck display, audio interface  
**Est**: 4-5h  
**Prerequisites**: 4.3 complete

#### Checkpoint 5.2: Integration Testing 🧪
**Status**: ⬜ Not Started  
**Deliverable**: End-to-end workflow tested  
**Est**: 3-4h  
**Prerequisites**: 5.1 complete

---

### **PHASE 6: Stripe Integration** 💳

#### Checkpoint 6.1: Payment Flow 💰
**Status**: ⬜ Not Started  
**Deliverable**: Credit purchase working  
**Est**: 3-4h  
**Prerequisites**: 5.2 complete

#### Checkpoint 6.2: Webhook Handler 🔔
**Status**: ⬜ Not Started  
**Deliverable**: Auto-credit on payment  
**Est**: 2-3h  
**Prerequisites**: 6.1 complete

---

### **PHASE 7: Production Deploy** 🚀

#### Checkpoint 7.1: Docker Setup 🐳
**Status**: ⬜ Not Started  
**Deliverable**: Containerized application  
**Est**: 3-4h  
**Prerequisites**: 6.2 complete

#### Checkpoint 7.2: Cloud Deployment ☁️
**Status**: ⬜ Not Started  
**Deliverable**: Live on Render/Railway  
**Est**: 2-3h  
**Prerequisites**: 7.1 complete

#### Checkpoint 7.3: Monitoring 📊
**Status**: ⬜ Not Started  
**Deliverable**: Error tracking, performance metrics  
**Est**: 2h  
**Prerequisites**: 7.2 complete

---

## 📝 SESSION LOG

### 2025-09-29 (2h) - Last Session Before Pause
**Checkpoint**: 1.1 (in progress)  
**Work Done**:
- Created virtual environment `venv_mtg`
- Researched Apple Silicon requirements
- Listed all dependencies needed
- Defined MLX optimization approach

**Blockers**: None technical  
**Decision**: Pause to focus on Hub (will accelerate this project later)

**Next Session (when resumed)**:
- Install MLX via pip
- Test on Apple Silicon
- Complete dependency installation
- Run import tests

---

## 🔧 TECHNICAL NOTES

### Stack Decisions
```python
Backend: FastAPI (async, modern)
ML Framework: MLX (Apple Silicon native)
LLM: Llama-3-8B (local, fine-tuned)
STT: Faster-Whisper (CPU-optimized)
Database: SQLite → PostgreSQL
Frontend: Streamlit → React (later)
```

### Apple Silicon Specifics
- Unified memory: 16GB limit (quantize models)
- CPU + Neural Engine (no external GPU)
- Expected inference: 20-50 tokens/sec
- Model load time: ~30 seconds

### Performance Targets
- Deck generation: <30 seconds
- Audio pipeline: <500ms latency
- Concurrent users: 50+ local, 1000+ production

---

## 🎯 WHEN TO RESUME

### Primary Trigger
**Hub Checkpoint 2.1 Complete**: Plugin system working
- Can use Hub to manage MTG development
- PDF processor plugin useful for MTG rules
- Notification plugin for deck generation alerts

### Secondary Triggers
- **Tournament coming**: Need deck generator urgently
- **Hub blocked**: Need context switch for motivation
- **Learning opportunity**: Interesting ML technique to try

### Don't Resume If
- Hub still in Phase 0-1 (too early)
- No clear immediate use case
- Just bored (better to push through Hub checkpoints)

---

## 💡 INTEGRATION WITH HUB

### How Hub Will Help MTG

**Phase 2 (Data Pipeline)**:
- Use Hub's PDF processor for rules parsing
- Notification when Scryfall scrape complete

**Phase 3 (Fine-tuning)**:
- Hub schedules overnight fine-tuning jobs
- Notification when model training done

**Phase 4 (Backend)**:
- Hub manages API endpoint testing
- Auto-generates FastAPI documentation

**Phase 5 (Prototype)**:
- Hub tracks UI feedback
- A/B testing via Hub analytics

**Phase 6 (Monetization)**:
- Hub monitors Stripe webhooks
- Analytics on credit usage patterns

---

## 🚨 RISKS & MITIGATIONS

### Technical Risks
- **MLX complexity**: First time using, may struggle
  - Mitigation: Allocate extra time (8-10h for fine-tuning)
- **Audio latency**: <500ms target aggressive
  - Mitigation: Start simple, optimize iteratively
- **Model accuracy**: Fine-tuning may not reach 90%
  - Mitigation: Fallback to Claude API for complex rules

### Business Risks
- **Monetization uncertain**: Will users pay for credits?
  - Mitigation: Free tier + validate with beta users
- **Competition**: Other MTG AI tools exist
  - Mitigation: Unique feature = live audio referee

### Project Risks
- **Scope creep**: Many cool features possible
  - Mitigation: Strict checkpoint adherence
- **Long pause**: Losing context during Hub development
  - Mitigation: This ROADMAP + PROJECT.md SESSION_HANDOFF

---

## 🎓 LEARNING GOALS (When Resumed)

### Phase 1-2
- [ ] MLX framework basics
- [ ] Apple Silicon optimization
- [ ] Scryfall API usage
- [ ] Web scraping best practices

### Phase 3-4
- [ ] LLM fine-tuning process
- [ ] FastAPI advanced patterns
- [ ] WebSocket real-time communication
- [ ] Audio processing pipelines

### Phase 5-7
- [ ] Stripe integration
- [ ] Docker deployment
- [ ] Production monitoring
- [ ] User onboarding design

---

## 📚 RESOURCES

### Documentation
- **PROJECT.md**: Complete project specification
- **Global ROADMAP.md**: Cross-project tracking
- **This file**: MTG-specific checkpoints

### External
- **MLX**: https://github.com/ml-explore/mlx
- **Scryfall API**: https://scryfall.com/docs/api
- **Faster-Whisper**: https://github.com/guillaumekln/faster-whisper
- **MTG Rules**: https://magic.wizards.com/en/rules

---

## 🔄 CHANGELOG

### 2025-10-01
- Created MTG-specific ROADMAP.md
- Marked project as paused (waiting for Hub)
- Documented resume conditions
- Defined Hub integration points

### 2025-09-29
- Started Phase 1 (Environment Setup)
- Completed 40% of Checkpoint 1.1
- Paused to focus on Hub development

---

<div align="center">

**🎮 MTG WEB APP ROADMAP v1.0**

*AI Deck Generator + Live Referee*

**Status**: Paused at Phase 1 (40%)  
**Resume When**: Hub Checkpoint 2.1 complete  
**Est. Completion**: 3-4 weeks after resume

---

*Paused but not forgotten*

</div>