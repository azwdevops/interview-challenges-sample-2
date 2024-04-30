function star_pattern_one(num) {
  for (let i = num; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

// star_pattern_one(8);

function star_pattern_two(num) {
  for (let i = 1; i <= num; i++) {
    console.log("*".repeat(i));
  }
}

// star_pattern_two(5);

function star_pattern_three(num) {
  for (let i = 1; i <= num; i++) {
    console.log("*".repeat(num));
  }
}

star_pattern_three(5);
