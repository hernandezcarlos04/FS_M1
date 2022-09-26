
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.


```javascript
x = 1;
var a = 5;
var b = 10;      //8,9,10
var c = function(a, b, c) {
  var x = 10;//x=undef
  console.log(x);//10
  console.log(a);//8
                  //8, 9 , 10
  var f = function(a, b, c) {
    b = a;// b =8
    console.log(b); // imprime 8
    b = c; //b = 10
    var x = 5;
  }//8,9,10
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); //10
console.log(x); //1

//Se cuencia de impresion: 10, 8, 8, 9, 10, 1
```

```javascript
console.log(bar); //undef
console.log(baz);// undef
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
var baz = 2;

//Secuencia de impresion: undef, undef y hola
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

// imprime franco
```

```javascript
var instructor = "Tony";
console.log(instructor);//Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//Franco
   }
})();//Es una funcion autoinvocable
console.log(instructor);//Tony
//Secuencia de ejecucion: Tony, Franco, Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//the Flash
    console.log(pm);//Reverse Flash
}
console.log(instructor); //The Flash
console.log(pm);//Franco

//The Flash, Reverse Flash, The Flash, Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"    //2
"2" * "3"  //6
4 + 5 + "px" //9px
"$" + 4 + 5  //$45
"4" - 2     //2
"4px" - 2   //NaN
7 / 0       //infinity
{}[0]       //Array [0]
parseInt("09") // 9
5 && 2         // 2
2 && 5         // 5
5 || 0         //5
0 || 5         //5
[3]+[3]-[10]   //23 si es suma concatena, pero si es resta resta los valores
3>2>1    //False evalua 3>2 = true > 1 =False
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a ); //undef
   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

//input : undef, 2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix'; 

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return this.snack;
}

getFood(false); //undeff
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//'Aurelio De Rosa',

var test = obj.prop.getFullname;

console.log(test()); //undef

//Aurelio De Rosa, Juan Perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
