# Claude Code MCP

This repository is set up for use with Claude Code and the GitHub MCP server.

## Overview

Claude Code is Anthropic's official CLI tool for Claude, enabling AI-assisted software engineering directly from the terminal.

## MCP Integration

This project uses the GitHub MCP (Model Context Protocol) server to interact with GitHub, allowing Claude Code to:

- Read and manage issues
- Create and review pull requests
- Search repositories and code
- Manage branches and commits

## Getting Started

1. Install [Claude Code](https://claude.ai/claude-code)
2. Configure the GitHub MCP server:
   ```bash
   claude mcp add --transport http --scope user github "https://api.githubcopilot.com/mcp/" -H "Authorization: Bearer <your-token>"
   ```
3. Start working with Claude Code in this repository
