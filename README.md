# Mercado Libre Challenger Front-End 2020 - Julian Antonuccio
#### <a href='mailto:antonuccio@live.com.ar'>antonuccio@live.com.ar</a>

## 🌟 Resumen

Este proyecto fue realizado para el desafío de ML que requería crear una mini-app similar a sitio. Intente hacer el código lo más simple y entendible posible, solo utilice librerías de terceros muy conocidas.

Me base en la arquitectura de proyecto `MERN` (pero sin mongo) y separe el servidor y la web en dos carpetas.

Dentro de la carpeta `back-end` se encuentran los archivos que consultan a la API de ML y retornan la información necesaria según especiaciones. En la carpeta `front-end` se encuentras los componentes que le dan vida al sitio web.

<a href="https://1drv.ms/u/s!AhZbpLgEjNX1jDLN8LUcqtaNfF4x?e=2clmS8" target="_blank">Imágenes de la App</a>

El principal stack tecnológico elegido fue (más adelante se hará hincapié en las demás tecnologías):

__Back-end__
  * Node.js
  * Express js

__front-end__
  * Sass
  * React js

#### Para ejecutar el sistema descargue los archivos y corra los siguientes comandos:

__Para back-end:__
 ```
 cd back-end
npm install
npm start
```

__Para front-end:__
```
cd front-end
npm install
npm start
```

*Intente siempre ejecutar el back-end primero*

*Necesitas tener instalado node.js*

*La aplicación corre sobre*
<a href="http://localhost:3000">http://localhost:3000</a>

## Back-End

Para la creación de este utilice el siguiente comando:

```
$ npm install express-generator –g
$ express --no-view back-end
$ DEBUG= back-end:* npm start
```

*Luego utilice Nodemon para el desarrollo, el mismo compila el proyecto cada vez que detecta un cambio.*

Para las llamadas a la API utilice Axios ya que las llamadas son asincrónicas y este devuelve ` Promises` con lo cual puedo orquestar las peticiones y respuestas de la API.
Como ` Middlewares` utilice Morgan, más que nada para verificar cuando se llamaba al servidor y el tiempo de respuesta. También utilice ` Access-Control-Allow-Origin` para evitar errores entre las conexiones del back-end y el front-end.
Configure el puerto del servidor en el 3001 pero este luego es tomado por un proxy por lo cual es imperceptible.
### ¿Por qué async?
Primero para evitar los callbacks, segundo por la legibilidad del código y tercero si se implementa correctamente a través del uso de promise el código funcionara como sincrónico pero con las ventajas mencionadas anteriormente.

## Front-End
La estructura del mismo se creó a través del comando `create-react-app`, luego se modificaron las carpetas y archivos a gusto personal.
Además de React se utilizan librerías como:
  * react-router-dom
  * node-sass
  * React-helmet

También se utilizó el modelo de contenedor – contenido en donde se divide la parte grafica de la lógica de los componentes.
Para Sass lo que hice fue crear un mini-framework de css y reutilizar las clases generadas en todos los componentes
* En el package.json se encuentra una línea ‘proxy’ que genera un puente entre el back-end y el front-end

### ¿Por qué no use redux?
A mi parecer el manejo de estados que requería esta app no era lo suficientemente complejo para utilizar esta modelo.

## SEO
Para mejorar el SEO utilice “react-helmet” con el cual actualizo el title de la página cada vez que se realiza una búsqueda, además se actualizar los meta tag con la información de la búsqueda actual.
También se organizó todo el contenido del sitio semánticamente respetando la jerarquía de los elementos en HTML 5.

##  Usabilidad
Se agregaron componentes con textos de ayuda para realizar una búsqueda o en caso de que no existieran resultados se informe del mismo. En cuanto a los ítems resultantes de una búsqueda se agregó que todo el ítem sea un link lo cual facilita el acceso al mismo.
También se crearon pantalla de carga de datos (loadings) al estilo de Facebook para tranquilizar al usuario.

__Responsive__
Se pensó el framework de css para que el mismo se ajuste al contenido, lo cual se presenta amigable en todas las resoluciones y ajustes. Para esto la mayoría está basado en `Flex`.
Para finalizar se respetó el diseño que se solicitaba de la app.

__Como extra se agrego la navegación por categorías.__

## Performance
Al ser asincrónico y ya que la API responde de manera inmediata el tiempo de carga de los datos tiene un promedio de 0.3 segundos.
Para el renderizado al utilizar react-routes la aplicación se desarrolló de manera `SPA (Single Page Application)` por lo cual no existe post-back y los tiempo de carga son mínimos.

## Escalabilidad
En cuanto al back-end las funciones de desarrollaron de la manera más simple que pude, dividí las funciones de mapeo de datos en un archivo llamado ‘utils.js’ por lo cual si se agregara nueva información debería solo modificarse dicho archivo.
Para el front-end se utilizó el modelo de contenedor-contenido para que a futuro si se requiere un cambio sea de lógica de o visualización se modifique solo lo correspondiente. Todos los componentes están modulados y se intentó utilizar el uso de arrows function y métodos simples de entender (Todo bajo ES6).

## Testing
Para el QA no hice a tiempo para generar las pruebas con la testing library de react pero un aspecto a mejorar es incluir `JEST` al proyecto y realizar dichas pruebas, de todos modos el proyecto está configurada para ejecutar las mismas.
Opte por generar __casos de prueba__ y verificar que los mismos se cumplieran:
 
 1- 
*  __ACCIÓN:__ INGRESAR A http://localhost:3000/
* __ESPERADO:__  VISUALIZAR LA BARRA DE BUSQUEDA Y TEXTO DE BUSQUEDA

2-
*  __ACCIÓN:__ REALIZAR UNA BUSQUEDA 
* __ESPERADO:__  VISUALIZAR PANTALLA DE CARGA, VISUALIZAR CUATRO RESULTADOS ASOCIADOS A LA BUSQUEDA EN CUESTION, VISUALIZAR EL breadcrumb DE CATEGORIAS

3-
*  __ACCIÓN:__ REALIZAR UNA BUSQUEDA Y PRESIONAR EL LOGO DEL SITIO 
* __ESPERADO:__  VISUALIZAR LA BARRA DE BUSQUEDA Y TEXTO DE BUSQUEDA

4- 
*  __ACCIÓN:__ REALIZAR UNA BUSQUEDA Y REALIZAR UNA BUSQUEDA NUEVAMENTE
* __ESPERADO:__  VISUALIZAR EN LA PRIMER BUSQUEDA LOS CUATRO RESULTADOS, EN LA SEGUNDA BUSQUEDA LOS RESULTADOS DEBEN PISAR LOS 4 PRIMEROS

5-
*  __ACCIÓN:__ VISUALIZAR RESULTADOS
* __ESPERADO:__  VISUALIZAR REGISTROS CON IMAGEN, PRECIO, NOMBRE, ZONA Y TEXTO "Completo Único"

6-
*  __ACCIÓN:__ REALIZAR BUSQUEDA, COMPARAR DATOS OBTENIDOS CON LA API DE ML
* __ESPERADO:__  DATOS IGUALES

7-
*  __ACCIÓN:__ REALIZAR BUSQUEDA, COMPARAR DATOS OBTENIDOS CON LA API DE ML
* __ESPERADO:__  EL ICONO DE ENVIO GRATIS SOLO DEBE MOSTRARSE CUANDO CORRESPONDA

8-
*  __ACCIÓN:__ REALIZAR BUSQUEDA, REALIZAR CLIC SOBRE UN ITEM
* __ESPERADO:__  PANTALLA DE CARGA, VISUALIZAR INFORMACION DEL ITEM Y CATEGORIAS

9-
*  __ACCIÓN:__ REALIZAR UNA BUSQUEDA, BORRAR EL CONTENIDO Y BUSCAR NUEVAMENTE
* __ESPERADO:__  TEXTO DE BUSQUEDA

10-
*  __ACCIÓN:__ REALIZAR UNA BUSQUEDA CON "ASDSAAAAAAAAAAAAAAAAAAAAAA"
* __ESPERADO:__  VISUALIZAR COMPONENTE DE "NO RESULTADOS"

11-
*  __ACCIÓN:__ ACCEDER DIRECTAMENTE A "http://localhost:3000/items?search=" CON UNA BUSQUEDA POR PARAMETRO
* __ESPERADO:__  VISUALIZAR LOS RESULTADOS

12-
*  __ACCIÓN:__ ACCEDER DIRECTAMENTE A "http://localhost:3000/items/" CON UN ID POR PARAMETRO
* __ESPERADO:__  VISUALIZAR EL DETALLE DEL ITEM

13-
*  __ACCIÓN:__ ENCONTRARSE EN LA PANTALLA DE DETALLE DE UN ITEM Y REALIZAR UNA BUSQUEDA
* __ESPERADO:__  VISUALIZAR CUATROS RESULTADOS DE ITEMS

14-
*  __ACCIÓN:__ INGRESAR A LA DIRECCION "http://localhost:3000/" MAS CUALQUIER PREFIJO
* __ESPERADO:__  INGRESAR A LA PANTALLA PRINCIPAL

15-
*  __ACCIÓN:__ REALIZAR UNA BUSQUEDA 
* __ESPERADO:__  VISUALIZAR EN EL TITULO DE LA PÁGINA, LAS CATEGORIAS DEL MISMO

16-
*  __ACCIÓN:__ REALIZAR UNA BUSQUEDA E INSPECCIONAR LOS META TAG DE LA PAGINA 
* __ESPERADO:__  META TAGS CON EL CONTENIDO DE LAS CATEGORIAS

17-
*  __ACCIÓN:__ VISUALIZAR UN ITEM CON DECIMALES
* __ESPERADO:__  SIEMPRE VER DOS DECIMALES, EN CASO DE TENER SOLO UNO VISUALIZAR "0" + DECIMAL (EJEMPLO 55,06)

18-
*  __ACCIÓN:__ VISUALIZAR UN ITEM
* __ESPERADO:__  EN EL PRECIO, ENCONTRAR UN PUNTO EN LAS MILESIMAS

19-
*  __ACCIÓN:__ CAMBIAR EL TAMAÑO DEL NAVEGADOR
* __ESPERADO:__ QUE EL CONTENIDO SE AJUSTE AMIGABLEMENTE

20-
*  __ACCIÓN:__ INGRESAR EN LA URL "http://localhost:3000/items/" CON UN ID INEXISTENTE
* __ESPERADO:__ VISUALIZAR COMPONENTE DE "NO RESULTADOS"

### Licencia

__MIT__
