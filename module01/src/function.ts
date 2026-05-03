// Function
//arow function, normal function

function addNormal(num1:number, num2:number):number {
    return num1 + num2;
}

const addArow = (num1: number, num2: number) => num1 + num2;


addArow(2, 2);

addNormal(2, 3);

// object=> function => method

const poorUser = {
    name: 'Mezba',
    balance: 0,

    addBalance(value:number) {
        const totalBalance = this.balance + value
        return totalBalance;
    }
};

poorUser.addBalance(10000)

const arr: number[] = [1, 4, 6];

const sqrArray = arr.map((elem:number):number => elem * elem)

