// Selecting Elements

var box = document.getElementById("box")
var res = document.getElementById("res")
var guscount = document.getElementById("guscount")
var noofguess = 3
var heart ="❤️❤️❤️";

// Generate Random Number from 1 to 5

var randomnumber = Math.floor(Math.random() * 10) + 1 // 1 to 10
if (randomnumber > 5) 
    {
    randomnumber = randomnumber-5
}

// Event Header Function


function checkthenumber()
{

    if (box.value == randomnumber)
         {

        alert("YOU GOT IT RIGHT, CONGRATULATION ")
        res.textContent = "You Are Right 👍👍✌️!"
    }
    else {
        noofguess=noofguess-1
        if (noofguess == 2)
        {
            heart ="❤️❤️"
        }
        
        else if (noofguess == 1 )
        {
            heart ="❤️"
        }
       
        else if  (noofguess == 0)
        {
            heart ="🤷‍♂️"
        
             
            alert("You Lost, Generated Random Number is : " + randomnumber)
        }
        guscount.textContent = `Available Guesses :${heart}` 
        res.textContent = "You are Wrong 🤦‍♀️🤦‍♂️🤦‍♀️!"
    }

}