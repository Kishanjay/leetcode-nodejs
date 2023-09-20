function encode(arr) {
  arr = arr.map((i) => i.replaceAll(",", "\\,"));
  return arr.join(",");
}

function decode(str) {
  const r = [];

  let startI = 0;
  for (let cur = 0; cur < str.length; cur++) {
    if (str[cur] === "," && (cur - 1 < 0 || str[cur - 1] !== "\\")) {
      r.push(str.slice(startI, cur));
      startI = cur + 1;
    }
  }
  r.push(str.slice(startI, str.length));

  return r.map((x) => x.replaceAll("\\,", ","));
}

validate(["This is an \\a ,fasf32r,f2,", "fafehfufem"]);

function validate(a) {
  const enc = encode(a);
  console.log(enc);
  
  const r = decode(enc);

  if (a.length !== r.length) {
    console.log("FAILURE");
    process.exit(1);
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== r[i]) {
      console.log(`FAILED`);
      process.exit(1);
    }
  }

  console.log("SUCCESS");
}
