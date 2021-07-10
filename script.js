// #1
const PersonalInfo = {
    name : "giorgi" ,
    age : "20"
}
let infoarray = [PersonalInfo ,PersonalInfo , PersonalInfo, PersonalInfo ,PersonalInfo]
console.log(infoarray)
// #2
const PersonalProperties = {
    firstname: "Giorgi",
    lastname : "kvinikadze",
    nicknames : ["kvinik" , "GG" , "Giorgi"] ,
    age : 20 ,
    monthlyincome : 1000 

}
console.log (PersonalProperties)
// #3
const rect = {
    width : 20,
    height : 12
}
let area = Object.values(rect)[0] * Object.values(rect)[1];
console.log (area)

// #4
let objArray = [
 {
  x : 9,
  y : 8,
 },
 {
    x:1,
    y:2
}
] 
var distance = Math.sqrt( (objArray[0].x -objArray [1].x) * (objArray[0].x -objArray [1].x) + (objArray[0].y -objArray [1].y) * (objArray[0].y -objArray [1].y) );
console.log(distance)