function stringChop(str, size) {
 
  if (str === null || size === null || size <= 0) return [];

  const result = [];

  for (let i = 0; i < str.length; i += Number(size)) {
    result.push(str.slice(i, i + Number(size)));
  }

  return result;
}


const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));
