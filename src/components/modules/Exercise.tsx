import React from "react";
import { motion } from "framer-motion";
import { FileText, Code, CheckCircle } from "lucide-react";

const Exercise: React.FC = () => {
  const solutions = [
    {
      id: 1,
      title: "1. Factorial Application",
      question: "Develop an application that takes a number from a form, computes the factorial of the number and display the result on the same page.",
      implementation: `<!-- HTML Structure -->
<form id="factorialForm">
  <input type="number" id="numInput" placeholder="Enter number">
  <button type="button" onclick="calculate()">Compute</button>
</form>
<div id="result"></div>

<!-- JavaScript Logic -->
<script>
function calculate() {
  var n = document.getElementById("numInput").value;
  var resDiv = document.getElementById("result");
  
  // Convert to number
  n = parseInt(n);
  
  if (isNaN(n) || n < 0) {
    resDiv.innerHTML = "Please enter a positive integer";
    return;
  }

  // L8: Factorial using FOR loop
  var fact = 1;
  for (var i = 1; i <= n; i++) {
    fact = fact * i;
  }
  
  resDiv.innerHTML = "Factorial of " + n + " is " + fact;
}
</script>`
    },
    {
      id: 2,
      title: "2. Caesar Cipher Application",
      question: "Develop an application that takes a message and encrypts it using Caesar's encryption scheme and displays the encrypted message.",
      implementation: `<!-- HTML Structure -->
<textarea id="msg" placeholder="Enter message"></textarea>
<button onclick="encrypt()">Encrypt (Shift 3)</button>
<p id="output"></p>

<!-- JavaScript Logic -->
<script>
function encrypt() {
  var text = document.getElementById("msg").value;
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); // L9: Arrays
  var shift = 3;
  var result = "";

  for (var i = 0; i < text.length; i++) { // L8: Loops
    var char = text[i].toLowerCase();
    var index = alphabet.indexOf(char);
    
    if (index !== -1) {
      var newIndex = (index + shift) % 26;
      var newChar = alphabet[newIndex];
      // Preserve case
      if (text[i] === text[i].toUpperCase()) {
        newChar = newChar.toUpperCase();
      }
      result += newChar;
    } else {
      result += text[i];
    }
  }
  document.getElementById("output").innerHTML = result;
}
</script>`
    },
    {
      id: 3,
      title: "3. Dynamic Form",
      question: "Create a dynamic form that takes input from the user and determines the next form element to display based on the input from the user.",
      implementation: `<!-- HTML Structure -->
<form>
  <label>User Type:</label>
  <select id="userType" onchange="toggleFields()">
    <option value="">--Select--</option>
    <option value="student">Student</option>
    <option value="staff">Staff</option>
  </select>

  <div id="studentField" style="display:none">
    <input type="text" placeholder="Matric Number">
  </div>
  
  <div id="staffField" style="display:none">
    <input type="text" placeholder="Staff ID">
  </div>
</form>

<!-- JavaScript Logic -->
<script>
function toggleFields() {
  var type = document.getElementById("userType").value;
  var sField = document.getElementById("studentField");
  var tField = document.getElementById("staffField");

  // L8: Control Structures (If/Else)
  if (type === "student") {
    sField.style.display = "block";
    tField.style.display = "none";
  } else if (type === "staff") {
    sField.style.display = "none";
    tField.style.display = "block";
  } else {
    sField.style.display = "none";
    tField.style.display = "none";
  }
}
</script>`
    },
    {
      id: 4,
      title: "4. Student & Course Objects",
      question: "Create a JavaScript object for student and another object for course. The student object should contain properties including biodata and three functions: changeSurname, registerCourse (instances of course), and displayCourses.",
      implementation: `// L9: Objects & Constructor Functions
function Course(title) {
  this.courseTitle = title;
}

function Student(fname, sname, age) {
  // Properties
  this.firstName = fname;
  this.surname = sname;
  this.age = age;
  this.registeredCourses = []; // Array to store course instances

  // Function 1: Change Surname
  this.changeSurname = function(newSurname) {
    this.surname = newSurname;
  };

  // Function 2: Register for a Course
  this.registerCourse = function(courseInstance) {
    if (courseInstance instanceof Course) {
      this.registeredCourses.push(courseInstance);
    }
  };

  // Function 3: Display Course Titles
  this.displayCourses = function() {
    var titles = "";
    for (var i = 0; i < this.registeredCourses.length; i++) {
      titles += this.registeredCourses[i].courseTitle + ", ";
    }
    console.log("Registered Courses: " + titles);
    return titles;
  };
}

// Example Usage:
var myCourse = new Course("Internet Programming");
var me = new Student("Ridwan", "Abayomi", 25);
me.changeSurname("Smith");
me.registerCourse(myCourse);
me.displayCourses();`
    }
  ];

  return (
    <div className="exercise-module" style={{ padding: "1rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="welcome-card glass-card"
        style={{ marginBottom: "2rem", padding: "3rem" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ padding: "12px", background: "var(--primary)", borderRadius: "12px" }}>
            <FileText color="white" size={24} />
          </div>
          <h1 style={{ fontSize: "2.5rem", margin: 0 }}>
            Model <span className="premium-gradient-text">Exam Answers</span>
          </h1>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px" }}>
          These implementations demonstrate the standard JavaScript (ES5) patterns expected in MIT815 exam responses, focusing on 
          <strong> L7 (Intro)</strong>, <strong>L8 (Control)</strong>, and <strong>L9 (Arrays/Objects)</strong>.
        </p>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {solutions.map((sol) => (
          <motion.div
            key={sol.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: sol.id * 0.1 }}
            className="glass-card"
            style={{ padding: "2.5rem", borderLeft: "4px solid var(--primary)" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <CheckCircle size={20} color="var(--primary)" />
              <h2 style={{ fontSize: "1.5rem", margin: 0, fontWeight: 700 }}>{sol.title}</h2>
            </div>
            
            <div style={{ 
              background: "rgba(255,255,255,0.03)", 
              padding: "1.5rem", 
              borderRadius: "12px", 
              marginBottom: "2rem",
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <p style={{ margin: 0, fontSize: "1rem", lineHeight: "1.6", color: "rgba(255,255,255,0.9)" }}>
                <strong>Question:</strong> {sol.question}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem", opacity: 0.6 }}>
              <Code size={16} />
              <span style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>Implementation</span>
            </div>

            <div style={{ 
              background: "#0d1117", 
              padding: "2rem", 
              borderRadius: "16px", 
              overflowX: "auto",
              boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
              <pre style={{ 
                margin: 0, 
                color: "#e6edf3", 
                fontSize: "0.95rem", 
                fontFamily: "'Fira Code', 'Roboto Mono', monospace", 
                lineHeight: "1.7"
              }}>
                {sol.implementation}
              </pre>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
