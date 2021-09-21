

function stringPermutations(str) {
  let chars = str.split('');
  let finished = [];
  let unfinished = [{ chars, strings: ['']}];

  while (unfinished.length){
    const { chars, strings } = unfinished.pop();

    for (let i = 0; i < chars.length; i++) {
      const c = chars[i];
      let remainingChars = [...chars]
      remainingChars.splice(i, 1);
      
      let newStrings = [];

      for (let j = 0; j < strings.length; j++) {
        const s = strings[j];

        newStrings.push(`${s}${c}`);
      }

      if (remainingChars.length){
        unfinished.push({chars: remainingChars, strings: newStrings})
      } else {
        finished.push(...newStrings);
      }
    }
  } 
  console.log(finished.join(','));
}

stringPermutations("RozSabir");