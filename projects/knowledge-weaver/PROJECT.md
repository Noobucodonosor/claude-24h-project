Knowledge Weaver - Sistema Apprendimento Integrato
PROJECT.md
markdown# Knowledge Weaver - Sistema Apprendimento Semantico

> Sistema neo-illuminista per apprendimento integrato: intreccia interessi personali con programmi accademici attraverso dimensioni operative condivise

---

## 📊 META

- **Type**: Educational System / AI-Assisted Learning
- **Priority**: Alta (foundational per percorso universitario)
- **Status**: Planning
- **Started**: 2025-10-04
- **Deadline**: Evolutivo (cresce con il percorso di studi)
- **Duration**: Sistema permanente, setup iniziale 2-3 settimane
- **Hub Integration**: Active

---

## 🎯 CONTEXT

### Problem/Goal
I percorsi universitari tradizionali separano artificialmente le conoscenze in "materie" isolate a causa di vincoli strutturali: un docente per materia, studenti in aule fisiche. Questo approccio compartimentato ignora che la conoscenza reale opera attraverso dimensioni operative trasversali. L'apprendimento risulta astratto, sconnesso dagli interessi personali, e inefficiente per la retention a lungo termine.

L'opportunità è utilizzare capacità di un sistema AI per superare questi vincoli: intrecciare tutti i programmi accademici in una cronologia lineare dove i concetti emergono solo quando necessari, usando gli interessi personali come pretesti concreti per l'apprendimento. La termodinamica non viene studiata in astratto a gennaio del secondo anno, ma quando serve per capire la carburazione dello scooter martedì prossimo.

### Background
Contesto personale che definisce il sistema:
- Obiettivo accademico: completare laurea in Ingegneria Informatica con focus AI
- Background formativo: storia e filosofia (approccio umanistico al sapere tecnico)
- Interessi operativi molteplici: nautica professionale, elettronica musicale (chitarre/amplificatori/Arduino), cucina vegana e chimica alimentare, agricoltura e IoT, falegnameria e carpenteria, motori (scooter/moto/barche), trasformazione spazi abitativi, aspirazioni imprenditoriali (coworking con poltrone ergonomiche e cucina vegana), geografia del territorio ligure, storia del sapere strutturato (Geymonat, Abbagnano)

Insight fondamentale emerso dalla conversazione: questi interessi non sono casuali ma condividono dimensioni operative latenti. L'amplificatore chitarra e il motorino condividono "dissipazione calore in componenti sotto stress". La nautica e il coworking condividono "gestione spazi dove persone stanno comode per periodi prolungati". Queste dimensioni non hanno nomi nelle discipline formali ma sono reali e utilizzabili come connettori.

### Success Criteria
Il sistema è considerato funzionante quando:
- Comando "-intreccia-" genera automaticamente connessioni non ovvie tra un nuovo interesse e quelli esistenti attraverso dimensioni operative condivise
- Ogni concetto accademico viene appreso nel momento in cui risolve un problema pratico attuale, non anni prima in forma astratta
- Il database semantico contiene almeno cinquanta interessi con dimensioni operative esplicitate e connessioni mappate
- Almeno tre esami universitari sono stati superati utilizzando esclusivamente questo sistema come metodo di studio
- Il tempo di preparazione esame si riduce del trenta percento mantenendo o migliorando i voti rispetto all'approccio tradizionale
- Il sistema funziona come conversazione infinita senza perdita di contesto attraverso file Markdown versionati su GitHub

---

## 🎯 OBIETTIVI

### Obiettivo Primario
Creare un sistema di apprendimento che permetta di superare tutti gli esami del corso di laurea in Ingegneria Informatica utilizzando problemi reali e interessi personali come pretesti per l'acquisizione di concetti accademici, riducendo il tempo di studio del trenta percento e aumentando la retention a lungo termine attraverso applicazione immediata.

### Obiettivi Secondari
- Strutturare ogni interesse come vettore in uno spazio semantico multidimensionale dove la vicinanza rappresenta applicabilità condivisa, non parentela disciplinare
- Implementare il comando "-intreccia-" che proietta un nuovo interesse nello spazio esistente, identifica sovrapposizioni dimensionali con altri interessi, ed esplicita punti di applicazione condivisi
- Estendere il sistema oltre ingegneria informatica attingendo da programmi di altre facoltà (economia per imprenditoria, chimica per cucina, fisica applicata per nautica) quando i propri interessi lo richiedono
- Documentare in formato riutilizzabile il processo di trasformazione da interesse pratico a concetto accademico per ogni esame sostenuto
- Creare una rete densa dove l'apprendimento di un concetto diventa immediatamente applicabile in contesti multipli

---

## 🛠️ STACK/TOOLS

### Tech Stack
**Data Structure**: 
- JSON per rappresentazione interessi come oggetti con dimensioni esplicite
- Markdown per documenti narrativi e percorsi di apprendimento
- Git per versionamento e tracciamento evoluzione del sistema

**AI/ML**:
- Claude API per generazione connessioni semantiche, espansione dimensioni operative, sintesi concetti accademici
- Embedding models (potenzialmente) per calcolo similarità vettoriale automatico tra interessi
- Sistema di prompting strutturato per comando "-intreccia-"

**Storage**:
- GitHub repository come single source of truth
- File structure: semantic-space/ directory con un JSON per interesse
- Cross-references attraverso link tra file Markdown

### Development Tools
**Editor**: VS Code per manipolazione JSON/Markdown
**Version Control**: Git con commit semantici per tracciare espansione knowledge graph
**Visualization**: Strumenti per visualizzare rete di interessi (Obsidian graph view, custom D3.js visualization)

### External Services/APIs
- Claude API (via Hub quando disponibile) per elaborazione semantica
- Eventualmente Notion o Airtable per interfaccia visuale su database interessi
- USDA FoodData API (già utilizzato in progetto Cucina Vegana) come esempio di integrazione dati esterni per arricchimento dimensioni

---

## 📋 DEVELOPMENT PHASES

### Phase 1: Semantic Space Foundation
**Goal**: Struttura dati funzionante per rappresentare interessi come vettori multidimensionali

**Tasks**:
- Definire JSON schema per oggetto "interesse" con campi: id, nome, categoria, descrizione, dimensioni_operative, progetti_concreti, collegamenti_ad_altri
- Creare directory semantic-space/ con sottocartelle per categorie tematiche
- Documentare almeno dieci interessi primari già dichiarati (nautica, elettronica musicale, cucina vegana, etc.) con relative dimensioni operative estratte
- Implementare sistema di nomenclatura consistente per dimensioni operative
- Creare file master index.json che mappa tutti gli interessi e le loro relazioni

**Deliverables**: 
- Schema JSON validato
- Dieci file interesse completi in semantic-space/
- Documentazione metodologia per estrazione dimensioni operative

**Duration**: Una settimana
**Status**: Not Started

---

### Phase 2: Comando "-intreccia-" Implementation
**Goal**: Meccanismo funzionante per generare connessioni automatiche tra interessi

**Tasks**:
- Progettare prompt template per Claude che riceve un nuovo interesse e lo proietta nello spazio esistente
- Implementare logica di identificazione sovrapposizioni dimensionali (inizialmente manuale con assistenza Claude, poi automatizzabile)
- Creare workflow: utente dichiara interesse → sistema genera dimensioni operative → identifica cluster con altri interessi → esplicita punti applicazione condivisi
- Testare comando su cinque nuovi interessi non ancora mappati
- Raffinare prompt basandosi su qualità delle connessioni generate

**Deliverables**:
- Prompt template documentato e testato
- Workflow "-intreccia-" funzionante
- Almeno cinque esempi di successo con connessioni non ovvie scoperte

**Duration**: Dieci giorni
**Status**: Not Started

---

### Phase 3: Academic Integration - Mapping Programmi
**Goal**: Collegare sistema semantico con programmi accademici reali

**Tasks**:
- Raccogliere programmi dettagliati di tutti i corsi di Ingegneria Informatica (syllabus, argomenti, testi di riferimento)
- Per ogni corso, identificare concetti chiave che possono essere appresi attraverso interessi esistenti
- Creare file "percorso_corso_[nome].md" che mappa concetti accademici su dimensioni operative degli interessi
- Esempio concreto: Fisica II (termodinamica) → dimensione "dissipazione calore" condivisa da motorino, amplificatore chitarra, cucina (cottura), coworking (efficienza energetica)
- Documentare almeno tre percorsi completi per tre corsi diversi

**Deliverables**:
- Repository completo programmi accademici in formato machine-readable
- Tre percorsi di apprendimento corso→interessi completamente mappati
- Template riutilizzabile per mapping futuri corsi

**Duration**: Due settimane
**Status**: Not Started

---

### Phase 4: First Exam Validation
**Goal**: Validare sistema su esame reale completo

**Tasks**:
- Selezionare prossimo esame in calendario accademico
- Seguire esclusivamente percorso di apprendimento generato dal sistema (no studio tradizionale)
- Documentare ogni concetto: problema pratico che lo ha scatenato, interesse utilizzato come pretesto, tempo impiegato, livello comprensione
- Sostenere esame e registrare voto
- Post-mortem completo: cosa ha funzionato, cosa no, gap nel sistema, iterazioni necessarie
- Confrontare con baseline (esami precedenti con metodo tradizionale): tempo speso, voto ottenuto, retention dopo un mese

**Deliverables**:
- Documentazione completa preparazione esame attraverso sistema
- Voto esame registrato con comparazione baseline
- Report post-mortem con miglioramenti identificati
- Sistema validato o lista prioritaria di fix necessari

**Duration**: Tre settimane (preparazione + esame + analisi)
**Status**: Not Started

---

### Phase 5: Scaling and Automation
**Goal**: Rendere sistema scalabile per gestire simultaneamente molteplici corsi

**Tasks**:
- Implementare sistema scheduling che suggerisce quali concetti studiare quando basandosi su calendar esami
- Creare dashboard visuale dello stato apprendimento: concetti coperti vs rimanenti per corso, interessi più/meno utilizzati, dimensioni operative scoperte
- Automatizzare generazione flashcards Anki da percorsi apprendimento per retention lungo termine
- Integrare con progetto Università esistente (Obsidian vault, workflow studio)
- Sistema notifiche: quando interesse nuovo emerge da vita quotidiana, suggerisce connessioni con concetti accademici pendenti

**Deliverables**:
- Dashboard funzionante
- Integrazione completa con workflow studio esistente
- Sistema schedulazione automatico
- Primo caso d'uso con due esami simultanei gestiti dal sistema

**Duration**: Tre settimane
**Status**: Not Started

---

### Phase 6: Extension Beyond Ingegneria Informatica
**Goal**: Estendere sistema ad altri programmi accademici rilevanti per interessi

**Tasks**:
- Identificare corsi da altre facoltà rilevanti: economia (per imprenditoria), chimica (per cucina), fisica applicata (per nautica/motori), biologia (per agricoltura)
- Applicare stesso processo mapping dimensioni operative
- Creare percorsi ibridi: esempio "imprenditoria coworking" richiede economia aziendale + design spazi + nutrizione + sistemi digitali da quattro facoltà diverse
- Documentare almeno due percorsi cross-facoltà completi
- Validare che approccio funziona anche fuori ingegneria informatica

**Deliverables**:
- Due percorsi cross-facoltà mappati e documentati
- Estensione schema dati per gestire programmi non-informatica
- Dimostrazione sistema applicabile universalmente

**Duration**: Due settimane
**Status**: Not Started

---

## 🎁 DELIVERABLES

### Must Have (Sistema Funzionante)
- Database semantico con almeno cinquanta interessi completamente mappati con dimensioni operative esplicite
- Comando "-intreccia-" funzionante che genera connessioni di qualità tra nuovi interessi e spazio esistente
- Percorsi di apprendimento completi per almeno tre corsi di Ingegneria Informatica
- Validazione su almeno un esame reale sostenuto con successo utilizzando solo questo sistema
- Documentazione riutilizzabile del processo di trasformazione interesse→concetto accademico
- Integrazione con GitHub per context infinito senza perdite

### Should Have (Potenziamento Sistema)
- Dashboard visuale dello spazio semantico e stato apprendimento
- Automazione generazione flashcards per spaced repetition
- Sistema scheduling intelligente per gestione multipli esami
- Integrazione completa con progetto Università esistente
- Almeno due percorsi cross-facoltà (ingegneria + altra disciplina)

### Could Have (Future Enhancement)
- Visualizzazione grafica interattiva della rete interessi (tipo knowledge graph)
- Sistema raccomandazione: "dato questo interesse nuovo, dovresti studiare questi concetti accademici ora"
- Community sharing: altri studenti con interessi simili possono riutilizzare percorsi
- Embedding automatico degli interessi per calcolo similarità senza intervento manuale
- Export sistema in formato riutilizzabile per altri domini (non solo accademico)

### Won't Have (Fuori Scope V1.0)
- Piattaforma web pubblica accessibile (resta tool personale)
- Generazione automatica contenuti didattici (Claude assiste ma non sostituisce studio)
- Integrazione diretta con sistemi universitari ufficiali (registro elettronico, etc.)
- Certificazioni formali del percorso (resta complementare a laurea tradizionale)

---

## 📝 CONSTRAINTS & NOTES

### Vincoli Tecnici
- Sistema deve funzionare completamente offline dopo setup iniziale (materiali studio disponibili localmente)
- File JSON devono restare human-readable per permettere editing manuale quando necessario
- Nessuna dipendenza da servizi esterni critici (Claude assistente opzionale, non bloccante)
- Compatibilità con workflow Git esistente (commit frequenti, branches per sperimentazione percorsi)
- Performance: caricamento spazio semantico completo deve richiedere meno di cinque secondi

### Vincoli Accademici
- Sistema complementare, non sostitutivo del percorso universitario ufficiale (esami formali vanno comunque sostenuti)
- Compliance con regole anti-plagio: tutto il lavoro resta personale, Claude solo assistente per connessioni
- Originalità garantita: sintesi e comprensione sempre personali, mai delegate
- Validazione obiettiva attraverso voti esami confrontati con baseline metodo tradizionale

### Vincoli Risorse
- Budget: minimale, solo strumenti gratuiti o già disponibili (Claude API via Hub quando disponibile)
- Tempo setup: massimo due ore settimanali dedicate a manutenzione sistema, resto deve essere studio effettivo
- Cognitive load: sistema deve semplificare, non aggiungere complessità (se richiede più sforzo del metodo tradizionale, fallisce)

### Decisioni Architetturali Importanti

**JSON vs Database Relazionale**: Scelto JSON per rappresentare interessi.
Rationale: flessibilità schema (dimensioni operative emergono progressivamente, schema rigido limiterebbe), human-readability per editing manuale, versionabilità con Git, zero setup infrastrutturale.
Trade-off accettato: query complesse meno efficienti che con SQL, ma scala sufficiente per uso personale (centinaia di interessi, non milioni).

**Dimensioni Operative vs Tassonomie Formali**: Scelto approccio bottom-up basato su applicabilità condivisa.
Rationale: le discipline formali sono costrutti artificiali che non catturano connessioni reali tra problemi pratici. Due elementi sono "vicini" se condividono caratteristiche funzionali latenti, anche se provengono da categorie completamente diverse secondo tassonomie tradizionali.
Esempio: coworking e nautica non hanno parentela disciplinare, ma condividono "gestione spazi dove persone devono stare comode per periodi prolungati" - dimensione reale non nominata formalmente.

**Claude come Assistente vs Automazione Completa**: Scelto approccio semi-automatico con Claude che suggerisce ma utente valida.
Rationale: l'apprendimento richiede coinvolgimento cognitivo attivo. Sistema completamente automatico genererebbe percorsi ma senza comprensione. Claude identifica connessioni non ovvie, utente le valida e le utilizza per studio effettivo.
Trade-off: più lento di automazione totale, ma garantisce apprendimento reale vs illusione di conoscenza.

### Known Issues/Risks

**Risk: Over-engineering del sistema diventa procrastinazione dello studio effettivo**
Mitigation: Timebox severo manutenzione sistema (massimo due ore settimanali). Se setup richiede più tempo del risparmio generato, sistema fallisce per definizione. Focus su validazione rapida con primo esame prima di estensione.

**Risk: Connessioni generate sono superficiali o forzate**
Mitigation: Validazione attraverso applicazione pratica immediata. Se connessione non porta a progetto concreto costruibile/testabile, viene scartata. Quality gate: ogni dimensione operativa deve avere almeno un esempio pratico documentato.

**Risk: Sistema troppo personale, non riutilizzabile**
Mitigation accettata: sistema intenzionalmente personalizzato sui propri interessi. Riutilizzabilità non è obiettivo primario. Se funziona bene per un individuo, ha valore anche se non generalizza. Eventuale generalizzazione futura possibile ma non necessaria per successo.

**Risk: Retention lungo termine non verificata**
Mitigation: tracking esplicito con test recall dopo uno e tre mesi da esame. Integrazione con Anki per spaced repetition. Se retention non superiore a metodo tradizionale, sistema va rivisto.

---

## 📊 CURRENT STATUS

**Phase**: Pre-Phase 1 (Planning)
**Progress**: 0% (definizione progetto completa, implementazione non iniziata)
**Last Update**: 2025-10-04
**Next Steps**: 
1. Creare directory semantic-space/ nella struttura repository
2. Definire JSON schema formale per oggetti interesse
3. Documentare primi dieci interessi primari già dichiarati
4. Proof of concept: mappare completamente un interesse con tutte dimensioni operative

---

## 🔄 SESSION HANDOFF

### Context for Next Session
"Progetto Knowledge Weaver attivo nell'Hub. Sistema di apprendimento semantico per superare esami universitari usando interessi personali come pretesti..."

### Current Working Context
**Phase**: Planning completo
**Progress**: Definizione progetto finalizzata, pronti per Phase 1
**File**: Questo PROJECT.md appena creato
**Last Action**: Definizione completa architettura sistema e deliverables

### What Works
- Visione chiara del sistema emersa da conversazione: semantic space con dimensioni operative
- Comando "-intreccia-" ben definito concettualmente
- Obiettivo concreto: superare esami ingegneria informatica usando interessi come pretesti
- Integrazione con Hub e progetti esistenti (Università) identificata
- Lista estesa interessi già disponibile da conversazione precedente

### What's Missing
- JSON schema formale non ancora scritto
- Directory semantic-space/ non ancora creata nel repository
- Nessun interesse ancora documentato in formato strutturato
- Prompt template per comando "-intreccia-" non ancora implementato
- Programmi accademici Ingegneria Informatica non ancora raccolti

### Immediate Next Steps

1. Creare struttura directory nel repository:
```bash
mkdir -p projects/knowledge-weaver/semantic-space/{primary,secondary,derived}
mkdir -p projects/knowledge-weaver/academic-programs
mkdir -p projects/knowledge-weaver/learning-paths
mkdir -p projects/knowledge-weaver/context
mkdir -p projects/knowledge-weaver/deliverables

Definire e salvare JSON schema per interesse:

json{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Interesse",
  "type": "object",
  "required": ["id", "nome", "categoria", "dimensioni_operative"],
  "properties": {
    "id": {"type": "string"},
    "nome": {"type": "string"},
    "categoria": {"type": "string"},
    "descrizione": {"type": "string"},
    "dimensioni_operative": {
      "type": "array",
      "items": {"type": "string"}
    },
    "progetti_concreti": {
      "type": "array",
      "items": {"type": "string"}
    },
    "collegamenti": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "interesse_id": {"type": "string"},
          "dimensione_condivisa": {"type": "string"},
          "applicazione_concreta": {"type": "string"}
        }
      }
    }
  }
}

Documentare primo interesse come esempio (nautica professionale) in semantic-space/primary/nautica.json
Creare prompt template per comando "-intreccia-" in context/intreccia-prompt.md
Iniziare raccolta programmi accademici: scaricare syllabus primo corso target

Blockers/Decisions Needed

Quale esame scegliere come primo target per validazione? (dovrebbe essere prossimo in calendario)
Livello granularità dimensioni operative: quanto specifiche vs generiche? (esempio: "dissipazione calore" vs "termodinamica applicata a sistemi sotto stress")
Tool visualizzazione rete: investire tempo in grafo interattivo o restare su testo/JSON per v1.0?
Integrazione con Obsidian (progetto Università): usare stesso vault o repository separato?

Context for Next Session
"Nuovo progetto Knowledge Weaver appena creato. Sistema di apprendimento semantico per superare esami universitari usando interessi personali come pretesti.
Vision: intrecciare nautica, elettronica, cucina, motori, falegnameria, etc. con programmi Ingegneria Informatica attraverso dimensioni operative condivise. Esempio: termodinamica appresa via carburazione scooter, non in astratto.
Status: PROJECT.md completo, pronto per Phase 1 - Semantic Space Foundation.
Next: creare struttura directory, definire JSON schema, documentare primi dieci interessi, implementare comando -intreccia-.
File chiave: questo PROJECT.md appena generato."

📖 PROJECT LOG
2025-10-04 - Project Creation
Context: Emerso da conversazione su limiti educazione tradizionale e possibilità AI di superarli
Decisioni fondamentali:

Approccio semantic space con dimensioni operative invece di tassonomie disciplinari formali
Comando "-intreccia-" come meccanismo core per espandere rete interessi
Validazione obbligatoria su esami reali prima di considerare sistema funzionante
Integrazione con Hub come meta-progetto e con Università come progetto operativo esistente

Insights chiave dalla conversazione:

Database vettoriale / embedding space è modello concettuale corretto per rappresentare interessi
Connessioni sono funzionali (applicabilità condivisa) non tassonomiche (parentela disciplinare)
Ogni concetto deve arrivare quando risolve problema reale presente, non anni prima in forma astratta
Sistema deve ridurre cognitive load, non aumentarlo: semplicità brutale o fallisce

Next Steps pianificati:

Setup repository structure (directories semantic-space/, academic-programs/, learning-paths/)
JSON schema formale per interessi
Documentazione primi dieci interessi primari
Proof of concept comando "-intreccia-" su un nuovo interesse
Identificazione primo esame target per validazione


🎓 LEARNINGS
Cosa Ho Imparato (Da Conversazione Precedente)

Educazione tradizionale ha vincoli strutturali (docente/aula) che AI può superare
Interessi personali non sono casuali ma condividono dimensioni operative latenti identificabili
Database vettoriale è framework mentale corretto: similarità = applicabilità condivisa
"Generalizzazione da aspirazione a categoria" è stratagemma utile per espandere interessi (es: coworking Portofino → imprenditoria turistica territoriale)
Liste infinite non sono produttive quanto intreccio esplicito con esempi concreti

Best Practices Identificate

Ogni dimensione operativa deve avere almeno un progetto concreto costruibile/testabile come validazione
Focus su connessioni non ovvie: se connessione è banale (entrambi sono "fisica"), non aggiunge valore
Documentare sempre "come ci sono arrivato": percorso problema→concetto deve essere tracciabile e riproducibile
Validazione attraverso esami reali impedisce deriva teorica: sistema deve funzionare nel mondo reale o è inutile


📎 APPENDIX
Glossario Concetti Chiave
Semantic Space: Spazio multidimensionale dove ogni interesse è rappresentato come vettore. Vicinanza tra vettori indica applicabilità condivisa, non parentela disciplinare.
Dimensioni Operative: Caratteristiche funzionali di un interesse che determinano a cosa è applicabile. Esempio: "dissipazione calore sotto stress" è dimensione condivisa da amplificatore chitarra, motorino, cucina. Non hanno nome nelle discipline formali ma sono reali.
Comando -intreccia-: Operazione che prende nuovo interesse, lo proietta nello spazio semantico esistente, identifica sovrapposizioni dimensionali con altri interessi, esplicita punti di applicazione concreta condivisi.
Applicabilità Condivisa: Due interessi condividono applicabilità quando concetti/tecniche appresi in uno sono direttamente utilizzabili nell'altro. Base per connessioni nel sistema.
Pretesto per Apprendimento: Problema pratico reale che motiva acquisizione di concetto accademico. Sistema inverte logica tradizionale: non "studia termodinamica poi applicala", ma "devi riparare scooter quindi impara termodinamica ora".
Schema Esempio: Interesse Nautica Professionale
json{
  "id": "nautica-professionale",
  "nome": "Vita in Mare e Professione Marittima",
  "categoria": "lavoro-passione",
  "descrizione": "Lavoro in mare, navigazione professionale, gestione sistemi di bordo, vita in spazi ristretti per periodi prolungati",
  "dimensioni_operative": [
    "navigazione-calcoli-rotta",
    "gestione-segnali-ambienti-rumorosi",
    "manutenzione-sistemi-critici-autonomia",
    "spazi-ristretti-convivenza-prolungata",
    "sicurezza-procedure-emergenza",
    "comunicazione-protocolli-standard",
    "meteorologia-previsione-condizioni",
    "efficienza-energetica-autonomia",
    "logistica-supply-chain-via-mare"
  ],
  "progetti_concreti": [
    "ottimizzazione-rotte-consumo-carburante",
    "sistema-monitoraggio-iot-parametri-nave",
    "app-previsioni-meteo-marine-localizzate",
    "automazione-logbook-digitale",
    "design-cucina-bordo-spazi-ridotti"
  ],
  "collegamenti": [
    {
      "interesse_id": "elettronica-musicale",
      "dimensione_condivisa": "gestione-segnali-ambienti-rumorosi",
      "applicazione_concreta": "Radar e sonar marini usano elaborazione segnali simile a audio digitale. DSP per filtraggio rumore ambiente applicabile a entrambi."
    },
    {
      "interesse_id": "coworking-imprenditoria",
      "dimensione_condivisa": "spazi-ristretti-convivenza-prolungata",
      "applicazione_concreta": "Ergonomia cabine nave informa design poltrone coworking. Entrambi richiedono comfort in spazi limitati per ore."
    },
    {
      "interesse_id": "cucina-vegana",
      "dimensione_condivisa": "logistica-supply-chain-autonomia",
      "applicazione_concreta": "Meal prep settimanale per autonomia alimentare è versione domestica di provisioning nave. Ottimizzazione spazio/nutrienti/varietà."
    }
  ]
}
Esempio Percorso Apprendimento: Fisica II via Nautica
Esame Target: Fisica II (Termodinamica, Fluidodinamica, Onde)
Interesse Pretesto: Nautica Professionale + Motorino
Percorso Concetti:

Principio di Bernoulli (Fluidodinamica)

Problema pratico: capire come funziona carburatore motorino (flusso aria/benzina)
Stesso principio: portanza vela, flusso acqua sotto scafo
Progetto concreto: simulazione Python flusso carburatore, calcolo portata
Tempo stimato: 3 ore (vs 6 ore lezione tradizionale astratta)


Cicli Termodinamici (Termodinamica)

Problema pratico: ottimizzare efficienza motore fuoribordo 2T
Collegamento: cucina (trasferimento calore cottura), coworking (HVAC efficiente)
Progetto concreto: misurare temperature carburazione, calcolare rendimento
Tempo stimato: 4 ore


Propagazione Onde (Onde)

Problema pratico: capire radar marino, previsione onde mare
Collegamento: elettronica (onde elettromagnetiche chitarra/amplificatore)
Progetto concreto: decodificare segnali AIS nave, visualizzare spettro frequenze
Tempo stimato: 5 ore



Totale tempo percorso integrato: 12 ore
vs Tempo metodo tradizionale stimato: 18 ore (lezioni + studio libri)
Risparmio: 33%
Retention attesa: superiore (applicazione immediata vs astrazione)
Links Quick Access

Repository: projects/knowledge-weaver/
Semantic Space: projects/knowledge-weaver/semantic-space/
Academic Programs: projects/knowledge-weaver/academic-programs/
Learning Paths: projects/knowledge-weaver/learning-paths/


<div align="center">
🧠 KNOWLEDGE WEAVER v1.0
Sistema Neo-Illuminista per Apprendimento Integrato
Intreccia interessi personali con sapere accademico attraverso dimensioni operative condivise
Last Updated: 2025-10-04
</div>
```