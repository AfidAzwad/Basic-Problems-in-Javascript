const rolls = [5,7,8,2,1,3,11,4]

console.log(rolls.sort(function(a,b) // it will create all the combinations of a,b
{
 return a - b; // it will sort with '+,-' ; if a-b is '+' then a>b else a<b or a==b
}
));

console.log(rolls.reverse(function(a,b)
{
 return a - b;
}
));