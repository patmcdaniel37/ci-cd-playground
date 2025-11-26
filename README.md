# CI/CD Playground

![CI Pipeline](https://github.com/patmcdaniel37/ci-cd-playground/actions/workflows/ci.yml/badge.svg)

✅ **CI/CD pipeline working!**

A hands-on project demonstrating CI/CD pipeline implementation with GitHub Actions.

## 📊 Quick Stats

| Metric | Count |
|--------|-------|
| **Total Tests** | 7 (5 backend + 2 frontend) |
| **API Endpoints** | 4 |
| **CI/CD Jobs** | 3 |
| **Docker Images** | 2 |
| **Test Frameworks** | 2 (Pytest, Jest) |
| **Coverage Tracking** | ✅ Codecov |
| **Languages** | Python, JavaScript |

## 🎯 What This Project Does

This project demonstrates a complete CI/CD pipeline implementation using GitHub Actions. It showcases automated testing, code coverage tracking, and Docker containerization for both a Python Flask backend and a React frontend.

### Pipeline Flow

```mermaid
graph LR
    A[Code Push/PR] --> B[Backend Tests]
    A --> C[Frontend Tests]
    B --> D[Pytest + Coverage]
    C --> E[Jest + Coverage]
    D --> F[Codecov Upload]
    E --> F
    F --> G{Docker Build}
    G --> H[Backend Image]
    G --> I[Frontend Image]
    H --> J[Docker Hub]
    I --> J

```

### How It Works

1. **Trigger**: The pipeline automatically runs on every push to `main` or `develop` branches, and on pull requests targeting these branches.

2. **Parallel Testing**: 
   - **Backend Tests**: Runs Pytest with code coverage, testing all Flask API endpoints
   - **Frontend Tests**: Runs Jest with React Testing Library, verifying UI components

3. **Coverage Reporting**: Both test suites upload coverage reports to Codecov for tracking test coverage over time.

4. **Docker Build**: Only after all tests pass, the pipeline builds and pushes Docker images for both backend and frontend to Docker Hub.

5. **Status Monitoring**: The pipeline badge at the top of this README shows the current build status in real-time.

This setup ensures code quality through automated testing before any deployment, demonstrating best practices for continuous integration and deployment workflows.

## What This Project Demonstrates

**CI/CD Skills:**
- ✅ GitHub Actions workflow creation
- ✅ Automated testing (Pytest + Jest)
- ✅ Multi-job pipeline configuration
- ✅ Backend and frontend integration
- ✅ Build status monitoring

## Tech Stack

- **Backend**: Python Flask
- **Frontend**: React
- **CI/CD**: GitHub Actions
- **Testing**: Pytest (Backend), Jest (Frontend)

## 🏗 Application Architecture

### Architecture Diagram

```mermaid
graph TD
    subgraph Client
        U[User Browser]
    end

    subgraph Frontend
        FE[React SPA<br/>Port 3000]
    end

    subgraph Backend
        BE[Flask API<br/>Port 5000]
    end

    subgraph Docker
        DC1[Frontend Container]
        DC2[Backend Container]
    end

    subgraph CI_CD[CI/CD Platform (GitHub Actions)]
        CI[Build & Test Jobs]
        IMG[Docker Images<br/>(Backend & Frontend)]
    end

    subgraph External
        DH[(Docker Hub)]
        CC[(Codecov)]
    end

    U --> FE
    FE -->|HTTP/JSON| BE

    DC1 --- FE
    DC2 --- BE

    CI --> IMG --> DH
    CI --> CC

    style FE fill:#e3f2fd,stroke:#1e88e5
    style BE fill:#e8f5e9,stroke:#43a047
    style CI_CD fill:#fff3e0,stroke:#fb8c00
    style Docker fill:#f3e5f5,stroke:#8e24aa
    style External fill:#ede7f6,stroke:#5e35b1
```

### How the Application Works

- **User Interaction**:  
  - A user accesses the React frontend from their browser on `http://localhost:3000`.
  - The React app renders a simple UI showing API status and a list of users.

- **Frontend → Backend Communication**:  
  - The React app calls the Flask API over HTTP (JSON) using `REACT_APP_API_URL` (default `http://localhost:5100`).
  - It hits endpoints like `/`, `/health`, and `/api/users` to fetch status and mock user data.

- **Backend Responsibilities**:  
  - Exposes simple JSON endpoints for health, status, and user data.
  - Reads environment variables such as `APP_VERSION` and `ENVIRONMENT` to surface runtime metadata.

- **Containerization**:  
  - Both frontend and backend are packaged into separate Docker images.
  - `docker-compose.yml` wires them together so the frontend can talk to the backend via the internal Docker network.

- **CI/CD Integration**:  
  - GitHub Actions runs tests for both services on each push/PR.
  - Successful runs build and push Docker images to Docker Hub and upload coverage reports to Codecov.

This architecture keeps the frontend and backend cleanly separated, fully containerized, and wired into an automated CI/CD pipeline that validates changes before images are built and published.

## Pipeline Status

## Pipeline Status

- Backend Tests: ✅ Passing
- Frontend Tests: ✅ Passing

## Local Development

**Backend:**
```bash
cd backend
pip install -r requirements.txt
python app/main.py
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## 🐳 Docker Usage

### Quick Start with Docker Compose

The easiest way to run the entire application:

```bash
docker-compose up --build
```

This will:
- Build both backend and frontend Docker images
- Start both services
- Backend available at `http://localhost:5100`
- Frontend available at `http://localhost:3000`

To run in detached mode (background):
```bash
docker-compose up -d --build
```

To stop the services:
```bash
docker-compose down
```

### Building Individual Containers

**Backend:**
```bash
cd backend
docker build -t ci-cd-backend .
docker run -p 5100:5000 -e ENVIRONMENT=development ci-cd-backend
```

**Frontend:**
```bash
cd frontend
docker build -t ci-cd-frontend .
docker run -p 3000:3000 -e REACT_APP_API_URL=http://localhost:5100 ci-cd-frontend
```

### Using Pre-built Images from Docker Hub

If images are available on Docker Hub:
```bash
docker pull <your-docker-username>/ci-cd-backend:latest
docker pull <your-docker-username>/ci-cd-frontend:latest
```

## CI/CD Pipeline

The pipeline automatically:
1. Runs on every push to main
2. Tests backend with Pytest
3. Tests frontend with Jest
4. Reports build status via badge

**Green badge = All tests passing!** 🎉

## 🔧 Troubleshooting

### Port Conflicts

**Issue**: Port 5100 or 3000 is already in use.

**Solution**:
```bash
# Check what's using the port
lsof -i :5100  # macOS/Linux
netstat -ano | findstr :5100  # Windows

# Kill the process or change the port in docker-compose.yml
```

### Backend Not Starting

**Issue**: Flask app fails to start or shows import errors.

**Solutions**:
- Ensure you're in the correct directory: `cd backend`
- Verify Python version: `python --version` (should be 3.11+)
- Reinstall dependencies: `pip install -r requirements.txt --force-reinstall`
- Check virtual environment is activated (if using one)

### Frontend Can't Connect to Backend

**Issue**: Frontend shows "Loading..." indefinitely or network errors.

**Solutions**:
- Verify backend is running: `curl http://localhost:5100/health`
- Check `REACT_APP_API_URL` environment variable matches backend URL
- Ensure CORS is enabled in Flask (already configured in this project)
- If using Docker, ensure both containers are on the same network

### Docker Build Failures

**Issue**: `docker build` fails with dependency errors.

**Solutions**:
- Clear Docker cache: `docker system prune -a`
- Rebuild without cache: `docker-compose build --no-cache`
- Check Dockerfile syntax and file paths
- Verify all required files are present (requirements.txt, package.json, etc.)

### Test Failures

**Backend Tests Failing**:
```bash
cd backend
# Run tests with verbose output
pytest tests/ -v
# Check for missing dependencies
pip install -r requirements.txt
```

**Frontend Tests Failing**:
```bash
cd frontend
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
# Run tests
npm test
```

### CI/CD Pipeline Issues

**Issue**: GitHub Actions workflow fails.

**Solutions**:
- Check workflow logs in GitHub Actions tab
- Verify secrets are configured (DOCKER_USERNAME, DOCKER_TOKEN)
- Ensure workflow file syntax is correct (`.github/workflows/ci.yml`)
- Check branch names match workflow triggers (main, develop)

### Dependency Installation Issues

**Python**:
```bash
# Use virtual environment
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

**Node.js**:
```bash
# Clear npm cache
npm cache clean --force
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Docker Compose Issues

**Issue**: Services won't start or connect.

**Solutions**:
```bash
# Stop and remove all containers
docker-compose down -v

# Rebuild and start fresh
docker-compose up --build --force-recreate

# Check container logs
docker-compose logs backend
docker-compose logs frontend
```

### Environment Variables Not Working

**Issue**: Environment variables aren't being picked up.

**Solutions**:
- For local development, ensure variables are set before starting services
- For Docker, check `docker-compose.yml` environment section
- For React, ensure variables start with `REACT_APP_` prefix
- Restart services after changing environment variables

### Still Having Issues?

- Check that all prerequisites are installed (Python 3.11+, Node.js 18+, Docker)
- Verify file permissions are correct
- Review error messages in terminal/logs for specific error details
- Ensure you're using the correct branch (main or develop)
