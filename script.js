// ==UserScript==
// @name         Lolalytics Light
// @description  Minimalism mode
// @version      1.2.2
// @author       Ivan Pavlov
// @include      https://lolalytics.com/*
// @include      https://lolalytics.com/*
// @run-at       document-end
// ==/UserScript==

// Ewentualne todo:
    // Ukryć summonery/maxowanie/itemy po pickrate

(function() {
    'use strict';

    const waitPageLoad = async () => {
        while (true) {
            // Select all UI panels

            const loadCheckDiv = [...document.querySelectorAll("[class^=ChampionHeader_championicons__]")];
            //ChampionHeader_championicons__
            const runePickrateDivs = [...document.querySelectorAll("[class^=RuneCell_pick__]")];

            const hidePanel1 = [...document.querySelectorAll("[class^=RuneCell_games__]")];
            const hidePanel2 = [...document.querySelectorAll("[class^=CellSet_pick__]")];
            const hidePanel3 = [...document.querySelectorAll("[class^=Cell_time__")];
            const hidePanel4 = [...document.querySelectorAll("[class^=Cell_games__]")];
            const hidePanel5 = [...document.querySelectorAll("[class^=PanelHeading_games__]")];
            const hidePanel6 = [...document.querySelectorAll("[class^=PanelHeading_time__]")];
            const hidePanel7 = [...document.querySelectorAll("[class^=CellFilter_games__]")];
            const hidePanel8 = [...document.querySelectorAll("[class^=RuneHeading_games__]")];
            const hidePanel9 = [...document.querySelectorAll("[class^=SetSingle_togglespells__]")];
            const hidePanel10 = [...document.querySelectorAll("[class^=SetSingle_toggleitemset__]")];
            const hidePanel11 = [...document.querySelectorAll("[class^=SetSingle_toggleitem2__]")];

            const removePanel1 = [...document.querySelectorAll("[class^=ItemSetSelector_panel__]")];
            const removePanel2 = [...document.querySelectorAll("[class^=Filter_panel__]")];
            const removePanel3 = [...document.querySelectorAll("[class^=PanelSet_panel__]")];
            const removePanel4 = [...document.querySelectorAll("[class^=GraphLegend_legend__]")];
            const removePanel5 = [...document.querySelectorAll("[class^=Graphs_graphswrap__]")];
            const removePanel6 = [...document.querySelectorAll("[class^=Summary_quick__]")];
            const removePanel7 = [...document.querySelectorAll("[class^=ButtonSet_wrapper__]")];
            const removePanel8 = [...document.querySelectorAll("[class^=Skills_skillsbig__]")];
            const removePanel9 = [...document.querySelectorAll("[class^=TopList_toplist__]")];
            const removePanel10 = [...document.querySelectorAll("[class^=Resources_champstats__")];
            const removePanel11 = [...document.querySelectorAll("[class^=TopStats_topstats__]")];
            const removePanel12 = [...document.querySelectorAll("[class^=SimpleGraph_simplegraph__]")];
            const removePanel13 = [...document.querySelectorAll("[class^=Depth_depth__]")];
            const removePanel14 = [...document.querySelectorAll("[class^=Objectives_objectives__]")];
            const removePanel15 = [...document.querySelectorAll("[class^=Counters_set__]")];
            const removePanel16 = [...document.querySelectorAll("[class^=Skills_heading__]")];
            const removePanel17 = [...document.querySelectorAll("[class^=Skills_skillsearly__]")];
            const removePanel18 = [...document.querySelectorAll("[class^=Champion_mythic__]")];
            const removePanel19 = [...document.querySelectorAll("[class^=TabButtons_buttons__]")];
            const removePanel20 = [...document.querySelectorAll("[class^=Billboard_leaderboard__]")];
            const removePanel21 = [...document.querySelectorAll("[class^=TabButtons_line__]")];
            const removePanel22 = [...document.querySelectorAll("[class^=Any_champion__]")];
            const removePanel23 = [...document.querySelectorAll("[class^=Analysed_wrapper__]")];
            const removePanel24 = [...document.querySelectorAll("[class^=Menu_wrapper__]")];
            const removePanel25 = [...document.querySelectorAll("[class^=AdsGutter_bigright__]")];
            const removePanel26 = [...document.querySelectorAll("[class^=AdsGutter_bigleft__]")];
            const removePanel27 = [...document.querySelectorAll("[class^=Footer_wrapper__]")];
            const removePanel28 = [...document.querySelectorAll("[class^=Summary_full__]")];
            const removePanel29 = [...document.querySelectorAll("[class^=Graph_graph__]")];
            const removePanel30 = [...document.querySelectorAll("[class^=SideBarAds1_sidebar__]")];
            const removePanel31 = [...document.querySelectorAll("[class^=GraphLegend_wrapper__]")];
            const removePanel32 = [...document.querySelectorAll("[class^=SideBarAds2_sidebar__]")];
            const removePanel33 = [...document.querySelectorAll("[class^=BreadCrumbs_breadcrumb__]")];
            const removePanel34 = [...document.querySelectorAll("[class^=EarlySkills_heading__]")];
            const removePanel35 = [...document.querySelectorAll("[class^=EarlySkills_skills__]")];
            const removePanel36 = [...document.querySelectorAll("[class^=EarlySkills_data__]")];
            const removePanel37 = [...document.querySelectorAll("[class^=Footer_footer__]")];
            const removePanel38 = [...document.querySelectorAll("[class^=Summary_small__]")];
            const removePanel39 = [...document.querySelectorAll("[class^=CounterButtons_set1__]")];
            const removePanel40 = [...document.querySelectorAll("[class^=CounterButtons_set2__]")];
            const removePanel41 = [...document.querySelectorAll("[class^=HLeaderboard_leaderboard__]")];
            const removePanel42 = [...document.querySelectorAll("[class^=CircleBig_wrapper__]")];
            const removePanel43 = [...document.querySelectorAll("[class^=ChampionHeader_skills__]")];
            const removePanel44 = [...document.querySelectorAll("[class^=ChampionDescription_description__]")];
            const removePanel45 = [...document.querySelectorAll("[class^=Stats_champstats__]")];
            const removePanel46 = [...document.querySelectorAll("[class^=DamageCircle_circle__]")];

            const removeParentPanel1 = [...document.querySelectorAll("[class^=PanelHeading_counter__]")];

            // Change background image to plain gray #111111
            const backgroundImagePanel = [...document.querySelectorAll("[class^=Background_back]")];
            if(backgroundImagePanel.length > 0)
                backgroundImagePanel[0].style.backgroundImage = 'url("https://i.imgur.com/cT5l4hu.png")';

            // Hide runes that champion can't pick (eg. Teemo Aftershock)
            const unavailableRunesDivs = [...document.querySelectorAll("[class^=RuneCell_runecell__]")];
            if (unavailableRunesDivs.length > 0){
                for (const div of unavailableRunesDivs){
                    if(div.children.length == 1){
                        div.style.visibility = "hidden";
                    }
                }
            }

            // Tweak runes section
            if (loadCheckDiv.length > 0){
                for (const div of runePickrateDivs){
                    let pickrateValue = 0;
                    pickrateValue = parseFloat(div.innerHTML);

                    // Set border radius
                    div.style.borderRadius = "5px";

                    // Set borders with colors
                    if(pickrateValue >= 40.0) // 40%+
                        div.style.border = "4px solid #ff9b00"; // Yellow border
                    else if(pickrateValue >= 15.0) // 15-40%
                        div.style.border = "4px solid #0756fa"; // Dark blue border
                    else if(pickrateValue >= 5.0) // 5-15%
                        //div.style.border = "4px solid #b5caf7"; // Light blue border
                        div.style.border = "4px solid #AAAAAA"; // Gray border
                    else if(pickrateValue >= 1.0){ // 1-5%
                        div.parentNode.children[1].style.visibility = "hidden"; // Hide winrate
                        div.parentNode.children[2].style.visibility = "hidden"; // Hide pickrate
                    }
                    else if(pickrateValue < 1.0) // <1%
                        div.parentNode.style.visibility = "hidden"; // Hide all runes
                }
                //break;

                hideDivs(hidePanel1);
                hideDivs(hidePanel2);
                hideDivs(hidePanel3);
                hideDivs(hidePanel4);
                hideDivs(hidePanel5);
                hideDivs(hidePanel6);
                hideDivs(hidePanel7);
                hideDivs(hidePanel8);
                hideDivs(hidePanel9);
                hideDivs(hidePanel10);
                hideDivs(hidePanel11);

                removeDivs(removePanel1);
                removeDivs(removePanel2);
                removeDivs(removePanel3);
                removeDivs(removePanel4);
                removeDivs(removePanel5);
                removeDivs(removePanel6);
                removeDivs(removePanel7);
                removeDivs(removePanel8);
                removeDivs(removePanel9);
                removeDivs(removePanel10);
                removeDivs(removePanel11);
                removeDivs(removePanel12);
                removeDivs(removePanel13);
                removeDivs(removePanel14);
                removeDivs(removePanel15);
                removeDivs(removePanel16);
                removeDivs(removePanel17);
                removeDivs(removePanel18);
                removeDivs(removePanel19);
                removeDivs(removePanel20);
                removeDivs(removePanel21);
                removeDivs(removePanel22);
                removeDivs(removePanel23);
                removeDivs(removePanel24);
                removeDivs(removePanel25);
                removeDivs(removePanel26);
                removeDivs(removePanel27);
                removeDivs(removePanel28);
                removeDivs(removePanel29);
                removeDivs(removePanel30);
                removeDivs(removePanel31);
                removeDivs(removePanel32);
                removeDivs(removePanel33);
                removeDivs(removePanel34);
                removeDivs(removePanel35);
                removeDivs(removePanel36);
                removeDivs(removePanel37);
                removeDivs(removePanel38);
                removeDivs(removePanel39);
                removeDivs(removePanel40);
                removeDivs(removePanel41);
                // removeDivs(removePanel42);
                removeDivs(removePanel43);
                removeDivs(removePanel44);
                removeDivs(removePanel45);
                removeDivs(removePanel46);



                removeParentDivs(removeParentPanel1);
            }
            await new Promise(runePickrateDivs => setTimeout(runePickrateDivs, 100));
        }
}
waitPageLoad();

function removeDivs(divs){
    for(const div of divs){
        div.style.display = "none";
    }
}

function removeParentDivs(divs){
    for(const div of divs){
        div.parentNode.style.display = "none";
    }
}

function hideDivs(divs){
    for(const div of divs){
        div.style.visibility = "hidden";
    }
}
})();
