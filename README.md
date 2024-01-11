## Food villa server is free server to get the restauramt details from the Swiggy API without any CORS issues.

## The server provider two URLs

- Get restaurants list from the Swiggy API by passing latitude and longitude of the locality.

    > @params : `lat`
    >
    > @param : `lng`
    >
    > @return : list of restaurant

    URL endpoint : `https://food-villa-server.vercel.app/api/restaurants?lat=<latitude>&lng=<longitude>`

    example: `https://food-villa-server.vercel.app/api/restaurants?lat=28.4594965&lng=77.0266383`


- Get Menu of a specific restaurant by latitude, longitude and menuId(restaurantId in swiggy original URL).

    > @params : `lat`
    >
    > @param :`lng`
    >
    > @param : `menuId` (this parameter is dynamicaly passed when a restaurant is clicked , if you have not implemented this functionality in your app, then you need to pass it manually )
    >
    > @return : restaurant details with the restauarant menu  

    URL endpoint : `https://food-villa-server.vercel.app/api/restaurant/menu?&lat=<latitude>&lng=<longitude>&menuId=`

    example: `https://food-villa-server.vercel.app/api/restaurant/menu?&lat=27.8973944&lng=78.0880129&menuId=`



## If you find this repo helpfull then please give it a :star:


