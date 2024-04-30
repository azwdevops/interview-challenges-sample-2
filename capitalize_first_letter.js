function capitalize_first_letter(str) {
  const arr = str.split("");
  const new_str = arr[0].toUpperCase() + arr.slice(1).join("");

  console.log(new_str);
}

capitalize_first_letter("dsffgxhxvbx");
