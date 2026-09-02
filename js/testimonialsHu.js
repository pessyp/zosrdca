// 1. Define your data
const items = [
    {
        id: 37,
        type: "2026",
        date: "2026 augustus 28",
        text: "Köszönöm a párnácskát ",
        greeting: "tisztelettel",
        author: "B. Renáta",
    },
    {
        id: 36,
        type: "2026",
        date: "2026 augustus 25",
        text:
            "Az MRL Magyarpolányi alapszervezet tisztelt kassai önkéntes csoportja.  " +
            "Ezúton szeretnék szívből köszönetet mondani a szív alakú segédeszközért. " +
            "Körülbelül két hete használom a mellműtétem óta. Nagyon sokat segít " +
            "a műtét utáni állapotomban és a rehabilitációban.",
        greeting: "Egy nagy ISTEN fizesse meg",
        author: "Mária M.",
    },
    {
        id: 35,
        type: "2026",
        date: "2026 augustus 9.",
        text:
            "A műtét után kaptam egy szív alakú párnát, amelyet a műhelyükben készítettek. " +
            "Meglepődtem, mennyire segít nekem, főleg alvás közben. Nagyon puha és kellemes. " +
            "Ezúton szeretném nagyon szépen megköszönni Önöknek ezt a segédeszközt, amely megkönnyíti számomra a műtét utáni napokat. " +
            "Sok egészséget kívánok Önöknek",
        greeting: "Tisztelettel és hálával.",
        author: "Zuzana C.",
    },
    {
        id: 34,
        type: "2026",
        date: "2026 augusztus 6.",
        text: "Jó napot, szeretném nagyon szépen megköszönni a szív alakú párnát, amely ebben a helyzetben nagyon sokat segít nekem. Köszönöm.",
        greeting: "Üdvözlettel",
        author: "L.",
    },
    {
        id: 33,
        type: "2026",
        date: "2026 augusztus 3.",
        text:
            "Jó napot kívánok, amikor a szeretet egy szív alakú párna formájában áramlik Önöktől hozzánk. " +
            "A nevem Viera Š., és rákkezelésen, valamint mellműtéten estem át. " +
            "A rehabilitációs nővértől kaptam egy kis párnát, amelyet szívből köszönök. " +
            "Sok örömöt, boldogságot, egészséget és azt az érzést kívánom Önöknek, hogy a szeretettel végzett munkájuk örömet szerez. ",
        greeting: "Hadd áramoljon a szeretet tőlünk Önök felé.",
        author: "Viera Š. 💞",
    },
    {
        id: 32,
        type: "2026",
        date: "2026 július 31.",
        text:
            "Jó napot, onkológiai beteg vagyok, nemrég mellműtéten estem át, és ma megkaptam az Önök szív alakú párnáját, " +
            "amelyért nagyon szépen szeretnék köszönetet mondani. Biztosan segíteni fog a műtét utáni felépülésben, valamint " +
            "a mindennapi életben is. Gyönyörű és nagyon érdemes munkát végeznek, és nagy köszönet illeti Önöket. " +
            "Sok sikert kívánok munkájukban és magánéletükben egyaránt. Még egyszer nagyon köszönöm és üdvözlöm Önöket. ",
        greeting: "Üdvözlettel:",
        author: "Anna V., Spišská Nová Ves - Igló",
    },
    {
        id: 31,
        type: "2026",
        date: "2026 július 23.",
        text: "Tegnap kaptam egy szívet, érzelmi kötődésem van hozzá, gyönyörű, és köszönöm a minőségi munkájukat, Önök fantasztikusak.",
        greeting: "🌹♥️☘️😘🌺🌷🙏🏿🙏🏿🙏🏿",
        author: "Janka L. A.",
    },
    {
        id: 30,
        type: "2026",
        date: "2026 július 20.",
        text:
            "Kedves nőtársaim akik ilymódon gondoskodnak arról,hogy a bajbaesett nők helyzetét könnyítsék, " +
            "nagyon hálás vagyok és köszönöm fáradságos munkájukat.Könnyítés a gyógyulásban és erő a " +
            "gyógyuláshoz az érzés,hogy valaki segít és gondol ránk ebben a helyzetben.A jó Isten áldja meg " +
            "Önöket és munkájukat,kívánok erőt,egészséget további munkájukhoz,",
        greeting: "köszönettel és tisztelettel",
        author: "Klára T. ..😘",
    },
    {
        id: 29,
        type: "2026",
        date: "2026 július 7.",
        text: "Szívből köszönöm a szivecskét....😘",
        greeting: " ",
        author: "Katarína K. K.",
    },
    {
        id: 28,
        type: "2026",
        date: "2026 július 7.",
        text: "Önök valóban csodálatosak. Nagy köszönet Önöknek, hogy segítenek nekünk ♥️🥰",
        greeting: " ",
        author: "Helena P.",
    },
    {
        id: 27,
        type: "2026",
        date: "2026 június 24.",
        text: "Ma ajándékot kaptam, kicsordultak a könnyeim, nagy köszönet",
        greeting: "...szívből a szivecskéért",
        author: "Katarína K. K.",
    },
    {
        id: 26,
        type: "2026",
        date: "2026 június 18.",
        text:
            "Ez úton szeretném megköszönni az Önök párnácskáját. Valóban nagyon nagy segítség a műtét után. Nagy köszönet jár Önöknek.♥️ " +
            "a párnák nagy segítség a mellműtéten átesett pácienseknek. Csak ajánlani tudom ezeket a varázslatos szivecskéket.",
        greeting: " ",
        author: "Helena P.",
    },
    {
        id: 25,
        type: "2026",
        date: "2026 június 16.",
        text: "Még egyszer naaagyon szépen köszönöm a szivecskét ..melegíteni fog a szeretete ...a kezek, amelyek elkészítették",
        greeting: "..gyönyörű napot❤️",
        author: "Slávka H.",
    },
    {
        id: 24,
        type: "2026",
        date: "2026 június 11.",
        text:
            "Mellműtét után vagyok és nagyon szépen köszönöm a szívpárnát amelyet a Kassai onkológiai intézetben kaptam " +
            "részletes ismertetéssel az Önök érdemdús munkájáról. A párnácska segít a felépülésben.",
        greeting: "sok erőt és egészséget kívánok érdemdús munkájukhoz.",
        author: "Ľudmila K. 🥰",
    },
    {
        id: 23,
        type: "2026",
        date: "2026 június 4.",
        text:
            "Jó napot. Éppen átvettem a csomagot. Még egyszer nagyon köszönöm a szivecskéket. " +
            "A másikat odaajándékozzuk valakinek az osztályon, akinek szintén segít és emlékezteti, " +
            "hogy nincs egyedül ebben a betegségben. Köszönöm azt is amit csinálnak, ",
        greeting: "minden jót kívánok.",
        author: "Dominika B.",
    },
    {
        id: 22,
        type: "2026",
        date: "2026 május 25.",
        text:
            "Jó napot. Ez úton szeretném Önöknek őszintén megköszönni a párnácskát amelyet kaptam Önöktől. " +
            "Csodálatos, mindennapi társam, velem is alszik.  " +
            "Nagyra becsülöm az Önök segítségét és az ajándékot, amelyet magvarrtak és ajándékoztak nekem. " +
            "Nagyon szépen köszönöm mindannyijuk munkáját, amelyet számunkra végeznek.",
        greeting: "Mély tisztelettel és szeretettel ❤️❤️❤️❤️❤️❤️",
        author: "Viera C.",
    },
    {
        id: 21,
        type: "2026",
        date: "2026 április 17.",
        text: "❤️-ből köszönjük",
        greeting: " ",
        author: "Silvia R.",
    },
    {
        id: 20,
        type: "2026",
        date: "2026 április 17.",
        text: "Jó napot, nagyon szépen köszönöm az Önök szívpárnáját. Szép napot kívánok.",
        greeting: "Üdvözlettel",
        author: "Slavomíra H.",
    },
    {
        id: 19,
        type: "2026",
        date: "2026 február 9.",
        text: "Nagyon szépen köszönöm a csodálatos párnát.",
        greeting: " ",
        author: "Alena B.",
    },
    {
        id: 18,
        type: "2025",
        date: "2025. november 27.",
        text:
            "Jó estét, én is kaptam egyet a párnákból. Nagyszerű ötlet, a " +
            "szívecske elérte célját",
        greeting: "Köszönöm!",
        author: "Erika Š",
    },
    {
        id: 17,
        type: "2025",
        date: "2025. november 17.",
        text:
            "Szeretettel köszöntöm ezt a csoportot, és nagyon szépen " +
            "köszönöm Ingrid nővérnek, hogy volt lehetőségem átvenni a " +
            "szívpárnát a kórházban a műtet után 😍😍😍. Nagyon nagy " +
            "megkönnyebbülést éreztem a használatával. Szívhez szóló ajándék, " +
            "és szívhez szóló köszönet a hölgyeknek akik résztvesznek a gyártásában.",
        greeting: "🙏🙏🙏",
        author: "Zuzana H.",
    },
    {
        id: 16,
        type: "2025",
        date: "2025. október 26.",
        text:
            "A Michalovce-i (Nagymihály-i) sebészeti osztály nevében is " +
            "köszönöm a mellműtét után lábadozó pácienseknek küldött párnákat.",
        greeting: "🙏🙏🙏🫶",
        author: "Dagmar Uhrínová",
    },
    {
        id: 15,
        type: "2025",
        date: "2025. augusztus 12.",
        text: "Nagy köszönet illeti Önöket",
        greeting: "❤️❤️❤️",
        author: "Silvia R.",
    },
    {
        id: 14,
        type: "2025",
        date: "2025. június 29.",
        text:
            "Üdvözlöm a szívpárnák készítőit❤️ pénteken találkoztunk Kassán " +
            "az onko gynekológia előtt. Szeretném Önöknek nagyon megköszönni a kedves " +
            "ajándékot amit kaptam. Nagy segítség számomra és szeretettel használom. " +
            "Sajnos könnyek futottak a szemembe és nem tudtam tiszta szívből megköszönni. " +
            "Annyira elérzékenyültem a hölgy és az úr hozták az új szivecskéket amit ajándékba kap " +
            "minden mellműtött nő😘 Köszönöm, hogy vannak ilyen jó szándékú " +
            "emberek akik könnyíteni próbálják sorsunkat,",
        greeting: "szeretettel",
        author: "Anna L. ❤️❤️❤️",
    },
    {
        id: 13,
        type: "2025",
        date: "2025. május 7.",
        text:
            "Köszönöm a szívpárnát, amelyet a mellműtét után kaptam. Nagyon " +
            "segített napközben, de főleg éjszaka.",
        greeting: "Nagy szívbéli köszönet!!!!!!",
        author: "Silvia P.",
    },
    {
        id: 12,
        type: "2025",
        date: "2025. március 27.",
        text:
            "A kassai Szívpárna kezdeményezésnek, a Szlovák Rákellenes " +
            "Ligának és a Magyar Rákellenes Ligának köszönhetően ajándékot " +
            "vehettünk át pácienseink részére. A Penta Hospitals Michalovce " +
            "(Nagymihály) kórház onkológiai központja, amelyet MUDr. Lenka " +
            "Rušinová képvisel, az egészségügyi dolgozók és a betegeink " +
            "szívpárnákat kaptak, amelyek a testhez idomulnak, megtámasztják " +
            "a vállat, enyhítik a húzódó érzést és a nyirokcsomó-duzzanatot, " +
            "megkönnyítik a köhögést és védik a műtéti területet. 🤍 A " +
            "szívpárnákat nők készítik nőknek, hogy ne érezzék magukat egyedül.",
        greeting: "Köszönjük!",
        author: "MUDr. Lenka Rušinová",
    },
    {
        id: 11,
        type: "2024",
        date: "2024. december 1.",
        text:
            "Jó estét, nagyon szépen köszönöm a szuper segítséget a műtét " +
            "utáni élethez. A szívpárna mindennapos része az életemnek. Köszönöm ❤️",
        greeting: "Üdvözlettel",
        author: "Lýdia F.",
    },
    {
        id: 10,
        type: "2024",
        date: "2024. november 27.",
        text:
            "Jó napot, a múlt heti mellműtétem után, a kassai VOU-ban, " +
            "nagyon kellemesen meglepett egy ajándék, egy párna formájában, " +
            "amelyet a műtött oldalon a karom alá teszek és amely nagyon " +
            "kellemes. Elolvastam, hogy ki készítette és adta, és ez nagyon " +
            "meghatott. Nagyon kedves Önöktől, hogy gondolnak azokra a nőkre, " +
            "akik nehéz időszakon mennek keresztül, és egy konkrét " +
            "cselekedettel enyhítik fájdalmukat. Őszintén és teljes szívből " +
            "köszönöm! Az Úristen jutalmazza meg Önöket ezért!",
        greeting: "Tisztelettel, hálával és szívből jövő üdvözletemmel",
        author: "Helena K.",
    },
    {
        id: 9,
        type: "2024",
        date: "2024. október 3.",
        text:
            "Jó napot. Ma lettem az Önök szívecskéjenek a tulajdonosa. " +
            "Szeretném megköszönni a nemes tevékenységüket, amit azért " +
            "végeznek, hogy segítsenek nekünk, nőknek ebben a nehéz " +
            "időszakban. Megkönnyebbültem egyaránt egészségileg és lelkileg is. Le a kalappal Önök előtt❤️.",
        greeting: "Még egyszer nagyon szépen köszönöm.",
        author: "R. Zuzana",
    },
    {
        id: 8,
        type: "2024",
        date: "2024. július 10.",
        text:
            "Különleges, kedves, megbecsült és tisztelt nők, akik bármilyen " +
            "módon hozzájárultak ahhoz, hogy a szívpárna eljusson hozzám is - " +
            "egy onkológiai pácienshez. Csodálatos dolgot csinálnak. A " +
            "mellműtétem után (2024.6.12), az Önöktől kapott szivecske " +
            "pótolhatatlan segítség volt számomra. Nem tudom elképzelni, hogy " +
            "tudtam volna meglenni a párna nélkül. Egyszerűen nagyon " +
            "segített. A sebek jól begyógyultak és kész vagyok a további " +
            "kezelésre. Egy hatalmas köszönet jár Önöknek! Őszintén köszönöm " +
            "Önöknek teljes szívemből. Kívánok Önöknek sok, sok egészséget, " +
            "szeretetet, boldogságot és sikert. Kérem, ha módjukban áll, " +
            "ajándékozzanak szívpárnát más nőknek is, akiknek éppen szükségük van rá.",
        greeting: "Üdvözlettel",
        author: "Ing. Jarmila T.",
    },
    {
        id: 7,
        type: "2024",
        date: "2024. június 17.",
        text:
            "A párnáik már Kysucán(Kiszuca) vannak ♥️😍 Gyönyörű gesztus, " +
            "manapság alig van valami ingyen... talán az információ, hogy " +
            "ilyesmi létezik és segít, eljut többekhez, akiknek szükségük van rá.",
        greeting: " ",
        author: "Zuzana K.",
    },
    {
        id: 6,
        type: "2024",
        date: "2024. június 13.",
        text:
            "Jó napot, ma megkaptam a csomagot Öntől. Köszönöm szépen, " +
            "nagyszerű. Teljesen tehermentesíti a kart. Önök csodálatosak. " +
            "Nagy köszönet a munkájukért.",
        greeting: "Üdvözlettel",
        author: "Zdenka T.",
    },
    {
        id: 5,
        type: "2024",
        date: "2024. június 11.",
        text:
            "Jó napot, szeretném nagyon megköszönnia a szívpárnát, mint " +
            "páciensnek, nagyon segített. Nagyszerű dolgot csinálnak és " +
            "feltétlenül folytassák, ez egy kedves gesztus Önöktől és nagy " +
            "segítség nekünk, pácienseknek. Még egyszer egy nagy köszönet ❤️ .",
        greeting: "Üdvözlettel",
        author: "O.",
    },
    {
        id: 4,
        type: "2024",
        date: "2024. március 1.",
        text:
            "Jó napot, nagyon szépen köszönöm a szívpárnát. Nagyon " +
            "megörültem neki és hiszem hogy segíteni fog. Becsülöm azokat az " +
            "embereket. akik segítenek másoknak.",
        greeting: "Üdvözlettel",
        author: "G. Valéria",
    },
    {
        id: 3,
        type: "2023",
        date: "2023. november 30.",
        text:
            "Drága ANGYALKA!!! Megtaláltál, mert eljutott hozzád a hírem☹️és " +
            "mert meg akartál találni❤️❤️❤️Sírtam örömömben…. Nemrégiben egy " +
            "álmatlan éjszakán azon törtem a fejem, mit találjak ki, amit a " +
            "fájós karom alá tudnák tenni☹️Hihetetlen, hogy megjött, ami " +
            "odavaló😲Én nem hallottam az ilyesmiről, de a fantáziám ilyen " +
            "irányba terelt😉Ma hozta el egyik kolléganő, akivel napi " +
            "kapcsolatban vagyok… Nem találok szavakat, de ismerem az " +
            "önzetlen segítő szándékodat, jó lelkedet…. Ilyennek tartson meg " +
            "a jó Isten😘Hálás szívvel köszönöm Neked😉Bízok benne, hogy " +
            "segítségemre lesz a hosszú gyógyulási folyamatban…. Erős vagyok, " +
            "bátor vagyok, harcos vagyok…. Bízok a felépülésben😉Nagyon " +
            "nagyon szépen köszönöm, hogy ezer dolgod mellett találtál rám is " +
            "időt😘",
        greeting: "Szeretetölelés😘😘😘",
        author: "-",
    },
    {
        id: 2,
        type: "2023",
        date: "2023. október 28.",
        text:
            "Kedves Ágnes! Ezúton szeretném kifejezni hálámat és nagyon " +
            "szépen megköszönni a szivecske párnácskát,amelyet minden nap " +
            "használok 🙂 Sok sikert kivánok a további tevékenységükhöz!",
        greeting: "Tisztelettel",
        author: "F. Margitka",
    },
    {
        id: 1,
        type: "2023",
        date: "2023. április 20.",
        text:
            "Kedves szívtündérek, köszönöm mindannyiuknak a gyönyörű " +
            "szívpárnát. Ma kaptam meg a kartorna alkalmával a tegnapi műtét " +
            "után. Gyönyörű és hűséges segítőm lesz 😉",
        greeting: "Forrón köszönöm",
        author: "E.😘",
    },
];
