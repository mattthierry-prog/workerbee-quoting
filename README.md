# WorkerBee Quoting (Starter Repo)

This repo contains all the scripts and recovery tools used by OpenClaw/WorkerBee to automate UsedConex quotes. **No real secrets or actual business logic is present in this version—just the structure and placeholders.**

## Structure

- `scripts/` — All core WorkerBee/OpenClaw quoting and debug scripts
- `recovery/` — Full refresh/recovery scripts (useful if system breaks or files get corrupted)
- `.gitignore` — Never tracks secrets, ensures your credentials/configs stay out of GitHub.
- `README.md` — (This doc) Explains purpose, usage, and update/restore flow.

## Usage — Your Typical Flow

1. **Update, patch, or review any quoting logic** in your local copy
2. `git add . && git commit -m "Your update" && git push`  *(if using git locally)*
3. On Hostinger (or any future server), pull the latest repo for instant updates — no chat/screenshot hacks
4. Keep all secrets and config files OUT of the repo (server only)

## Recovery/Disaster Plan
- If Hostinger horks the environment, run the `recovery/HOSTINGER_LOGIN_RECOVERY.sh` from the latest repo clone
- For any new server (like a Mac mini): clone the repo, drop in secrets, you’re live

## How to expand
- Drop in the **real versions** of the scripts as they’re upgraded/tested
- Add docs/co-author notes for next time

---
For questions/hand-holding, ping Walt!
