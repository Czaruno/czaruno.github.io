#!/usr/bin/env bash
set -euo pipefail

SCRIPT_NAME=$(basename "$0")
PROJECT_DIR=$(pwd)
: "${JEKYLL_CMD:=bundle exec jekyll serve --livereload}"
SHARED_WEZTERM_SCRIPT="/Users/larryvelez/Coding/CodeEnvironment/wezterm/larryvelez-workspace.sh"

log() {
  printf '[%s] %s\n' "$SCRIPT_NAME" "$*"
}

error() {
  printf '[%s] ❌ %s\n' "$SCRIPT_NAME" "$*" >&2
}

predict_wezterm() {
  [[ -n "${TERM_PROGRAM:-}" && "${TERM_PROGRAM}" == "WezTerm" ]] || [[ -n "${WEZTERM_EXECUTABLE:-}" ]]
}

predict_tmux() {
  [[ -n "${TMUX:-}" ]]
}

harness_name() {
  local value="${CODING_HARNESS_NAME:-${CODING_HARNESS:-}}"
  if [[ -n "$value" ]]; then
    printf '%s' "$value"
    return
  fi
  if [[ -n "${CODEX_SANDBOX:-}" ]]; then
    printf '%s' "$CODEX_SANDBOX"
    return
  fi
  printf 'Terminal'
}

run_tmux() {
  if ! command -v tmux >/dev/null 2>&1; then
    error "tmux not installed."
    exit 1
  fi

  log "Splitting tmux pane (right 16%) and running Jekyll..."
  tmux split-window -h -p 16 -c "$PROJECT_DIR" "$JEKYLL_CMD"
  tmux select-pane -L
  local window_label
  window_label="$(harness_name) - LarryVelez.com"
  tmux rename-window "$window_label"
}

case 1 in
  *)
    if predict_wezterm; then
      export PROJECT_DIR
      export CMD="$JEKYLL_CMD"
      export DECAP_CMD="PORT=8082 npx decap-server"
      export TAB_SUFFIX="LarryVelez.com"
      if [[ ! -x "$SHARED_WEZTERM_SCRIPT" ]]; then
        error "Shared WezTerm script missing: $SHARED_WEZTERM_SCRIPT"
        exit 1
      fi
      "$SHARED_WEZTERM_SCRIPT"
      exit 0
    fi

    if predict_tmux; then
      run_tmux
      exit 0
    fi

    error "This script requires tmux or WezTerm (Kitty does not support panes)."
    exit 1
    ;;
esac
