import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Code, 
  CheckCircle, 
  Play, 
  Info, 
  ChevronDown, 
  ChevronUp,
  Calculator,
  Lock,
  UserPlus,
  FileCode2
} from "lucide-react";

const Exercise: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(1);

  // --- Factorial Demo ---
  const FactorialDemo = () => {
    const [num, setNum] = useState("");
    const [result, setResult] = useState<number | null>(null);
    const calculate = () => {
      const n = parseInt(num);
      if (isNaN(n) || n < 0) return;
      let fact = 1;
      for (let i = 1; i <= n; i++) fact *= i;
      setResult(fact);
    };
    return (
      <div className="demo-box" style={demoStyle}>
        <input 
          type="number" 
          value={num} 
          onChange={(e) => setNum(e.target.value)} 
          placeholder="Enter number" 
          style={inputStyle}
        />
        <button onClick={calculate} style={buttonStyle}>Calculate Factorial</button>
        {result !== null && <p style={resultStyle}>Result: {result}</p>}
      </div>
    );
  };

  // --- Caesar Demo ---
  const CaesarDemo = () => {
    const [msg, setMsg] = useState("");
    const [encrypted, setEncrypted] = useState("");
    const encrypt = () => {
      const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      let res = "";
      for (let i = 0; i < msg.length; i++) {
        const char = msg[i].toLowerCase();
        const idx = alphabet.indexOf(char);
        if (idx !== -1) {
          let nIdx = (idx + 3) % 26;
          let nChar = alphabet[nIdx];
          res += msg[i] === msg[i].toUpperCase() ? nChar.toUpperCase() : nChar;
        } else {
          res += msg[i];
        }
      }
      setEncrypted(res);
    };
    return (
      <div className="demo-box" style={demoStyle}>
        <textarea 
          value={msg} 
          onChange={(e) => setMsg(e.target.value)} 
          placeholder="Enter message" 
          style={{...inputStyle, minHeight: "60px", resize: "vertical"}}
        />
        <button onClick={encrypt} style={buttonStyle}>Encrypt (Shift 3)</button>
        {encrypted && <p style={resultStyle}>Ciphertext: <span style={{fontFamily: "monospace"}}>{encrypted}</span></p>}
      </div>
    );
  };

  // --- Dynamic Form Demo ---
  const FormDemo = () => {
    const [type, setType] = useState("");
    return (
      <div className="demo-box" style={demoStyle}>
        <select value={type} onChange={(e) => setType(e.target.value)} style={inputStyle}>
          <option value="">Select Type</option>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>
        <AnimatePresence>
          {type === "student" && (
            <motion.input 
              initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}}
              placeholder="Matric Number" style={{...inputStyle, marginTop: "10px"}}
            />
          )}
          {type === "staff" && (
            <motion.input 
              initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}}
              placeholder="Staff ID" style={{...inputStyle, marginTop: "10px"}}
            />
          )}
        </AnimatePresence>
      </div>
    );
  };

  // --- Objects Demo ---
  const ObjectDemo = () => {
    const [output, setOutput] = useState<string[]>([]);
    const run = () => {
      function Course(this: any, t: string) { this.title = t; }
      function Student(this: any, f: string, s: string) {
        this.fname = f; this.sname = s; this.courses = [];
        this.changeSname = function(n: string) { this.sname = n; };
        this.reg = function(c: any) { if (c instanceof (Course as any)) this.courses.push(c); };
        this.disp = function() { return this.courses.map((c: any) => c.title).join(", "); };
      }
      const s = new (Student as any)("John", "Doe");
      const c = new (Course as any)("MIT815");
      let logs = ["Initialized: John Doe"];
      s.changeSname("Smith");
      logs.push("Changed Surname: Smith");
      s.reg(c);
      logs.push("Registered: " + s.disp());
      setOutput(logs);
    };
    return (
      <div className="demo-box" style={demoStyle}>
        <button onClick={run} style={buttonStyle}>Run Logic Demo</button>
        {output.length > 0 && (
          <div style={{marginTop: "10px", padding: "10px", background: "rgba(0,0,0,0.2)", borderRadius: "8px"}}>
            {output.map((line, i) => <p key={i} style={{margin: "4px 0", fontSize: "0.85rem", color: "#a7f3d0"}}>➜ {line}</p>)}
          </div>
        )}
      </div>
    );
  };

  const solutions = [
    {
      id: 1,
      title: "1. Factorial Application",
      icon: <Calculator size={20} />,
      question: "Develop an application that takes a number from a form, computes the factorial and displays it on the page.",
      implementation: `function calculate() {
  var n = document.getElementById("numInput").value;
  var resDiv = document.getElementById("result");
  n = parseInt(n); // Convert input string to number
  
  if (isNaN(n) || n < 0) {
    resDiv.innerHTML = "Error: Invalid Input";
    return;
  }

  var fact = 1; // Initialize result
  for (var i = 1; i <= n; i++) {
    fact = fact * i; // L8: Multiply iteratively
  }
  resDiv.innerHTML = "Result: " + fact;
}`,
      explanation: [
        "document.getElementById('numInput').value: Fetches the raw string from the input field.",
        "parseInt(n): Crucial step to convert the string '5' into the mathematical number 5.",
        "if (isNaN(n) || n < 0): Validates that the input is a real number and not negative.",
        "var fact = 1: The 'accumulator'. We start at 1 because multiplying by 0 would wipe the result.",
        "for (var i = 1; i <= n; i++): A standard loop that runs from 1 up to the target number.",
        "fact = fact * i: In each step, we update the accumulator with the next multiplier.",
        "resDiv.innerHTML: Updates the page content dynamically without a refresh."
      ],
      demo: <FactorialDemo />
    },
    {
      id: 2,
      title: "2. Caesar Cipher App",
      icon: <Lock size={20} />,
      question: "Develop an application that encrypts a message using Caesar's scheme (Shift 3).",
      implementation: `function encrypt() {
  var text = document.getElementById("msg").value;
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var result = "";

  for (var i = 0; i < text.length; i++) {
    var char = text[i].toLowerCase();
    var index = alphabet.indexOf(char);
    
    if (index !== -1) {
      // Shift by 3 and use modulo 26 for wrap-around
      var newIndex = (index + 3) % 26;
      var newChar = alphabet[newIndex];
      // Case preservation logic
      if (text[i] === text[i].toUpperCase()) {
        newChar = newChar.toUpperCase();
      }
      result += newChar;
    } else {
      result += text[i]; // Non-alpha characters
    }
  }
  document.getElementById("output").innerHTML = result;
}`,
      explanation: [
        "alphabet.split(''): Converts the string into an array (L9) for easy index lookup.",
        "for loop: Iterates through each character of the message independently.",
        "indexOf(char): Finds the current letter's numeric position (0 for 'a', 25 for 'z').",
        "(index + 3) % 26: The core algorithm. Modulo 26 ensures that 'z' (25) wraps back to 'c' (2).",
        "result += newChar: Gradually builds the final ciphertext string.",
        "if (text[i] === ...): Checks if the original character was uppercase to restore its casing."
      ],
      demo: <CaesarDemo />
    },
    {
      id: 3,
      title: "3. Dynamic Form",
      icon: <UserPlus size={20} />,
      question: "Create a form that shows/hides elements based on user input selection.",
      implementation: `function toggleFields() {
  var type = document.getElementById("userType").value;
  var sField = document.getElementById("studentField");
  var tField = document.getElementById("staffField");

  // L8: Control Structures (If/Else)
  if (type === "student") {
    sField.style.display = "block"; // Show
    tField.style.display = "none";  // Hide
  } else if (type === "staff") {
    sField.style.display = "none";
    tField.style.display = "block";
  } else {
    // Reset if no selection
    sField.style.display = "none";
    tField.style.display = "none";
  }
}`,
      explanation: [
        "getElementById('userType').value: Captures the user's choice from a <select> dropdown.",
        "style.display = 'block': CSS property used to make a hidden <div> or <input> visible.",
        "style.display = 'none': CSS property used to completely hide an element from the layout.",
        "if/else logic: The decision-making heart of the dynamic UI.",
        "The final 'else': Essential for 'resetting' the form when the user clears their selection."
      ],
      demo: <FormDemo />
    },
    {
      id: 4,
      title: "4. Student & Course Objects",
      icon: <FileCode2 size={20} />,
      question: "Implement Student and Course objects using constructors and methods.",
      implementation: `function Course(title) {
  this.courseTitle = title;
}

function Student(fname, sname, age) {
  this.firstName = fname;
  this.surname = sname;
  this.age = age;
  this.registeredCourses = []; // Array (L9)

  this.changeSurname = function(newSurname) {
    this.surname = newSurname;
  };

  this.registerCourse = function(courseInstance) {
    // Check if input is actually a Course object
    if (courseInstance instanceof Course) {
      this.registeredCourses.push(courseInstance);
    }
  };

  this.displayCourses = function() {
    var titles = "";
    for (var i = 0; i < this.registeredCourses.length; i++) {
      titles += this.registeredCourses[i].courseTitle + " ";
    }
    return titles;
  };
}`,
      explanation: [
        "function Student(...): A constructor function (L9) used as a template for creating many students.",
        "this.registeredCourses = []: Creates a private collection of data for each student instance.",
        "this.changeSurname: A method attached to the student object to modify its properties.",
        "instanceof Course: A safety check to ensure we only 'register' valid course objects.",
        "for loop: Traverses the internal array of objects to extract specific data (titles).",
        "return titles: Passes the data back to the caller for display."
      ],
      demo: <ObjectDemo />
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
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Interactive <span className="premium-gradient-text">Study Lab</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
          Master the exam-standard implementations with line-by-line breakdowns and live previews.
        </p>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {solutions.map((sol) => (
          <div key={sol.id} className="glass-card" style={{ overflow: "hidden" }}>
            <div 
              onClick={() => setExpandedSection(expandedSection === sol.id ? null : sol.id)}
              style={{ 
                padding: "1.5rem 2.5rem", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                cursor: "pointer",
                background: expandedSection === sol.id ? "rgba(255,255,255,0.03)" : "transparent",
                transition: "background 0.3s"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{ color: "var(--primary)" }}>{sol.icon}</div>
                <h2 style={{ fontSize: "1.4rem", margin: 0 }}>{sol.title}</h2>
              </div>
              {expandedSection === sol.id ? <ChevronUp opacity={0.5} /> : <ChevronDown opacity={0.5} />}
            </div>

            <AnimatePresence>
              {expandedSection === sol.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ padding: "0 2.5rem 2.5rem 2.5rem" }}
                >
                  {/* Question */}
                  <p style={{ color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "2px solid var(--primary)", paddingLeft: "15px" }}>
                    {sol.question}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                    {/* Left Side: Code & Explanation */}
                    <div>
                      <SectionHeader icon={<Code size={16}/>} label="Implementation" />
                      <div style={codeContainerStyle}>
                        <pre style={codeStyle}>{sol.implementation}</pre>
                      </div>

                      <SectionHeader icon={<Info size={16}/>} label="Line-by-Line Breakdown" />
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {sol.explanation.map((text, i) => (
                          <div key={i} style={{ display: "flex", gap: "12px", fontSize: "0.9rem" }}>
                            <div style={{ color: "var(--primary)", fontWeight: 800 }}>{i + 1}</div>
                            <div style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.5" }}>{text}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Side: Demo */}
                    <div>
                      <SectionHeader icon={<Play size={16}/>} label="Live Demo" />
                      {sol.demo}
                      
                      <div style={{ marginTop: "2rem", padding: "1.5rem", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <h4 style={{ margin: "0 0 10px 0", fontSize: "0.9rem", color: "var(--primary)" }}>Study Tip</h4>
                        <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                          When writing this on paper, ensure you include both the <code>&lt;script&gt;</code> tags 
                          and the <code>id</code> attributes in your HTML, as they are required for the logic to work.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionHeader = ({ icon, label }: { icon: any, label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem", opacity: 0.6, marginTop: "1rem" }}>
    {icon}
    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
  </div>
);

const demoStyle: React.CSSProperties = {
  background: "rgba(0,0,0,0.3)",
  padding: "2rem",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.1)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  color: "white",
  marginBottom: "15px",
  fontSize: "0.95rem"
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  background: "var(--primary)",
  border: "none",
  borderRadius: "8px",
  color: "white",
  fontWeight: 700,
  cursor: "pointer"
};

const resultStyle: React.CSSProperties = {
  marginTop: "1.5rem",
  textAlign: "center",
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "#4ade80"
};

const codeContainerStyle: React.CSSProperties = {
  background: "#0d1117",
  padding: "1.5rem",
  borderRadius: "12px",
  marginBottom: "1.5rem",
  border: "1px solid rgba(255,255,255,0.1)",
  overflowX: "auto"
};

const codeStyle: React.CSSProperties = {
  margin: 0,
  color: "#e6edf3",
  fontSize: "0.85rem",
  fontFamily: "monospace",
  lineHeight: "1.6"
};

export default Exercise;
