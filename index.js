const age = 18;
const isFemale = true;
const driverStatus = "bob";
if (age < 18) {
    console.log("We can not allow minors by law, we ask you friendly to stay outside")
} else if (age => 18) {
    console.log("Welcome to our pub, we wish you a pleasant stay!")
}
if (isFemale) {
    console.log("Welcome to Ladies Night at our pub, we wish you a pleasant stay!")
} else if (isFemale == false) {
    console.log("Tonight is ladies night, we can not allow you to enter this night")
}
if (driverStatus == "bob") {
    console.log("You are allowed to drive home!")
} else if (driverStatus) {
    console.log("You are not allowed to drive home!")
}