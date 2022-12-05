const band = {
    bandName : "Linkin Park",
    famousSong : "Castle Of Glass",
    year : 2000,
    anotherSong : "In The End",
}
const bandName1 = band.bandName
const famousSong1 = band.famousSong
console.log(bandName1, famousSong1)

const {bandName2, famousSong2} = band
console.log(bandName2, famousSong2)
// This is a shortcut way of allotting constants to each key of object. 

// We can even allot our own constants to keys.
let {bandName:var1, famousSong:var2} = band

// console.log(bandName)
// console.log(famousSong)
// Here bandName & famousSong are no longer constant names of keys.

console.log(var1)
console.log(var2)

let {bandName, famousSong, ...restDetails} = band
console.log(restDetails)
// If we allot constants to some of the keys and leave the rest to a spread operator constant, 
// that constant will contain the rest of the keys in that object.


