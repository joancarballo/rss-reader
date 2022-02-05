# rss-reader

Lector RSS básico en el que se obtendrán los datos de un feed RSS y se mostrará el listado ordenado. Se podrá pinchar en cada artículo obtenido para leerlo entero.

# Tech Stack

- React

# How To

npm run dev

# Joan Carballo

Febrero de 2022
<img src="https://avatars1.githubusercontent.com/u/45364181?s=460&v=4" alt="Carballo" width="200" height="200">

# Feeds de Prueba

- Xataka Android: https://www.xatakandroid.com/tag/feeds/rss2.xml
- Momento CarPi: https://momentocarpi.com/?feed=atom
- Microsiervos: https://www.microsiervos.com/index.xml

# Problemas Encontrados y Soluciones

**No es posible acceder a los RSS** Algunos servidores no aceptan llamadas fetch a los endpoint de RSS y devuelven un error CORS.

- Solución: Utilizar el servidio allorigins.win

**Los datos del RSS llegan como CDATA** Los datos de texto que se incluyen en el RSS lo hacen codificados como CDATA. No he tratado nunca con este tipo de datos y he invertido una tarde entera en tratar de formatearlo para que me resulte útil.

- Solución: Desisto. Se va a ver código HTML y CDATA en los campos de texto. Si me ocurriera en el mundo real tendría una conversación muy seria con quien sea que me envía semejante tortura desde el backend.

**No hay una imagen única/principal en cada post** Dentro de los datos de RSS no hay un campo item.image. No está en el estándar RSS pero se pide en la prueba.

- Solución: Inserto una imagen random en cada artículo para utilizarla como se pide.
