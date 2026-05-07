Generics:

“Write once, reuse everywhere, still fully typed.”

Problem without Generics

If you don’t use generics, you often end up doing this:

function identityString(value: string): string {
    return value;
}

function identityNumber(value: number): number {
    return value;
}

Problem:

same logic repeated
not reusable
code duplication

Solution: Generics

Now we use a type placeholder:

function identity<T>(value: T): T {
    return value;
}
What is <T>?

T means:

“Type will be decided later”

So TypeScript waits until you use the function.

Example 1: String

identity<string>("Hello");

Now TypeScript understands:

T = string

So function becomes:

(value: string) => string
🔹 Example 2: Number
identity<number>(100);

Now:

T = number

Key power: SAME function, different types
Input	Type inferred
"Hello"	string
100	number
{name:"A"}	object

One function works for everything.

How Generics keep strict typing

Even though it is reusable, TypeScript still tracks the type:

const result = identity("Hello");

Now:

result is string

So you still get:

autocomplete
error checking
type safety











