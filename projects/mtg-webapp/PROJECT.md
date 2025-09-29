# MTG Web App - AI-Powered Magic Assistant

> 🎮 **CONTEXT**: Advanced MTG web app combining deck generation + live AI referee with real-time audio transcription

---

## 📊 META

- **Type**: WebApp (Complex ML Pipeline)
- **Priority**: High
- **Duration**: 3-4 weeks
- **Status**: Phase 1 - Environment Setup (40%)
- **Started**: 2025-09-29
- **Deadline**: Flexible
- **Budget**: €0 (local development)

---

## 🎯 CORE OBJECTIVES

### Primary Goal
**Create production-ready MTG web app with AI deck generation + live audio referee, optimized for Apple Silicon, with €/credit monetization.**

### Key Features
- **🃏 Deck Generator**: Collection → Optimized 60/100-card decks (1 credit)
- **🎮 Live AI Referee**: Real-time audio → Rule enforcement + alerts (5 credits)
- **💰 Stripe Integration**: €1=100 credits, webhook automation
- **⚡ Apple Silicon**: MLX-optimized Llama-3-8B local inference

### Success Criteria
- Deck generation: <30s response time
- Audio pipeline: <500ms latency (mic → alert)
- Monetization: Functional Stripe checkout + webhook
- Local ML: Works offline on MacBook M-series

---

## 🛠️ TECH STACK (Apple Silicon Optimized)

### Backend Core
- **FastAPI**: WebSocket real-time communication
- **Database**: SQLite (dev) → PostgreSQL (prod)
- **Server**: Uvicorn ASGI

### AI/ML Pipeline
- **LLM**: Llama-3-8B + MLX fine-tuning (Apple Silicon native)
- **STT**: Faster-Whisper (CPU-optimized, no GPU needed)
- **TTS**: gTTS (free) / ElevenLabs (premium)
- **Model Management**: Ollama (local deployment)

### Frontend
- **Prototype**: Streamlit (rapid development)
- **Production**: React (scalable UI)
- **Audio**: WebAudio API + WebSocket streaming

### External APIs
- **Cards**: Scryfall API (complete MTG database)
- **Meta**: TopDeck.gg API (competitive decklists)
- **Payments**: Stripe Checkout + Webhooks

### Development
- **Python**: 3.12+
- **Environment**: venv + pip
- **Version Control**: Git + GitHub

---

## 📋 DEVELOPMENT PHASES

### Phase 1: Environment Setup ⚙️ (Current - 40%)
**Goal**: Apple Silicon development environment ready

**Tasks**:
- [x] Python 3.12 virtual environment
- [ ] Core dependencies installation
- [ ] MLX framework setup
- [ ] Ollama local model deployment
- [ ] Test imports verification

**Commands**:
```bash
python3.12 -m venv venv_mtg
source venv_mtg/bin/activate
pip install fastapi uvicorn faster-whisper gtts stripe sqlalchemy websockets soundfile mlx torch
```

**Deliverables**: Working Python environment with all libraries importable
**Duration**: 2 days

---

### Phase 2: MTG Data Pipeline 📊
**Goal**: Complete MTG knowledge base for LLM

**Tasks**:
- [ ] Scryfall API scraper (all cards + formats)
- [ ] TopDeck.gg meta-game data
- [ ] MTG rules parsing (official PDFs → JSON)
- [ ] SQLite schema + data import

**Commands**:
```bash
python scripts/scrape_scryfall.py
python scripts/fetch_topdecks.py
python scripts/process_rules.py
```

**Deliverables**: Local MTG database with 25k+ cards + current meta
**Duration**: 3 days

---

### Phase 3: Local LLM Fine-tuning 🧠
**Goal**: Llama-3-8B specialized for MTG rules

**Tasks**:
- [ ] Dataset preparation (rules + interactions)
- [ ] MLX fine-tuning script (Apple Silicon optimized)
- [ ] Model validation (test cases)
- [ ] Ollama deployment

**Commands**:
```bash
python fine_tune/prepare_dataset.py
python fine_tune/mlx_finetune.py --model llama-3-8b
ollama create mtg-referee ./fine_tune/Modelfile
```

**Deliverables**: Local MTG-expert LLM accessible via Ollama
**Duration**: 1 week

---

### Phase 4: FastAPI Backend 🚀
**Goal**: Production-ready API with WebSocket audio

**Endpoints**:
- `POST /api/deck/generate` - Deck generation from collection
- `POST /api/match/simulate` - Text match simulation
- `WS /api/live/audio` - Real-time audio processing
- `POST /api/payment/stripe` - Credit purchase
- `POST /api/webhook/stripe` - Payment confirmation

**Audio Pipeline**: Mic → WebSocket → Faster-Whisper → LLM → TTS → Alert

**Deliverables**: Complete backend with audio processing
**Duration**: 1 week

---

### Phase 5: Streamlit Prototype 🎨
**Goal**: Functional UI for testing all features

**Features**:
- Collection input form
- Generated deck visualization
- Live audio session interface
- Credit balance display

**Deliverables**: Working prototype for user testing
**Duration**: 3 days

---

### Phase 6: Stripe Integration 💳
**Goal**: Functional monetization system

**Tasks**:
- [ ] Stripe account setup (test → prod)
- [ ] Credit system database
- [ ] Webhook handler (payment → credit update)
- [ ] Error handling + refunds

**Deliverables**: Complete payment flow
**Duration**: 2 days

---

### Phase 7: Production Deploy 🚀
**Goal**: Cloud deployment with monitoring

**Infrastructure**:
- Backend: Render/Railway (Docker)
- Frontend: Vercel (React build)
- Database: Supabase/Render PostgreSQL

**Deliverables**: Live production app
**Duration**: 3 days

---

## 🎁 SUCCESS DELIVERABLES

### Must Have (MVP)
- [x] Environment setup (Apple Silicon optimized)
- [ ] MTG card database (Scryfall integration)
- [ ] Deck generation algorithm
- [ ] Audio transcription pipeline
- [ ] Basic rule enforcement
- [ ] Stripe payment system

### Should Have
- [ ] Advanced rule validation
- [ ] Match history logging
- [ ] Mobile-responsive UI
- [ ] Performance monitoring

### Could Have
- [ ] Tournament mode
- [ ] Multiplayer support
- [ ] Advanced analytics
- [ ] AI deck recommendations

### Won't Have (v1.0)
- ❌ Video analysis
- ❌ Card recognition (computer vision)
- ❌ Social features
- ❌ Multi-language support

---

## 🚨 CRITICAL CONSTRAINTS

### Apple Silicon Requirements
- **MLX Framework**: Native M1/M2/M3 optimization mandatory
- **Memory Limit**: 16GB unified memory → model quantization required
- **No External GPU**: CPU/Neural Engine only

### Performance Targets
- **Deck Generation**: <30 seconds
- **Audio Pipeline**: <500ms end-to-end latency
- **Concurrent Users**: 50+ (local testing), 1000+ (production)

### Business Constraints
- **GDPR Compliance**: No audio storage without explicit consent
- **PCI-DSS**: Stripe handles all payment data
- **Free Tier**: 10 credits initial + 1 weekly deck generation

---

## 📊 CURRENT STATUS

### Phase 1 Progress: 40%
- ✅ Virtual environment created
- ✅ Basic dependencies identified
- 🟡 MLX installation pending
- 🟡 Ollama setup pending
- ❌ Full import test pending

### Immediate Next Steps
1. **Complete dependency installation**
2. **Test MLX on Apple Silicon**
3. **Setup Ollama with base Llama model**
4. **Create first test script**

---

## 🔧 APPLE SILICON SPECIFICS

### MLX Optimization
- **Framework**: Apple's MLX for native M-series acceleration
- **Memory**: Unified memory architecture exploitation
- **Quantization**: 4-bit/8-bit for memory efficiency
- **Inference**: CPU + Neural Engine hybrid processing

### Performance Expectations
- **Model Loading**: ~30 seconds (Llama-3-8B quantized)
- **Inference**: 20-50 tokens/second (depending on M-series chip)
- **Audio Processing**: Real-time transcription without GPU

---

## 📚 KEY RESOURCES

### APIs & Data
- **Scryfall API**: https://scryfall.com/docs/api (MTG cards database)
- **TopDeck.gg**: https://www.topdeckgg.com/ (competitive meta)
- **MTG Rules**: https://magic.wizards.com/en/rules (official comprehensive rules)

### Technical Documentation
- **MLX Framework**: https://github.com/ml-explore/mlx
- **Faster-Whisper**: https://github.com/guillaumekln/faster-whisper
- **Stripe API**: https://stripe.com/docs/api
- **FastAPI**: https://fastapi.tiangolo.com/

---

## 🚀 QUICK START COMMANDS

### Environment Setup (Run Now)
```bash
# Create and activate virtual environment
python3.12 -m venv venv_mtg
source venv_mtg/bin/activate

# Install core dependencies
pip install fastapi uvicorn faster-whisper gtts stripe sqlalchemy websockets soundfile

# Test basic imports
python -c "import fastapi, faster_whisper, gtts; print('✅ Basic setup OK')"

# Install MLX (Apple Silicon specific)
pip install mlx mlx-lm

# Test MLX
python -c "import mlx.core as mx; print('✅ MLX ready')"
```

### Verify Apple Silicon Optimization
```bash
# Check chip architecture
uname -m  # Should output: arm64

# Test MLX with simple operation
python -c "import mlx.core as mx; print('MLX device:', mx.default_device())"
```

---

## 💡 CLAUDE INSTRUCTIONS

**When working on this project:**

1. **Generate complete, production-ready code** (no TODOs/placeholders)
2. **Prioritize Apple Silicon optimization** in all ML code
3. **Include error handling** and logging in all functions
4. **Provide exact terminal commands** for immediate execution
5. **Validate against MTG rules** when implementing game logic
6. **Focus on performance** (<500ms audio pipeline requirement)

**Current priority**: Complete Phase 1 environment setup with full MLX validation.

---

<div align="center">

**🎮 MTG WEB APP v1.0**

*AI-Powered Magic: The Gathering Assistant*

*Optimized for Apple Silicon • MLX Native • Real-time Audio*

</div>