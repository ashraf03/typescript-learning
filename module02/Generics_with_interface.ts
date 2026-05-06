interface Developer <T, X=null>{
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };

    smartWatch: T;
    bike?: X
}


interface BrandCharWatch {
    heartRate:string;
    stopWatch: boolean;
}

interface AppleWatch {
    heartRate: string;
    callSupport:boolean;
    calculator: boolean;
    AiFeature: boolean;
}


const poorDeveloper: Developer<BrandCharWatch, {brand: 'Yamaha', engineCapacity: '200c'}> = {
    name: "Mr. Poor",
    salary: 20,
    device: {
        brand: 'lenobo',
        model: 'A21',
        releasedYear: '2014'
    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true,
    }
}

const richDeveloper: Developer<AppleWatch> = {
    name: "Mr. Poor",
    salary: 20,
    device: {
        brand: 'Hp',
        model: 'q1',
        releasedYear: '2020'
    },
    smartWatch: {
        heartRate: '400',
        callSupport: true,
        calculator: true,
        AiFeature: true,        
    },
    bike:null
};


const add1 = (num1: number, num2: number = 0) => num1 + num2;

add(2, 5)