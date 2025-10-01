# Cucina Vegana - Sistema Gestione Completo

> 🥗 Progetto lifestyle per ottimizzare gestione cucina vegana quotidiana

---

## 📊 META

- **Tipo**: Creative / Lifestyle
- **Priorità**: Media
- **Durata Stimata**: 3-4 settimane
- **Status**: Active
- **Data Inizio**: 2025-09-15
- **Deadline**: Flessibile
- **Budget**: N/A (solo tool gratuiti)

---

## 🎯 CONTEXT

### Problema/Opportunità
La gestione della cucina vegana richiede:
- **Pianificazione settimanale** dei pasti per varietà nutrizionale
- **Database ricette** personalizzato e facilmente consultabile
- **Liste spesa automatiche** basate su menu pianificati
- **Calcoli nutrizionali** per bilanciamento macronutrienti
- **Gestione ingredienti** e sostituzioni intelligenti

Attualmente questo processo è manuale, dispersivo e richiede troppo tempo. Un sistema unificato riduce cognitive load e migliora la qualità nutrizionale.

### Background
- Transizione a dieta vegana completata
- Necessità di varietà per evitare monotonia
- Obiettivo: cucina veloce ma nutriente (30min max preparazione)
- Interesse per meal prep settimanale
- Budget alimentare da ottimizzare

### Target User
- **Primario**: Utilizzo personale quotidiano
- **Secondario**: Eventualmente condivisibile con comunità vegana

---

## 🎯 OBIETTIVI

### Obiettivo Primario
**Creare un sistema integrato che riduca il tempo di planning settimanale da 2 ore a 30 minuti, mantenendo varietà e qualità nutrizionale.**

### Obiettivi Secondari
- [ ] Database di almeno 50 ricette testate e ottimizzate
- [ ] Generazione automatica menu settimanale bilanciato
- [ ] Lista spesa auto-generata da menu
- [ ] Calcolo automatico macronutrienti per ricetta
- [ ] Sistema sostituzioni ingredienti intelligente
- [ ] Mobile-friendly per uso in cucina

### Success Criteria
- Menu settimanale generato in <5 minuti
- Lista spesa completa e organizzata per supermercato
- Varietà: nessuna ricetta ripetuta in 2 settimane
- Bilanciamento: 50-60% carbs, 20-25% proteine, 20-25% grassi
- Tempo medio preparazione ricette: <30 minuti
- Sistema usato costantemente per 1 mese = successo

---

## 🛠️ STACK/TOOLS

### Tech Stack
**Frontend**:
- HTML5 + CSS3 (design minimale, functional-first)
- Vanilla JavaScript (no framework per semplicità)
- LocalStorage per persistenza dati (privacy-friendly)

**Backend** (opzionale future):
- Python Flask (se serve sync multi-device)
- SQLite database

**Data**:
- JSON per database ricette
- CSV export per analisi (opzionale)

### Development Tools
- **Editor**: VS Code
- **Version Control**: Git + GitHub
- **Testing**: Manuale + amici/famiglia tester
- **Design**: Figma (wireframe base)

### External Services/APIs
- **Nutritional Data**: USDA FoodData Central API (gratuita)
  - https://fdc.nal.usda.gov/api-guide.html
- **Recipe Inspiration**: Eventualmente web scraping siti vegani
- **Shopping**: Nessuna API (lista testuale semplice)

---

## 📋 FASI SVILUPPO

### Fase 1: Planning & Design ✅
**Obiettivo**: Definire features core e struttura dati

**Tasks**:
- [x] Brainstorming features necessarie
- [x] Wireframe UI base
- [x] Schema database ricette (JSON)
- [x] Definizione categorie ricette

**Deliverable**: 
- Wireframe dashboard (Figma)
- Schema JSON ricette v1

**Duration**: 3 giorni  
**Status**: Completed  
**Completato il**: 2025-09-18

---

### Fase 2: Recipe Database
**Obiettivo**: Creare database iniziale 30+ ricette

**Tasks**:
- [x] Setup JSON structure
- [ ] Inserimento 30 ricette favorite (10 completate)
- [ ] Test calcoli nutrizionali con USDA API
- [ ] Categorizzazione (colazione, pranzo, cena, snack)
- [ ] Tagging (veloce, economico, protein-rich, etc.)

**Deliverable**: 
- `recipes.json` con 30+ ricette complete
- Script Python per calcolo nutrienti

**Duration**: 1 settimana  
**Status**: In Progress (30%)  
**Completato il**: N/A

---

### Fase 3: Menu Generator
**Obiettivo**: Algoritmo generazione menu settimanale

**Tasks**:
- [ ] Logica bilanciamento nutrizionale
- [ ] Constraint: varietà (no repeat 2 settimane)
- [ ] Preferenze utente (es. "no tofu 3 giorni di fila")
- [ ] Export menu PDF/printable
- [ ] UI selezione preferenze

**Deliverable**: 
- Algoritmo funzionante
- UI menu generator

**Duration**: 1 settimana  
**Status**: Not Started  
**Completato il**: N/A

---

### Fase 4: Shopping List Generator
**Obiettivo**: Auto-generazione lista spesa da menu

**Tasks**:
- [ ] Parser ingredienti da ricette
- [ ] Aggregazione quantità (es. "2 cipolle" da 3 ricette = "6 cipolle")
- [ ] Organizzazione per categoria supermercato
- [ ] UI checklist interattiva
- [ ] Export/print lista

**Deliverable**: 
- Shopping list generator funzionante
- Template printable

**Duration**: 4 giorni  
**Status**: Not Started  
**Completato il**: N/A

---

### Fase 5: Polish & Advanced Features
**Obiettivo**: Refinement UI + feature bonus

**Tasks**:
- [ ] Sistema sostituzioni ingredienti
- [ ] Meal prep suggestions
- [ ] Mobile optimization
- [ ] Dark mode (per uso serale)
- [ ] Recipe rating/feedback loop

**Deliverable**: 
- App v1.0 completa
- Documentazione uso

**Duration**: 1 settimana  
**Status**: Not Started  
**Completato il**: N/A

---

## 🎁 DELIVERABLE FINALI

### Must Have (Core)
- [x] Wireframe/Design system
- [ ] Recipe database (50+ ricette)
- [ ] Menu generator settimanale
- [ ] Shopping list automatica
- [ ] Calcoli nutrizionali
- [ ] UI responsive e usabile

### Should Have (Important)
- [ ] Sistema sostituzioni ingredienti
- [ ] Export PDF menu + lista
- [ ] Meal prep mode
- [ ] Recipe search/filter avanzato

### Could Have (Nice to have)
- [ ] Multi-user (condivisione famiglia)
- [ ] Sync cloud (multi-device)
- [ ] Integration calendar (Google Calendar)
- [ ] Recipe photos database
- [ ] Community sharing ricette

### Won't Have (Out of scope v1.0)
- ❌ Social network features
- ❌ Video ricette
- ❌ E-commerce integration
- ❌ AI recipe generation (troppo complesso v1)

---

## 📝 NOTE/VINCOLI

### Vincoli Tecnici
- **Privacy-first**: Dati salvati localmente (LocalStorage)
- **Offline-capable**: Deve funzionare senza internet
- **Mobile-friendly**: >50% uso da mobile in cucina
- **Fast loading**: <2 secondi per qualsiasi operazione

### Vincoli Budget/Risorse
- Budget: €0 (solo tool/API gratuite)
- Tempo: ~5-10 ore/settimana
- No design professionale (functional > beautiful)

### Vincoli Nutrizionali
- Database USDA non sempre ha prodotti italiani
- Calcoli nutrizionali approssimativi OK (±10%)
- Focus su macro, micro-nutrienti future iteration

### Decisioni Architetturali Importanti
- **LocalStorage vs Backend**: Scelto LocalStorage per v1.0
  - Pro: Semplicità, privacy, zero costi
  - Contro: No multi-device sync
  - Future: Backend opzionale se necessità sync
- **Vanilla JS vs Framework**: Vanilla JS
  - Pro: Zero dependencies, lightweight
  - Contro: Più codice manuale
  - Rationale: Progetto piccolo, non serve framework

### Known Issues/Risks
- ⚠️ **LocalStorage limit**: 5-10MB max (soluzione: compression JSON)
- ⚠️ **USDA API rate limit**: 1000 req/hour (soluzione: caching aggressivo)
- ⚠️ **Mobile input**: Difficile inserire nuove ricette da mobile (accettato, uso desktop per admin)

---

## 📚 RISORSE

### Documentazione
- USDA FoodData Central API: https://fdc.nal.usda.gov/api-guide.html
- LocalStorage API: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- JSON Schema: https://json-schema.org/

### Tutorial/Guide
- Meal Planning Algorithms: https://example.com (da cercare)
- Nutritional Balance Guidelines: https://www.health.gov/dietaryguidelines

### Inspiration/References
- **Eat This Much**: Meal planner app (ispirazione UX)
- **Paprika Recipe Manager**: DB structure reference
- **Notion Meal Planner Templates**: Layout ideas

### Recipe Sources
- Vegan Richa: https://www.veganricha.com/
- Minimalist Baker: https://minimalistbaker.com/
- Pick Up Limes: https://www.pickuplimes.com/
- Community italiane: Facebook groups, Forum

---

---

## 🔄 SESSION HANDOFF

### Current Working Context
**Phase**: Phase 2 - Recipe Database  
**Progress**: 30%
**File**: `deliverables/data/recipes.json`
**Last Action**: Inserted 10 recipes with complete data structure

### What Works
- ✅ JSON schema defined and validated
- ✅ 10 recipes fully inserted with ingredients + nutrition
- ✅ Recipe categorization system working (colazione, pranzo, cena, snack)
- ✅ Tag system defined (veloce, economico, protein-rich)
- ✅ USDA API tested and functional

### What's Missing
- ❌ 20 more recipes needed (target: 30 total for Phase 2)
- ❌ Ingredient EN→IT mapping file not created yet
- ❌ Batch nutrition calculation script not written
- ❌ Recipe search/filter not implemented
- ❌ Portion scaling logic not implemented

### Immediate Next Steps
```
1. Continue adding recipes to recipes.json
   Target: 20 more recipes (pasta, legumes, vegetables, desserts)
   Focus: Quick recipes (<30 min prep+cook)

2. Create ingredient_mapping.json
   File: deliverables/data/ingredient_mapping.json
   Format: {"tomato": "pomodoro", "onion": "cipolla", ...}
   Purpose: USDA API uses English, need Italian names

3. Write Python script for batch nutrition calculation
   File: scripts/calculate_nutrition.py
   Input: recipes.json
   Output: Updated recipes.json with nutrition per serving

4. Test USDA API with common ingredients
   Verify: "pasta", "rice", "beans", "tomatoes"
   Handle: 1000 req/hour rate limit (add delays)

5. Update progress in PROJECT.md
   New progress: 30% → 50% when 20 recipes added
```

### Blockers/Decisions Needed
- [ ] **USDA API Italian ingredients**: Many Italian products not in USDA database (use closest equivalent)
- [ ] **Nutrition accuracy**: Accept ±10% approximation or invest time in precise data?
- [ ] **Recipe input method**: Continue manual JSON editing or build simple input form?
- [ ] **Photo database**: Add recipe photos now or defer to Phase 5?

### Context for Next Session
```
"Continue Cucina Vegana - Phase 2 Recipe Database.

Current: 10/30 recipes completed (30%).
Next: Add 20 more recipes, create EN→IT ingredient mapping, write nutrition calculation script.

Priority: Reach 30 recipes minimum to start Phase 3 (Menu Generator).

Focus on quick recipes (<30 min) for weeknight cooking.
Categories needed: 10 pasta, 5 legumes, 10 vegetables, 5 snacks.

JSON schema working - just need more data."
```

---

## 📊 PROGRESS TRACKING

### Current Phase
**Fase**: 2 - Recipe Database  
**Progress**: 30%  
**Next Milestone**: Completare 30 ricette base

### Overall Progress
```
Planning       [████████████████████] 100%
Database       [██████░░░░░░░░░░░░░░]  30%
Menu Gen       [░░░░░░░░░░░░░░░░░░░░]   0%
Shopping       [░░░░░░░░░░░░░░░░░░░░]   0%
Polish         [░░░░░░░░░░░░░░░░░░░░]   0%
```

### Time Tracking
- **Stimato Totale**: 40 ore
- **Speso Finora**: 8 ore
- **Rimasto Stimato**: 32 ore

---

## 📖 LOG PROGETTO

### 2025-09-15 - Inizio Progetto
- Creato PROJECT.md
- Brainstorming iniziale features
- Ricerca API nutrizionali disponibili

---

### 2025-09-18 - Completato Planning
**Progresso**:
- Wireframe UI completato in Figma
- Schema JSON ricette definito v1
- Categorizzazione ricette decisa

**Decisioni**:
- LocalStorage per v1.0 (no backend subito)
- Focus su functional design, estetica secondaria
- USDA API scelta per dati nutrizionali

**Next Steps**:
- Iniziare inserimento ricette in JSON
- Setup base HTML/CSS/JS structure
- Test USDA API con 5 ingredienti comuni

---

### 2025-09-22 - Recipe Database Avviato
**Progresso**:
- Setup `recipes.json` con struttura definitiva
- Inserite prime 10 ricette con dati completi
- Test USDA API: funzionante ma richiede mapping manuale

**Blockers**:
- USDA ha naming diverso (es. "tomato" vs "pomodoro")
- Serve script mapping EN→IT per ingredienti comuni
- Calcolo porzioni non triviale (recipe for 4, eating for 1)

**Decisioni**:
- Creare file `ingredient_mapping.json` EN-IT
- Calcoli nutrizionali per porzione, scalabili
- Inserimento manuale ricette OK (non automation v1)

**Next Steps**:
- Completare 20 ricette rimanenti (goal: 30 totale)
- Script Python per batch-compute nutrienti
- Iniziare pensare algoritmo menu generator

---

### [YYYY-MM-DD] - [Titolo Update]
[Continua log...]

---

## 🤝 COLLABORATION

### Contributors
- Me: Owner, Developer, Chef 🧑‍🍳
- Beta Testers: Amici/Famiglia (futuro)

### How to Contribute (Future)
Se decido di open-source:
- Fork repository
- Aggiungi ricette via PR
- Segnala bug via Issues

### Communication
- **Primary**: Personal use (no team)
- **Future**: Eventualmente community Discord/Telegram

---

## 🔄 MAINTENANCE

### Post-Launch
- [ ] Aggiungere 5 nuove ricette/mese
- [ ] Aggiornare dati nutrizionali USDA (quarterly)
- [ ] Raccogliere feedback uso personale
- [ ] Iterare su pain points

### Future Enhancements
- Backend per sync multi-device
- Integration con smart home (Google Home: "Cosa cucino oggi?")
- AI suggestions basate su storico preferenze
- Computer vision per inventory ingredienti (foto frigo)
- Gamification (streak giorni cucina, achievements)

### Deprecation Plan
N/A - Sistema permanente uso personale

---

## 🎓 LEARNINGS

### Cosa Ho Imparato
- **LocalStorage limitations**: Ottimo per MVP, inadeguato per scale
- **Nutritional APIs**: Dati disponibili ma disomogenei, mapping necessario
- **Design constraint**: Less is more - features semplici usate > features complesse ignorate

### Cosa Rifarei Diversamente
- Iniziare con 10 ricette invece di puntare a 30 (MVP più veloce)
- Usare Google Sheets per recipe input (più veloce di JSON manuale)
- Prototipo carta/penna prima di code

### Best Practices Emerse
- **Data-first approach**: Schema dati solido = feature facili dopo
- **Use what you build**: Dogfooding immediato, feedback reale
- **Iterate on pain**: Solo features che risolvono pain reale

---

## 📎 APPENDIX

### Glossario
- **Meal Prep**: Preparazione pasti in batch (es. domenica per tutta settimana)
- **Macro**: Macronutrienti (carbs, proteine, grassi)
- **USDA**: United States Department of Agriculture (database nutrizionale)
- **WFPB**: Whole Food Plant-Based

### Recipe JSON Schema
```json
{
  "id": "pasta-pomodoro-001",
  "name": "Pasta al Pomodoro",
  "category": "lunch",
  "tags": ["veloce", "economico", "italiano"],
  "servings": 2,
  "prep_time": 10,
  "cook_time": 15,
  "ingredients": [
    {"name": "pasta", "quantity": 200, "unit": "g"},
    {"name": "pomodori pelati", "quantity": 400, "unit": "g"},
    {"name": "aglio", "quantity": 2, "unit": "spicchi"}
  ],
  "instructions": ["Step 1", "Step 2"],
  "nutrition_per_serving": {
    "calories": 450,
    "protein": 15,
    "carbs": 80,
    "fat": 8
  }
}
```

### Links Quick Access
- Repository: `projects/cucina-vegana/`
- Recipes JSON: `deliverables/data/recipes.json`
- UI Prototype: `deliverables/code/index.html`

---

<div align="center">

**🥗 CUCINA VEGANA v1.0**

*Sistema gestione intelligente cucina plant-based*

Last Updated: 2025-09-29

</div>