# holaluz

# Doc

## Arquitectura

He utilizado Nuxt como stack principal y Tailwind como librería de estilos CSS.

Para simular que las peticiones de los **json** de datos son algo más reales, he hecho unas peticiones con Axios hacia /static con método get. Cada endpoint está separado en un fichero dentro de **/plugins/services**, de manera que cada servicio podría alojar diferentes métodos y lógicas a medida que escale.

He creado unos modelos de datos para normalizar los datos de las peticiones y así dar valores por defecto, asignar nombres de variables y simplificar el modelo eliminando datos que no se usen.

Como arquitectura de comunicación de datos, he elegido que los componentes sean sencillos, llamando a acciones de Vuex que se ocupan de realizar la lógica pesada (Lo ideal como lo he planteado sería abstraer aún más la lógica creando unos helpers o factorías que se ocupende la lógica pesada y así poder importarlas donde hagan falta).

En Vuex guardo algunos datos para que los componentes puedan hacer uso de ellos y así manteenr la independencia de cada uno.

En cuanto a la landing page, la he pensado como dos secciones en la que la primera se ocupa de recoger los datos del CUPS del usuario a través de un componente y la segunda se ocupa de mostrar los datos de las posibles ofertas con otro componente.

Sobre los test he hecho algo muy básico, y me hubiera gustado separar la lógica pesada de Vuex en otros ficheros para hacer test unitarios con una batería de cases con los datos de los json, pero como me voy de tiempo tampoco quiero invertirle más de las 5 horas máximas.

He configurado Nuxt para que genere el sitio de forma estática y así se pudiera subir a cualquier hosting una vez hecha la build.

## __Stack tecnológico__


| Tecnología | Version | Docs | Comentarios |
| ------ | ------: | ------ | ------ |
| Nuxt | `2.15.8` | [https://nuxtjs.org/](https://nuxtjs.org/) | |
| Vue | `2.6.14` | [https://vuejs.org/](https://vuejs.org/) | Lo instala Nuxt |
| Jest | `27.4.4` | [https://jestjs.io/](https://jestjs.io/) | Libería para testing |
| Vue Test Utils | `1.3.0` | [https://vue-test-utils.vuejs.org/](https://vue-test-utils.vuejs.org/) | |
| Axios | `5.13.6` | [https://axios.nuxtjs.org/](https://axios.nuxtjs.org/) | Como cliente HTTP |
| TailwindCSS | `2.X` | [https://v2.tailwindcss.com/docs](https://v2.tailwindcss.com/docs) | Libería de estilos CSS |

## __Instalación y configuración__

### Requisitos

Se requiere nodeJS versión [v14.15.5](https://nodejs.org/es/download/) o superior.

(Se recomienda usar [n](https://www.npmjs.com/package/n) como gestor de versiones de NodeJS o nvm (Windows))

### Instalación de dependencias
```bash
# Instalación de dependencias
$ npm install
```

## Build Setup

```bash

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate

# run tests
$ npm run test
```

## Exercice

At Holaluz we are releasing a new brand product related with our rooftop revolution.

Some clients did contact us asking for this new product and which requirements and offers we have in order to get enrolled.

We need a landing page that given a CUPS search we display both its client and supply point information, plus if the client can become part of the rooftop revolution including the type of offer they would get.

## Requirements

### Business requirements

* We need to know which clients are allowed to get enrolled with the rooftop revolution. In order to offer solar product, the client's `building_type` must be **house** and it needs to have **at least 1 neighbor**.

* We have three types of offers for those clients that can have be part of the rooftop revolution each of them with a different discount percentage and with their conditions:
    1. **Standard offer**: No discount, no conditions.
    2. **Basic discount**: 5% discount. Conditions: its neighbors should have `p1` and `p2` powers lower than the current client's supply point.
    3. **Special discount**: 12% discount. Conditions: the addition of the `invoiced_amount` of its neighbors should be more than 100 euros.

### Technical requirements
* You will have to build an web application using Vue.js framework.

* You can implement your own CSS or use a UI components library.

* CUPS search must be handled by an input.

* You should spend between 3 and 5 hours working on this.

* We will use the code you deliver to us for the pair programming step of the interview process.

* You will find two `.json` files. You should tread each of them like they are returned by a different endpoint.

## Glossary
- **CUPS**: Universal acronym for the supply point identifier number in Spanish
- **Neighbors**: Clients that live near by identified by CUPS.
- **Tariff**: Name of the contracted supply point product.
- **Power**: Divided by two different periods, represents the provided energy to the supply point in Watts.
- **Invoiced amount**: Price that the client is paying monthly for the contracted power in euros.
- **Building type**: Type of building the client lives in.
- **Role**: The given type of client according to our internal marketing structure.
