function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const array_facts = []
  var x = 0
  while (x < facts.length) {
    array_facts.push(`${facts[x++]}!!!`)
  }
  return array_facts
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++
  }
  while (n < 15)
  return array
}
