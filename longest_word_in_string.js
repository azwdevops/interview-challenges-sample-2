function longest_word_in_string_one(str) {
  const arr = str.split(" ");
  let longest_word;
  let char_count = 0;
  for (let item of arr) {
    if (item.length > char_count) {
      char_count = item.length;
      longest_word = item;
    }
  }
  console.log(longest_word);
  console.log(char_count);
}

// longest_word_in_string_one("hello tha a d adfd hgtyhva");

function longest_word_in_string_two(str) {
  const arr = str.split(" ");
  arr.sort((a, b) => a.length - b.length);
  console.log(arr[arr.length - 1]);
  console.log(arr[arr.length - 1].length);
}

// longest_word_in_string_two("hello tha a d adfd hgtyhva");
