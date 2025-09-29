# Progetto MTG Web App - Magic: The Gathering Assistant

## Context
**Progetto**: Applicazione web avanzata per Magic: The Gathering che combina generazione intelligente di mazzi, simulazione di partite con arbitro AI, e assistenza live durante match reali tramite trascrizione audio real-time.

**Ruoli**:
- **Cliente**: Definisce requisiti, obiettivi, fornisce feedback sulle feature
- **Developer**: Esegue comandi minimi su MacBook (Apple Silicon)
- **AI Assistant**: Sviluppa codice completo, fornisce script pronti, minimizza gesti richiesti

**Filosofia**: Massima automazione, codice pronto da incollare, istruzioni a passo unico, correzioni automatiche basate su feedback.

---

## Stack Tecnologico (Ottimizzato MacBook Apple Silicon)

### Backend & Core
- **Framework**: FastAPI con WebSockets per comunicazione real-time
- **Database**: SQLite (prototipo) → PostgreSQL (produzione)
- **Server**: Uvicorn (ASGI server)

### AI & Machine Learning
- **LLM**: Llama-3-8B con fine-tuning locale tramite MLX (ottimizzato Apple Silicon)
- **Tool LLM**: Ollama per gestione modelli locali
- **STT (Speech-to-Text)**: Faster-Whisper per trascrizione real-time
- **TTS (Text-to-Speech)**: gTTS (free tier) / ElevenLabs (premium)
- **ML Framework**: HuggingFace per gestione modelli, batch inference per efficienza

### Frontend
- **Prototipo**: Streamlit (sviluppo rapido)
- **Produzione**: React (interfaccia scalabile)
- **Audio**: JavaScript WebAudio API + WebSockets per streaming microfono

### Dati & APIs
- **Carte MTG**: Scryfall API (database completo carte)
- **Mazzi Competitivi**: TopDeck.gg API (meta-game, deck lists)

### Monetizzazione & Pagamenti
- **Sistema Crediti**: €1 = 100 crediti
- **Payment Gateway**: Stripe Checkout + Webhooks
- **Compliance**: PCI-DSS per pagamenti, GDPR per dati audio

### Ambiente Sviluppo
- **Python**: 3.12+ (best practices 2025)
- **Tool Unificato**: ServBay (ambiente sviluppo integrato)
- **Version Control**: Git + GitHub

---

## Obiettivi & Funzionalità

### 1. GENERAZIONE MAZZI COMPETITIVI 🃏
**Input**: Lista carte disponibili (collezione utente)
**Output**: Mazzo ottimizzato (60 carte Standard / 100 Commander)
**Features**:
- Analisi curva di mana ottimale
- Rilevamento sinergie tra carte
- Suggerimenti strategici basati su meta-game
- Validazione regole formato (Standard/Modern/Commander)
**Costo**: 1 credito per generazione

### 2. ARBITRO AI - SIMULAZIONE MATCH 🎮
**Modalità Testo**: 
- Input partita descritta testualmente
- Validazione azioni secondo regole MTG ufficiali
- Rilevamento errori comuni (sequenza turni, priority, stack)

**Modalità Live Audio**:
- Stream audio da microfono via WebSocket
- Trascrizione real-time con Faster-Whisper
- Rilevamento trigger persi, errori di sequenza, violazioni regole
- Intervento immediato con alert vocali (TTS) e testuali
- Log completo partita con timestamp
**Costo**: 5 crediti per sessione live

### 3. MONETIZZAZIONE 💰
**Free Tier**:
- 10 crediti iniziali gratuiti
- 1 generazione mazzo gratis/settimana

**Sistema Crediti**:
- Pacchetti: 100 crediti (€1), 500 (€4), 1000 (€7)
- Integrazione Stripe per checkout sicuro
- Webhook per conferma pagamento automatica

### 4. SICUREZZA & COMPLIANCE 🔒
- **GDPR**: Nessun storage audio senza consenso esplicito utente
- **PCI-DSS**: Gestione pagamenti tramite Stripe (no dati carte su server)
- **Privacy**: Trascrizioni anonimizzate, cancellazione automatica post-sessione

---

## Fasi di Sviluppo (Step-by-Step)

### Fase 1: Setup Ambiente ⚙️
**Obiettivo**: Configurare ambiente sviluppo ottimizzato MacBook
- Installazione dipendenze core: `pip install fastapi uvicorn faster-whisper gtts stripe sqlalchemy websockets soundfile`
- Setup Ollama per gestione LLM locali
- Configurazione MLX per fine-tuning su Apple Silicon
- Test ambiente: verifica import librerie

### Fase 2: Raccolta Dati 📊
**Obiettivo**: Costruire dataset MTG per LLM
- Script fetch da Scryfall API (tutte le carte, formati, legality)
- Script fetch da TopDeck.gg (mazzi competitivi, meta-game)
- Struttura database SQLite per cache locale
- Parsing regole MTG comprehensive (PDF ufficiali → dataset)

### Fase 3: Fine-Tuning LLM 🧠
**Obiettivo**: Adattare Llama-3-8B alle regole MTG
- Preparazione dataset: regole + interazioni comuni
- Fine-tuning con MLX (ottimizzato Apple Silicon, basso consumo)
- Validazione modello: test casi d'uso reali (trigger, stack, priority)
- Deploy modello locale via Ollama

### Fase 4: Backend FastAPI 🚀
**Endpoints Core**:
- `POST /api/deck/generate`: generazione mazzo da collezione
- `POST /api/match/simulate`: simulazione match testuale
- `WS /api/live/audio`: WebSocket per streaming audio real-time
- `POST /api/payment/checkout`: creazione sessione Stripe
- `POST /api/payment/webhook`: gestione conferme pagamento

**Features Backend**:
- Integrazione Faster-Whisper per STT in WebSocket
- Pipeline: Audio → Trascrizione → LLM (analisi) → TTS (risposta)
- Sistema crediti con transazioni atomiche
- Rate limiting per API

### Fase 5: Frontend 🎨
**Prototipo Streamlit**:
- Form input collezione carte
- Visualizzazione mazzo generato con curva mana
- Interfaccia sessione live con pulsante microfono
- Display trascrizione + alert arbitro in tempo reale

**Produzione React** (fase successiva):
- Dashboard completa con gestione crediti
- Storico mazzi generati e match simulati
- WebAudio API per streaming microfono ottimizzato

### Fase 6: Monetizzazione Stripe 💳
- Setup account Stripe (test mode → production)
- Implementazione Checkout Session con redirect
- Webhook handler per conferma pagamento
- Aggiornamento crediti utente automatico
- Gestione errori pagamento e refund

### Fase 7: Test & Deploy 🧪
**Test Locale**:
- Unit test endpoint FastAPI
- Test integrazione Stripe (webhook simulation)
- Test audio pipeline latenza <500ms
- Load testing WebSocket (50+ connessioni simultanee)

**Deploy Cloud**:
- Backend su Render / Railway (Docker container)
- Frontend su Vercel (React build ottimizzato)
- Database PostgreSQL managed (Supabase / Render)

### Fase 8: Completamento & Ottimizzazione ✨
- Monitoring (logs, errori, performance)
- Ottimizzazione query database
- Caching risposte LLM frequenti
- Documentazione API (Swagger/OpenAPI)
- User guide e tutorial

---

## Regole di Interazione AI ↔ Developer

### Minimizzazione Gesti
- **Codice**: Sempre in blocchi Markdown completi e pronti da incollare
- **Istruzioni**: Comandi diretti eseguibili in Terminale
- **Errori**: Su feedback "Errore X", fornire codice corretto in risposta successiva
- **No modifiche manuali**: L'AI corregge tutto, il developer esegue solo comandi

### Struttura Risposte AI
1. **Checklist concisa** (3-7 punti concettuali)
2. **Aggiornamento requisiti** (se applicabile)
3. **Piano attuale + next steps**
4. **Codice/Script** completo e testato
5. **Istruzioni test** (comando singolo)
6. **Richiesta feedback** specifica

### Validazione Output
Dopo ogni codice/proposta: validare in 1-2 righe efficacia e decidere se proseguire o autocorreggere.

### Tool Esterni
Prima di ogni chiamata: dichiarare motivo e input minimi in una riga.

---

## Status Progetto

- **Fase Corrente**: ⚙️ Fase 1 - Setup Ambiente
- **Prossimo Step**: Installazione dipendenze core Python
- **Ultimo Update**: 2025-09-29
- **Priorità**: Alta (24h project)

---

## Quick Start (Developer)

### Prima Sessione
```bash
# 1. Setup ambiente virtuale
python3.12 -m venv venv_mtg
source venv_mtg/bin/activate

# 2. Installa dipendenze
pip install fastapi uvicorn faster-whisper gtts stripe sqlalchemy websockets soundfile

# 3. Verifica installazione
python -c "import fastapi, faster_whisper, gtts; print('Setup OK')"
```

### Conferma Inizio Sessione AI
"Pronto a sviluppare il progetto MTG. Fase attuale: [1 - Setup Ambiente]. Istruzioni: [comandi di installazione sopra]."

---

## Note Tecniche

### Ottimizzazioni MacBook Apple Silicon
- **MLX**: Framework ML ottimizzato per chip M1/M2/M3
- **Memory Efficiency**: Unified memory architecture sfruttata da MLX
- **Faster-Whisper**: Inferenza ottimizzata CPU, no GPU esterna richiesta
- **Ollama**: Gestione modelli con quantizzazione automatica per ridurre RAM

### Latenza Audio Pipeline
**Target**: <500ms end-to-end (audio → trascrizione → risposta TTS)
- Faster-Whisper: ~100-200ms per chunk audio
- LLM inference (locale): ~200-300ms per risposta breve
- TTS generazione: ~50-100ms con gTTS

### Scalabilità
- **Prototipo**: 10-50 utenti simultanei (MacBook locale)
- **Produzione**: 1000+ utenti (cloud deployment + load balancing)

---

## Risorse Esterne

- **Scryfall API**: https://scryfall.com/docs/api
- **TopDeck.gg**: https://www.topdeckgg.com/
- **MTG Rules**: https://magic.wizards.com/en/rules
- **Stripe Docs**: https://stripe.com/docs/api
- **MLX Framework**: https://github.com/ml-explore/mlx
- **Faster-Whisper**: https://github.com/guillaumekln/faster-whisper