# Instalaciones

El proyecto consiste en el uso de Angular para la creacion de una pagina web, y se agregaron las siguientes dependencias:

- **ngx-translate/http-loader**

  Permitir la carga de archivos de traduccion

- **ngx-translate/core**

  Servicio de traduccion y pipe

- **angular/material**

  Permite diseños estandarizados por Google

A continuacion, como hacer la instalacion:

Por un lado, agregarlos al package.json en la parte de dependecies y luego ejecutarlo

- "@ngx-translate/core": "^17.0.0",
- "@ngx-translate/http-loader": "^17.0.0",
- "@angular/material": "^20.2.4"

Por otro lado, a mi punto de vista mas facil, ejecutarlo desde el cmd usando las siguientes instrucciones:
 
- ng add @ngx-translate/http-loader
- ng add @ngx-translate/core
- ng add @angular/material


# Proceso de traducciones

Para hacer la traduccion de nuestro proyecto se hizo uso del servicio "TranslateService".
La manera en la que se debe implementar dicho servicio es implementandolo dentro de las configuaraciones del app.

Observacion:

Si procedes a implementar el servicio de traduccion sin esta implementacion, sucedera que tu codigo no respondera al "TranslateService" diciendo que el servicio no fue encontrado


````
*app.config.ts

  (...)
  
  provideHttpClient()
  
  provideTranslateService({
    loader: providerTranslateHttpLoader({
      prefix:'./i18n/',
      suffix:'.json'
    }),
    fallbackLang:'en'
  })
````

Introduciremos en la carpeta public una carpeta llamada 'i18n' encargada de portar nuestras traduccion.
Dentro deben estar los idiomas en formato .json.

Ejemplo:

````
*en.json

{
  "option": {
    "home": "Home"
  },
  "home": {
    "title": "Game History",
    "aboutUs": "It goes through all the games that I, Calin, have played"
  }
}
````
Con ello, tenemos que poner siempre en los textos que seran traduccidos la siguiente sintaxis

{{ [grupo1].[grupo1.1].[grupo1.1.1]... | translate }}

Ejemplo:

````
*home.html

<h1>{{'home.title'|translate}}</h1>
<p>{{'home.aboutUs'|translate}}</p>
````

En el proceso tambien se hace uso de las pipes, nos brindan 'translate'. Sin embargo, por razones de simplicidad no se profundizara en ese tema.

