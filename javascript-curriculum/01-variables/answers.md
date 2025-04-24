# Task 3: Reassign Values

When we try to reassign a const variable, we see an error because the const variable does not crash anymore, because it is constant and incrasable.

# ● What’s the difference between var, let, and const?

var : Old way. Function-scoped. Can be changed and re-declared.
let : Newer. Block-scoped. Can be changed, but not re-declared.
const : Newer. Block-scoped. Can't be changed or re-declared.

# ● When should we use const over let?

Use const when the value shouldn't change, and use let when the value will change later.

# ● Why should we avoid using var in modern JavaScript?

We should avoid using var in modern JavaScript because:

Scope issues: var is function-scoped, not block-scoped, which can lead to unexpected behavior.
Re-declaration: It allows re-declaring variables in the same scope, potentially causing bugs.
Hoisting problems: Variables declared with var are hoisted, but only initialized with undefined, which can lead to confusing bugs.