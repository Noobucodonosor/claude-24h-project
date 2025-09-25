# Setup Progetto 24h - Claude + GitHub

## Ambiente
- **Sistema**: Mac Tahoe
- **Git Interface**: GitHub Desktop
- **Repository**: `claude-24h-project`
- **Workflow**: Claude genera → Copia manuale → Commit GitHub Desktop

## Struttura Repository
```
claude-24h-project/
├── README.md
├── SETUP.md                    # questo file
├── obiettivi.md
├── obiettivi_tracker_app.html
├── md.md
└── [altri file progetto]
```

## Workflow Standard

### Nuova Sessione Claude
1. **Carica contesto**: `Aggiungi da GitHub: https://github.com/[username]/claude-24h-project`
2. **Claude legge** tutti i file del progetto
3. **Richiedi modifiche**: "Migliora [file] aggiungendo [funzionalità]"

### Implementazione Modifiche
1. **Claude genera** codice/contenuto in artifact
2. **Copia** dall'artifact
3. **Sostituisci/crea** file nel repository locale
4. **GitHub Desktop**: 
   - Vedi changes automaticamente
   - Scrivi commit message
   - Commit → Push

### Aggiornamenti
- **Dopo modifiche**: "Ho aggiornato il repo, controlla [file specifico]"
- **Nuovi file**: Claude può generarli, tu li aggiungi manualmente al repo

## Comandi Utili per Claude

```
# Analisi
"Analizza la struttura del progetto e suggerisci miglioramenti"

# Modifiche esistenti  
"Modifica obiettivi_tracker_app.html aggiungendo [feature]"

# Nuovi file
"Crea un file [nome].md per [scopo] che si integri con il progetto"

# Controllo stato
"Basandoti sui file del repo, qual è lo stato attuale del progetto 24h?"
```

## Limitazioni
- Claude **NON modifica direttamente** il repository
- Tutte le modifiche sono **manuali** via GitHub Desktop
- Claude **legge** repo ma **genera** in artifact

## Best Practices
- **Commit frequenti** con messaggi descrittivi
- **Un file alla volta** per modifiche complesse  
- **Backup automatico** tramite GitHub
- **Sessioni brevi** ma documentate nel repo