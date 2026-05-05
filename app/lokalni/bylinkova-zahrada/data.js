// Bylinkové zahrady – data truhlíků a bylin
// Truhlíky jsou seřazeny po řadách zleva doprava:
// Řada 0 (zadní/top): Bylinky babiček | Bazalky a sladké listy | Kvetoucí kuchyňské
// Řada 1 (přední/bottom): Voňavé středomoří | Svěží truhlík | Bylinky předků
// Všechna data jsou kompletní.

const SVEZI_BYLINKY = [
  {
    nazev: 'Pomerančová máta',
    latinsky: "Mentha × piperita var. citrata 'Orange' / Mentha 'Orange'",
    synonymum: null,
    svetlo: 'světlo, polostín',
    voda: 'střední až vyšší zálivka, půda by neměla dlouhodobě vyschnout',
    opylovaci: true,
    sklizen: 'květen až říjen',
    zivotnost: 'trvalka',
    mrazuvzdornost: 'ano, přibližně do −20 až −25 °C',
    coSeSbira: 'listy, mladé výhonky a případně kvetoucí nať',
    popis:
      'Pomerančová máta má svěží citrusovo-mátovou vůni. Hodí se do čajů, limonád, domácích sirupů, ovocných salátů, dezertů, koktejlů nebo jako aromatická ozdoba jídel. Mimo kuchyni se dá použít do vonných směsí, koupelí nebo jen jako příjemně voňavá rostlina do zahrady.\n\nPěstujte ji na světlém místě nebo v polostínu, v mírně vlhké půdě. V horku ocení pravidelnou zálivku. Nejlepší je pěstování v nádobě, protože se může rychle rozrůstat oddenky. Hodí se k meduňce, citronové verbeně, stévii nebo dalším bylinkám do nápojů. Nesázejte ji do suchého záhonu k levanduli, rozmarýnu, tymiánu nebo santolíně.',
    upozorneni:
      'Citrusové aroma bývá nejsilnější u mladých čerstvých listů. Sušením se část vůně ztrácí.',
  },
  {
    nazev: 'Máta peprná čokoládová',
    latinsky: "Mentha × piperita 'Chocolate'",
    synonymum: null,
    svetlo: 'světlo, polostín',
    voda: 'střední až vyšší zálivka, půda by měla zůstat mírně vlhká',
    opylovaci: true,
    sklizen: 'květen až říjen',
    zivotnost: 'trvalka',
    mrazuvzdornost: 'ano, přibližně do −25 °C',
    coSeSbira: 'listy, mladé výhonky a případně kvetoucí nať',
    popis:
      'Čokoládová máta má výraznou mátovou vůni s jemným sladkým až čokoládovým tónem. Hodí se do čajů, kakaa, dezertů, ovocných salátů, limonád, zmrzliny nebo jako ozdoba sladkých jídel. Mimo kuchyni je zajímavá jako aromatická rostlina do nádob a bylinkových koutů.\n\nPěstujte ji v polostínu nebo na světlém místě s dostatkem vláhy. V nádobě se kontroluje lépe než ve volném záhonu. Pravidelným zaštipováním podpoříte hustý růst a mladé aromatické listy. Hodí se k meduňce, stévii, lipii sladké, citronové verbeně nebo dalším mátám v samostatných nádobách. Nesázejte ji k suchomilným bylinkám, které potřebují méně vody.',
    upozorneni:
      'Název „čokoládová" neznamená, že chutná jako čokoláda sama o sobě. Je to spíš mátová chuť s jemným sladším tónem.',
  },
  {
    nazev: 'Mařinka vonná',
    latinsky: 'Galium odoratum',
    synonymum: null,
    svetlo: 'polostín, stín',
    voda: 'střední zálivka, půda by neměla úplně vyschnout',
    opylovaci: true,
    sklizen: 'duben až červen',
    zivotnost: 'trvalka',
    mrazuvzdornost: 'ano, přibližně do −25 °C',
    coSeSbira: 'nať a listy, nejčastěji před květem nebo na začátku kvetení',
    popis:
      'Mařinka vonná je lesní bylina s jemnou vůní, která se výrazněji rozvine po zavadnutí nebo usušení. Tradičně se používá k aromatizování nápojů, sirupů, dezertů nebo bylinných směsí. Mimo kuchyni se dříve používala do vonných sáčků, prádla nebo sušených směsí.\n\nPěstujte ji v polostínu až stínu, ideálně pod keři, pod stromy nebo v klidnější vlhčí části zahrady. Nehodí se na suché plné slunce. Může tvořit pěkný nízký porost. Hodí se k meduňce, kapradinám, lesním trvalkám nebo stínomilným bylinám. Nesázejte ji k levanduli, tymiánu, rozmarýnu nebo santolíně, protože potřebují úplně jiné podmínky.',
    upozorneni:
      'Mařinka obsahuje kumarin, který jí dává typickou vůni. Používejte ji spíše v malém množství, ne dlouhodobě a nadměrně.',
  },
  {
    nazev: 'Máta římská',
    latinsky: "nejčastěji Mentha spicata 'Roman' / Mentha spp.",
    synonymum: null,
    svetlo: 'světlo, polostín',
    voda: 'střední až vyšší zálivka, půda by neměla vysychat',
    opylovaci: true,
    sklizen: 'květen až říjen',
    zivotnost: 'trvalka',
    mrazuvzdornost: 'ano, přibližně do −20 až −25 °C',
    coSeSbira: 'listy, mladé výhonky a případně kvetoucí nať',
    popis:
      'Máta římská je aromatická máta vhodná hlavně do čajů, limonád, salátů, omáček, k masu, zelenině nebo do středomořsky laděných jídel. Chuťově bývá svěží, bylinná a méně ostrá než máta peprná. Mimo kuchyni se dá využít jako voňavá rostlina do bylinkové zahrady.\n\nPěstujte ji na světlém místě nebo v polostínu, v půdě s pravidelnou vlhkostí. Stejně jako ostatní máty se může rychle šířit, proto je vhodnější nádoba nebo kořenová bariéra. Hodí se k meduňce, pažitce, petrželi nebo dalším vlhkomilnějším bylinkám, ideálně ale odděleně. Nesázejte ji k suchomilným rostlinám, jako je levandule, tymián, rozmarýn nebo santolína.',
    upozorneni:
      'Označení „máta římská" se může v prodeji používat trochu volněji pro různé kultivary máty. Péče je ale velmi podobná jako u ostatních mát.'
  },
  {
    nazev: 'Máta jablečná',
    latinsky: 'Mentha suaveolens',
    synonymum: null,
    svetlo: 'světlo, polostín',
    voda: 'střední až vyšší zálivka, půda by měla být mírně vlhká',
    opylovaci: true,
    sklizen: 'květen až říjen',
    zivotnost: 'trvalka',
    mrazuvzdornost: 'ano, přibližně do −25 °C',
    coSeSbira: 'listy, mladé výhonky a případně kvetoucí nať',
    popis:
      'Máta jablečná má jemnější, nasládle ovocnou vůni. Hodí se do čajů, limonád, ovocných salátů, dezertů, sirupů, letních nápojů nebo jako svěží ozdoba jídel. Mimo kuchyni je příjemná jako aromatická rostlina do zahrady nebo do nádoby na balkon.\n\nPěstujte ji na světlém místě nebo v polostínu. Potřebuje pravidelnou zálivku a lépe poroste v humóznější půdě. Dobře snáší řez a rychle obrůstá. Hodí se k meduňce, citronové verbeně, stévii nebo dalším bylinkám do nápojů. Nesázejte ji do suchého záhonu k levanduli, rozmarýnu nebo tymiánu.',
    upozorneni:
      'Máta jablečná bývá jemnější než máta peprná, proto se dobře hodí i do nápojů pro ty, komu klasická máta připadá příliš ostrá.',
  },
  {
    nazev: 'Meduňka lékařská',
    latinsky: 'Melissa officinalis',
    synonymum: null,
    svetlo: 'světlo, polostín',
    voda: 'střední zálivka, půda by neměla dlouhodobě vyschnout',
    opylovaci: true,
    sklizen: 'květen až září',
    zivotnost: 'trvalka',
    mrazuvzdornost: 'ano, přibližně do −25 °C',
    coSeSbira: 'listy a mladé výhonky',
    popis:
      'Meduňka má jemnou citronovou vůni a patří mezi nejpraktičtější bylinky do čajů. Hodí se také do limonád, sirupů, ovocných salátů, dezertů, bylinkových másel nebo jako svěží doplněk k lehkým jídlům. Mimo kuchyni se tradičně používá jako uklidňující bylina do čajových směsí.\n\nPěstujte ji na světlém místě nebo v polostínu, v mírně vlhké a výživnější půdě. Pravidelným seřezáváním podpoříte mladé aromatické listy. Hodí se k mátě, pažitce, petrželi, kerblíku, šťovíku nebo citronové verbeně v nádobách. Nesázejte ji do suchého středomořského záhonu k levanduli, tymiánu, santolíně nebo rozmarýnu.',
    upozorneni:
      'Nejlepší aroma má meduňka před kvetením. Po odkvětu mohou být listy hrubší a méně voňavé, proto je dobré ji včas seřezávat.',
  },
  {
    nazev: 'Máta marocká',
    latinsky: "Mentha spicata var. crispa 'Moroccan' / Mentha spicata 'Moroccan'",
    synonymum: null,
    svetlo: 'světlo, polostín',
    voda: 'střední až vyšší zálivka, půda by neměla vyschnout',
    opylovaci: true,
    sklizen: 'květen až říjen',
    zivotnost: 'trvalka',
    mrazuvzdornost: 'ano, přibližně do −20 až −25 °C',
    coSeSbira: 'listy, mladé výhonky a případně kvetoucí nať',
    popis:
      'Máta marocká je oblíbená hlavně do čajů a nápojů. Má svěží, čistou mátovou chuť, která není tak ostrá jako máta peprná. Hodí se do marockého mátového čaje, limonád, koktejlů, salátů, jogurtových dipů nebo k ovoci.\n\nPěstujte ji na světlém místě nebo v polostínu, v půdě s pravidelnou vláhou. V horku a suchu rychle ztrácí kvalitu listů. Ideální je pěstování v nádobě, aby se nerozlezla po záhonu. Hodí se k meduňce, stévii, citronové verbeně nebo dalším bylinkám do nápojů. Nesázejte ji k levanduli, rozmarýnu, tymiánu nebo santolíně.',
    upozorneni:
      'Marocká máta je jedna z nejlepších mát na čerstvý čaj. Pokud ji budete pravidelně seřezávat, vytvoří hodně mladých jemných výhonů.',
  },
  {
    nazev: 'Máta klasnatá',
    latinsky: 'Mentha spicata',
    synonymum: null,
    svetlo: 'světlo, polostín',
    voda: 'střední až vyšší zálivka, půda by měla být mírně vlhká',
    opylovaci: true,
    sklizen: 'květen až říjen',
    zivotnost: 'trvalka',
    mrazuvzdornost: 'ano, přibližně do −25 °C',
    coSeSbira: 'listy, mladé výhonky a případně kvetoucí nať',
    popis:
      'Máta klasnatá má jemnější a sladší chuť než máta peprná. Hodí se do čajů, limonád, salátů, jogurtových omáček, k jehněčímu masu, zelenině, ovoci nebo do letních nápojů. Mimo kuchyni je vhodná jako aromatická rostlina do vlhčí části bylinkové zahrady.\n\nPěstujte ji na světlém místě nebo v polostínu v mírně vlhké půdě. Rychle se rozrůstá, proto je lepší ji držet v nádobě nebo v oddělené části záhonu. Pravidelně ji seřezávejte, aby tvořila mladé listy. Hodí se k meduňce, pažitce, petrželi nebo jiným vlhkomilnějším bylinkám, ale raději s odstupem. Nesázejte ji do suchého záhonu k tymiánu, levanduli nebo rozmarýnu.',
    upozorneni:
      'Máta klasnatá je často vhodnější do kuchyně než máta peprná, protože není tak ostrá a mentolová.',
  },
  {
    nazev: 'Šanta kočičí',
    latinsky: 'Nepeta cataria',
    synonymum: null,
    svetlo: 'světlo, polostín',
    voda: 'nízká až střední zálivka, propustná půda',
    opylovaci: true,
    sklizen: 'červen až září',
    zivotnost: 'trvalka',
    mrazuvzdornost: 'ano, přibližně do −25 °C',
    coSeSbira: 'listy, mladé výhonky a kvetoucí nať',
    popis:
      'Šanta kočičí je aromatická bylina známá hlavně tím, že silně přitahuje některé kočky. V kuchyni se běžně nepoužívá, ale tradičně se využívá do bylinných čajů. Mimo kuchyni je vhodná do přírodních záhonů, pro opylovače a samozřejmě jako rostlina pro kočky.\n\nPěstujte ji na slunném místě nebo v lehkém polostínu, v propustné půdě. Je poměrně nenáročná a snese i sušší podmínky. Po odkvětu ji můžete sestřihnout, aby znovu obrazila a zůstala kompaktní. Hodí se k levanduli, šalvěji, yzopu, mateřídoušce, dobromysli nebo santolíně. Nesázejte ji k drobným slabším rostlinám, které by mohla přerůst.',
    upozorneni:
      'Ne všechny kočky na šantu reagují stejně. Některé ji milují, jiné si jí téměř nevšimnou. Pokud ji chcete ochránit před válením a okusováním, dejte ji ze začátku do květináče nebo ji chraňte nízkou oporou.',
  },
]

export const TRUHLIKY = [
  // ─── Zadní řada (top) ────────────────────────────────────────────────────
  {
    id: 'bylinky-babicek',
    nazev: 'Bylinky našich babiček',
    barvaHex: '#4a9b4e',
    rada: 'zadni',
    bylinky: [
      {
        nazev: 'Petržel zahradní',
        latinsky: 'Petroselinum crispum',
        synonymum: 'běžná zahradní/kořenová petržel',
        svetlo: 'světlo, polostín',
        voda: 'střední zálivka, půda by neměla dlouhodobě vyschnout',
        opylovaci: true,
        sklizen: 'květen až listopad',
        zivotnost: 'dvouletka',
        mrazuvzdornost: 'ano, přibližně do −15 °C',
        coSeSbira: 'listy, nať a kořen',
        popis:
          'Petržel zahradní patří mezi základní kuchyňské bylinky a zeleniny. Nať se hodí do polévek, omáček, pomazánek, salátů, k bramborám, masu i luštěninám. Kořen se používá hlavně do vývarů, zeleninových směsí, omáček a pečené zeleniny. Mimo kuchyni má význam hlavně jako aromatická rostlina, která ve druhém roce při kvetení láká užitečný hmyz.\n\nPěstujte ji v hlubší, výživné a mírně vlhké půdě. Semena klíčí pomalu, proto je potřeba trpělivost a pravidelná vlhkost. Hodí se k rajčatům, pažitce, cibuli, česneku, salátu nebo ředkvičkám. Nesázejte ji do úplně suchého záhonu k levanduli, tymiánu nebo rozmarýnu.',
        upozorneni:
          'Petržel ve druhém roce vybíhá do květu. Po vykvetení už bývá nať tužší a méně kvalitní, proto se běžně pěstuje hlavně pro sklizeň v prvním roce.',
      },
      {
        nazev: 'Petržel salátová',
        latinsky: 'Petroselinum crispum var. crispum',
        synonymum: null,
        svetlo: 'světlo, polostín',
        voda: 'střední zálivka, pravidelně vlhká půda',
        opylovaci: true,
        sklizen: 'květen až listopad',
        zivotnost: 'dvouletka',
        mrazuvzdornost: 'ano, přibližně do −15 °C',
        coSeSbira: 'listy a nať',
        popis:
          'Petržel salátová se pěstuje hlavně pro čerstvou nať. Hodí se do salátů, polévek, pomazánek, k vajíčkům, bramborám, masu, rybám nebo do studené kuchyně. Nejlepší je čerstvá a přidaná až na závěr, aby si zachovala chuť i barvu.\n\nPěstujte ji na světlém místě nebo v polostínu, v půdě, která nebude úplně vysychat. Při pravidelném seřezávání znovu obrůstá. Hodí se k pažitce, salátu, rajčatům, ředkvičkám, cibuli nebo česneku. Nevhodná je kombinace se suchomilnými bylinkami, které potřebují méně vody.',
        upozorneni:
          'Petržel salátová je praktická do záhonu i do květináče. Pokud chcete průběžnou sklizeň, neřežte celou rostlinu najednou, ale odebírejte vnější listy.',
      },
      {
        nazev: 'Petržel hrubolistá',
        latinsky: 'Petroselinum crispum var. neapolitanum',
        synonymum: 'hladkolistá nebo italská petržel',
        svetlo: 'světlo, polostín',
        voda: 'střední zálivka, půda by měla být rovnoměrně vlhká',
        opylovaci: true,
        sklizen: 'květen až listopad',
        zivotnost: 'dvouletka',
        mrazuvzdornost: 'ano, přibližně do −15 °C',
        coSeSbira: 'listy a nať',
        popis:
          'Petržel hrubolistá, často označovaná jako hladkolistá nebo italská petržel, má výraznější chuť než kadeřavá petržel. Hodí se do salátů, těstovin, polévek, omáček, marinád, bylinkových másel a k masu nebo zelenině. V kuchyni je velmi univerzální a často se používá tam, kde chcete výraznější bylinnou chuť.\n\nPěstujte ji v propustné, výživné a mírně vlhké půdě. Snese slunce i polostín, ale v horku ocení pravidelnou zálivku. Hodí se k rajčatům, pažitce, cibuli, salátu, ředkvičkám nebo kerblíku. Nesázejte ji k rozmarýnu, levanduli, tymiánu nebo santolíně, protože tyto bylinky potřebují sušší podmínky.',
        upozorneni:
          'Hrubolistá petržel bývá chuťově silnější a v teplé kuchyni použitelnější než kadeřavá. Kadeřavá petržel je zase dekorativnější.',
      },
      {
        nazev: 'Libeček lékařský',
        latinsky: 'Levisticum officinale',
        synonymum: null,
        svetlo: 'světlo, polostín',
        voda: 'střední až vyšší zálivka, půda by neměla vysychat',
        opylovaci: true,
        sklizen: 'duben až říjen',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −25 °C',
        coSeSbira: 'listy, nať, semena a kořen',
        popis:
          'Libeček má velmi výraznou chuť připomínající polévkové koření. Hodí se do vývarů, polévek, omáček, bramborových jídel, luštěnin, marinád nebo k masu. Používejte ho spíše v menším množství, protože dokáže snadno přebít ostatní chutě. Mimo kuchyni je zajímavý i pro opylovače, pokud ho necháte vykvést.\n\nPěstujte ho v hlubší, výživné a vlhčí půdě. Je to mohutná rostlina, proto mu nechte dost prostoru. Může dorůst vysoko a časem vytvořit silný trs. Hodí se spíše na okraj záhonu nebo do samostatného místa. Dobře se snese s petrželí, pažitkou, celerem nebo vlhkomilnějšími bylinkami. Nesázejte ho těsně vedle nízkých a suchomilných bylin, jako je tymián, levandule nebo santolína.',
        upozorneni:
          'Libeček je velmi silný. Jeden větší list často stačí na celý hrnec polévky. Pokud ho pravidelně seřezáváte, obrůstá mladší a jemnější natí.',
      },
      {
        nazev: 'Koriandr setý',
        latinsky: 'Coriandrum sativum',
        synonymum: null,
        svetlo: 'světlo, polostín',
        voda: 'střední zálivka, pravidelná vlhkost bez přemokření',
        opylovaci: true,
        sklizen: 'květen až říjen',
        zivotnost: 'jednoletka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'listy, nať, květy a semena',
        popis:
          'Koriandr má výraznou chuť, kterou lidé buď milují, nebo nesnáší. Čerstvé listy se hodí do asijské, mexické a indické kuchyně, do salátů, sals, polévek, kari nebo k masu. Semena mají jinou chuť než listy, jsou citrusově kořenitá a používají se do kořenících směsí, pečiva, marinád nebo nakládané zeleniny.\n\nPěstujte ho na světlém místě, ale v horkém létě ocení polostín. Potřebuje pravidelnou vláhu, jinak rychle vybíhá do květu. Vysévejte ho postupně, protože po vykvetení už listy rychle ztrácí kvalitu. Hodí se k salátu, špenátu, petrželi, kerblíku nebo pažitce. Nesázejte ho do suchého středomořského záhonu k levanduli, tymiánu nebo rozmarýnu.',
        upozorneni:
          'Koriandr rychle vybíhá do květu, hlavně v horku a suchu. Pokud chcete hlavně listy, je lepší ho vysévat opakovaně po menších dávkách.',
      },
      {
        nazev: 'Kerblík třebule',
        latinsky: 'Anthriscus cerefolium',
        synonymum: null,
        svetlo: 'polostín',
        voda: 'střední zálivka, půda by neměla vysychat',
        opylovaci: true,
        sklizen: 'duben až červen, září až říjen',
        zivotnost: 'jednoletka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'mladé listy a nať',
        popis:
          'Kerblík má jemnou chuť připomínající kombinaci petržele a anýzu. Hodí se do salátů, polévek, omáček, bylinkových másel, k rybám, bramborám, vajíčkům nebo do francouzských bylinkových směsí. Nejlepší je čerstvý a přidaný až na závěr, protože vařením rychle ztrácí vůni.\n\nPěstujte ho spíše v polostínu a v mírně vlhké půdě. V horku a suchu rychle vybíhá do květu, proto je vhodnější pro jarní a podzimní pěstování. Hodí se k petrželi, pažitce, salátu, špenátu nebo koriandru. Nesázejte ho k suchomilným bylinkám, jako je tymián, levandule, rozmarýn nebo santolína.',
        upozorneni:
          'Kerblík je citlivý na horko. V létě často rychle vybíhá do květu, takže nejlepší sklizeň bývá na jaře a potom znovu na podzim.',
      },
      {
        nazev: 'Celer řapíkatý / listový',
        latinsky: 'Apium graveolens var. dulce / Apium graveolens var. secalinum',
        synonymum: null,
        svetlo: 'světlo, polostín',
        voda: 'vyšší zálivka, půda by neměla vysychat',
        opylovaci: true,
        sklizen: 'červenec až říjen',
        zivotnost: 'dvouletka',
        mrazuvzdornost: 'ne, snese jen slabší krátkodobý mráz přibližně do −3 až −5 °C',
        coSeSbira: 'řapíky, listy a nať',
        popis:
          'Celer řapíkatý a listový se používá hlavně v kuchyni. Řapíky se hodí do salátů, polévek, vývarů, omáček, pomazánek, stir-fry jídel nebo jako křupavá zelenina k dipům. Listový celer má výraznější aroma a používá se podobně jako petržel nebo libeček, hlavně do polévek, vývarů, omáček a zeleninových směsí.\n\nPěstujte ho ve výživné, vlhčí půdě. Celer není rostlina do suchého bylinkového záhonu. Potřebuje pravidelnou zálivku, jinak bývá tuhý, vláknitý a méně chutný. Hodí se k petrželi, pažitce, salátu, cibuli, póru nebo rajčatům. Nesázejte ho k suchomilným bylinkám, jako je levandule, tymián, rozmarýn, santolína nebo pelyněk.',
        upozorneni:
          'Celer má výraznou chuť a patří mezi častější alergeny. Pokud ho používáte při společném vaření, je dobré s tím počítat.',
      },
      {
        nazev: 'Majoránka zahradní',
        latinsky: 'Origanum majorana',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká až střední zálivka, propustná půda',
        opylovaci: true,
        sklizen: 'červen až září',
        zivotnost: 'trvalka, v našich podmínkách většinou pěstovaná jako jednoletka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'listy, mladé výhonky a kvetoucí nať',
        popis:
          'Majoránka je klasická kuchyňská bylinka s jemnou, teplou a kořenitou vůní. Hodí se hlavně do bramborových jídel, polévek, luštěnin, omáček, nádivek, mletých mas a uzenin. Mimo kuchyni se tradičně používá také do čajů a bylinných směsí.\n\nPěstujte ji na slunném a teplém místě v propustné půdě. Nemá ráda přemokření ani těžkou studenou půdu. Pravidelným zaštipováním podpoříte hustší růst. Hodí se k tymiánu, oreganu, šalvěji, bazalce nebo rozmarýnu v sušším záhonu či nádobě. Nesázejte ji k rostlinám, které potřebují stále vlhkou půdu, například k mátě, šťovíku, celeru nebo petrželi.',
        upozorneni: 'Majoránku je nejlepší sklízet těsně před květem, kdy má nejvýraznější aroma.',
      },
    ],
  },
  {
    id: 'bazalky-sladke-listy',
    nazev: 'Bazalky a sladké listy',
    barvaHex: '#2d8a7a',
    rada: 'zadni',
    bylinky: [
      {
        nazev: 'Lipie sladká',
        latinsky: 'Lippia dulcis',
        synonymum: 'aztécká sladká bylina',
        svetlo: 'světlo, polostín',
        voda: 'střední zálivka, půda by neměla vyschnout',
        opylovaci: true,
        sklizen: 'červen až říjen',
        zivotnost: 'trvalka, v našich podmínkách pěstovaná jako přenosná rostlina',
        mrazuvzdornost: 'ne',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Lipie sladká je bylina s překvapivě sladkými listy – trocha listu dokáže osladit čaj nebo limonádu bez cukru. Hodí se do nápojů, ovocných salátů, dezertů nebo jako přírodní sladidlo do domácích sirupů. Sladkost pochází z látky hernandulin, která je výraznější než u stévie.\n\nPěstujte ji na světlém až polostinném místě, v mírně vlhké půdě. Na zimu ji přeneste dovnitř na světlé okno, protože mráz nesnese. Pravidelným zaštipováním podpoříte hustý keřovitý tvar. Hodí se k stévii, citronové verbeně, meduňce nebo mátě v nádobách. Nesázejte ji do suchého záhonu k levanduli, tymiánu nebo rozmarýnu.',
        upozorneni:
          'Lipie sladká je v naší oblasti méně známá, ale stojí za vyzkoušení. Sladkost listů se liší podle odrůdy a podmínek pěstování.',
      },
      {
        nazev: 'Stévie',
        latinsky: 'Stevia rebaudiana',
        synonymum: 'sladká bylina',
        svetlo: 'světlo',
        voda: 'střední zálivka, půda by neměla dlouhodobě vyschnout',
        opylovaci: true,
        sklizen: 'červen až září',
        zivotnost: 'trvalka, v našich podmínkách pěstovaná jako přenosná rostlina',
        mrazuvzdornost: 'ne',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Stévie je přírodní sladidlo z Jižní Ameriky. Její listy jsou mnohonásobně sladší než cukr a neobsahují kalorie. Hodí se do čajů, limonád, smoothie, dezertů nebo domácích sirupů. Čerstvé listy lze žvýkat přímo nebo přidat do nápojů celé.\n\nPěstujte ji na plně slunném místě v lehčí, dobře propustné půdě. Nepřelévejte ji, ale ani nenechávejte dlouho vyschnout. Na zimu ji přeneste do tepla – je citlivá na mráz. Pravidelným zaštipováním zabráníte předčasnému kvetení a listy zůstanou sladší. Hodí se k meduňce, mátě, lipii sladké nebo citronové verbeně. Nesázejte ji k suchomilným středomořským bylinkám.',
        upozorneni:
          'Nejsladší jsou listy těsně před nebo na začátku kvetení. Po odkvětu bývají listy méně intenzivní.',
      },
      {
        nazev: 'Citronová verbena',
        latinsky: 'Aloysia citrodora',
        synonymum: 'verbena citrónová, Lippia citriodora',
        svetlo: 'světlo',
        voda: 'střední zálivka, půda nesmí dlouhodobě vyschnout',
        opylovaci: true,
        sklizen: 'červen až říjen',
        zivotnost: 'trvalka, v našich podmínkách jako přenosná rostlina nebo s ochranou',
        mrazuvzdornost: 'ne, v nádobě přenést na zimování dovnitř',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Citronová verbena má ze všech citrusových bylinek nejintenzivnější čistou citronovou vůni. Hodí se do čajů, limonád, letních koktejlů, ovocných dezertů, sirupů, bylinkových ochuceních nebo jako vonná ozdoba. Sušené listy si vůni udrží mnohem déle než meduňka.\n\nPěstujte ji na slunném a teplém místě. V nádobě ji na zimu přeneste do světlé a chladnější místnosti. Na jaře bývá poslední z bylinek, která obroste – nebojte se, když zpočátku vypadá holá. Hodí se k meduňce, mátě, stévii nebo lipii sladké. Nesázejte ji do záhonu s suchomilnými bylinami.',
        upozorneni:
          'Citronová verbena může na jaře po přezimování vypadat jako mrtvá – ale obvykle obroste. Vydržte a nestříhejte předčasně.',
      },
      {
        nazev: 'Bazalka na kmínku',
        latinsky: "Ocimum basilicum (tvarovaná forma)",
        synonymum: null,
        svetlo: 'světlo',
        voda: 'střední zálivka, půda by neměla vyschnout',
        opylovaci: true,
        sklizen: 'červen až září',
        zivotnost: 'jednoletka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Bazalka na kmínku je klasická bazalka pěstovaná do stromečkového tvaru s odlistěným stonkem a korunou nahoře. Má stejnou výraznou bazalkovou vůni a chuť jako ostatní bazalky. Hodí se do všech pokrmů, kde chcete svěží bazalkovou chuť – na pizzu, do těstovin, salátů, omáček, pesta nebo jako ozdoba talíře.\n\nPěstujte ji na plně slunném místě, chráněném před větrem. Citlivá je na chlad – nevystavujte ji teplotám pod 10 °C. Pravidelnou sklizní vrcholků udržujete tvar a bráníte předčasnému kvetení. Hodí se k ostatním bazalkám, rajčatům nebo papriky. Nesázejte ji ven brzy na jaře – počkejte, až minou mrazy.',
        upozorneni:
          'Bazalka je velmi citlivá na chlad, průvan a přímý déšť. V chladném a deštivém létě trpí více než ostatní bylinky.',
      },
      {
        nazev: 'Bazalka salátová',
        latinsky: 'Ocimum basilicum var. crispum',
        synonymum: 'velkolicá bazalka, salátová bazalka',
        svetlo: 'světlo',
        voda: 'střední zálivka, půda by neměla vyschnout',
        opylovaci: true,
        sklizen: 'červen až září',
        zivotnost: 'jednoletka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Bazalka salátová má velké, zvlněné listy, které jsou ideální na přímé použití – hodí se na caprese salát, jako obal k masu, do sendvičů nebo na pizzu. Chuť je méně intenzivní než u drobnolistých bazalek, ale o to jsou listy šťavnatější a příjemněji křehké.\n\nPěstujte ji na slunném místě v teplé, výživnější půdě. Potřebuje dostatek prostoru, protože tvoří poměrně velkou rostlinu. Pravidelně ji sklízejte a odstraňujte květní stvoly, aby dál tvořila nové listy. Hodí se k rajčatům, paprice, bazalce pravé nebo ostatním bazalkám. Nesázejte ji do stínu ani na větrné místo.',
        upozorneni:
          'Velké listy jsou krásné, ale také náchylnější k poškození déštěm nebo krupobitím. Na balkoně ji chraňte přesahem střechy nebo pergolou.',
      },
      {
        nazev: 'Bazalka pravá / obyčejná',
        latinsky: 'Ocimum basilicum',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'střední zálivka, půda by neměla vyschnout',
        opylovaci: true,
        sklizen: 'červen až září',
        zivotnost: 'jednoletka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Bazalka pravá je nejrozšířenější kuchyňská bazalka. Hodí se do těstovin, na pizzu, do salátů, omáček, pesta, k rajčatům, mozzarelle, k masu, rybám nebo jako aromatická ozdoba jídel. Nejlepší je čerstvá, přidaná až na závěr tepelné úpravy, aby si zachovala vůni.\n\nPěstujte ji na plně slunném a teplém místě, ideálně v nádobě nebo ve vyvýšeném záhonu. Citlivá je na chlad a průvan. Pravidelným odstraňováním vrcholků a květních stvolu podpoříte husté větvení a průběžnou sklizeň. Hodí se k ostatním bazalkám, rajčatům nebo paprice. Nevystavujte ji teplotám pod 10 °C.',
        upozorneni:
          'Bazalka si nepřeje chladnou zálivku ani studené ranní teploty. Nejlépe jí je ve teplém a slunném zátiší.',
      },
      {
        nazev: 'Bazalka fialová',
        latinsky: "Ocimum basilicum 'Purpurascens' / 'Dark Opal'",
        synonymum: null,
        svetlo: 'světlo',
        voda: 'střední zálivka, půda by neměla vyschnout',
        opylovaci: true,
        sklizen: 'červen až září',
        zivotnost: 'jednoletka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Bazalka fialová má výrazné tmavé listy a klasickou bazalkovou vůni. Hodí se do těstovin, salátů, omáček, k mozzarelle nebo jako dekorativní bylinka. Skvěle vypadá jako ozdoba talíře nebo přísada do bylinkového octa a oleje, kde zabarví tekutinu do krásné růžovofialové barvy.\n\nPěstujte ji stejně jako ostatní bazalky – na plném slunci, v teplé a vlhké půdě. Chlad a průvan jí škodí. Pravidelnou sklizní vrcholků udržujete hustý tvar a zabraňujete předčasnému kvetení. Hodí se k ostatním bazalkám nebo do ornamentálního bylinkového záhonu. Skvěle kontrastuje s jasně zelenými bazalkami.',
        upozorneni:
          'Fialová barva listů je nejintenzivnější na přímém slunci. Ve stínu listy postupně zelenají.',
      },
      {
        nazev: 'Bazalka citronová',
        latinsky: 'Ocimum × citriodorum',
        synonymum: 'Ocimum africanum',
        svetlo: 'světlo',
        voda: 'střední zálivka, půda by neměla vyschnout',
        opylovaci: true,
        sklizen: 'červen až září',
        zivotnost: 'jednoletka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Bazalka citronová má příjemnou kombinaci bazalkové a citronové vůně. Hodí se k rybám, mořským plodům, kuřecímu masu, do salátů, limonád, čajů, dezertů, sirupů nebo ovocných jídel. Je jemnější než klasická bazalka a dobře doplňuje citrusové chutě.\n\nPěstujte ji na plném slunci v teplé a přiměřeně vlhké půdě. Stejně jako ostatní bazalky je citlivá na chlad a průvan. Pravidelnou sklizní vrcholků podpoříte větvení a prodloužíte dobu sklizně. Hodí se k citronové verbeně, meduňce, mátě nebo ostatním bazalkám. Nesázejte ji do stínu ani do větrného místa.',
        upozorneni:
          'Citronové aroma je nejsilnější u mladých listů před začátkem kvetení. Po odkvětu vůně mírně slábne.',
      },
    ],
  },

  {
    id: 'kvetouci-kuchynske',
    nazev: 'Kvetoucí kuchyňské bylinky',
    barvaHex: '#c9793a',
    rada: 'zadni',
    bylinky: [
      {
        nazev: 'Mateřídouška',
        latinsky: 'Thymus serpyllum',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká zálivka, sušší a propustná půda',
        opylovaci: true,
        sklizen: 'květen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −25 °C',
        coSeSbira: 'kvetoucí nať, listy a mladé výhonky',
        popis:
          'Mateřídouška je nízká aromatická bylina podobná tymiánu, ale často jemnější. V kuchyni ji můžete použít k masu, zelenině, bramborám, do polévek, omáček nebo bylinkových směsí. Mimo kuchyni se tradičně používá do čajů, hlavně v období nachlazení, a je výborná také jako vonná rostlina do suchých záhonů nebo skalek.\n\nPěstujte ji na slunném, suchém a dobře propustném místě. Snese chudší půdu a nepotřebuje téměř žádné hnojení. Hodí se k tymiánu, levanduli, santolíně, šalvěji, yzopu, rozchodníkům nebo netřeskům. Nesázejte ji k vlhkomilným bylinkám, například k mátě, šťovíku, celeru nebo petrželi.',
        upozorneni:
          'Mateřídouška je velmi oblíbená u včel a čmeláků. Když kvete, je to jedna z nejlepších nízkých bylinek pro opylovače.',
      },
      {
        nazev: 'Mateřídouška citronová',
        latinsky: 'Thymus × citriodorus',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká zálivka, sušší a propustná půda',
        opylovaci: true,
        sklizen: 'květen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −15 až −20 °C',
        coSeSbira: 'listy, mladé výhonky a kvetoucí nať',
        popis:
          'Mateřídouška citronová má příjemnou citrusovou vůni. V kuchyni se hodí k rybám, kuřecímu masu, zelenině, bramborám, do marinád, čajů, limonád, sirupů nebo dezertů. Mimo kuchyni je vhodná jako voňavá nízká rostlina do záhonů, skalek a nádob.\n\nPěstujte ji na slunném a teplém místě v lehké, dobře propustné půdě. Nesnáší přemokření, hlavně v zimě. Po odkvětu ji můžete lehce sestřihnout, aby zůstala hustá. Hodí se k levanduli, šalvěji, rozmarýnu, santolíně, yzopu nebo netřeskům. Nesázejte ji k rostlinám, které potřebují více vody, například k mátě, šťovíku, petrželi nebo celeru.',
        upozorneni:
          'Citronové aroma je nejsilnější u čerstvých mladých výhonků. Sušením se část vůně ztrácí.',
      },
      {
        nazev: 'Oregano / dobromysl obecná',
        latinsky: 'Origanum vulgare',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká až střední zálivka, propustná půda',
        opylovaci: true,
        sklizen: 'červen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −25 °C',
        coSeSbira: 'listy, mladé výhonky a kvetoucí nať',
        popis:
          'Oregano je výrazná kuchyňská bylinka typická hlavně pro středomořskou kuchyni. Hodí se do rajčatových omáček, na pizzu, do těstovin, k masu, zelenině, sýrům, bramborám, do marinád a bylinkových směsí. Mimo kuchyni se tradičně používá také do čajů a je výborné pro opylovače.\n\nPěstujte ho na slunném místě v propustné půdě. Snese sušší podmínky a nemá rádo přemokření. Pravidelným seřezáváním podpoříte hustší růst a nové mladé výhonky. Hodí se k tymiánu, levanduli, šalvěji, rozmarýnu, yzopu, santolíně nebo mateřídoušce. Nesázejte ho do vlhkého záhonu k mátě, šťovíku, celeru nebo petrželi.',
        upozorneni:
          'Oregano má často nejsilnější aroma těsně před květem. Na rozdíl od mnoha jiných bylinek si dobře drží chuť i po usušení.',
      },
      {
        nazev: 'Fenykl obecný',
        latinsky: 'Foeniculum vulgare',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'střední zálivka, hlubší propustná půda',
        opylovaci: true,
        sklizen: 'červen až říjen',
        zivotnost: 'krátkověká trvalka, často pěstovaná jako jednoletka až dvouletka',
        mrazuvzdornost: 'ano, přibližně do −10 až −15 °C s ochranou',
        coSeSbira: 'listy, mladé výhonky, květy a semena',
        popis:
          'Fenykl má sladce anýzovou vůni a chuť. Jemné listy se hodí k rybám, zelenině, bramborám, do salátů, omáček, polévek nebo bylinkových směsí. Semena se používají jako koření do čajů, pečiva, marinád, nakládané zeleniny nebo k masům. Mimo kuchyni je fenykl krásná vzdušná rostlina, která při kvetení silně láká užitečný hmyz.\n\nPěstujte ho na slunném místě v hlubší, propustné a přiměřeně vlhké půdě. Je vyšší a výrazný, proto mu nechte dost prostoru. Hodí se spíše na okraj záhonu nebo jako samostatná dominantnější rostlina. Dobře se kombinuje s koprem, měsíčkem, šalvějí nebo dalšími vyššími bylinami. Nesázejte ho těsně k nízkým a slabším rostlinám, které by mohl zastínit.',
        upozorneni:
          'Fenykl se může snadno vysemeňovat. Pokud nechcete, aby se po zahradě šířil, odstřihněte květenství dříve, než semena dozrají.',
      },
      {
        nazev: 'Kopr vonný',
        latinsky: 'Anethum graveolens',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'střední zálivka, půda by neměla dlouhodobě vyschnout',
        opylovaci: true,
        sklizen: 'květen až říjen',
        zivotnost: 'jednoletka',
        mrazuvzdornost: 'ne, snese jen slabší krátkodobý chlad',
        coSeSbira: 'listy, nať, květy a semena',
        popis:
          'Kopr je výrazná kuchyňská bylina s čerstvou, lehce nasládlou vůní. Hodí se do omáček, polévek, salátů, k bramborám, rybám, okurkám, nakládané zelenině nebo do bylinkových dresinků. Semena se používají hlavně při nakládání zeleniny a do kořenících směsí.\n\nPěstujte ho na světlém místě v propustné, mírně vlhké půdě. Kopr nemá rád přesazování, proto je lepší ho vysévat přímo na místo. Pokud chcete průběžnou sklizeň natě, vysévejte ho postupně v menších dávkách. Hodí se k okurkám, salátu, cibuli, červené řepě nebo fenyklu. Nesázejte ho těsně k nízkým a slabším bylinkám, které by mohl zastínit.',
        upozorneni:
          'Kopr se snadno vysemeňuje. Pokud ho necháte dozrát, může se na zahradě další rok objevit sám.',
      },
      {
        nazev: 'Pažitka pobřežní',
        latinsky: 'Allium schoenoprasum',
        synonymum: null,
        svetlo: 'světlo, polostín',
        voda: 'střední zálivka, půda by neměla dlouhodobě vysychat',
        opylovaci: true,
        sklizen: 'březen až listopad',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −25 až −30 °C',
        coSeSbira: 'duté listy a květy',
        popis:
          'Pažitka patří mezi nejpraktičtější kuchyňské bylinky. Hodí se na chleba, do pomazánek, salátů, polévek, k bramborám, vajíčkům, sýrům, tvarohu nebo do studené kuchyně. Květy jsou jedlé a můžete je použít jako dekoraci do salátů nebo na pomazánky.\n\nPěstujte ji na světlém místě nebo v polostínu, v mírně vlhké a výživnější půdě. Pravidelným seřezáváním podpoříte nové jemné listy. Pokud trs časem zeslábne nebo příliš zhoustne, rozdělte ho a přesaďte. Hodí se k petrželi, salátu, rajčatům, mrkvi, jahodám nebo bylinkám s podobnou potřebou vláhy. Nesázejte ji do úplně suchého středomořského záhonu k levanduli, rozmarýnu nebo tymiánu.',
        upozorneni:
          'Pažitka po seříznutí dobře obrůstá. Pokud chcete hlavně jemnou nať, nenechávejte ji dlouho přestárlou a pravidelně ji sklízejte.',
      },
    ],
  },

  // ─── Přední řada (bottom) ────────────────────────────────────────────────
  {
    id: 'vonave-stredomorí',
    nazev: 'Voňavé středomoří',
    barvaHex: '#e8823d',
    rada: 'predni',
    bylinky: [
      {
        nazev: 'Šalvěj honey melon',
        latinsky: "Salvia elegans 'Honey Melon'",
        synonymum: null,
        svetlo: 'světlo',
        voda: 'střední zálivka, půda by neměla dlouhodobě vyschnout',
        opylovaci: true,
        sklizen: 'červen až říjen',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'listy, mladé výhonky a květy',
        popis:
          'Šalvěj honey melon je aromatická šalvěj s jemně ovocnou vůní, která připomíná meloun. V kuchyni ji můžete použít do čajů, domácích limonád, ovocných salátů, dezertů nebo jako jedlou ozdobu. Nejlépe funguje čerstvá, protože sušením část vůně ztrácí.\n\nPěstujte ji na světlém a teplém místě v propustné, ale ne úplně vyschlé půdě. Na rozdíl od šalvěje lékařské ocení pravidelnější zálivku. Hodí se do květináče, protože není mrazuvzdorná a na zimu ji musíte přenést dovnitř. Sázet ji můžete k bazalce, meduňce nebo mátě v nádobách, ale nedávejte ji k vyloženě suchomilným bylinkám, jako je levandule, tymián nebo santolína.',
        upozorneni:
          'Tato šalvěj je ceněná hlavně pro vůni listů a květy. V našich podmínkách ji berte spíše jako přenosnou rostlinu než jako klasickou venkovní trvalku.',
      },
      {
        nazev: 'Šalvěj lékařská tricolor',
        latinsky: "Salvia officinalis 'Tricolor'",
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká až střední zálivka, propustná půda bez přemokření',
        opylovaci: true,
        sklizen: 'květen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −10 až −15 °C s ochranou',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Šalvěj lékařská tricolor je dekorativní odrůda šalvěje s panašovanými listy. Používá se podobně jako klasická šalvěj lékařská, ale často spíše v menším množství. Hodí se k masu, do nádivek, bylinkového másla, k bramborám, luštěninám nebo do čaje. Mimo kuchyni se pěstuje hlavně jako okrasná aromatická bylina.\n\nPěstujte ji na slunném místě v lehké, propustné půdě. Nepřelévejte ji, protože přemokření a těžká půda jí škodí víc než sucho. Na jaře ji můžete lehce seříznout, aby zhoustla. Hodí se k tymiánu, levanduli, yzopu, santolíně, dobromysli nebo rozmarýnu. Nesázejte ji vedle máty, šťovíku, petržele nebo koriandru, protože ty potřebují vlhčí půdu.',
        upozorneni:
          'Panašované odrůdy bývají často méně odolné než běžná zelená šalvěj. V zimě jí pomůže chráněné místo, propustná půda a ochrana před přemokřením.',
      },
      {
        nazev: 'Šalvěj lékařská',
        latinsky: 'Salvia officinalis',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká až střední zálivka, propustná půda',
        opylovaci: true,
        sklizen: 'květen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −20 °C',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Šalvěj lékařská je výrazná aromatická bylina s kořenitou, lehce nahořklou chutí. V kuchyni se hodí hlavně k masu, rybám, bramborám, máslovým omáčkám, do nádivek, luštěnin nebo bylinkového másla. Mimo kuchyni se tradičně používá do čajů a kloktadel, hlavně při potížích v ústech a krku.\n\nPěstujte ji na slunném, teplém a sušším místě. Potřebuje propustnou půdu a nesnáší dlouhodobé přemokření. Po odkvětu nebo na jaře ji můžete lehce seříznout, aby nevyholovala a zůstala kompaktní. Hodí se k tymiánu, levanduli, rozmarýnu, santolíně, yzopu nebo dobromysli. Nesázejte ji do vlhkého záhonu k mátě, šťovíku, koriandru nebo petrželi.',
        upozorneni:
          'Šalvěj je silně aromatická bylina, proto ji používejte spíše v menším množství. U dlouhodobého vnitřního užívání nebo v těhotenství je vhodná opatrnost.',
      },
      {
        nazev: 'Tymián',
        latinsky: 'Thymus vulgaris',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká zálivka, sušší a propustná půda',
        opylovaci: true,
        sklizen: 'květen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −20 °C',
        coSeSbira: 'listy, mladé výhonky a kvetoucí nať',
        popis:
          'Tymián je jedna z nejpraktičtějších kuchyňských bylinek. Hodí se k masu, rybám, zelenině, bramborám, rajčatovým jídlům, do polévek, marinád, omáček i bylinkových směsí. Mimo kuchyni se tradičně používá do čajů, hlavně v období nachlazení.\n\nPěstujte ho na plně slunném a sušším místě. Tymián nesnáší přemokření, těžkou půdu a stojící vodu. Po odkvětu ho můžete lehce sestřihnout, aby zůstal hustý a nedřevnatěl příliš rychle. Hodí se k levanduli, rozmarýnu, šalvěji, santolíně, dobromysli nebo yzopu. Nesázejte ho k rostlinám, které potřebují hodně vody, například k mátě, šťovíku, petrželi nebo koriandru.',
        upozorneni:
          'Tymián je výborná rostlina pro opylovače. Když kvete, bývá často plný včel a čmeláků.',
      },
      {
        nazev: 'Rozmarýn',
        latinsky: 'Salvia rosmarinus',
        synonymum: 'Rosmarinus officinalis',
        svetlo: 'světlo',
        voda: 'nízká až střední zálivka, propustná půda bez přemokření',
        opylovaci: true,
        sklizen: 'květen až říjen venku, při pěstování doma celoročně',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −10 až −15 °C podle odrůdy a stanoviště',
        coSeSbira: 'jehlicovité listy a mladé výhonky',
        popis:
          'Rozmarýn je výrazná středomořská bylina s pryskyřičnou, kořenitou vůní. Hodí se k masu, bramborám, pečené zelenině, rybám, do marinád, olejů, focaccie nebo bylinkového másla. Mimo kuchyni se používá jako aromatická rostlina, do koupelí, vonných směsí nebo domácích bylinných olejů.\n\nPěstujte ho na slunném, teplém a chráněném místě v propustné půdě. V květináči potřebuje drenáž a nesmí stát ve vodě. Venku může přežít mírnější zimu, ale v nádobě je citlivější, proto je bezpečnější ho zimovat na světlém, chladném místě bez mrazu. Hodí se k levanduli, tymiánu, šalvěji, santolíně, yzopu nebo dobromysli. Nesázejte ho k vlhkomilným bylinám, jako je máta, šťovík, petržel nebo koriandr.',
        upozorneni:
          'Rozmarýn často neuhyne mrazem samotným, ale kombinací zimní vlhkosti, těžké půdy a promrznutí kořenů. Suché chráněné místo je pro něj v zimě zásadní.',
      },
      {
        nazev: 'Santolína stříbrná',
        latinsky: 'Santolina chamaecyparissus',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká zálivka, sušší a propustná půda',
        opylovaci: true,
        sklizen: 'květen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −15 až −20 °C',
        coSeSbira: 'mladé výhonky, listy a květy',
        popis:
          'Santolína stříbrná je hlavně okrasná aromatická bylina se stříbřitými listy a žlutými květy. V kuchyni se používá jen výjimečně a velmi opatrně, protože má výraznou nahořklou chuť. Vhodnější je mimo kuchyni, například do suchých vazeb, vonných sáčků nebo jako aromatická rostlina do bylinkového záhonu.\n\nPěstujte ji na slunném a suchém místě v dobře propustné půdě. Nesnáší přemokření, hlavně v zimě. Po odkvětu nebo na jaře ji můžete sestřihnout, aby zůstala kompaktní a nevyholovala. Hodí se k levanduli, tymiánu, šalvěji, yzopu, rozmarýnu nebo pelyňkům. Nesázejte ji k mátě, šťovíku, petrželi nebo jiným rostlinám, které potřebují více vláhy.',
        upozorneni:
          'Santolína je velmi dobrá do suchých, slunných a méně úrodných míst. Když ji budete příliš zalévat nebo hnojit, může ztrácet pevný tvar a hůře přezimovat.',
      },
      {
        nazev: 'Santolína rozmarýnová / olivová',
        latinsky: 'Santolina rosmarinifolia / Santolina virens',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká zálivka, sušší a propustná půda',
        opylovaci: true,
        sklizen: 'květen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −15 °C',
        coSeSbira: 'listy, mladé výhonky a květy',
        popis:
          'Santolína rozmarýnová, někdy označovaná také jako olivová, je aromatická středomořská bylina s úzkými zelenými listy. V kuchyni se používá spíše okrajově, a to jen v malém množství. Vhodnější je jako okrasná, vonná a suchomilná rostlina do bylinkového záhonu.\n\nDaří se jí na plném slunci, v lehké a propustné půdě. Potřebuje málo vody a nesnáší zimní přemokření. Pravidelným řezem ji udržíte hustou a kompaktní. Hodí se k levanduli, šalvěji, tymiánu, yzopu, pelyňku, rozmarýnu nebo dobromysli. Nevhodná je kombinace s vlhkomilnými bylinkami, například s mátou, šťovíkem, petrželí nebo koriandrem.',
        upozorneni:
          'Je vhodná i jako nízký aromatický lem záhonu. Pokud ji necháte bez řezu, může časem dřevnatět a ztrácet hezký tvar.',
      },
      {
        nazev: 'Netřesk',
        latinsky: 'Sempervivum tectorum / Sempervivum spp.',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká zálivka, velmi propustná půda',
        opylovaci: true,
        sklizen: 'květen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −25 °C i méně podle druhu',
        coSeSbira: 'listy',
        popis:
          'Netřesk je odolná sukulentní rostlina, která se tradičně pěstovala na skalkách, zídkách a střechách. V kuchyni se běžně nepoužívá. Mimo kuchyni se někdy využívají čerstvé listy podobně jako aloe, například na drobné podráždění pokožky, ale berte to spíše jako tradiční domácí použití, ne jako léčbu.\n\nPěstujte ho na slunném místě v chudé, kamenité a velmi dobře propustné půdě. Zalévejte minimálně. Největší riziko není sucho, ale přemokření. Hodí se do skalek, suchých zídek, nádob a k suchomilným rostlinám, například k mateřídoušce, tymiánu, santolíně nebo rozchodníkům. Nesázejte ho k rostlinám, které potřebují vlhkou a výživnou půdu.',
        upozorneni:
          'Netřesk vytváří dceřiné růžice, takže se postupně rozrůstá do koberců. Mateřská růžice po odkvětu odumírá, ale kolem ní obvykle zůstávají nové mladé růžice.',
      },
      {
        nazev: 'Yzop lékařský',
        latinsky: 'Hyssopus officinalis',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká až střední zálivka, propustná půda',
        opylovaci: true,
        sklizen: 'červen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −20 °C',
        coSeSbira: 'listy, mladé výhonky a kvetoucí nať',
        popis:
          'Yzop je aromatická léčivá a kuchyňská bylina s výraznou, lehce kořenitou chutí. V kuchyni se hodí v menším množství k masu, rybám, luštěninám, bramborám, do polévek, omáček nebo bylinkových směsí. Mimo kuchyni se tradičně používá do čajů, hlavně v období nachlazení.\n\nPěstujte ho na slunném místě v propustné, spíše sušší půdě. Nesnáší těžkou a trvale mokrou zeminu. Po odkvětu ho můžete seříznout, aby zůstal hustý. Hodí se k levanduli, šalvěji, tymiánu, santolíně, dobromysli, rozmarýnu nebo pelyňku. Nesázejte ho k bylinkám, které potřebují hodně vláhy, například k mátě, šťovíku, koriandru nebo petrželi.',
        upozorneni:
          'Yzop je velmi atraktivní pro včely a čmeláky. Pokud chcete bylinkový záhon pro opylovače, patří mezi dobré volby.',
      },
      {
        nazev: 'Levandule',
        latinsky: 'Lavandula angustifolia',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká zálivka, sušší a propustná půda',
        opylovaci: true,
        sklizen: 'červen až srpen',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −20 °C',
        coSeSbira: 'květy, kvetoucí nať a mladé aromatické výhonky',
        popis:
          'Levandule je aromatická bylina známá hlavně svou vůní a fialovými květy. V kuchyni ji můžete použít v malém množství do dezertů, sušenek, limonád, čajů, sirupů nebo bylinkových směsí. Mimo kuchyni se používá do vonných sáčků, koupelí, dekorací, sušených vazeb a přírodní kosmetiky.\n\nPěstujte ji na plném slunci v lehké, propustné a spíše chudší půdě. Nepřelévejte ji a nehnojte příliš. Po odkvětu ji seřízněte, ale neřežte hluboko do starého dřeva. Hodí se k rozmarýnu, tymiánu, šalvěji, yzopu, santolíně, dobromysli nebo pelyňku. Nesázejte ji k rostlinám, které potřebují vlhkou půdu, například k mátě, šťovíku, petrželi nebo koriandru.',
        upozorneni:
          'Levandule často špatně snáší hlavně zimní vlhko, ne samotný mráz. Důležitá je propustná půda a místo, kde nestojí voda.',
      },
      {
        nazev: 'Levandule na olej',
        latinsky: 'Lavandula × intermedia',
        synonymum: 'lavandin',
        svetlo: 'světlo',
        voda: 'nízká zálivka, sušší a propustná půda',
        opylovaci: true,
        sklizen: 'červenec až srpen',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −15 až −20 °C podle odrůdy a stanoviště',
        coSeSbira: 'květy a kvetoucí nať',
        popis:
          'Levandule na olej, často lavandin, se pěstuje hlavně kvůli vysokému obsahu vonných silic. Má výraznější aroma a obvykle větší vzrůst než klasická levandule lékařská. V kuchyni se používá méně často, protože může být chuťově ostřejší. Mimo kuchyni je vhodná na sušení, vonné sáčky, dekorace, domácí kosmetiku nebo výrobu levandulového oleje.\n\nPěstujte ji na slunném, suchém a vzdušném místě v propustné půdě. Vyhněte se přemokření a těžké jílovité zemině. Po odkvětu ji pravidelně seřízněte, aby nevyholovala a držela tvar. Hodí se k tymiánu, šalvěji, yzopu, santolíně, rozmarýnu, dobromysli nebo pelyňku. Nesázejte ji k vlhkomilným bylinkám, jako je máta, šťovík, koriandr nebo petržel.',
        upozorneni:
          'Lavandin obvykle dává více vonné hmoty než levandule lékařská, proto se často používá pro produkci oleje. Pro jemnější použití v kuchyni je ale vhodnější klasická levandule lékařská.',
      },
    ],
  },
  {
    id: 'svezi-predni',
    nazev: 'Svěží truhlík',
    barvaHex: '#2d8a7a',
    rada: 'predni',
    bylinky: SVEZI_BYLINKY,
  },
  {
    id: 'bylinky-predku',
    nazev: 'Bylinky našich předků',
    barvaHex: '#f2b63a',
    rada: 'predni',
    bylinky: [
      {
        nazev: 'Rýmovník',
        latinsky: 'Plectranthus amboinicus / Coleus amboinicus',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'mírná zálivka, substrát nechte mezi zálivkami lehce proschnout',
        opylovaci: true,
        sklizen: 'leden až prosinec při pěstování doma, květen až říjen venku',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Rýmovník je aromatická rostlina s výraznou vůní, která připomíná směs máty, meduňky, oregana a kafru. V kuchyni ho můžete použít v malém množství do čajů, sirupů, marinád, polévek nebo masových jídel. Mimo kuchyni se často pěstuje jako voňavá pokojová rostlina a tradičně se používá při nachlazení, například do čaje nebo k inhalaci.\n\nRostlinu pravidelně zaštipujte, aby byla hustější. Nepřelévejte ji, protože špatně snáší přemokření. Na zimu ji přenesete dovnitř na světlé místo. Hodí se spíše do samostatného květináče, protože není mrazuvzdorná. Nesázejte ji k suchomilným bylinkám, jako je levandule, rozmarýn nebo tymián, protože potřebují jiný režim zálivky.',
        upozorneni:
          'Rýmovník velmi snadno zakoření z řízku. Stačí odstřihnout zdravý výhonek a dát ho do vody nebo rovnou do substrátu.',
      },
      {
        nazev: 'Angínovník',
        latinsky: 'Iris domestica',
        synonymum: 'Belamcanda chinensis',
        svetlo: 'světlo, polostín',
        voda: 'mírná zálivka, propustná půda bez přemokření',
        opylovaci: true,
        sklizen: 'květen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −10 až −15 °C s ochranou',
        coSeSbira: 'listy',
        popis:
          'Angínovník je okrasná léčivá rostlina, která není běžnou kuchyňskou bylinkou. Tradičně se používá při potížích v krku, odtud pochází i jeho název. Listy se obvykle používají jen krátkodobě a v malém množství. V zahradě je zajímavý i díky oranžovým květům s tmavými skvrnami.\n\nPěstujte ho na teplém, světlém místě v dobře propustné půdě. V nádobě mu dopřejte drenáž, aby kořeny nestály ve vodě. Na zimu je vhodné rostlinu chránit mulčem, chvojím nebo ji pěstovat v nádobě a přenést na chráněné místo. Hodí se k šalvěji, yzopu, levanduli nebo mateřídoušce. Nesázejte ho k rostlinám, které potřebují výrazně vlhkou půdu, například k mátě, šťovíku nebo listovému celeru.',
        upozorneni:
          'Pokud máte silnou bolest v krku, horečku, čepy na mandlích nebo se stav zhoršuje, nespoléhejte se pouze na bylinky a vyhledejte lékaře.',
      },
      {
        nazev: 'Křez / řeřicha setá',
        latinsky: 'Lepidium sativum',
        synonymum: null,
        svetlo: 'světlo, polostín',
        voda: 'pravidelná vlhkost, nesmí vyschnout',
        opylovaci: true,
        sklizen: 'leden až prosinec doma, duben až říjen venku',
        zivotnost: 'jednoletka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'mladé výhonky, klíčky a mladé listy',
        popis:
          'Křez je rychle rostoucí jedlá bylinka s lehce pikantní, pepřovou chutí. Hodí se na chleba s máslem nebo pomazánkou, do salátů, k vajíčkům, bramborám, polévkám nebo do studené kuchyně. Nejlepší je čerstvý a přidává se až na závěr, aby si zachoval svěží chuť.\n\nPěstování je velmi jednoduché. Semena můžete vysít na vatu, papírovou utěrku nebo do nízké vrstvy substrátu. Důležité je udržovat je stále vlhká, ale ne přemokřená, aby nezačala plesnivět. Křez se hodí vysévat postupně každých několik dní. Venku ho můžete pěstovat mezi pomalejší zeleninou nebo bylinkami. Nehodí se na suché rozpálené místo vedle tymiánu, levandule nebo rozmarýnu.',
        upozorneni:
          'Křez patří mezi nejrychlejší rostliny pro domácí sklizeň. První výhonky můžete často sklízet už za 7 až 14 dní.',
      },
      {
        nazev: 'Třezalka tečkovaná',
        latinsky: 'Hypericum perforatum',
        synonymum: null,
        svetlo: 'světlo, polostín',
        voda: 'nízká až střední zálivka, propustná půda',
        opylovaci: true,
        sklizen: 'červen až srpen',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −25 °C',
        coSeSbira: 'kvetoucí nať',
        popis:
          'Třezalka je známá léčivá bylina, která se tradičně používá do čajů, tinktur nebo k výrobě třezalkového oleje. V kuchyni se běžně nepoužívá. V zahradě je cenná také díky žlutým květům, které lákají opylovače a dobře zapadají do přírodních bylinkových záhonů.\n\nPěstování třezalky je jednoduché. Daří se jí na slunném místě v propustné půdě. Je odolná a nenáročná, ale může se rozrůstat a vysemeňovat, proto je vhodné ji držet pod kontrolou. Hodí se k šalvěji, yzopu, dobromysli, levanduli nebo mateřídoušce. Nesázejte ji těsně vedle jemných a nízkých bylinek, které by mohla časem utlačovat.',
        upozorneni:
          'Třezalka může ovlivňovat účinky některých léků, například antidepresiv, hormonální antikoncepce, léků na srdce nebo léků na ředění krve. Pokud pravidelně užíváte léky, neužívejte třezalku vnitřně bez konzultace s lékařem nebo lékárníkem.',
      },
      {
        nazev: 'Šťovík kyselý',
        latinsky: 'Rumex acetosa',
        synonymum: null,
        svetlo: 'světlo, polostín',
        voda: 'střední až vyšší zálivka, půda by neměla dlouhodobě vysychat',
        opylovaci: false,
        sklizen: 'duben až říjen',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −25 °C',
        coSeSbira: 'mladé listy',
        popis:
          'Šťovík kyselý má svěží kyselou chuť, která připomíná citron. Hodí se do salátů, polévek, omáček, pomazánek, k bramborám, vajíčkům, sýrům nebo masu. Nejlepší jsou mladé listy, starší mohou být tužší a výrazně kyselejší.\n\nŠťovík vysaďte do hlubší, výživnější a vlhčí půdy. Při sklizni otrhávejte listy postupně a nechte rostlině část listové růžice, aby mohla znovu obrůst. Pokud nechcete, aby se vysemeňoval, odstraňujte květní stvoly. Hodí se k pažitce, petrželi, kerblíku nebo meduňce. Nesázejte ho do suchého záhonu k levanduli, rozmarýnu, tymiánu nebo santolíně.',
        upozorneni:
          'Šťovík obsahuje kyselinu šťavelovou, proto ho používejte s mírou. Opatrní by měli být hlavně lidé, kteří řeší ledvinové kameny nebo mají doporučené omezení oxalátů.',
      },
      {
        nazev: 'Ostropestřec mariánský',
        latinsky: 'Silybum marianum',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká až střední zálivka, propustná půda bez přemokření',
        opylovaci: true,
        sklizen: 'srpen až září',
        zivotnost: 'jednoletka až dvouletka',
        mrazuvzdornost: 'ne',
        coSeSbira: 'semena, případně mladé listy',
        popis:
          'Ostropestřec je výrazná léčivá rostlina známá hlavně díky semenům, která se tradičně využívají pro podporu normální funkce jater. V kuchyni se běžně používají hlavně drcená semena, například do kaší, jogurtů nebo smoothie. Mladé listy jsou jedlé, ale mají ostny, takže s nimi bývá víc práce.\n\nPěstujte ho na slunném místě v propustné půdě. Nepotřebuje příliš mnoho vody a dobře zvládá sušší podmínky. Rostlina může dorůst poměrně vysoko a zabrat dost místa, proto ji nesázejte těsně k drobným bylinkám. Hodí se spíše do okraje záhonu nebo samostatně. Dobře se snese s dalšími suchomilnějšími rostlinami, například se šalvějí, levandulí nebo pelyňky.',
        upozorneni:
          'Ostropestřec má ostré listy, proto je lepší při sklizni používat rukavice. Pokud ho necháte vysemenit, může se na zahradě objevit i další rok.',
      },
      {
        nazev: 'Pelyněk colový',
        latinsky: "Artemisia abrotanum 'Cola'",
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká zálivka, sušší a propustná půda',
        opylovaci: false,
        sklizen: 'květen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −15 až −20 °C',
        coSeSbira: 'mladé listy a výhonky',
        popis:
          'Pelyněk colový je aromatická bylina s vůní připomínající colu. V kuchyni se používá spíše zajímavostně a jen v malém množství, například do domácích limonád, čajů, sirupů nebo k aromatizování nápojů. Chuť je výrazná a bylinná, proto ho nepřidávejte příliš mnoho.\n\nNejlépe se mu daří na slunném, teplém a sušším místě. Potřebuje propustnou půdu a nesnáší dlouhodobé přemokření. Na jaře ho můžete seříznout, aby zhoustl a držel kompaktní tvar. Hodí se k levanduli, tymiánu, šalvěji, santolíně nebo rozmarýnu. Nesázejte ho k rostlinám, které potřebují vlhčí půdu, například k mátě, šťovíku, petrželi nebo koriandru.',
        upozorneni:
          'Pelyněk colový je ve skutečnosti aromatická odrůda brotanu. Vůně je často výraznější než samotná chuť, proto je lepší používat mladé výhonky a jen malé množství.',
      },
      {
        nazev: 'Pelyněk pravý',
        latinsky: 'Artemisia absinthium',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká zálivka, dobře propustná půda',
        opylovaci: false,
        sklizen: 'červen až srpen',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −25 °C',
        coSeSbira: 'nať, listy a kvetoucí vrcholky',
        popis:
          'Pelyněk pravý je velmi hořká aromatická léčivá bylina. Tradičně se používal na podporu trávení, do hořkých bylinných směsí a také při výrobě absintu nebo vermutu. Do běžné kuchyně se příliš nehodí, protože je opravdu výrazně hořký. Pokud ho použijete, tak jen velmi opatrně a v malém množství.\n\nPěstujte ho na slunném a sušším místě v propustné, spíše chudší půdě. Nepotřebuje mnoho vody a přemokření mu škodí. Na jaře je vhodné rostlinu seříznout, aby zůstala hustější. Hodí se k suchomilným bylinkám, jako je levandule, šalvěj, tymián, yzop nebo santolína. Nesázejte ho k vlhkomilným bylinám a těsně k jemným rostlinám, protože může být poměrně dominantní.',
        upozorneni:
          'Pelyněk pravý není bylina pro běžné dlouhodobé užívání. Obsahuje silně působící látky a neměl by se užívat ve větším množství, v těhotenství, při kojení ani u malých dětí.',
      },
      {
        nazev: 'Pelyněk brotan',
        latinsky: 'Artemisia abrotanum',
        synonymum: null,
        svetlo: 'světlo',
        voda: 'nízká zálivka, sušší propustná půda',
        opylovaci: false,
        sklizen: 'květen až září',
        zivotnost: 'trvalka',
        mrazuvzdornost: 'ano, přibližně do −20 °C',
        coSeSbira: 'listy a mladé výhonky',
        popis:
          'Pelyněk brotan je aromatická trvalka s výraznou bylinnou vůní. V kuchyni se dá použít jen opatrně a v malém množství, například k tučnějším masům, do bylinných směsí nebo čajů. Častěji se využívá mimo kuchyni, například jako vonná rostlina do zahrady nebo tradičně k odpuzování hmyzu.\n\nDaří se mu na slunném a teplém místě v propustné půdě. Nepřelévejte ho, protože má raději sušší podmínky. Dobře snáší řez, takže ho můžete pravidelně tvarovat a zmlazovat. Hodí se k levanduli, šalvěji, tymiánu, santolíně, yzopu nebo rozmarýnu. Nesázejte ho vedle rostlin, které potřebují hodně vláhy, například k mátě, šťovíku nebo listové petrželi.',
        upozorneni:
          'Pelyněk brotan býval dříve oblíbenou vonnou rostlinou venkovských zahrad. Jeho silné aroma může pomáhat odpuzovat některý hmyz, proto se někdy sušené větvičky dávaly do skříní nebo blízko míst k sezení.',
      },
    ],
  },
]
