1. TypeScript is designed to prevent mistakes before your code runs by checking type.That protection is called type safety but  When you use let text: any stop checking this variable completely.

Any dangerous because:

It disables TypeScript checking
It allows the use of incorrect code
The errors are only visible when the app is run

That's why it's called:

“Type safety hole” = a security flaw.  


When you use 'unknown', I don't know what it is, so you must verify before using it.

unknown safer from any:

1. Forces type checking
2. Prevents runtime crashes
3. Works well with unpredictable data
4. Keeps TypeScript protection active

Narrowing
 
TypeScript starts unsure, but after a check, it becomes certain about the exact type.

