# 🧠 Knowledge Base - Claude Project Hub

**Context globale per Claude AI - Da caricare all'inizio di ogni sessione**

---

## 🎯 CONCETTO CORE

### Cos'è Claude Project Hub
**Meta-ambiente per sviluppo progetti multipli con assistenza AI integrata**

**NON È**:
- ❌ Un singolo progetto con deadline
- ❌ Un tracker task generico
- ❌ Un sistema limitato a 3 obiettivi

**È**:
- ✅ Piattaforma permanente per gestire N progetti
- ✅ Sistema standardizzato per sottomettere nuovi progetti
- ✅ Hub centrale con Claude contestualizzato per ogni progetto
- ✅ Framework scalabile per infiniti progetti futuri

### Analogia
```
Spotify = piattaforma per ascoltare musica
Claude Hub = piattaforma per sviluppare progetti con AI
```

---

## 🏗️ ARCHITETTURA SISTEMA

### Layer 1: Project Storage
**Funzione**: Repository strutturato di tutti i progetti

```
projects/
├── mtg-webapp/          ← Progetto Magic: The Gathering
├── cucina-vegana/       ← Sistema gestione cucina
├── universita/          ← Tools studio universitario
└── [futuro-progetto]/   ← Infiniti progetti possibili
```

**Ogni progetto contiene**:
- `PROJECT.md` - Definizione completa (obiettivi, stack, fasi)
- `context/` - File supporto specifici progetto
- `deliverables/` - Output e risultati

### Layer 2: Claude Integration
**Funzione**: AI contestualizzato per ogni progetto

**Workflow**:
1. User apre progetto X
2. System carica `PROJECT.md` + context files
3. Claude riceve knowledge base specifica progetto
4. User lavora con Claude "esperto" del progetto
5. Output salvato in `deliverables/`

**Modalità Integration**:
- **Manuale**: Copia-incolla PROJECT.md in chat Claude
- **GitHub**: Claude legge intero repository
- **API** (futuro): Claude integrato direttamente nell'app

### Layer 3: User Interface
**Funzione**: Dashboard per navigare/gestire progetti

**Features**:
- Lista progetti con status (Active/Paused/Completed)
- Progress tracking per progetto
- Quick access a context files
- Export knowledge base per Claude
- Template generator per nuovi progetti

---

## 📋 FORMATO STANDARD PROGETTO

### Struttura PROJECT.md
```markdown
# [Nome Progetto]

## META
- **Tipo**: [WebApp/Study/Creative/Research/Other]
- **Priorità**: [Alta/Media/Bassa]
- **Durata Stimata**: [X ore/giorni/settimane]
- **Status**: [Planning/Active/Paused/Completed]
- **Data Inizio**: [YYYY-MM-DD]
- **Deadline**: [YYYY-MM-DD o N/A]

## CONTEXT
[Problema da risolvere / Obiettivo da raggiungere]
[Background necessario per capire il progetto]

## OBIETTIVI

### Primario
[L'obiettivo principale del progetto]

### Secondari
- [Obiettivo 2]
- [Obiettivo 3]

## STACK/TOOLS
[Tecnologie, linguaggi, framework, metodologie]

**Tech Stack**:
- Backend: [...]
- Frontend: [...]
- Database: [...]
- AI/ML: [...]

**Tools**:
- Development: [...]
- Design: [...]
- Other: [...]

## FASI SVILUPPO

### Fase 1: [Nome Fase]
**Obiettivo**: [Cosa si raggiunge]
**Deliverable**: [Output concreti]
**Duration**: [Stima tempo]
**Status**: [Not Started/In Progress/Completed]

### Fase 2: [Nome Fase]
[...]

## DELIVERABLE FINALI
- [ ] [Output 1]
- [ ] [Output 2]
- [ ] [Output 3]

## NOTE/VINCOLI
[Limitazioni tecniche, vincoli di budget, requisiti speciali]

## RISORSE
- [Link documentazione]
- [Tutorial rilevanti]
- [API docs]

## LOG PROGETTO
### [Data] - [Evento]
[Descrizione progresso/decisioni]
```

### Vantaggi Formato Standard
1. **Claude legge velocemente** - Struttura prevedibile
2. **Context completo** - Tutte info in un documento
3. **Riutilizzabile** - Template per nuovi progetti
4. **Tracciabile** - Status e progress chiari
5. **Versionabile** - Git-friendly

---

## 🔄 WORKFLOW OPERATIVO

### Scenario A: Nuovo Progetto

#### Step 1: Creazione
```bash
# Crea cartella progetto
mkdir projects/nome-nuovo-progetto

# Copia template
cp PROJECT_TEMPLATE.md projects/nome-nuovo-progetto/PROJECT.md
```

#### Step 2: Definizione con Claude
```
User → Claude:
"Ho un'idea per un progetto [descrizione breve].
Aiutami a compilare il PROJECT.md seguendo il template standard."

Claude → User:
[Genera PROJECT.md completo basato su template]
```

#### Step 3: Sviluppo
```
User apre dashboard → Seleziona progetto → "Open in Claude"
Claude carica context → Inizia sviluppo assistito
Output salvato in deliverables/
```

### Scenario B: Sessione Lavoro Progetto Esistente

#### Preparazione Sessione
1. **Carica Repository in Claude**:
   - Chat Claude → "Add from GitHub"
   - URL: `https://github.com/[user]/claude-project-hub`
   
2. **Specifica Progetto**:
   ```
   "Oggi lavoriamo sul progetto [nome].
   Leggi projects/[nome]/PROJECT.md per il context completo."
   ```

3. **Claude Conferma**:
   ```
   "Ho letto il progetto [nome]. Obiettivo: [X].
   Fase attuale: [Y]. Cosa sviluppiamo?"
   ```

#### Durante Sviluppo
- User chiede features/codice/documenti
- Claude genera basandosi su context progetto
- User salva output in `deliverables/`
- Aggiorna `PROJECT.md` con log progresso

#### Fine Sessione
```bash
git add projects/[nome]/
git commit -m "Progetto [nome]: [descrizione progresso]"
git push
```

### Scenario C: Context Switch Rapido

**Problema**: Lavorare su più progetti nella stessa giornata

**Soluzione**:
```
Session 1 (MTG): "Focus su projects/mtg-webapp/PROJECT.md"
[...sviluppo...]

Session 2 (Cucina): "Context switch: projects/cucina-vegana/PROJECT.md"
[...sviluppo...]

Session 3 (MTG): "Ritorno a MTG, recap ultimo stato"
```

Claude mantiene context separato per progetto grazie a PROJECT.md strutturato.

---

## 🤖 REGOLE INTERAZIONE CLAUDE

### All'inizio Sessione
**Claude DEVE**:
1. Confermare progetto su cui lavorare
2. Leggere `PROJECT.md` completo
3. Identificare fase attuale
4. Proporre next step o chiedere direzione

**Formato Conferma**:
```
"📋 Progetto: [Nome]
🎯 Obiettivo: [Obiettivo primario]
📍 Fase Attuale: [X]
✅ Status: [Y]

Cosa sviluppiamo oggi?"
```

### Durante Sviluppo
**Claude DEVE**:
- Generare codice completo (no placeholder)
- Usare artifacts per codice >20 righe
- Validare output rispetto a obiettivi progetto
- Suggerire prossimi step
- Mantenere coerenza con stack tech dichiarato

**Claude NON DEVE**:
- Chiedere info già in PROJECT.md
- Proporre tech non nel stack dichiarato (senza chiedere)
- Generare codice incompleto
- Dimenticare vincoli/note del progetto

### Fine Sessione
**Claude DEVE**:
- Riassumere cosa completato
- Suggerire aggiornamento PROJECT.md (log, status)
- Indicare next step per prossima sessione

---

## 📂 PROGETTI ATTIVI

### 🎮 MTG Web App
**Path**: `projects/mtg-webapp/`

**Quick Context**:
- Tipo: Web Application complessa
- Stack: FastAPI + React + Claude API + Llama-3-8B
- Obiettivo: Generatore mazzi MTG + Arbitro AI live con audio
- Fase: 1 - Setup Ambiente
- Priorità: Alta

**Peculiarità**:
- Usa Apple Silicon optimization (MLX)
- Integrazione audio real-time (Faster-Whisper)
- Monetizzazione via Stripe
- Fine-tuning LLM locale

**Quando lavori su MTG**: Focus su performance, ML optimization, audio pipeline

### 🥗 Cucina Vegana
**Path**: `projects/cucina-vegana/`

**Quick Context**:
- Tipo: Creative/Lifestyle
- Tools: Recipe database, meal planner, shopping list
- Obiettivo: Sistema completo gestione cucina vegana
- Fase: Definizione features
- Priorità: Media

**Peculiarità**:
- Database ricette personalizzato
- Calcoli nutrizionali automatici
- Integration con shopping (API possibili)

**Quando lavori su Cucina**: Focus su UX semplice, praticità quotidiana

### 📚 Università
**Path**: `projects/universita/`

**Quick Context**:
- Tipo: Study/Research
- Tools: Note synthesis, exam prep, study planner
- Obiettivo: Ottimizzare studio e preparazione esami
- Fase: Definizione metodologie
- Priorità: Media-Alta

**Peculiarità**:
- Claude per sintesi materiali
- Flashcard generation automatica
- Study schedule optimizer

**Quando lavori su Università**: Focus su efficacia studio, retention, metodologie

---

## 🎨 TEMPLATE DISPONIBILI

### webapp_template.md
Per: Applicazioni web (frontend + backend)
Include: Stack tech, architettura API, deployment

### study_template.md
Per: Progetti studio/ricerca
Include: Metodologie, risorse, schedule

### creative_template.md
Per: Progetti creativi (design, content, lifestyle)
Include: Mood board, style guide, deliverables creativi

### generic_template.md
Per: Progetti che non rientrano in categorie sopra
Include: Solo struttura base adattabile

---

## 🔧 BEST PRACTICES

### Per l'User
1. **Un PROJECT.md completo** = Claude lavora meglio
2. **Commit frequenti** = Tracciamento progress
3. **Log aggiornato** = Context storico preservato
4. **Status realistico** = No over-commitment
5. **Deliverables organizzati** = Facile recupero output

### Per Claude
1. **Leggi PROJECT.md per intero** prima di iniziare
2. **Rispetta stack tech** dichiarato
3. **Codice completo sempre** (no TODO/placeholder)
4. **Valida output** rispetto obiettivi
5. **Suggerisci aggiornamenti** PROJECT.md quando appropriato

---

## 🚀 FEATURE ROADMAP

### v1.0 (Current) ✅
- [x] Struttura repository
- [x] Template standard
- [x] Knowledge base
- [x] Dashboard HTML base

### v1.1 (Next) 🚧
- [ ] Dashboard interattiva completa
- [ ] Progress bars real-time
- [ ] Document parser automatico
- [ ] Template wizard

### v2.0 (Future) 💡
- [ ] Claude API integration in-app
- [ ] In-app chat con context auto-load
- [ ] Git integration automatica
- [ ] Export/Import progetti
- [ ] Multi-user support

---

## 📊 METRICHE SISTEMA

### Efficacia
- **Time to Context**: <30 secondi (caricare progetto in Claude)
- **Context Accuracy**: 95%+ (Claude capisce progetto)
- **Overhead Management**: <5 minuti/giorno (aggiornamenti)

### Scalabilità
- **Progetti Simultanei**: Illimitati (dipende da user)
- **Progetti Totali**: Testato fino a 10, scalabile a 100+
- **Storage**: ~1-5MB per progetto (dipende da deliverables)

---

## 🆘 TROUBLESHOOTING

### Claude non capisce il progetto
**Causa**: PROJECT.md incompleto o ambiguo
**Soluzione**: Rivedi sezioni CONTEXT e OBIETTIVI, aggiungi dettagli

### Troppi context switch
**Causa**: Lavorare su 5+ progetti nello stesso giorno
**Soluzione**: Focus su 1-2 progetti per sessione, usa log per riprendere

### Deliverables disorganizzati
**Causa**: Salvare output senza struttura
**Soluzione**: Usa sottocartelle in deliverables/ (code/, docs/, assets/)

### Git conflicts
**Causa**: Modifiche simultanee (raro in uso singolo)
**Soluzione**: Pull prima di push, usa branch per esperimenti

---

## 🔐 SICUREZZA & PRIVACY

### Dati Sensibili
- **Non committare**: API keys, passwords, token
- **Usa**: File `.env` (già in .gitignore)
- **Encrypt**: Dati personali sensibili prima di commit

### Repository Pubblico/Privato
- **Pubblico**: OK per progetti open source
- **Privato**: Raccomandato se contiene IP o dati personali

### Claude Context
- **Claude API**: Dati processati da Anthropic, vedi loro privacy policy
- **Claude Web**: Conversazioni salvate, revisionabili/eliminabili

---

## 📚 RISORSE ESTERNE

### Claude/AI
- [Anthropic Claude](https://claude.ai)
- [Claude API Docs](https://docs.anthropic.com)
- [Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/prompt-engineering)

### Development
- [FastAPI Docs](https://fastapi.tiangolo.com)
- [React Docs](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org)

### Git/GitHub
- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

## 🎯 FILOSOFIA DESIGN

### Principi Core
1. **Standardizzazione** - Formato uniforme = efficienza
2. **Modularità** - Progetti indipendenti = scalabilità
3. **AI-First** - Tutto ottimizzato per Claude
4. **Zero Friction** - Minimo overhead = massima produttività
5. **Iterativo** - Miglioramento continuo sistema

### Anti-Pattern Evitati
- ❌ Monolith knowledge base (confuso, lento)
- ❌ Progetti senza struttura (dispersione info)
- ❌ Context switching manuale (time waste)
- ❌ Codice senza organizzazione (difficile manutenere)
- ❌ Over-engineering (complessità inutile)

---

## 📝 CHANGELOG

### 2025-09-29 - v1.0.0
- ✅ Setup repository structure
- ✅ Creazione knowledge base
- ✅ Template standard progetti
- ✅ Dashboard HTML base
- ✅ Documentazione completa

---

## 🎓 LEARNING NOTES

### Cosa Ho Imparato Sviluppando Questo Sistema
1. **Context è tutto** - Claude lavora 10x meglio con PROJECT.md completo
2. **Standardizzazione paga** - Template riducono cognitive load
3. **Modularità scala** - Progetti separati = gestione semplice
4. **Git è amico** - Commit frequenti = tranquillità mentale
5. **Iterazione > Perfezione** - Meglio v1.0 funzionante che v2.0 perfetto mai finito

---

<div align="center">

**🧠 Knowledge Base v1.0**

*Context ottimale per Claude AI*

Last Updated: 2025-09-29

</div>