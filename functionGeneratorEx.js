function* arreyIterator(arrey1, arrey2) {
  let returnVal = '';
  let pos = 1;
  let nextOutIndex = 0;
  for (let i of arrey1) {
    returnVal += i.toString();
    if (arrey2[nextOutIndex] == pos) {
      yield returnVal;
      pos = 1;
      nextOutIndex++;
      returnVal = '';
    } else {
      pos++;
    }
  }
}

const formatMobileNo = number => {
  const numberArrey = number.toString().split('');
  if (numberArrey.length === 10) {
    const item = arreyIterator(numberArrey, [3, 3, 4]);
    return `(${item.next().value}) ${item.next().value}-${item.next().value}`;
  }
  return number;
};

const unFormatMobileNo = formatedMobile => {
  return formatedMobile.match(/[0-9]/g).join('');
};

for (let i of arreyIterator([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 3, 4])) {
  console.log(i)
}

var item = arreyIterator([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 3, 4]);
item.next();

// a liabrary for mobile numbers
// https://github.com/catamphetamine/libphonenumber-js


async function test1() {
  try {
    console.log('test 1 Ok');
  } catch (error) {
    throw new Error({error:'TestError1'});
  }
}

async function test2() {
  try {
    console.log('test 1 Not Ok');
    // throw new Error('test 2 error');
  } catch (error) {
    throw new Error({error:'TestError2'});
  }
}

async function test3() {
  try {
    console.log('test 1 Ok');
  } catch (error) {
    throw new Error({error:'TestError3'});
  }
}

Promise.all([test1(),test2(),test3()]).then(values => {
  console.log('values', values);
}).catch(error => { 
  console.log('error', JSON.stringify(error))
});

Promise.all([test1(),test2(),test3()]).then(function(values) {
  try{
  console.log('values', values);
  }catch(e){
  console.log('errorPro', JSON.stringify(e))
  }  
  
  }).catch(error => { 
    console.log('error', JSON.stringify(error))
  });