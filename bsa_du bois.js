//体表面積(BSA)をデュ・ボア式で計算

//同フォルダにhtmlファイル作成

//体重を得る
let weight;
weight = prompt('BMIを測定します。まずはあなたの体重（kg）を入力してください');
//身長の数字を得る
let height;
height = prompt('BMIを測定します。まずはあなたの身長（cm）を入力してください');
//体重と身長からBSEを計算して、警告ダイアログに表示する
let bsa = height**0.725 * weight**0.425 * 0.007184;
let message = 'あなたのBSAは「' + bsa + '」です。';
alert(message);
