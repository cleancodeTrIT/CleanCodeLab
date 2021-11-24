# 🧩 Funciones puras y métodos de clase

## Funciones: Pequeñas piezas para organizar programas.

> "Una función debería hacer una sola cosa, hacerla bien, y hacerla sólo ella".
>
> -- ✍️ **Ley de Curly**.

---

## 🛩️ Pequeñas y Claras

- ♻️ Cuanto más pequeñas más reutilizables.
- 💪 Con **verbos** en su nombre que indiquen propósito
- 🐫 _DRY_: Don´t Repeat yourself.
- 🥚 Con valores por defecto si el lenguaje los soporta.
- 💂 Con guardias para retornos tempranos de casos incorrectos o triviales.
- 🧐 Sin condiciones complejas.
- 🚩 Sin flags: crea dos variantes con nombre específico.
- 💬 ...sin comentarios.

---

## ⚠️ Límites

- ✅0___0❌ _flags_
- ✅1___2❌ _argumentos_
- ✅8__12❌ _complejidad ciclomática_
- ✅16_24❌ _instrucciones

---

## 💧 Favorece el estilo funcional puro:

> En una **función pura** el valor de retorno solo está determinado por sus valores de entrada, sin efectos secundarios observables.
>
> -- ✍️ **Alguien a quien le gustan las matemáticas**.

- ### 🌙 Predecibles.

- ### 🏞 Sin dependencias del entorno.

- ### 🚯 Sin efectos secundarios en el entorno.

---

## 📦 En _P.O.O._ las funciones son los Métodos:

- ### 0️⃣ cuantos menos argumentos mejor.

- ### 🎏 evita argumentos _flag_ usando múltiples funciones específicas.

---

## 🎯 Objetivo: Muchas Pequeñas Funciones Organizadas

- 👆 Una función,

  - ## 🦄 un sólo propósito.

  - ... o al menos 1️⃣ mismo nivel de abstracción.

  > las instrucciones en funciones públicas deberían llamar a funciones privadas.

- ❎ retornando datos; nunca errores.

  - los errores tienen su propio flujo mediante `try-catch throw`.
  - si el lenguaje no lo permite, usar convenio tipo `(err, data)`.

- 💬 Sin comentarios.
  - ¿Me repito?. MAL!!! 😈

## Tipos de funciones en JavaScript

### Declaraciones

- Para ser usadas en un ambiente amplio
- Con nombre para indicar propósito

```js
function fizzzBuzz(number) {
  if (number % 15 == 0)
      console.log("FirzzBuzz");
  else if (number % 3 == 0)
      console.log("Fizz");
  else if (number % 5 == 0)
      console.log("Buzz");
  else
      console.log(i);
}
```

### Expresiones complejas

- Para ser usadas como argumentos
- Mantienen sintaxis similar a las declaraciones
- Deben ser nombradas para rastreo del callStack

```js
[1, 2, 3].forEach(function fizzzBuzz(number) {
   if (number % 15 == 0)
        console.log("FirzzBuzz");
    else if (number % 3 == 0)
        console.log("Fizz");
    else if (number % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
});
```

### Expresiones flecha

- Para ser usadas como argumentos
- Usan sintaxis concisa
- Anónimas
- Indicadas para expresiones de retorno sencillas de una línea

```js
[1, 2, 3].filter(number => number % 2 === 0);
```

---

> "Una función debería hacer una sola cosa, hacerla bien, y hacerla sólo ella".
>
> -- ✍️ **Ley de Curly**

---

![Don´t repeat Yourself](./dry.jpg)

---

> "La duplicidad es el principal enemigo de un sistema bien diseñado"
>
> -- ✍️ **Robert C. Martin**

---

## 📝 Laboratorio

https://github.com/LabsAdemy/CleanCodeLab/tree/FUNCTION/src/examples/3-functions

> "La verdad sólo se encuentra en un lugar: el código"
>
> -- ✍️ **Robert C. Martin**

---

- [⏭️ Next: 🗂️ DATA: Abstracciones de información.](https://github.com/LabsAdemy/CleanCodeLab/tree/DATA)

- [⏮️ Back: 🔀 FUNCTION: Organización de sentencias.](https://github.com/LabsAdemy/CleanCodeLab/tree/FUNCTION)
