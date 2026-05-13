"use strict";
// as constraints assertion
Object.defineProperty(exports, "__esModule", { value: true });
// enum UserRoles {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer',
// }
const UserRoles = {
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer: 'Viewer',
};
/**
{
  readonly  Admin : 'Admin', //fixit type = litarel
   readonly Editor : 'Editor',
   readonly Viewer : 'Viewer',
}

1. typeof operator
2. keyof  operator

const user = {
id: 2222
name: 'AShraf'
}

type user

type user {
id: number,
name: string
}
user['id] == 222 >> string notation
typeof UserRoles {
    Admin: 'admin',
    Editior: 'Editor',
    Viewer: 'Viewer',
}


keyof typeof UserRoles
'Admin' | 'Editior' | 'Viewer'

'ADMIN'  | 'EDITOR' | 'VIEWER'

UserRoles['Admin'] >> 'ADMIN'
UserRoles [keyof typeof User]

*/
// UserRoles.Admin = "Mon chase";
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Viewer) {
        return true;
    }
    else
        return false;
};
//# sourceMappingURL=as-constraint.js.map