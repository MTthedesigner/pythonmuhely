window.quizBanks = {
  "VS Code fejlesztőkörnyezet": [
    { q: "Mit választ ki a Python: Select Interpreter parancs?", a: ["A futtatandó Python-környezetet.", "A fájl kódolását.", "A terminál betűtípusát."], c: 0, why: "Az interpreter az a Python, amely a programot futtatja és a telepített csomagokat adja." },
    { q: "Mi a különbség a szerkesztő hibajelzése és a traceback között?", a: ["Nincs különbség.", "A szerkesztő előzetesen elemez; a traceback futás közben bekövetkezett hibát mutat.", "A traceback csak színezés."], c: 1, why: "Az elemző futtatás előtt találhat hibát, a traceback pedig egy tényleges futás hívási láncát írja le." },
    { q: "Hol fut le a Run Python File parancs?", a: ["A VS Code termináljában.", "A fájlnév mezőben.", "A böngészőben."], c: 0, why: "A parancs a kiválasztott interpreterrel a terminálban indítja el a fájlt." },
    { q: "Mitől lesz egy mappa Python-projekt?", a: ["Attól, hogy van benne legalább egy .py fájl és a hozzá tartozó állományok.", "Csak attól, hogy átnevezzük Pythonra.", "A mappa neve kötelezően python kell legyen."], c: 0, why: "A mappa a kódot, adatokat és később a környezet beállításait fogja össze." }
  ],
  "Bevezetés és algoritmusok": [
    { q: "Melyik sorrend írja le jól egy egyszerű program feladatát?", a: ["Kimenet → bemenet → feldolgozás.", "Bemenet → feldolgozás → kimenet.", "Feldolgozás → kimenet → bemenet."], c: 1, why: "Először megkapjuk az adatot, elvégezzük a műveletet, majd megjelenítjük az eredményt." },
    { q: "Melyik tulajdonság fontos egy algoritmusnál?", a: ["Véges és egyértelmű lépésekből álljon.", "Mindig legyen legalább száz sora.", "Csak egy programozási nyelven létezhet."], c: 0, why: "Az algoritmus pontos, véges lépéssor, amely a megadott feladatot oldja meg." },
    { q: "Miért érdemes szélső eseteket is kipróbálni?", a: ["Mert ott derülhet ki például az üres bemenet vagy határérték hibája.", "Mert a program csak azokkal fut.", "Mert így nincs szükség normál tesztre."], c: 0, why: "A szélső értékek más vezérlési útvonalat aktiválhatnak, mint a hétköznapi adatok." },
    { q: "Melyik rész tartozik a feldolgozáshoz egy körterület-programban?", a: ["A sugár bekérése.", "A pi * r ** 2 kiszámítása.", "Az eredmény kiírása."], c: 1, why: "A bemenet a sugár, a képlet a feldolgozás, a print pedig a kimenet." }
  ],
  "Alaptípusok és műveletek": [
    { q: "Mit ad a 7 % 3?", a: ["2", "1", "2.333..."], c: 1, why: "A % a maradékképzés operátora; 7 osztva 3-mal 2 maradék 1." },
    { q: "Miért lehet pontatlan egy float-számítás?", a: ["A valós számok tárolása véges bináris pontosságú.", "A float szöveg típus.", "A Python véletlenszerűen módosítja."], c: 0, why: "Sok tizedes tört binárisan nem ábrázolható pontosan véges számú bittel." },
    { q: "Módosítható a str egyik karaktere indexeléssel?", a: ["Igen, bármikor.", "Nem, a sztring nem módosítható; új sztringet kell készíteni.", "Csak ha nagybetű."], c: 1, why: "A str immutable, ezért az elemcsere TypeError-t eredményez." },
    { q: "Mit jelent a None?", a: ["Nulla egész számot.", "A hiányzó vagy még be nem állított értéket.", "Üres sztringet."], c: 1, why: "A None különálló érték, amellyel gyakran a hiányzó eredményt jelöljük." }
  ],
  "Típuskonverzió": [
    { q: "Mit ad vissza az input() alapértelmezés szerint?", a: ["str értéket.", "int értéket.", "bool értéket."], c: 0, why: "Az input() mindig szöveget ad, ezért számoláshoz explicit átalakítás kell." },
    { q: "Mi történik az int('3.5') kifejezésben?", a: ["3 lesz belőle.", "ValueError keletkezik.", "3.5 marad."], c: 1, why: "Az int() egész számot tartalmazó szöveget vár, tizedespontot nem." },
    { q: "Az int(3.9) kerekít vagy csonkol?", a: ["Csonkol: 3 lesz.", "Kerekít: 4 lesz.", "Hibát dob."], c: 0, why: "A floatból int konverzió a tört részt elhagyja, nem kerekít." },
    { q: "Melyik kivétel várható hibás numerikus szöveg konvertálásakor?", a: ["ValueError", "KeyError", "StopIteration"], c: 0, why: "A ValueError azt jelzi, hogy az érték nem alakítható a kért típusra." }
  ],
  "Bemenet, kimenet, formázás": [
    { q: "Mit szabályoz a print sep paramétere?", a: ["A kiírt argumentumok közti elválasztót.", "A fájl kódolását.", "A tizedesjegyek számát."], c: 0, why: "A sep alapból szóköz, de megadható például vessző vagy üres szöveg." },
    { q: "Mi a print alapértelmezett end értéke?", a: ["Sortörés.", "Pontosvessző.", "Üres sztring."], c: 0, why: "A print alapból új sorral fejezi be a kiírást." },
    { q: "Mit jelent az f'{ertek:.2f}' formázás?", a: ["Két tizedesjegyet jelenít meg.", "Egész számmá alakít.", "Két változót összead."], c: 0, why: "A .2f a lebegőpontos szám megjelenítését formázza két tizedesjegyre." },
    { q: "A print(f'{x:.2f}') megváltoztatja x tárolt értékét?", a: ["Igen, kerekítve eltárolja.", "Nem, csak a megjelenítést formázza.", "Törli x-et."], c: 1, why: "A formátum az előállított szövegre hat, nem írja át az eredeti változót." }
  ],
  "Vezérlés: feltétel és ciklus": [
    { q: "Benne van-e a range(1, 5) sorozatban az 5?", a: ["Igen.", "Nem.", "Csak while ciklusban."], c: 1, why: "A range végértéke kimarad." },
    { q: "Mikor használható a while ciklus?", a: ["Amíg egy feltétel igaz, ismétel.", "Csak lista elemein.", "Csak egyszer fut."], c: 0, why: "A while addig fut, amíg a feltétel igaz marad." },
    { q: "Mit csinál a break?", a: ["Kilép a legbelső ciklusból.", "A következő iterációra ugrik.", "Új függvényt hív."], c: 0, why: "A break azonnal befejezi az aktuális ciklust." },
    { q: "Melyik kifejezés ellenőrzi, hogy n legalább 1 és legfeljebb 5?", a: ["1 <= n <= 5", "n = 1..5", "n in 1,5"], c: 0, why: "A Python támogatja a matematikaihoz hasonló láncolt összehasonlítást." }
  ],
  "Kollekciók": [
    { q: "Melyik kollekció tárol ismétlődés nélkül elemeket?", a: ["set", "list", "tuple"], c: 0, why: "A set csak egyedi elemeket tart meg." },
    { q: "Melyik művelet fűz elemet lista végére?", a: ["append()", "add_key()", "push_end()"], c: 0, why: "A list.append(elem) módosítja a listát és a végére teszi az elemet." },
    { q: "Módosítható a tuple egyik eleme?", a: ["Nem.", "Igen, append()-del.", "Csak ha szám."], c: 0, why: "A tuple nem módosítható sorozat." },
    { q: "Mi a dict kulcsának fontos követelménye?", a: ["Hash-elhető legyen.", "Mindig sztring legyen.", "Csak egyszer szerepelhet a programban."], c: 0, why: "A dict kulcsainak hash-elhetőnek és egyedinek kell lenniük." }
  ],
  "Szeletelés és indexelés": [
    { q: "Mi az eredménye a lista[1:4] kifejezésnek?", a: ["Az 1, 2 és 3 indexű elemek.", "Az 1-től 4-ig mindegyik elem.", "Csak a 4. elem."], c: 0, why: "A szelet kezdőindexe benne van, a végindexe kimarad." },
    { q: "Mit tesz a szoveg[::-1]?", a: ["Visszafelé bejárva új sztringet ad.", "Eltávolítja a szöveget.", "A sztring első karakterét adja."], c: 0, why: "A negatív lépés visszafelé halad a sorozaton." },
    { q: "Mit jelent a lista[-1]?", a: ["Az utolsó elemet.", "Az első elemet.", "Hibás indexet."], c: 0, why: "A negatív index a sorozat végétől számol." },
    { q: "A lista[:] milyen másolatot készít?", a: ["Sekély másolatot.", "Mély másolatot minden beágyazott elemről.", "Nem készít másolatot."], c: 0, why: "A szelet új külső listát készít, de a beágyazott objektumokat megoszthatja." }
  ],
  "Comprehension kifejezések": [
    { q: "Hol áll a feltétel egy list comprehensionben?", a: ["A for után, if kulcsszóval.", "A lista után, else-szel.", "Csak külön függvényben."], c: 0, why: "A szűrő az if feltétel a for rész után." },
    { q: "Mi lesz a {x % 2 for x in range(4)} típusa?", a: ["set", "list", "dict"], c: 0, why: "A kapcsos zárójel kulcs-érték pár nélkül set comprehensiont jelent." },
    { q: "Mikor jobb hagyományos ciklust használni?", a: ["Ha a comprehension túl összetett és nehezen olvasható.", "Soha.", "Csak ha nincs lista."], c: 0, why: "A rövidség nem ér többet az olvashatóságnál." },
    { q: "Mit hoz létre a {szo: len(szo) for szo in szavak}?", a: ["Szótárat szó-kulcsokkal és hosszuk értékével.", "Halmazt.", "Tuple-t."], c: 0, why: "A kulcs: érték alakú kifejezés dict comprehensiont készít." }
  ],
  "Algoritmusok és hatékonyság": [
    { q: "Milyen előfeltétel kell a bináris kereséshez?", a: ["A lista legyen rendezett.", "A lista csak páros számokat tartalmazzon.", "A lista hossza kettőhatvány legyen."], c: 0, why: "A bináris keresés rendezett sorozatból tudja eldobni a tartomány felét." },
    { q: "Milyen futásidő-növekedést várunk a lineáris kereséstől?", a: ["O(n)", "O(log n)", "O(1) minden esetben"], c: 0, why: "Legrosszabb esetben minden elemet meg kell vizsgálni." },
    { q: "Mit fejez ki az O(log n) a bináris keresésnél?", a: ["A vizsgált tartomány minden lépésben feleződik.", "A lista megduplázódik.", "A program minden adatot kétszer olvas."], c: 0, why: "A logaritmikus lépésszám a tartomány ismételt felezéséből adódik." },
    { q: "Melyik szerkezet alkalmas átlagosan gyors gyakoriságszámlálásra?", a: ["dict", "Egyetlen változó", "float"], c: 0, why: "A szótár kulcsonként tudja tárolni és frissíteni a számlálót." }
  ],
  "Rendezés": [
    { q: "Módosítja-e a sorted(lista) az eredeti listát?", a: ["Nem, új rendezett listát ad.", "Igen, mindig helyben rendez.", "Törli a listát."], c: 0, why: "A sorted() új listát készít; a list.sort() rendez helyben." },
    { q: "Mire való a key paraméter?", a: ["Megadja, mi szerint hasonlítsa az elemeket.", "Titkosítja a listát.", "Megadja a lista nevét."], c: 0, why: "A key függvény összehasonlítási kulcsot képez az elemekből." },
    { q: "Mit jelent a reverse=True?", a: ["Fordított rendezési irányt.", "A bemenet visszafordítását karakterenként.", "A rendezés kikapcsolását."], c: 0, why: "A reverse=True csökkenő rendezést kér." },
    { q: "Mit jelent a stabil rendezés?", a: ["Az azonos kulcsú elemek egymáshoz viszonyított sorrendje megmarad.", "A lista sosem változhat.", "A rendezés csak számokkal működik."], c: 0, why: "A stabil rendezés megőrzi az egyenlő kulcsú elemek korábbi sorrendjét." }
  ],
  "Függvények": [
    { q: "Mi a különbség a print és return között?", a: ["A print megjelenít, a return értéket ad vissza a hívónak.", "Nincs különbség.", "A return csak ciklusban használható."], c: 0, why: "A visszatérési érték később változóba menthető és tovább használható." },
    { q: "Mi a módosítható alapértelmezett paraméter veszélye?", a: ["A változó érték megmaradhat több hívás között.", "A függvény nem hívható.", "A paraméter mindig szöveggé válik."], c: 0, why: "A lista vagy dict alapérték a függvény definíciójakor egyszer jön létre." },
    { q: "Mire való a *args?", a: ["Tetszőleges számú pozicionális argumentum összegyűjtésére.", "Kivétel elnyelésére.", "Fájlok megnyitására."], c: 0, why: "A *args a maradék pozicionális argumentumokat tuple-be gyűjti." },
    { q: "Hol érhető el alapból egy függvényben létrehozott helyi változó?", a: ["A függvényen belül.", "Minden modulban automatikusan.", "Csak a terminálban."], c: 0, why: "A helyi változó hatóköre az azt létrehozó függvény." }
  ],
  "Kicsomagolás": [
    { q: "Milyen típust kap a csillagos célváltozó?", a: ["Listát a maradék elemekből.", "Setet.", "Egyetlen elemet."], c: 0, why: "A csillagos cél összegyűjti a maradék elemeket egy listába." },
    { q: "Mire használjuk a függvényhívásban a **szotar alakot?", a: ["Kulcs-érték párok név szerinti argumentumként átadására.", "Hatványozásra.", "Szótár törlésére."], c: 0, why: "A ** a szótár kulcsait paraméternevekként, értékeit argumentumként adja át." },
    { q: "Hány csillagos célváltozó lehet egy unpacking szinten?", a: ["Legfeljebb egy.", "Tetszőleges sok.", "Egy sem."], c: 0, why: "Egyetlen cél gyűjtheti össze a többi változóhoz nem rendelt elemeket." },
    { q: "Mi történik, ha nincs csillagos cél és az elemszám eltér?", a: ["ValueError keletkezik.", "A Python csendben eldobja a fölösleget.", "Minden cél None lesz."], c: 0, why: "A kicsomagoláshoz egyeznie kell a célok és elemek számának." }
  ],
  "Haladó iterálás": [
    { q: "Mit ad az enumerate(lista) egy cikluslépésben?", a: ["Indexet és értéket.", "Csak a lista hosszát.", "Rendezett másolatot."], c: 0, why: "Az enumerate (index, érték) párokat hoz létre." },
    { q: "Mikor áll meg alapértelmezésben a zip(a, b)?", a: ["A rövidebb iterálható végén.", "A hosszabb végén.", "Mindig az első elemnél."], c: 0, why: "A zip alapértelmezés szerint a legrövidebb bemenetnél befejezi a bejárást." },
    { q: "Mire való a zip(strict=True)?", a: ["Eltérő hossz esetén hibát jelez.", "A listákat rendezi.", "Minden elemet sztringgé alakít."], c: 0, why: "A strict mód jelzi, ha a bemeneti iterable-ek hossza eltér." },
    { q: "Mit jelent az iterable?", a: ["Olyan objektum, amely bejárható.", "Mindig lista.", "Olyan érték, amely csak egyszer létezhet."], c: 0, why: "Sztring, tuple, lista, dict és sok más objektum is iterable." }
  ],
  "Iterátorok és generátorok": [
    { q: "Mit ad egy yield-et tartalmazó függvény hívása?", a: ["Generátor objektumot.", "Mindig listát.", "Azonnal az összes eredményt."], c: 0, why: "A generátor a következő bejáráskor állítja elő az értékeket." },
    { q: "Mit jelez a StopIteration?", a: ["Az iterátor elfogyott.", "A lista rendezett.", "A függvény dekorált."], c: 0, why: "Az iterátor ezzel jelzi, hogy nincs több eleme." },
    { q: "Mikor hasznos a generátor?", a: ["Nagy vagy folyamatos adatok lusta feldolgozásakor.", "Ha minden eredményt egyszerre memóriában kell tartani.", "Csak kétdimenziós tömböknél."], c: 0, why: "A generátor egyenként állítja elő az értékeket, ezért csökkentheti a memóriaigényt." },
    { q: "Újraindul-e automatikusan már elfogyasztott generátor?", a: ["Nem, új generátort kell kérni.", "Igen, a lista elejéről.", "Csak Python újraindítása után."], c: 0, why: "A generátor állapotos iterator, a bejárt értékeket nem adja vissza újra." }
  ],
  "Funkcionális eszközök": [
    { q: "Mire való a map()?", a: ["Függvényt alkalmaz minden elemre.", "Elemeket töröl fájlból.", "Kivételt kezel."], c: 0, why: "A map egy átalakító függvényt alkalmaz az iterable elemeire." },
    { q: "Melyik eszköz szűr feltétel szerint?", a: ["filter()", "map()", "sum()"], c: 0, why: "A filter megtartja azokat az elemeket, amelyekre a predikátum igaz." },
    { q: "Mi a lambda tipikus szerepe?", a: ["Rövid, névtelen függvény megadása.", "Osztály létrehozása.", "Fájl bezárása."], c: 0, why: "A lambda egyszerű kifejezésből álló függvényt készít." },
    { q: "Mikor olvashatóbb comprehensiont használni?", a: ["Egyszerű átalakításnál vagy szűrésnél.", "Minden összetett algoritmusnál.", "Csak függvénydefinícióban."], c: 0, why: "Egyszerű esetben a comprehension egy helyen mutatja az átalakítást és a bejárást." }
  ],
  "Modulok és csomagok": [
    { q: "Mi a modul?", a: ["Python-kódot tartalmazó fájl.", "Csak telepített csomag.", "Egy változótípus."], c: 0, why: "Egy .py fájl modulnévként importálható." },
    { q: "Mikor fut le az if __name__ == '__main__' blokk?", a: ["Ha a fájlt közvetlenül futtatjuk.", "Minden importáláskor.", "Soha."], c: 0, why: "Importáláskor a __name__ a modul neve, közvetlen futtatáskor __main__." },
    { q: "Miért kerüljük a math.py fájlnevet saját projektben?", a: ["Elfedi a standard math modult.", "A pont karakter tiltott.", "Python nem enged saját modulokat."], c: 0, why: "A helyi fájl névütközést okozhat az importáláskor." },
    { q: "Mi a különbség az import math és from math import sqrt között?", a: ["Az első névteret ad, a második közvetlenül behozza a sqrt nevet.", "Nincs különbség.", "A második telepíti a csomagot."], c: 0, why: "A célzott import rövidebb, az import modul forma viszont egyértelmű névteret tart fenn." }
  ],
  "Standard könyvtár": [
    { q: "Melyik modul ad dátum- és időkezelést?", a: ["datetime", "glob", "gzip"], c: 0, why: "A datetime modul dátumokat, időpontokat és időeltéréseket kezel." },
    { q: "Melyik modul számolja meg kényelmesen az elemek gyakoriságát?", a: ["collections.Counter", "os.getcwd", "math.sqrt"], c: 0, why: "A Counter számláló szótárként viselkedik." },
    { q: "Miért veszélyes ismeretlen pickle fájlt betölteni?", a: ["A betöltés tetszőleges kódot futtathat.", "A fájl túl lassú.", "A pickle csak szöveget tárol."], c: 0, why: "A pickle nem biztonságos, ha a forrás nem megbízható." },
    { q: "Hogyan add át biztonságosabban az argumentumokat subprocess.run-nak?", a: ["Argumentumlistaként, shell-szöveg összefűzése nélkül.", "Egyetlen parancssztringként shell=True-val.", "Csak kommentben."], c: 0, why: "Az argumentumlista elkerüli, hogy a felhasználói szöveg shell-utasításként értelmeződjön." }
  ],
  "Fájlkezelés": [
    { q: "Mit tesz a fájlmegnyitás w módja?", a: ["Írásra nyit, és a régi tartalmat felülírhatja.", "Csak olvas.", "Csak bináris adatot olvas."], c: 0, why: "A w mód új fájlt hoz létre vagy felülírja a meglévőt." },
    { q: "Mi az előnye a with open(...) szerkezetnek?", a: ["A fájlt blokk végén akkor is lezárja, ha hiba történik.", "Automatikusan javítja a fájlt.", "Mindig megőrzi a régi tartalmat."], c: 0, why: "A kontextuskezelő megbízhatóan felszabadítja az erőforrást." },
    { q: "Mit jelent az encoding='utf-8'?", a: ["A karakterkódolást rögzíti.", "A fájlt tömöríti.", "A sorokat rendezi."], c: 0, why: "A szöveg dekódolása és kódolása azonos, kifejezett formátum szerint történik." },
    { q: "Mire való a bináris fájlmód?", a: ["Bájtok olvasására vagy írására.", "Csak magyar szöveghez.", "CSV sorok rendezésére."], c: 0, why: "A bináris mód bytes adatot kezel, nem szöveges karaktereket." }
  ],
  "Szövegfeldolgozás és reguláris kifejezések": [
    { q: "Mit illeszt a regex \\d?", a: ["Egy számjegyet.", "Egy teljes szót.", "A sor végét."], c: 0, why: "A \\d egy számjegyet jelöl." },
    { q: "Mi a különbség a search és fullmatch között?", a: ["A search részszövegben keres, a fullmatch az egész szöveget ellenőrzi.", "A fullmatch mindig gyorsabb.", "A search csak számokon működik."], c: 0, why: "A fullmatch akkor sikeres, ha a teljes bemenet illeszkedik a mintára." },
    { q: "Miért hasznos a r előtag regex mintánál?", a: ["Raw stringként megőrzi a backslash karaktereket.", "Regexet futtat gyorsabban.", "Eltávolítja a szóközöket."], c: 0, why: "A nyers sztringben a backslash nem kapja meg előbb a Python string escape jelentését." },
    { q: "Mire való a re.sub()?", a: ["Egyezések cseréjére.", "Csak keresésre.", "Fájlok tömörítésére."], c: 0, why: "A re.sub a mintára illeszkedő részeket új szövegre cseréli." }
  ],
  "Kivételkezelés": [
    { q: "Melyik kivételt érdemes kapni int('abc') esetén?", a: ["ValueError", "KeyError", "IndexError"], c: 0, why: "Az érték létezik, de nem alakítható egész számmá." },
    { q: "Mikor fut le a finally ág?", a: ["A try sikeres vagy hibás befejezésekor is.", "Csak hiba esetén.", "Csak return nélkül."], c: 0, why: "A finally tipikusan takarítást végez minden kilépési úton." },
    { q: "Mire való a raise?", a: ["Kivétel szándékos jelzésére.", "Ciklus folytatására.", "Változó létrehozására."], c: 0, why: "A raise segítségével a program a hibás állapotot explicit módon jelezheti." },
    { q: "Miért kerüljük a túl tág except Exception kezelést?", a: ["Elfedi a nem várt hibákat.", "Nem létezik ilyen kivétel.", "Csak fájloknál működik."], c: 0, why: "Konkrét kivétel elkapása segít, hogy más hibák láthatóak maradjanak." }
  ],
  "Hibakeresés": [
    { q: "Mit mutat a traceback?", a: ["A hiba típusát és a hívási láncot.", "A projekt könyvtárszerkezetét.", "A program betűtípusát."], c: 0, why: "A traceback megmutatja, milyen hívások vezettek a kivételhez." },
    { q: "Mi jellemző a logikai hibára?", a: ["A program lefut, de az eredmény hibás.", "A kód nem elemezhető.", "Mindig összeomlik a Python."], c: 0, why: "A logikai hiba a számításban vagy az algoritmusban van." },
    { q: "Mire jó a breakpoint?", a: ["Megállítja a programot egy ponton, hogy vizsgálhasd az állapotot.", "Automatikusan kijavítja a hibát.", "Törli a változókat."], c: 0, why: "Megálláskor megvizsgálhatod a változók értékét és lépésenként követheted a futást." },
    { q: "Miért hasznos a minimális reprodukálható példa?", a: ["Elkülöníti a hibát okozó feltételeket.", "Hosszabbá teszi a tracebacket.", "Kiváltja a teszteket."], c: 0, why: "A kisebb példa kevesebb zavaró tényezőt hagy a hibakeresésben." }
  ],
  "Objektumorientált programozás": [
    { q: "Mit jelöl a self?", a: ["Az aktuális példányt.", "Az osztály nevét.", "A szülőmodult."], c: 0, why: "A példánymetódus első paramétere az az objektum, amelyen a metódust hívtuk." },
    { q: "Mire való az __str__?", a: ["Felhasználóbarát szöveges alakot ad.", "Öröklést állít be.", "Fájlokat nyit meg."], c: 0, why: "A print(obj) többek között az objektum __str__ metódusát használja." },
    { q: "Mikor megfelelő az öröklés?", a: ["Ha a leszármazott valóban az alaposztály specializált esete.", "Minden kódmegosztásnál.", "Ha nincs szükség metódusra."], c: 0, why: "Az öröklés kapcsolatot fejez ki; egyszerű újrafelhasználásra sokszor kompozíció jobb." },
    { q: "Melyik metódus kapcsolódik az obj[0] indexeléshez?", a: ["__getitem__", "__init__", "__main__"], c: 0, why: "A __getitem__ indexelési protokollt valósít meg." }
  ],
  "Dekorátorok és kontextuskezelők": [
    { q: "Mit ad vissza egy egyszerű dekorátor?", a: ["Egy becsomagolt függvényt.", "Mindig listát.", "Egy fájlútvonalat."], c: 0, why: "A dekorátor az eredeti függvényt módosított viselkedésű callable-lel helyettesíti." },
    { q: "Mire való a functools.wraps?", a: ["Megőrzi a becsomagolt függvény metaadatait.", "Újrapróbálja a kivételt.", "Bezárja az összes fájlt."], c: 0, why: "A wraps megőrzi többek között a függvény nevét és docstringjét." },
    { q: "Mit kell tennie egy dekorátor wrapperének az eredménnyel?", a: ["Vissza kell adnia az eredeti függvény eredményét.", "Mindig None-t kell visszaadnia.", "El kell dobnia az argumentumokat."], c: 0, why: "A return fuggveny(*args, **kwargs) megőrzi az eredeti hívás eredményét." },
    { q: "Miért használunk context managert?", a: ["Erőforrás belépési és kilépési műveleteinek megbízható kezelésére.", "Csak kód színezésére.", "Függvénynevek rövidítésére."], c: 0, why: "A with blokk kilépéskor, kivétel esetén is meghívja a takarítást." }
  ],
  "NumPy tömbök": [
    { q: "Mit jelent egy NumPy tömb shape értéke?", a: ["A méretet tengelyenként.", "Az összes elem összegét.", "A tömb fájlnevét."], c: 0, why: "A shape megadja, hány elem van az egyes dimenziók mentén." },
    { q: "Mit jelent a mean(axis=0) egy kétdimenziós tömbnél?", a: ["Oszloponként számít átlagot.", "Minden elemet nullára állít.", "Sorokat rendez."], c: 0, why: "Az axis=0 a sorok tengelyén aggregál, így oszloponként marad eredmény." },
    { q: "Mikor kompatibilis két dimenzió broadcastinghoz?", a: ["Ha egyenlők vagy az egyik méret 1.", "Ha mindkettő prím.", "Ha mindkettő 2D."], c: 0, why: "A tengelyméretek hátulról egyeztetődnek; egyenlőség vagy 1 szükséges." },
    { q: "Miért gyors gyakran a NumPy vektoros művelet?", a: ["A művelet tömbszinten, optimalizált kódban fut.", "Minden elemet külön Python-objektumba csomagol.", "Nem végez számítást."], c: 0, why: "A vektoros műveletek elkerülik a Python-szintű ciklus jelentős részét." }
  ],
  "pandas táblázatok": [
    { q: "Mi a Series?", a: ["Címkézett egydimenziós adatsor.", "Kétdimenziós tömb kizárólag számokkal.", "Python modul."], c: 0, why: "A Series egy indexelt oszlophoz hasonlít." },
    { q: "Mi a különbség a loc és iloc között?", a: ["loc címke, iloc pozíció alapján választ.", "loc fájlt, iloc mappát olvas.", "Nincs különbség."], c: 0, why: "A címkeindex és a sorszám eltérhet egymástól." },
    { q: "Mire való a groupby()?", a: ["Sorok csoportosítására összesítő műveletekhez.", "Oszlopnevek átnevezésére.", "CSV tömörítésére."], c: 0, why: "A groupby felosztja az adatot csoportokra, majd aggregáció végezhető." },
    { q: "Mit kell tenni hiányzó adatokkal elemzés előtt?", a: ["Felmérni, majd tudatosan kezelni vagy megőrizni őket.", "Mindig nullára cserélni.", "Mindig törölni az egész DataFrame-et."], c: 0, why: "A hiányzó érték kezelése az adat jelentésétől és az elemzés céljától függ." }
  ],
  "Algoritmusok és hatékonyság": [
    { q: "Melyik sorrend jó red–green–refactor ciklushoz?", a: ["Sikertelen teszt, minimális megoldás, refaktor.", "Refaktor, törlés, utána teszt.", "Kódolás teszt nélkül."], c: 0, why: "A teszt előbb rögzíti az elvárt viselkedést, majd a minimális megoldás következik." },
    { q: "Miért hasznos a leggyakoribb elem keresésénél dict-et használni?", a: ["Kulcsonként tárolja és frissíti a gyakoriságot.", "Automatikusan rendezi az elemeket.", "Minden értéket egyedivé tesz."], c: 0, why: "A szótár hatékony kulcs-érték alapú számlálót ad." },
    { q: "Mit fejez ki a Big O?", a: ["A növekedés nagyságrendjét a bemenet méretéhez képest.", "A pontos másodpercet.", "A kód sorainak számát."], c: 0, why: "A Big O aszimptotikus növekedési viselkedést hasonlít össze." },
    { q: "Mikor lehet hasznos a lineáris keresés a bináris helyett?", a: ["Kicsi vagy rendezetlen adatoknál.", "Mindig, mert logaritmikus.", "Csak fájloknál."], c: 0, why: "A bináris keresés rendezést igényel; egyszeri keresésnél annak költsége meghaladhatja az előnyt." }
  ],
  "Szövegfeldolgozás és reguláris kifejezések": [
    { q: "Miért hasznos a dict[str, int] típusjelölés?", a: ["Leírja a szándékolt kulcs- és értéktípust.", "Futás közben automatikusan validál minden adatot.", "A szótárat rendezetté teszi."], c: 0, why: "A type hint dokumentáció és eszköztámogatás, nem automatikus futásidejű ellenőrzés." },
    { q: "Mire való a dataclass?", a: ["Adatközpontú osztályok ismétlődő kódjának csökkentésére.", "Regex minták futtatására.", "Adatbázis csatlakoztatására."], c: 0, why: "A dataclass gyakori inicializáló és reprezentáló metódusokat generál." },
    { q: "Mi a refaktorálás célja?", a: ["Belső szerkezet javítása külső viselkedés megváltoztatása nélkül.", "Új funkciók elrejtése.", "Tesztelt kód törlése."], c: 0, why: "A refaktor a kód karbantarthatóságát javítja úgy, hogy a működés megmarad." },
    { q: "Melyik függvény paraméterezését segíti a type hint?", a: ["A típusok érthető jelzését az olvasóknak és elemzőknek.", "A program automatikus gyorsítását.", "A Python verzió kiválasztását."], c: 0, why: "A típusjelölés segíti a megértést és az editor statikus elemzését." }
  ],
  "Automatikus tesztek és TDD": [
    { q: "Melyik modul olvas JSON-adatot?", a: ["json", "csv", "glob"], c: 0, why: "A json.loads szöveget Python-értékké, a json.dump adatot fájlba alakít." },
    { q: "Melyik csomag kezelhet xlsx munkafüzetet?", a: ["openpyxl", "pathlib", "urllib.parse"], c: 0, why: "Az openpyxl Excel xlsx állományokkal dolgozik; telepítendő külső csomag." },
    { q: "Miért hasznos a dry-run?", a: ["Előnézetet ad módosítás előtt.", "Azonnal töröl minden fájlt.", "Megkerüli a jóváhagyást."], c: 0, why: "A dry-run megmutatja a tervezett műveleteket azok végrehajtása nélkül." },
    { q: "Mire való a pypdf az automatizálási feladatokban?", a: ["PDF fájlok olvasására és feldolgozására.", "CSV sorok rendezésére.", "Python csomagok frissítésére."], c: 0, why: "A pypdf PDF dokumentumok feldolgozására használható külső könyvtár." }
  ],
  "Tiszta kód, típusjelölések és adatmodellek": [
    { q: "Miért jobb az argumentumlistás subprocess hívás?", a: ["Elkerüli a felhasználói szöveg shell-parancsként értelmezését.", "Automatikusan elrejti a kimenetet.", "A Python így telepíti a parancsot."], c: 0, why: "A parancs és az argumentum külön átadása csökkenti a parancsinjekció veszélyét." },
    { q: "Mire jó az argparse?", a: ["Parancssori argumentumok és súgó kezelésére.", "PDF fájlok olvasására.", "Kód formázására."], c: 0, why: "Az argparse parancssori felületet ad típusokkal, alapértékekkel és automatikus súgóval." },
    { q: "Miért kell timeout a hálózati kéréshez?", a: ["Hogy a program ne várjon korlátlan ideig.", "Hogy gyorsabb legyen a JSON dekódolás.", "Hogy eltűnjön a HTTP státuszkód."], c: 0, why: "Időtúllépési korlát nélkül egy kérés hosszú időre megakaszthatja a programot." },
    { q: "Hová kerüljön egy API-token?", a: ["Környezetváltozóba vagy titokkezelőbe, ne a forráskódba.", "Nyilvános GitHub commitba.", "A változónévbe."], c: 0, why: "A forráskódba írt titok könnyen kiszivároghat." }
  ],
  "Fájl- és dokumentumautomatizálás": [
    { q: "Mire való az openpyxl?", a: ["XLSX táblázatok olvasására és írására.", "JSON séma ellenőrzésére.", "HTTP kérésre."], c: 0, why: "Az openpyxl egy külső csomag Excel XLSX munkafüzetekhez." },
    { q: "Mi a pathlib előnye útvonalkezelésnél?", a: ["Platformfüggetlen útvonal objektumokat ad.", "Automatikusan törli a fájlokat.", "Csak macOS-en működik."], c: 0, why: "A pathlib kezeli az útvonalrészeket és fájlműveleteket operációs rendszerhez igazodva." },
    { q: "Mikor használd a CSV modult?", a: ["Elválasztott táblázatos szöveg rekordjainak olvasására/írására.", "PDF oldalak képpé alakítására.", "E-mailek titkosítására."], c: 0, why: "A csv modul idézőjeleket és elválasztókat is kezel, ezért biztonságosabb a kézi splitnél." },
    { q: "Miért készíts biztonsági másolatot tömeges fájlművelet előtt?", a: ["Véletlen hibás átnevezés vagy törlés visszaállítható legyen.", "Mert Python másképp nem tud listázni.", "Mert a dry-run töröl."], c: 0, why: "A tömeges művelet előtt ellenőrzés és visszaállítható eredeti adat kell." }
  ],
  "Parancssori eszközök, API-k és webadatok": [
    { q: "Miért jobb API-t használni, ha az adat hivatalosan elérhető?", a: ["Stabilabb, strukturáltabb adatot ad, mint a HTML kaparása.", "Mindig internet nélkül működik.", "Nem kell hibát kezelni."], c: 0, why: "Az API célzott adatfelületet ad; ettől még státuszt, hibákat és limiteket kezelni kell." },
    { q: "Melyik modullal elemezhető egy URL részeire?", a: ["urllib.parse", "random", "copy"], c: 0, why: "Az urllib.parse URL sémát, gazdagépet, útvonalat és query részt bont szét." },
    { q: "Mit ellenőrizz API-válasznál a JSON dekódolás előtt vagy után?", a: ["HTTP státuszt, timeoutot és a válasz mezőinek alakját.", "Csak a betűtípust.", "Semmit, a JSON mindig megbízható."], c: 0, why: "A hálózati válasz lehet hibás státuszú, hiányos vagy nem várt formátumú." },
    { q: "Mit jelent a web scraping felelős használata?", a: ["Tartsd be a szolgáltatás feltételeit, robots szabályait és kérési limiteket.", "Kérj le minél több személyes adatot.", "Hagyd figyelmen kívül a szerver terhelését."], c: 0, why: "A publikus adat is csak az adott szolgáltatás szabályai és jogszerű keretei között gyűjthető." }
  ],
  "Összetett záróprojektek": [
    { q: "Mikor érdemes elindítani egy nagyobb program megírását?", a: ["Miután meghatároztad a célt, bemenetet, kimenetet és részfeladatokat.", "Mielőtt tudnád, mire való.", "Csak a végén írj tervet."], c: 0, why: "A tervezés csökkenti a bizonytalanságot és kijelöli a tesztelhető részeket." },
    { q: "Melyik teszteset-csoport ad jobb lefedettséget?", a: ["Normál, szélső és hibás bemenet.", "Csak egy normál példa.", "Csak üres bemenet."], c: 0, why: "A különböző kategóriák más hibákat tárnak fel." },
    { q: "Miért érdemes kis működő változattal kezdeni?", a: ["Korán ellenőrizhető alapot ad a következő funkciókhoz.", "Így nem kell teszt.", "A projekt később nem változhat."], c: 0, why: "A kis lépések hamar visszajelzést adnak, a hibák könnyebben megtalálhatók." },
    { q: "Mikor tekinthető késznek egy projekt első változata?", a: ["A fő feladatot elvégzi, dokumentált, és az alaptesztek sikeresek.", "Ha sok fájlból áll.", "Ha még nincs kipróbálva."], c: 0, why: "A működő eredményt tesztek és használati leírás támasztják alá." }
  ]
};
