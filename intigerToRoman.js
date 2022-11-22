const intToRoman = (num) => {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  for (key in map) {
    const repeatCounter = Math.floor(num / map[key]);

    if (repeatCounter !== 0) {
      result += key.repeat(repeatCounter);
    }

    num %= map[key];

    if (num === 0) return result;
  }

  return result;
};

const showResult = () => {
  let number = document.getElementById("number").value;
  let result = document.getElementById("result");
  result.innerHTML = `<h5 class="text-center p-2"style="background: rgba(255, 0, 0, 0.11)"
                    >${intToRoman(number)}</h5>`;
};
