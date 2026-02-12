#!/bin/bash
# Melon Ticket Optimizer — 빌드 스크립트
# 사용법: ./build.sh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ZIP_NAME="melon-ticket-ext.zip"
OUT="$SCRIPT_DIR/$ZIP_NAME"

rm -f "$OUT"

cd "$SCRIPT_DIR" && zip -r "$OUT" melon-ticket-ext/ \
  -x "melon-ticket-ext/.DS_Store"

echo ""
echo "빌드 완료: $OUT"
echo "크기: $(du -h "$OUT" | cut -f1)"
echo ""
echo "설치: chrome://extensions → 개발자 모드 → 압축해제된 확장 프로그램 로드 → melon-ticket-ext 폴더 선택"
