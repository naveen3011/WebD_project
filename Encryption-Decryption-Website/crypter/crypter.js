const logic = async (original) => {
  function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);

    let newString = firstPart + replaceChar + lastPart;
    return newString;
  }

  let s = "";
  for (let i = original.length - 1; i >= 0; i--) {
    s += original[i];
  }

  for (let index = 0; index < s.length; index++) {
    var x = s[index].charCodeAt(0);
    if (x == 32) {
      s = replaceChar(s, "*", index);
    } else if (x == 42) {
      s = replaceChar(s, " ", index);
    } else {
      var c = -1;
      if (x >= 65 && x <= 90) {
        c = s[index].charCodeAt(0) - "A".charCodeAt(0);
        // console.log(c);
        if (c >= 0 && c <= 12) {
          s = replaceChar(s, String.fromCharCode(90 - c), index);
        } else if (c > 12 && c < 26) {
          s = replaceChar(s, String.fromCharCode(65 + 25 - c), index);
        }
      } else if (x >= 97 && x <= 122) {
        c = s[index].charCodeAt(0) - "a".charCodeAt(0);
        if (c >= 0 && c <= 12) {
          s = replaceChar(s, String.fromCharCode(122 - c), index);
        } else if (c > 12 && c < 26) {
          s = replaceChar(s, String.fromCharCode(97 + 25 - c), index);
        }
      }
    }
  }
  return s;
};

const crypter = async (message) => {
  const final = await logic(message);
  return final;
};

module.exports = logic;
