### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  A JSON Web Token is a way to securely send user data between a client and server.

- What is the signature portion of the JWT? What does it do?
  It verifies the token wasn’t changed and confirms who created it.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, the payload isn’t encrypted just encoded, so it can be read.

- How can you implement authentication with a JWT? Describe how it works at a high level.
  The server creates a token after login, and the client sends it with future requests to stay authenticated.

- Compare and contrast unit, integration and end-to-end tests.
  Unit tests check one piece of code, integration tests check how pieces work together, and end-to-end tests check the whole app flow.

- What is a mock? What are some things you would mock?
  A mock is fake data or behavior used for testing; I would mock APIs or databases.

- What is continuous integration?
  It’s automatically testing and merging code,changes whenever you push updates.

- What is an environment variable and what are they used for?
  They store settings like API keys or database URLs outside the code.

- What is TDD? What are some benefits and drawbacks?
  Test-Driven Development means writing tests before code; it improves reliability but can slow initial development.

- What is the value of using JSONSchema for validation?
  It makes sure data follows a specific format before being used or stored.

- What are some ways to decide which code to test?
  Test critical logic, anything that could break easily, or handles user input.

- What does `RETURNING` do in SQL? When would you use it?
  It returns the data from a row you just inserted, updated, or deleted.

- What are some differences between Web Sockets and HTTP?
  HTTP is one-way per request, WebSockets keep a constant two-way connection.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  Flask felt simpler to understand, but Express was faster to build APIs with.
