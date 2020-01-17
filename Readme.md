# Water_drink

This application will send you a remainder to drink water in every 4 hours.

## All the http requests must be sent to the https://water-remainder.herokuapp.com/ 

## Working

You need to create an account by sending a POST request at '/signup' route with body containing the following fields: 
```
    - email
    - password
    - name
```
You will be automatically subscribed to the mailing list on creating the account. If you want to unsubscribe, you need to sent a POST request at '/unsubscribe' route with the following fields:
```
    - email
    - password
```
Again, If you want to subscribe, you need to sent a POST request at '/subscribe' route with the fields mentioned above.

## Author

* **Arpit Agrawal**  - [Github](https://github.com/arpit9667)
* **arpitagrawal312@gmail.com** 
