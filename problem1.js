// Problem :  how to print 1 to 6 randomly in Ludo

// Returns a random integer from 0 to 100:
//// # Math.floor(Math.random() * 101);

// Returns a random integer from 1 to 100:
//// # Math.floor(Math.random() * 100) + 1;

// Returns a random integer from 60 to 66:
//// # Math.floor(Math.random() * (66 - 60) ) + 60; # min included and max excluded
//// # Math.floor(Math.random() * (66 - 60 + 1) ) + 60; # both min and max included

function getRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) ) + min ;
}

console.log(getRandomNumber(1,6));