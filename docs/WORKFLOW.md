# 🔄 Workflow Guide - Claude Project Hub

**Guida completa all'utilizzo del sistema**

---

## 📚 Indice

1. [Setup Iniziale](#setup-iniziale)
2. [Creare Nuovo Progetto](#creare-nuovo-progetto)
3. [Lavorare con Claude](#lavorare-con-claude)
4. [Gestione Progetti](#gestione-progetti)
5. [Best Practices](#best-practices)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Setup Iniziale

### Prima Volta con il Sistema

#### 1. Verifica Struttura
```bash
cd ~/path/to/claude-project-hub

# Verifica che esistano queste cartelle
ls -la
# Dovresti vedere: app/, projects/, templates/, docs/
```

#### 2. Apri Dashboard
```bash
# Opzione A: Diretto
open app/frontend/index.html

# Opzione B: Con server (meglio per sviluppo)
cd app/frontend
python3 -m http.server 8000
# Vai su http://localhost:8000
```

#### 3. Familiarizza con i File Chiave
- **README.md** - Overview del sistema
- **KNOWLEDGE_BASE.md** - Context per Claude (IMPORTANTE!)
- **PROJECT_TEMPLATE.md** - Template progetti
- **app/frontend/index.html** - Dashboard progetti

#### 4. Setup Git (se non già fatto)
```bash
git config user.name "Il Tuo Nome"
git config user.email "tua@email.com"

# Verifica remote
git remote -v
```

✅ **Setup completato!** Ora sei pronto per creare progetti.

---

## ➕ Creare Nuovo Progetto

### Metodo 1: Via Dashboard (Consigliato per Quick Start)

1. **Apri Dashboard** (`app/frontend/index.html`)
2. **Click "➕ Nuovo Progetto"**
3. **Compila form**:
   - Nome: Es. "Portfolio Website"
   - Tipo: Web App / Study / Creative / Tool / Other
   - Descrizione: Breve summary
   - Priorità: Alta / Media / Bassa
4. **Click "Crea Progetto"**
5. **Segui istruzioni alert** per setup cartella

### Metodo 2: Manuale (Controllo Completo)

#### Step 1: Crea Struttura
```bash
# Crea cartella progetto (usa kebab-case)
mkdir -p projects/mio-nuovo-progetto/context
mkdir -p projects/mio-nuovo-progetto/deliverables

# Copia template
cp PROJECT_TEMPLATE.md projects/mio-nuovo-progetto/PROJECT.md
```

#### Step 2: Compila PROJECT.md con Claude

**Apri nuova chat Claude** e di':

```
Ho creato un nuovo progetto nel mio Claude Project Hub.

Progetto: [Nome progetto]
Idea: [Descrizione breve della tua idea]

Aiutami a compilare il PROJECT.md usando il template standard.
Il template si trova in PROJECT_TEMPLATE.md nel repository.

Facciamo sezione per sezione, iniziando con META e CONTEXT.
```

**Claude ti guiderà** sezione per sezione! 🎯

#### Step 3: Salva e Commit
```bash
# Salva PROJECT.md compilato

# Commit
git add projects/mio-nuovo-progetto/
git commit -m "Nuovo progetto: [nome] - Setup iniziale"
git push
```

✅ **Progetto creato!** Ora puoi iniziare a sviluppare con Claude.

---

## 🤖 Lavorare con Claude

### Scenario A: Sessione Singola Progetto

#### Preparazione (2 minuti)
1. **Apri Dashboard** → Trova il progetto
2. **Click "🤖 Claude"** sulla card progetto
3. **Context copiato automaticamente** nel clipboard

#### In Claude
1. **Apri nuova chat** su claude.ai
2. **Incolla il context** copiato
3. **Claude conferma** progetto e fase attuale
4. **Inizi a lavorare!**

**Esempio dialogo**:
```
User: [Incolla context]

Claude: "📋 Progetto: MTG Web App
🎯 Obiettivo: Generatore mazzi + Arbitro AI
📍 Fase Attuale: Fase 1 - Setup Ambiente
Come posso aiutarti?"

User: "Genera lo script di installazione dipendenze Python"

Claude: [Genera script completo]
```

#### Durante Sviluppo
- **Chiedi codice/features**: Claude genera artifacts completi
- **Salva output**: Copia artifacts in `deliverables/`
- **Fai domande**: Claude ha context completo del progetto

#### Fine Sessione
```bash
# Salva tutto il lavoro fatto
cd projects/tuo-progetto/

# Aggiungi deliverables
git add .

# Commit con descrizione
git commit -m "Progetto [nome]: [cosa fatto oggi]"

# Push
git push
```

### Scenario B: Sessione Multi-Progetto

**Quando**: Devi lavorare su più progetti nella stessa giornata

#### Strategia
1. **Una chat Claude per progetto** (più pulito)
2. **Oppure**: Context switch nella stessa chat

**Context Switch Example**:
```
User: "Ok, ora passiamo al progetto Cucina Vegana.
Leggi projects/cucina-vegana/PROJECT.md"

Claude: "📋 Context switch a Cucina Vegana
🎯 Obiettivo: Sistema gestione cucina vegana
📍 Fase: Recipe Database
Cosa sviluppiamo?"
```

### Scenario C: Caricamento Repository Completo

**Quando**: Vuoi che Claude abbia accesso a TUTTO

#### In Claude Web
1. **Click "Add Context"** (o simile)
2. **"Add from GitHub"**
3. **Incolla URL**: `https://github.com/tuousername/claude-project-hub`
4. **Claude carica**: README, KNOWLEDGE_BASE, tutti i PROJECT.md

**Vantaggio**: Claude vede tutto il sistema, può aiutare su qualsiasi progetto

**Esempio**:
```
User: "Ho caricato il repository. Fammi un summary dello stato progetti"

Claude: "📊 Status Claude Project Hub:

🎮 MTG Web App (40%) - Planning
🥗 Cucina Vegana (65%) - Active
📚 Università (30%) - Active

Quale sviluppiamo oggi?"
```

---

## 🔧 Gestione Progetti

### Aggiornare Progress Progetto

#### 1. Via PROJECT.md
```bash
# Apri il file
nano projects/tuo-progetto/PROJECT.md

# Aggiorna sezioni:
- Status fase attuale
- Progress % nella sezione PROGRESS TRACKING
- Aggiungi entry nel LOG PROGETTO con data odierna

# Salva e commit
git add projects/tuo-progetto/PROJECT.md
git commit -m "Update progress: [breve descrizione]"
git push
```

#### 2. Con Claude
```
User: "Aggiorna il PROJECT.md con il progresso di oggi.
Abbiamo completato [X, Y, Z].
Fase attuale al 60%."

Claude: [Genera PROJECT.md aggiornato con log entry]
```

### Pausare un Progetto

```bash
# Apri PROJECT.md
nano projects/progetto-da-pausare/PROJECT.md

# Cambia in META:
Status: Active → Paused

# Aggiungi nel LOG:
### [Data] - Progetto in Pausa
**Motivo**: [perché in pausa]
**Riprenderò quando**: [condizione/data]

# Commit
git commit -m "Progetto [nome] in pausa: [motivo breve]"
```

### Completare un Progetto

#### Checklist Completamento
- [ ] Tutti i deliverables finali completati
- [ ] Documentazione finale scritta
- [ ] Code pushed (se applicabile)
- [ ] Deployment fatto (se applicabile)
- [ ] PROJECT.md aggiornato con learnings
- [ ] Status → Completed

#### Update PROJECT.md
```markdown
## META
Status: Completed ✅
Data Completamento: [YYYY-MM-DD]

## LOG PROGETTO
### [Data] - 🎉 Progetto Completato!
**Deliverables**:
- [Lista completati]

**Successi**:
- [Cosa funzionato bene]

**Learnings**:
- [Cosa imparato]
```

### Archiviare Progetti Vecchi

```bash
# Crea cartella archive (se non esiste)
mkdir -p projects/_archive

# Sposta progetto
mv projects/progetto-vecchio projects/_archive/

# Commit
git add .
git commit -m "Archiviato progetto: [nome]"
git push
```

---

## 📝 Best Practices

### Per Progetti

#### 1. **Mantieni PROJECT.md Aggiornato**
- ✅ Aggiorna dopo ogni sessione lavoro
- ✅ Log con date e descrizioni chiare
- ✅ Progress realistico
- ❌ Non lasciare status obsoleti

#### 2. **Organizza Deliverables**
```
deliverables/
├── code/           ← Codice sorgente
├── docs/           ← Documentazione
├── designs/        ← Mockup, wireframes
└── assets/         ← Immagini, video, etc.
```

#### 3. **Commit Frequenti**
```bash
# Buono ✅
git commit -m "MTG: Implementato parser Scryfall API"

# Meno buono ❌
git commit -m "Modifiche varie"
```

#### 4. **Un Progetto = Un Focus**
- Se un progetto diventa troppo grande → dividilo
- Mantieni scope chiaro nel PROJECT.md

### Per Claude Sessions

#### 1. **Carica Context All'Inizio**
```
"Oggi lavoriamo su [progetto].
Leggi projects/[nome]/PROJECT.md per context completo."
```

#### 2. **Chiedi Validazione**
```
"Questo codice è allineato con gli obiettivi del progetto?
Verifica rispetto a PROJECT.md"
```

#### 3. **Aggiorna Progress con Claude**
```
"Abbiamo completato [task].
Genera log entry per PROJECT.md"
```

#### 4. **Usa Artifacts**
- Codice >20 righe → sempre artifact
- Documenti lunghi → artifact
- File da copiare → artifact

### Per Repository

#### 1. **Sync Regolare**
```bash
# All'inizio sessione
git pull

# Durante lavoro
git add . && git commit -m "..." && git push

# Fine giornata
git status  # Verifica tutto committed
```

#### 2. **Branch per Esperimenti**
```bash
# Provi qualcosa di rischioso?
git checkout -b esperimento-[nome]

# Se funziona
git checkout main
git merge esperimento-[nome]

# Se non funziona
git checkout main
git branch -D esperimento-[nome]
```

#### 3. **Backup Automatico**
- GitHub è il tuo backup
- Push frequenti = tranquillità

---

## 🎯 Use Cases Comuni

### Use Case 1: "Voglio iniziare un nuovo progetto web app"

```bash
# 1. Crea struttura
mkdir -p projects/my-webapp/{context,deliverables/code,deliverables/docs}

# 2. Copia template
cp PROJECT_TEMPLATE.md projects/my-webapp/PROJECT.md

# 3. In Claude
"Nuovo progetto web app per [scopo].
Stack che vorrei: [tech].
Compila PROJECT.md seguendo template."

# 4. Claude genera PROJECT.md completo
# 5. Copia in projects/my-webapp/PROJECT.md
# 6. Commit e inizi sviluppo!
```

### Use Case 2: "Ho una sessione di 2 ore per progetto X"

```bash
# 1. Pull latest
git pull

# 2. Apri dashboard
open app/frontend/index.html

# 3. Click "🤖 Claude" su progetto X
# 4. Incolla context in Claude
# 5. Lavora 2 ore
# 6. Salva artifacts in deliverables/
# 7. Aggiorna PROJECT.md log
# 8. Commit + push
```

### Use Case 3: "Non so quale progetto affrontare oggi"

```bash
# 1. Apri dashboard
# 2. Guarda stats e progress bars
# 3. Priorità? Guarda badge priorità
# 4. Oppure chiedi a Claude:

# In Claude (con repo caricato)
"Analizza lo stato dei miei progetti.
Quale ha senso affrontare oggi considerando:
- Priorità
- Momentum (progress recente)
- Dipendenze"
```

### Use Case 4: "Voglio usare il sistema per studiare"

```bash
# 1. Crea progetto studio
mkdir -p projects/esame-fisica/{notes,flashcards,exercises}
cp templates/study_template.md projects/esame-fisica/PROJECT.md

# 2. Compila con Claude
"Progetto studio per esame Fisica 2.
Argomenti: [lista].
Data esame: [data].
Compila study template."

# 3. Durante studio
# Chiedi a Claude sintesi, flashcards, spiegazioni
# Salva tutto in deliverables/notes/
```

---

## 🆘 Troubleshooting

### Dashboard non mostra progetti nuovi

**Causa**: Dashboard usa lista progetti hardcoded (v1.0)

**Soluzione temporanea**:
1. Apri `app/frontend/index.html` in editor
2. Trova array `projects` in `<script>`
3. Aggiungi oggetto progetto manualmente
4. Salva e ricarica

**Soluzione v2.0**: Backend che legge cartelle dinamicamente

### Claude non capisce il contesto

**Causa**: PROJECT.md incompleto o ambiguo

**Fix**:
```
"Il mio PROJECT.md sembra incompleto.
Analizzalo e suggerisci cosa manca per context ottimale.

Sezioni critiche:
- CONTEXT chiaro
- OBIETTIVI specifici  
- STACK definito
- FASI con deliverables"
```

### Git conflicts

**Prevenzione**:
```bash
# Sempre pull prima di iniziare
git pull
```

**Risoluzione**:
```bash
# Se hai conflict
git status  # Vedi file in conflitto

# Apri file, risolvi manualmente
# Cerca marker: <<<<<<<, =======, >>>>>>>

# Dopo risoluzione
git add .
git commit -m "Risolto conflict in [file]"
```

### Troppi progetti, difficile gestire

**Soluzione**: Archivia progetti completati/vecchi
```bash
mv projects/vecchio projects/_archive/
```

**Oppure**: Crea progetti "meta" che raggruppano sotto-progetti

### Dashboard lento

**Causa**: Troppi progetti in array

**Fix v1.0**: Commenta progetti vecchi nell'array

**Fix v2.0**: Pagination o lazy loading

---

## 🔄 Workflow Avanzati

### Multi-Device Sync

**Scenario**: Lavori da Mac + iPad

**Setup**:
1. Repository su GitHub (già fatto)
2. Su iPad: App Working Copy (Git client)
3. Clone repository
4. Dashboard funziona da browser iPad
5. Commit da entrambi dispositivi

**Workflow**:
- Mac: Sviluppo pesante
- iPad: Review, piccole modifiche, planning
- Sync via GitHub automatico

### Collaboration (Future)

**Scenario**: Vuoi condividere progetto con collega

**Setup**:
1. Collega clona repository
2. Condividi cartella progetto specifico
3. Ognuno lavora su branch
4. Merge con pull requests

**Tools**: GitHub Issues per task, Projects per kanban

### Automation Scripts (Avanzato)

```bash
# Script: new-project.sh
#!/bin/bash
NAME=$1
TYPE=${2:-other}

mkdir -p projects/$NAME/{context,deliverables}
cp PROJECT_TEMPLATE.md projects/$NAME/PROJECT.md

echo "✅ Progetto $NAME creato!"
echo "Compila: projects/$NAME/PROJECT.md"
```

```bash
# Uso
./new-project.sh my-app webapp
```

---

## 📊 Metriche & Analytics

### Tracciare Produttività

**Metodo manuale**:
- Guarda log PROJECT.md
- Conta commit per progetto
- Progress % settimanale

**Con script**:
```bash
# Commit per progetto ultimo mese
git log --since="1 month ago" --pretty=format:"%s" | grep "Progetto"
```

### Dashboard Analytics (Future Feature)

Visualizzazioni:
- Progress trend nel tempo
- Commit heatmap
- Time spent per progetto
- Velocity (features/week)

---

## 🎓 Tips & Tricks

### 1. Usa Alias Git
```bash
# In ~/.zshrc o ~/.bashrc
alias gp="git add . && git commit -m"
alias gps="git add . && git commit -m 'Quick save' && git push"
alias gs="git status"

# Uso
gp "MTG: Feature X completata" && git push
```

### 2. Template Snippets

**VS Code**: Crea snippets per sezioni PROJECT.md frequenti

### 3. Claude Custom Instructions

**In Claude settings**:
```
Quando lavoro su progetti del mio Claude Project Hub:
- Leggi sempre PROJECT.md per context
- Genera codice completo (no placeholder)
- Suggerisci aggiornamenti PROJECT.md
- Valida output rispetto obiettivi progetto
```

### 4. Quick Context Script

```bash
# quick-context.sh
#!/bin/bash
PROJECT=$1
cat projects/$PROJECT/PROJECT.md | pbcopy
echo "✅ Context $PROJECT copiato!"
```

```bash
# Uso
./quick-context.sh mtg-webapp
# Poi incolla in Claude
```

---

## 🚀 Next Level

### Evoluzione Sistema

**v1.0** (Current): Statico, manuale
**v1.5** (Next): Backend parser, API
**v2.0** (Future): Claude API integrato, automation

### Contributi Personali

Personalizza il sistema:
- Aggiungi tuoi template
- Crea script automation
- Modifica dashboard con tue features
- Aggiungi moduli per tue necessità

**Ricorda**: È TUO sistema, adattalo! 🎨

---

<div align="center">

**🔄 WORKFLOW GUIDE v1.0**

*Da zero a produttività massima con Claude Project Hub*

Last Updated: 2025-09-29

</div>

---

## 📚 Risorse Aggiuntive

- [README.md](../README.md) - Overview sistema
- [KNOWLEDGE_BASE.md](../KNOWLEDGE_BASE.md) - Context Claude
- [PROJECT_TEMPLATE.md](../PROJECT_TEMPLATE.md) - Template progetti
- [SETUP.md](SETUP.md) - Setup tecnico dettagliato

**Domande?** Chiedi a Claude! 🤖