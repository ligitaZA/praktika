import { useState, useEffect } from 'react';
import './App.css';
import Articles from './components/Articles';
import Header from "./components/Header";


function App() {

  const [data, setData] = useState(

    [
      {
        src: 'https://static.wixstatic.com/media/12c9c5_c8825d2343f14f9786b2f140d9de74c7~mv2.jpg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/family-having-fun-in-a-common-community-2022-04-01-22-22-42-utc.jpghttps://www.psichologijatau.lt/wp-content/uploads/aedrian-ECt01A5HZtw-unsplash-1170x508.jpg',
        name: 'Paaugliai kalba skirtinga kalba',
        paragraph1: 'Trys jaunuolių komunikacijos tipai: atvirumas, paslaptys ir melas. ',
        paragraph2: 'Dauguma tėvų sutiks, kad lengviau atsistoti ant galvos, nei susikalbėti su paaugliu. Hormonų disbalansas, pasimetimas kelyje iš vaikystės į suaugusiųjų pasaulį, protą jaukiančios pagundos ir bauginantys atradimai – toks yra paauglių gyvenimas. Tad kas galėtų juos kaltinti prasta komunikacija? Užuot tikintis, kad paaugliai staiga taps sukalbami, verčiau bandyti perprasti jų bendravimo metodus ir pamėginti rasti bendrą kalbą. ',
        paragraph3: 'Mokslininkai atliko tyrimą, siekdami geriau suprasti, kaip komunikuoja paaugliai. Atlikę apklausą tyrėjai išskyrė tris paauglių tipus: santūrūs, noriai bendraujantys ir apgaulingi. Be to, paaiškėjo, kad bendravimo tipas susijęs su alkoholio vartojimo įpročiais. '
      },
      {
        src: 'https://www.psichologijatau.lt/wp-content/uploads/jacek-dylag-jo8C9bt3uo8-unsplash-1170x508.jpg',
        name: 'Pavojingas būdas bėgti nuo vienatvės',
        paragraph1: 'Vartojimas padeda jaustis mažiau vienišiems. Tačiau kokia kaina? Jei esate linkę užmušinėti vienatvės jausmą šluodami iš parduotuvių drabužius ar užsisakinėdami į namus maistą, jūs ne vieni. Naujas tyrimas rodo, kad daugybė žmonių pirkimą taiko kaip vaistą nuo vienatvės. Tačiau tyrimo autoriai įspėja, kad toks vaistas kainuoja daugiau nei tik pinigus. ',
        paragraph2: 'Norėdami pasijusti geriau, galime pasinerti į emocinį pirkimą ir šluoti viską iš parduotuvių lentynų. Taip pat galime iš darbo pakeliui namo prisipirkti begalę nesveikų skanėstų. Arba įnikti į socialinius tinklus (tai tyrimo autoriai taip pat priskiria vartojimui, siekiant sumažinti vienatvę). ',
        paragraph3: 'Vieną vertus, vienatvę kompensuojantis vartojimas iš tikrųjų padeda trumpam užsimiršti ir pasijusti geriau. Turbūt ir patys pastebėjote, kad naujas drabužis kuriam laikui pakelia nuotaiką. Tačiau čia slypi ir nemenkos grėsmės. '
      },
      {
        src: 'https://www.psichologijatau.lt/wp-content/uploads/artem-kovalev-fk3XUcfTAvk-unsplash-1170x508.jpg',
        name: 'Ranka pasiekiama ramybė',
        paragraph1: 'Pirmieji kvėpavimo pratimai yra tūkstančių metų senumo. Kvėpavimą savo sveikatai gerinti įvairiose Rytų šalyse pasitelkdavo senovės jogai. Šiais laikais kvėpavimo pratimai rekomenduojami norint pagerinti tiek fizinę, tiek emocinę savijautą. Tačiau ar jie tikrai veikia? Negi tiesiog pripildę savo plaučius oro galime gauti apčiuopiamos naudos?',
        paragraph2: 'Jau ne vienas tyrimas parodė, kad taip. Neseniai atlikto eksperimento rezultatai atskleidė, kad net vienas penkių minučių gilaus ir lėto kvėpavimo seansas gali veiksmingai sumažinti stresą bei nerimą. Kvėpavimo pratimai naudingi ir staiga užklupus stresui, ir kaip prevencinė priemonė. O reguliariai visą savaitę mankštinantis, šis įrankis gali būti veiksmingesnis, kai jo iš tikrųjų prireiks. ',
        paragraph3: 'Gilus kvėpavimas su ilgesniu iškvėpimu padeda nusiraminti. Jis gali būti ypač naudingas prieš svarbų susitikimą, viešą kalbą ar pirmąjį pasimatymą, kai jaudinatės. Išbandę nustebsite, kad jūsų plaučiai – puikiausias įtampos valdymo įrankis. Visiškai nemokamas ir be jokių šalutinių efektų!'
      },
      {
        src: 'https://www.psichologijatau.lt/wp-content/uploads/nick-morrison-FHnnjk1Yj7Y-unsplash-1170x508.jpg',
        name: 'Planavimas suteikia saugumo',
        paragraph1: 'Stresą dėl nestabilių gyvenimiškų situacijų efektyviai mažina planavimas.',
        paragraph2: 'Gyvename laikais, kai tikrai yra dėl ko baimintis. Kaip pasisuks karas Ukrainoje? Ar su visu baisumu žiemą negrįš pandemija? Ar gebėsime likti finansiškai stabilūs, sveiki, ar išlaikysime darnius santykius su artimaisiais? Tokie ir panašūs klausimai neduoda ramybės daugybei žmonių. Nuolat nerimaudami įsisukame į streso ratą, nebelieka energijos tiesiog džiaugtis gyvenimu, nebemokame atsipalaiduoti. Ką daryti?',
        paragraph3: 'Greta daugybės streso įveikimo būdų reikėtų paminėti ir planavimą. Ne vienas tyrimas rodo, kad, planuodami savo ateitį, apmąstydami galimas situacijas ir sukurdami joms planą B, pasijuntame saugesni ir ramesni. '
      },
      {
        src: 'https://www.psichologijatau.lt/wp-content/uploads/mike-baker-3Y366aqddJ0-unsplash-1170x508.jpg',
        name: 'Kodėl verta būti optimistu?',
        paragraph1: '25 metus trukęs tyrimas parodė, kaip optimizmas veikia sveikatą ir psichologinę būseną. ',
        paragraph2: 'Dar neseniai optimizmas buvo laikomas vienareikšmiškai gera savybe. Tačiau tyrimai atskleidė, kad optimizmas gali nustelbti kritinį mąstymą, paskatinti elgtis neapgalvotai, daugiau rizikuoti, pasitikėti tais, kurie nebūtinai verti pasitikėjimo. Taigi, optimizmas turi ir gerų, ir blogų aspektų. Ar verta būti optimistu? Tai aiškinosi mokslininkai net 25 metų trukmės tyrime.',
        paragraph3: 'Tyrėjai periodiškai apklausė 984 žmones apie jų optimizmo lygį, bendrą pasitenkinimą gyvenimu, sveikatą, emocinę būklę. Mokslininkus domino, ar optimizmas yra visą gyvenimą nekintanti savybė (kartą optimistas – visada optimistas) ir kaip ši savybė veikia žmogaus psichinę bei fizinę sveikatą. '
      },
      {
        src: 'https://www.psichologijatau.lt/wp-content/uploads/edi-libedinsky-1bhp9zBPHVE-unsplash-1170x508.jpg',
        name: 'Nerimas temdo vaikystę',
        paragraph1: 'Per pandemiją vaikų nerimo lygis padvigubėjo – kaip padėti atgauti ramybę?',
        paragraph2: 'Nerimas yra vienas dažniausiai pasitaikančių psichikos sveikatos sutrikimų vaikams nuo 3 iki 17 metų amžiaus. Nuolat nerimo varginamas maždaug 1 iš 11 vaikų. Prieš pandemiją JAV atlikti tyrimai parodė, kad per pastaruosius kelerius metus vaikų nerimo lygis gerokai išaugo. Tyrėjai sako, kad prie to labai prisideda naudojimasis socialine žiniasklaida, nuolatinis informacijos apie save viešinimas ir lyginimasis su kitais. Lyg to būtų maža, nuo pandemijos pradžios vaikų nerimo lygis visame pasaulyje šoktelėjo dvigubai. Vos spėjus nuslūgti pandemijos sukeltam stresui, prasidėjo karas Ukrainoje, kuris neabejotinai didina vaikų (bei suaugusiųjų) nesaugumą ir nerimą. Kaip padėti mažiesiems atgauti vidinę ramybę?',
        paragraph3: 'Apklausa rodo, kad dauguma tėvų yra linkę prisitaikyti prie vaiko patiriamo nerimo ir kažkokiu būdu padeda jį sumažinti. Pavyzdžiui, leidžia vaikui pačiam pasirinkti, ar jis nori imtis kokių nors veiklų, ir neverčia vaiko daryti to, kas jam kelia stresą. Taip pat nerimą sumažinti padeda rutina ir pastovūs namų ritualai, pavyzdžiui, vakarienė visiems kartu tuo pačiu metu. Jei vaikas nerimauja vėlyvu paros metu, prisitaikantys tėvai gali leisti jam ilgiau pabūti kartu ar lieka jo kambaryje, kol vaikas užmiega. Kitaip tariant, prisitaikymas – tai vaiko individualių nerimo priežasčių suvokimas, pateisinimas ir visapusė pagalba nusiraminti. '
      },
      {
        src: 'https://www.psichologijatau.lt/wp-content/uploads/drew-colins-LIEQsu5JuoM-unsplash-1170x508.jpg',
        name: 'Trys vienišių savybės',
        paragraph1: 'Kiek nepageidaujamų savybių gali turėti partneris, kad būtume linkę tęsti santykius?',
        paragraph2: 'Jei jūsų partneris dėmesingas, rūpestingas, turi gerą humoro jausmą ir yra patrauklus, veikiausiai jums nelabai trukdys, kad jis yra netvarkingas. Ar bent jau trukdys ne tiek, kad nutrauktumėte santykius. Mes gebame toleruoti šiokius tokius partnerio trūkumus. Tačiau kažkur yra mūsų tolerancijos riba. Kur ji? Mokslininkai nusprendė išsiaiškinti. ',
        paragraph3: 'Tyrėjai atliko eksperimentą su daugiau kaip pusantro tūkstančio žmonių ir pavadino jį „Pasirink savo nuotykį“ (angl. Choose Your Own Adventure). Eksperimento metu žmonės skaitė įsivaizduojamo potencialaus partnerio aprašymą. Jame buvo ilgas sąrašas įvairiausių partnerio savybių. Greta malonių (tokių, kaip: draugiškas, patrauklus, rūpestingas ir kt.) buvo ir tokių, kurių niekas nenori. Tokios savybės buvo: tingumas, apsileidimas, gobšumas, nuolatinis dėmesio reikalavimas, priekabumas ir panašūs simpatijos nekeliantys bruožai. Kiekvienas potencialus įsivaizduojamas partneris turėjo skirtingą savybių rinkinį. Tiriamiesiems reikėjo pasirinkti, ar norėtų tęsti pažintį su tokiu žmogumi ir suteikti jam galimybę, ar nutraukti santykius. '
      }
    ]

  )
    useEffect(() => {
      console.log('pazymeta');
    }, [setData])
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Articles data={data} />
      </main>
    </>
  );
}

export default App;
