// 5.You are building a shipping appli-ation+ Write a program that takes the type of pa-kage ("standard",
// "express", or "overnight") and uses a swit-h statement to -al-ulate and print the estimated delivery time
// based on the pa-kage type+ For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight"
// would be delivered the next day


let typeOfPackage = "overnight";

switch (typeOfPackage) {
  case "standard":
    console.log("Your package will be delivered in next 3-5 Days");
    break;
  case "express":
    console.log("Your package will be delivered in next 1-2 Days");
    break;
  case "overnight":
    console.log("Your package will be delivered by tomorrow");
    break;
  default:
    console.log("Invalid package type!!");
}