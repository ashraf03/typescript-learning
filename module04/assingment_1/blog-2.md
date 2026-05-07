When you possess a substantial interface, it is often necessary to utilize only a portion of it in various locations.

Rather than rewriting types repeatedly, TypeScript provides you with:

Pick → select only the required properties
Omit → eliminate unnecessary properties

This approach prevents redundancy and maintains a DRY (Don’t Repeat Yourself) code structure.

2. Utilizing Pick (select only what you require)
type PublicUser = Pick<User, "id" | "name" | "email" | "createdAt">;

Interpretation:

"Extract only these properties from User"

1. No redundancy
2. Always remains synchronized with User

Utilizing Omit (remove unnecessary fields)
type SafeUser = Omit<User, "password">;

Interpretation:

"Extract everything except for password"

Significantly cleaner
Less code
Safer (crucial for security)

The rationale behind maintaining DRY code

DRY = Don’t Repeat Yourself

In the absence of DRY:
name: string;
email: string;

(repeated in multiple instances)

With DRY:
Pick<User, "name" | "email">

🔹 Advantages

1. Reduced duplication
2. Simplified maintenance
3. Safer refactoring
4. Consistent types
5. Cleaner codebase