// https://ps-rtt-sei.herokuapp.com/mod-2/week-7/day-1/slides/ - classroom slides

//We will be using these Request Methods.
// There is a three part system- the vault (our data), us (the user) and bank teller (the middleware), you never want to have direct access between the user and the data. So we put in requests (CRUD operations). CRUD stands for the type of requests - Create, Read (or Get), Update, Delete.

// If you think about it, anytime you've ever done anything on social media -its always been one of those 4!

//status codes:

// The status code in the first line informs us on how the request/response went. It is always a three-digit number that falls within the following ranges/categories:
        // 1xx Informational
        // 2xx Success
        // 3xx Redirection
        // 4xx Client Error
        // 5xx Server Error
// Most HTTP responses will have a status code of 200, which means OK. You also might be familiar with the status code of 404- Not Found.

//HTTP Codes:  https://httpstatusdogs.com/