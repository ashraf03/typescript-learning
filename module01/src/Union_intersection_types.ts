// union |
// 

type UserRole = 'admin' | 'user'

const getDashboard = (role: UserRole) => {
    if(role === 'admin') {
        return "Admin Dashboard";
    } else if (role === 'user') {
        return "User dashboard";
    } 
}

console.log(getDashboard('admin'))

// intersection &

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
}

type Manager = {
    designation : string;
    teamSize: number
}

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
    id: '12213',
    name: 'AShraf',
    phoneNo: '0188',
    designation: 'manager',
    teamSize: 20
}