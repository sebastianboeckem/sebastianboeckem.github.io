const bubbleElem = document.querySelector('#bubble');
const finalTextArray = document.querySelector('#bubble').getAttribute('text').split('');
const currentTextArray = [];


finalTextArray.forEach((character, index) => {
  setTimeout(() => {
    if (character === '§') {
      currentTextArray.push('<br>');
    }
    else {
      currentTextArray.push(character);
    }
    document.querySelector('#bubble').innerHTML = currentTextArray.join('');
  }, 1000 + 50 * index);
});
