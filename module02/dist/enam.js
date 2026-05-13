"use strict";
// Enum
// set of fixed string leteral  ek jaigai raka
Object.defineProperty(exports, "__esModule", { value: true });
// type UserRoles = "Admin" | "Editor" | "Viewer";
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Viewer) {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
//# sourceMappingURL=enam.js.map