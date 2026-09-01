// 1. Define your data
const items = [
    {
        id: 36,
        type: "2026",
        date: "28. august 2026",
        text: "Ďakujem za vankúšik ",
        greeting: "s úctou",
        author: "B. Renáta",
    },
    {
        id: 35,
        type: "2026",
        date: "25. august 2026",
        text:
            "Vážená Košická skupina dobrovoľníkov ZO Magyarpolány pri MRL " +
            "Touto cestou Vám chcem srdečne poďakovať za srdiečkovú pomôcku. " +
            "Užívam ju cca dva týždne po operácii prsníkov. Pomáha mi veľmi dobre " +
            "rehabilitovať po zmenenom stave po operácii.",
        greeting: "Veľké PÁN BOH zaplať",
        author: "Mária M.",
    },
    {
        id: 34,
        type: "2026",
        date: "8. august 2026",
        text:
            "Dobrý deň, chcela by som sa Vám veľmi pekne " +
            "poďakovať za srdiečkový vankúš, ako " +
            "pacientke mi veľmi pomohol. Robíte skvelú " +
            "vec a určite v tom pokračujte, je to od Vás " +
            "milé gesto a veľká pomoc pre nás pacientky." +
            "Ešte raz veľké ďakujem ❤️ .",
        greeting: "S úctou a vďakou.",
        author: "Zuzana C.",
    },
    {
        id: 33,
        type: "2026",
        date: "6. august 2026",
        text:
            "Dobrý deň, chcem sa Vám veľmi pekne " +
            "poďakovať za srdiečkový vankúš, ktorý mi v " +
            "tejto situácii veľmi pomáha. Ďakujem.",
        greeting: "S pozdravom",
        author: "L.",
    },
    {
        id: 32,
        type: "2026",
        date: "3. august 2026",
        text:
            "Dobrý deň, keď láska koluje od Vás k Nám v " +
            "podobe srdiečkového vankúša. Moje meno je " +
            "Viera Š. a som po onkologickej liečbe a po " +
            "operácii prsníka. Od rehabilitačnej sestry " +
            "som dostala vankúšik za ktorý Vám srdečne " +
            "ďakujem. Prajem vám veľa radosti, " +
            "spokojnosti, zdravia aj pocitu, že Vaša " +
            "práca s láskou spojená robí radosť. ",
        greeting: "Nech láska koluje od Nás k Vám.",
        author: "Viera Š. 💞",
    },
    {
        id: 31,
        type: "2026",
        date: "31. júl 2026",
        text:
            "Dobrý deň, som onkologická pacientka po " +
            "operácii prsnika a dnes som dostala váš " +
            "srdiečkový vankúš, za ktorý chcem veľmi " +
            "pekne poďakovať. Určite mi pomôže pri " +
            "zotavovaní sa po operácii, aj v každodennom " +
            "živote. Robíte krásnu a veľmi záslužnú " +
            "činnosť a patrí vám veľké poďakovanie. Nech " +
            "sa vám darí v práci aj v osobnom živote. " +
            "Ešte raz veľmi pekne ďakujem a pozdravujem. ",
        greeting: "S pozdravom",
        author: "Anna V. zo Spišskej Novej Vsi",
    },
    {
        id: 30,
        type: "2026",
        date: "23. júl 2026",
        text:
            "Včera som dostala srdiečko mám ku nemu " +
            "citový vzťah je krásne a ďakujem vám za vašu " +
            "kvalitnú prácu ste úžasne",
        greeting: "🌹♥️☘️😘🌺🌷🙏🏿🙏🏿🙏🏿",
        author: "Janka L. A.",
    },
    {
        id: 29,
        type: "2026",
        date: "20. júl 2026",
        text:
            "Milé kolegyne, ktoré sa takto starajú o to, aby uľahčili situáciu ženám v núdzi, " +
            "som vám veľmi vďačná a ďakujem za vašu namáhavú prácu. Úľava v procese uzdravovania a sila na " +
            "uzdravenie pramení práve z pocitu, že nám v tejto situácii niekto pomáha a myslí na nás. Nech pán Boh požehná " +
            "vás aj vašu prácu, prajem vám silu a zdravie pre vašu ďalšiu prácu,",
        greeting: "s vďakou a úctou",
        author: "Klára T. ..😘",
    },
    {
        id: 28,
        type: "2026",
        date: "7. júl 2026",
        text: "Ďakujem zo srdiečka za srdiečko....😘",
        greeting: " ",
        author: "Katarína K. K.",
    },
    {
        id: 27,
        type: "2026",
        date: "7. júl 2026",
        text: "Ste naozaj úžasné. Veľká vďaka Vám, zato, že nám pomáhate ♥️🥰",
        greeting: " ",
        author: "Helena P.",
    },
    {
        id: 26,
        type: "2026",
        date: "24. jún 2026",
        text: "Dnes som dostala darček, vyhrkli mi slzy, veľké ďakujem",
        greeting: "...zo srdiečka za srdiečko",
        author: "Katarína K. K.",
    },
    {
        id: 25,
        type: "2026",
        date: "18. jún 2026",
        text:
            "Chcem sa touto cestou poďakovať za Váš vankúšik. Je naozaj veľmi veľkou pomocou po operácii. Patrí Vám veľké Ďakujem ♥️ " +
            "vankúše sú veľkou pomocou pre pacientky po operácii prsníka. Tieto čarovné srdiečka len a len odporúčam.",
        greeting: " ",
        author: "Helena P.",
    },
    {
        id: 24,
        type: "2026",
        date: "16. jún 2026",
        text: "Ešte raz veeeľmi pekne ďakujem za srdiečko ..bude ma hriať jeho láska...ruky, ktoré ho vyrobili",
        greeting: "..krásny deň❤️",
        author: "Slávka H.",
    },
    {
        id: 23,
        type: "2026",
        date: "11. jún 2026",
        text:
            "Som po operácii prsníka a chcem veľmi veľmi pekne poďakovať za srdieckovy vankúš " +
            "ktorý som dostala v onkologickom ústave v Košiciach, aj s podrobným oboznámenim " +
            "o Vašej záslužnej práci. Vankúšik mi pomáha pri zotavovaní.",
        greeting: "prajem veľa zdravia a síl pri záslužnej práci.",
        author: "Ľudmila K. 🥰",
    },
    {
        id: 22,
        type: "2026",
        date: "4. jún 2026",
        text:
            "Dobrý deň. Prevzala som si akurát balíček. Ďakujem ešte raz veľmi pekne za srdiečka. " +
            "To druhé darujeme niekomu na oddelení, komu tiež pomôže a bude pripomínať, " +
            "že nie je v tejto chorobe sám. Ďakujem aj za to čo robíte a ",
        greeting: "všetko dobré Vám prajem.",
        author: "Dominika B.",
    },
    {
        id: 21,
        type: "2026",
        date: "25. máj 2026",
        text:
            "Dobrý deň Týmto sa Vám chcem z celého srdca úprimne poďakovať za vankúšik, ktorý som od Vám dostala. " +
            "Je nádherný a každý deň mi robí spoločnosť a aj so mnou spáva.  " +
            "Veľmi si vážim Vašu pomoc a darček, ktorý ste mu ušili a darovali. " +
            "Veľmi pekne Vám všetkým ďakujem za prácu, ktorú pre nás vytvárate.",
        greeting: "S hlbokou úctou a láskou ❤️❤️❤️❤️❤️❤️",
        author: "Viera C.",
    },
    {
        id: 20,
        type: "2026",
        date: "17. apríl 2026",
        text: "Dobrý deň, veľmi pekne Vám ďakujem za Váš srdiečkový vankúšik. Prajem Vám pekný deň.",
        greeting: "S pozdravom",
        author: "Slavomíra H.",
    },
    {
        id: 19,
        type: "2026",
        date: "9. február 2026",
        text: "Ďakujem veľmi pekne za úžasný vankúšik.",
        greeting: " ",
        author: "Alena B.",
    },
    {
        id: 18,
        type: "2025",
        date: "27. november 2025",
        text:
            "Dobrý večer, dostala som aj ja z nich. Super nápad, dosiahlo " +
            "srdiečko svoj ciel",
        greeting: "Ďakujem!",
        author: "Erika Š",
    },
    {
        id: 17,
        type: "2025",
        date: "17. november 2025",
        text:
            "Srdečne vítam túto skupinu a chcela by som vyjadriť svoju " +
            "úprimnú vďaku sestre Ingrid za to, že mi dala príležitosť dostať " +
            "srdcový vankúš v nemocnici po mojej operácii 😍😍😍. Pri jeho " +
            "používaní som pocítila veľkú úľavu.Je to dar, ktorý sa dotýka " +
            "srdca,a úprimná vďaka dámam, ktoré sa podieľajú na jeho " +
            "výrobe.",
        greeting: "🙏🙏🙏",
        author: "Zuzana H.",
    },
    {
        id: 16,
        type: "2025",
        date: "26. október 2025",
        text:
            "Ďakujem aj v mene chirurgického oddelenia v MI za vankúšiky, " +
            "ktoré nám boli doručené pre pacientky po oprácii prsníka",
        greeting: "🙏🙏🙏🫶",
        author: "Dagmar U.",
    },
    {
        id: 15,
        type: "2025",
        date: "12. august 2025",
        text: "Patrí vám veľká vďaka",
        greeting: "❤️❤️❤️",
        author: "Silvia R.",
    },
    {
        id: 14,
        type: "2025",
        date: "29. jún 2025",
        text:
            "Zdravím, výrobcov srdcových vankúšikov❤️ Stretli sme sa v " +
            "piatok v Košiciach pred gynekologicko-onkologickým oddelením. " +
            "Chcela by som vám veľmi poďakovať za milý darček, ktorý ste mi " +
            "dali. Je pre mňa veľkou pomocou a s láskou ho používam. " +
            "Bohužiaľ, slzy mi vbehli do očí a nemohla som vám poďakovať z " +
            "celého srdca. Bola som taká dojatá, pani s pánom priniesli nové " +
            "srdcové vankúše, ktoré sa dávajú ako darčeky všetkým ženám, " +
            "ktoré podstúpili operáciu prsníka😘 Ďakujem vám, že ste takí " +
            "dobrosrdeční ľudia, ktorí sa snažia zmierniť naše bremeno,",
        greeting: "s láskou",
        author: "Anna L. ❤️❤️❤️",
    },
    {
        id: 13,
        type: "2025",
        date: "7. máj 2025",
        text:
            "Ďakujem za srdiečkový vankúš ktorý som dostala po operácii " +
            "prsníka. Veľmi mi pomohol, počas dní, ale najmä v noci.",
        greeting: "Veľká srdečná vďaka!!!!!!",
        author: "Silvia P.",
    },
    {
        id: 12,
        type: "2025",
        date: "27. marec 2025",
        text:
            "Vďaka iniciatíve Srdiečkové vankúše - Košice, slovenskej lige " +
            "proti rakovine a maďarskej lige proti rakovine sme mohli prijať " +
            "dar pre naše pacientky. Onkologické centrum Nemocnice Penta " +
            "Hospitals Michalovce v zastúpení primárky klinickej onkológie " +
            "MUDr. Lenky Rušinovej, zdravotníkov a našej pacientky prijalo " +
            "vankúše v tvare srdca, ktoré sa prispôsobujú telu, podporia " +
            "rameno, zmiernia ťahavý pocit a lymfostázu, uľahčujú " +
            "odkašliavanie a chránia operovanú oblasť. 🤍 Srdcové vankúše " +
            "vyrábajú ženy ženám, aby cítili, že nie sú samy.",
        greeting: "Ďakujeme!",
        author: "MUDr.Lenka Rušinová",
    },
    {
        id: 11,
        type: "2024",
        date: "1. december 2024",
        text:
            "Pekný večer, Chcela by som sa Vám veľmi pekne poďakovať za " +
            "super pomôcku do života po operáciách Srdiečkove vankúše sú" +
            "každodennou súčasťou môjho života Ďakujem ❤️",
        greeting: "S pozdravom",
        author: "Lýdia F.",
    },
    {
        id: 10,
        type: "2024",
        date: "27. november 2024",
        text:
            "Dobrý deň, po minulotýždňovej operácii prsníka vo VOU v" +
            "Košiciach ma veľmi milo prekvapil darček v podobe vankúša, ktorý " +
            "si dávam pod rameno na operovanej strane a ktorý je veľmi" +
            "príjemný. Prečítala som si kto ho pripravuje a daruje a naozaj " +
            "ma to dojalo. Je to od vás veľmi milé, že myslíte na ženy, ktoré " +
            "sa nachádzajú v ťažkom období a konkrétnym skutkom zmierňujete " +
            "ich bolesť. Úprimne a z celého srdca Vám ďakujem! Nech vás za to " +
            "Pán Boh odmení!",
        greeting: "S úctou, vďakou a srdečným pozdravom",
        author: "Helena K.",
    },
    {
        id: 9,
        type: "2024",
        date: "3. október 2024",
        text:
            "obrý deň. Dnes som sa stala držiteľkou Vašeho srdiečka. Chcela" +
            "by som sa Vám poďakovať sa Vašu ušľachtilú činnosť, ktorou" +
            "pomáhate nám ženám v tomto ťažkom období. Mne sa uľavilo ako na " +
            "zdraví tak aj na duši. Klobúk dole pred Vami❤️.",
        greeting: "Ešte raz ďakujem veľmi pekne.",
        author: "R. Zuzana",
    },
    {
        id: 8,
        type: "2024",
        date: "10. júl 2024",
        text:
            "Vzácne, milé, vážené a ctené všetky ženy, ktoré ste sa " +
            "akýmkoľvek spôsobom pričinili o to, že sa srdiečkový vankúšik " +
            "dostal aj ku mne - onkologickej pacientke. Robíte úžasnú vec. Po " +
            "operácii prsníka (12.6.2024), bolo pre mňa srdiečko od Vás " +
            "nenahraditeľnou pomôckou. Neviem si predstaviť, ako by som to " +
            "bez vankúšika zvládla. Jednoducho veľmi mi pomohol. Rany sa " +
            "dobre zahojili a som pripravená na ďalšiu liečbu. Patrí Vám " +
            "obrovské ďakujem! Ďakujem Vám úprimne z celého srdiečka. Prajem " +
            "Vám veľa, veľa zdravia, lásky, šťastia a úspechov. Prosím, " +
            "pokiaľ môžte, darujte srdiečkové vankúše aj ostatným ženám, " +
            "ktoré to práve potrebujú.",
        greeting: "S pozdravom",
        author: "Ing. Jarmila T.",
    },
    {
        id: 7,
        type: "2024",
        date: "17. jún 2024",
        text:
            "A vaše vankušiky už sú aj na Kysuciach ♥️😍 Krásne gesto, dnes " +
            "už je máločo zadarmo... snáď sa informácia, že niečo také " +
            "existuje a pomáha dostane k viacerým ktorí to potrebujú.",
        greeting: " ",
        author: "Zuzana K.",
    },
    {
        id: 6,
        type: "2024",
        date: "13. jún 2024",
        text:
            "Dobrý deň dnes som dostala balík od Vás. Ďakujem pekne je to " +
            "super. Úplne to odľahčí ruku. Ste úžasné. Veľká vďaka za Vašu " +
            "prácu.",
        greeting: "S pozdravom",
        author: "Zdenka T.",
    },
    {
        id: 5,
        type: "2024",
        date: "11. jún 2024",
        text:
            "Dobrý deň, chcela by som sa Vám veľmi pekne poďakovať za " +
            "srdiečkový vankúš, ako pacientke mi veľmi pomohol. Robíte skvelú " +
            "vec a určite v tom pokračujte, je to od Vás milé gesto a veľká " +
            "pomoc pre nás pacientky. Ešte raz veľké ďakujem ❤️ .",
        greeting: "S pozdravom",
        author: "O.",
    },
    {
        id: 4,
        type: "2024",
        date: "1. marec 2024",
        text:
            "Dobrý deň, veľmi pekne ďakujem za srdiečkovy vankúš. Veľmi ma " +
            "to potešilo a verím že mi pomôže. Vážim si ľudí, ktorí pomáhajú " +
            "iným ľuďom.",
        greeting: "Ostávam s pozdravom",
        author: "G. Valéria",
    },
    {
        id: 3,
        type: "2023",
        date: "30. november 2023",
        text:
            "Milý ANJELIK!!! Našla si ma, lebo sa dostala k tebe zpráva o " +
            "mne☹️a lebo si ma chcela nájsť❤️❤️❤️Plakala som od radosti…. " +
            "Nedávno počas bezsennej noci som rozmýšľala nad tým, čo by som " +
            "mohla položiť pod boľavé rameno☹️Je neuveriteľné, že prišlo čo " +
            "tam patrí😲Nepočula som o takom niečom, ale moja fantázia ma " +
            "usmernila týmto smerom😉Dnes ho priniesla jedna kolegyňa, s " +
            "ktorou som v dennom styku… Nenachádzam slov, ale poznám tvoju " +
            "nezištnú ochotu pomôcť, tvoju dobrú dušu…. Nech ťa pán Boh " +
            "zachová takú😘Ďakujem Ti vďačným srdcom😉Dúfam, že mi pomôže v " +
            "dlhom procese uzdravenia…. Som silná, som statočná, som " +
            "bojovníčka…. Som presvedčená o uzdravení😉Veľmi veľmi pekne " +
            "ďakujem, že popri svojich tisíc ďalších povinností si našla na " +
            "mňa čas😘Láska a objatie😘😘😘",
        greeting: " ",
        author: "-",
    },
    {
        id: 2,
        type: "2023",
        date: "28. október 2023",
        text:
            "Milá Ágnes! Touto cestou by som chcela vyjadriť svoju vďačnosť " +
            "a veľmi pekne sa poďakovať za srdiečkový vankúš, ktorý používam " +
            "každý deň 🙂 Prajem veľa úspechov k vašej ďaľšej činnosti!",
        greeting: "S úctou",
        author: "F. Margitka",
    },
    {
        id: 1,
        type: "2023",
        date: "20. apríl 2023",
        text:
            "Milé srdiečkové víly, ďakujem vám všetkým za krásne vankúšové " +
            "srdiečko. Dnes som ho dostala pri cvičení ruky po včerajšej " +
            "operácii nádoru v prsníku. Je nádherný a bude mojim verným " +
            "pomocníkom 😉",
        greeting: "Vrele ďakujem",
        author: "E.😘",
    },
];
