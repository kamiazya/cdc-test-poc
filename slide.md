---
marp: true
---

# Consumer Driven Contract Test

###### マイクロサービスアーキテクチャに効く!テスト技法

---

## コンセプト

- サービス間連携のインターフェースをTDDするテスト技法
- コンシューマ主導で作成される**Contract**と呼ばれる入出力データの定義からコンシューマ/プロデューサのスタブとテストコードを自動生成する
- プロデューサはContractを元にCI（自動回帰試験）することで、都度の変更がコンシューマに影響しないことを判断・保証します。コンシューマもまた同様
- **Contract** はコンシューマ/プロデューサで共有する
  - GitHub等で管理し、Pull Requestで仕様変更を通知・記録する

---

## 流れ

![](https://www.ogis-ri.co.jp/otc/hiroba/technical/microservices-test/img/pic-202104-001.jpg)

---

# DEMO

---

# 参考

- [マイクロサービスアーキテクチャに効く!テスト技法](https://www.ogis-ri.co.jp/otc/hiroba/technical/microservices-test/part1.html)
