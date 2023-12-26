## Food villas server is free server to get the restauramt details from the Swiggy API.

## The server provider two URLs

- Get restaurants list from the Swiggy API by passing latitude and longitude of the locality.

    > @params : `lat`
    >
    > @param : `lng`
    >
    > @return : list of restaurant

    URL endpoint : `https://food-villa-server.vercel.app/api/restaurants?lat=<latitude>&lng=<longitude>&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

    example: `https://food-villa-server.vercel.app/api/restaurants?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`


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



## If you find this repo helpfull then pleaase give it a :star:

