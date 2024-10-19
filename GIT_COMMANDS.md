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

To undo a commit in Git and go back to the previous code, there are a few options depending on your situation. Below are the most common methods:

### 1. **Undo the last commit but keep the changes in your working directory**

If you just want to undo the commit but keep your changes so you can edit them or commit again, use the following command:

```bash
git reset --soft HEAD~1
```

- `--soft`: Keeps the changes in your working directory and staging area, so you can modify them and commit again.
- `HEAD~1`: Refers to the last commit. This command undoes the last commit but leaves the changes as uncommitted.

### 2. **Undo the last commit and discard changes**

If you want to completely discard the last commit and remove the changes:

```bash
git reset --hard HEAD~1
```

- `--hard`: Removes both the commit and the changes, bringing you back to the state of the previous commit.
- **Warning**: This will delete any changes made in that commit, so be careful if you have important untracked changes.

### 3. **Undo a pushed commit (if you've pushed the commit to a remote)**

If you have already pushed the commit to a remote branch (e.g., GitHub), you can undo it with:

```bash
git reset --hard HEAD~1
git push --force
```

- `--force`: Forces the push to the remote branch and rewrites the commit history.
- **Warning**: Be cautious when force-pushing, as it rewrites history, and others working on the same branch might get affected.

### 4. **Undo multiple commits**

If you want to undo more than one commit, you can change `HEAD~1` to `HEAD~n`, where `n` is the number of commits you want to undo. For example:

```bash
git reset --soft HEAD~3
```

This will undo the last 3 commits, but the changes will still be in your working directory.

### 5. **Revert a commit without altering history (for shared branches)**

If the commit has already been pushed and you don’t want to rewrite history, you can use `git revert`:

```bash
git revert <commit-hash>
```
