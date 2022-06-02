# Book Search Engine v2.0 :green_book::mag:

#### This is a Google Books API search engine app that allows you to search books and save them to a stateful back end server. It is built with a GraphQL API using Apollo Server, React front end, MongoDB database and Node.js/Express.js server and API. Users can create an account, log in, retrieve their saved books and add new books after searching using the Google Books API. No user session data  or cookies are persisted in the back end. Instead the app uses JWT for user context.

## To use this Application

- Navigate to Link below
- Create new user/login
- Search for books using the 'Search For Books' section
- Retrieve saved books from the 'See Your Books' section

[App URL](https://damp-coast-79149.herokuapp.com/)

### User Story
```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

### Acceptance Criteria
```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

### Screenshots

### Homepage
![](./other/2022-06-01-12-27-42.png)

### Search For Books Section
![](./other/2022-06-01-12-28-39.png)

### See Your Books Section
![](./other/2022-06-01-12-30-07.png)

### User Logged Out (JWT Deleted From localStorage)
![](./other/2022-06-01-12-30-26.png)

### Login Section
![](./other/2022-06-01-12-31-09.png)

### Sign Up Section
![](./other/2022-06-01-12-31-36.png)

### Save this Book!
![](./other/2022-06-01-12-32-30.png)

### Delete this Book!
![](./other/2022-06-01-12-32-54.png)

![](2022-06-01-20-09-07.png)