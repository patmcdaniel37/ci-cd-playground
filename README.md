<div align="center">

# 🚀 CI/CD Playground

![CI Pipeline](https://github.com/yourusername/ci-cd-playground/actions/workflows/ci.yml/badge.svg)
![Deploy Staging](https://github.com/yourusername/ci-cd-playground/actions/workflows/cd-staging.yml/badge.svg)
![Deploy Production](https://github.com/yourusername/ci-cd-playground/actions/workflows/cd-production.yml/badge.svg)
![Security Scan](https://github.com/yourusername/ci-cd-playground/actions/workflows/security-scan.yml/badge.svg)

**A demonstration project showcasing modern CI/CD practices with automated testing, deployment, and monitoring**

[View Demo](#) • [Documentation](docs/) • [Contributing](CONTRIBUTING.md)

</div>

---

## 📋 Overview

This project demonstrates a complete CI/CD pipeline for a full-stack application, including:
- Automated testing and code quality checks
- Multi-environment deployments (staging & production)
- Docker containerization
- Security scanning
- Automated releases
- Health monitoring

## 🏗️ Architecture

### Application Stack
- **Backend**: Python Flask REST API
- **Frontend**: React.js application
- **Database**: SQLite (demo purposes)
- **Containerization**: Docker

### CI/CD Stack
- **CI/CD Platform**: GitHub Actions
- **Container Registry**: Docker Hub
- **Deployment**: Heroku/Render (free tiers)
- **Monitoring**: UptimeRobot

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Python 3.11+
- Node.js 18+

### Local Development

**Using Docker Compose:**
```bash
docker-compose up --build
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt
python -m flask run
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## 🔄 CI/CD Pipeline

### Continuous Integration (CI)
Triggered on: Push to main/develop, Pull Requests

**Pipeline Steps:**
1. **Code Checkout** - Clone repository
2. **Dependency Caching** - Cache Python/Node dependencies
3. **Linting** - Run Pylint (Backend) & ESLint (Frontend)
4. **Unit Tests** - Run Pytest & Jest with coverage
5. **Security Scan** - Trivy vulnerability scanning
6. **Docker Build** - Test container builds
7. **Coverage Report** - Upload to Codecov

### Continuous Deployment (CD)

**Staging Deployment:**
- Trigger: Push to `develop` branch
- Environment: Staging
- Auto-deploys on successful CI

**Production Deployment:**
- Trigger: Push to `main` branch or version tag
- Environment: Production
- Requires manual approval
- Creates GitHub release

### Pipeline Diagram
![Pipeline Flow](docs/images/pipeline-diagram.png)

## 🧪 Testing

**Backend Tests:**
```bash
cd backend
pytest tests/ -v --cov=app
```

**Frontend Tests:**
```bash
cd frontend
npm test -- --coverage
```

**Run All Tests:**
```bash
./scripts/test.sh
```

## 📦 Docker

**Build Images:**
```bash
docker build -t cicd-playground-backend ./backend
docker build -t cicd-playground-frontend ./frontend
```

**Run with Docker Compose:**
```bash
docker-compose up
```

## 🔒 Security

- **Dependency Scanning**: Weekly automated scans
- **Container Scanning**: Trivy on every build
- **Secret Management**: GitHub Secrets
- **HTTPS**: Enforced in production

## 📊 Monitoring

- **Health Checks**: `/health` endpoint
- **Uptime Monitoring**: UptimeRobot (99.9% SLA)
- **Logs**: GitHub Actions logs retained for 90 days

## 🌍 Environments

| Environment | URL | Branch | Status |
|-------------|-----|--------|--------|
| Staging | [staging-url] | develop | ![Staging](badge) |
| Production | [prod-url] | main | ![Production](badge) |

## 📁 Project Structure
```
ci-cd-playground/
├── .github/workflows/     # CI/CD pipelines
├── backend/              # Python Flask API
├── frontend/             # React application
├── infrastructure/       # Docker configs
├── scripts/              # Automation scripts
└── docs/                 # Documentation
```

## 🛠️ Technologies

**Backend:**
- Python 3.11, Flask, Pytest, Pylint

**Frontend:**
- React 18, Jest, ESLint

**DevOps:**
- GitHub Actions, Docker, Docker Compose

**Security:**
- Trivy, Safety, npm audit

## 📈 Metrics

- **Test Coverage**: 85%+
- **Build Time**: ~3 minutes
- **Deploy Time**: ~2 minutes
- **Uptime**: 99.9%

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## 📄 License

MIT License - see [LICENSE](LICENSE)

## 📧 Contact

Your Name - [GitHub](https://github.com/yourusername)
