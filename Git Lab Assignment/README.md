# Git Hands-on Lab (HOL)

![Git](https://img.shields.io/badge/Git-Version%20Control-orange?style=for-the-badge&logo=git)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

## 📖 Overview

This repository contains the complete implementation of the **Git Hands-on Lab (HOL)** practical assignments.

The purpose of these practicals is to understand Git fundamentals, version control concepts, branching strategies, merge conflict resolution, and working with remote repositories using GitHub.

All practicals were performed using **Git Bash** on Windows and hosted on **GitHub**.

---

# 🛠️ Tools Used

- Git
- Git Bash
- GitHub
- VS Code
- Notepad
- Windows 11

---

# 📂 Repository Structure

```
GitDemo/
│
├── .gitignore
├── hello.xml
├── welcome.txt
└── README.md
```

---

# 📚 Practical List

| Practical | Topic | Status |
|-----------|-------|--------|
| Practical 1 | Git Configuration & Repository Creation | ✅ Completed |
| Practical 2 | Git Ignore | ✅ Completed |
| Practical 3 | Git Branching | ✅ Completed |
| Practical 4 | Merge Conflict Resolution | ✅ Completed |
| Practical 5 | Remote Repository Operations | ✅ Completed |

---

# 🚀 Practical 1 - Git Configuration & Repository Creation

## Objective

- Install Git
- Configure Git
- Create a local repository
- Add files
- Commit changes
- Connect GitHub repository
- Push files

## Commands Used

```bash
git --version

git config --global user.name "Your Name"

git config --global user.email "your@email.com"

git config --global --list

mkdir GitDemo

cd GitDemo

git init

echo Welcome to Git > welcome.txt

git status

git add welcome.txt

git commit -m "Added welcome file"

git remote add origin <repository-url>

git push -u origin master
```

### Learning Outcomes

- Git Installation
- Repository Initialization
- Git Configuration
- First Commit
- Remote Repository Setup

---

# 🚀 Practical 2 - Git Ignore

## Objective

Learn how to ignore unnecessary files from Git tracking.

## Commands Used

```bash
touch error.log

mkdir logs

touch logs/test.log

notepad .gitignore

git status

git add .

git commit -m "Added .gitignore"

git push
```

### Sample `.gitignore`

```text
*.log
logs/
```

### Learning Outcomes

- Ignore files
- Ignore folders
- Working with `.gitignore`

---

# 🚀 Practical 3 - Git Branching

## Objective

Learn branch creation, switching, merging, and deletion.

## Commands Used

```bash
git branch GitNewBranch

git branch

git checkout GitNewBranch

echo Branch Work > branch.txt

git add .

git commit -m "Added branch file"

git checkout master

git diff master GitNewBranch

git merge GitNewBranch

git branch -d GitNewBranch
```

### Learning Outcomes

- Branch Creation
- Branch Switching
- Comparing Branches
- Branch Merge
- Branch Deletion

---

# 🚀 Practical 4 - Merge Conflict Resolution

## Objective

Understand merge conflicts and learn how to resolve them.

## Commands Used

```bash
git checkout -b GitWork

notepad hello.xml

git add .

git commit -m "GitWork changes"

git checkout master

notepad hello.xml

git add .

git commit -m "Main changes"

git merge GitWork

git add hello.xml

git commit -m "Merge branch 'GitWork'"

git branch -d GitWork
```

### Learning Outcomes

- Merge Conflict
- Conflict Resolution
- Merge Commit
- Git History

---

# 🚀 Practical 5 - Remote Repository

## Objective

Work with GitHub remote repository.

## Commands Used

```bash
git remote -v

git pull origin master

git push origin master

git status
```

### Learning Outcomes

- Remote Repository
- Pull
- Push
- Synchronization

---

# 📌 Git Workflow

```
Working Directory
        │
        ▼
git status
        │
        ▼
git add
        │
        ▼
Staging Area
        │
        ▼
git commit
        │
        ▼
Local Repository
        │
        ▼
git push
        │
        ▼
GitHub Repository
```

---

# 🌿 Git Branch Workflow

```
master
   │
   ├───────────────┐
   │               │
   ▼               ▼
GitNewBranch    GitWork
   │               │
   └──────┬────────┘
          ▼
      Merge into master
```

---

# 📖 Git Commands Summary

| Command | Description |
|----------|-------------|
| git init | Initialize repository |
| git status | Show repository status |
| git add | Stage changes |
| git commit | Save changes |
| git log | Show commit history |
| git branch | List branches |
| git checkout | Switch branches |
| git merge | Merge branches |
| git diff | Compare changes |
| git remote | View remote repositories |
| git pull | Download latest changes |
| git push | Upload commits |

---

# 🎯 Skills Gained

- Git Installation
- Git Configuration
- Version Control
- Repository Management
- Commit Management
- Branching
- Merge Operations
- Merge Conflict Resolution
- GitHub Integration
- Remote Repository Management

---

# 📸 Practical Completion

- ✅ Practical 1 Completed
- ✅ Practical 2 Completed
- ✅ Practical 3 Completed
- ✅ Practical 4 Completed
- ✅ Practical 5 Completed

---

# 👨‍💻 Author

**Yashkumar Sonwane**

GitHub: https://github.com/YashSonwane11

---

# ⭐ Thank You

This repository was created as part of the Git Hands-on Lab (HOL) practical assignment to gain practical experience with Git and GitHub version control workflows.