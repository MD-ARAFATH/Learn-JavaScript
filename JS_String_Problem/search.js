const lyrics = "Tumi bondu kala pakhi am jano ki";
//const doesExits = lyrics.includes("paohi");
const searchString = "pakhi";

const lyricsLowerCase = lyrics.toLowerCase();
const doesExits = lyrics.includes(searchString);
// console.log(doesExits);
// //one line--------------->
const doesExitsOneLine = lyrics
  .toLowerCase()
  .includes(searchString.toLowerCase());
// console.log(doesExitsOneLine);

//------------------------------------------------------------------------
console.log(lyrics.indexOf("kala"));
console.log(lyrics.indexOf("jano"));

//-------------------------------------------------------

//startswith
console.log(lyrics.startsWith("Tumi"));
//ends with
console.log(lyrics.endsWith("ki"));
