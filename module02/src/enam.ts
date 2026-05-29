// enum

// set of fixed string leteral ek jagait rake

// type UserRoles = 'Adin' | 'Editor' | 'Viewer';

enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor) {
        return true
    } else return false;
}

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);