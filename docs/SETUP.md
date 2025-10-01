# 💻 Development Environment Setup

> **Current hardware and software configuration for all projects**

**Last Updated**: 2025-10-01  
**System Status**: ✅ Fully Operational

---

## 🖥️ Hardware

### Primary Development Machine
- **Model**: MacBook Air M4
- **Chip**: Apple Silicon M4 (ARM architecture)
- **Memory**: 16GB Unified Memory
- **Storage**: 256GB SSD
- **OS**: macOS Tahoe 26.0 (Sequoia)

### Performance Characteristics
- **Architecture**: ARM64 (native Apple Silicon)
- **Neural Engine**: Available for ML acceleration
- **Memory Type**: Unified (shared between CPU/GPU)
- **Optimization**: Native support for MLX, Metal

---

## 🐍 Python Environment

### Version
- **Python**: 3.12+ (required for all projects)
- **Installation**: System Python or Homebrew

### Virtual Environment Strategy
```bash
# Per-project virtual environments
python3.12 -m venv venv_[project-name]

# Example:
python3.12 -m venv venv_mtg        # MTG Web App
python3.12 -m venv venv_cucina     # Cucina Vegana
```

### Package Management
- **Tool**: pip (standard)
- **Requirements**: Per-project `requirements.txt`
- **Upgrade**: `pip install --upgrade pip`

---

## 🛠️ Development Tools

### Code Editor
- **Primary**: VS Code
- **Extensions** (recommended):
  - Python
  - Pylance
  - Black Formatter
  - GitLens
  - Markdown All in One

### Version Control
- **Git**: Built-in macOS / Homebrew
- **Interface**: GitHub Desktop (GUI) + Terminal
- **Repository**: `claude-project-hub` on GitHub

### Terminal
- **Default**: macOS Terminal / iTerm2
- **Shell**: zsh (default macOS)

---

## 🌐 Web Development

### Node.js & Frontend
- **Node.js**: 18+ LTS (for Hub development)
- **Package Manager**: npm (default)
- **Build Tool**: Vite (for React projects)

### Browser Testing
- **Primary**: Safari (native, PWA testing)
- **Secondary**: Chrome (development tools)
- **Mobile**: iPhone Safari (PWA validation)

---

## 🤖 AI/ML Stack (Apple Silicon Optimized)

### Core Frameworks
- **MLX**: Apple's ML framework (M-series native)
  - Installation: `pip install mlx mlx-lm`
  - Purpose: Local LLM inference (Llama, Mistral)
  
- **Ollama**: Local model management
  - Installation: Download from ollama.ai
  - Purpose: Simplified local LLM deployment

### Audio Processing
- **Faster-Whisper**: Speech-to-text
  - Installation: `pip install faster-whisper`
  - Optimized for: CPU inference (no GPU needed)

### Model Deployment
- **Llama 3**: 8B parameter model (local)
- **Quantization**: 4-bit/8-bit for memory efficiency
- **Expected Performance**: 20-50 tokens/sec on M4

---

## 📦 Key Dependencies by Project

### Hub (Progressive Web App)
```bash
# Frontend
npm install react react-dom
npm install @anthropic-ai/sdk    # Claude API
npm install octokit              # GitHub API
npm install tailwindcss
npm install workbox-precaching   # PWA

# Backend (Vercel Functions)
npm install @vercel/node
npm install @supabase/supabase-js
```

### MTG Web App
```bash
# Backend
pip install fastapi uvicorn
pip install sqlalchemy
pip install stripe
pip install websockets

# AI/ML
pip install mlx mlx-lm
pip install faster-whisper
pip install gtts

# Data
pip install requests  # Scryfall API
pip install beautifulsoup4  # Web scraping
```

### Cucina Vegana
```bash
# Minimal dependencies (vanilla JS)
# Only for scripts:
pip install requests  # USDA API
pip install pandas    # Data processing (optional)
```

### Università
```bash
# No Python dependencies (Obsidian-based)
# Optional:
pip install markdown  # PDF processing scripts
```

---

## 🔧 System Configuration

### Homebrew Packages (Optional)
```bash
# Install Homebrew first:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Useful packages:
brew install git
brew install node
brew install python@3.12
brew install wget
```

### Environment Variables
```bash
# Add to ~/.zshrc for project work:

# Claude API
export ANTHROPIC_API_KEY="sk-ant-..."

# GitHub
export GITHUB_TOKEN="ghp_..."

# Vercel (for Hub deployment)
export VERCEL_TOKEN="..."
```

---

## 🚀 Quick Start Commands

### New Project Setup
```bash
# 1. Create project folder
mkdir -p projects/new-project/{context,deliverables}

# 2. Create virtual environment
python3.12 -m venv venv_newproject
source venv_newproject/bin/activate

# 3. Install dependencies
pip install [required packages]

# 4. Initialize git tracking
git add projects/new-project/
git commit -m "New project: [name] - Initial setup"
```

### Daily Workflow
```bash
# 1. Pull latest changes
git pull

# 2. Activate relevant venv
source venv_[project]/bin/activate

# 3. Work on project
# ...

# 4. Commit changes
git add .
git commit -m "[Project]: [what you did]"
git push
```

---

## 📱 Mobile Development (Hub PWA)

### Testing Environment
- **Device**: iPhone [Specify model, e.g., 14 Pro]
- **iOS Version**: [e.g., 17.x]
- **Browser**: Safari (PWA capable)
- **Screen Size**: [e.g., 6.1 inch]

### PWA Testing Checklist
- [ ] Add to Home Screen works
- [ ] Offline mode functional
- [ ] Touch targets ≥44px
- [ ] Load time <3s on 3G
- [ ] Lighthouse score >90

---

## 🔐 Security & Credentials

### API Keys Storage
- **Location**: `.env` files (gitignored)
- **Backup**: 1Password / Bitwarden (recommended)
- **Never commit**: API keys to repository

### SSH Keys
- **GitHub**: SSH key for git operations
- **Generate**: `ssh-keygen -t ed25519 -C "your@email.com"`
- **Add**: `ssh-add ~/.ssh/id_ed25519`

---

## 📊 Performance Benchmarks

### M4 MacBook Air Expectations

**Python/ML**:
- MLX model loading: ~30 seconds (Llama-3-8B)
- Inference speed: 20-50 tokens/sec
- Memory usage: 8-12GB (model loaded)

**Web Development**:
- Vite dev server: <3s startup
- React build: <30s production bundle
- npm install: 1-2 minutes (fresh)

**General**:
- VS Code startup: <2s
- Git operations: <1s
- File search: Instant (macOS Spotlight)

---

## 🐛 Troubleshooting

### Common Issues

**Python "command not found"**:
```bash
# Check Python installation
which python3.12
# If missing: brew install python@3.12
```

**MLX installation fails**:
```bash
# Ensure Apple Silicon native terminal
uname -m  # Should output: arm64
# If x86_64: Quit Terminal, reopen (force native)
```

**npm permission errors**:
```bash
# Fix npm permissions (avoid sudo)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

**Obsidian sync issues** (Università):
- Use Git for vault backup: `git add vault/ && git commit`
- Alternative: iCloud sync to `~/Library/Mobile Documents/`

---

## 🔄 Maintenance

### Weekly Tasks
- [ ] Update pip: `pip install --upgrade pip`
- [ ] Update npm: `npm update -g npm`
- [ ] Check Homebrew: `brew update && brew upgrade`
- [ ] Git pull all projects

### Monthly Tasks
- [ ] Clean Python cache: `find . -type d -name __pycache__ -exec rm -r {} +`
- [ ] Clean node_modules: Remove unused project modules
- [ ] Review .env files (rotate API keys if needed)
- [ ] Backup important configs

---

## 📚 Resources

### Documentation
- **Python**: https://docs.python.org/3.12/
- **MLX**: https://github.com/ml-explore/mlx
- **Node.js**: https://nodejs.org/docs/
- **Homebrew**: https://brew.sh/

### macOS Shortcuts
- **⌘ + Space**: Spotlight (find files)
- **⌘ + Tab**: Switch apps
- **⌘ + `**: Switch windows (same app)
- **⌘ + Shift + .**: Show hidden files (Finder)

---

## 🎯 Optimization Tips

### For Apple Silicon M4

**Memory Management**:
- Close unused apps during ML inference
- Monitor Activity Monitor for memory pressure
- Quantize models (4-bit/8-bit) if 16GB limit reached

**Performance**:
- Use native ARM binaries (avoid Rosetta)
- MLX > PyTorch for local inference
- Leverage Neural Engine (automatic with MLX)

**Battery Life**:
- Disable background processes during development
- Use low-power mode if not running ML tasks
- Safari > Chrome (more energy efficient)

---

## 📝 Notes

### Project-Specific Requirements
- **MTG Web App**: Requires Ollama + Llama model (~5GB disk)
- **Hub**: Requires Vercel CLI for deployment
- **Cucina/Università**: Minimal requirements (web-based)

### Disk Space Usage
- Python venvs: ~500MB each
- Node modules: ~200MB per project
- MLX models: 4-8GB (quantized)
- Git repos: ~50MB per project

### Backup Strategy
- **Code**: GitHub (automatic)
- **Configs**: `.zshrc`, `.gitconfig` (backup to Gist)
- **Credentials**: Password manager (1Password)
- **Time Machine**: Weekly full system backup (recommended)

---

<div align="center">

**💻 DEVELOPMENT SETUP v1.0**

*Apple Silicon M4 Optimized*

**System**: MacBook Air M4, 16GB RAM  
**Primary Languages**: Python 3.12+, JavaScript/TypeScript  
**Optimized For**: AI/ML (MLX), Web Development, PWA

---

*Updated as system evolves*

</div>