#!/bin/bash
set -e

REPO="GitOpsLovers/flow-monitor"
BINARY="flow-monitor-installer"
VERSION="latest"

DOWNLOAD_URL="https://github.com/$REPO/releases/download/$VERSION/$BINARY"

echo "Downloading Flow Monitor installer $VERSION..."

if ! curl -fsSL "$DOWNLOAD_URL" -o "$BINARY"; then
    echo "❌ Error: Failed to download the installer."
    exit 1
fi

chmod +x "$BINARY"

./"$BINARY"

rm "$BINARY"