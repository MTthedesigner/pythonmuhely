window.lessonDetails = [
  {
    core: [
      "Az algoritmus a megoldás logikája, a program ennek egy nyelven leírt változata. Ugyanaz az algoritmus több nyelven is megvalósítható.",
      "Bontsd a feladatot bemenet, feldolgozás és kimenet részekre. Így könnyebb eldönteni, milyen adat kell és hogyan ellenőrzöd az eredményt.",
      "Egy jó megoldás véges, egyértelmű, és a szélső esetekben is helyesen viselkedik. Kezdj kis példákkal, majd próbálj határértékeket."
    ],
    walkthrough: [
      "Az elso és masodik változó rögzíti a bemenetet.",
      "Az összeadás a feldolgozási lépés; az eredményt eredmeny néven tároljuk.",
      "A print csak a végén jeleníti meg az értéket. Más bemenettel a program változtatás nélkül újra használható."
    ],
    challenge: "Döntsd el két kör középpontja és sugara alapján, hogy metszi-e egymást a két kör. Előbb írd le az algoritmust, majd kódold le. Teszteld a különálló, érintkező és egymást metsző esetet."
  },
  {
    core: [
      "A VS Code a szerkesztő; maga a Python-interpreter hajtja végre a fájlt. A Python-bővítmény összeköti a kettőt, de a bővítmény telepítése önmagában nem telepíti a Pythont.",
      "A projektmappa együtt tartja a .py fájlokat és az adatokat. A kiválasztott interpreter határozza meg, melyik Python és csomagkészlet fut.",
      "A szerkesztő elemzése futtatás előtt jelezhet hibát. A terminál tracebackje egy tényleges futás közben keletkezett hibát és a hívási láncot mutatja."
    ],
    walkthrough: [
      "Nyiss meg egy mappát, hozz létre benne hello.py fájlt, és mentsd el.",
      "A Python: Select Interpreter paranccsal válaszd ki a megfelelő Pythont.",
      "A Run Python File a terminálban futtat; ugyanezt kézzel a python3 hello.py paranccsal teheted meg."
    ],
    challenge: "Hozz létre szándékosan egy szintaktikai hibát, figyeld meg a szerkesztő jelzését, majd javítsd. Ezután idézz elő NameError hibát futás közben, olvasd el a tracebacket, és magyarázd el a két hibatípus közötti különbséget."
  },
  {
    core: [
      "A változó egy név, amely egy értékre hivatkozik; a típus szabja meg, milyen műveletet végezhetsz vele. A Python dinamikusan típusos: egy név később más típusú értékre is mutathat.",
      "Az int pontos egész szám, a float közelítő valós szám, a complex komplex szám. Lebegőpontos műveleteknél apró kerekítési eltérés természetes.",
      "A str nem módosítható karakter-sorozat. A bool True vagy False, a None pedig azt jelzi, hogy jelenleg nincs érték. Az indexelés nulláról indul."
    ],
    walkthrough: [
      "Az értékadás (=) nevet rendel az értékhez; ez nem azonos az összehasonlító == jellel.",
      "A / lebegőpontos osztás, a // egész osztás, a % maradékképzés, a ** hatványozás.",
      "A type() megmutatja az aktuális típust, a szoveg[0] pedig az első karaktert adja vissza."
    ],
    challenge: "Kérj be egy angol kisbetűt, és ellenőrizd, hogy az a–z tartományba esik-e. Készíts megoldást karakter-összehasonlítással és ord() kódokkal is; próbáld ki a határbetűket."
  },
  {
    core: [
      "A tuple és a str nem módosítható, a lista viszont módosítható. Ez meghatározza, hogy egy elem helyben lecserélhető-e.",
      "A set egyedivé teszi az elemeket, de nem indexelhető. A dict kulcsai egyediek és hash-elhetők; az értékei tetszőleges objektumok lehetnek.",
      "A lista bejárható és indexelhető. Az append, pop, remove, count, in és len műveletek egyszerű adatalgoritmusok építőelemei."
    ],
    walkthrough: [
      "A tuple-ben egy személy neve és kora együtt marad; a tuple[1] a kort választja ki.",
      "A list.append új elemet ad a végére, a set(...) pedig eltávolítja az ismétlődéseket.",
      "Bejárás közben változóban tarthatsz futó összeget, minimumot vagy maximumot."
    ],
    challenge: "Olvass be szavakat q jelig, számold meg egy megadott szó előfordulásait, és távolítsd el az összes ismétlődést. A listából számíts minimumot, maximumot és átlagot; a q ne kerüljön az adatok közé."
  },
  {
    core: [
      "Az input() mindig str értéket ad, akkor is, ha a felhasználó számot ír. Csak ott alakítsd át, ahol a programnak már az új típusra van szüksége.",
      "Az int('3.5') hibát ad, mert a szöveg nem egész szám alakú. Floatból intté alakítás csonkol, nem matematikailag kerekít.",
      "A bool('False') is True, mert minden nem üres szöveg igaznak számít. Szöveges igen/nem választ ezért külön kell értelmezni."
    ],
    walkthrough: [
      "Az int(szoveg) számmá alakítja a szöveget; sikertelen átalakításkor ValueError keletkezik.",
      "A float() tizedes számok feldolgozására való; szöveg és szám közvetlenül nem adható össze.",
      "A list(), tuple() és set() iterálható értékből készít új gyűjteményt; mindig ellenőrizd az eredmény szerkezetét."
    ],
    challenge: "Kérd be egy téglatest három oldalát, kezeld a nem számmá alakítható bemenetet, majd számítsd ki a felszínt és térfogatot. Utasítsd el a nem pozitív oldalhosszakat is."
  },
  {
    core: [
      "A standard bemenet, kimenet és hibakimenet külön adatfolyam. Az input() szöveget olvas a bemenetről, a print() a normál kimenetre ír.",
      "A print sep paramétere az argumentumok közé kerül, az end a kiírás végére. Mindkettővel szabályozható például a szóköz és a sortörés.",
      "Az f-string kifejezéseket illeszt szövegbe. A :.2f két tizedesjegyet jelenít meg, de magát a tárolt számot nem változtatja meg."
    ],
    walkthrough: [
      "A nev változó szövegként kerül a kimenetbe.",
      "A pont lebegőpontos eredmény; a formázás csak a megjelenített alakját szabályozza.",
      "A print alapértelmezett end értéke sortörés. Saját end értékkel a következő kiírás ugyanabba a sorba kerülhet."
    ],
    challenge: "Készíts nyugtát több termékkel, darabszámmal és egységárral. Soronként jelenítsd meg a részösszeget, a végén pedig két tizedesjeggyel a teljes összeget."
  },
  {
    core: [
      "Az összehasonlítás bool értéket ad. Az == értékeket hasonlít össze, a = értéket rendel egy névhez.",
      "Az if, elif és else ágak közül feltételek alapján választunk. Az and, or és not feltételeket kapcsol össze; zárójelekkel egyértelműsíthető a logika.",
      "A for ismert sorozatot jár be, a while feltételig ismétel. A range végértéke kimarad. A while feltételét előbb-utóbb hamissá kell tenni."
    ],
    walkthrough: [
      "A range(1, 6) az 1, 2, 3, 4, 5 értékeket adja.",
      "A maradék 2-vel való osztása megmutatja, hogy páros-e a szám.",
      "Minden cikluskörben pontosan az if vagy az else ág fut, aztán következik a következő szám."
    ],
    challenge: "Kérj be n darab jegyet, utasítsd el az 1–5 tartományon kívülieket, számíts átlagot, majd adj szöveges értékelést. Teszteld n=1 esetét, azonos jegyeket és hibás bemenetet is."
  },
  {
    core: [
      "A comprehension új gyűjteményt készít egy iterálható értékből. Sorrendje: eredménykifejezés, for ciklus, majd opcionális if szűrő.",
      "List comprehension megőrzi a sorrendet és az ismétlődéseket; set comprehension egyedi elemeket ad; dict comprehension kulcs-érték párokat készít.",
      "Több for és feltétel is megadható, de ha a kifejezés nehezen olvasható, bontsd hagyományos ciklusokra."
    ],
    walkthrough: [
      "A for szam in range(...) sorban adja a bemeneti értékeket.",
      "A bal oldali kifejezés minden megfelelő elemhez elkészíti a kimeneti értéket.",
      "Az if a for után áll, és eldönti, hogy az elem bekerül-e az új listába."
    ],
    challenge: "Diákrekordokból készíts nevekhez tartozó átlagpontszám-szótárat, majd külön listát a legalább négyes átlagúakról. Írd meg ciklussal és comprehensionnel is."
  },
  {
    core: [
      "A sorted(iterable) új listát ad, így az eredeti sorrend megmarad. A lista sort() metódusa helyben rendez, és None értéket ad vissza.",
      "A key függvény minden elemből rendezési kulcsot készít; reverse=True csökkenő sorrendet kér. A Python rendezése stabil: azonos kulcsú elemek egymáshoz viszonyított sorrendje megmarad.",
      "Összetett rekord tuple kulccsal több szempont szerint rendezhető. Negatív numerikus kulccsal csökkenő sorrend állítható be egy mezőn."
    ],
    walkthrough: [
      "A sorted(nevek) alapértelmezés szerint lexikografikus sorrendet használ.",
      "A key=len a nevek hosszát teszi összehasonlítási kulccsá.",
      "A reverse=True megfordítja a rendezési irányt, de nem módosítja az eredeti listát."
    ],
    challenge: "Rendezz diákokat pontszám szerint csökkenő, azon belül név szerint növekvő sorrendbe. Hasonlítsd össze a sorted() új listáját és a helyben rendező sort() hatását."
  },
  {
    core: [
      "Az r olvas, a w felülír vagy létrehoz, az a hozzáfűz, az x csak új fájlt hoz létre. Rossz mód megválasztásával adat veszhet el.",
      "A with open(...) sikeres és hibás futáskor is lezárja a fájlt. Szövegnél adj meg kódolást; bináris módban bájtokkal dolgozol.",
      "A fájlpozíció olvasás és írás közben változik. Nagy fájlt célszerű soronként feldolgozni, nem egyszerre memóriába olvasni."
    ],
    walkthrough: [
      "A with blokk w módban megnyitja a fájlt, ami a korábbi tartalmat felülírja.",
      "A \n sortörést ír, az encoding='utf-8' pedig rögzíti a szöveg karakterkódolását.",
      "A második with blokk olvasásra nyitja meg a fájlt, a readlines() soronkénti listát ad."
    ],
    challenge: "Építs fájlalapú szövegelemzőt: soronként számold a szavakat, normalizáld kisbetűre és írásjel nélkül, készíts gyakorisági listát, majd mentsd külön fájlba. Kezeld a hiányzó bemeneti fájlt."
  },
  {
    core: [
      "Az unpacking az iterálható érték elemeit több célváltozóhoz rendeli. Alapesetben egyezzen a célváltozók és az értékek száma.",
      "A csillagos célváltozó listába gyűjti a maradék elemeket; egy szinten csak egy ilyen cél lehet.",
      "Függvényhívásnál a * egy sorozatot pozicionális argumentumokra, a ** egy szótárat név szerinti argumentumokra bont ki."
    ],
    walkthrough: [
      "A kezdo az első, a vege az utolsó értéket kapja.",
      "A *kozep összegyűjti a közöttük maradó értékeket.",
      "A koordinatak tuple két elemét közvetlenül x és y változóba bontjuk."
    ],
    challenge: "Tárolj egy rekordban nevet, életkort és jegyeket. Bontsd ki a rögzített mezőket és a jegyeket csillagos változóba, majd adj át egy konfigurációs szótárat ** operátorral egy formázó függvénynek."
  },
  {
    core: [
      "A szelet alakja [start:stop:step]; start benne van, stop kimarad. Az elhagyott határértékeket a Python a sorozat elejével és végével helyettesíti.",
      "A negatív index a sorozat végétől számol. Negatív lépés visszafelé halad, ezért [::-1] gyakori megfordítási forma.",
      "Lista szeletelése új, sekély másolatot ad: a külső lista új, a benne lévő módosítható objektumok viszont megosztottak lehetnek."
    ],
    walkthrough: [
      "A szoveg[0:7] a 0–6 indexű karaktereket választja ki.",
      "A szoveg[-3:] az utolsó három karaktert kéri le.",
      "A szoveg[::-1] visszafelé járja be a nem módosítható sztringet, és új szöveget eredményez."
    ],
    challenge: "Készíts kezdő, középső és záró szeletet egy listából. Készíts sekély másolatot beágyazott listáról, módosítsd a belső elemet, majd magyarázd meg, miért látszik a változás mindkét helyen."
  },
  {
    core: [
      "Az iterable bejárható objektum, az iterator pedig állapotot tartva adja a következő elemet. A for ciklus ezt a protokollt kezeli.",
      "Az enumerate(iterable, start=1) indexet és értéket ad; a zip több sorozat megfelelő elemeit párosítja, és alapból a legrövidebb végén áll meg.",
      "A zip(strict=True) eltérő hossz esetén hibát jelez. Sok iterátor lusta, tehát csak kérésre állítja elő a következő elemet."
    ],
    walkthrough: [
      "A zip(nevek, pontok) név–pont párokat készít.",
      "Az enumerate(..., start=1) emberi sorszámot ad minden párhoz.",
      "A ciklusban a beágyazott tuple kibontása rögtön sorszam, nev és pont változót ad."
    ],
    challenge: "Készíts több tantárgy jegyeiből riportot zip és enumerate segítségével. Ellenőrizd a listák hosszát, számíts tantárgyanként átlagot, majd jelezd a legmagasabb értéket és sorszámát."
  },
  {
    core: [
      "A függvény definíciója újrafelhasználható kódot rögzít. Híváskor a paraméterek kapják az argumentumokat; a return értéket ad vissza, a print csak megjelenít.",
      "A helyi változó a függvény futása közben él. A globális állapot helyett inkább adj át adatot paraméterként és térj vissza eredménnyel.",
      "Az alapértelmezett paraméter értéke a definíciókor jön létre. Módosítható alapértelmezett érték helyett használj None-t, majd hozz létre értéket a függvényen belül."
    ],
    walkthrough: [
      "Az atlag egy sorozatot fogad paraméterként.",
      "Az üres sorozatot előre kezeli, ezzel elkerüli a nullával osztást.",
      "A sum / len eredménye returnnel jut vissza; a hívás eredményét a print írja ki."
    ],
    challenge: "Bontsd két tesztelhető függvényre a téglatest felszín- és térfogatszámítását. Hibás méretnél emelj ValueError-t; írj faktoriális-függvényt alap- és rekurzív esettel."
  },
  {
    core: [
      "A lambda rövid függvény, leginkább key vagy egyszerű transzformáció argumentumaként hasznos. Összetett logikát ne zsúfolj lambdába.",
      "A map minden elemre alkalmaz egy függvényt, a filter pedig csak a feltételt teljesítő elemeket tartja meg.",
      "A map és filter iterátort ad; a list() bejárja az eredményt. Comprehension gyakran olvashatóbb, önálló függvény pedig könnyebben tesztelhető."
    ],
    walkthrough: [
      "A lambda n: n ** 2 minden szám négyzetét számítja.",
      "A map ezt a függvényt a szamok minden elemére alkalmazza.",
      "A filter párosságot vizsgál, a list() pedig listává alakítja a lusta iterátort."
    ],
    challenge: "Tisztíts jegyadatokat: szűrd ki az érvénytelen értékeket, alakítsd egységes típusra, majd számíts átlagot. Oldd meg map/filterrel és comprehensionnel, és hasonlítsd össze az olvashatóságot."
  },
  {
    core: [
      "A modul egy .py fájl, a package összetartozó modulok könyvtára. Az importált modul első betöltéskor lefut, utána a Python a sys.modules tárban gyorsítótárazza.",
      "Az import modul névteret tart fenn, a from modul import nev célzottan hoz be nevet. Az alias rövidít és követhet közösségi konvenciót.",
      "Az if __name__ == '__main__' blokk csak közvetlen futtatáskor indul el, importáláskor nem. Kerüld a standard modulokkal ütköző fájlneveket."
    ],
    walkthrough: [
      "Az import math as matek betölti a modult és aliasnevet ad neki.",
      "A matek.sqrt(81) megmutatja, hogy a függvény a math modulból származik.",
      "Saját modult fájlnév alapján importálsz; a modul fő belépési pontját külön őrrel válaszd el."
    ],
    challenge: "Rendezd kör- és téglatest-függvényeidet geometria.py modulba. Adj hozzá főprogramot, amely bemenetet kér, de importáláskor nem indul el automatikusan."
  },
  {
    core: [
      "datetime dátumokkal és időeltérésekkel dolgozik; time alacsony szintű időmérést ad. Futási időre a perf_counter alkalmasabb, mint a falióra.",
      "math matematikai műveleteket, random véletlen mintavételt, collections gyakoriságszámlálót nyújt. Rögzített random seed reprodukálható próbát ad.",
      "copy sekély/mély másolatot készít, glob fájlmintára keres, gzip tömörít, os útvonalakkal és környezettel dolgozik.",
      "pickle csak megbízható forrásból tölthető; subprocessnak argumentumlistát adj; urllib URL-t elemez és hálózati adatot kér le."
    ],
    walkthrough: [
      "date.today() dátumot ad, Counter('banán') elemeket számol, math.sqrt(81) gyököt számít.",
      "A modulnév a pont előtt marad, így azonos nevű függvények nem írják felül egymást.",
      "A feladathoz válassz eszközt: méréshez time, tömörítéshez gzip, fájlmintához glob, URL feldolgozásához urllib."
    ],
    challenge: "Mérd meg egy szövegfeldolgozó ciklus futási idejét, számold a szavak gyakoriságát Counterrel, mentsd gzip fájlba, majd olvasd vissza. Véletlen tesztadatnál rögzíts seedet."
  },
  {
    core: [
      "A kivétel megszakítja a normál vezérlési menetet. A traceback a hívási láncot és a keletkezési helyet mutatja.",
      "try után konkrét kivételeket kezelj. Az else csak sikeres try után fut, a finally takarításra és erőforrások lezárására alkalmas.",
      "A raise szándékosan jelez hibát. Saját ValueError-t emelhetsz, ha egy függvény előfeltétele sérül; ne kapj el Exception-t pusztán a hiba eltüntetéséért."
    ],
    walkthrough: [
      "Az osztas elindítja a műveletet a try blokkban.",
      "Csak ZeroDivisionError kerül a megadott except ágba; más hibák továbbra is láthatók.",
      "Mindkét ág visszatérési értéket ad, amelyet a hívó kiírhat vagy tovább feldolgozhat."
    ],
    challenge: "Készíts újrapróbálkozó számbeolvasást ValueError kezelésével, majd két szám osztását külön nullaellenőrzéssel. Használd az else ágat sikeres feldolgozásra, és mondd el, mit takarítana a finally."
  },
  {
    core: [
      "A szintaktikai hiba megakadályozza a kód elemzését; a futásidejű hiba végrehajtás közben keletkezik; a logikai hiba lefut, de rossz eredményt ad.",
      "Traceback esetén olvasd el a kivétel típusát, keresd meg a saját kódod sorát, és kövesd vissza a hívási láncot.",
      "Breakpointtal megállíthatsz és léptethetsz. A legkisebb reprodukálható példa és a normál, szélső, hibás tesztesetek együtt segítik a javítást."
    ],
    walkthrough: [
      "Az atlag függvény kiírja a kapott listát, így látható, mit dolgoz fel.",
      "A return előtt osztás történik; üres listánál ZeroDivisionError keletkezne.",
      "Válassz kívánt viselkedést üres bemenetnél, majd írj rá tesztet a javítás előtt."
    ],
    challenge: "Készíts hibás minimumkeresőt, amely nem frissíti megfelelően a minimumot. Breakpointtal kövesd a változót minden iterációban; teszteld üres, egyelemű, rendezett és ismétlődő elemeket tartalmazó listán."
  },
  {
    core: [
      "Az osztály attribútumokat és metódusokat fog össze; az objektum egy példány. Az instance attribútum példányonkénti állapot, az osztályattribútum közös lehet.",
      "A self az aktuális példány. Az __init__ kezdeti állapotot állít be; a __str__, __repr__, __len__, __add__ és __getitem__ a Python protokolljaihoz kapcsol.",
      "Öröklés közös viselkedés specializálására való, a kompozíció gyakran egyszerűbb. Az absztrakt alaposztály előírhat kötelező metódusokat."
    ],
    walkthrough: [
      "A Teglalap(4, 3) létrehozásakor az __init__ eltárolja az oldalakat.",
      "A terulet() az adott példány attribútumain dolgozik.",
      "A print meghívja a __str__ metódust, így az objektum olvasható szöveget ad."
    ],
    challenge: "Bővítsd a Rectangle osztályt méretellenőrzéssel, kerülettel, __repr__ és egyenlőségvizsgálattal. Ezután írj Vector osztályt, amely támogatja a + operátort, indexelést és len()-t."
  },
  {
    core: [
      "Az ndarray többdimenziós, azonos típusú elemeket tárol. shape a tengelyek mérete, ndim a dimenziószám, dtype az elemtípus.",
      "Indexelés, szeletelés és boolean maszk választ elemeket. Az axis megadja, melyik tengely mentén történik az összesítés; vektoros művelet teljes tömbre hat.",
      "Broadcastingnál a jobb szélső dimenziók egyeztetődnek: méretük legyen egyenlő vagy valamelyik 1. reshape megtartja az elemszámot, transzponálás tengelyeket cserél."
    ],
    walkthrough: [
      "A kétsoros, háromoszlopos array shape értéke (2, 3), ndim értéke 2.",
      "Az adat[:, 1] minden sor második oszlopát választja; mean(axis=0) oszloponként számol átlagot.",
      "A háromelemű vektor mindkét sorhoz illeszkedik broadcastinggal; az összeadás elemenként történik."
    ],
    challenge: "Készíts több hónap és nap szerinti mérési mátrixot. Számolj tengelyenként átlagot és szórást, használj boolean maszkot, transzponálj és reshape-elj, majd vizsgáld meg a nem kompatibilis broadcasting hibáját."
  },
  {
    core: [
      "A Series címkézett egydimenziós adatsor, a DataFrame címkézett táblázat. Az index különválik az értékektől, ezért címke és pozíció nem feltétlenül ugyanaz.",
      "A loc címkék, az iloc pozíciók szerint választ. Boolean maszk feltétel alapján szűr; hiányzó adatok NaN vagy NA értékként jelenhetnek meg.",
      "A groupby feloszt–alkalmaz–összesít mintát követ. CSV-nél ellenőrizd az elválasztót, típusokat és hiányzó mezőket, mielőtt következtetést vonsz le."
    ],
    walkthrough: [
      "A DataFrame oszlopaihoz automatikus, 0-tól induló sorindex társul.",
      "Az adat['pont'] >= 4 logikai maszkot készít, amely a megfelelő sorokat választja ki.",
      "A groupby('csapat')['pont'].sum() csapatonként csoportosít és összeadja a pontokat."
    ],
    challenge: "Olvass be mérkőzés-CSV-t, tisztítsd a hiányzó és hibás gólértékeket, készíts hazai/idegenbeli összesítést, majd rendezd a tabellát. Ellenőrizd, hogy indexcímke vagy pozíció szerint választasz-e."
  },
  {
    core: [
      "A projekt a probléma, a bemenetek és a kimenetek megértésével kezdődik. A részfeladatokra bontás csökkenti az egyszerre fejben tartandó dolgokat.",
      "A modulhatár felelősségeket választ szét; függvény és osztály akkor kerüljön be, ha valódi újrafelhasználást vagy állapotkezelést ad.",
      "Tesztelj normál, határ- és hibás bemenetet. Válaszd el a tartós adatot a számítási logikától, és dokumentáld a futtatást."
    ],
    walkthrough: [
      "Az atlag külön kezeli az üres listát, tehát a szélső esetet már a számítás előtt megoldja.",
      "A sum / len a központi számítás, ezért önálló egységként tesztelhető.",
      "Az assert automatikus ellenőrzés: eltérésnél azonnal jelez, nem kell szemmel összevetni az eredményt."
    ],
    challenge: "Válassz teendőlistát, kvízt vagy CSV-elemzőt. Készíts követelménylistát, adatmodellt, függvénytervet és legalább öt tesztesetet; majd szakaszosan valósítsd meg és ellenőrizd."
  }
];

window.readingGuides = [
  ["Grokking Algorithms.pdf — későbbi kiegészítés algoritmikus gondolkodáshoz."],
  ["The Quick Python Book.pdf — jó kísérő a Python alapfogalmaihoz."],
  ["The Quick Python Book.pdf", "Coffee Break Python 50 Workouts to Kickstart Your Rapid Code Understanding in Python.pdf — rövid, aktív gyakorláshoz."],
  ["The Quick Python Book.pdf", "Coffee Break Python 50 Workouts to Kickstart Your Rapid Code Understanding in Python.pdf — a tuple/list példák mellé."],
  ["The Quick Python Book.pdf", "Coffee Break Python 50 Workouts to Kickstart Your Rapid Code Understanding in Python.pdf — típusok és kis feladatok gyakorlásához."],
  ["The Quick Python Book.pdf", "Automate the Boring Stuff with Python.pdf — bemenetekből készülő hasznos programokhoz."],
  ["The Quick Python Book.pdf", "Coffee Break Python 50 Workouts to Kickstart Your Rapid Code Understanding in Python.pdf — feltételek és ciklusok gyakorlásához."],
  ["Coffee Break Python 50 Workouts to Kickstart Your Rapid Code Understanding in Python.pdf — rövid átalakítási és szűrési gyakorlatokhoz."],
  ["Grokking Algorithms.pdf — rendezés és algoritmusválasztás szemléletes áttekintéséhez."],
  ["Automate the Boring Stuff with Python.pdf — fájlműveletek gyakorlati használatához."],
  ["Fluent Python.pdf — haladóbb sorozatkezeléshez, az alapok után."],
  ["Coffee Break Python Slicing.pdf — szeletelési minták további gyakorlásához."],
  ["Coffee Break Python Slicing.pdf", "Fluent Python.pdf — iterálható objektumok mélyebb megértéséhez."],
  ["The Quick Python Book.pdf", "Python Tricks A Buffet of Awesome Python Features.pdf — függvényes mintákhoz, az alapok után."],
  ["Fluent Python.pdf", "Python Tricks A Buffet of Awesome Python Features.pdf — függvények és iterátorok haladó használatához."],
  ["The Quick Python Book.pdf", "Mastering.Python.2nd.Edition.pdf — modulok és nagyobb programok szervezéséhez."],
  ["Automate the Boring Stuff with Python.pdf — standard könyvtári eszközök gyakorlati alkalmazásához.", "Python Tricks A Buffet of Awesome Python Features.pdf — későbbi haladó mintákhoz."],
  ["The Quick Python Book.pdf — kivételkezelési alapokhoz.", "Test Driven Development with Python Obey the Testing Goat.pdf — teszteléshez kapcsolódó, későbbi olvasmány."],
  ["Test Driven Development with Python Obey the Testing Goat.pdf — hibakeresés és tesztelés összekapcsolásához."],
  ["Fluent Python.pdf", "Python Tricks A Buffet of Awesome Python Features.pdf — osztályok és speciális metódusok további tanulásához.", "Clean Code.pdf — kódminőséghez, az OOP-alapok után."],
  ["Coffee Break NumPy.pdf — tömbműveletekhez és NumPy-gyakorláshoz."],
  ["Coffee_Break_Pandas.pdf — DataFrame-ek és adatelemzés további gyakorlásához."],
  ["Automate the Boring Stuff with Python.pdf — projektötletekhez.", "Test Driven Development with Python Obey the Testing Goat.pdf — tesztek beépítéséhez.", "Clean Code.pdf — átláthatóbb kód kialakításához."]
];

window.readingMethod = "Ne olvass egyszerre több könyvet. Válassz egy kapcsolódó részt, csukd be a könyvet, írd le vagy kódold le emlékezetből a fő gondolatot, majd oldd meg a lecke feladatát. A könyvek címe alapján ajánlott kiegészítők; konkrét fejezetszámot a tár nem ad meg."
