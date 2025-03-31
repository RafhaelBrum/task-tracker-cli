# Task Tracker CLI

**[roadmap.sh](https://roadmap.sh/)** backend project - https://roadmap.sh/projects/task-tracker

A simple command-line interface (CLI) application to manage your daily tasks.
Add, list, update, delete, and mark tasks as done or in progress — all from the terminal.

## ✅ Features

- Add new tasks with descriptions
- Update task descriptions
- Delete tasks by ID
- List all tasks or filter by status (`todo`, `in-progress`, `done`)
- Mark tasks as `done` or `in-progress`
- All data is stored in a local JSON file (`tasks.json`)

## 📦 Tech Stack

- Node.js
- TypeScript
- Native `fs` module (no external libraries)

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/RafhaelBrum/task-tracker-cli.git
cd task-tracker-cli
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
npx tsc
```

### 4. Run commands using `npx`

```bash
npx task-cli <command>
```

---

## 📘 Usage

```bash
# Add a task
npx task-cli add "Buy groceries"

# List all tasks
npx task-cli list

# List tasks by status
npx task-cli list todo
npx task-cli list in-progress
npx task-cli list done

# Update a task's description
npx task-cli update 2 "Buy groceries and cook dinner"

# Mark task as in progress
npx task-cli mark-in-progress 2

# Mark task as done
npx task-cli mark-done 2

# Delete a task
npx task-cli delete 2
```

---


## ⚠️ Notes

- The `tasks.json` file will be created automatically in the root folder when needed.
- Make sure to recompile (`npx tsc`) after making changes to `.ts` files before using `npx task-cli`.

---

## 📄 License

This project is for educational purposes only. Free to use and modify.
