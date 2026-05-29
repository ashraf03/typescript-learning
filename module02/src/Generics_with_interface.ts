interface Developer <T, X = null>{
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X;
}

interface BrandCharaWatch {
    heartRate: string;
    stopWatch: boolean;
}

const poorDeveloper: Developer<BrandCharaWatch, {brand: 'Yamaha', engineCapacity: '200c'}> = {
    name: "Mr. Poor",
    salary: 20,
    device: {
        brand: "lenovo",
        model: "A21",
        releasedYear: '2020',
    },
    smartWatch: {
        heartRate: "200",
        stopWatch: true,
    }
}

interface AppleWatch{
    heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    aiFeature: boolean;
}

const richDeveloper: Developer<AppleWatch> = {
    name: "Mr. Rich",
    salary: 40000,
    device: {
        brand: "Hp",
        model: "h21",
        releasedYear: '2021',
    },
    smartWatch: {
        heartRate: "120",
        callSupport: true,
        calculator: true,
        aiFeature: true
    },
    bike: null
}

const add = (num1: number, num2: number = 0) => num1 + num2;

add(2)