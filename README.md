# LolalyticsLight


# Lolalytics Light

Minimalism user interface mode for lolalytics.com
JS userscript for the champion section of [lolalytics.com](https://lolalytics.com/) - adds minimalistic user interface mode. 

## Installation guide

* For the script to be deployed, the easiest way is to download userscript manager, the most popular one is Tampermonkey ([Chrome download](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=pl), [Mozilla Firefox download](https://addons.mozilla.org/pl/firefox/addon/tampermonkey/), [Opera download](https://addons.opera.com/pl/extensions/details/tampermonkey-beta/)). Popular manager alternatives: Greasemonkey, Violentmonkey and Adguard for Internet Explorer.
* Once installed, click on the manager's icon in the top-right corner of the browser and select *'Add new script'*.
* Replace sample code with the code from *'script.js'* file in this repository, save the script and here you go.

## Features

The main purpose of this script is to remove ALL of the unnecessary page elements in order to focus only on the important information.

Also, it improves readibility of runes section, to display only runes that are actually used.

How does it work?
* Runes with pick rate greater or equal to 40% -> Yellow border
* Runes with pick rate greater or equal to 15% -> Dark blue border
* Runes with pick rate greater or equal to 5% -> Gray border
* Runes with pick rate greater or equal to 1% -> Hidden winrate and pick rate values (not important)
* Runes with pick rate below 1% -> Hidden

Example based on Fiora runes as of patch 12.13:

*Before*

![scr](https://i.imgur.com/9F1uoZh.png)

*After*

![scr](https://i.imgur.com/NoDncTF.png)



## Screenshots before

![scr](https://i.imgur.com/qhK4Zta.png)

![scr](https://i.imgur.com/NOIZ99R.png)

![scr](https://i.imgur.com/mpmhKHL.png)

![scr](https://i.imgur.com/jgWpg7W.png)

![scr](https://i.imgur.com/2GHZHEY.png)

## Screenshots after

![scr](https://i.imgur.com/Jcd3Vrz.png)

![scr](https://i.imgur.com/0xMSGJ5.png)

![scr](https://i.imgur.com/OAoAdq7.png)

## Upcoming features, bugfixes

* (Maybe) Remove early items section
* (Maybe) Add script versions to GitHub releases
