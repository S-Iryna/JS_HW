let n = prompt("Enter any number from 1 to 9:");

if (n >= 1 && n <= 9) {
    let n1 = String(n);
    let n2 = String(n) + String(n);
    let n3 = String(n) + String(n) + String(n);
    let sum = n1 + n2 + n3;
    console.log(sum);
    alert(sum);
   
    } else {
        alert("Invalid value");
}