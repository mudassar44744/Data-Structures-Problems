// write a program to generate fibonacci series up to n terms
// 0 1 1 2 3 5 8  13;
fibonacciSeries(7);
fibonacci(8);

function fibonacciSeries(n) {
    let a = 0;
    let b = 1;
    let next; 
    for (let index = 1; index <= n; index++) {
        console.log(a);

        next = a + b;
        a = b;
        b = next;


    }
}

//using while loop
function fibonacci(n) {
    
    let n1 = 0;
    let n2 = 1;
    let i = 2;
    let next;
    while(i <= n) {
        next = n1 + n2;
        n1 = n2;
        n2 = next; 
        i++;
    }
}