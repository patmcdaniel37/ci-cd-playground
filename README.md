# CI/CD Playground

![CI Pipeline](https://github.com/patmcdaniel37/ci-cd-playground/actions/workflows/ci.yml/badge.svg)

✅ **CI/CD pipeline working!**

A hands-on project demonstrating CI/CD pipeline implementation with GitHub Actions.

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

## CI/CD Pipeline

The pipeline automatically:
1. Runs on every push to main
2. Tests backend with Pytest
3. Tests frontend with Jest
4. Reports build status via badge

**Green badge = All tests passing!** 🎉
