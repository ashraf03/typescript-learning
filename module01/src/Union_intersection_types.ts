// union |

type UserRole = 'admin' | 'user';

const getDashBoard = (role: UserRole) => {
    if(role === 'admin') {
        return 'Admin Dashboard'
    }
    else if(role === 'user') {
        return "User dashboard"
    }
    else {
        return 'guest dasboard'
    }
}

getDashBoard('admin')

// intersection &

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    desgnation: string;
    teamSize : number;
}

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
    id: '23123',
    name : "Md Ch",
    phoneNo: '122132134',
    desgnation: 'manager',
    teamSize: 232
}