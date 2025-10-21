// your timeword solutio goes here
// Turn a string of 24h time into words.

// You can trust that you’ll be given a valid *string* (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

function timeWord(time) {
  const [hourStr, minuteStr] = time.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  const numbersToWords = [
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
  ];

  let period = hour < 12 ? "am" : "pm";
  hour = hour % 12;

  if (minute === 0) {
    return `${numbersToWords[hour]} o'clock ${period}`;
  } else if (minute < 10) {
    return `${numbersToWords[hour]} oh ${numbersToWords[minute]} ${period}`;
  } else {
    return `${numbersToWords[hour]} ${numbersToWords[minute]} ${period}`;
  }
}

module.exports = timeWord;
