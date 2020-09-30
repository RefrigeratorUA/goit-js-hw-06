// Test.assertEquals(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
// Test.assertEquals(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
// Test.assertEquals(order(""), "")

// const strToArray = function (str) {
//   const arr = str.split(' ');
//   console.log(arr);
//   for (let i = 0; i < arr.length; i += 1) {
//     for (const item of arr[i]) {
//       const a = Number(item) ? Number(item) : false;
//       if (a) {
//         arr[i] = a + arr[i];
//         break;
//       }
//     }
//   }
//   arr.sort();

//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i].slice(1);
//   }
//   return arr.join(' ');
// };

// const sortStr = strToArray('4of Fo1r pe6ople g3ood th5e the2');
// console.log(sortStr);

// function anagrams(word, words) {
//   const arr = [];
//   const str = word.split('').sort().join('');
//   for (const item of words) {
//     const a = item.split('').sort().join('');
//     if (str === a) arr.push(item);
//   }
//   return arr;
// }

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// //['aabb', 'bbaa']

// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// //['carer', 'racer']

// console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));
// //[]

function zero() {
  const args = arguments[0];
  if (args) {
    switch (args[1]) {
      case 'plus':
        return 0 + args[0];
      case 'minus':
        return 0 - args[0];
      case 'times':
        return 0 * args[0];
      case 'dividedBy':
        return parseInt(0 / args[0]);
    }
  }
  return 0;
}
function one() {
  const args = arguments[0];
  if (args) {
    switch (args[1]) {
      case 'plus':
        return 1 + args[0];
      case 'minus':
        return 1 - args[0];
      case 'times':
        return 1 * args[0];
      case 'dividedBy':
        return parseInt(1 / args[0]);
    }
  }
  return 1;
}
function two() {
  const args = arguments[0];
  if (args) {
    switch (args[1]) {
      case 'plus':
        return 2 + args[0];
      case 'minus':
        return 2 - args[0];
      case 'times':
        return 2 * args[0];
      case 'dividedBy':
        return parseInt(2 / args[0]);
    }
  }
  return 2;
}
function three() {
  const args = arguments[0];
  if (args) {
    switch (args[1]) {
      case 'plus':
        return 3 + args[0];
      case 'minus':
        return 3 - args[0];
      case 'times':
        return 3 * args[0];
      case 'dividedBy':
        return parseInt(3 / args[0]);
    }
  }
  return 3;
}
function four() {
  const args = arguments[0];
  if (args) {
    switch (args[1]) {
      case 'plus':
        return 4 + args[0];
      case 'minus':
        return 4 - args[0];
      case 'times':
        return 4 * args[0];
      case 'dividedBy':
        return parseInt(4 / args[0]);
    }
  }
  return 4;
}
function five() {
  const args = arguments[0];
  if (args) {
    switch (args[1]) {
      case 'plus':
        return 5 + args[0];
      case 'minus':
        return 5 - args[0];
      case 'times':
        return 5 * args[0];
      case 'dividedBy':
        return parseInt(5 / args[0]);
    }
  }
  return 5;
}
function six() {
  const args = arguments[0];
  if (args) {
    switch (args[1]) {
      case 'plus':
        return 6 + args[0];
      case 'minus':
        return 6 - args[0];
      case 'times':
        return 6 * args[0];
      case 'dividedBy':
        return parseInt(6 / args[0]);
    }
  }
  return 6;
}
function seven() {
  const args = arguments[0];
  if (args) {
    switch (args[1]) {
      case 'plus':
        return 7 + args[0];
      case 'minus':
        return 7 - args[0];
      case 'times':
        return 7 * args[0];
      case 'dividedBy':
        return parseInt(7 / args[0]);
    }
  }
  return 7;
}
function eight() {
  const args = arguments[0];
  if (args) {
    switch (args[1]) {
      case 'plus':
        return 8 + args[0];
      case 'minus':
        return 8 - args[0];
      case 'times':
        return 8 * args[0];
      case 'dividedBy':
        return parseInt(8 / args[0]);
    }
  }
  return 8;
}
function nine() {
  const args = arguments[0];
  if (args) {
    switch (args[1]) {
      case 'plus':
        return 9 + args[0];
      case 'minus':
        return 9 - args[0];
      case 'times':
        return 9 * args[0];
      case 'dividedBy':
        return parseInt(9 / args[0]);
    }
  }
  return 9;
}

function plus() {
  //   console.log('hi');
  return [arguments[0], 'plus'];
}
function minus() {
  return [arguments[0], 'minus'];
}
function times() {
  return [arguments[0], 'times'];
}
function dividedBy() {
  return [arguments[0], 'dividedBy'];
}

console.log(seven(times(five())));
//35
console.log(four(plus(nine())));
//13
console.log(eight(minus(three())));
//5
console.log(three(dividedBy(seven())));
//3
