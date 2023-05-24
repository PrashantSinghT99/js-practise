

121= 121




// Brute force 

function palindromeBF(n)
{
    let sum=0;
while(n>0)
{
    n=n%10;//121%10=1   12%10=2            1
    sum=sum*10+n;   //sum=1  sum=10+2=12  120+1 
    n=n/10;  //121/10=12   1 1 1/10=
}    
if(sum===n)
return "pallindrome";
else "not pallindrome"
}
console.log(palindromeBF(121));

 //Two pointer