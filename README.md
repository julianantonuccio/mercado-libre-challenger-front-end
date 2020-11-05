# MILI Challenger Front-End 2020
#### <a href='mailto:antonuccio@live.com.ar'>antonuccio@live.com.ar</a>

## 🌟 Summary

This project was made for the ML challenge that required creating a mini-app similar to the site <a href='https://www.mercadolibre.com.ar/'>mercadolibre.com.ar/</a>. Try to make the code as simple and understandable as possible, only use well-known third-party libraries.

I base myself on the `MERN` project architecture (but without mongo) and separate the server and the web into two folders.

Inside the `back-end` folder are the files that consult the ML API and return the necessary information according to specifications. In the `front-end` folder are the components that give life to the website.

#### Look the photos !
<a href="https://1drv.ms/u/s!AhZbpLgEjNX1jDLN8LUcqtaNfF4x?e=2clmS8" target="_blank">App images</a>

The main technological stack chosen was (later on the other technologies will be emphasized):

__Back-end__
  * Node.js
  * Express js

__front-end__
  * Sass
  * React js

#### To run the system, first download the files and run the following commands:

__For the back-end:__
 ```
 cd back-end
npm install
npm start
```

__For the front-end:__
```
cd front-end
npm install
npm start
```

* Always try to run the backend first *

* You need to have node.js installed *

* The application runs on *
<a href="http://localhost:3000">http://localhost:3000</a>

## Back-End

To create this use the following command:

```
$ npm install express-generator –g
$ express --no-view back-end
$ DEBUG= back-end:* npm start
```

* TIP: Use Nodemon for development, it compiles the project every time it detects a change. *

For API calls use Axios since the calls are asynchronous and it returns `Promises` with which I can orchestrate the API requests and responses.
As `Middlewares` I used Morgan, mostly to check when the server was called and the response time. Also use `Access-Control-Allow-Origin` to avoid errors between back-end and front-end connections.
Configure the server port in 3001 but this is then taken by a proxy so it is imperceptible.
### Why async?
First to avoid callbacks, second for the readability of the code and third if it is implemented correctly through the use of promise the code will work as synchronous but with the advantages mentioned above.

## Front-End
Its structure was created through the `create-react-app` command, then the folders and files were modified to personal taste.
In addition to React, libraries are used such as:
   * react-router-dom
   * node-sass
   * React-helmet

The container-content model was also used, where the graphic part of the component logic is divided.
For Sass what I did was create a mini-css framework and reuse the generated classes in all the components

* In the package.json there is a 'proxy' line that generates a bridge between the back-end and the front-end

### Why not use redux?
In my opinion, the states management required by this app was not complex enough to use this model and this library are deprecated.

## SEO
To improve SEO, use "react-helmet" with which I update the title of the page every time a search is performed, in addition to updating the meta tags with the information from the current search.
Also all the content of the site was organized semantically respecting the hierarchy of the elements in HTML 5 and it´s responsive.

## Usability
Components with help texts were added to carry out a search or in case there were no results. Regarding the items resulting from a search, it was added that the entire item is a link, which facilitates access to it.
Facebook-style loadings were also created to reassure the user.

__Responsive__
The css framework was designed so that it fits the content, which is friendly in all resolutions and settings. For this most of it is based on `Flex`.
Finally, the design requested of the app was respected.

__As an extra, navigation by categories was added .__

## Performance
Being asynchronous and since the API responds immediately, the data loading time has an average of 0.3 seconds.
For rendering when using react-routes, the application was developed in a `SPA (Single Page Application)` way, so there is no post-back and the loading times are minimal.

## Scalability
Regarding the back-end, the functions were developed in the simplest way that I could, I divided the data mapping functions in a file called ‘utils.js’, so if new information were added, only said file should be modified.
For the front-end, the container-content model was used so that in the future, if a change is required, whether it be the logic of or visualization, only the corresponding is modified. All components are modulated and an attempt was made to use the arrows function and simple to understand methods (Everything under > ES6).

## Testing
For the QA I did not do in time to generate the tests with the react testing library but one aspect to improve is to include `JEST` to the project and perform these tests, anyway the project is configured to execute them.
Choose to generate __test cases__ and verify that they were met:
 
 1- 
*  __ACTION:__ ENTER TO http://localhost:3000/
* __EXPECTED:__  VIEW THE SEARCH BAR AND SEARCH TEXT

2-
*  __ACTION:__ MAKE A SEARCH
* __EXPECTED:__  VIEW THE LOAD SCREEN, VIEW FOUR RESULTS ASSOCIATED WITH THE SEARCH IN QUESTION, VIEW THE CATEGORY BREADCRUMB

3-
*  __ACTION:__ MAKE A SEARCH AND PRESS SITE LOGO
* __EXPECTED:__  VIEW THE SEARCH BAR AND SEARCH TEXT

4- 
*  __ACTION:__ PERFORM A SEARCH AND PERFORM A SEARCH AGAIN
* __EXPECTED:__  DISPLAY IN THE FIRST SEARCH THE FOUR RESULTS, IN THE SECOND SEARCH THE RESULTS MUST STEP ON THE FIRST 4

5-
*  __ACTION:__ VIEW RESULTS
* __EXPECTED:__  VIEW RECORDS WITH IMAGE, PRICE, NAME, ZONE AND TEXT "Completo Único"

6-
* __ACTION:__ PERFORM SEARCH, COMPARE DATA OBTAINED WITH ML API
* __EXPECTED:__ SAME DATA

7-
* __ACTION:__ PERFORM SEARCH, COMPARE DATA OBTAINED WITH ML API
* __EXPECTED:__ FREE SHIPPING ICON MUST ONLY BE DISPLAYED WHEN APPROPRIATE

8-
* __ACTION:__ PERFORM A SEARCH, CLICK ON AN ITEM
* __EXPECTED:__ LOADING SCREEN, VIEW ITEM INFORMATION AND CATEGORIES

9-
* __ACTION:__ PERFORM A SEARCH, DELETE THE CONTENT AND SEARCH AGAIN
* __EXPECTED:__ SEARCH TEXT

10-
* __ACTION:__ PERFORM A SEARCH WITH "ASDSAAAAAAAAAAAAAAAAAAAAAA"
* __EXPECTED:__ DISPLAY "NO RESULTS" COMPONENT

11-
* __ACTION:__ DIRECTLY ACCESS TO "http://localhost:3000/items?search=" ADD ANY SEARCH BY PARAMETER
* __EXPECTED:__ VIEW THE RESULTS

12-
* __ACTION:__ DIRECTLY ACCESS TO "http://localhost:3000/items/" WITH AN ID PER PARAMETER
* __EXPECTED:__ VIEW THE DETAIL OF THE ITEM

13-
* __ACTION:__ FIND YOURSELF ON THE DETAIL SCREEN OF AN ITEM AND PERFORM A SEARCH
* __EXPECTED:__ VIEW FOUR ITEMS RESULTS

14-
* __ACTION:__ ENTER THE ADDRESS "http://localhost:3000/" PLUS ANY PREFIXES
* __EXPECTED:__ ENTER THE MAIN SCREEN

15-
* __ACTION:__ PERFORM A SEARCH
* __EXPECTED:__ VIEW IN THE TITLE OF THE PAGE, THE CATEGORIES OF THE SAME

16-
* __ACTION:__ PERFORM A SEARCH AND INSPECT THE META TAG ON THE PAGE
* __EXPECTED:__ META TAGS WITH THE CONTENT OF THE CATEGORIES

17-
* __ACTION:__ VIEW AN ITEM WITH DECIMALS
* __EXPECTED:__ ALWAYS SEE TWO DECIMALS, IN CASE YOU HAVE ONLY ONE, DISPLAY "0" + DECIMAL (EXAMPLE 55.06)

18-
* __ACTION:__ VIEW AN ITEM
* __EXPECTED:__ IN THE PRICE, FIND A POINT IN THE THOUSANDS

19-
* __ACTION:__ CHANGE BROWSER SIZE
* __EXPECTED:__ THAT THE CONTENT FITS FRIENDLY

20-
* __ACTION:__ ENTER IN THE URL "http://localhost:3000/items/" WITH A NON-EXISTING ID
* __EXPECTED:__ DISPLAY "NO RESULTS" COMPONENT

### Licencia

__MIT__
