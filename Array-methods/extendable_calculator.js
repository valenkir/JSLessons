function Calculator() {

    this.methods = [ {
        operator: "+",
        operation (a, b) {
            return a + b;
        },
    }, {
        operator: "-",
        operation (a, b) {
            return a - b;
        },
    } ];
    
    this.calculate = function (str) {
        let expression = str.split(" ");
        let operator = expression[1];
        let operation;
        for(let method of this.methods) {

            for(let key in method) {
                if (method[key] == operator) {
                    operation = method.operation;                    
                }
            }
        }

        return operation(+expression[0], +expression[2]);
      
    };

    this.addMethod = function (operator, callback){
        let newMethod = {};
        newMethod.operator = operator;
        newMethod.operation = callback;
        this.methods.push(newMethod);
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8