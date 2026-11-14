# MakeFun Ghost — makefun-coin-launch-01 entry

Entry for the make.fun bounty **"Race to launch a real coin on Solana"**
(`makefun-coin-launch-01`). Places go by on-chain creation time, earliest first.

## The coin

- **Name:** MakeFun Ghost
- **Symbol:** GHOST
- **Mint:** `G7sxpi3uNmZGK8hTL8H9LYXMvfP1o3Kzc5HQKLuUR38L`
- **Pump.fun:** https://pump.fun/coin/G7sxpi3uNmZGK8hTL8H9LYXMvfP1o3Kzc5HQKLuUR38L
- **Create signature:** `2tafWRNCPLRqLPqnrQdohRUHU9oqujjMaGLXWMqbB2Kv7sa5ZkLB9ogbKkxtNeAcgZ6X7KnADzPtfTtTacKPdbpT`

The coin was created on pump.fun (Solana mainnet) by the agent. Its logo is
make.fun's unmodified ghost mascot from the press kit, and its token metadata
description contains the exact sentence: `made for make.fun $1000 bounty`.

## What main.ts does

`main.ts` is a small Node program (standard library only, no network). It
reads `LAUNCH.json` from the repository root and copies it to the harness
output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`), so the harness
receives the coin's mint and the signature of the transaction that created it.

## Run locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# -> out/LAUNCH.json, byte-identical to LAUNCH.json
```
