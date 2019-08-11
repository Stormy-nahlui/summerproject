// this is a comment

var NahlaAge = 12

var NahlaSays ="hi i'm nahla"

var NahlasFriends = ["Solvig", "Felix", "Chloe", "Tiffany"]

// console.log("Nahlas age is "+ NahlaAge)
// console.log("Nahla says, '"+ NahlaSays + "'")

// NahlasFriends.forEach((friend)=>{
//     console.log("one of Nahlas friends is " + friend)
// })

var Nahla = {
    age: 12, 
    friends: ["Solvig", "Felix", "Chloe", "Tiffany"],
    says: (name)=> {console.log("hi, "+ name)}
}

console.log("nahla's age is " + Nahla.age)

Nahla.friends.forEach((friend)=>{
    console.log("one of Nahla's friends is " + friend)
    Nahla.says(friend) 
})

Nahla.says("david")