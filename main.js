/**
 * Created by av186014 on 12/5/17.
 * Game rules = https://thenamegame-generator.com/the-name-game-rules.html
 */
var nameGameButton = document.getElementById("btnNameGame");

function isVowel(letter) {
    var vowels = ["a", "e", "i", "o", "u"], result = false;

    for (var i = 0; i < vowels.length; i++) {
        if (vowels[i] === letter) {
            result = true;
            break;
        }
    }

    return result;
}
var convertName = function(event) {
    var name = document.getElementById("name").value;
    var resultContainer = document.getElementById("nameGameResult");

    var isB = false, isF = false, isM = false;
    var shortName = "", output = "", firstLetter = "", bString = "bo-", fString = "fo-", mString = "mo-";

    if (name) {
        shortName = name.toLowerCase();
        firstLetter = name[0].toLowerCase();

        if (!isVowel(firstLetter)) {
            shortName = name.substr(1).toLowerCase();
        }

        isB = (firstLetter === "b");
        isL = (firstLetter === "f");
        isM = (firstLetter === "m");

        bString = (isB) ? bString : bString + "b";
        fString = (isL) ? fString : fString + "f";
        mString = (isM) ? mString : mString + "m";

        output = "<p>" + name +", " + name +", " + bString + shortName + "<br />";
        output += "Banana-fana " + fString + shortName +"<br />";
        output += "Fee-fi-" + mString + shortName + "<br />";
        output += name + "!</p>";
        resultContainer.innerHTML = output;
    } else {
        resultContainer.innerHTML = "<p>No name provided</p>";
    }
};
nameGameButton.addEventListener("click", convertName);