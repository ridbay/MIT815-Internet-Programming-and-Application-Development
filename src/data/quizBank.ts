import { MCQ } from '../types';

export const QuizBank: MCQ[] = [
  {
    id: 1,
    question: "In the context of Web Mechanisms, what is the primary purpose of the Domain Name System (DNS)?",
    options: {
      A: "To encrypt data transmitted between the client and server",
      B: "To map human-readable domain names to machine-readable IP addresses",
      C: "To provide a secure gateway for firewall traversal",
      D: "To manage the routing of physical packets across the internet backbone"
    },
    answer: "B",
    explanation: "DNS acts like the internet's phonebook, translating domain names like 'google.com' into IP addresses so browsers can load internet resources."
  },
  {
    id: 2,
    question: "Which of the following best describes the 'Stateless' nature of the HTTP protocol?",
    options: {
      A: "The server does not maintain any information about the client between consecutive requests",
      B: "The client and server must maintain a persistent connection throughout the session",
      C: "Data is transmitted without any header information to save bandwidth",
      D: "Only one request can be processed at a time per TCP connection"
    },
    answer: "A",
    explanation: "HTTP is stateless because each request is executed independently, without the knowledge of the requests that came before it. Cookies and sessions are used to manage state on top of HTTP."
  },
  {
    id: 3,
    question: "What is the function of a Proxy Server in a web architecture?",
    options: {
      A: "To host the primary database for the application",
      B: "To act as an intermediary for requests from clients seeking resources from other servers",
      C: "To provide the final HTML rendering for the client's browser",
      D: "To manage the physical hardware of the web server"
    },
    answer: "B",
    explanation: "A proxy server sits between a client and a server, forwarding requests and sometimes providing additional features like caching, anonymity, or security filtering."
  },
  {
    id: 4,
    question: "Which HTTP status code category indicates a client-side error?",
    options: {
      A: "2xx",
      B: "3xx",
      C: "4xx",
      D: "5xx"
    },
    answer: "C",
    explanation: "4xx codes (like 404 Not Found) indicate that the request contains bad syntax or cannot be fulfilled due to a client-related issue."
  },
  {
    id: 5,
    question: "In a URL (Uniform Resource Locator), which part identifies the specific protocol being used?",
    options: {
      A: "Domain",
      B: "Path",
      C: "Scheme",
      D: "Fragment"
    },
    answer: "C",
    explanation: "The scheme (e.g., http, https, ftp) identifies the protocol used to access the resource."
  },
  {
    id: 6,
    question: "What is the primary difference between HTTP GET and POST methods?",
    options: {
      A: "GET is secure while POST is not",
      B: "GET requests data from a resource, while POST submits data to be processed",
      C: "GET can only handle small amounts of data, whereas POST is unlimited",
      D: "GET is used for server-side scripts only, whereas POST is for static files"
    },
    answer: "B",
    explanation: "GET is idempotent and meant for retrieval, while POST is meant for creating/updating resources and carries data in the message body."
  },
  {
    id: 7,
    question: "Which header is used by a client to indicate the media types it can understand?",
    options: {
      A: "Content-Type",
      B: "Accept",
      C: "User-Agent",
      D: "Authorization"
    },
    answer: "B",
    explanation: "The 'Accept' request header advertises which content types, expressed as MIME types, the client is able to understand."
  },
  {
    id: 8,
    question: "What does the 'Cache-Control' header manage?",
    options: {
      A: "The amount of memory used by the CPU",
      B: "How, and for how long, a response can be cached by the browser and intermediate proxies",
      C: "The speed of the network connection",
      D: "The number of concurrent users allowed on the site"
    },
    answer: "B",
    explanation: "Cache-Control is the primary header for modern web caching, specifying directives like 'no-cache', 'public', or 'max-age'."
  },
  {
    id: 9,
    question: "In web mechanisms, what is 'Latency'?",
    options: {
      A: "The total amount of data transferred per second",
      B: "The time delay between a client request and the start of the server response",
      C: "The physical distance between the client and the server",
      D: "The number of errors encountered during a session"
    },
    answer: "B",
    explanation: "Latency refers to the 'wait time' in a network, distinct from bandwidth (throughput)."
  },
  {
    id: 10,
    question: "What is the purpose of the 'Host' header in HTTP/1.1?",
    options: {
      A: "To specify the IP address of the client",
      B: "To allow multiple websites to be hosted on a single IP address (Virtual Hosting)",
      C: "To identify the operating system of the server",
      D: "To set the maximum time a connection can stay open"
    },
    answer: "B",
    explanation: "The Host header allows the server to distinguish which domain the client is requesting, enabling shared hosting."
  },
  {
    id: 11,
    question: "Which HTTP method is considered 'Idempotent'?",
    options: {
      A: "POST",
      B: "PATCH",
      C: "PUT",
      D: "CONNECT"
    },
    answer: "C",
    explanation: "An idempotent operation is one that has no additional effect if it is called more than once with the same input parameters. PUT and DELETE are idempotent; POST is not."
  },
  {
    id: 12,
    question: "What is the primary role of a Web Browser's Rendering Engine?",
    options: {
      A: "To execute JavaScript code",
      B: "To transform HTML and CSS into a visual representation on the screen",
      C: "To manage the network connection via TCP/IP",
      D: "To store user passwords and bookmarks"
    },
    answer: "B",
    explanation: "The rendering engine (e.g., Blink, WebKit, Gecko) parses HTML/CSS and calculates the layout to paint pixels on the screen."
  },
  {
    id: 13,
    question: "What does the 301 Moved Permanently status code signify?",
    options: {
      A: "The resource has been deleted and will never return",
      B: "The resource has been temporarily moved to a different URL",
      C: "The resource has been permanently assigned a new URI",
      D: "The client lacks authorization to view the resource"
    },
    answer: "C",
    explanation: "301 is a permanent redirect, telling browsers and search engines to update their links to the new URI."
  },
  {
    id: 14,
    question: "Which of the following is NOT a component of a standard HTTP request message?",
    options: {
      A: "Request Line",
      B: "Status Line",
      C: "Headers",
      D: "Entity Body"
    },
    answer: "B",
    explanation: "The 'Status Line' is part of an HTTP *Response*, not a request. Requests have a 'Request Line' (Method, URI, Version)."
  },
  {
    id: 15,
    question: "How does HTTPS provide security compared to standard HTTP?",
    options: {
      A: "By using a faster compression algorithm",
      B: "By encrypting communication using TLS/SSL",
      C: "By requiring a username and password for every request",
      D: "By blocking all third-party cookies"
    },
    answer: "B",
    explanation: "HTTPS (HTTP Secure) wraps HTTP in a TLS/SSL layer to provide encryption, data integrity, and authentication."
  },
  {
    id: 16,
    question: "What is the 'Keep-Alive' header used for in HTTP?",
    options: {
      A: "To prevent the browser from crashing",
      B: "To allow a single TCP connection to remain open for multiple HTTP requests",
      C: "To notify the server that the user is still active on the page",
      D: "To refresh the page automatically every few seconds"
    },
    answer: "B",
    explanation: "Persistent connections (Keep-Alive) reduce latency by avoiding the overhead of repeated TCP handshakes for every resource (images, scripts, etc.)."
  },
  {
    id: 17,
    question: "Which of the following status codes represents an Internal Server Error?",
    options: {
      A: "400",
      B: "403",
      C: "500",
      D: "503"
    },
    answer: "C",
    explanation: "500 is the generic 'catch-all' error for when something goes wrong on the server side that doesn't fall into a more specific category."
  },
  {
    id: 18,
    question: "What is the purpose of a 'Cookie' in web development?",
    options: {
      A: "To speed up the rendering of images",
      B: "To store small pieces of data on the client side to maintain state",
      C: "To provide a backup of the server's database",
      D: "To track the physical location of the user's hardware"
    },
    answer: "B",
    explanation: "Cookies are small text files sent by the server and stored by the browser, used for session management, personalization, and tracking."
  },
  {
    id: 19,
    question: "What is a 'User-Agent' string?",
    options: {
      A: "A unique identifier for the specific person using the computer",
      B: "A string sent in headers that identifies the browser and operating system of the client",
      C: "A security token used for administrative access",
      D: "A list of all plugins installed in the browser"
    },
    answer: "B",
    explanation: "The User-Agent string tells the server about the client's software environment, which can be used for content negotiation or analytics."
  },
  {
    id: 20,
    question: "In the context of the Web, what does 'URI' stand for?",
    options: {
      A: "Universal Resource Identifier",
      B: "Uniform Resource Identifier",
      C: "Uniform Remote Interface",
      D: "Universal Remote Index"
    },
    answer: "B",
    explanation: "A Uniform Resource Identifier (URI) is a string of characters used to identify a resource, with URLs being a specific type of URI."
  },
  {
    id: 21,
    question: "Which HTTP status code is used for 'Unauthorized' access?",
    options: {
      A: "401",
      B: "403",
      C: "404",
      D: "405"
    },
    answer: "A",
    explanation: "401 Unauthorized indicates that the request requires user authentication. 403 Forbidden means the server understands but refuses to fulfill it (even with authentication)."
  },
  {
    id: 22,
    question: "What is the 'Content-Length' header?",
    options: {
      A: "The number of characters in the URL",
      B: "The size of the entity-body in bytes",
      C: "The duration of time it took to generate the page",
      D: "The number of headers included in the message"
    },
    answer: "B",
    explanation: "Content-Length tells the recipient how many bytes to expect in the body of the message."
  },
  {
    id: 23,
    question: "What is 'CORS' (Cross-Origin Resource Sharing)?",
    options: {
      A: "A method for sharing hard drive space between servers",
      B: "A security mechanism that allows or restricts requested resources on a web page to be requested from another domain",
      C: "A protocol for peer-to-peer file sharing via browsers",
      D: "A way to speed up the loading of CSS files from external CDNs"
    },
    answer: "B",
    explanation: "CORS is a browser-enforced security policy that manages how a web application at one origin can interact with resources from a different origin."
  },
  {
    id: 24,
    question: "Which HTTP method is typically used to update a resource partially?",
    options: {
      A: "PUT",
      B: "POST",
      C: "PATCH",
      D: "UPDATE"
    },
    answer: "C",
    explanation: "PATCH is used for partial modifications, whereas PUT is intended to replace the entire resource."
  },
  {
    id: 25,
    question: "What is the 'Referer' header used for?",
    options: {
      A: "To specify the preferred language of the user",
      B: "To identify the address of the webpage which linked to the resource being requested",
      C: "To provide a list of recommended search terms",
      D: "To track the time spent on the previous page"
    },
    answer: "B",
    explanation: "The Referer header allows servers to identify where people are coming from, used for analytics, logging, or optimized caching."
  },
  {
    id: 26,
    question: "What is a 'Reverse Proxy'?",
    options: {
      A: "A proxy that hides the client's identity from the server",
      B: "A server that sits in front of one or more web servers and intercepts requests from clients",
      C: "A backup server that takes over if the main server fails",
      D: "A tool used by developers to debug network requests locally"
    },
    answer: "B",
    explanation: "A reverse proxy (like Nginx) acts as the 'face' of the web server, providing load balancing, SSL termination, and caching."
  },
  {
    id: 27,
    question: "Which status code represents 'Service Unavailable' (often due to overload or maintenance)?",
    options: {
      A: "500",
      B: "502",
      C: "503",
      D: "504"
    },
    answer: "C",
    explanation: "503 indicates a temporary state where the server is unable to handle the request."
  },
  {
    id: 28,
    question: "What is 'Content Negotiation' in HTTP?",
    options: {
      A: "The process of agreeing on a price for web services",
      B: "The mechanism that allows for serving different versions of a resource (e.g., language or format) based on client headers",
      C: "A security handshake between a browser and a server",
      D: "The compression of data to fit network bandwidth constraints"
    },
    answer: "B",
    explanation: "Using headers like 'Accept-Language' or 'Accept-Encoding', the server can decide which representation of a resource to send."
  },
  {
    id: 29,
    question: "In the URL 'https://example.com:8080/path/to/page', what does '8080' represent?",
    options: {
      A: "The security certificate ID",
      B: "The port number",
      C: "The sub-domain index",
      D: "The encryption strength"
    },
    answer: "B",
    explanation: "Port 80 is the default for HTTP, and 443 for HTTPS. Other ports like 8080 are often used for development or alternative services."
  },
  {
    id: 30,
    question: "What is the 'Same-Origin Policy' (SOP)?",
    options: {
      A: "A policy that requires all users to use the same browser version",
      B: "A critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin",
      C: "A rule that prevents different websites from using the same CSS styles",
      D: "A law requiring all servers in a country to follow the same data privacy standards"
    },
    answer: "B",
    explanation: "SOP is the fundamental security model of the web, preventing malicious sites from reading data from other sites (like your bank) in your browser."
  },
  {
    id: 31,
    question: "Which HTML5 element is used to specify a footer for a document or section?",
    options: {
      A: "<bottom>",
      B: "<footer>",
      C: "<section-footer>",
      D: "<end>"
    },
    answer: "B",
    explanation: "The <footer> element typically contains the author, copyright information, contact info, sitemap, back to top links, and related documents."
  },
  {
    id: 32,
    question: "In HTML5, which attribute is used to provide a hint to the user of what can be entered in an input field?",
    options: {
      A: "value",
      B: "placeholder",
      C: "hint",
      D: "title"
    },
    answer: "B",
    explanation: "The placeholder attribute specifies a short hint that describes the expected value of an input field."
  },
  {
    id: 33,
    question: "Which HTML5 tag is used to draw graphics on the fly via scripting (usually JavaScript)?",
    options: {
      A: "<graphics>",
      B: "<canvas>",
      C: "<draw>",
      D: "<paint>"
    },
    answer: "B",
    explanation: "The <canvas> element is used to draw graphics, on the fly, via scripting (usually JavaScript)."
  },
  {
    id: 34,
    question: "What is the purpose of the <main> element in HTML5?",
    options: {
      A: "To contain the navigation links for the entire site",
      B: "To represent the dominant content of the <body> of a document",
      C: "To hold the primary JavaScript logic for the page",
      D: "To wrap the entire contents of the HTML document"
    },
    answer: "B",
    explanation: "The <main> element should be unique to the document and contains content that is directly related to or expands upon the central topic of the document."
  },
  {
    id: 35,
    question: "Which HTML5 element is used to display a scalar measurement within a known range?",
    options: {
      A: "<progress>",
      B: "<meter>",
      C: "<range>",
      D: "<measure>"
    },
    answer: "B",
    explanation: "The <meter> element defines a scalar measurement within a known range, or a fractional value (like disk usage or relevance of a search result)."
  },
  {
    id: 36,
    question: "In HTML5, what is the 'SVG' element used for?",
    options: {
      A: "Storing Variable Graphics",
      B: "Defining vector-based graphics in XML format",
      C: "Standard Video Graphics",
      D: "Server-side Visual Generation"
    },
    answer: "B",
    explanation: "SVG stands for Scalable Vector Graphics, used to define graphics for the Web that do not lose quality if they are zoomed or resized."
  },
  {
    id: 37,
    question: "Which of the following is a new HTML5 input type that provides a slider control?",
    options: {
      A: "type='slider'",
      B: "type='range'",
      C: "type='number'",
      D: "type='scroll'"
    },
    answer: "B",
    explanation: "The range input type defines a control for entering a number whose exact value is not important (like a slider control)."
  },
  {
    id: 38,
    question: "What is the function of the <article> element?",
    options: {
      A: "To define a sub-section of a page",
      B: "To define self-contained, independent content (like a blog post or news story)",
      C: "To link to an external article",
      D: "To format text in a newspaper-style column"
    },
    answer: "B",
    explanation: "The <article> element specifies independent, self-contained content that could be distributed independently from the rest of the site."
  },
  {
    id: 39,
    question: "Which HTML5 attribute can be used to store custom data private to the page or application?",
    options: {
      A: "custom-*",
      B: "data-*",
      C: "attr-*",
      D: "meta-*"
    },
    answer: "B",
    explanation: "The data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks."
  },
  {
    id: 40,
    question: "What does the <figure> element represent in HTML5?",
    options: {
      A: "A mathematical equation",
      B: "Self-contained content, like illustrations, diagrams, photos, code listings, etc., often with a caption",
      C: "A specific number mentioned in the text",
      D: "A container for SVG graphics only"
    },
    answer: "B",
    explanation: "The <figure> element is used to group any content that can be referenced from the main flow of the document (using <figcaption> for the caption)."
  },
  {
    id: 41,
    question: "What does DOM stand for?",
    options: {
      A: "Data Object Model",
      B: "Document Object Model",
      C: "Digital Object Management",
      D: "Dynamic Object Markup"
    },
    answer: "B",
    explanation: "The Document Object Model (DOM) is a programming interface for web documents, representing the page as a tree of objects."
  },
  {
    id: 42,
    question: "Which DOM method is used to select an element by its unique identifier?",
    options: {
      A: "document.querySelector()",
      B: "document.getElementById()",
      C: "document.getElementByClassName()",
      D: "document.find()"
    },
    answer: "B",
    explanation: "getElementById is the most efficient way to select a specific element that has an 'id' attribute."
  },
  {
    id: 43,
    question: "In the DOM, what is the difference between 'NodeList' and 'HTMLCollection'?",
    options: {
      A: "NodeList is live, HTMLCollection is static",
      B: "HTMLCollection only contains Element nodes, while NodeList can contain any node type (text, comments, etc.)",
      C: "There is no difference; they are different names for the same thing",
      D: "HTMLCollection is only used in older browsers"
    },
    answer: "B",
    explanation: "HTMLCollection is a collection of elements, whereas a NodeList can contain any type of node. Note that some NodeLists (like childNodes) are live, while others (like querySelectorAll) are static."
  },
  {
    id: 44,
    question: "What is 'Event Bubbling' in the DOM?",
    options: {
      A: "The process of creating multiple events at once",
      B: "The phenomenon where an event triggers on the innermost element and then moves up through its parents",
      C: "The deletion of an event after it has been executed",
      D: "The synchronization of events across multiple tabs"
    },
    answer: "B",
    explanation: "In bubbling, the event starts at the most specific element (the target) and propagates upwards to the document root."
  },
  {
    id: 45,
    question: "Which method is used to add a new child node to an element as its last child?",
    options: {
      A: "appendChild()",
      B: "insertChild()",
      C: "addChild()",
      D: "prepend()"
    },
    answer: "A",
    explanation: "appendChild() adds a node to the end of the list of children of a specified parent node."
  },
  {
    id: 46,
    question: "What does 'event.preventDefault()' do?",
    options: {
      A: "It stops the event from bubbling up the DOM",
      B: "It prevents the browser's default action associated with the event (e.g., following a link)",
      C: "It deletes the element that triggered the event",
      D: "It forces the event to trigger on all parent elements immediately"
    },
    answer: "B",
    explanation: "preventDefault() is used to stop the default behavior of an element, such as submitting a form or navigating via an <a> tag."
  },
  {
    id: 47,
    question: "Which property is used to get or set the text content of an element and its descendants, ignoring any HTML tags?",
    options: {
      A: "innerHTML",
      B: "textContent",
      C: "value",
      D: "outerHTML"
    },
    answer: "B",
    explanation: "textContent returns the raw text of all nodes inside an element. innerHTML would return the HTML string including tags."
  },
  {
    id: 48,
    question: "What is the 'DOM Tree'?",
    options: {
      A: "A list of all JavaScript files used on the page",
      B: "A hierarchical structure representing the HTML document where each element is a node",
      C: "A visual representation of the CSS box model",
      D: "The folder structure of the web project on the server"
    },
    answer: "B",
    explanation: "The DOM represents the document as a logical tree where each branch ends in a node, and each node contains objects."
  },
  {
    id: 49,
    question: "Which method allows you to listen for specific events on a DOM element?",
    options: {
      A: "onEvent()",
      B: "addEventListener()",
      C: "setListener()",
      D: "attachEvent()"
    },
    answer: "B",
    explanation: "addEventListener() is the modern standard for attaching event handlers to elements without overwriting existing ones."
  },
  {
    id: 50,
    question: "What is 'Event Delegation'?",
    options: {
      A: "The process of assigning multiple events to a single button",
      B: "A technique of using a single event listener on a parent element to manage events for all its children",
      C: "Delegating the execution of an event to a Web Worker",
      D: "Automatically triggering an event when the page loads"
    },
    answer: "B",
    explanation: "Event delegation takes advantage of event bubbling. By listening on a parent, you can handle events for existing and future child elements efficiently."
  },
  {
    id: 51,
    question: "What does CSS stand for?",
    options: {
      A: "Creative Style Sheets",
      B: "Cascading Style Sheets",
      C: "Computer Style Sheets",
      D: "Colorful Style Sheets"
    },
    answer: "B",
    explanation: "CSS describes how HTML elements are to be displayed on screen, paper, or in other media. 'Cascading' refers to how styles are applied based on priority and source."
  },
  {
    id: 52,
    question: "In the CSS Box Model, which property is used to create space around an element's content, inside of any defined borders?",
    options: {
      A: "margin",
      B: "padding",
      C: "spacing",
      D: "border-width"
    },
    answer: "B",
    explanation: "Padding is the space between the content and the border. Margin is the space outside the border."
  },
  {
    id: 53,
    question: "Which CSS selector targets elements with a specific class?",
    options: {
      A: "#id",
      B: ".class",
      C: "element",
      D: "[attribute]"
    },
    answer: "B",
    explanation: "The dot (.) followed by the class name selects all elements with that class attribute."
  },
  {
    id: 54,
    question: "What is the default value of the 'position' property in CSS?",
    options: {
      A: "relative",
      B: "absolute",
      C: "static",
      D: "fixed"
    },
    answer: "C",
    explanation: "Static elements are not affected by top, bottom, left, and right properties; they always flow according to the normal page flow."
  },
  {
    id: 55,
    question: "Which CSS property is used to change the text color of an element?",
    options: {
      A: "text-color",
      B: "fgcolor",
      C: "color",
      D: "font-color"
    },
    answer: "C",
    explanation: "The 'color' property specifies the color of the text (foreground color)."
  },
  {
    id: 56,
    question: "In CSS Flexbox, which property is used on the parent container to define the main axis alignment of items?",
    options: {
      A: "align-items",
      B: "justify-content",
      C: "flex-direction",
      D: "main-align"
    },
    answer: "B",
    explanation: "justify-content aligns items along the main axis (usually horizontal), while align-items aligns them along the cross axis (usually vertical)."
  },
  {
    id: 57,
    question: "What does the 'z-index' property control?",
    options: {
      A: "The zoom level of the page",
      B: "The stack order of elements (which one is in front)",
      C: "The transparency of an element",
      D: "The width of the element on the Z-axis"
    },
    answer: "B",
    explanation: "z-index specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order."
  },
  {
    id: 58,
    question: "Which CSS unit is relative to the font-size of the element's parent?",
    options: {
      A: "px",
      B: "rem",
      C: "em",
      D: "%"
    },
    answer: "C",
    explanation: "1em is equal to the current font size. If used on the font-size property itself, it is relative to the parent's font size. 'rem' is relative to the root (html) font size."
  },
  {
    id: 59,
    question: "What is the purpose of a CSS 'Media Query'?",
    options: {
      A: "To play videos on the webpage",
      B: "To apply different styles based on device characteristics like width, height, or orientation",
      C: "To query the database for media files",
      D: "To track user behavior on the site"
    },
    answer: "B",
    explanation: "Media queries are the foundation of responsive design, allowing the site to adapt to different screen sizes."
  },
  {
    id: 60,
    question: "Which property is used to change the left margin of an element?",
    options: {
      A: "padding-left",
      B: "margin-left",
      C: "indent",
      D: "left-margin"
    },
    answer: "B",
    explanation: "margin-left adds space outside the element's border on the left side."
  },
  {
    id: 61,
    question: "In CSS Grid, what does 'grid-template-columns: repeat(3, 1fr);' do?",
    options: {
      A: "Creates 3 columns of 100 pixels each",
      B: "Creates 3 columns of equal width that fill the available space",
      C: "Repeats the first column 3 times",
      D: "Sets the grid to have 3 rows"
    },
    answer: "B",
    explanation: "The 'fr' unit represents a fraction of the free space in the grid container."
  },
  {
    id: 62,
    question: "What is the 'Specificity' of a CSS selector?",
    options: {
      A: "How fast the browser can render the element",
      B: "The set of rules that determine which style is applied when multiple rules target the same element",
      C: "The physical dimensions of the element in pixels",
      D: "The number of children an element has"
    },
    answer: "B",
    explanation: "Specificity is calculated based on the types of selectors used (ID, Class, Element). IDs have higher specificity than classes."
  },
  {
    id: 63,
    question: "Which CSS property allows you to make an element transparent?",
    options: {
      A: "visibility",
      B: "display",
      C: "opacity",
      D: "transparent"
    },
    answer: "C",
    explanation: "The opacity property takes a value from 0.0 (fully transparent) to 1.0 (fully opaque)."
  },
  {
    id: 64,
    question: "What is the difference between 'display: none' and 'visibility: hidden'?",
    options: {
      A: "There is no difference",
      B: "display: none removes the element from the layout; visibility: hidden keeps the space but hides the content",
      C: "visibility: hidden removes the element from the DOM",
      D: "display: none only works on images"
    },
    answer: "B",
    explanation: "display: none hides the element and it takes up no space. visibility: hidden hides it but the space it occupied is still there."
  },
  {
    id: 65,
    question: "How do you select all <p> elements inside a <div> element?",
    options: {
      A: "div p",
      B: "div + p",
      C: "div.p",
      D: "p > div"
    },
    answer: "A",
    explanation: "The descendant selector (space) matches all elements that are descendants of a specified element."
  },
  {
    id: 66,
    question: "Which CSS property is used to create a shadow around an element?",
    options: {
      A: "box-shadow",
      B: "element-shadow",
      C: "shadow-effect",
      D: "outline-shadow"
    },
    answer: "A",
    explanation: "box-shadow attaches one or more shadows to an element."
  },
  {
    id: 67,
    question: "What is 'Responsive Web Design'?",
    options: {
      A: "A website that responds quickly to user clicks",
      B: "A design approach that makes web pages render well on a variety of devices and window or screen sizes",
      C: "A website that uses a lot of animations",
      D: "A server that responds to requests in under 100ms"
    },
    answer: "B",
    explanation: "RWD uses fluid grids, flexible images, and media queries to provide an optimal viewing experience."
  },
  {
    id: 68,
    question: "Which CSS property is used to align text within an element?",
    options: {
      A: "text-align",
      B: "align-text",
      C: "horizontal-align",
      D: "text-position"
    },
    answer: "A",
    explanation: "text-align can set values like 'left', 'right', 'center', or 'justify'."
  },
  {
    id: 70,
    question: "What is a CSS 'Pseudo-class'?",
    options: {
      A: "A class that doesn't exist",
      B: "A keyword added to a selector that specifies a special state of the selected element (e.g., :hover)",
      C: "A class used for JavaScript only",
      D: "A way to group multiple classes together"
    },
    answer: "B",
    explanation: "Pseudo-classes like :hover, :active, and :focus are used to style elements based on user interaction or position in the DOM."
  },
  {
    id: 71,
    question: "Which keyword is used to declare a block-scoped variable in modern JavaScript?",
    options: {
      A: "var",
      B: "let",
      C: "define",
      D: "global"
    },
    answer: "B",
    explanation: "let (and const) provide block scoping, whereas var is function-scoped."
  },
  {
    id: 72,
    question: "What is the output of 'console.log(typeof [])' in JavaScript?",
    options: {
      A: "'array'",
      B: "'list'",
      C: "'object'",
      D: "'undefined'"
    },
    answer: "C",
    explanation: "In JavaScript, arrays are a special type of object."
  },
  {
    id: 73,
    question: "What is a 'Closure' in JavaScript?",
    options: {
      A: "A function that has been deleted",
      B: "A function bundled together with its lexical environment, allowing it to access variables from an outer scope even after that scope has closed",
      C: "The closing bracket of a loop",
      D: "A way to terminate a script execution"
    },
    answer: "B",
    explanation: "Closures are created every time a function is created, at function creation time."
  },
  {
    id: 74,
    question: "How do you write a conditional statement for executing some code if 'i' is equal to 5?",
    options: {
      A: "if i = 5 then",
      B: "if (i == 5)",
      C: "if i == 5",
      D: "if i = 5"
    },
    answer: "B",
    explanation: "JavaScript use parenthetical conditions for 'if' statements and comparison operators like '==' or '==='."
  },
  {
    id: 75,
    question: "Which method is used to add a new element to the end of an array?",
    options: {
      A: "pop()",
      B: "push()",
      C: "shift()",
      D: "unshift()"
    },
    answer: "B",
    explanation: "push() adds to the end; unshift() adds to the beginning. pop() removes from the end; shift() removes from the beginning."
  },
  {
    id: 76,
    question: "What is the 'this' keyword in a JavaScript method?",
    options: {
      A: "It refers to the current function",
      B: "It refers to the object the method belongs to",
      C: "It refers to the previous variable",
      D: "It refers to the window object only"
    },
    answer: "B",
    explanation: "In an object method, 'this' refers to the object itself."
  },
  {
    id: 77,
    question: "What is the purpose of 'use strict' at the beginning of a JavaScript file?",
    options: {
      A: "To disable all console logs",
      B: "To enforce stricter parsing and error handling of the code",
      C: "To make the code run faster",
      D: "To allow the use of experimental features"
    },
    answer: "B",
    explanation: "Strict mode catches common coding bloopers, throwing exceptions for things that would otherwise be ignored (like using undeclared variables)."
  },
  {
    id: 78,
    question: "Which of the following is NOT a falsy value in JavaScript?",
    options: {
      A: "0",
      B: "'' (empty string)",
      C: "false",
      D: "'0' (string containing zero)"
    },
    answer: "D",
    explanation: "A non-empty string is truthy, even if it contains the character '0'."
  },
  {
    id: 79,
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: {
      A: "There is no difference",
      B: "==' performs type coercion, while '===' checks both value and type",
      C: "===' is used for strings only",
      D: "==' is faster than '==='"
    },
    answer: "B",
    explanation: "'===' is the strict equality operator and is generally recommended to avoid bugs caused by unexpected type conversion."
  },
  {
    id: 80,
    question: "What is 'Asynchronous' programming in JavaScript?",
    options: {
      A: "Running code line by line from top to bottom",
      B: "A way to perform tasks without blocking the main execution thread (e.g., fetching data)",
      C: "Writing code that runs on the server instead of the browser",
      D: "A method of encrypting JavaScript files"
    },
    answer: "B",
    explanation: "JS is single-threaded, so asynchronous patterns (callbacks, promises, async/await) are used to handle long-running operations without freezing the UI."
  },
  {
    id: 81,
    question: "What is a 'Promise' in JavaScript?",
    options: {
      A: "A guarantee that the code will never crash",
      B: "An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value",
      C: "A keyword used to define a class",
      D: "A list of required parameters for a function"
    },
    answer: "B",
    explanation: "Promises allow you to associate handlers with an asynchronous action's eventual success value or failure reason."
  },
  {
    id: 82,
    question: "Which array method creates a new array with all elements that pass a test?",
    options: {
      A: "map()",
      B: "forEach()",
      C: "filter()",
      D: "reduce()"
    },
    answer: "C",
    explanation: "filter() returns a new array containing only the items for which the callback returned true."
  },
  {
    id: 83,
    question: "What does the 'spread operator' (...) do in an array literal?",
    options: {
      A: "Deletes the array",
      B: "Expands the elements of an array into a new array",
      C: "Calculates the sum of all elements",
      D: "Sorts the array in ascending order"
    },
    answer: "B",
    explanation: "The spread operator allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected."
  },
  {
    id: 84,
    question: "What is 'Hoisting' in JavaScript?",
    options: {
      A: "Moving an element to the top of the DOM",
      B: "The default behavior of moving declarations to the top of the current scope before code execution",
      C: "Increasing the memory limit of the browser",
      D: "A way to import external libraries"
    },
    answer: "B",
    explanation: "Variable and function declarations are put into memory during the compile phase, which allows them to be used before they are declared in the code (though variables declared with let/const are in the Temporal Dead Zone)."
  },
  {
    id: 85,
    question: "Which function is used to parse a string into a JSON object?",
    options: {
      A: "JSON.toString()",
      B: "JSON.parse()",
      C: "JSON.stringify()",
      D: "JSON.objectify()"
    },
    answer: "B",
    explanation: "JSON.parse() takes a JSON string and transforms it into a JS object. JSON.stringify() does the opposite."
  },
  {
    id: 86,
    question: "What is an 'Arrow Function'?",
    options: {
      A: "A function that can only be used once",
      B: "A shorter syntax for writing function expressions that also captures the 'this' value of the enclosing context",
      C: "A function that automatically executes when the page loads",
      D: "A function used for drawing arrows on a canvas"
    },
    answer: "B",
    explanation: "Arrow functions don't have their own 'this' or 'arguments' object, making them ideal for callbacks and methods."
  },
  {
    id: 87,
    question: "What is the purpose of the 'async' keyword before a function definition?",
    options: {
      A: "To make the function run in a separate thread",
      B: "To ensure the function always returns a Promise",
      C: "To hide the function from other scripts",
      D: "To indicate the function is a generator"
    },
    answer: "B",
    explanation: "An async function implicitly returns a promise. Inside it, you can use the 'await' keyword."
  },
  {
    id: 88,
    question: "Which loop is specifically designed to iterate over the properties of an object?",
    options: {
      A: "for...of",
      B: "for...in",
      C: "while",
      D: "do...while"
    },
    answer: "B",
    explanation: "for...in iterates over enumerable string properties of an object. for...of is used for iterable objects like arrays."
  },
  {
    id: 89,
    question: "What is 'Template Literals' in JavaScript?",
    options: {
      A: "A way to write HTML in a string using backticks (`) and allowing embedded expressions with ${}",
      B: "A set of rules for naming variables",
      C: "A predefined set of CSS styles",
      D: "A library for managing database templates"
    },
    answer: "A",
    explanation: "Template literals provide an easy way to interpolate variables and expressions into strings."
  },
  {
    id: 90,
    question: "What is the 'DOM Content Loaded' event?",
    options: {
      A: "Triggers when the whole page has finished loading, including all images and stylesheets",
      B: "Triggers when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets and images",
      C: "Triggers when the user clicks on any element",
      D: "Triggers when a script is injected into the page"
    },
    answer: "B",
    explanation: "This is usually the best time to start running JS that interacts with the DOM."
  },
  {
    id: 91,
    question: "What is the 'Event Loop' in JavaScript?",
    options: {
      A: "A loop that counts the number of events on a page",
      B: "The mechanism that allows JS to perform non-blocking I/O operations by offloading tasks to the system kernel and picking up results via a callback queue",
      C: "A security feature that prevents infinite loops",
      D: "A tool for debugging event listeners"
    },
    answer: "B",
    explanation: "The event loop continuously checks if the call stack is empty and then processes the next task from the callback/microtask queue."
  },
  {
    id: 92,
    question: "What is 'Destructuring Assignment'?",
    options: {
      A: "Deleting an object from memory",
      B: "A syntax that allows for unpacking values from arrays or properties from objects into distinct variables",
      C: "Changing the data type of a variable",
      D: "A way to combine two objects into one"
    },
    answer: "B",
    explanation: "Example: const { name, age } = user; extracts those properties into variables of the same name."
  },
  {
    id: 93,
    question: "Which method is used to execute a function after a specified number of milliseconds?",
    options: {
      A: "wait()",
      B: "delay()",
      C: "setTimeout()",
      D: "setInterval()"
    },
    answer: "C",
    explanation: "setTimeout() runs the code once after the delay. setInterval() runs it repeatedly at the specified interval."
  },
  {
    id: 94,
    question: "What is the 'Prototype' in JavaScript?",
    options: {
      A: "A draft version of a script",
      B: "An internal property that allows objects to inherit features from one another",
      C: "A security protocol for web applications",
      D: "A list of all global variables"
    },
    answer: "B",
    explanation: "JS is a prototype-based language. When you access a property on an object, JS looks at the object, then its prototype, and so on up the prototype chain."
  },
  {
    id: 95,
    question: "What is the output of '0 == false' and '0 === false'?",
    options: {
      A: "true, true",
      B: "false, false",
      C: "true, false",
      D: "false, true"
    },
    answer: "C",
    explanation: "The loose equality operator (==) coerces 0 to false. The strict equality operator (===) sees that one is a number and one is a boolean."
  },
  {
    id: 96,
    question: "How do you stop a loop from continuing to its next iteration?",
    options: {
      A: "break",
      B: "continue",
      C: "stop",
      D: "return"
    },
    answer: "B",
    explanation: "continue skips the rest of the current iteration and starts the next one. break terminates the loop entirely."
  },
  {
    id: 97,
    question: "What is 'Callback Hell'?",
    options: {
      A: "A program that never stops calling functions",
      B: "A situation where multiple nested callbacks make code difficult to read and maintain",
      C: "A security vulnerability in web servers",
      D: "A tool used to test callback performance"
    },
    answer: "B",
    explanation: "This is often solved using Promises or Async/Await to flatten the code structure."
  },
  {
    id: 98,
    question: "Which statement is used to handle errors in JavaScript?",
    options: {
      A: "try...catch",
      B: "if...else",
      C: "error...handle",
      D: "debug...trace"
    },
    answer: "A",
    explanation: "Code that might throw an error is placed in the 'try' block, and the error handling logic is in the 'catch' block."
  },
  {
    id: 99,
    question: "What is the 'Global Scope'?",
    options: {
      A: "Variables declared inside a function",
      B: "The default scope where all variables are accessible throughout the entire script",
      C: "A scope that only exists during page load",
      D: "A library for internationalization"
    },
    answer: "B",
    explanation: "Variables declared outside of any function or block are in the global scope."
  },
  {
    id: 100,
    question: "What is 'Memoization'?",
    options: {
      A: "Adding comments to explain complex code",
      B: "An optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again",
      C: "Recording user sessions for debugging",
      D: "Writing code that is easy to memorize"
    },
    answer: "B",
    explanation: "Memoization is a specific form of caching used in functional programming to speed up deterministic functions."
  },
  {
    id: 101,
    question: "What does PHP stand for?",
    options: {
      A: "Personal Home Page",
      B: "PHP: Hypertext Preprocessor",
      C: "Private Hosting Platform",
      D: "Pre-compiled HTML Program"
    },
    answer: "B",
    explanation: "PHP is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML."
  },
  {
    id: 102,
    question: "Which character is used to start a variable in PHP?",
    options: {
      A: "&",
      B: "!",
      C: "$",
      D: "#"
    },
    answer: "C",
    explanation: "All variables in PHP must start with a dollar sign ($)."
  },
  {
    id: 103,
    question: "How do you write 'Hello World' in PHP?",
    options: {
      A: "Document.Write('Hello World');",
      B: "echo 'Hello World';",
      C: "print('Hello World');",
      D: "Both B and C"
    },
    answer: "D",
    explanation: "Both 'echo' and 'print' are used to output data to the screen in PHP."
  },
  {
    id: 104,
    question: "What is the correct way to end a PHP statement?",
    options: {
      A: ".",
      B: "New line",
      C: ";",
      D: "!"
    },
    answer: "C",
    explanation: "Like C or Perl, PHP requires each statement to be terminated with a semicolon (;)."
  },
  {
    id: 105,
    question: "Which superglobal variable is used to collect data after submitting an HTML form with method='post'?",
    options: {
      A: "$_GET",
      B: "$_REQUEST",
      C: "$_POST",
      D: "$_SERVER"
    },
    answer: "C",
    explanation: "$_POST is an associative array of variables passed to the current script via the HTTP POST method."
  },
  {
    id: 106,
    question: "How do you create an array in PHP?",
    options: {
      A: "$cars = array('Volvo', 'BMW', 'Toyota');",
      B: "$cars = ['Volvo', 'BMW', 'Toyota'];",
      C: "$cars = (array)('Volvo', 'BMW', 'Toyota');",
      D: "Both A and B"
    },
    answer: "D",
    explanation: "Both the array() function and the short array syntax [] are valid in modern PHP (5.4+)."
  },
  {
    id: 107,
    question: "What is an 'Associative Array' in PHP?",
    options: {
      A: "An array that can only store numbers",
      B: "An array where each ID key is associated with a value using named keys",
      C: "An array that is linked to a database",
      D: "An array that contains other arrays"
    },
    answer: "B",
    explanation: "Example: $age = array('Peter'=>'35', 'Ben'=>'37');"
  },
  {
    id: 108,
    question: "Which function is used to get the length of a string in PHP?",
    options: {
      A: "len()",
      B: "str_length()",
      C: "strlen()",
      D: "count()"
    },
    answer: "C",
    explanation: "strlen() returns the length of a string in bytes."
  },
  {
    id: 109,
    question: "How do you start a session in PHP?",
    options: {
      A: "session_begin();",
      B: "start_session();",
      C: "session_start();",
      D: "session_init();"
    },
    answer: "C",
    explanation: "session_start() must be called at the very beginning of the script, before any HTML output, to initialize or resume a session."
  },
  {
    id: 110,
    question: "What is the purpose of the 'include' statement in PHP?",
    options: {
      A: "To include a file into the current script",
      B: "To add a new user to the database",
      C: "To import a CSS file into the HTML",
      D: "To perform a mathematical calculation"
    },
    answer: "A",
    explanation: "The include statement takes all the text/code that exists in the specified file and copies it into the file that uses the include statement."
  },
  {
    id: 111,
    question: "What is the difference between 'include' and 'require'?",
    options: {
      A: "There is no difference",
      B: "include produces a warning if the file is missing; require produces a fatal error and stops the script",
      C: "require is only for database files",
      D: "include is faster than require"
    },
    answer: "B",
    explanation: "Use 'require' when the file is required by the application to function correctly. Use 'include' for non-essential parts like headers/footers."
  },
  {
    id: 112,
    question: "How do you define a constant in PHP?",
    options: {
      A: "constant('NAME', 'Value');",
      B: "define('NAME', 'Value');",
      C: "set('NAME', 'Value');",
      D: "$NAME = 'Value';"
    },
    answer: "B",
    explanation: "Constants are like variables, except that once they are defined they cannot be changed or undefined."
  },
  {
    id: 113,
    question: "What is the 'PDO' in PHP?",
    options: {
      A: "PHP Database Object",
      B: "PHP Data Objects",
      C: "Private Data Organizer",
      D: "Program Data Output"
    },
    answer: "B",
    explanation: "PDO provides a data-access abstraction layer, which means that, regardless of which database you're using, you use the same functions to issue queries and fetch data."
  },
  {
    id: 114,
    question: "Which function is used to redirect a user to another page in PHP?",
    options: {
      A: "redirect('page.php');",
      B: "header('Location: page.php');",
      C: "window.location = 'page.php';",
      D: "move_to('page.php');"
    },
    answer: "B",
    explanation: "The header() function sends a raw HTTP header to a client. It must be called before any actual output is sent."
  },
  {
    id: 115,
    question: "What is 'SQL Injection'?",
    options: {
      A: "A way to backup a database",
      B: "A type of vulnerability where an attacker can interfere with the queries that an application makes to its database",
      C: "A method for speeding up database queries",
      D: "A tool for generating SQL reports"
    },
    answer: "B",
    explanation: "It typically allows an attacker to view data they are not normally able to retrieve. This is prevented by using prepared statements."
  },
  {
    id: 116,
    question: "How do you prevent SQL Injection in PHP?",
    options: {
      A: "By using mysql_query()",
      B: "By using prepared statements and parameterized queries (e.g., with PDO or MySQLi)",
      C: "By encrypting the database password",
      D: "By disabling the database while users are typing"
    },
    answer: "B",
    explanation: "Prepared statements ensure that an attacker cannot change the intent of a query, even if they insert SQL commands into an input field."
  },
  {
    id: 117,
    question: "What is the '$_SERVER' superglobal?",
    options: {
      A: "A variable that holds information about headers, paths, and script locations",
      B: "A list of all users currently on the server",
      C: "A tool for managing server hardware",
      D: "A backup of the server's configuration files"
    },
    answer: "A",
    explanation: "The entries in this array are created by the web server. There is no guarantee that every web server will provide any of these."
  },
  {
    id: 118,
    question: "Which function is used to destroy a session and all its data in PHP?",
    options: {
      A: "session_end();",
      B: "session_destroy();",
      C: "session_kill();",
      D: "session_unset();"
    },
    answer: "B",
    explanation: "session_destroy() destroys all of the data associated with the current session. It does not unset any of the global variables associated with the session, or unset the session cookie."
  },
  {
    id: 119,
    question: "What is the purpose of 'htmlspecialchars()'?",
    options: {
      A: "To translate HTML into PHP",
      B: "To convert special characters to HTML entities, preventing XSS (Cross-Site Scripting) attacks",
      C: "To make the text look pretty in the browser",
      D: "To compress HTML code"
    },
    answer: "B",
    explanation: "It converts characters like < and > into &lt; and &gt; so they are displayed as text rather than interpreted as HTML by the browser."
  },
  {
    id: 120,
    question: "In MySQL, which statement is used to retrieve data from a database?",
    options: {
      A: "GET",
      B: "SELECT",
      C: "OPEN",
      D: "EXTRACT"
    },
    answer: "B",
    explanation: "The SELECT statement is used to select data from a database."
  },
  {
    id: 121,
    question: "Which MySQL clause is used to filter records?",
    options: {
      A: "IF",
      B: "WHERE",
      C: "FILTER",
      D: "CONDITION"
    },
    answer: "B",
    explanation: "The WHERE clause is used to extract only those records that fulfill a specified condition."
  },
  {
    id: 122,
    question: "How do you insert new data into a MySQL table using SQL?",
    options: {
      A: "INSERT INTO table_name VALUES (...)",
      B: "ADD NEW table_name (...)",
      C: "UPDATE table_name SET (...)",
      D: "CREATE table_name (...)"
    },
    answer: "A",
    explanation: "The INSERT INTO statement is used to insert new records in a table."
  },
  {
    id: 123,
    question: "What is a 'Primary Key' in a database?",
    options: {
      A: "The main password for the database",
      B: "A unique identifier for each record in a table",
      C: "The first column in every table",
      D: "A key that unlocks encrypted data"
    },
    answer: "B",
    explanation: "Primary keys must contain unique values and cannot contain NULL values."
  },
  {
    id: 124,
    question: "Which SQL keyword is used to sort the result-set?",
    options: {
      A: "SORT BY",
      B: "ORDER BY",
      C: "ALIGN BY",
      D: "GROUP BY"
    },
    answer: "B",
    explanation: "The ORDER BY keyword is used to sort the result-set in ascending or descending order."
  },
  {
    id: 125,
    question: "What is a 'Foreign Key'?",
    options: {
      A: "A key used to access a database in another country",
      B: "A field in one table that refers to the PRIMARY KEY in another table",
      C: "A temporary key generated for guests",
      D: "A key that is not recognized by the current database"
    },
    answer: "B",
    explanation: "The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables."
  },
  {
    id: 126,
    question: "What does 'CRUD' stand for in database management?",
    options: {
      A: "Create, Read, Update, Delete",
      B: "Copy, Run, Underline, Duplicate",
      C: "Connect, Retrieve, Undo, Disconnect",
      D: "Calculate, Report, Use, Debug"
    },
    answer: "A",
    explanation: "CRUD refers to the four basic functions of persistent storage."
  },
  {
    id: 127,
    question: "Which MySQL function is used to return the number of rows in a result set?",
    options: {
      A: "length()",
      B: "count()",
      C: "size()",
      D: "total()"
    },
    answer: "B",
    explanation: "The COUNT() function returns the number of rows that matches a specified criterion."
  },
  {
    id: 128,
    question: "What is the purpose of the 'JOIN' clause in SQL?",
    options: {
      A: "To combine two databases into one",
      B: "To combine rows from two or more tables, based on a related column between them",
      C: "To join two strings together",
      D: "To allow multiple users to edit the same record"
    },
    answer: "B",
    explanation: "JOINs are used to query data from multiple tables based on relationships between them."
  },
  {
    id: 129,
    question: "Which statement is used to update existing records in a table?",
    options: {
      A: "MODIFY",
      B: "UPDATE",
      C: "CHANGE",
      D: "SET"
    },
    answer: "B",
    explanation: "The UPDATE statement is used to modify the existing records in a table."
  },
  {
    id: 130,
    question: "What is an 'Index' in a database table?",
    options: {
      A: "A table of contents at the beginning of the database",
      B: "A data structure that improves the speed of data retrieval operations on a table at the cost of slower writes and additional storage space",
      C: "A list of all users who have accessed the table",
      D: "The primary key of the table"
    },
    answer: "B",
    explanation: "Indexes are used to find rows with specific column values quickly."
  },
  {
    id: 131,
    question: "What is the 'Global' scope in PHP?",
    options: {
      A: "Variables that can be accessed from any file in the world",
      B: "Variables declared outside a function which can only be accessed inside a function using the 'global' keyword",
      C: "Variables that are stored in the cloud",
      D: "Variables that are the same for all users"
    },
    answer: "B",
    explanation: "In PHP, you must explicitly declare a variable as 'global' inside a function to access its value from the global scope."
  },
  {
    id: 132,
    question: "What is the purpose of the '$_FILES' superglobal?",
    options: {
      A: "To store a list of all files in the server's root directory",
      B: "To handle file uploads from an HTML form",
      C: "To protect the script from being overwritten by external files",
      D: "To compress files before they are sent to the client"
    },
    answer: "B",
    explanation: "$_FILES is an associative array of items uploaded to the current script via the HTTP POST method."
  },
  {
    id: 133,
    question: "Which PHP function is used to hash a password securely?",
    options: {
      A: "md5()",
      B: "sha1()",
      C: "password_hash()",
      D: "encrypt()"
    },
    answer: "C",
    explanation: "password_hash() creates a new password hash using a strong one-way hashing algorithm. It is the modern standard in PHP."
  },
  {
    id: 134,
    question: "What is 'Form Validation'?",
    options: {
      A: "Checking if the server is working properly",
      B: "The process of ensuring that user input is clean, correct, and secure before processing it",
      C: "A way to make the form look better with CSS",
      D: "Automatically filling in form fields for the user"
    },
    answer: "B",
    explanation: "Validation can happen on the client-side (JS) and MUST happen on the server-side (PHP)."
  },
  {
    id: 135,
    question: "Which superglobal is used to store data that should be available across multiple pages during a single user visit?",
    options: {
      A: "$_POST",
      B: "$_COOKIE",
      C: "$_SESSION",
      D: "$_SERVER"
    },
    answer: "C",
    explanation: "Sessions are used to store information (in variables) to be used across multiple pages."
  },
  {
    id: 136,
    question: "What is the difference between a Session and a Cookie?",
    options: {
      A: "Sessions are stored on the server; Cookies are stored on the client",
      B: "Cookies are more secure than Sessions",
      C: "Sessions last forever; Cookies expire when the browser is closed",
      D: "There is no difference"
    },
    answer: "A",
    explanation: "Since sessions are on the server, they are generally more secure for sensitive data, but they rely on a cookie (Session ID) to identify the user."
  },
  {
    id: 137,
    question: "What is 'Cross-Site Scripting' (XSS)?",
    options: {
      A: "A way to share scripts between different websites",
      B: "A vulnerability where an attacker injects malicious scripts into web pages viewed by other users",
      C: "A method for optimizing script loading across origins",
      D: "A tool for testing website compatibility on different browsers"
    },
    answer: "B",
    explanation: "XSS can be used to steal cookies, session tokens, or other sensitive information."
  },
  {
    id: 138,
    question: "Which PHP function is used to remove whitespace from the beginning and end of a string?",
    options: {
      A: "clean()",
      B: "strip()",
      C: "trim()",
      D: "cut()"
    },
    answer: "C",
    explanation: "trim() is essential for cleaning user input from forms."
  },
  {
    id: 139,
    question: "What is a 'Storage Class' in the context of web application data?",
    options: {
      A: "A folder on the server where images are stored",
      B: "Mechanisms like LocalStorage, SessionStorage, or Cookies used to persist data on the client side",
      C: "A specific type of database table",
      D: "The physical RAM used by the web server"
    },
    answer: "B",
    explanation: "HTML5 introduced LocalStorage and SessionStorage to provide more space and better security than traditional cookies."
  },
  {
    id: 140,
    question: "What is the 'setcookie()' function used for in PHP?",
    options: {
      A: "To eat a cookie",
      B: "To define a cookie to be sent along with the rest of the HTTP headers",
      C: "To delete all cookies from the browser",
      D: "To check if the user likes cookies"
    },
    answer: "B",
    explanation: "setcookie() must be called before any output is sent to the browser."
  },
  {
    id: 141,
    question: "What is 'Prepared Statements'?",
    options: {
      A: "A list of things the server should say to the user",
      B: "A feature used to execute the same (or similar) SQL statements repeatedly with high efficiency and security",
      C: "A set of pre-written SQL queries for common tasks",
      D: "A way to prepare the database for a large amount of data"
    },
    answer: "B",
    explanation: "Prepared statements are the gold standard for preventing SQL injection."
  },
  {
    id: 142,
    question: "In PHP, how do you concatenate two strings?",
    options: {
      A: "+",
      B: ".",
      C: "&",
      D: "concat()"
    },
    answer: "B",
    explanation: "The dot (.) operator is used to join two strings together in PHP."
  },
  {
    id: 143,
    question: "What is the purpose of the 'die()' or 'exit()' function in PHP?",
    options: {
      A: "To restart the server",
      B: "To terminate the execution of the current script",
      C: "To delete the current script from the server",
      D: "To send an error message to the administrator"
    },
    answer: "B",
    explanation: "It is often used with 'or die()' when connecting to a database to stop the script if the connection fails."
  },
  {
    id: 144,
    question: "What is 'Server-Side Validation'?",
    options: {
      A: "Validation that happens in the user's browser",
      B: "Validation that happens on the web server after the data is submitted",
      C: "Checking if the server hardware is valid",
      D: "Validation of the server's SSL certificate"
    },
    answer: "B",
    explanation: "Server-side validation is mandatory because client-side validation can be bypassed by malicious users."
  },
  {
    id: 145,
    question: "Which PHP operator is used for 'Not Equal'?",
    options: {
      A: "!=",
      B: "<>",
      C: "!==",
      D: "All of the above"
    },
    answer: "D",
    explanation: "Both != and <> check for inequality (value). !== checks for strict inequality (value or type)."
  },
  {
    id: 146,
    question: "What is the 'header()' function in PHP primarily used for?",
    options: {
      A: "To change the font of the page header",
      B: "To send raw HTTP headers to the client",
      C: "To create a new <h1> tag",
      D: "To include a header.php file"
    },
    answer: "B",
    explanation: "Common uses include redirects and setting content types."
  },
  {
    id: 147,
    question: "What is 'MySQLi' in PHP?",
    options: {
      A: "MySQL Improved extension",
      B: "MySQL Interactive tool",
      C: "MySQL Internal plugin",
      D: "MySQL Internet gateway"
    },
    answer: "A",
    explanation: "MySQLi is a relational database driver used in the PHP scripting language to provide an interface with MySQL databases."
  },
  {
    id: 148,
    question: "What does the 'IS NULL' operator do in SQL?",
    options: {
      A: "Sets a field to NULL",
      B: "Tests for empty values (NULL values)",
      C: "Checks if a table exists",
      D: "Deletes all records that are not NULL"
    },
    answer: "B",
    explanation: "You cannot use = to test for NULL values; you must use IS NULL or IS NOT NULL."
  },
  {
    id: 149,
    question: "What is 'Normalization' in a database?",
    options: {
      A: "The process of making the database look normal to users",
      B: "The process of organizing data to minimize redundancy and dependency",
      C: "The process of converting all data into strings",
      D: "The process of backing up the database every day"
    },
    answer: "B",
    explanation: "Normalization usually involves dividing a database into two or more tables and defining relationships between them."
  },
  {
    id: 150,
    question: "Which PHP superglobal is used to access the values of cookies?",
    options: {
      A: "$_SESSION",
      B: "$_COOKIE",
      C: "$_GET",
      D: "$_REQUEST"
    },
    answer: "B",
    explanation: "$_COOKIE is an associative array of variables passed to the current script via HTTP Cookies."
  },
  {
    id: 151,
    question: "Which DOM property returns the first child node of a specified node?",
    options: {
      A: "firstChild",
      B: "childNodes[1]",
      C: "firstElementChild",
      D: "Both A and C, depending on whether you want any node type or only elements"
    },
    answer: "D",
    explanation: "firstChild returns the first child node (which could be a text node), whereas firstElementChild returns the first child node that is an element."
  },
  {
    id: 152,
    question: "How can you completely remove an HTML element from the DOM using modern JavaScript?",
    options: {
      A: "element.delete()",
      B: "element.remove()",
      C: "element.destroy()",
      D: "element.hide()"
    },
    answer: "B",
    explanation: "The element.remove() method removes the element from the DOM directly."
  },
  {
    id: 153,
    question: "What is the purpose of document.createElement()?",
    options: {
      A: "To insert a new HTML file into the project",
      B: "To create the HTML document itself",
      C: "To create a specified HTML element in memory, which can later be appended to the DOM",
      D: "To create a variable in the global scope"
    },
    answer: "C",
    explanation: "document.createElement('tagName') creates a new element node, but it won't appear on the page until appended to the DOM."
  },
  {
    id: 154,
    question: "What is the key difference between the 'childNodes' and 'children' properties?",
    options: {
      A: "There is no difference",
      B: "childNodes includes all node types (text, comments, elements), whereas children only includes element nodes",
      C: "children is an array, childNodes is an object",
      D: "childNodes is used in older browsers only"
    },
    answer: "B",
    explanation: "childNodes returns a NodeList of all child nodes, including whitespace text nodes, while children returns an HTMLCollection of only the element children."
  },
  {
    id: 155,
    question: "Which method allows you to cleanly detach an event listener from a DOM element?",
    options: {
      A: "element.detachEvent()",
      B: "element.removeEventListener()",
      C: "element.unbind()",
      D: "element.deleteListener()"
    },
    answer: "B",
    explanation: "removeEventListener() removes an event handler that has been attached with the addEventListener() method."
  },
  {
    id: 156,
    question: "What does the event.stopPropagation() method do?",
    options: {
      A: "It stops the browser from loading the rest of the DOM",
      B: "It prevents the default action of the event (like following a link)",
      C: "It prevents further propagation of the current event in the capturing and bubbling phases",
      D: "It stops the execution of the JavaScript file"
    },
    answer: "C",
    explanation: "This stops the event from bubbling up to parent elements, preventing their event listeners from triggering for the same event."
  },
  {
    id: 157,
    question: "Which DOM method finds the nearest ancestor of an element that matches a specific CSS selector?",
    options: {
      A: "element.closest()",
      B: "element.parent()",
      C: "element.findAncestor()",
      D: "element.matches()"
    },
    answer: "A",
    explanation: "The closest() method traverses the element and its parents (heading toward the document root) until it finds a node that matches the provided selector string."
  },
  {
    id: 158,
    question: "What is a 'DocumentFragment'?",
    options: {
      A: "A broken piece of HTML code",
      B: "A lightweight, detached DOM node used to group elements before appending them to the actual DOM",
      C: "A specific part of a web page defined by an anchor link",
      D: "A backup of the DOM state"
    },
    answer: "B",
    explanation: "DocumentFragments are stored in memory and not part of the main DOM tree. Appending children to it doesn't cause page reflow, making it highly efficient for batch DOM updates."
  },
  {
    id: 159,
    question: "How do you efficiently toggle a CSS class on a DOM element using JavaScript?",
    options: {
      A: "element.className = 'new-class'",
      B: "element.classList.toggle('class-name')",
      C: "element.setAttribute('class', 'class-name')",
      D: "element.style.class = 'class-name'"
    },
    answer: "B",
    explanation: "The classList API provides clean methods like add(), remove(), and toggle() for manipulating an element's classes."
  },
  {
    id: 160,
    question: "What does 'element.innerHTML' do when assigned a value?",
    options: {
      A: "It only updates the text of the element",
      B: "It replaces the HTML content of an element with the new HTML string",
      C: "It appends the new HTML string to the end of the element",
      D: "It changes the CSS styles of the element"
    },
    answer: "B",
    explanation: "innerHTML completely replaces the descendants of the element with the parsed HTML string. Caution must be used to avoid XSS vulnerabilities."
  },
  {
    id: 161,
    question: "Which method is used in PHP PDO to fetch the next row from a result set as an associative array?",
    options: {
      A: "fetch_assoc()",
      B: "PDO::fetch()",
      C: "fetch(PDO::FETCH_ASSOC)",
      D: "getAll()"
    },
    answer: "C",
    explanation: "In PDO, fetching with PDO::FETCH_ASSOC returns an array indexed by column name."
  },
  {
    id: 162,
    question: "What does the PHP explode() function do?",
    options: {
      A: "It deletes an array from memory",
      B: "It splits a string into an array based on a string delimiter",
      C: "It joins array elements into a single string",
      D: "It triggers a fatal error"
    },
    answer: "B",
    explanation: "explode() breaks a string into an array. The opposite operation is implode()."
  },
  {
    id: 163,
    question: "How are variables passed by reference in PHP?",
    options: {
      A: "By using the 'ref' keyword",
      B: "By prefixing the variable with an ampersand (&)",
      C: "By prefixing the variable with a dollar sign ($)",
      D: "Variables in PHP are always passed by reference"
    },
    answer: "B",
    explanation: "Prepending an ampersand (&) to a variable name in a function argument or assignment means it is passed by reference, modifying the original variable."
  },
  {
    id: 164,
    question: "What is the purpose of the isset() function in PHP?",
    options: {
      A: "To check if a variable is empty",
      B: "To determine if a variable is declared and is different than NULL",
      C: "To assign a value to a variable",
      D: "To destroy a variable"
    },
    answer: "B",
    explanation: "isset() returns true if the variable exists and is not null. empty() checks if a variable is considered empty."
  },
  {
    id: 165,
    question: "Which PHP superglobal holds information about uploaded files via HTTP POST?",
    options: {
      A: "$_POST",
      B: "$_UPLOADS",
      C: "$_FILES",
      D: "$_DATA"
    },
    answer: "C",
    explanation: "$_FILES contains an associative array of items like name, type, tmp_name, error, and size for uploaded files."
  },
  {
    id: 166,
    question: "What is the difference between == and === in PHP?",
    options: {
      A: "== compares value and type, === compares only value",
      B: "== is for strings, === is for numbers",
      C: "== compares only value (after type juggling), === compares both value and strict type",
      D: "There is no difference"
    },
    answer: "C",
    explanation: "Using === (strict equality) prevents unexpected bugs caused by PHP's automatic type juggling."
  },
  {
    id: 167,
    question: "How do you correctly create a session variable in PHP?",
    options: {
      A: "session_set('key', 'value');",
      B: "$_SESSION['key'] = 'value';",
      C: "$SESSION->key = 'value';",
      D: "set_session('key', 'value');"
    },
    answer: "B",
    explanation: "$_SESSION is an associative array used to store session variables. Remember that session_start() must be called first."
  },
  {
    id: 168,
    question: "What is the purpose of ob_start() in PHP?",
    options: {
      A: "To start object-oriented execution",
      B: "To turn on output buffering",
      C: "To observe script errors",
      D: "To optimize database queries"
    },
    answer: "B",
    explanation: "Output buffering prevents output from being sent to the browser immediately, allowing you to manipulate headers even after HTML has 'started'."
  },
  {
    id: 169,
    question: "Which error type stops script execution completely in PHP?",
    options: {
      A: "Notice",
      B: "Warning",
      C: "Parse Error",
      D: "Fatal Error"
    },
    answer: "D",
    explanation: "A Fatal Error (like calling an undefined function) halts the execution of the script. Notices and Warnings do not."
  },
  {
    id: 170,
    question: "What does the PHP implode() function do?",
    options: {
      A: "It joins array elements into a single string using a glue string",
      B: "It encrypts a string",
      C: "It deletes the contents of an array",
      D: "It splits a string into an array"
    },
    answer: "A",
    explanation: "implode() takes an array and concatenates its values into a string, separated by the specified delimiter."
  },
  {
    id: 171,
    question: "Which SQL statement is used to completely remove a table and all its data from a database?",
    options: {
      A: "DELETE TABLE",
      B: "REMOVE TABLE",
      C: "DROP TABLE",
      D: "TRUNCATE TABLE"
    },
    answer: "C",
    explanation: "DROP TABLE removes the table definition and all its data. TRUNCATE empties the data but leaves the table structure."
  },
  {
    id: 172,
    question: "What does the SQL HAVING clause do?",
    options: {
      A: "It replaces the WHERE clause entirely",
      B: "It is used to filter records that work on aggregated data (e.g., used with GROUP BY)",
      C: "It joins two tables together",
      D: "It checks if a column has a value"
    },
    answer: "B",
    explanation: "The WHERE clause cannot be used with aggregate functions (like COUNT or SUM), so HAVING is used after GROUP BY to filter groups."
  },
  {
    id: 173,
    question: "What is the primary function of the LIMIT clause in a MySQL query?",
    options: {
      A: "To restrict the amount of memory a query can use",
      B: "To specify the maximum number of records to return",
      C: "To define the maximum length of a string column",
      D: "To set a timeout for the query"
    },
    answer: "B",
    explanation: "LIMIT is often used for pagination, e.g., LIMIT 10 OFFSET 20 to get the third page of 10 results."
  },
  {
    id: 174,
    question: "In a relational database, what is an INNER JOIN?",
    options: {
      A: "A join that returns all records from the left table, and matched records from the right table",
      B: "A join that returns records that have matching values in both tables",
      C: "A join that combines all records from both tables regardless of matches",
      D: "A join that operates within the same table"
    },
    answer: "B",
    explanation: "INNER JOIN only returns the intersection of the two tables based on the join condition."
  },
  {
    id: 175,
    question: "Which MySQL data type is typically used to store a boolean value?",
    options: {
      A: "BOOL",
      B: "TINYINT(1)",
      C: "BIT",
      D: "All of the above"
    },
    answer: "D",
    explanation: "In MySQL, BOOL or BOOLEAN are synonyms for TINYINT(1). A value of zero is false, and non-zero values are true."
  },
  {
    id: 176,
    question: "What is the difference between DELETE and TRUNCATE in SQL?",
    options: {
      A: "There is no difference",
      B: "DELETE removes rows one by one and can be rolled back; TRUNCATE resets the table and is faster",
      C: "TRUNCATE deletes the table structure, DELETE keeps it",
      D: "DELETE is a DDL command, TRUNCATE is a DML command"
    },
    answer: "B",
    explanation: "TRUNCATE TABLE is a fast way to empty a table completely and resets auto-increment counters, acting as a DDL operation."
  },
  {
    id: 177,
    question: "What is the default port number for a MySQL server connection?",
    options: {
      A: "80",
      B: "8080",
      C: "3306",
      D: "27017"
    },
    answer: "C",
    explanation: "Port 3306 is the standard default port for the MySQL protocol."
  },
  {
    id: 178,
    question: "What does the LIKE operator do in a SQL WHERE clause?",
    options: {
      A: "It checks for exact matches",
      B: "It searches for a specified pattern in a column, often using '%' as a wildcard",
      C: "It compares two tables to see if they are alike",
      D: "It creates a relational link between two rows"
    },
    answer: "B",
    explanation: "For example, 'WHERE name LIKE 'A%'' finds any name starting with 'A'."
  },
  {
    id: 179,
    question: "Which aggregate function is used to calculate the average value of a numeric column in SQL?",
    options: {
      A: "MEAN()",
      B: "SUM() / COUNT()",
      C: "AVG()",
      D: "AVERAGE()"
    },
    answer: "C",
    explanation: "The AVG() function returns the average value of a numeric column."
  },
  {
    id: 180,
    question: "What is a 'Database Transaction'?",
    options: {
      A: "The cost of hosting a database",
      B: "A sequence of database operations treated as a single logical unit of work (ACID properties)",
      C: "Transferring data from one database to another",
      D: "A log of user logins"
    },
    answer: "B",
    explanation: "Transactions ensure data integrity. If one step in the transaction fails, the entire transaction can be rolled back to its initial state."
  },
  {
    id: 181,
    question: "What is Cross-Site Scripting (XSS)?",
    options: {
      A: "An attack that forces a user to execute unwanted actions",
      B: "A vulnerability where an attacker injects malicious client-side scripts into web pages viewed by other users",
      C: "A method of accessing a database remotely",
      D: "A way to copy CSS styles from another website"
    },
    answer: "B",
    explanation: "XSS occurs when unvalidated user input is rendered directly in the HTML, allowing scripts to execute in the victim's browser."
  },
  {
    id: 182,
    question: "How can you primarily prevent XSS when displaying user input in PHP?",
    options: {
      A: "Using the md5() function",
      B: "Using htmlspecialchars() to convert special characters to HTML entities",
      C: "By storing data in $_SESSION",
      D: "By setting cookies to HttpOnly"
    },
    answer: "B",
    explanation: "htmlspecialchars() converts characters like '<' and '>' to '&lt;' and '&gt;', preventing the browser from interpreting them as code."
  },
  {
    id: 183,
    question: "What does CSRF stand for in web security?",
    options: {
      A: "Cross-Site Scripting Framework",
      B: "Cross-Server Request Forwarding",
      C: "Cross-Site Request Forgery",
      D: "Client-Server Response Filter"
    },
    answer: "C",
    explanation: "CSRF is an attack that tricks a victim into submitting a malicious request on behalf of the attacker, using the victim's authenticated session."
  },
  {
    id: 184,
    question: "What is the standard method for mitigating CSRF attacks?",
    options: {
      A: "Using HTTPS for all traffic",
      B: "Including an unpredictable, anti-CSRF token in forms and verifying it on the server",
      C: "Encrypting the database",
      D: "Disabling JavaScript in the user's browser"
    },
    answer: "B",
    explanation: "The server generates a unique token for the user's session and expects that token to be submitted with any state-changing request (like POST)."
  },
  {
    id: 185,
    question: "What is the approximate maximum storage capacity of LocalStorage in modern web browsers?",
    options: {
      A: "4 Kilobytes",
      B: "1 Megabyte",
      C: "5 to 10 Megabytes per origin",
      D: "Unlimited"
    },
    answer: "C",
    explanation: "LocalStorage provides significantly more space than cookies (which are limited to about 4KB)."
  },
  {
    id: 186,
    question: "What is the main difference between LocalStorage and SessionStorage?",
    options: {
      A: "LocalStorage is secure, SessionStorage is not",
      B: "LocalStorage data persists after the browser is closed; SessionStorage data is cleared when the page session (tab) ends",
      C: "SessionStorage can store objects, LocalStorage can only store strings",
      D: "There is no difference"
    },
    answer: "B",
    explanation: "SessionStorage is tied to the lifecycle of the specific tab or window in which it was created."
  },
  {
    id: 187,
    question: "How do you store a JavaScript object in LocalStorage?",
    options: {
      A: "localStorage.setItem('key', obj)",
      B: "localStorage.setItem('key', JSON.stringify(obj))",
      C: "localStorage.obj = obj",
      D: "localStorage.push(obj)"
    },
    answer: "B",
    explanation: "Web Storage APIs only store strings. You must serialize objects to a JSON string before storing them, and parse them when retrieving."
  },
  {
    id: 188,
    question: "Which HTML5 attribute is used for basic client-side form validation to ensure a field is not left empty?",
    options: {
      A: "validate",
      B: "mandatory",
      C: "required",
      D: "not-null"
    },
    answer: "C",
    explanation: "The 'required' attribute prevents form submission if the input field is empty, providing immediate client-side feedback."
  },
  {
    id: 189,
    question: "Why is client-side validation not sufficient for securing an application?",
    options: {
      A: "It is too slow",
      B: "It only works on modern browsers",
      C: "It can be easily bypassed by attackers modifying the HTML or sending raw HTTP requests",
      D: "It uses too much memory"
    },
    answer: "C",
    explanation: "Client-side validation is for UX (User Experience). Server-side validation is mandatory for security and data integrity."
  },
  {
    id: 190,
    question: "What is the primary purpose of Prepared Statements in SQL interactions (e.g., using PDO)?",
    options: {
      A: "To format the output as JSON",
      B: "To cache the database results in memory",
      C: "To separate the query structure from the data, preventing SQL Injection",
      D: "To automatically generate HTML tables from database rows"
    },
    answer: "C",
    explanation: "By sending the query structure and the data parameters separately, the database treats the user input strictly as data, never as executable code."
  },
  {
    id: 191,
    question: "How do you access data stored in a cookie using PHP?",
    options: {
      A: "get_cookie('key')",
      B: "$_COOKIE['key']",
      C: "cookie.getItem('key')",
      D: "$_SESSION['key']"
    },
    answer: "B",
    explanation: "$_COOKIE is the superglobal array used in PHP to access cookies sent by the client's browser."
  },
  {
    id: 192,
    question: "What does the filter_var() function do in PHP?",
    options: {
      A: "It applies CSS filters to images",
      B: "It filters a variable with a specified filter, useful for validating things like emails and URLs",
      C: "It blocks specific IP addresses from accessing the site",
      D: "It searches an array for a specific value"
    },
    answer: "B",
    explanation: "For example, filter_var($email, FILTER_VALIDATE_EMAIL) returns the email if valid, or false if invalid."
  },
  {
    id: 193,
    question: "What does the 'HttpOnly' flag do when setting a cookie?",
    options: {
      A: "It forces the cookie to only be sent over HTTP, not HTTPS",
      B: "It prevents client-side scripts (like JavaScript) from accessing the cookie, mitigating XSS risks",
      C: "It makes the cookie load faster",
      D: "It deletes the cookie when the browser is closed"
    },
    answer: "B",
    explanation: "If a cookie (like a session ID) has the HttpOnly flag, an attacker who finds an XSS vulnerability cannot easily read the cookie using document.cookie."
  },
  {
    id: 194,
    question: "What does the 'Secure' flag on a cookie enforce?",
    options: {
      A: "The cookie is encrypted on the client's hard drive",
      B: "The cookie can only be accessed with a password",
      C: "The cookie is only transmitted over secure (HTTPS) connections",
      D: "The cookie never expires"
    },
    answer: "C",
    explanation: "This prevents the cookie from being transmitted in plain text over unencrypted HTTP, protecting it from network interception."
  },
  {
    id: 195,
    question: "Which HTML5 input type is specifically designed for entering email addresses and provides native validation?",
    options: {
      A: "type='text'",
      B: "type='mail'",
      C: "type='email'",
      D: "type='url'"
    },
    answer: "C",
    explanation: "The type='email' attribute triggers specific keyboards on mobile devices and provides basic format validation in the browser."
  },
  {
    id: 196,
    question: "In PHP, what is the best practice for storing user passwords in a database?",
    options: {
      A: "Store them in plain text for easy retrieval",
      B: "Encrypt them using two-way encryption like AES",
      C: "Hash them using md5()",
      D: "Hash them using a strong algorithm like bcrypt via password_hash()"
    },
    answer: "D",
    explanation: "Passwords should be irreversibly hashed using a strong, slow algorithm with a unique salt per user. password_hash() handles this securely."
  },
  {
    id: 197,
    question: "What is the purpose of the 'pattern' attribute in HTML5 forms?",
    options: {
      A: "To specify a background image for the input field",
      B: "To define a regular expression that the input's value is checked against on form submission",
      C: "To format the output data for the server",
      D: "To create a predefined list of options"
    },
    answer: "B",
    explanation: "The pattern attribute allows developers to define custom validation rules using Regular Expressions (Regex)."
  },
  {
    id: 198,
    question: "When using PDO in PHP, what is the difference between bindParam() and bindValue()?",
    options: {
      A: "There is no difference",
      B: "bindParam binds a reference to the variable, evaluated at execute time; bindValue binds the value immediately",
      C: "bindParam is for strings, bindValue is for numbers",
      D: "bindValue is more secure than bindParam"
    },
    answer: "B",
    explanation: "With bindParam, if the variable changes after binding but before execution, the executed query uses the new value."
  },
  {
    id: 199,
    question: "What is 'Sanitization' in the context of data input?",
    options: {
      A: "Checking if data meets specific criteria (e.g., is it an email?)",
      B: "Removing or escaping illegal or unsafe characters from data before using it",
      C: "Encrypting the data before sending it to the database",
      D: "Deleting old data from the server"
    },
    answer: "B",
    explanation: "Validation checks if the data is correct; sanitization cleans the data to make it safe (e.g., removing HTML tags with strip_tags())."
  },
  {
    id: 200,
    question: "Which of the following describes the 'SameSite' cookie attribute?",
    options: {
      A: "It restricts cookies from being sent with cross-site requests, providing protection against CSRF",
      B: "It ensures cookies are only stored on the same physical hard drive",
      C: "It allows a cookie to be shared across completely different domains",
      D: "It verifies that the user is visiting the same site every time"
    },
    answer: "A",
    explanation: "The SameSite attribute (Strict, Lax, or None) tells the browser whether to include cookies in requests that originate from other sites, mitigating CSRF."
  },
  {
    id: 201,
    question: "What is the output of the following JavaScript code?\n\nlet nums = [1, 2, 3];\nlet res = nums.map(n => n * 2);\nconsole.log(res);",
    options: {
      A: "[1, 2, 3]",
      B: "[2, 4, 6]",
      C: "2, 4, 6",
      D: "undefined"
    },
    answer: "B",
    explanation: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array."
  },
  {
    id: 202,
    question: "What will this JavaScript closure output?\n\nfunction makeFunc() {\n  let name = 'Mozilla';\n  return function() { console.log(name); }\n}\nlet myFunc = makeFunc();\nmyFunc();",
    options: {
      A: "undefined",
      B: "null",
      C: "Mozilla",
      D: "ReferenceError: name is not defined"
    },
    answer: "C",
    explanation: "A closure gives you access to an outer function's scope from an inner function. myFunc maintains a reference to its lexical environment, which includes the variable 'name'."
  },
  {
    id: 203,
    question: "What is the output of this JavaScript code involving hoisting?\n\nconsole.log(a);\nvar a = 5;",
    options: {
      A: "5",
      B: "undefined",
      C: "ReferenceError",
      D: "null"
    },
    answer: "B",
    explanation: "In JavaScript, variable declarations (but not initializations) are hoisted to the top of their scope. The declaration 'var a' is hoisted, but the assignment '= 5' is not, resulting in 'undefined'."
  },
  {
    id: 204,
    question: "What is the output of the following PHP code?\n\n$x = 'Hello';\n$y = ' World';\necho $x . $y;",
    options: {
      A: "Hello World",
      B: "HelloWorld",
      C: "Hello.World",
      D: "Error"
    },
    answer: "A",
    explanation: "The period (.) is the concatenation operator in PHP, used to combine two strings."
  },
  {
    id: 205,
    question: "What will this PHP array function output?\n\n$colors = array('red', 'green', 'blue');\necho count($colors);",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "0"
    },
    answer: "C",
    explanation: "The count() function returns the number of elements in an array. The array has 3 elements."
  },
  {
    id: 206,
    question: "What does the following SQL query do?\n\nSELECT Orders.OrderID, Customers.CustomerName\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;",
    options: {
      A: "Selects all customers, even if they have no orders",
      B: "Selects all orders, even if they have no customer",
      C: "Selects only records that have matching CustomerID in both Orders and Customers tables",
      D: "Deletes duplicate orders"
    },
    answer: "C",
    explanation: "INNER JOIN returns rows when there is a match in both tables based on the join condition."
  },
  {
    id: 207,
    question: "What is the order of output in this JavaScript snippet?\n\nsetTimeout(() => console.log('A'), 0);\nconsole.log('B');",
    options: {
      A: "A then B",
      B: "B then A",
      C: "They print simultaneously",
      D: "Error"
    },
    answer: "B",
    explanation: "Even with a timeout of 0, the callback is sent to the Web API and then to the task queue. It only runs after the call stack is empty, so synchronous 'B' prints before asynchronous 'A'."
  },
  {
    id: 208,
    question: "What is the output of this PHP function with default arguments?\n\nfunction add($a, $b=10) {\n    return $a + $b;\n}\necho add(5);",
    options: {
      A: "5",
      B: "10",
      C: "15",
      D: "Error: missing argument"
    },
    answer: "C",
    explanation: "Since the second argument is omitted in the call, it uses the default value of 10. 5 + 10 = 15."
  },
  {
    id: 209,
    question: "What does the following JavaScript DOM manipulation achieve?\n\ndocument.getElementById('demo').innerHTML = 'Hello';",
    options: {
      A: "Changes the ID of an element to 'demo'",
      B: "Changes the CSS class of an element to 'Hello'",
      C: "Finds the element with ID 'demo' and replaces its HTML content with the text 'Hello'",
      D: "Creates a new element with ID 'demo'"
    },
    answer: "C",
    explanation: "getElementById selects the specific DOM node, and assigning to innerHTML replaces its contents."
  },
  {
    id: 210,
    question: "What is the output of the following JavaScript code using Object.freeze?\n\nconst user = { name: 'John' };\nObject.freeze(user);\nuser.name = 'Jane';\nconsole.log(user.name);",
    options: {
      A: "Jane",
      B: "John",
      C: "undefined",
      D: "TypeError"
    },
    answer: "B",
    explanation: "Object.freeze() prevents modification to existing properties. The assignment 'user.name = Jane' silently fails in non-strict mode, keeping the name 'John'."
  },
  {
    id: 211,
    question: "What is the purpose of the following PHP snippet?\n\nif ($_SERVER['REQUEST_METHOD'] == 'POST') {\n    $name = $_POST['fname'];\n}",
    options: {
      A: "It sends a POST request to the server",
      B: "It checks if the form was submitted via POST before trying to access the POST data",
      C: "It creates a new server request",
      D: "It deletes the 'fname' cookie"
    },
    answer: "B",
    explanation: "This is a standard pattern to handle form submissions in PHP safely by verifying the request method."
  },
  {
    id: 212,
    question: "Given the following CSS, what color will the text be if an element has both ID 'header' and class 'header-class'?\n\n#header { color: blue; }\n.header-class { color: red; }",
    options: {
      A: "Red",
      B: "Blue",
      C: "Purple",
      D: "Default text color"
    },
    answer: "B",
    explanation: "ID selectors (#header) have a higher specificity weight than class selectors (.header-class), so the ID styles will override the class styles."
  },
  {
    id: 213,
    question: "What does this MySQL query do?\n\nUPDATE Employees SET Salary = 50000 WHERE ID = 1;",
    options: {
      A: "Creates a new employee with ID 1 and Salary 50000",
      B: "Updates the salary of all employees to 50000",
      C: "Updates the salary of the employee with ID 1 to 50000",
      D: "Deletes the employee with ID 1"
    },
    answer: "C",
    explanation: "The UPDATE statement modifies existing records. The WHERE clause ensures only the specific record (ID=1) is updated."
  },
  {
    id: 214,
    question: "What is the output of this JavaScript block scoping example?\n\nlet x = 10;\nif (true) { \n  let x = 20; \n}\nconsole.log(x);",
    options: {
      A: "10",
      B: "20",
      C: "undefined",
      D: "ReferenceError"
    },
    answer: "A",
    explanation: "Variables declared with 'let' are block-scoped. The inner 'x' exists only within the if block, leaving the outer 'x' unmodified."
  },
  {
    id: 215,
    question: "What will this JavaScript Promise code output?\n\nPromise.resolve(5).then(res => console.log(res * 2));",
    options: {
      A: "5",
      B: "10",
      C: "Promise {<resolved>: 10}",
      D: "undefined"
    },
    answer: "B",
    explanation: "Promise.resolve(5) creates a fulfilled promise with the value 5. The .then() callback receives this value and logs 5 * 2 = 10."
  },
  {
    id: 216,
    question: "What is the output of this PHP loop?\n\n$x = 0;\nwhile($x < 3) {\n  $x++;\n}\necho $x;",
    options: {
      A: "0",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    explanation: "The while loop runs as long as $x is less than 3. It increments $x to 1, then 2, then 3. When $x is 3, the condition fails, and it echoes 3."
  },
  {
    id: 217,
    question: "What does this JavaScript Array Filter method output?\n\nlet arr = [1, 2, 3, 4];\nlet evens = arr.filter(n => n % 2 === 0);\nconsole.log(evens);",
    options: {
      A: "[1, 3]",
      B: "[2, 4]",
      C: "[true, false, true, false]",
      D: "2"
    },
    answer: "B",
    explanation: "The filter() method creates a new array with all elements that pass the test implemented by the provided function. n % 2 === 0 checks for even numbers."
  },
  {
    id: 218,
    question: "What does the following SQL query return?\n\nSELECT count(*) FROM Users WHERE status='active';",
    options: {
      A: "A list of all active users",
      B: "The total number of rows in the Users table",
      C: "The total number of users whose status is 'active'",
      D: "An error"
    },
    answer: "C",
    explanation: "The COUNT(*) function returns the number of records that match the WHERE clause condition."
  },
  {
    id: 219,
    question: "In this JavaScript event listener, what does preventDefault() do?\n\nbtn.addEventListener('click', function(e) {\n  e.preventDefault();\n});",
    options: {
      A: "It stops the button from being clicked",
      B: "It prevents the browser's default action associated with the event (like a form submitting or a link following)",
      C: "It prevents the event from bubbling up the DOM tree",
      D: "It deletes the event listener"
    },
    answer: "B",
    explanation: "preventDefault() cancels the event if it is cancelable, meaning the default action that belongs to the event will not occur."
  },
  {
    id: 220,
    question: "What is the purpose of this PHP PDO snippet?\n\n$stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');\n$stmt->execute([$email]);",
    options: {
      A: "It creates a new user in the database",
      B: "It encrypts the email address",
      C: "It executes a prepared statement, securely binding the $email variable to prevent SQL Injection",
      D: "It deletes the user with that email"
    },
    answer: "C",
    explanation: "Prepared statements use placeholders (?) to separate the SQL logic from the data. The data ($email) is passed safely during execution."
  }
];
