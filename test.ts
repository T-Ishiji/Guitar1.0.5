// v1.0.5
//
// 発音レンジ:
//   0～30
//   923～1023
//
// 発音直後200ms:
//   発音した方向と同じ側の停止帯は無視
//   → ジョイスティックを惰性で中央へ戻しても止まりにくい
//
// 反対側停止帯:
//   200ms以内でも即停止可能
//
// 31～922へ一度出れば再アームされるため、
// 200ms以内でも発音レンジへ再進入すれば同じ和音を1音目から再発音できる。
guitarchord.setDelay(150)
guitarchord.assignChord(guitarchord.ChordButton.NoButton, guitarchord.Chord.C)
guitarchord.assignChord(guitarchord.ChordButton.Button1, guitarchord.Chord.G)
