# 🗺️ Cucina Vegana - Development Roadmap

> **Complete vegan kitchen management system**

**Status**: ⏸️ PAUSED (waiting for Hub V1.0)  
**Last Updated**: 2025-10-01  
**Progress**: 65% (Phase 2 - Recipe Database)

---

## 📍 CURRENT STATUS

**Phase**: Phase 2 - Recipe Database  
**Progress**: 65%  
**Paused On**: 2025-09-29  
**Reason**: Focusing on Hub development first

### When Paused
Was working on: Recipe database completion (10/30 recipes done)  
Next planned: Add 20 more recipes, create ingredient mapping

### Resume Conditions
- ✅ Hub reaches Checkpoint 2.2 (PDF Processor plugin working)
- ✅ OR need meal planning urgently (health/diet reasons)
- ✅ OR Hub blocked and want easier context switch

---

## ✅ COMPLETED CHECKPOINTS

### Checkpoint 1.1: Planning & Design (100%)
**Completed**: 2025-09-18  
**Time Spent**: 3h  
**Deliverable**: Wireframe + JSON schema ✅

**What Was Done**:
- [x] Brainstormed all necessary features
- [x] Created Figma wireframe for dashboard
- [x] Defined JSON schema for recipes v1.0
- [x] Categorized recipes (breakfast, lunch, dinner, snack)

**Learnings**: Simple schema better than complex. Start with MVP fields.

---

### Checkpoint 2.1: Recipe Database Setup (30%)
**Completed**: 2025-09-22  
**Time Spent**: 4h  
**Deliverable**: 10 recipes with complete data ✅

**What Was Done**:
- [x] Created `recipes.json` with final structure
- [x] Inserted 10 recipes (pasta, legumes, vegetables)
- [x] Tested USDA API for nutrition data
- [x] Implemented tag system (veloce, economico, protein-rich)

**Blockers Encountered**: USDA naming different from Italian (need EN→IT mapping)

---

## ⏳ IN-PROGRESS CHECKPOINTS

### Checkpoint 2.2: Complete Recipe Database (65%)
**Started**: 2025-09-22  
**Status**: ⏸️ Paused  
**Time Spent**: 2h so far

**Completed Tasks**:
- [x] First 10 recipes entered
- [x] JSON schema validated

**Pending Tasks**:
- [ ] Add 20 more recipes (10 pasta, 5 legumes, 5 vegetables)
- [ ] Create `ingredient_mapping.json` (EN→IT)
- [ ] Write nutrition calculation script (Python)
- [ ] Test batch nutrition computation

**Deliverable**: 30+ recipes in database, all with nutrition data  
**Est. Remaining**: 3-4h

---

## 🚀 UPCOMING CHECKPOINTS

### **PHASE 3: Menu Generator** 📅

#### Checkpoint 3.1: Algorithm Design 🧮
**Status**: ⬜ Not Started  
**Deliverable**: Menu generation logic (balanced nutrition)  
**Est**: 4-5h  
**Prerequisites**: 2.2 complete

#### Checkpoint 3.2: Constraint System ⚙️
**Status**: ⬜ Not Started  
**Deliverable**: Variety constraints (no repeat 2 weeks)  
**Est**: 3-4h  
**Prerequisites**: 3.1 complete

#### Checkpoint 3.3: UI Implementation 🎨
**Status**: ⬜ Not Started  
**Deliverable**: Menu generator interface working  
**Est**: 3-4h  
**Prerequisites**: 3.2 complete

---

### **PHASE 4: Shopping List Generator** 🛒

#### Checkpoint 4.1: Ingredient Parser 📝
**Status**: ⬜ Not Started  
**Deliverable**: Extract & aggregate ingredients from menu  
**Est**: 2-3h  
**Prerequisites**: 3.3 complete

#### Checkpoint 4.2: Supermarket Organization 🏪
**Status**: ⬜ Not Started  
**Deliverable**: List organized by store section  
**Est**: 2h  
**Prerequisites**: 4.1 complete

#### Checkpoint 4.3: Interactive Checklist ✅
**Status**: ⬜ Not Started  
**Deliverable**: UI checklist + print export  
**Est**: 2-3h  
**Prerequisites**: 4.2 complete

---

### **PHASE 5: Polish & Advanced** ✨

#### Checkpoint 5.1: Ingredient Substitution 🔄
**Status**: ⬜ Not Started  
**Deliverable**: Smart substitution suggestions  
**Est**: 3-4h  
**Prerequisites**: 4.3 complete

#### Checkpoint 5.2: Meal Prep Mode 📦
**Status**: ⬜ Not Started  
**Deliverable**: Batch cooking suggestions  
**Est**: 3h  
**Prerequisites**: 5.1 complete

#### Checkpoint 5.3: Mobile Optimization 📱
**Status**: ⬜ Not Started  
**Deliverable**: Responsive UI, kitchen-friendly  
**Est**: 4h  
**Prerequisites**: 5.2 complete

#### Checkpoint 5.4: Dark Mode 🌙
**Status**: ⬜ Not Started  
**Deliverable**: Evening-friendly theme  
**Est**: 2h  
**Prerequisites**: 5.3 complete

---

## 📝 SESSION LOG

### 2025-09-22 (4h) - Recipe Database Started
**Checkpoint**: 2.1 + partial 2.2  
**Work Done**:
- Setup `recipes.json` with structure
- Inserted 10 complete recipes
- Tested USDA API (works but needs mapping)
- Discovered need for EN→IT ingredient file

**Blockers**: 
- USDA uses English names ("tomato" not "pomodoro")
- Need manual mapping file for common ingredients

**Decisions**:
- Accept ±10% nutrition approximation (USDA not perfect)
- Manual recipe entry OK for v1 (no automation yet)
- Focus on quick recipes (<30 min prep+cook)

**Next Session (when resumed)**:
- Create `ingredient_mapping.json`
- Add 10 more recipes (prioritize pasta dishes)
- Write Python script for batch nutrition calc

### 2025-09-18 (3h) - Planning Complete
**Checkpoint**: 1.1 completed  
**Work Done**:
- Completed Figma wireframe
- Finalized JSON schema
- Decided on LocalStorage for v1 (no backend)
- Chose USDA API for nutrition data

**Learnings**:
- Keep schema simple (can expand later)
- Functional design > beautiful UI
- Privacy-first approach (local data)

---

## 🔧 TECHNICAL NOTES

### Stack
```javascript
Frontend: HTML5 + CSS3 + Vanilla JS
Data: JSON files + LocalStorage
API: USDA FoodData Central (free)
Backend: None (v1.0), Flask (v2.0 if needed)
```

### File Structure
```
cucina-vegana/
├── deliverables/
│   ├── code/
│   │   ├── index.html       # Main app
│   │   ├── style.css        # Styling
│   │   └── app.js           # Logic
│   ├── data/
│   │   ├── recipes.json           # 30+ recipes
│   │   └── ingredient_mapping.json # EN→IT
│   └── docs/
│       └── user-guide.md
└── scripts/
    └── calculate_nutrition.py  # Batch processing
```

### Design Decisions
- **LocalStorage vs Backend**: LocalStorage for v1 (simplicity, privacy)
- **Vanilla JS vs Framework**: No framework (small project, zero deps)
- **USDA API**: Free tier sufficient (1000 req/hour)

---

## 💡 INTEGRATION WITH HUB

### How Hub Will Help Cucina

**Phase 2 (Recipe Database)**:
- Hub's PDF processor for recipe PDFs (cookbooks)
- Notification when nutrition calculation complete

**Phase 3 (Menu Generator)**:
- Hub schedules weekly menu generation (Sunday evening)
- Notification: "Menu ready for next week"

**Phase 4 (Shopping List)**:
- Hub sends shopping list to phone (push notification)
- Integration with reminders/calendar

**Phase 5 (Advanced)**:
- Hub analytics: "You cook pasta 60% of the time, diversify?"
- Smart suggestions based on season/ingredients available

---

## 🎯 WHEN TO RESUME

### Primary Trigger
**Hub Checkpoint 2.2 Complete**: PDF Processor plugin working
- Can process recipe PDFs automatically
- Nutrition calculation automated via Hub
- Notification system for meal planning

### Secondary Triggers
- **Diet change needed**: Health/fitness goal requires meal planning
- **Bored of current meals**: Need variety, system helps
- **Hub blocked**: Easy project to switch context

### Don't Resume If
- Hub still early (Phase 0-1)
- Meal planning working manually (not urgent)
- Other projects higher priority

---

## 🚨 RISKS & MITIGATIONS

### Technical Risks
- **LocalStorage 5MB limit**: Risk if many recipes + images
  - Mitigation: JSON compression, lazy load images
- **USDA API rate limit**: 1000 req/hour
  - Mitigation: Cache aggressively, batch requests
- **Italian ingredient names**: USDA mostly English
  - Mitigation: Manual mapping file, closest equivalents OK

### Usability Risks
- **Mobile input difficult**: Hard to add recipes from phone
  - Mitigation: Accept (use desktop for admin, phone for viewing)
- **Manual data entry tedious**: 30 recipes = many hours
  - Mitigation: Start with 15 favorite recipes, expand later

---

## 🎓 LEARNING GOALS (When Resumed)

### Phase 2-3
- [ ] JSON data modeling best practices
- [ ] Nutrition calculation algorithms
- [ ] Menu generation with constraints
- [ ] LocalStorage optimization

### Phase 4-5
- [ ] UX for kitchen use (touch-friendly, readable)
- [ ] Mobile-first CSS patterns
- [ ] Dark mode implementation
- [ ] Print stylesheets

---

## 📊 SUCCESS METRICS

### MVP Success (End Phase 4)
- [ ] 30+ recipes in database
- [ ] Menu generated in <5 minutes
- [ ] Shopping list auto-generated correctly
- [ ] Used for 2 consecutive weeks without manual planning

### Full Success (End Phase 5)
- [ ] 50+ recipes (variety sustained)
- [ ] Mobile usage >50% (kitchen-friendly)
- [ ] Zero manual meal planning for 1 month
- [ ] Nutrition goals met (balanced macros)

---

## 📚 RESOURCES

### Documentation
- **PROJECT.md**: Complete project specification
- **Global ROADMAP.md**: Cross-project tracking
- **This file**: Cucina-specific checkpoints

### External
- **USDA API**: https://fdc.nal.usda.gov/api-guide.html
- **LocalStorage**: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- **Nutrition Guidelines**: https://www.health.gov/dietaryguidelines

### Recipe Sources
- Vegan Richa, Minimalist Baker, Pick Up Limes
- Italian vegan blogs (GialloZafferano veganizzato)

---

## 🔄 CHANGELOG

### 2025-10-01
- Created Cucina-specific ROADMAP.md
- Marked project as paused (65% at Phase 2)
- Documented Hub integration points
- Defined resume conditions

### 2025-09-22
- Started Phase 2 (Recipe Database)
- Completed Checkpoint 2.1 (10 recipes)
- Partial progress on 2.2 (65% overall)

### 2025-09-18
- Completed Phase 1 (Planning & Design)
- Checkpoint 1.1 done (wireframe + schema)

---

<div align="center">

**🥗 CUCINA VEGANA ROADMAP v1.0**

*Complete Vegan Kitchen Management*

**Status**: Paused at Phase 2 (65%)  
**Resume When**: Hub Checkpoint 2.2 complete  
**Est. Completion**: 2-3 weeks after resume

---

*Healthy meals, organized life*

</div>