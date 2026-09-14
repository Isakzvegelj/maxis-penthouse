/* Maxis Penthouse Bled — English / Slovenian language toggle */
(function () {
  'use strict';
  var KEY = 'maxis_lang';

  /* Slovenian strings. English lives in the HTML as the default. */
  var SL = {
    /* nav */
    nav_apartment: 'Apartma',
    nav_gallery: 'Galerija',
    nav_tour: 'Virtualni ogled',
    nav_availability: 'Razpoložljivost',
    nav_reviews: 'Ocene gostov',
    nav_location: 'Lokacija',
    nav_guide: 'Blejski vodič',
    nav_weather: 'Vreme na Bledu',
    nav_planner: 'Bled planer',
    planner_eyebrow: 'Bled planer',
    planner_h1: 'Uporabni kraji v bližini',
    planner_lead: 'Praktičen lokalni zemljevid za lažje načrtovanje bivanja.',
    planner_nearby: 'V bližini Maxis Penthouse',
    planner_dashboard_h2: 'Načrtuj majhne podrobnosti',
    planner_note: 'Rezultati prihajajo iz OpenStreetMap in se lahko spreminjajo. Odpiralni čas preveri neposredno.',
    planner_weather_link: 'Preveri vreme',
    planner_search_label: 'Išči po Bledu',
    planner_search_placeholder: 'restavracija, pekarna, izposoja koles …',
    planner_search_button: 'Išči po zemljevidu',
    planner_loading: 'Iščemo uporabne kraje …',
    planner_source: 'Kartografski podatki · OpenStreetMap prek Photona/Overpass · informativno.',
    planner_links_eyebrow: 'Uradne povezave za Bled',
    planner_links_h2: 'Razišči naprej',
    planner_bled_tourism: 'Turizem Bled',
    planner_bled_tourism_detail: 'Uradne informacije o znamenitostih, dogodkih in obisku →',
    planner_castle: 'Blejski grad',
    planner_castle_detail: 'Odpiralni čas, vstopnice in zgodba gradu →',
    planner_vintgar: 'Soteska Vintgar',
    planner_vintgar_detail: 'Načrtuj obisk ene najboljših poti v okolici →',
    planner_experiences: 'Doživetja ob jezeru',
    planner_experiences_detail: 'Čolni na otok, sprehodi, razgledi in sezonske ideje →',
    nav_check: 'Preveri razpoložljivost',
    nav_book: 'Rezerviraj',
    nav_home: 'Domov',

    /* hero (index) */
    hero_eyebrow: 'Blejsko jezero · Slovenija',
    hero_h1: 'Razkošen penthouse na Bledu — korak od jezera',
    hero_lead: 'Svetel enosobni penthouse za dve osebi v središču Bleda — zasebni balkon, brezplačno parkiranje in jezero le streljaj stran.',

    /* hero (guide) */
    guide_hero_eyebrow: 'Maxis Penthouse · Vodič za goste',
    guide_hero_h1: 'Kaj početi na Bledu',
    guide_hero_lead: 'Od gradu do otoka, od soteske do jezera — tukaj je nekaj predlogov, kako kar najbolje izkoristiti svoj obisk.',

    /* buttons */
    btn_check: 'Preveri razpoložljivost',
    btn_book: 'Rezerviraj',
    btn_view_gallery: 'Poglej galerijo',
    btn_open_maps: 'Odpri v zemljevidih',
    btn_like_dates: 'Ti je všeč? Preveri datume',
    btn_ready_book: 'Pripravljen na rezervacijo?',
    btn_check_dates: 'Preveri razpoložljivost za svoje datume',
    btn_book_direct: 'Rezerviraj neposredno',
    btn_prefer_booking: 'Raje Booking.com? Rezerviraj tam',
    btn_send: 'Pošlji povpraševanje',
    btn_send_guide: 'Pošlji — pomagajte mi načrtovati pot',

    /* facts */
    fact_bedroom: 'Spalnica',
    fact_guests: 'Gostje',
    fact_bathroom: 'Kopalnica',
    fact_parking: 'Parkirna mesta',

    /* live stay information */
    live_eyebrow: 'Načrtuj obisk Bleda',
    live_h2: 'Nekaj bolj uporabnega kot brošura',
    live_desc: 'Informacije v živo za načrtovanje dneva — brez pošiljanja podatkov ali poverilnic.',
    live_weather_title: 'Bled danes',
    live_currency_title: 'Občutek cene',
    live_holiday_title: 'Naslednji slovenski praznik',
    live_air_title: 'Kakovost zraka',
    live_uv_title: 'UV zaščita',
    live_rain_title: 'Možnost dežja',
    live_wind_title: 'Veter',
    live_cloud_title: 'Oblačnost',
    live_note: 'Predstavitvena integracija · podatki so informativni in ne nadomeščajo našega rezervacijskega koledarja.',

    /* weather page */
    weather_eyebrow: 'Vreme na Bledu',
    weather_h1: 'Načrtuj teden ob jezeru',
    weather_lead: 'Sedemdnevna napoved, dnevna svetloba in kakovost zraka za tvoj obisk Bleda.',
    weather_back: 'Nazaj na Maxis Penthouse',
    weather_tools_eyebrow: 'Orodja za načrtovanje Bleda',
    weather_forecast: 'Napoved za naslednjih 7 dni',
    weather_air_title: 'Kakovost zraka danes',
    weather_air_detail: 'Informativni podatek za načrtovanje sprehodov in izletov.',
    weather_source_note: 'Podatki v živo · informativni prikaz z javnih API-jev; rezervacijski koledar ostaja merodajen.',

    /* about */
    about_eyebrow: 'Apartma',
    about_h2: 'Penthouse, ustvarjen za počasna jutra',
    about_p1: 'V najvišjem nadstropju na Prešernovi cesti 15 je ta enosobni penthouse poln toplih lesenih tal, strešnih oken in zasebnega balkona s pogledom na vrtove in hribe nad Bledom.',
    about_p2: 'Zbudi se ob strešnih oknih, polnih slovenske svetlobe, s kavo stopi na balkon in v nekaj minutah pridi do jezera. Po dnevu veslanja do otoka ali pohoda na grad se vrni v prijetno ohlajen prostor s klimatsko napravo, mirno spalnico in lastnim parkirnim mestom spodaj.',
    about_p3: 'Kuhinje ni — načrtno. Blejske pekarne, kavarne in restavracije so le nekaj minut stran, jutra pa se tu začnejo s kavo na balkonu, ne s posodo.',
    about_cta: 'Preveri razpoložljivost za svoje datume →',

    /* gallery */
    gallery_eyebrow: 'Galerija',
    gallery_h2: 'Hiša &amp; penthouse',
    gallery_cta: 'Ti je všeč? Preveri svoje datume',

    /* virtual tour */
    tour_eyebrow: 'Virtualni ogled',
    tour_h2: 'Poglej v notranjost, še preden prispeš',
    tour_desc: 'Razišči 360° pogled na Maxis Penthouse in si ustvari občutek za prostor od doma.',
    tour_2_title: 'Pogled na penthouse',
    tour_open: 'Odpri ogled čez celoten zaslon ↗',

    /* amenities */
    am_eyebrow: 'Kaj je vključeno',
    am_h2: 'Udobje',
    am_parking: 'Parkiranje',
    am_parking_1: '✓ Brezplačno parkiranje za 2 avtomobila',
    am_climate: 'Hlajenje',
    am_climate_1: '✓ Klimatska naprava',
    am_climate_2: '✓ Strešna okna',
    am_outdoor: 'Na prostem',
    am_outdoor_1: '✓ Zasebni balkon s pogledom na vrt in hribe',
    am_sleep: 'Spanje',
    am_sleep_1: '✓ 1 spalnica · za 2 osebi',
    am_sleep_2: '✓ 1 kopalnica',
    am_work: 'Delo',
    am_work_1: '✓ Wi-Fi',
    am_note: 'Brez kuhinje — blejske kavarne in restavracije so le kratek sprehod stran (<a href="bled-guide.html">oglej si naš vodič</a>).',

    /* availability */
    av_eyebrow: 'Preveri datume',
    av_h2: 'Razpoložljivost',
    av_desc: 'Koledar v živo — kar vidiš, je v realnem času. Poletni vikendi se najhitreje zapolnijo.',

    /* pricing */
    pr_eyebrow: 'Cene',
    pr_h2: 'Cenik',
    pr_desc: 'Sezonske cene — turistična taksa in strošek čiščenja se prikažeta ob koncu rezervacije.',

    /* reviews */
    rev_eyebrow: 'Ocene gostov',
    rev_h2: 'Kaj pravijo gostje',
    rev_hint: 'Vsaka ocena je iz resničnega bivanja — <a href="https://www.booking.com/hotel/si/maxis-penthouse-with-castle-view.sl.html" target="_blank" rel="noopener">preberi več na našem Booking.com profilu</a>.',
    rev_scroll_hint: 'Podrsaj levo ali desno za več ocen →',
    rev_source: 'Ocena na Booking.com',

    /* location */
    loc_eyebrow: 'Lokacija',
    loc_h2: 'V središču Bleda, le streljaj od jezera',
    loc_street: '<strong>Prešernova cesta 15, 4260 Bled, Slovenija</strong>',
    loc_1: 'Kratek sprehod do Grajskega kopališča',
    loc_2: 'Sprehod do Blejskega gradu in otoka',
    loc_3: 'Kavarne, pekarne in restavracije v bližini',
    loc_4: 'Zasebno parkirišče za 2 avtomobila — poleti je parkiranje na Bledu omejeno',
    loc_5: '~35 km od Letališča Jožeta Pučnika (LJU)',

    /* faq */
    faq_eyebrow: 'Pogosta vprašanja',
    faq_h2: 'Pogosta vprašanja',
    faq1_q: 'Ali ima penthouse kuhinjo?',
    faq1_a: 'Ne — penthouse nima kuhinje. Na Bledu so odlične kavarne, pekarne in restavracije le kratek sprehod stran, z veseljem pa ti priporočimo naše najljubše. Na voljo je aparat za pripravo kave.',
    faq2_q: 'Ali je parkiranje res brezplačno?',
    faq2_a: 'Da — na voljo imaš 2 zasebni parkirni mesti brez doplačila. Poleti je parkiranje na Bledu omejeno, zato je to prava prednost.',
    faq3_q: 'Kako daleč je do Blejskega jezera?',
    faq3_a: 'Kratek sprehod. Glavno kopališče na Grajskem je od penthousea oddaljeno le nekaj minut hoje.',
    faq4_q: 'Kdaj sta prihod in odhod?',
    faq4_a: 'Prijava je mogoča od 15.00, odjava do 10.00. Zgodnejša prijava ali poznejša odjava sta mogoči po dogovoru.',
    faq5_q: 'Ali obstaja turistična taksa ali strošek čiščenja?',
    faq5_a: 'Turistična taksa (~2–3,50 € na gosta na noč) in strošek čiščenja (40 €) se prikažeta ob koncu rezervacije v našem rezervacijskem sistemu.',
    faq6_q: 'Ali so dovoljeni hišni ljubljenčki?',
    faq6_a: 'Hišni ljubljenčki in kajenje niso dovoljeni — tako penthouse za vsakega gosta ostane svež.',
    faq7_q: 'Kakšna je politika odpovedi?',
    faq7_a: 'Prožna. Podrobnosti so prikazane ob rezervaciji v našem koledarju.',
    faq8_q: 'Ali je WiFi dovolj hiter za delo na daljavo?',
    faq8_a: 'Da — penthouse ima zanesljiv WiFi, primeren za videoklice in delo na daljavo.',

    /* book */
    book_eyebrow: 'Rezerviraj svoje bivanje',
    book_h2: 'Načrtuj svoje bivanje',
    book_bdirect: 'Rezerviraj neposredno',
    book_lead: 'Koledar v realnem času, takojšnja potrditev in neposreden stik z nami — brez posrednika.',
    book_f1: 'Garancija najboljše cene',
    book_f2: 'Brezplačna odpoved',
    book_f3: 'Takojšnja potrditev',
    book_note: 'En apartma, en koledar — ko so tvoji termini zasedeni, so oddani.',

    /* contact */
    ct_eyebrow: 'Kontakt',
    ct_h2: 'Pošlji nam povpraševanje',
    ct_intro: 'Vprašanja o datumih, cenah ali okolici? Izpolni obrazec in odgovorili ti bomo — rezervacija ni potrebna. Pišeš nam lahko tudi neposredno po e-pošti.',
    ct_name: 'Ime',
    ct_name_ph: 'Tvoje ime',
    ct_email: 'E-pošta',
    ct_email_ph: 'ti@email.si',
    ct_dates: 'Datumi bivanja (neobvezno)',
    ct_dates_ph: 'npr. 12–17. julij',
    ct_msg: 'Tvoje sporočilo',
    ct_msg_ph: 'Povej nam, kaj želiš izvedeti — razpoložljivost, cene, okolico, karkoli.',
    ct_hp: 'Pusti to polje prazno',
    ct_sent: 'Hvala! Tvoje povpraševanje je bilo sprejeto.',
    ct_sent2: 'Hvala! Odprla se bo tvoja e-poštna aplikacija s pripravljenim povpraševanjem — ali pa nam piši na <a href="mailto:__TO__">__TO__</a>.',
    ct_email_us: 'Ali nam piši neposredno na ',

    /* footer */
    ft_address: 'Prešernova cesta 15, 4260 Bled, Slovenija',
    ft_book: 'Rezervacija',

    /* sticky bar */
    st_check: 'Preveri razpoložljivost',
    st_book: 'Rezerviraj',

    /* guide page */
    g_intro1: 'Od gradu do otoka, od soteske do jezera — na Bledu ne zmanjka zanimivih dejavnosti. Če se še odločaš, <strong><a href="index.html">kje ostati na Bledu</a></strong>, je naš penthouse le kratek sprehod od vsega na tem seznamu.',
    g_intro2: 'Cene preverjene julija 2026 — pred obiskom preveri na uradnih straneh.',
    g_eyebrow1: 'Glavne zanimivosti',
    g_h1: 'Lokacije, ki jih moraš videti',
    g_castle_h: 'Blejski grad',
    g_castle_p: 'Na pečini 130 metrov nad jezerom stoji Blejski grad, eden najstarejših gradov v Sloveniji. Obišči muzej, tiskarno, vinsko klet in uživaj v panorami jezera ter Julijskih Alp.',
    g_castle_tip: '🎫 ~17 € vstopnina · 20 min hoje od penthousea ali 5 min vožnje',
    g_island_h: 'Blejski otok in cerkev',
    g_island_p: 'S tradicionalno <em>pletno</em> se odpelji do otoka, preštej 99 kamnitih stopnic, pozvoni na zvonec želja in razišči cerkev Marijinega vnebovzetja. Klasična blejska izkušnja.',
    g_island_tip: '🛶 Pletna ~18 € povratno · Najem veslaškega čolna od ~15 €/uro',
    g_vintgar_h: 'Soteska Vintgar',
    g_vintgar_p: '1,6 km dolga lesena pot spremlja reko Radovno skozi osupljivo apnenčasto sotesko s slapovi, tolmuni in smaragdno vodo. To je ena najlepših poti v Sloveniji.',
    g_vintgar_tip: '🚶 ~10 € vstopnina · 5 min vožnje od penthousea',
    g_beach_h: 'Kopanje v jezeru &amp; plaže',
    g_beach_p: 'Grajsko kopališče (le nekaj korakov od penthousea) je glavno kopališče. Poleti je voda topla in čista. Za mirnejši kotiček se odpravi na zahodni breg ali na plažo Mala Zaka.',
    g_beach_tip: '🏊 Brezplačno · Rešilni jopiči na stojnicah za izposojo',
    g_cycle_h: 'Kolesarjenje okoli jezera',
    g_cycle_p: '6 km dolga pot obkroži celotno jezero — lahkotna vožnja s čudovitimi razgledi. Izposoja koles je na voljo po vsem mestu. Za sproščen tempo s postanki za fotografije si vzemi 30–40 minut.',
    g_cycle_tip: '🚴 Najem kolesa ~10–15 €/uro · Ravno, lahko površje',
    g_winter_h: 'Zimski športi',
    g_winter_p: 'Grajsko kopališče se pozimi spremeni v zunanje drsališče. Bližnje smučišče Vogel ponuja smučanje z razgledom na jezero s pobočij. Proge za tek na smučeh so na voljo tudi okoli jezera.',
    g_winter_tip: '🎿 Smučarska karta Vogel ~45 €/dan · 20 min vožnje',
    g_cta1: 'Ostani korak od vsega tega — <a href="index.html#book">preveri razpoložljivost v apartmaju Maxis Penthouse</a>.',
    g_day_eyebrow: 'Izleti',
    g_day_h: 'Razišči okolico Bleda',
    g_bohinj_h: 'Bohinjsko jezero',
    g_bohinj_p: 'Največje stalno jezero v Sloveniji, 25 km od Bleda. Je tišje in bolj divje od Bleda, z odličnimi možnostmi za kopanje in pohodništvo ter bližnjim slapom Savica.',
    g_bohinj_tip: '🚗 ~25 min vožnje · Brezplačno parkiranje',
    g_ljubljana_h: 'Ljubljana',
    g_ljubljana_p: 'Očarljiva slovenska prestolnica je le kratka vožnja stran. Razišči staro mestno jedro, Ljubljanski grad, osrednjo tržnico in slavni Zmajski most. Odlično za pol dneva ali večerni izlet.',
    g_ljubljana_tip: '🚗 ~40 min vožnje · Na voljo je tudi avtobus',
    g_triglav_h: 'Narodni park Triglav',
    g_triglav_p: 'Edini slovenski narodni park je tik pred vrati. Odpravi se do slapa Savica, razišči dolino reke Soče ali pa se preizkusi s pohodom na Triglav.',
    g_triglav_tip: '🥾 Vstop v Bohinju · Veliko poti za vse stopnje',
    g_cta2: 'Iz apartmaja Maxis Penthouse v središču Bleda se zlahka odpraviš na vse te izlete — <a href="index.html#book">preveri svoje datume</a>.',
    g_help_eyebrow: 'Lahko pomagamo',
    g_help_h: 'Načrtuj svoj popoln dan',
    g_help_intro: 'Ne veš, kaj početi? Z veseljem ti pomagamo načrtovati pot, priporočimo restavracije, rezerviramo dejavnosti ali uredimo prevoz. Samo vprašaj.',
    g_name: 'Ime',
    g_name_ph: 'Tvoje ime',
    g_email: 'E-pošta',
    g_email_ph: 'ti@email.si',
    g_dates: 'Datumi bivanja',
    g_dates_ph: 'npr. 12–17. julij',
    g_interests: 'Kaj te zanima?',
    g_i_hiking: 'Pohodništvo',
    g_i_swimming: 'Kopanje',
    g_i_food: 'Hrana &amp; vino',
    g_i_culture: 'Kultura',
    g_i_cycling: 'Kolesarjenje',
    g_i_relax: 'Sprostitev &amp; savna',
    g_i_family: 'Družinam prijazno',
    g_i_winter: 'Zimski športi',
    g_msg: 'Kaj bi še posebej rad izvedel?',
    g_msg_ph: 'Priporočila za restavracije, rezervacija čolna, organizacija taksija ...',
    g_contact: 'Ali pa nam piši neposredno:',

    /* lightbox / misc */
    lb_aria: 'Pregledovalnik slik',
    lb_close: 'Zapri'
  };

  /* capture original (English) html for restoring */
  var phOrig = {};
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.setAttribute('data-i18n-en', el.innerHTML);
    var k = el.getAttribute('data-i18n');
    if (k) {} /* keyed by attribute */
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
    phOrig[el.getAttribute('data-i18n-ph')] = el.getAttribute('placeholder') || '';
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    phOrig['aria:' + el.getAttribute('data-i18n-aria')] = el.getAttribute('aria-label') || '';
  });

  function currentLang() {
    var saved = localStorage.getItem(KEY);
    if (saved === 'sl' || saved === 'en') return saved;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.indexOf('sl') === 0 ? 'sl' : 'en';
  }

  function apply(lang) {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var k = el.getAttribute('data-i18n');
      if (lang === 'sl' && SL[k] !== undefined) {
        el.innerHTML = SL[k];
      } else {
        el.innerHTML = el.getAttribute('data-i18n-en') || el.innerHTML;
      }
    }
    var phEls = document.querySelectorAll('[data-i18n-ph]');
    for (var j = 0; j < phEls.length; j++) {
      var pe = phEls[j];
      var pk = pe.getAttribute('data-i18n-ph');
      pe.setAttribute('placeholder', lang === 'sl' && SL[pk] !== undefined ? SL[pk] : phOrig[pk]);
    }
    var aEls = document.querySelectorAll('[data-i18n-aria]');
    for (var m = 0; m < aEls.length; m++) {
      var ae = aEls[m];
      var ak = ae.getAttribute('data-i18n-aria');
      ae.setAttribute('aria-label', lang === 'sl' && SL[ak] !== undefined ? SL[ak] : (phOrig['aria:' + ak] || ''));
    }
    document.documentElement.setAttribute('lang', lang);
    /* update toggle label */
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-label', lang === 'sl' ? 'Switch to English' : 'Preklopi v slovenščino');
      var t = btn.querySelector('[data-lang-label]');
      if (t) t.textContent = lang === 'sl' ? 'EN' : 'SI';
    });
    localStorage.setItem(KEY, lang);
    window.dispatchEvent(new CustomEvent('maxis:languagechange', { detail: { lang: lang } }));
  }

  document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(currentLang() === 'sl' ? 'en' : 'sl');
    });
  });

  window.maxisT = function (lang) { apply(lang); };
  window.maxisLang = function () { return currentLang(); };

  /* Mobile back-to-top control */
  var backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.type = 'button';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.innerHTML = '&#8593;';
  document.body.appendChild(backToTop);
  function updateBackToTop() { backToTop.classList.toggle('visible', window.scrollY > 300); }
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  updateBackToTop();

  apply(currentLang());
})();
