import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
// Imports go first




// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug",12,5.5)
let bowl = makePottery("bowl",6,3)
let plate = makePottery("plate",7,.5)
let vase = makePottery("vase",19,13)
let fruitBowl = makePottery("fruit bowl",5,8)

console.log(mug,bowl,plate,vase,fruitBowl)

// Fire each piece of pottery in the kiln
let mugf = firePottery (mug, 2000)
let bowlf = firePottery (bowl, 2400)
let platef = firePottery (plate, 2300)
let vasef = firePottery (vase, 1900)
let fruitBowlf = firePottery (fruitBowl, 2100)


console.log(mugf, bowlf, platef, vasef, fruitBowlf)


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



