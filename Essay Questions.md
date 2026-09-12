B. Part 2: Essay Questions (2.5 Grade):
1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
## answer



2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
## answer

#### The scope of the code; and function declaration.
- var allowed hoisting but returns Returns undefined : before declaration.
- function has hoisting too priority:
so i can call it before Initialized.
tdz : ال var موجود فالرام 
- لكنه مش initialized
بدل undefined بتاعة ال var. 
- ل let , const
### examples:
// var
```javascript

console.log(a); // undefined
var a = 5;

```
// functions
```javascript
hi() ; // "Hi"

function hi() { console.log("Hi"); }
```

### block scope

```javascript
{
  console.log(ka3bora); // ReferenceError — ka3bora in TDZ
  let ka3bora = "hello";
  console.log(ka3bora); // "hello" — TDZ has ended مؤقت
}   
```



3. What are the main differences between == and ===? (0.5 Grade)
## answer
"== " check value only.
0 == ''   // true
"===" check value and type of. من غير type conversion
0 === ''  // false



4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)
## answer




5. What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
## answer
### coercion auto convert values by js like string coercion 1+"2" // = "12"
- num "5" -2  // = 3
- logical op || && ! convert to boolean ex: 0 // false;
-  5 == "5" // true
### conversion : by developer
- Boolean() , Number() , String()

