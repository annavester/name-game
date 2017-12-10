/**
 * Created by av186014 on 12/5/17.
 * Game rules = https://thenamegame-generator.com/the-name-game-rules.html
 */
var nameGameButton = document.getElementById('btnNameGame');

function isVowel(letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u'],
    result = false;

  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === letter) {
      result = true;
      break;
    }
  }
  return result;
}

var convertName = function(event) {
  var name = document.getElementById('name').value,
    resultContainer = document.getElementById('nameGameResult'),
    isB = false,
    isF = false,
    isM = false,
    shortName = '',
    output = '',
    firstLtr = '',
    bStr = 'bo-',
    fStr = 'fo-',
    mStr = 'mo-';

  if (name) {
    shortName = name.toLowerCase();
    firstLtr = name[0].toLowerCase();

    if (!isVowel(firstLtr)) {
      shortName = name.substr(1).toLowerCase();
    }

    isB = firstLtr === 'b';
    isF = firstLtr === 'f';
    isM = firstLtr === 'm';

    bStr = isB ? bStr : bStr + 'b';
    fStr = isF ? fStr : fStr + 'f';
    mStr = isM ? mStr : mStr + 'm';

    output = '<p>' + name + ', ' + name + ', ' + bStr + shortName + '<br />';
    output += 'Banana-fana ' + fStr + shortName + '<br />';
    output += 'Fee-fi-' + mStr + shortName + '<br />';
    output += name + '!</p>';
    resultContainer.innerHTML = output;
  } else {
    resultContainer.innerHTML = '<p>No name provided</p>';
  }
};

var handleKeypress = function(event) {
  if (event.which === 13) {
    convertName();
  }
};

nameGameButton.addEventListener('click', convertName);
document.addEventListener('keypress', handleKeypress);
