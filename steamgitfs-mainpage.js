// ==UserScript==
// @name        steamgitfs-mainpage
// @namespace   https://github.com/krystiangorecki/steamgifts-userscripts/
// @author      krystiangorecki
// @icon        https://cdn.steamgifts.com/img/favicon.ico
// @match       http://www.steamgifts.com/
// @match       https://www.steamgifts.com/
// @match       https://www.steamgifts.com/giveaways/search*
// @run-at      document-end
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant       GM_addStyle
// @grant       none
// @version     2019.06.31
// @updateURL   https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgitfs-mainpage.js
// @downloadURL https://raw.githubusercontent.com/krystiangorecki/steamgifts-userscripts/master/steamgitfs-mainpage.js
// ==/UserScript==

var BEGINNING = '.page__heading'; //'.pinned-giveaways__outer-wrap';

var desiredTitlesRegexp = new RegExp('Slipstream|Dex|The Room|Saints Row|S\.T\.A\.L\.K\.E\.R\.|SpellForce|Wandersong|Secret Files|Disciples|Earth 21|Duskers|Moonlighter|911 Operator|Learn Japanese To Survive|Bulletstorm|Shadow Warrior 2|Paratopic|Frozen Cortex|ISLANDERS|Last Inua|1954 Alcatraz|Earth 21|Blackguards|Lifeless Planet|Diaries of a Spaceport Janitor|Party Hard|Hello Neighbor|Goetia|F\.E\.A\.R\.|SUNLESS SEA|Yakuza Kiwami 2|11-11 Memories Retold|UNLOVED|Sanitarium|F-117A Nighthawk Stealth Fighter|^Sky$|Shape of the World|Sea of Solitude|Scorn|Rite of Ilk|Contraband Police|Pedestrian|Ether One|The Last Night|The Occupation|Little Big Adventure|Project Highrise|Pang Adventures|The Last Express|Heliborne|Postmen Of Horizon|Cuphead|House Party|White Night|Mars: War Logs|Niche |Late Shift|The First Tree|PC Building Simulator|Blues and Bullets|A Normal Lost Phone|Rise of Insanity|ShadowSide|Sherlock Holmes|while True: learn|The Detail|Gothic|Age of Wonders|RESIDENT EVIL|The Last Door|Bad Mojo|Else Heart\.Break|Domina|Leviathan: The Last Day of the Decade|Yesterday|Crashbots|Tom Clancy|The Invisible Hours|Downfall|Grimm|Shadow Bug|while True|Mainlining|Kathy Rain|Shadwen|Jagged Alliance|Zen Bound|^Everything$|A Vampyre Story|Crazy Machines|Unbox|Crashday|The Long Reach|Castlevania|The Elder Scrolls|Tower Wars|Lost Horizon|Sundered|Sniper Elite|Infested Planet|Shadowrun|The King\'s Bird|Yakuza 0|Wolfenstein|Dead Rising|Homeworld|Plague Inc|TASTEE|Race The Sun|Breaking Good|Assassin\'s Creed|Return of the Obra Dinn|Mutant Year Zero|GRIS|Thief Simulator|Tiny Echo|Visage|King\s Bird|INSIDE|Peregrin|Detention|Edge of Twilight|Seven: The Days Long Gone|Decay: THe Mare|TimeLock|Four Sided Fantasy|The Piano|Q\.U\.B\.E|Pinstripe|Watch This|Ancient Planet Tower Defense|Atlantis|The Free Ones|Dead Secret|The Bard\'s Tale|Lock Parsing 2|Dungeons 3|Among the Sleep|The Surge|observer_|Distrust|Tokyo 42|Rain World|Beholder|Ignorance is Strength|Elegy for a Dead World|Owlboy|FarSky|King\'s Bounty|Stacking|Dungeon Siege|Ceville|Hard Reset Redux|Antichamber|20181027|Rebel Galaxy|Kentucky Route Zero|Old Man\'s Journey|Gremlins, Inc|Back from Hell|The Sexy Brutale|LISA|We Were Here Too|Hollow Knight|Darkest Dungeon|The Old City|Yesterday Origins|Super Cloudbuilt|Black The Fall|Moon Hunters|Bird Game|Silence|Shadow Man|Monstrum|Skullgirls|Forward to the Sky|Sam & Max|Prophour23|STAR WARS|Star Wars|Battle Chef|Original Journey|20180917|BloodRayne|The Final Station|Monaco|BioShock|Serial Cleaner|Gunpoint|The Tiny Bang Story|Just Cause|SOMA|Torment|Little Nightmares|Figment|The Journey Down|Staxel|Dishonored|Pathologic|Mark of the Ninja|FTL: Faster Than Light|The Music Machine|The Longest Journey|Beat The Game|Lost In Space|Meadow|Oknytt|Darksiders|Far Cry|SAWKOBAN|20180907|Bridge Constructor Portal|The Void|Thirty Flights|Rust|The Long Journey Home|Wasteland|Shadow Tactics|The Floor is Jelly|Good Robot|Cloudbuilt|Resident Evil|Wizardry|Turok|RUNNING WITH RIFLES|DreadOut|RimWorld|Sudeki|GemCraft|We Are The Dwarves|Deployment|Ultimate General|How to Survive|White Noise|Dead Age|Mysterium|Teleglitch|35MM|Civilization|Wasteland|GT Legends|Ticket to Ride|Tiltagon|Icewind Dale|Painkiller|Mortal Kombat|Injustice|AER Memories of Old|Worms|Dead by Daylight|Deus Ex|Deadlight|^Bounce$|Turing Test|Kerbal|Heroes of Annihilated Empires|The Walking Dead|MONSTER HUNTER|^DUSK$|Grey Goo|Space Hulk|DuckTales|Larry|Airport Madness|Factorio|Etherlords|Ashes of the Singularity|Sniper Elite|Sins of a Solar Empire|Devil Daggers|Cities in Motion|Broken Sword|12 is Better Than 6|The Wolf Among Us|WRC|Space Pilgrim|This War of Mine|Anomaly|Call of Juarez|Overcooked|Sacred|DISTRAINT|Berseria|Munin|Kona|DOOM|Shuyan|Stronghold|Fallout|Memoria|Unwritten|Into the Breach|Getting Over It|SteamWorld|Risen|XCOM|Sacred|Strife|Oddworld|DARK SOULS|Call of Duty|Dirt Rally|Project CARS|NieR|TellTale|Gray Matter|The Deadly Tower of Monsters|Hotline Miami|Murder Mystery Adventure|Secret Ponchos|Rock of Ages|Chernobyl Commando|rFactor|Ghost Warrior|Samorost|Chronicles of Mystery|I Have No Mouth, and I Must Scream|Frostpunk|Final Fantasy|FINAL FANTASY|Etherlords Bundle|The Gate of Firmament|Styx|Advent Rising|Patent9|Reprisal Universe|Prey|Rune Classic|Lara Croft|Pillars of Eternity|Borderlands|observer|METAL GEAR|Frederic|Dark Souls|Majesty|Windward|Prototype|SUPERHOT|Gorky|Space HUlk|Warhammer|Metal Gear|System Shock|Heroes of Might|Isolation|Song of the Deep|Grand Theft|Endless|Mafia|Syberia|My Name is Addiction|Final Fantasy|DmC|Turmoil|Norwood|Monkey Island|Republique|Zeno Clash|Tacoma|Max Payne|Ryse|Styx|Cognition|Ken Follet|Toren|Deadlight|Carmageddon|^Collapse$|Grimrock|DiRT Rally|Gabriel Knight|RUINER|Batman|Rainbow Six|Deponia|Force Unleashed|Manhunt|Noire|Doom |Gorky|Serious Sam|Dark Souls|Uncertain|Firewatch');

function isDesired(e){
    var name = $(e).find('.giveaway__heading__name')[0];
    var result = name !==undefined && desiredTitlesRegexp.test(name.text);
    return result;
}

var nextPageNumber;
(function() {
    'use strict';
    sgStart();
})();

function sgStart(){
    //debugger;
    //sgRemoveAds();
    sgSetNextPageNumber();
    //sgRemoveEntered();
    sgShowPromoted();
    sgBetterFonts();
    sgSort();
    sgRemoveEnteredButton();
    sgGotoLoadNextPageButton();
    sgAddLoadNextPageButton();
}

// ustawia początkowy numer kolejnej strony na podstawie numeru obecnej
function sgSetNextPageNumber(){
    var currentPageNumber = getQueryVariable('page');
    // alert(currentPageNumber);
    nextPageNumber = parseInt(currentPageNumber) + 1;
}

function sgShowPromoted(){
    // rozwijam zwinięte giveawaye, bo po moim sortowaniu trafią tam te najciekawsze
    // $('.pinned-giveaways__button').click();	//przestało działać, ale wersja poniżej działa
    $('.pinned-giveaways__inner-wrap--minimized').removeClass('pinned-giveaways__inner-wrap--minimized');
}

function sgSort(){
    // alert('sgSort');
    // var start = new Date().getTime();


    // więcej niż 1 kopia(posiada tekst "Copies") do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        console.log($(a));
        // debugger;
        $(a).find('.giveaway__heading__thin').each(function (n, b) {
            var isCopiesElement = $(b).text().indexOf("Copies")!= -1;
            if(isCopiesElement &&!isDesired(a)) {
                $('.giveaway__row-outer-wrap:first').prepend(a);
            }
        });
        console.log($(a));
    });

    // level 1 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('1')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // level 2 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('2')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // level 3 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('3')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // level 4 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(!isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('4')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });


    // WSZYSTKIE poszukiwane tytuły do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(isDesired(a)){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // POSZUKIWANE LEVELE do przodu
    // poszukiwany level 1 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('1')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // poszukiwany level 2 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('2')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // poszukiwany level 3 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('3')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // poszukiwany level 4 do przodu
    $('.giveaway__row-outer-wrap').each(function (i, a) {
        if(isDesired(a) && $(a).find('.giveaway__column--contributor-level').text().indexOf('4')>0 ){
            $('.giveaway__row-outer-wrap:first').prepend(a);
        }
    });

    // var end = new Date().getTime();
    // alert("Sorted in " + (end-start) + "ms");
}

function blockButton(){
    var button = $('#nextPageButton').first();
    button.css('text-decoration','line-through');
    button.attr('disabled','');
}

function unblockButton(){
    var button = $('#nextPageButton').first();
    button.css('text-decoration','');
    button.removeAttr('disabled');
}

function sgLoadAnotherPage1(){
    blockButton();
    // alert("start sgLoadAnotherPage1");
    $.ajax ( {
        type:       'GET',
        url:       'https://www.steamgifts.com/giveaways/search?page='+nextPageNumber,
        dataType:   'html',
        success:    function (data) {
            //debugger;
            var $page = $(data);
            var $elements = $page.find('.giveaway__row-outer-wrap');
            //var $first = $('.giveaway__row-outer-wrap').first();
            var $last = $('.giveaway__row-outer-wrap').last();
            $elements.insertAfter($last);
            // po pobraniu ponownie upiększam i ponownie sortuję
            // alert('sortuję ponownie');
            sgRemoveEntered();
            sgBetterFonts();
            $('#nextPageButton').parent().hide();
            sgSort();
            $('#nextPageButton').parent().show();
            nextPageNumber++;
            sgRefreshButtonNumber();
            unblockButton();
        }
    } );
}

// poprawki wizualne czcionek na stronie
function sgBetterFonts(){
    // alert("sgBetterFonts");

    // zwiększam czcionkę dla Level 234+
    var values = document.querySelectorAll("div[title='Contributor Level']");
    // alert(values.length);
    for (var i = 0; i < values.length; ++i) {
        var item = values[i];
        if(item.innerHTML.indexOf('4+')>0){
            item.style="font-size: 20px;";
        }else if(item.innerHTML.indexOf('3+')>0){
            item.style="font-size: 16px;";
        }else if(item.innerHTML.indexOf('2+')>0){
            item.style="font-size: 14px;";
        }
    }
    // pogrubiam jeśli więcej kopii
    values = document.querySelectorAll(".giveaway__heading__thin");
    // alert(values.length);
    for (var i = 0; i < values.length; ++i) {
        var item = values[i];
        if(item.innerHTML.indexOf('opies')>0){
            item.style="font-size: 16px; font-weight: bold; margin-left: 90px;  ";
        }
    }
}

// dodaje na stronie przycisk do pobierania kolejnej strony
function sgAddLoadNextPageButton() {
    var loadNextPageButton = document.createElement("input");
    loadNextPageButton.setAttribute("type", "button");
    loadNextPageButton.setAttribute("id", "nextPageButton");
    loadNextPageButton.setAttribute("style", "width:20%;");
    loadNextPageButton.onclick = sgLoadAnotherPage1;
    $(BEGINNING).parent().prepend(loadNextPageButton);
    sgRefreshButtonNumber();
}

// dodaje na stronie przycisk do pobierania kolejnej strony
function sgGotoLoadNextPageButton() {
    var loadNextPageButton = document.createElement("a");
    loadNextPageButton.text="goto page " + nextPageNumber;
    loadNextPageButton.setAttribute("href", "https://www.steamgifts.com/giveaways/search?page="+nextPageNumber);
    loadNextPageButton.setAttribute("id", "gotoNextPageButton");
    $(BEGINNING).parent().prepend(loadNextPageButton);
}

// dodaje na stronie przycisk do usuwania tych w których biorę udział
function sgRemoveEnteredButton() {
    var removeEnteredButton = document.createElement("input");
    removeEnteredButton.setAttribute("type", "button");
    removeEnteredButton.setAttribute("style",  "width:20%");
    removeEnteredButton.setAttribute("value",  "removeEntered");
    removeEnteredButton.setAttribute("id", "removeEnteredButton");
    removeEnteredButton.onclick = sgRemoveEntered;
    $(BEGINNING).parent().prepend(removeEnteredButton);
}

// Usuwa z DOM giveawaye, w których brałem udział.
function sgRemoveEntered() {
    //$('.is-faded').remove();
    $('.is-faded').each(function (i, a) {
        $(a).remove();
    });
}

// Usuwa reklamy.
function sgRemoveAds() {
    $('.sidebar__mpu').remove();
}

//aktualizuje labelkę na przycisku
function sgRefreshButtonNumber() {
    $('#nextPageButton').val("L O A D   P A G E " + nextPageNumber);
    $('#gotoNextPageButton').text("goto page " + nextPageNumber);
    $('#gotoNextPageButton').attr("href", "https://www.steamgifts.com/giveaways/search?page="+nextPageNumber);
}

// pobiera parametr page z query stringa
function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(1);
}
//alert('full script loaded');
