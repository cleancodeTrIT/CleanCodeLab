# ➰ Estructuras repetitivas y condicionales

## Bloques: Aquí vive la lógica.

> "Cada vez que escribas un comentario, debes sentirlo como un fallo de tu capacidad de expresión"
>
> -- ✍️ **Robert C. Martin**

---

## ❓ Condicionales

- ⚠️ Usar ternarios sólo en casos triviales.

- Envolver siempre 🔑 entre llaves.🗝

- La condición de 1️⃣ sólo operador lógico. En otro caso debe ser una función.

- Valorar retorno **anticipado** _vs_ retorno **unificado.**

- Evitar los ~~switches~~.

## ➿ Repetitivas

- La condición de ruptura 1️⃣ sólo operador lógico.

- Las variables **locales** deben ser legibles.

- Se permiten los índices clásicos `i, j`.

---

## 👮 Atajos a vigilar

- ⚠️ Operadores ternarios

  - `condition ? value if true : value if false`

- ⚠️ Operadores lógicos

  - `value = value || defaultValue;`

  - `anObject && anObject.doSomething();`

> No encadenes o agrupes estos atajos.

> Úsalos sólo como una abreviación de casos muy simples.

> Usa características del lenguaje para evitar tratar nulos y valores por defecto.

## ⚠️ Límites

- ✅1*\_\_2❌ \_niveles de anidamiento*
- ✅4*\_\_8❌ \_instrucciones por bloque*

> Te obliga a extraer código a funciones.

> Te obliga a nombrar las nuevas funciones.

## Consecuencias

- 💼 Más **reglas de negocio**
- 💬 **Cero** necesidad de comentarios

---

- [⏭️ Next: 🧩 Funciones puras y metodos de clase.](./3-funciones_puras_y_metodos_de_clase.md)

- [⏮️ Back: 🔀 FUNCTION: Organización de sentencias.](https://github.com/cleancodeTrIT/CleanCodeLab/tree/FUNCTION)
