class Calculator{
    static add(a:number, b:number){
        return a + b;
    }

    static subtract(a:number, b:number){
        return a - b;
    }

    static devide (a:number, b:number){
        if (b === 0){
            console.log("division by zero is prohibited");
        }
        return a / b;
    }

    static factorial(a:number){
        // Todo Factorial Logic
    }
}
