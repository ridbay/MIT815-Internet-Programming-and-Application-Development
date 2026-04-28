import { Flashcard } from '../types';

export const flashcardsBank: Flashcard[] = [
  // Web Mechanisms (1-10)
  {
    question: "What is the primary function of DNS (Domain Name System)?",
    answer: "It translates human-readable domain names (e.g., example.com) into machine-readable IP addresses.",
    topic: "Web Mechanisms"
  },
  {
    question: "What is the difference between a URL and a URI?",
    answer: "A URI identifies a resource by location, name, or both. A URL is a specific type of URI that identifies a resource exclusively by its location.",
    topic: "Web Mechanisms"
  },
  {
    question: "How does a Forward Proxy differ from a Reverse Proxy?",
    answer: "A forward proxy sits in front of clients to filter outgoing requests. A reverse proxy sits in front of servers to intercept incoming requests and distribute load.",
    topic: "Web Mechanisms"
  },
  {
    question: "What happens during a DNS cache poisoning attack?",
    answer: "Attackers insert corrupt DNS data into the resolver cache, causing traffic to be redirected to a malicious server.",
    topic: "Web Mechanisms"
  },
  {
    question: "Why is the web considered a 'stateless' architecture?",
    answer: "Each HTTP request is independent and executed without any knowledge of previous requests. The server retains no memory of past client interactions.",
    topic: "Web Mechanisms"
  },
  {
    question: "What is the role of a Web Server (e.g., Apache, Nginx)?",
    answer: "It accepts HTTP requests from clients, processes them, and serves static or dynamic content back as HTTP responses.",
    topic: "Web Mechanisms"
  },
  {
    question: "What is the purpose of caching in web performance?",
    answer: "It temporarily stores copies of files (like images or CSS) closer to the user to reduce server load and decrease page load times.",
    topic: "Web Mechanisms"
  },
  {
    question: "What is a Top-Level Domain (TLD)?",
    answer: "The last segment of a domain name, indicating its type or geographical location (e.g., .com, .org, .uk).",
    topic: "Web Mechanisms"
  },
  {
    question: "Explain the concept of 'Load Balancing'.",
    answer: "Distributing incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, improving reliability.",
    topic: "Web Mechanisms"
  },
  {
    question: "What is the difference between IPv4 and IPv6?",
    answer: "IPv4 uses 32-bit addresses limiting total unique IPs. IPv6 uses 128-bit addresses, exponentially expanding available IP space to solve IPv4 exhaustion.",
    topic: "Web Mechanisms"
  },

  // HTTP/HTTPS (11-20)
  {
    question: "What is the difference between HTTP GET and POST methods?",
    answer: "GET requests data and appends parameters in the URL (visible/cached). POST submits data in the request body, making it better for sensitive/large data.",
    topic: "HTTP"
  },
  {
    question: "What does an HTTP 404 status code indicate?",
    answer: "Not Found: The server cannot find the requested resource.",
    topic: "HTTP"
  },
  {
    question: "What is the significance of HTTP 301 vs 302?",
    answer: "301 is a Permanent Redirect (updates SEO rankings). 302 is a Temporary Redirect (keeps the old URL in search indexes).",
    topic: "HTTP"
  },
  {
    question: "How does HTTPS establish a secure connection?",
    answer: "It uses TLS/SSL to perform an 'handshake', validating the server's certificate and exchanging cryptographic keys to encrypt the data stream.",
    topic: "HTTPS"
  },
  {
    question: "What is the purpose of the 'Accept' HTTP header?",
    answer: "It tells the server what media types (MIME types) the client is willing to receive (e.g., application/json, text/html).",
    topic: "HTTP"
  },
  {
    question: "What does a 500 Internal Server Error mean?",
    answer: "A generic error indicating the server encountered an unexpected condition that prevented it from fulfilling the request (e.g., a crash in backend code).",
    topic: "HTTP"
  },
  {
    question: "Why should RESTful APIs use the PUT method?",
    answer: "PUT is used to completely replace or update an existing resource at a specific URI. It must be idempotent (multiple identical requests have the same effect).",
    topic: "HTTP"
  },
  {
    question: "What is the role of an SSL/TLS Certificate?",
    answer: "It digitally binds a cryptographic key to an organization's details, enabling secure connections and proving the server's identity.",
    topic: "HTTPS"
  },
  {
    question: "Explain the HTTP 'OPTIONS' method.",
    answer: "It describes the communication options (like allowed HTTP methods and CORS headers) available for the target resource.",
    topic: "HTTP"
  },
  {
    question: "What does idempotency mean in the context of HTTP methods?",
    answer: "Making multiple identical requests has the same effect on the server state as making a single request (e.g., GET, PUT, DELETE).",
    topic: "HTTP"
  },

  // HTML5 (21-30)
  {
    question: "What is Semantic HTML and why is it important?",
    answer: "Using tags that convey meaning (like <article>, <nav>) rather than just presentation (<div>). It improves accessibility (screen readers) and SEO.",
    topic: "HTML5"
  },
  {
    question: "What is the difference between <canvas> and <svg>?",
    answer: "Canvas is pixel-based, fast for rendering many objects, but loses quality on zoom. SVG is vector-based, retains quality, and supports DOM manipulation per element.",
    topic: "HTML5"
  },
  {
    question: "How do you embed a video in HTML5 without plugins?",
    answer: "Using the <video> tag, often with nested <source> tags pointing to different formats (like MP4 or WebM) for cross-browser compatibility.",
    topic: "HTML5"
  },
  {
    question: "What does the 'defer' attribute do on a <script> tag?",
    answer: "It tells the browser to download the script in the background without blocking HTML parsing, and execute it only after the document has been parsed.",
    topic: "HTML5"
  },
  {
    question: "What is the purpose of the 'data-*' attributes in HTML5?",
    answer: "They allow developers to store custom data directly within HTML elements, which can then be easily accessed and manipulated using JavaScript.",
    topic: "HTML5"
  },
  {
    question: "What does the <meta name='viewport'> tag do?",
    answer: "It gives the browser instructions on how to control the page's dimensions and scaling, essential for mobile responsive design.",
    topic: "HTML5"
  },
  {
    question: "What is the difference between absolute and relative URLs in href attributes?",
    answer: "Absolute URLs specify the full path including protocol and domain. Relative URLs specify the path relative to the current document's location.",
    topic: "HTML5"
  },
  {
    question: "How does the 'required' attribute work in HTML forms?",
    answer: "It prevents the form from being submitted until the user has filled out that specific input field, providing native client-side validation.",
    topic: "HTML5"
  },
  {
    question: "What is the purpose of the <aside> element?",
    answer: "It represents a portion of a document whose content is only indirectly related to the document's main content (e.g., sidebars, callout boxes).",
    topic: "HTML5"
  },
  {
    question: "What is the accessibility purpose of the 'alt' attribute on an <img> tag?",
    answer: "It provides alternative text for screen readers and displays when the image fails to load, improving accessibility and SEO.",
    topic: "HTML5"
  },

  // DOM (31-40)
  {
    question: "What is the Document Object Model (DOM)?",
    answer: "A programming interface for web documents. It represents the page so programs can change the document structure, style, and content dynamically.",
    topic: "DOM"
  },
  {
    question: "What is 'Event Bubbling' in the DOM?",
    answer: "The phase where an event triggers on the deepest target element and then successively triggers on its ancestors, bubbling up to the document root.",
    topic: "DOM"
  },
  {
    question: "How does 'Event Delegation' utilize event bubbling?",
    answer: "Instead of adding listeners to multiple child elements, a single listener is added to a parent element. It catches events bubbling up from children.",
    topic: "DOM"
  },
  {
    question: "What is the difference between document.querySelector and getElementById?",
    answer: "querySelector accepts any CSS selector but only returns the first match. getElementById is faster but only searches by the ID attribute.",
    topic: "DOM"
  },
  {
    question: "What does the method event.preventDefault() do?",
    answer: "It cancels the browser's default behavior for that event (e.g., stopping a link from navigating or a form from submitting).",
    topic: "DOM"
  },
  {
    question: "How do you completely remove a DOM node using modern JavaScript?",
    answer: "By calling the remove() method directly on the element (e.g., element.remove()).",
    topic: "DOM"
  },
  {
    question: "What is a NodeList?",
    answer: "A collection of DOM nodes, often returned by querySelectorAll or childNodes. It is array-like but lacks many Array methods like map or filter.",
    topic: "DOM"
  },
  {
    question: "What is the difference between innerHTML and textContent?",
    answer: "innerHTML parses text as HTML (security risk if unsanitized). textContent gets/sets only the raw text, ignoring HTML tags, making it safer.",
    topic: "DOM"
  },
  {
    question: "What is the 'DOMContentLoaded' event?",
    answer: "Fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.",
    topic: "DOM"
  },
  {
    question: "What is a DocumentFragment and why use it?",
    answer: "A minimal, detached DOM object. Batching updates into a fragment and appending the fragment to the DOM causes only a single reflow/repaint, optimizing performance.",
    topic: "DOM"
  },

  // CSS3 (41-55)
  {
    question: "What is the CSS Box Model?",
    answer: "A box that wraps every HTML element. It consists of: margins (outer space), borders, padding (inner space), and the actual content.",
    topic: "CSS"
  },
  {
    question: "What does 'box-sizing: border-box' do?",
    answer: "It forces padding and borders to be included in the element's specified width and height, preventing the element from expanding beyond its defined size.",
    topic: "CSS"
  },
  {
    question: "How is CSS Specificity calculated?",
    answer: "It is a weight system. Inline styles have highest priority, followed by IDs, then Classes/Attributes/Pseudo-classes, and finally Elements/Pseudo-elements.",
    topic: "CSS"
  },
  {
    question: "What is the difference between 'display: none' and 'visibility: hidden'?",
    answer: "display: none removes the element from the document flow (takes up no space). visibility: hidden hides it visually, but it still occupies physical space.",
    topic: "CSS"
  },
  {
    question: "What is Flexbox used for?",
    answer: "A one-dimensional layout model designed for distributing space and aligning items within a container, either horizontally or vertically.",
    topic: "CSS"
  },
  {
    question: "What is CSS Grid used for?",
    answer: "A two-dimensional layout system that allows developers to align elements into complex rows and columns.",
    topic: "CSS"
  },
  {
    question: "What does 'justify-content' control in Flexbox?",
    answer: "It aligns flex items along the main axis (e.g., horizontally in a row-based layout) to distribute extra space.",
    topic: "CSS"
  },
  {
    question: "What does 'align-items' control in Flexbox?",
    answer: "It aligns flex items along the cross axis (e.g., vertically in a row-based layout).",
    topic: "CSS"
  },
  {
    question: "What is a CSS Media Query?",
    answer: "A feature that applies styles only when specific conditions are met, such as screen width or device orientation, forming the basis of Responsive Web Design.",
    topic: "CSS"
  },
  {
    question: "What is the difference between 'em' and 'rem' units?",
    answer: "em is relative to the font-size of its direct parent element. rem is relative to the font-size of the root <html> element.",
    topic: "CSS"
  },
  {
    question: "What does 'position: absolute' do?",
    answer: "Removes the element from normal document flow and positions it relative to its closest positioned ancestor (or the viewport if none exists).",
    topic: "CSS"
  },
  {
    question: "What does 'position: relative' do?",
    answer: "Keeps the element in the normal document flow but allows you to offset it using top, right, bottom, or left properties.",
    topic: "CSS"
  },
  {
    question: "What does the 'z-index' property control?",
    answer: "It controls the stacking order of overlapping elements on the z-axis. Elements with a higher z-index appear in front of those with a lower one.",
    topic: "CSS"
  },
  {
    question: "What is a CSS Pseudo-class?",
    answer: "A keyword added to a selector that specifies a special state of the element, such as :hover, :active, or :nth-child().",
    topic: "CSS"
  },
  {
    question: "What is a CSS Pseudo-element?",
    answer: "A keyword added to a selector that lets you style a specific part of an element, such as ::before or ::first-line.",
    topic: "CSS"
  },

  // JavaScript (56-75)
  {
    question: "What is the difference between 'let', 'const', and 'var'?",
    answer: "var is function-scoped and hoisted. let and const are block-scoped. const variables cannot be re-assigned, while let variables can.",
    topic: "JavaScript"
  },
  {
    question: "What is 'Hoisting' in JavaScript?",
    answer: "The behavior where variable and function declarations are conceptually moved to the top of their containing scope during compilation.",
    topic: "JavaScript"
  },
  {
    question: "What is a Closure?",
    answer: "A function bundled with its lexical environment. It allows an inner function to access variables from an outer function even after the outer function has returned.",
    topic: "JavaScript"
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    answer: "Its value depends on how the function is called. In a method, it refers to the object. In an arrow function, it inherits 'this' from the enclosing scope.",
    topic: "JavaScript"
  },
  {
    question: "What is the difference between == and ===?",
    answer: "== (loose equality) converts operands to the same type before comparison. === (strict equality) checks both value and type without conversion.",
    topic: "JavaScript"
  },
  {
    question: "What is a Promise in JavaScript?",
    answer: "An object representing the eventual completion or failure of an asynchronous operation and its resulting value.",
    topic: "JavaScript"
  },
  {
    question: "How does the JS Event Loop work?",
    answer: "It constantly monitors the Call Stack and the Task Queue. If the stack is empty, it pushes the first callback from the queue onto the stack for execution.",
    topic: "JavaScript"
  },
  {
    question: "What is the purpose of 'async' and 'await'?",
    answer: "They are syntactic sugar on top of Promises, allowing asynchronous code to be written in a sequential, synchronous-looking style.",
    topic: "JavaScript"
  },
  {
    question: "What does Array.prototype.map() do?",
    answer: "It creates a new array populated with the results of calling a provided callback function on every element in the calling array.",
    topic: "JavaScript"
  },
  {
    question: "What does Array.prototype.filter() do?",
    answer: "It creates a shallow copy of a portion of a given array, filtered down to just the elements that pass the test implemented by the provided function.",
    topic: "JavaScript"
  },
  {
    question: "What does Array.prototype.reduce() do?",
    answer: "It executes a user-supplied 'reducer' callback function on each element of the array, passing in the return value from the calculation on the preceding element.",
    topic: "JavaScript"
  },
  {
    question: "What is an Arrow Function?",
    answer: "A compact alternative to regular functions. It lacks its own bindings to 'this', 'arguments', and 'super', making it great for callbacks.",
    topic: "JavaScript"
  },
  {
    question: "What is Destructuring Assignment?",
    answer: "A syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables (e.g., const { name } = user;).",
    topic: "JavaScript"
  },
  {
    question: "What is the Spread Operator (...)?",
    answer: "It allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected.",
    topic: "JavaScript"
  },
  {
    question: "What is Prototypal Inheritance?",
    answer: "A feature where JavaScript objects inherit features from one another. Each object has an internal link to another object called its prototype.",
    topic: "JavaScript"
  },
  {
    question: "What is 'use strict'?",
    answer: "A directive that activates strict mode, changing previously accepted 'bad syntax' into real errors (e.g., using undeclared variables).",
    topic: "JavaScript"
  },
  {
    question: "What is the difference between null and undefined?",
    answer: "undefined means a variable has been declared but has not yet been assigned a value. null is an assignment value representing no object or value.",
    topic: "JavaScript"
  },
  {
    question: "What does JSON.parse() do?",
    answer: "It parses a JSON string, constructing the JavaScript value or object described by the string.",
    topic: "JavaScript"
  },
  {
    question: "What does JSON.stringify() do?",
    answer: "It converts a JavaScript object or value to a JSON string.",
    topic: "JavaScript"
  },
  {
    question: "What happens if you use a standard function vs an arrow function as an event listener callback?",
    answer: "In a standard function, 'this' binds to the element that fired the event. In an arrow function, 'this' retains the value from the enclosing lexical context.",
    topic: "JavaScript"
  },

  // PHP (76-85)
  {
    question: "How do you start a session in PHP?",
    answer: "By calling session_start(); at the very beginning of the script, before any HTML or headers are output to the browser.",
    topic: "PHP"
  },
  {
    question: "What is the difference between include and require?",
    answer: "Both embed a file. If the file is missing, include throws a Warning and continues execution, while require throws a Fatal Error and halts execution.",
    topic: "PHP"
  },
  {
    question: "What are PHP Superglobals?",
    answer: "Built-in arrays that are always accessible regardless of scope. Examples include $_GET, $_POST, $_SESSION, and $_SERVER.",
    topic: "PHP"
  },
  {
    question: "How do you securely hash a user password in PHP?",
    answer: "By using the password_hash() function, which automatically generates a cryptographic salt and uses a strong one-way hashing algorithm like bcrypt.",
    topic: "PHP"
  },
  {
    question: "What does $_POST contain?",
    answer: "An associative array of variables passed to the current script via the HTTP POST method (typically from form submissions).",
    topic: "PHP"
  },
  {
    question: "What is the purpose of the header() function in PHP?",
    answer: "It sends raw HTTP headers to the client, commonly used for URL redirections (e.g., header('Location: dashboard.php');).",
    topic: "PHP"
  },
  {
    question: "What does the explode() function do?",
    answer: "It splits a string into an array based on a specified delimiter (string separator).",
    topic: "PHP"
  },
  {
    question: "How do you pass a variable by reference in a PHP function?",
    answer: "By prepending an ampersand (&) to the argument name in the function definition (e.g., function modify(&$var)).",
    topic: "PHP"
  },
  {
    question: "What does isset() do in PHP?",
    answer: "It checks whether a variable is declared and its value is not null.",
    topic: "PHP"
  },
  {
    question: "What is the purpose of Output Buffering (ob_start)?",
    answer: "It holds the output (HTML) in an internal buffer instead of sending it to the browser immediately, allowing headers to be set later in the script.",
    topic: "PHP"
  },

  // MySQL (86-95)
  {
    question: "What is an SQL Injection attack?",
    answer: "A vulnerability where an attacker manipulates SQL queries by injecting malicious code through unvalidated input fields, gaining unauthorized database access.",
    topic: "MySQL"
  },
  {
    question: "How do you prevent SQL Injection in PHP?",
    answer: "By using Prepared Statements (with PDO or MySQLi), which separate the SQL query structure from the user-provided data parameters.",
    topic: "MySQL"
  },
  {
    question: "What is a Primary Key?",
    answer: "A column (or set of columns) that uniquely identifies each row in a database table. It must be unique and cannot contain NULL values.",
    topic: "MySQL"
  },
  {
    question: "What is a Foreign Key?",
    answer: "A column in one table that links to the Primary Key of another table, enforcing referential integrity between the data.",
    topic: "MySQL"
  },
  {
    question: "Explain the INNER JOIN clause.",
    answer: "It combines rows from two or more tables, returning only the records that have matching values in both tables based on the join condition.",
    topic: "MySQL"
  },
  {
    question: "What is the difference between DELETE and TRUNCATE?",
    answer: "DELETE removes rows one by one (DML) and can be rolled back. TRUNCATE rapidly deletes all rows (DDL) and resets auto-increment counters.",
    topic: "MySQL"
  },
  {
    question: "What does the GROUP BY clause do?",
    answer: "It groups rows that have the same values in specified columns into summary rows, often used with aggregate functions like COUNT() or SUM().",
    topic: "MySQL"
  },
  {
    question: "Why use an Index in a database table?",
    answer: "It creates a data structure that significantly speeds up data retrieval (SELECT queries) at the cost of slower writes (INSERT/UPDATE) and extra storage.",
    topic: "MySQL"
  },
  {
    question: "What are ACID properties in database transactions?",
    answer: "Atomicity, Consistency, Isolation, Durability. They guarantee that database transactions are processed reliably.",
    topic: "MySQL"
  },
  {
    question: "What does the LIKE operator do?",
    answer: "It is used in a WHERE clause to search for a specified pattern in a column, typically using the '%' wildcard.",
    topic: "MySQL"
  },

  // Security & Storage (96-100)
  {
    question: "What is Cross-Site Scripting (XSS)?",
    answer: "A vulnerability where an attacker injects malicious client-side JavaScript into a web page viewed by other users to steal data or manipulate the DOM.",
    topic: "Security"
  },
  {
    question: "How do you mitigate Cross-Site Scripting (XSS) in PHP?",
    answer: "By strictly escaping all user-generated content before rendering it using htmlspecialchars(), which converts dangerous characters (<, >) into HTML entities.",
    topic: "Security"
  },
  {
    question: "What is Cross-Site Request Forgery (CSRF)?",
    answer: "An attack that tricks an authenticated user into submitting a malicious request on a web application without their knowledge.",
    topic: "Security"
  },
  {
    question: "How do you prevent CSRF attacks?",
    answer: "By including a unique, unpredictable anti-CSRF token in forms that the server validates upon submission, and using SameSite cookie attributes.",
    topic: "Security"
  },
  {
    question: "What is the main difference between LocalStorage and SessionStorage?",
    answer: "LocalStorage persists indefinitely until manually cleared. SessionStorage is temporary and is deleted when the browser tab or window is closed.",
    topic: "Storage"
  }
];
