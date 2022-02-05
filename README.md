# rss-reader

Lector RSS básico en el que se obtendrán los datos de un feed RSS y se mostrará el listado ordenado. Se podrá pinchar en cada artículo obtenido para leerlo entero.

# Tech Stack

- React

# How To

npm run dev

# Joan Carballo

Febrero de 2022
<img src="https://avatars1.githubusercontent.com/u/45364181?s=460&v=4" alt="Carballo" width="200" height="200">

# Feed Utilizado

He utilizado el feed de Microsiervos porque es el más completo y que mejor cumple el estándar de los que he probado.

- Microsiervos: https://www.microsiervos.com/index.xml

# Tiempo Total Empleado

He empleado un total de 20h de desarrollo.

# Problemas Encontrados y Soluciones

**Recordar el uso de React** No he utilizado React durante meses, en los que he utilizado Vue cuyas estructuras, hooks y funcionamiento general es mucho mas simple y su desarrollo es en Javascript mas puro.

- Solución: He tenido que rever algunos tutoriales y tirar de StackOverflow mas de lo que hubiera gustado. Lo cual lógicamente ha incrementado las horas invertidas.

**No es posible acceder a los RSS** Algunos servidores no aceptan llamadas fetch a los endpoint de RSS y devuelven un error CORS.

- Solución: Utilizar el servidio allorigins.win

**Los datos del RSS llegan como CDATA** Los datos de texto que se incluyen en el RSS lo hacen codificados como CDATA. No he tratado nunca con este tipo de datos y he invertido una tarde entera en tratar de formatearlo para que me resulte útil.

- Solución: Desisto. Se va a ver código HTML y CDATA en los campos de texto. Si me ocurriera en el mundo real tendría una conversación muy seria con quien sea que me envía semejante tortura desde el backend.

**No hay una imagen única/principal en cada post** Dentro de los datos de RSS no hay un campo item.image. No está en el estándar RSS pero se pide en la prueba.

- Solución: Inserto una imagen random en cada artículo para utilizarla como se pide.
