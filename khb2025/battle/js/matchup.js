/*組み合わせの書き方

このファイルが入っているフォルダに存在する，haiku.jsに存在する定数名を使う．
    teamname1がAブロック1チーム目
    teamname2がAブロック2チーム目
    teamname3がAブロック3チーム目
    teamname4がBブロック1チーム目
    teamname5がBブロック2チーム目
    teamname6がBブロック3チーム目
となる．当日朝のくじ引きの結果（A1からB3までのくじがあったはずである）に従い，以下の通り入力すること．

ここでは，簡単のため，2チームのみ例示する．
チーム1に関西文芸高等学校A、チーム2に関西文芸高等学校Bを入れる場合
haiku.jsの中身が

    const kansaiA = [
        ["関西文芸高等学校Ａ"],
        ["", "兼題1-先鋒句", "", "兼題1-中堅句", "", "兼題1-大将句"],
        ["", "兼題2-先鋒句", "", "兼題2-中堅句", "", "兼題2-大将句"],
        ["", "兼題3-先鋒句", "", "兼題3-中堅句", "", "兼題3-大将句"],
        ["", "兼題1-先鋒句", "兼題4-次鋒句", "兼題1-中堅句", "兼題4-副将句", "兼題1-大将句"],
    ];
    const kansaiB = [
        ["関西文芸高等学校Ｂ"],
        ["", "兼題1-先鋒句", "", "兼題1-中堅句", "", "兼題1-大将句"],
        ["", "兼題2-先鋒句", "", "兼題2-中堅句", "", "兼題2-大将句"],
        ["", "兼題3-先鋒句", "", "兼題3-中堅句", "", "兼題3-大将句"],
        ["", "兼題1-先鋒句", "兼題4-次鋒句", "兼題1-中堅句", "兼題4-副将句", "兼題1-大将句"],
    ];
    （以下略）

となっていたとき，該当するチームの，constから=までの文字列（半角スペースは含まない）を用いて，
   
    const teamname1 = kansaiA;
    const teamname2 = kansaiB;

のようにすること．大文字，小文字は「区別される」ので注意すること．
また，kansaiAおよびkansaiBは変数であるため，ダブルクォーテーションマークを以下のように「つけてはならない」．

（NG例）
    const teamname1 = "kansaiA";
    const teamname2 = "kansaiB";

また，これ以外の文字列は，この説明文を含め，改行1つ，スペース1つたりとも変更してはならない．

決勝進出チームが決定するまでは，

    const teamnamefin1 = "";
    const teamnamefin2 = "";

のようにしておくこと．この段階ではダブルクォーテーションマークは「必要」である．

決勝進出チームが決定したら，それら2チームの，haiku.jsに存在する定数名を入れること．
たとえば、決勝進出チーム（紅チーム）が関西文芸高等学校A、決勝進出チーム（白チーム）が関西文芸高等学校Bである場合，
haiku.jsに存在する定数名を使い，

    const finteamname1 = kansaiA;
    const finteamname2 = kansaiB;

のようにすること．紅がfinteamname1のチーム，白がfinteamname2のチームである．
ここではダブルクォーテーションマークは「つけてはならない」．

以下が完成したファイルの見本である．ただし，説明文は省いている．実際には，説明文は削除しないこと．
説明文末尾のアスタリスクおよび半角スラッシュの下に，1行空けて，以下の例のようになっていればよい（変数名はhaiku.jsに応じて変更すること）．

（決勝戦進出チーム決定前）

    const teamname1 = kansaiA;
    const teamname2 = kansaiB;
    const teamname3 = kantouA;
    const teamname4 = kantouB;
    const teamname5 = tohoku;
    const teamname6 = hokkaido;

    const teamnamefin1 = "";
    const teamnamefin2 = "";

（決勝戦進出チーム決定後）
（要は，「決勝戦進出チーム決定前」の上6行（すなわち，teamname1～teamname6の行）はそのままにして，
下2行（すなわち，finteamname1とfinteamname2の行）のみ書き換えればよい）
（ここでは、Aブロックからhaiku.jsにおいてkantouAで示されるチームが，
Bブロックからhaiku.jsにおいてhokkaidoで示されるチームが決勝に進出した例である．）

    const teamname1 = kansaiA;
    const teamname2 = kansaiB;
    const teamname3 = kantouA;
    const teamname4 = kantouB;
    const teamname5 = tohoku;
    const teamname6 = hokkaido;

    const teamnamefin1 = kantouA;
    const teamnamefin2 = hokkaido;

なお，打ち込んだ後には，大会HOMEのページで正しく組み合わせが表示されているか確認すること．
*/

const teamname1 = kansaiA;
const teamname2 = kansaiB;
const teamname3 = kansaiC;
const teamname4 = kansaiD;
const teamname5 = kansaiE;
const teamname6 = kansaiF;

const teamnamefin1 = "決勝進出チーム1";
const teamnamefin2 = "決勝進出チーム2";
