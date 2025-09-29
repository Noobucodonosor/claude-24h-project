# Università - Sistema Ottimizzazione Studio

> 📚 Progetto per massimizzare efficacia studio e preparazione esami

---

## 📊 META

- **Tipo**: Study / Research
- **Priorità**: Alta
- **Durata Stimata**: Ongoing (sistema permanente)
- **Status**: Active
- **Data Inizio**: 2025-09-20
- **Deadline**: N/A (evoluzione continua)
- **Budget**: N/A

---

## 🎯 CONTEXT

### Problema/Opportunità
Lo studio universitario richiede:
- **Gestione materiali** diversi (PDF, video, slides, appunti)
- **Sintesi efficace** per retention lungo termine
- **Metodologie ottimali** per ogni tipo di contenuto
- **Preparazione esami** strutturata e sistematica
- **Time management** tra corsi multipli
- **Note organization** accessibile e searchable

Attualmente: approccio frammentato, materiali dispersi, sintesi manuali time-consuming, metodologie non validate.

### Background
- Studente universitario (specificare corso se rilevante)
- Obiettivo: massimizzare voto/retention con minimo tempo
- Interesse per metodologie evidence-based (Feynman, Active Recall, Spaced Repetition)
- Necessità sistema scalabile per più esami simultanei
- Preferenza strumenti digitali > carta

### Target User
- **Primario**: Utilizzo personale per tutti i corsi
- **Secondario**: Potenzialmente condivisibile con compagni corso

---

## 🎯 OBIETTIVI

### Obiettivo Primario
**Creare un sistema di studio che riduca il tempo di preparazione esami del 30% mantenendo o migliorando i voti, attraverso metodologie validate e supporto AI.**

### Obiettivi Secondari
- [ ] Framework per prendere note efficaci durante lezioni
- [ ] Sistema sintesi automatica materiali con Claude
- [ ] Flashcard generator da appunti/PDF
- [ ] Study planner con spaced repetition
- [ ] Template per ogni tipo di esame (orale, scritto, progetto)
- [ ] Knowledge base organizzato per materia

### Success Criteria
- Tempo studio pre-esame ridotto da 40h a 28h in media
- Voti mantenuti o aumentati (baseline vs nuovo sistema)
- Sistema usato per almeno 3 esami completi
- Note accessibili in <30 secondi da ricerca
- Retention materiali verificabile dopo 3 mesi (test recall)

---

## 🛠️ STACK/TOOLS

### Tech Stack
**Note Taking & Organization**:
- **Obsidian**: PKM (Personal Knowledge Management) principale
- **Markdown**: Formato universale, plain text
- **Git**: Version control appunti (backup + sync)
- **Tags/Links**: Zettelkasten-inspired connections

**AI Assistance**:
- **Claude**: Sintesi materiali, spiegazioni, Q&A
- **Claude Projects**: Context per ogni materia
- **Artifacts**: Flashcards, summaries, quiz

**Study Tools**:
- **Anki**: Spaced repetition flashcards
- **Notion** (optional): Database esami, deadline, planning
- **Toggl**: Time tracking studio (analisi efficacia)

**Content Processing**:
- **Python scripts**: PDF to text extraction
- **Whisper**: Trascrizione registrazioni lezioni (se applicabile)
- **Zotero**: Bibliography management (per tesi/progetti)

### Development Tools
- **Editor**: Obsidian per note, VS Code per scripts
- **Version Control**: Git + GitHub (note backup)
- **Sync**: iCloud / Google Drive per materiali raw

### External Services/APIs
- **Claude API**: Per automation sintesi (opzionale, v2.0)
- **Anki**: Desktop + mobile sync (gratuito)
- **Obsidian Sync**: Cloud sync note (paid, opzionale)

---

## 📋 FASI SVILUPPO

### Fase 1: Definizione Metodologie ✅
**Obiettivo**: Ricerca e selezione metodologie evidence-based

**Tasks**:
- [x] Ricerca metodologie: Feynman, Active Recall, SQ3R, Cornell Notes
- [x] Analisi punti forza/debolezza ciascuna
- [x] Selezione hybrid approach personalizzato
- [x] Setup Obsidian vault struttura base

**Deliverable**: 
- Documento "Study Methodologies Framework"
- Obsidian vault template

**Duration**: 1 settimana  
**Status**: Completed  
**Completato il**: 2025-09-27

---

### Fase 2: Note System Setup
**Obiettivo**: Sistema completo per note-taking efficace

**Tasks**:
- [x] Template Obsidian per lecture notes
- [x] Template per sintesi capitoli libri
- [ ] Sistema tagging consistente
- [ ] Workflow: Lezione → Note raw → Sintesi → Flashcards
- [ ] Script automazione parsing PDF slides

**Deliverable**: 
- Obsidian templates funzionanti
- Documentation workflow

**Duration**: 1 settimana  
**Status**: In Progress (60%)  
**Completato il**: N/A

---

### Fase 3: Claude Integration
**Obiettivo**: Sfruttare Claude per sintesi e comprensione

**Tasks**:
- [ ] Prompt templates per sintesi materiali
- [ ] Workflow: PDF → Claude → Markdown summary
- [ ] Q&A system con Claude per dubbi
- [ ] Flashcard generation con Claude
- [ ] Feynman technique con Claude as teacher

**Deliverable**: 
- Prompt library per study use cases
- Integration guide Claude + Obsidian

**Duration**: 1 settimana  
**Status**: Not Started  
**Completato il**: N/A

---

### Fase 4: Spaced Repetition System
**Obiettivo**: Setup Anki per retention lungo termine

**Tasks**:
- [ ] Anki deck structure per materia
- [ ] Template carte ottimizzato (minimal, effective)
- [ ] Workflow: Note → Flashcards → Anki
- [ ] Schedule studio con spaced repetition
- [ ] Script export Obsidian → Anki (automation)

**Deliverable**: 
- Anki decks template
- Automation script

**Duration**: 4 giorni  
**Status**: Not Started  
**Completato il**: N/A

---

### Fase 5: Exam Preparation Framework
**Obiettivo**: Template specifici per preparazione esami

**Tasks**:
- [ ] Template esame orale (domande, simulazioni)
- [ ] Template esame scritto (esercizi, time practice)
- [ ] Template progetto (milestones, deliverables)
- [ ] Checklist pre-esame (cosa rivedere, cosa ignorare)
- [ ] Post-mortem template (cosa funzionato, iterare)

**Deliverable**: 
- Exam prep templates collection
- Case studies primi 2-3 esami

**Duration**: 2 settimane (iterativo)  
**Status**: Not Started  
**Completato il**: N/A

---

### Fase 6: Analytics & Optimization
**Obiettivo**: Misurare efficacia, iterare sistema

**Tasks**:
- [ ] Time tracking per attività studio
- [ ] Correlation tempo/metodo vs voti
- [ ] Retention tests (recall dopo 1 mese, 3 mesi)
- [ ] Identificare bottleneck tempo
- [ ] Optimize workflow basato su dati

**Deliverable**: 
- Dashboard analytics (Notion/Spreadsheet)
- Optimization report

**Duration**: Ongoing  
**Status**: Not Started  
**Completato il**: N/A

---

## 🎁 DELIVERABLE FINALI

### Must Have (Core)
- [x] Framework metodologie studio
- [x] Obsidian vault strutturato
- [ ] Note templates per lecture + sintesi
- [ ] Workflow Claude integration
- [ ] Anki spaced repetition setup
- [ ] Exam prep templates (orale, scritto, progetto)

### Should Have (Important)
- [ ] Automation scripts (PDF → notes, notes → flashcards)
- [ ] Analytics dashboard tempo/efficacia
- [ ] Prompt library Claude per study
- [ ] Knowledge graph connections (Zettelkasten)

### Could Have (Nice to have)
- [ ] Mobile workflow (study on-the-go)
- [ ] Voice notes → text automation (Whisper)
- [ ] Collaboration features (note sharing)
- [ ] Public knowledge base (blog)

### Won't Have (Out of scope v1.0)
- ❌ AI tutor completo (troppo complesso)
- ❌ Video content creation (fuori scope)
- ❌ Social study platform
- ❌ Commercial product

---

## 📝 NOTE/VINCOLI

### Vincoli Tecnici
- **Plain text first**: Markdown per portability
- **Offline-capable**: Studio senza internet richiesto
- **Fast search**: <2 secondi per trovare qualsiasi nota
- **Cross-platform**: Mac + iPad (future mobile)

### Vincoli Budget/Risorse
- Budget: Minimale (<€50/anno)
- Tempo setup: Max 2h/settimana per maintenance
- Tools: Preferenza open source / gratuiti

### Vincoli Accademici
- Compliance esami: No AI durante esami scritti (Claude solo per studio)
- Originalità: Note proprie, sintesi personali (Claude assistente, non sostituto)
- Time pressure: Esami multipli simultanei → prioritization critica

### Decisioni Architetturali Importanti
- **Obsidian vs Notion**: Scelto Obsidian
  - Pro: Markdown, offline, veloce, free
  - Contro: Meno pretty UI
  - Rationale: Portability > estetica
- **Manual vs Automation**: Hybrid
  - Automation dove ripetitivo (PDF parsing)
  - Manual dove cognitive (sintesi, connections)
  - Rationale: Balance effort vs learning
- **Claude role**: Assistant, not replacement
  - Claude spiega, non sostituisce comprensione
  - Feynman: se non spieghi tu, non hai capito

### Known Issues/Risks
- ⚠️ **Over-optimization risk**: Più tempo su sistema che su studio
  - Mitigation: Timebox setup, focus on studying
- ⚠️ **Claude dependency**: Se Claude down, sistema degrada
  - Mitigation: Core workflow funziona senza (degraded mode)
- ⚠️ **Perfectionism**: Voler note/flashcard perfette
  - Mitigation: Good enough > perfect, iterate

---

## 📚 RISORSE

### Documentazione
- Obsidian Docs: https://help.obsidian.md/
- Anki Manual: https://docs.ankiweb.net/
- Zettelkasten Method: https://zettelkasten.de/
- Feynman Technique: https://fs.blog/feynman-technique/

### Tutorial/Guide
- "How to Take Smart Notes" - Sönke Ahrens (libro)
- "Make It Stick" - Peter Brown (learning science)
- Ali Abdaal YouTube: Study techniques evidence-based
- Thomas Frank: Note-taking systems

### Inspiration/References
- **Obsidian community**: Vaults examples, plugins
- **r/Anki**: Best practices spaced repetition
- **Cal Newport Blog**: Deep work, study strategies

### Research Papers
- Active Recall: Roediger & Karpicke (2006)
- Spaced Repetition: Cepeda et al. (2006)
- Generative learning: Fiorella & Mayer (2016)

---

## 📊 PROGRESS TRACKING

### Current Phase
**Fase**: 2 - Note System Setup  
**Progress**: 60%  
**Next Milestone**: Completare templates + workflow

### Overall Progress
```
Methodologies   [████████████████████] 100%
Note System     [████████████░░░░░░░░]  60%
Claude Int.     [░░░░░░░░░░░░░░░░░░░░]   0%
Spaced Rep.     [░░░░░░░░░░░░░░░░░░░░]   0%
Exam Prep       [░░░░░░░░░░░░░░░░░░░░]   0%
Analytics       [░░░░░░░░░░░░░░░░░░░░]   0%
```

### Time Tracking
- **Stimato Totale**: 50 ore (sistema base)
- **Speso Finora**: 12 ore
- **Rimasto Stimato**: 38 ore

---

## 📖 LOG PROGETTO

### 2025-09-20 - Inizio Progetto
- Creato PROJECT.md
- Ricerca metodologie studio evidence-based
- Setup repository

---

### 2025-09-23 - Research Phase Complete
**Progresso**:
- Analisi approfondita 5 metodologie (Feynman, Active Recall, SQ3R, Cornell, Zettelkasten)
- Selezione hybrid approach: Active Recall + Zettelkasten connections + Claude assistance
- Decision: Obsidian come PKM tool principale

**Decisioni**:
- **Active Recall**: Core methodology, scientificamente provato
- **Zettelkasten**: Per connections tra concetti (sistema emergente conoscenza)
- **Claude**: Assistant per spiegazioni, sintesi, Q&A
- **No**: Cornell Notes (too structured), SQ3R (troppo lento)

**Learnings**:
- Metodologia perfetta non esiste → personalizzare
- Evidence-based > hype (molti YouTuber vendono fumo)
- Semplicità > complessità (sistema complesso = non usato)

**Next Steps**:
- Setup Obsidian vault base
- Creare primi templates

---

### 2025-09-27 - Obsidian Setup + Templates v1
**Progresso**:
- Obsidian vault creato con struttura folders
- Template "Lecture Notes" completato
- Template "Chapter Summary" completato
- Tag system definito (#materia, #topic, #status)

**Struttura Vault**:
```
University/
├── 00-Inbox/          # Quick capture
├── 01-Lectures/       # Note lezioni
├── 02-Summaries/      # Sintesi materiali
├── 03-Flashcards/     # Carte per Anki
├── 04-Exams/          # Prep specifici esami
├── Resources/         # PDF, slides, etc.
└── Templates/         # Template riutilizzabili
```

**Workflow definito**:
1. Lezione → Quick notes in Inbox
2. Post-lezione (same day): Rework in 01-Lectures usando template
3. Weekly: Sintesi settimanale in 02-Summaries
4. Pre-esame: Estrazione flashcards in 03-Flashcards

**Blockers**:
- Nessun blocker tecnico
- Challenge: disciplina nel seguire workflow (serve habit building)

**Next Steps**:
- Test workflow su materia corrente (1 settimana trial)
- Integrate Claude per sintesi
- Setup Anki basic

---

### [YYYY-MM-DD] - [Titolo Update]
[Continua log...]

---

## 🤝 COLLABORATION

### Contributors
- Me: Owner, Student
- Study group: Beta testers workflow (opzionale)

### How to Contribute
- Se open source: Issue templates per metodologie alternative
- Pull requests per templates migliorati

### Communication
- **Primary**: Personal use
- **Secondary**: Condivisione con compagni corso (selettivo)

---

## 🔄 MAINTENANCE

### Post-Launch
- [ ] Review workflow dopo ogni esame (post-mortem)
- [ ] Update templates basato su feedback uso reale
- [ ] Expand prompt library Claude (nuovi use cases)
- [ ] Optimize bottleneck tempo identificati

### Future Enhancements
- Mobile app companion (iPad Pro + Apple Pencil)
- Voice-to-text lectures (Whisper integration)
- Knowledge graph visualization (Obsidian Graph view)
- AI study buddy (conversational tutor)
- Community note sharing platform

### Deprecation Plan
N/A - Sistema evolve con percorso universitario

---

## 🎓 LEARNINGS

### Cosa Ho Imparato (So Far)
- **Methodology matters**: Sistema > raw effort
- **Tools are secondary**: Obsidian vs Notion irrilevante se metodologia debole
- **Simplicity wins**: Template semplice usato > complesso ignorato
- **Evidence-based**: Active recall funziona davvero (testato personalmente)

### Cosa Rifarei Diversamente
- Start smaller: 1 template, 1 materia, validate, poi scale
- Less research: 1 settimana ricerca era troppo, 2 giorni bastano
- Immediate application: setup parallelo a studio, non prima

### Best Practices Emerse
- **Atomic notes**: Una nota = un concetto (Zettelkasten principle)
- **Daily review**: 10 min end-of-day per process inbox
- **Teach to learn**: Spiegare concetto a Claude = Feynman technique
- **Spaced repetition non negoziabile**: Cramming non funziona lungo termine

---

## 📎 APPENDIX

### Glossario
- **PKM**: Personal Knowledge Management
- **Zettelkasten**: Slip-box method (knowledge network)
- **Active Recall**: Study by testing, not re-reading
- **Spaced Repetition**: Review intervals ottimizzati per retention
- **Feynman Technique**: Learn by teaching simply

### Template Example: Lecture Notes
```markdown
---
tags: [#materia, #lecture, #date]
date: YYYY-MM-DD
course: [Nome Corso]
topic: [Topic Principale]
---

# Lecture: [Titolo]

## Key Concepts
- [Concept 1]
- [Concept 2]

## Detailed Notes
[Note dettagliate]

## Questions / Unclear
- [ ] [Domanda 1]
- [ ] [Dubbio 2]

## Connections
- Related to: [[Other Note]]
- See also: [[Concept X]]

## Summary (1 paragraph)
[Sintesi in parole tue]
```

### Claude Prompt Templates
```
# Sintesi Materiale
"Ho questi appunti su [topic].
Crea sintesi concisa (max 300 parole) che copra:
- Key concepts
- Relationships tra concepts
- Examples pratici
Usa linguaggio semplice (Feynman technique)."

# Q&A Clarification
"Non capisco [concept].
Spiegami come se avessi 12 anni, poi aumenta complessità.
Usa analogie e examples concreti."

# Flashcard Generation
"Da questa sintesi genera 10 flashcards Anki-style.
Format: Question → Answer (concise).
Focus su concepts, non memorization meccanica."
```

### Links Quick Access
- Repository: `projects/universita/`
- Obsidian Vault: `deliverables/obsidian-vault/`
- Anki Decks: `deliverables/anki-decks/`
- Scripts: `context/scripts/`

---

<div align="center">

**📚 UNIVERSITÀ SISTEMA STUDIO v1.0**

*Evidence-based approach + AI assistance*

Last Updated: 2025-09-29

</div>