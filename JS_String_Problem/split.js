const lyrics = "Tumi bondu. kala pakhi .ami jano ki";
const part = lyrics.split(" ");
console.log(part);
const sentance = lyrics.split(".");
console.log(sentance);
const emty = lyrics.split("");
console.log(emty);

const partical = lyrics.slice(5, 11);
console.log(partical);

const partical2 = lyrics.substring(2, 11);
console.log(partical2);

const line = ["Tumi", "bondu.", "kala", "pakhi", ".ami", "jano", "ki"];
const newsong = line.join("-");
console.log(newsong);
