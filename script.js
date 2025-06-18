

function stringChop(str, size) {
  size = Number(size);

  if (str === null || str === undefined || isNaN(size) || size <= 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
const chunks = stringChop(str, size);

alert(chunks.join(","));

