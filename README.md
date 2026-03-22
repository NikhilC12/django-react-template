# django-react-template
Base Django-React Template Setup

## 🚀 Project Setup & Installation

Follow these steps to initialize a new project from this template.

### 1. Backend (Django)
Open your terminal in the root directory:
```bash
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # Mac/Linux
# .\venv\Scripts\activate # Windows

# Install Python dependencies
pip install -r requirements.txt

# Setup Environment Variables
# Copy .env.example to .env and update your SECRET_KEY
cp .env.example .env 

# Run Migrations
python manage.py makemigrations
python manage.py migrate

cd frontend

# This installs React, Webpack, Babel, and all other dependencies
npm install

# Start the Webpack watcher (compiles your JS to Django static files)
npm run dev

python manage.py runserver

python manage.py shell

from django.core.management.utils import get_random_secret_key
print(get_random_secret_key())
