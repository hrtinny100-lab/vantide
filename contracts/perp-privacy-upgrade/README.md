# Perp DEX Privacy Upgrade (Ownerless Positions)

Adds commit→reveal and ownerless positions so open trades are unlinkable to wallets on-chain.

## Files
- contracts/libraries/CommitmentLib.sol
- contracts/interfaces/IOracleAdapter.sol
- contracts/interfaces/IVault.sol
- contracts/PrivatePositions.sol
- scripts/01_deploy_private_positions.ts

## Integrate
1) Wire `IVault` and `IOracleAdapter` to your existing modules.
2) Deploy `PrivatePositions(timelock, executor, oracle, vault, feeSink)`.
3) Use `commitOpen` → keeper `revealAndOpen` → `closePosition`.
4) Implement hooks in `PrivatePositions.sol`: `_calcPnl`, `_belowMaintenance`, `_verifyCloseSignature`.
