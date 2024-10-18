### 1. **Check Your Current Branch**

Before creating a new branch, check which branch you are currently on:

```bash
git branch
```

This will list all branches, and the current branch will have an asterisk (`*`) next to it.

### 2. **Create a New Branch**

To create a new branch, use the following command:

```bash
git checkout -b <new-branch-name>
```

For example, if you want to create a branch named `feature-branch`:

```bash
git checkout -b feature-branch
```

This command does two things:

- Creates a new branch (`feature-branch`).
- Switches to that new branch.

### 3. **Push the New Branch to GitHub**

After creating the new branch, you can push it to the remote repository (GitHub):

```bash
git push -u origin <new-branch-name>
```

For example:

```bash
git push -u origin feature-branch
```

The `-u` option sets the upstream branch for future pulls and pushes.

### 4. **Switch to Another Branch**

To switch between branches, use:

```bash
git checkout <branch-name>
```

For example, to switch back to the `main` branch:

```bash
git checkout main
```

### 5. **Pull from a Specific Branch**

To pull the latest changes from a specific branch on GitHub:

```bash
git pull origin <branch-name>
```

For example, to pull changes from the `feature-branch`:

```bash
git pull origin feature-branch
```

### 6. **Push to a Specific Branch**

If you’re on a specific branch and you’ve made changes, push your changes with:

```bash
git push origin <branch-name>
```

For example, if you are on `feature-branch` and want to push your changes:

```bash
git push origin feature-branch
```

### 7. **View All Branches**

To view all local branches:

```bash
git branch
```

To view all branches, including remote branches:

```bash
git branch -a
```

### 8. **Delete a Branch**

To delete a local branch:

```bash
git branch -d <branch-name>
```

To delete a remote branch (on GitHub):

```bash
git push origin --delete <branch-name>
```

### Summary of Commands:

| Task                              | Command                                  |
| --------------------------------- | ---------------------------------------- |
| Check current branch              | `git branch`                             |
| Create a new branch and switch    | `git checkout -b <new-branch-name>`      |
| Push new branch to GitHub         | `git push -u origin <new-branch-name>`   |
| Switch between branches           | `git checkout <branch-name>`             |
| Pull from a specific branch       | `git pull origin <branch-name>`          |
| Push changes to a specific branch | `git push origin <branch-name>`          |
| View all branches                 | `git branch` / `git branch -a`           |
| Delete a local branch             | `git branch -d <branch-name>`            |
| Delete a remote branch            | `git push origin --delete <branch-name>` |
