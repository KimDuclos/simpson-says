# backend

https://simpson-says.herokuapp.com/

'npm run server' to start

#Endpoints

| Endpoint   | Action                                                        | Accepts/Outputs  |
|------------|---------------------------------------------------------------|------------------|
| /register  | GET  -retrieves new username and password                     | string / string  |
| /login     | GET  -retrieves username and password                         | string / string  |
| /favorites | GET  -retrieves a list of existing favorite quotes            | array of strings |
|            |      -retrieves quote IDs                                     | number           |
|            | POST -adds new favorite quote + ID to existing list           | string / number  |
| /search    | GET  -retrieves user search string                            | string           |
| /generator | GET  -retrieves random quote from database based on character | string           |


/register - adds new user 
       - user, password, ID
       - string, string, 2
/login - let's existing user login
    user, password
    - string, string
/favorites - gets list of existing favorites
         - JSON array
/addFavorite - adds a new favorite to the existing list of favorites
             - string
             - ID
/search - gets user generated search
        - string
/generator - generates new quote based on chosen character
           - string

GET to '/register'

{
    userName: 'string',
    password: 'string'
}

GET to '/login'

{
    userName: 'string',
    password: 'string
}

GET to '/favorites'

favoriteQuotes = [
    {
        id: 1,
        quote: 'This is a quote.'
        char: 'Character Name'
    }
    {
        id: 2,
        quote: 'This is a quote.'
        char: 'Character Name'
    }
];

POST to '/favorites'

favoriteQuotes = [
    {
        id: 8,
        quote: 'This is a quote.',
        char: 'Character Name'
    }
];

GET to '/search'

{
    search: 'This is a search string.'  (not needed for BE because DS hooked up to FE)
}

GET to '/generator'

{
    genQuote: 'This is a randomly generated quote based on the chosen character.'
}