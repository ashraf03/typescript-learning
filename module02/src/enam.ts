// Enum
// set of fixed string leteral  ek jaigai raka

// type UserRoles = "Admin" | "Editor" | "Viewer";

enum UserRoles {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer',
}

const canEdit = (role:UserRoles) => {
    if(role === UserRoles.Admin || role=== UserRoles.Viewer) {
        return true
    } else return false;
}

const isEditPermissable = canEdit(UserRoles.Admin)

console.log(isEditPermissable);