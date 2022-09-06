import randomQuestionLogic from '../utils/randomQuesionLogic';

const giveRandomRESTAPIQuestion = (dataBlockNumber: number) => {
  const data = `
#### Q1. What type of relationship is defined as one resource existing only if another parent resource exist-for example, pages in a book?
@@
- [ ] 'Partial'
- [x] 'dependent'
- [ ] 'associative'
- [ ] 'linked'
@@
#### Q2. Which URL pattern is recommended when working with one resource and a collection of resources?
@@
- [ ] '/companies/{id} and/company'
- [ ] '/company/{id} and/companies'
- [x] '/companies/{id} and/companies'
- [ ] '/company/{id} and/company'
@@
#### Q3. When dealing with JSON web Tokens (JWTs), what is a claim?
@@
- [x] 'data in the token'
- [ ] 'Ownership'
- [ ] 'a permission'
- [ ] 'and integer'
@@
#### Q4. Which REST constraint specifies that knowledge and understanding obtained from one component of the API should be generally applicable elsewhere in the API?
@@
- [x] 'Uniform Interface'
- [ ] 'Client-Server'
- [ ] 'Stateless'
- [ ] 'Chacheable'
@@
#### Q5. What would you enable to allow a browser on another site to make an AJAX request to your API?
@@
- [ ] 'HTTP'
- [ ] 'REST'
- [ ] 'OPTIONS'
- [x] 'CORS'
@@
#### Q6. APIs commonly use webhooks to **\_**.
@@
- [x] 'notify other systems of an event'
- [ ] 'catch error faster'
- [ ] 'improve error logging'
- [ ] 'log additional data'
@@
#### Q7. What is the underlying goal of all APIs?
@@
- [ ] 'to add new technologies to an organization's infrastructure.'
- [x] 'to share features and functionality with other system.'
- [ ] 'to move infrastructure to the cloud.'
- [ ] 'to appease the latest digital transformation effort.'
@@
#### Q8. Which is a common command-line tool for using or exploring an API?
@@
- [ ] 'bash'
- [x] 'curl'
- [ ] 'ssh'
- [ ] 'powerShell'
@@
#### Q9. What is the modern specification for describing an API?
@@
- [x] 'OpenAPI (Swagger)'
- [ ] 'WADL'
- [ ] 'WSDL'
- [ ] 'OAuth'
@@
[OpenAPI Specification](https://swagger.io/specification/)
@@
#### Q10. Which HTTP verb is normally used to update or create a resource in an API?
@@
- [ ] 'SUBMIT'
- [ ] 'WRITE'
- [x] 'POST'
- [ ] 'CREATE'
@@
[HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
@@
#### Q11. What is one benefit of server-side caching in APIs?
@@
- [ ] 'Mobile app work better.'
- [ ] 'It improves uptime.'
- [ ] 'It offers better security.'
- [x] 'It reduce load on servers.'
@@
#### Q12. Your API resource does no allow deletion, and a client application attempted to delete the resource. What HTTP response code should you return?
@@
- [ ] '409 Conflict'
- [ ] '400 Bad Request'
- [ ] '406 Not Acceptable'
- [x] '405 Method Not Allowed'
@@
[Response Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses)
@@
#### Q13. What is OpenID Connect?
@@
- [x] 'an identify layer on top of OAuth 2.0'
- [ ] 'the new name for SAML 3.0'
- [ ] 'a modern replacement for API keys'
- [ ] 'an SSO competitor for OAuth 2.0'
@@
[What is OpenID Connect?](https://openid.net/connect/)
@@
#### Q14. What is one benefit of GraphQl over REST approaches?
@@
- [x] 'flexible querying/responses'
- [ ] 'more stable APIs'
- [ ] 'compatible with more gateways'
- [ ] 'more secure by default'
@@
[GraphQL vs. REST](https://www.apollographql.com/blog/graphql/basics/graphql-vs-rest/)
@@
#### Q15. Which REST constraint specifies that there should be no shared context?
@@
- [x] 'Stateless'
- [ ] 'Client-Server'
- [ ] 'Uniform Interface'
- [ ] 'Cacheable'
@@
#### Q16. What purpose does a User-Agent serve?
@@
- [ ] 'It identifies the user ID.'
- [x] 'It identifies the client application or SDK.'
- [ ] 'It identifies if the API should expect a user authentication.'
- [ ] 'It identifies if the API should accept microservice traffic.'
@@
#### Q17. If you were to add versioning by using the Accept and Content-Type header, what would be the correct format of the header value?
@@
- [ ] 'application/json'
- [ ] 'application/json_version2'
- [ ] 'text/html'
- [x] 'application/vnd.myapp.v2+json'
@@
[Reference](https://blog.allegro.tech/2015/01/Content-headers-or-how-to-version-api.html)
@@
#### Q18. What is one benefit that OAuth provides over an API key approach?
@@
- [ ] 'A token is encrypted.'
- [ ] 'A token is encoded.'
- [x] 'A token is scoped to the use case.'
- [ ] 'A token can be shared between systems.'
@@
[How to easily secure your APIs with API keys and OAuth](https://apifriends.com/api-security/api-keys-oauth/)
@@
#### Q19. The ability to execute the same API request over and over again without changing the resource's state is an example of \_.
@@
- [ ] 'stateless architecture'
- [x] 'idempotency'
- [ ] 'a uniform interface'
- [ ] 'cacheability'
@@
#### Q20. What component can you use to wrap legacy architectures or protocols into a REST interface for easier consumption and integration?
@@
- [x] 'API proxy'
- [ ] 'API gateway'
- [ ] 'OpenAPI'
- [ ] 'OAuth authorization server'
@@
#### Q21. What protection does a JSON Web Token (JWT) offer to mitigate tampering with its contents?
@@
- [ ] 'transport over SSL'
- [ ] 'encrypted payload'
- [x] 'a signature'
- [ ] 'encoded payload'
@@
#### Q22. What OAuth term is used to represent permissions?
@@
- [ ] 'token'
- [x] 'scope'
- [ ] 'claim'
- [ ] 'back channel'
@@
[OAuth Scopes](https://oauth.net/2/scope/)
@@
#### Q23. What additional type of token would you see when using OpenID Connect?
@@
- [x] 'ID token'
- [ ] 'refresh token'
- [ ] 'access token'
- [ ] 'auth code token'
@@
#### Q24. What should you add to a Cache-Control response header to specify that a response should not be stored in an intermediary cache?
@@
- [ ] 'no-proxy'
- [ ] 'client-only'
- [ ] 'restricted'
- [x] 'private'
@@
[reference](https://www.digitalocean.com/community/tutorials/web-caching-basics-terminology-http-headers-and-caching-strategies)
@@
#### Q25. Which OAuth grant type can support a refresh token?
@@
- [x] 'Authorization Code Grant'
- [ ] 'Client Credentials Grant'
- [ ] 'Implicit Grant'
- [ ] 'Authentication Grant'
@@
[Reference:](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4.3)
@@
#### Q26. Using OAuth, what scope would you request for write access to the API?
@@
- [ ] 'It varies from API to API.'
- [x] 'admin'
- [ ] 'write'
- [ ] 'read-write'
@@
#### Q27. Which property would you use to include subresources directly into a JSON document?
@@
- [ ] '_embedded'
- [ ] 'resources'
- [x] 'subresources'
- [ ] '_links'
@@
#### Q28. What is the best way to track SDK and version usage?
@@
- [x] 'tracking downloads'
- [ ] 'Accept headers'
- [ ] 'user agents'
- [ ] 'polling users'
@@
#### Q29. Which REST constraint allows for the presence of caching, routing, and other systems between the client and server?
@@
- [x] 'Layered System'
- [ ] 'Stateless'
- [ ] 'Client-Server'
- [ ] 'Cacheable'
@@
#### Q30. Which content is best to include in your documentation?
@@
- [ ] 'your tech stack'
- [ ] 'reasoning for your naming schema'
- [ ] 'your mission statement'
- [x] 'sample code'
@@
#### Q31. What metric tracks overall availability for your API?
@@
- [ ] 'Response Time'
- [ ] 'Time to First Hello World'
- [ ] 'TTL'
- [x] 'Uptime'
@@
#### Q32. What is the recommended method and URL pattern for retrieving a specific user?
@@
- [ ] 'GET /user/{id}'
- [x] 'GET /users/{id}'
- [ ] 'GET /user?id={id}'
- [ ] 'GET /users?id={id}'
@@
#### Q33. What is the purpose of a link relation?
@@
- [ ] 'to describe relationships between resources or actions'
- [ ] 'to describe subresources related to the current one'
- [x] 'to link two resources together'
- [ ] 'to describe a resource and its purpose'
@@
#### Q34. When building SDKs, which languages should you support?
@@
- [ ] Java, Javascript, and .NET
- [ ] and you can support
- [ ] PHP, Python, and Go
- [x] the languages that your target users use
@@
#### Q35. Which property would you use to include references to other resources in a JSON document?
@@
- [x] 'resources'
- [ ] '_embedded'
- [ ] 'subresources'
- [ ] '_links'
@@
#### Q36. What is OAuth?
@@
- [x] an authorization framework for granted delegated access
- [ ] an approach to single sign-on for APIs
- [ ] a method for API authentication
- [ ] HTTP Basic Authentication 2.0
@@
#### Q37. What should your API documentation describe?
@@
- [ ] JSON
- [ ] HTTP
- [x] common use cases
- [ ] your tech stack
@@
#### Q38. What is the purpose of an OAuth refresh token?
@@
- [ ] to share user profile information
- [ ] to update an API configuration
- [ ] to keep a web session active
- [x] to retrieve an access token
@@
[Understanding Refresh Tokens](https://auth0.com/learn/refresh-tokens/)
@@
#### Q39. What is Time to First Hello World?
@@
- [x] how long it takes for a developer to do something with your API
- [ ] how long it takes to start a new programming language
- [ ] how long it takes to install your SDK
- [ ] how long it takes to read your documentation
@@
#### Q40. Which response header tells the client and intermediaries that the response is not to be cached anywhere?
@@
- [ ] Cache-State: none
- [ ] Expires:-1
- [ ] Cache-Control: no-cache
- [x] Cache-Control: no-store
@@
#### Q41. What component hides the distinctions or boundaries between various microservices from end-client applications?
@@
- [x] 'API gateway'
- [ ] 'API logging '
- [ ] 'a layered system '
- [ ] 'API proxy'
@@
#### Q42. The textbook approach to api versioning is to use **\_**.
@@
- [ ] 'common knowledge'
- [ ] 'URLs'
- [ ] 'no versioning'
- [x] 'the Accept header'
@@
#### Q43. Which is the most secure method to transmit an API key?
@@
- [ ] 'URL parameter'
- [x] 'Authorization header'
- [ ] 'Base64 encoding'
- [ ] 'Basic Auth'
@@
#### Q44. Within Oauth, what component validates the user's identity?
@@
- [ ] 'client'
- [ ] 'not specified'
- [x] 'authorization server'
- [ ] 'resource server'
@@
#### Q45. API traffic that is entirely internal to your organization is normally called \_?
@@
- [ ] 'inbound traffic'
- [ ] 'north-south traffic '
- [x] 'internal traffic '
- [ ] 'east-west traffic'
@@
#### Q46. What is the best approach for requesting JSON instead of XML from an API?
@@
- [ ] 'Add .json to the URL.'
- [ ] 'APIs do not use XML.'
- [ ] 'Use the Content-Type header.'
- [x] 'Use the Accept header.'
@@
#### Q47. When a user attempts to access a record that is not their own, which HTTP response code is the most appropriate?
@@
- [ ] '403'
- [ ] '404'
- [x] '401'
- [ ] '405'
@@
[Response Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses)
@@
#### Q48. Which is a benefit of using an API gateway?
@@
- [ ] 'HTTP verbs'
- [ ] 'JSON payloads'
- [ ] 'HTTP response codes'
- [x] 'rate limiting/throttling'
@@
#### Q49. API testing must be treated as **\_**?
@@
- [ ] 'red team testing'
- [ ] 'white box testing'
- [ ] 'blue box testing'
- [x] 'black box testing'
@@
#### Q50. Which HTTP verb is used in a CORS preflight request?
@@
- [ ] 'PUT'
- [ ] 'POST'
- [ ] 'GET'
- [x] 'OPTIONS'
@@
#### Q51. Which response header will tell the client that the response is cached for 1 minute ?
@@
- [ ] 'Expires: 1 minute'
- [x] 'Cache-Control: max-age=60'
- [ ] 'Expires: 1 January 2020'
- [ ] 'Cache-Expires: max-age=60'
@@
[Cache Control Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
@@
#### Q52. What is the concept that allows an API client to explore an API via links embedded in payloads?
@@
- [ ] 'hypermedia'
- [x] 'link relations'
- [ ] 'parsing'
- [ ] 'browsing'
@@
#### Q53. Which HTTP response code describes a new resource as created successfully?
@@
- [ ] '200'
- [x] '201'
- [ ] '204'
- [ ] '202'
@@
[Response Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses)
@@
#### Q54. Which is an example of Code on Demand?
@@
- [ ] AWS Lambda
- [ ] downloading open-source software
- [ ] Serverless
- [x] JavaScript on a webpage
@@
[Code on Demand](https://en.wikipedia.org/wiki/Code_on_demand)
@@
#### Q55. Which URL pattern should you follow for accessing a subresource attached to a specific resource?
@@
- [ ] /companies/employees/{companyId}/{employeeId}
- [ ] /company/{companyId}/employees/{employeeId}
- [x] /companies/{companyId}/employees/{employeeId}
- [ ] /companies/{companyId}/employee/{employeeId}
@@
[Resource Naming](https://restfulapi.net/resource-naming/)
@@
#### Q56. Which REST constraint essentially prohibits the use of cookies?
@@
- [x] Stateless
- [ ] Cacheable
- [ ] Layered System
- [ ] Uniform Interface
@@
#### Q57. Which HTTP verb is used to delete a resource?
@@
- [ ] FLUSH
- [x] DELETE
- [ ] CLEAR
- [ ] DESTROY
@@
#### Q58. Which verb is _not_ considered idempotent?
@@
- [ ] DELETE
- [ ] GET
- [ ] PUT
- [x] POST
@@
[Idempotency](https://restfulapi.net/idempotent-rest-apis/)
@@
#### Q59. Which REST constraint specifies that each request should stand on its own and not have a specific required order?
@@
- [ ] Uniform Interface
- [ ] Cacheable
- [x] Stateless
- [ ] Client-Server
@@
[REST Architectural Constraints](https://restfulapi.net/rest-architectural-constraints/)
@@
#### Q60. When you get a 429 code, what should you do next?
@@
- [ ] Check you JSON structure.
- [ ] Check the API uptime status.
- [x] Slow down your requests.
- [ ] Check you API key.
@@
#### Q61. When exploring record sets, what is the best approach for pagination?
@@
- [ ] date-based filtering
- [x] next/previous cursors
- [ ] page size and filters
- [ ] database IDs
@@
#### Q62. What is _not_ a method for API authentication or authorization?
@@
- [ ] OAuth
- [x] biometrics
- [ ] API Keys
- [ ] username and password
@@
#### Q63. Which HTTP response code usually means the requested work is still processing and may or may not result in an error later?
@@
- [ ] 200 OK
- [ ] 204 No Content
- [ ] 201 Created
- [x] 202 Accepted
@@
#### Q64. When validating a JWT, what are some of the claims that you must confirm? (Select all that apply.)
@@
    A. The exp (expiration) has not passed.
    B. The algorithm is sufficient.
    C. The signature matches the payload.
    D. The token was Base64 encoded.
    E. The iss (issuer) is the auth server you expect.
    F. There is a refresh token.
    G. The cid (client ID) is the client you expect.
    H. The token was encrypted.
@@
- [x] A,B,E,H
- [ ] B,C,F,G
- [ ] A,D,G,H
- [ ] A,C,E,G
@@
####Q65. REST stands for ?
@@
- [x] REpresentational State Transfer
- [ ] REpresentatative State Transfer
- [ ] REliable State Transfer
- [ ] REasonal State Transfer
@@
####Q66. What is missing in these Guiding Principles of REST?
@@
Uniform Interface
Client-Server
Stateless
Layered System
Code on Demand
@@
- [x] Cacheable
- [ ] Code on Demand
- [ ] Layered System
- [ ] Self-descriptive
@@
####Q67. What is missing in these Guiding Principles of REST?
@@
Uniform Interface
Stateless
Cacheable
Layered System
Code on Demand
@@
- [x] Client-Server
- [ ] principle of generality
- [ ] Layered System
- [ ] Self-descriptive
@@
####Q68. What is missing in these Guiding Principles of REST?
@@
Client-Server
Stateless
Cacheable
Layered System
Code on Demand
@@
- [x] Uniform Interface
- [ ] principle of generality
- [ ] Layered System
- [ ] Self-descriptive
@@
####Q69. The <?> constraint requires that a response should implicitly or explicitly label itself as <?> or non-<?>.
If the response is <?>, the client application gets the right to reuse the response data later for equivalent requests and a specified period.
@@
- [x] cacheable
- [ ] stateless
- [ ] uniform
- [ ] skalable
@@
####Q70. The <?> style allows an architecture to be composed of hierarchical layers by constraining component behavior.
For example, in a <?>, each component cannot see beyond the immediate layer they are interacting with.
@@
- [x] layered system
- [ ] cacheable
- [ ] uniform interface
- [ ] client-server
####Q71. What are the codes for information responses?
@@
- [x] (100–199)
- [ ] (500–599)
- [ ] (200–299)
- [ ] (400–499)
@@
####Q72. What are the codes for successful responses?
@@
- [x] (200–299)
- [ ] (300–399)
- [ ] (500–599)
- [ ] (100–199)
@@
####Q73. What are the codes for redirection responses?
@@
- [x] (300–399)
- [ ] (500–599)
- [ ] (100–199)
- [ ] (400–499)
@@
####Q74. What are the codes for client error responses?
@@
- [x] (400–499)
- [ ] (300–399)
- [ ] (500–599)
- [ ] (100–199)
@@
####Q75. What are the codes for server error responses?
@@
- [x] (500–599)
- [ ] (400–499)
- [ ] (100–199)
- [ ] (200–299)
@@
#### Q76. What is the code for this definition?
@@
This interim response indicates that the client should continue the request or ignore the response if the request is already finished.
@@
- [x] 100 Continue
- [ ] 103 Early Hints
- [ ] 101 Switching Protocols
- [ ] 102 Processing (WebDAV)
@@


#### Q77. What is the code for this definition?
@@
This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.
@@
- [x] 101 Switching Protocols
- [ ] 100 Continue
- [ ] 103 Early Hints
- [ ] 102 Processing (WebDAV)
@@


#### Q78. What is the code for this definition?
@@
This code indicates that the server has received and is processing the request, but no response is available yet.
@@
- [x] 102 Processing (WebDAV)
- [ ] 101 Switching Protocols
- [ ] 103 Early Hints
- [ ] 100 Continue
@@


#### Q79. What is the code for this definition?
@@
This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.
@@
- [x] 103 Early Hints
- [ ] 102 Processing (WebDAV)
- [ ] 100 Continue
- [ ] 101 Switching Protocols
@@
#### Q80. What is the code for this definition?
@@
The request succeeded. The result meaning of "success" depends on the HTTP method:
    
      GET: The resource has been fetched and transmitted in the message body.
      HEAD: The representation headers are included in the response without any message body.
      PUT or POST: The resource describing the result of the action is transmitted in the message body.
      TRACE: The message body contains the request message as received by the server.
@@
- [x] 200 OK
- [ ] 204 No Content
- [ ] 207 Multi-Status (WebDAV)
- [ ] 202 Accepted
@@


#### Q81. What is the code for this definition?
@@
The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.
@@
- [x] 201 Created
- [ ] 207 Multi-Status (WebDAV)
- [ ] 206 Partial Content
- [ ] 205 Reset Content
@@


#### Q82. What is the code for this definition?
@@
The request has been received but not yet acted upon.
      It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request.
      It is intended for cases where another process or server handles the request, or for batch processing.
@@
- [x] 202 Accepted
- [ ] 203 Non-Authoritative Information
- [ ] 204 No Content
- [ ] 226 IM Used (HTTP Delta encoding)
@@


#### Q83. What is the code for this definition?
@@
This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.
      This is mostly used for mirrors or backups of another resource.
      Except for that specific case, the 200 OK response is preferred to this status.
@@
- [x] 203 Non-Authoritative Information
- [ ] 200 OK
- [ ] 206 Partial Content
- [ ] 204 No Content
@@


#### Q84. What is the code for this definition?
@@
There is no content to send for this request, but the headers may be useful.
      The user agent may update its cached headers for this resource with the new ones.
@@
- [x] 204 No Content
- [ ] 203 Non-Authoritative Information
- [ ] 205 Reset Content
- [ ] 202 Accepted
@@


#### Q85. What is the code for this definition?
@@
Tells the user agent to reset the document which sent this request.
@@
- [x] 205 Reset Content
- [ ] 226 IM Used (HTTP Delta encoding)
- [ ] 204 No Content
- [ ] 206 Partial Content
@@


#### Q86. What is the code for this definition?
@@
This response code is used when the Range header is sent from the client to request only part of a resource.
@@
- [x] 206 Partial Content
- [ ] 205 Reset Content
- [ ] 201 Created
- [ ] 207 Multi-Status (WebDAV)
@@


#### Q87. What is the code for this definition?
@@
Conveys information about multiple resources, for situations where multiple status codes might be appropriate.
@@
- [x] 207 Multi-Status (WebDAV)
- [ ] 206 Partial Content
- [ ] 201 Created
- [ ] 226 IM Used (HTTP Delta encoding)
@@


#### Q88. What is the code for this definition?
@@
Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
@@
- [x] 208 Already Reported (WebDAV)
- [ ] 203 Non-Authoritative Information
- [ ] 200 OK
- [ ] 201 Created
@@


#### Q89. What is the code for this definition?
@@
The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
@@
- [x] 226 IM Used (HTTP Delta encoding)
- [ ] 202 Accepted
- [ ] 208 Already Reported (WebDAV)
- [ ] 206 Partial Content
@@
#### Q90. What is the code for this definition?
@@
The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)
@@
- [x] 300 Multiple Choices
- [ ] 308 Permanent Redirect
- [ ] 307 Temporary Redirect
- [ ] 302 Found
@@


#### Q91. What is the code for this definition?
@@
The URL of the requested resource has been changed permanently. The new URL is given in the response.
@@
- [x] 301 Moved Permanently
- [ ] 300 Multiple Choices
- [ ] 304 Not Modified
- [ ] 303 See Other
@@


#### Q92. What is the code for this definition?
@@
This response code means that the URI of requested resource has been changed temporarily.
      Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
@@
- [x] 302 Found
- [ ] 301 Moved Permanently
- [ ] 300 Multiple Choices
- [ ] 305 Use Proxy 
    Deprecated

@@


#### Q93. What is the code for this definition?
@@
The server sent this response to direct the client to get the requested resource at another URI with a GET request.
@@
- [x] 303 See Other
- [ ] 302 Found
- [ ] 306 unused
- [ ] 301 Moved Permanently
@@


#### Q94. What is the code for this definition?
@@
This is used for caching purposes.
      It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
@@
- [x] 304 Not Modified
- [ ] 308 Permanent Redirect
- [ ] 305 Use Proxy 
    Deprecated

- [ ] 306 unused
@@


#### Q95. What is the code for this definition?
@@
Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy.
      It has been deprecated due to security concerns regarding in-band configuration of a proxy.
@@
- [x] 305 Use Proxy 
    Deprecated

- [ ] 304 Not Modified
- [ ] 303 See Other
- [ ] 307 Temporary Redirect
@@


#### Q96. What is the code for this definition?
@@
This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.
@@
- [x] 306 unused
- [ ] 303 See Other
- [ ] 301 Moved Permanently
- [ ] 302 Found
@@


#### Q97. What is the code for this definition?
@@
The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request.
      This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
@@
- [x] 307 Temporary Redirect
- [ ] 301 Moved Permanently
- [ ] 303 See Other
- [ ] 305 Use Proxy 
    Deprecated

@@


#### Q98. What is the code for this definition?
@@
This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header.
      This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
@@
- [x] 308 Permanent Redirect
- [ ] 306 unused
- [ ] 304 Not Modified
- [ ] 305 Use Proxy 
    Deprecated

@@
#### Q99. What is the code for this definition?
@@
The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
@@
- [x] 400 Bad Request
- [ ] 416 Range Not Satisfiable
- [ ] 415 Unsupported Media Type
- [ ] 408 Request Timeout
@@


#### Q100. What is the code for this definition?
@@
Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
      That is, the client must authenticate itself to get the requested response.
@@
- [x] 401 Unauthorized
- [ ] 403 Forbidden
- [ ] 415 Unsupported Media Type
- [ ] 413 Payload Too Large
@@


#### Q101. What is the code for this definition?
@@
This response code is reserved for future use.
      The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.
@@
- [x] 402 Payment Required 
    Experimental

- [ ] 411 Length Required
- [ ] 410 Gone
- [ ] 424 Failed Dependency (WebDAV)
@@


#### Q102. What is the code for this definition?
@@
The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.
      Unlike 401 Unauthorized, the client's identity is known to the server.
@@
- [x] 403 Forbidden
- [ ] 402 Payment Required 
    Experimental

- [ ] 422 Unprocessable Entity (WebDAV)
- [ ] 451 Unavailable For Legal Reasons
@@


#### Q103. What is the code for this definition?
@@
The server can not find the requested resource.
      In the browser, this means the URL is not recognized.
      In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
      Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client.
      This response code is probably the most well known due to its frequent occurrence on the web.
@@
- [x] 404 Not Found
- [ ] 422 Unprocessable Entity (WebDAV)
- [ ] 424 Failed Dependency (WebDAV)
- [ ] 426 Upgrade Required
@@


#### Q104. What is the code for this definition?
@@
The request method is known by the server but is not supported by the target resource.
      For example, an API may not allow calling DELETE to remove a resource.
@@
- [x] 405 Method Not Allowed
- [ ] 425 Too Early 
    Experimental

- [ ] 413 Payload Too Large
- [ ] 423 Locked (WebDAV)
@@


#### Q105. What is the code for this definition?
@@
This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
@@
- [x] 406 Not Acceptable
- [ ] 451 Unavailable For Legal Reasons
- [ ] 424 Failed Dependency (WebDAV)
- [ ] 402 Payment Required 
    Experimental

@@


#### Q106. What is the code for this definition?
@@
This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.
@@
- [x] 407 Proxy Authentication Required
- [ ] 400 Bad Request
- [ ] 418 I'm a teapot
- [ ] 402 Payment Required 
    Experimental

@@


#### Q107. What is the code for this definition?
@@
This response is sent on an idle connection by some servers, even without any previous request by the client.
      It means that the server would like to shut down this unused connection.
      This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing.
      Also note that some servers merely shut down the connection without sending this message.
@@
- [x] 408 Request Timeout
- [ ] 425 Too Early 
    Experimental

- [ ] 429 Too Many Requests
- [ ] 422 Unprocessable Entity (WebDAV)
@@


#### Q108. What is the code for this definition?
@@
This response is sent when a request conflicts with the current state of the server.
@@
- [x] 409 Conflict
- [ ] 407 Proxy Authentication Required
- [ ] 451 Unavailable For Legal Reasons
- [ ] 408 Request Timeout
@@


#### Q109. What is the code for this definition?
@@
This response is sent when the requested content has been permanently deleted from server, with no forwarding address.
      Clients are expected to remove their caches and links to the resource.
      The HTTP specification intends this status code to be used for "limited-time, promotional services".
      APIs should not feel compelled to indicate resources that have been deleted with this status code.
@@
- [x] 410 Gone
- [ ] 406 Not Acceptable
- [ ] 404 Not Found
- [ ] 411 Length Required
@@


#### Q110. What is the code for this definition?
@@
Server rejected the request because the Content-Length header field is not defined and the server requires it.
@@
- [x] 411 Length Required
- [ ] 428 Precondition Required
- [ ] 407 Proxy Authentication Required
- [ ] 415 Unsupported Media Type
@@


#### Q111. What is the code for this definition?
@@
The client has indicated preconditions in its headers which the server does not meet.
@@
- [x] 412 Precondition Failed
- [ ] 423 Locked (WebDAV)
- [ ] 406 Not Acceptable
- [ ] 405 Method Not Allowed
@@


#### Q112. What is the code for this definition?
@@
Request entity is larger than limits defined by server.
      The server might close the connection or return an Retry-After header field.
@@
- [x] 413 Payload Too Large
- [ ] 416 Range Not Satisfiable
- [ ] 408 Request Timeout
- [ ] 418 I'm a teapot
@@


#### Q113. What is the code for this definition?
@@
The URI requested by the client is longer than the server is willing to interpret.
@@
- [x] 414 URI Too Long
- [ ] 405 Method Not Allowed
- [ ] 417 Expectation Failed
- [ ] 404 Not Found
@@


#### Q114. What is the code for this definition?
@@
The media format of the requested data is not supported by the server, so the server is rejecting the request.
@@
- [x] 415 Unsupported Media Type
- [ ] 409 Conflict
- [ ] 425 Too Early 
    Experimental

- [ ] 451 Unavailable For Legal Reasons
@@


#### Q115. What is the code for this definition?
@@
The range specified by the Range header field in the request cannot be fulfilled.
      It's possible that the range is outside the size of the target URI's data.
@@
- [x] 416 Range Not Satisfiable
- [ ] 402 Payment Required 
    Experimental

- [ ] 431 Request Header Fields Too Large
- [ ] 422 Unprocessable Entity (WebDAV)
@@


#### Q116. What is the code for this definition?
@@
This response code means the expectation indicated by the Expect request header field cannot be met by the server.
@@
- [x] 417 Expectation Failed
- [ ] 411 Length Required
- [ ] 406 Not Acceptable
- [ ] 401 Unauthorized
@@


#### Q117. What is the code for this definition?
@@
The server refuses the attempt to brew coffee with a teapot.
@@
- [x] 418 I'm a teapot
- [ ] 402 Payment Required 
    Experimental

- [ ] 403 Forbidden
- [ ] 411 Length Required
@@


#### Q118. What is the code for this definition?
@@
The request was directed at a server that is not able to produce a response.
      This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
@@
- [x] 421 Misdirected Request
- [ ] 418 I'm a teapot
- [ ] 426 Upgrade Required
- [ ] 410 Gone
@@


#### Q119. What is the code for this definition?
@@
The request was well-formed but was unable to be followed due to semantic errors.
@@
- [x] 422 Unprocessable Entity (WebDAV)
- [ ] 426 Upgrade Required
- [ ] 416 Range Not Satisfiable
- [ ] 412 Precondition Failed
@@


#### Q120. What is the code for this definition?
@@
The resource that is being accessed is locked.
@@
- [x] 423 Locked (WebDAV)
- [ ] 431 Request Header Fields Too Large
- [ ] 418 I'm a teapot
- [ ] 407 Proxy Authentication Required
@@


#### Q121. What is the code for this definition?
@@
The request failed due to failure of a previous request.
@@
- [x] 424 Failed Dependency (WebDAV)
- [ ] 425 Too Early 
    Experimental

- [ ] 408 Request Timeout
- [ ] 411 Length Required
@@


#### Q122. What is the code for this definition?
@@
Indicates that the server is unwilling to risk processing a request that might be replayed.
@@
- [x] 425 Too Early 
    Experimental

- [ ] 422 Unprocessable Entity (WebDAV)
- [ ] 416 Range Not Satisfiable
- [ ] 403 Forbidden
@@


#### Q123. What is the code for this definition?
@@
The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
      The server sends an Upgrade header in a 426 response to indicate the required protocol(s).
@@
- [x] 426 Upgrade Required
- [ ] 404 Not Found
- [ ] 429 Too Many Requests
- [ ] 412 Precondition Failed
@@


#### Q124. What is the code for this definition?
@@
The origin server requires the request to be conditional.
      This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
@@
- [x] 428 Precondition Required
- [ ] 414 URI Too Long
- [ ] 423 Locked (WebDAV)
- [ ] 425 Too Early 
    Experimental

@@


#### Q125. What is the code for this definition?
@@
The user has sent too many requests in a given amount of time ("rate limiting").
@@
- [x] 429 Too Many Requests
- [ ] 401 Unauthorized
- [ ] 410 Gone
- [ ] 406 Not Acceptable
@@


#### Q126. What is the code for this definition?
@@
The server is unwilling to process the request because its header fields are too large.
      The request may be resubmitted after reducing the size of the request header fields.
@@
- [x] 431 Request Header Fields Too Large
- [ ] 413 Payload Too Large
- [ ] 402 Payment Required 
    Experimental

- [ ] 421 Misdirected Request
@@


#### Q127. What is the code for this definition?
@@
The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.
@@
- [x] 451 Unavailable For Legal Reasons
- [ ] 416 Range Not Satisfiable
- [ ] 406 Not Acceptable
- [ ] 408 Request Timeout
@@
#### Q128. What is the code for this definition?
@@
The server has encountered a situation it does not know how to handle.
@@
- [x] 500 Internal Server Error
- [ ] 511 Network Authentication Required
- [ ] 507 Insufficient Storage (WebDAV)
- [ ] 501 Not Implemented
@@


#### Q129. What is the code for this definition?
@@
The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
@@
- [x] 501 Not Implemented
- [ ] 503 Service Unavailable
- [ ] 511 Network Authentication Required
- [ ] 502 Bad Gateway
@@


#### Q130. What is the code for this definition?
@@
This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
@@
- [x] 502 Bad Gateway
- [ ] 510 Not Extended
- [ ] 503 Service Unavailable
- [ ] 507 Insufficient Storage (WebDAV)
@@


#### Q131. What is the code for this definition?
@@
The server is not ready to handle the request.
      Common causes are a server that is down for maintenance or that is overloaded.
      Note that together with this response, a user-friendly page explaining the problem should be sent.
      This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service.
      The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
@@
- [x] 503 Service Unavailable
- [ ] 502 Bad Gateway
- [ ] 508 Loop Detected (WebDAV)
- [ ] 506 Variant Also Negotiates
@@


#### Q132. What is the code for this definition?
@@
This error response is given when the server is acting as a gateway and cannot get a response in time.
@@
- [x] 504 Gateway Timeout
- [ ] 501 Not Implemented
- [ ] 502 Bad Gateway
- [ ] 510 Not Extended
@@


#### Q133. What is the code for this definition?
@@
The HTTP version used in the request is not supported by the server.
@@
- [x] 505 HTTP Version Not Supported
- [ ] 508 Loop Detected (WebDAV)
- [ ] 501 Not Implemented
- [ ] 507 Insufficient Storage (WebDAV)
@@


#### Q134. What is the code for this definition?
@@
The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
@@
- [x] 506 Variant Also Negotiates
- [ ] 511 Network Authentication Required
- [ ] 502 Bad Gateway
- [ ] 504 Gateway Timeout
@@


#### Q135. What is the code for this definition?
@@
The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
@@
- [x] 507 Insufficient Storage (WebDAV)
- [ ] 500 Internal Server Error
- [ ] 506 Variant Also Negotiates
- [ ] 510 Not Extended
@@


#### Q136. What is the code for this definition?
@@
The server detected an infinite loop while processing the request.
@@
- [x] 508 Loop Detected (WebDAV)
- [ ] 506 Variant Also Negotiates
- [ ] 500 Internal Server Error
- [ ] 505 HTTP Version Not Supported
@@


#### Q137. What is the code for this definition?
@@
Further extensions to the request are required for the server to fulfill it.
@@
- [x] 510 Not Extended
- [ ] 502 Bad Gateway
- [ ] 505 HTTP Version Not Supported
- [ ] 506 Variant Also Negotiates
@@


#### Q138. What is the code for this definition?
@@
Indicates that the client needs to authenticate to gain network access.
@@
- [x] 511 Network Authentication Required
- [ ] 503 Service Unavailable
- [ ] 510 Not Extended
- [ ] 506 Variant Also Negotiates
@@
#### Q139. What is the code for this definition?
@@
The <?> method requests a representation of the specified resource. Requests using <?> should only retrieve data.
@@
- [x] GET
- [ ] PUT
- [ ] OPTIONS
- [ ] POST
@@

 
#### Q140. What is the code for this definition?
@@
The <?> method asks for a response identical to a GET request, but without the response body.
@@
- [x] HEAD
- [ ] PUT
- [ ] CONNECT
- [ ] DELETE
@@

 
#### Q141. What is the code for this definition?
@@
The <?> method submits an entity to the specified resource, often causing a change in state or side effects on the server.
@@
- [x] POST
- [ ] GET
- [ ] TRACE
- [ ] DELETE
@@

 
#### Q142. What is the code for this definition?
@@
The <?> method replaces all current representations of the target resource with the request payload.
@@
- [x] PUT
- [ ] TRACE
- [ ] PATCH
- [ ] DELETE
@@

 
#### Q143. What is the code for this definition?
@@
The <?> method deletes the specified resource.
@@
- [x] DELETE
- [ ] POST
- [ ] TRACE
- [ ] GET
@@

 
#### Q144. What is the code for this definition?
@@
The <?> method establishes a tunnel to the server identified by the target resource.
@@
- [x] CONNECT
- [ ] TRACE
- [ ] PATCH
- [ ] HEAD
@@

 
#### Q145. What is the code for this definition?
@@
The <?> method describes the communication options for the target resource.
@@
- [x] OPTIONS
- [ ] TRACE
- [ ] PUT
- [ ] HEAD
@@

 
#### Q146. What is the code for this definition?
@@
The <?> method performs a message loop-back test along the path to the target resource.
@@
- [x] TRACE
- [ ] PUT
- [ ] GET
- [ ] DELETE
@@

 
#### Q147. What is the code for this definition?
@@
The <?> method applies partial modifications to a resource.
@@
- [x] PATCH
- [ ] PUT
- [ ] DELETE
- [ ] POST
@@
#### Q148. What is the following?
@@
A <?> is the portion of a URL where data is passed to a web application and/or back-end database.
 The reason we need <?>s is that the HTTP protocol is stateless by design. 
 For a website to be anything more than a brochure, you need to maintain state (store data). 
 There are a number of ways to do this: On most web servers, you can use something like session state server-side. 
 On the client, you can store via cookies. 
Or in the URL, you can store data via a <?>.
@@
- [x] query string
- [ ] url string
- [ ] address string
- [ ] json string
@@
The URLSearchParams interface defines utility methods to work with the query string of a URL. 
The methods are similar to ordinary array and object methods.
@@
#### Q149. What is the following?
@@
The <?> interface provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the fetch() or XMLHttpRequest.send() method.
 It uses the same format a form would use if the encoding type were set to "multipart/form-data".
@@
- [x] FormData
- [ ] query string
- [ ] FormMethod
- [ ] FormClass
@@
FormData.<method> uses methods similar to ordinary object methods.
@@
#### Q150. What does MIME stand for?
@@
- [x] Multipurpose Internet Mail Extensions
- [ ] Multiuniverse Internet Mail Extensions
- [ ] Multipurpose Intenalized Mail Extensions
- [ ] Multipurpose Internet Male Extensions
@@
#### Q151. What does CORS stand for?
@@
- [x] Cross-Origin Resource Sharing
- [ ] Cross-Origin Resource Accessing
- [ ] Cross-Origin Resource Shallow
- [ ] Cross-Origin Resource Share
@@
#### Q152. What is the following?
@@
Requesting a file from another domain can cause problems, due to cross-domain policy.
Requesting an external script from another domain does not have this problem.
<?> uses this advantage, and request files using the script tag instead of the XMLHttpRequest object.
@@
- [x] JSONP
- [ ] JSON
- [ ] JSONR
- [ ] jsonp
@@
JSONP stands for JSON with Padding.
@@
#### Q153. What is the MIME type for the following extension and document kind?
@@
extension: .aac
kind: AAC audio
@@
- [x] audio/aac
- [ ] application/java-archive
- [ ] image/avif
- [ ] video/x-msvideo
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q154. What is the MIME type for the following extension and document kind?
@@
extension: .abw
kind: AbiWord document
@@
- [x] application/x-abiword
- [ ] application/xhtml+xml
- [ ] application/epub+zip
- [ ] application/vnd.amazon.ebook
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q155. What is the MIME type for the following extension and document kind?
@@
extension: .arc
kind: Archive document (multiple files embedded)
@@
- [x] application/x-freearc
- [ ] video/ogg
- [ ] application/x-abiword
- [ ] application/gzip
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q156. What is the MIME type for the following extension and document kind?
@@
extension: .avif
kind: AVIF image
@@
- [x] image/avif
- [ ] application/x-csh
- [ ] application/x-bzip
- [ ] application/vnd.openxmlformats-officedocument.wordprocessingml.document
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q157. What is the MIME type for the following extension and document kind?
@@
extension: .avi
kind: AVI: Audio Video Interleave
@@
- [x] video/x-msvideo
- [ ] audio/ogg
- [ ] image/bmp
- [ ] video/3gpp2; audio/3gpp2 if it doesn't contain video
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q158. What is the MIME type for the following extension and document kind?
@@
extension: .azw
kind: Amazon Kindle eBook format
@@
- [x] application/vnd.amazon.ebook
- [ ] image/tiff
- [ ] audio/aac
- [ ] application/epub+zip
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q159. What is the MIME type for the following extension and document kind?
@@
extension: .bin
kind: Any kind of binary data
@@
- [x] application/octet-stream
- [ ] image/tiff
- [ ] audio/wav
- [ ] image/avif
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q160. What is the MIME type for the following extension and document kind?
@@
extension: .bmp
kind: Windows OS/2 Bitmap Graphics
@@
- [x] image/bmp
- [ ] video/mpeg
- [ ] application/x-abiword
- [ ] font/ttf
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q161. What is the MIME type for the following extension and document kind?
@@
extension: .bz
kind: BZip archive
@@
- [x] application/x-bzip
- [ ] application/x-cdf
- [ ] application/ld+json
- [ ] image/gif
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q162. What is the MIME type for the following extension and document kind?
@@
extension: .bz2
kind: BZip2 archive
@@
- [x] application/x-bzip2
- [ ] application/vnd.visio
- [ ] application/msword
- [ ] application/vnd.oasis.opendocument.presentation
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q163. What is the MIME type for the following extension and document kind?
@@
extension: .cda
kind: CD audio
@@
- [x] application/x-cdf
- [ ] application/vnd.oasis.opendocument.spreadsheet
- [ ] application/vnd.oasis.opendocument.text
- [ ] video/webm
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q164. What is the MIME type for the following extension and document kind?
@@
extension: .csh
kind: C-Shell script
@@
- [x] application/x-csh
- [ ] video/mp4
- [ ] image/gif
- [ ] application/octet-stream
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q165. What is the MIME type for the following extension and document kind?
@@
extension: .css
kind: Cascading Style Sheets (CSS)
@@
- [x] text/css
- [ ] application/x-freearc
- [ ] application/ld+json
- [ ] application/x-bzip2
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q166. What is the MIME type for the following extension and document kind?
@@
extension: .csv
kind: Comma-separated values (CSV)
@@
- [x] text/csv
- [ ] audio/wav
- [ ] font/ttf
- [ ] application/vnd.oasis.opendocument.spreadsheet
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q167. What is the MIME type for the following extension and document kind?
@@
extension: .doc
kind: Microsoft Word
@@
- [x] application/msword
- [ ] application/vnd.mozilla.xul+xml
- [ ] application/java-archive
- [ ] application/vnd.amazon.ebook
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q168. What is the MIME type for the following extension and document kind?
@@
extension: .docx
kind: Microsoft Word (OpenXML)
@@
- [x] application/vnd.openxmlformats-officedocument.wordprocessingml.document
- [ ] application/vnd.apple.installer+xml
- [ ] application/epub+zip
- [ ] application/vnd.amazon.ebook
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q169. What is the MIME type for the following extension and document kind?
@@
extension: .eot
kind: MS Embedded OpenType fonts
@@
- [x] application/vnd.ms-fontobject
- [ ] text/csv
- [ ] application/ogg
- [ ] font/otf
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q170. What is the MIME type for the following extension and document kind?
@@
extension: .epub
kind: Electronic publication (EPUB)
@@
- [x] application/epub+zip
- [ ] text/javascript
- [ ] image/png
- [ ] application/vnd.amazon.ebook
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q171. What is the MIME type for the following extension and document kind?
@@
extension: .gz
kind: GZip Compressed Archive
@@
- [x] application/gzip
- [ ] video/mp2t
- [ ] application/x-freearc
- [ ] application/vnd.oasis.opendocument.text
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q172. What is the MIME type for the following extension and document kind?
@@
extension: .gif
kind: Graphics Interchange Format (GIF)
@@
- [x] image/gif
- [ ] video/mp4
- [ ] text/css
- [ ] application/vnd.ms-fontobject
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q173. What is the MIME type for the following extension and document kind?
@@
extension: .htm .html
kind: HyperText Markup Language (HTML)
@@
- [x] text/html
- [ ] application/x-csh
- [ ] image/vnd.microsoft.icon
- [ ] audio/mpeg
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q174. What is the MIME type for the following extension and document kind?
@@
extension: .ico
kind: Icon format
@@
- [x] image/vnd.microsoft.icon
- [ ] video/3gpp2; audio/3gpp2 if it doesn't contain video
- [ ] video/mp2t
- [ ] audio/ogg
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q175. What is the MIME type for the following extension and document kind?
@@
extension: .ics
kind: iCalendar format
@@
- [x] text/calendar
- [ ] application/ogg
- [ ] application/x-shockwave-flash
- [ ] application/x-httpd-php
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q176. What is the MIME type for the following extension and document kind?
@@
extension: .jar
kind: Java Archive (JAR)
@@
- [x] application/java-archive
- [ ] video/webm
- [ ] video/mp2t
- [ ] text/javascript
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q177. What is the MIME type for the following extension and document kind?
@@
extension: .jpeg .jpg
kind: JPEG images
@@
- [x] image/jpeg
- [ ] application/java-archive
- [ ] text/javascript
- [ ] video/3gpp; audio/3gpp if it doesn't contain video
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q178. What is the MIME type for the following extension and document kind?
@@
extension: .js
kind: JavaScript
@@
- [x] text/javascript (Specifications: HTML and RFC 9239)
- [ ] video/3gpp; audio/3gpp if it doesn't contain video
- [ ] application/vnd.amazon.ebook
- [ ] application/gzip
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q179. What is the MIME type for the following extension and document kind?
@@
extension: .json
kind: JSON format
@@
- [x] application/json
- [ ] application/vnd.oasis.opendocument.text
- [ ] application/vnd.apple.installer+xml
- [ ] application/x-bzip2
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q180. What is the MIME type for the following extension and document kind?
@@
extension: .jsonld
kind: JSON-LD format
@@
- [x] application/ld+json
- [ ] application/vnd.visio
- [ ] text/javascript (Specifications: HTML and RFC 9239)
- [ ] video/3gpp; audio/3gpp if it doesn't contain video
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q181. What is the MIME type for the following extension and document kind?
@@
extension: .mid .midi
kind: Musical Instrument Digital Interface (MIDI)
@@
- [x] audio/midi audio/x-midi
- [ ] application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
- [ ] application/java-archive
- [ ] application/x-7z-compressed
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q182. What is the MIME type for the following extension and document kind?
@@
extension: .mjs
kind: JavaScript module
@@
- [x] text/javascript
- [ ] video/ogg
- [ ] text/html
- [ ] text/calendar
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q183. What is the MIME type for the following extension and document kind?
@@
extension: .mp3
kind: MP3 audio
@@
- [x] audio/mpeg
- [ ] application/xhtml+xml
- [ ] text/javascript (Specifications: HTML and RFC 9239)
- [ ] application/x-tar
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q184. What is the MIME type for the following extension and document kind?
@@
extension: .mp4
kind: MP4 video
@@
- [x] video/mp4
- [ ] application/x-cdf
- [ ] font/ttf
- [ ] application/json
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q185. What is the MIME type for the following extension and document kind?
@@
extension: .mpeg
kind: MPEG Video
@@
- [x] video/mpeg
- [ ] text/calendar
- [ ] text/javascript (Specifications: HTML and RFC 9239)
- [ ] application/rtf
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q186. What is the MIME type for the following extension and document kind?
@@
extension: .mpkg
kind: Apple Installer Package
@@
- [x] application/vnd.apple.installer+xml
- [ ] application/x-abiword
- [ ] application/epub+zip
- [ ] image/jpeg
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q187. What is the MIME type for the following extension and document kind?
@@
extension: .odp
kind: OpenDocument presentation document
@@
- [x] application/vnd.oasis.opendocument.presentation
- [ ] application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
- [ ] application/x-httpd-php
- [ ] application/vnd.oasis.opendocument.text
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q188. What is the MIME type for the following extension and document kind?
@@
extension: .ods
kind: OpenDocument spreadsheet document
@@
- [x] application/vnd.oasis.opendocument.spreadsheet
- [ ] application/vnd.rar
- [ ] application/vnd.mozilla.xul+xml
- [ ] text/csv
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q189. What is the MIME type for the following extension and document kind?
@@
extension: .odt
kind: OpenDocument text document
@@
- [x] application/vnd.oasis.opendocument.text
- [ ] application/x-freearc
- [ ] text/calendar
- [ ] application/vnd.visio
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q190. What is the MIME type for the following extension and document kind?
@@
extension: .oga
kind: OGG audio
@@
- [x] audio/ogg
- [ ] application/x-bzip
- [ ] application/vnd.oasis.opendocument.spreadsheet
- [ ] video/mpeg
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q191. What is the MIME type for the following extension and document kind?
@@
extension: .ogv
kind: OGG video
@@
- [x] video/ogg
- [ ] application/msword
- [ ] application/vnd.oasis.opendocument.presentation
- [ ] application/zip
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q192. What is the MIME type for the following extension and document kind?
@@
extension: .ogx
kind: OGG
@@
- [x] application/ogg
- [ ] application/x-csh
- [ ] image/png
- [ ] application/rtf
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q193. What is the MIME type for the following extension and document kind?
@@
extension: .opus
kind: Opus audio
@@
- [x] audio/opus
- [ ] application/gzip
- [ ] application/x-abiword
- [ ] video/x-msvideo
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q194. What is the MIME type for the following extension and document kind?
@@
extension: .otf
kind: OpenType font
@@
- [x] font/otf
- [ ] application/x-7z-compressed
- [ ] application/vnd.openxmlformats-officedocument.wordprocessingml.document
- [ ] application/x-csh
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q195. What is the MIME type for the following extension and document kind?
@@
extension: .png
kind: Portable Network Graphics
@@
- [x] image/png
- [ ] application/vnd.oasis.opendocument.spreadsheet
- [ ] text/html
- [ ] text/javascript (Specifications: HTML and RFC 9239)
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q196. What is the MIME type for the following extension and document kind?
@@
extension: .pdf
kind: Adobe Portable Document Format (PDF)
@@
- [x] application/pdf
- [ ] application/ogg
- [ ] application/octet-stream
- [ ] font/otf
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q197. What is the MIME type for the following extension and document kind?
@@
extension: .php
kind: Hypertext Preprocessor (Personal Home Page)
@@
- [x] application/x-httpd-php
- [ ] font/woff
- [ ] font/otf
- [ ] application/epub+zip
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q198. What is the MIME type for the following extension and document kind?
@@
extension: .ppt
kind: Microsoft PowerPoint
@@
- [x] application/vnd.ms-powerpoint
- [ ] text/javascript
- [ ] video/x-msvideo
- [ ] application/x-bzip2
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q199. What is the MIME type for the following extension and document kind?
@@
extension: .pptx
kind: Microsoft PowerPoint (OpenXML)
@@
- [x] application/vnd.openxmlformats-officedocument.presentationml.presentation
- [ ] font/woff
- [ ] application/zip
- [ ] application/x-cdf
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q200. What is the MIME type for the following extension and document kind?
@@
extension: .rar
kind: RAR archive
@@
- [x] application/vnd.rar
- [ ] text/css
- [ ] application/epub+zip
- [ ] application/vnd.mozilla.xul+xml
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q201. What is the MIME type for the following extension and document kind?
@@
extension: .rtf
kind: Rich Text Format (RTF)
@@
- [x] application/rtf
- [ ] image/vnd.microsoft.icon
- [ ] image/tiff
- [ ] font/otf
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q202. What is the MIME type for the following extension and document kind?
@@
extension: .sh
kind: Bourne shell script
@@
- [x] application/x-sh
- [ ] application/x-cdf
- [ ] image/webp
- [ ] audio/ogg
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q203. What is the MIME type for the following extension and document kind?
@@
extension: .svg
kind: Scalable Vector Graphics (SVG)
@@
- [x] image/svg+xml
- [ ] application/vnd.ms-powerpoint
- [ ] image/webp
- [ ] application/vnd.ms-excel
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q204. What is the MIME type for the following extension and document kind?
@@
extension: .swf
kind: Small web format (SWF) or Adobe Flash document
@@
- [x] application/x-shockwave-flash
- [ ] application/rtf
- [ ] application/vnd.visio
- [ ] text/calendar
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q205. What is the MIME type for the following extension and document kind?
@@
extension: .tar
kind: Tape Archive (TAR)
@@
- [x] application/x-tar
- [ ] application/x-freearc
- [ ] application/java-archive
- [ ] audio/ogg
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q206. What is the MIME type for the following extension and document kind?
@@
extension: .tif .tiff
kind: Tagged Image File Format (TIFF)
@@
- [x] image/tiff
- [ ] application/vnd.openxmlformats-officedocument.wordprocessingml.document
- [ ] application/x-bzip
- [ ] application/x-bzip2
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q207. What is the MIME type for the following extension and document kind?
@@
extension: .ts
kind: MPEG transport stream
@@
- [x] video/mp2t
- [ ] image/png
- [ ] application/vnd.visio
- [ ] application/x-freearc
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q208. What is the MIME type for the following extension and document kind?
@@
extension: .ttf
kind: TrueType Font
@@
- [x] font/ttf
- [ ] application/x-csh
- [ ] image/bmp
- [ ] audio/ogg
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q209. What is the MIME type for the following extension and document kind?
@@
extension: .txt
kind: Text, (generally ASCII or ISO 8859-n)
@@
- [x] text/plain
- [ ] application/vnd.amazon.ebook
- [ ] video/ogg
- [ ] application/ogg
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q210. What is the MIME type for the following extension and document kind?
@@
extension: .vsd
kind: Microsoft Visio
@@
- [x] application/vnd.visio
- [ ] image/svg+xml
- [ ] text/html
- [ ] image/tiff
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q211. What is the MIME type for the following extension and document kind?
@@
extension: .wav
kind: Waveform Audio Format
@@
- [x] audio/wav
- [ ] font/woff2
- [ ] video/x-msvideo
- [ ] text/css
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q212. What is the MIME type for the following extension and document kind?
@@
extension: .weba
kind: WEBM audio
@@
- [x] audio/webm
- [ ] image/svg+xml
- [ ] image/vnd.microsoft.icon
- [ ] application/x-abiword
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q213. What is the MIME type for the following extension and document kind?
@@
extension: .webm
kind: WEBM video
@@
- [x] video/webm
- [ ] text/csv
- [ ] image/svg+xml
- [ ] audio/mpeg
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q214. What is the MIME type for the following extension and document kind?
@@
extension: .webp
kind: WEBP image
@@
- [x] image/webp
- [ ] audio/aac
- [ ] application/x-sh
- [ ] application/zip
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q215. What is the MIME type for the following extension and document kind?
@@
extension: .woff
kind: Web Open Font Format (WOFF)
@@
- [x] font/woff
- [ ] application/x-freearc
- [ ] application/vnd.rar
- [ ] application/x-tar
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q216. What is the MIME type for the following extension and document kind?
@@
extension: .woff2
kind: Web Open Font Format (WOFF)
@@
- [x] font/woff2
- [ ] text/csv
- [ ] image/svg+xml
- [ ] application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q217. What is the MIME type for the following extension and document kind?
@@
extension: .xhtml
kind: XHTML
@@
- [x] application/xhtml+xml
- [ ] application/octet-stream
- [ ] text/css
- [ ] application/zip
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q218. What is the MIME type for the following extension and document kind?
@@
extension: .xls
kind: Microsoft Excel
@@
- [x] application/vnd.ms-excel
- [ ] image/webp
- [ ] application/pdf
- [ ] application/vnd.oasis.opendocument.presentation
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q219. What is the MIME type for the following extension and document kind?
@@
extension: .xlsx
kind: Microsoft Excel (OpenXML)
@@
- [x] application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
- [ ] application/vnd.amazon.ebook
- [ ] image/webp
- [ ] video/mpeg
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q220. What is the MIME type for the following extension and document kind?
@@
extension: .xml
kind: XML
@@
- [x] application/xml is recommended as of RFC 7303 (section 4.1), but text/xml is still used sometimes. You can assign a specific MIME type to a file with .xml extension depending on how its contents are meant to be interpreted. For instance, an Atom feed is application/atom+xml, but application/xml serves as a valid default.
- [ ] application/ogg
- [ ] text/plain
- [ ] application/xhtml+xml
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q221. What is the MIME type for the following extension and document kind?
@@
extension: .xul
kind: XUL
@@
- [x] application/vnd.mozilla.xul+xml
- [ ] application/x-csh
- [ ] application/vnd.apple.installer+xml
- [ ] application/x-sh
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q222. What is the MIME type for the following extension and document kind?
@@
extension: .zip
kind: ZIP archive
@@
- [x] application/zip
- [ ] image/bmp
- [ ] video/mpeg
- [ ] font/ttf
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q223. What is the MIME type for the following extension and document kind?
@@
extension: .3gp
kind: 3GPP audio/video container
@@
- [x] video/3gpp; audio/3gpp if it doesn't contain video
- [ ] application/vnd.oasis.opendocument.spreadsheet
- [ ] application/x-abiword
- [ ] text/plain
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q224. What is the MIME type for the following extension and document kind?
@@
extension: .3g2
kind: 3GPP2 audio/video container
@@
- [x] video/3gpp2; audio/3gpp2 if it doesn't contain video
- [ ] application/pdf
- [ ] image/webp
- [ ] video/webm
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@


#### Q225. What is the MIME type for the following extension and document kind?
@@
extension: .7z
kind: 7-zip archive
@@
- [x] application/x-7z-compressed
- [ ] text/plain
- [ ] text/calendar
- [ ] application/x-abiword
@@
The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).
@@
`;

  const dataArray = data.split('####').slice(1);

  const finalDataArray = randomQuestionLogic(dataArray, dataBlockNumber);

  return finalDataArray[Math.floor(Math.random() * finalDataArray.length)];
};

export default giveRandomRESTAPIQuestion;
