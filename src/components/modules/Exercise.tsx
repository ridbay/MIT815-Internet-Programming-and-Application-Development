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
      implementation: `<!-- HTML Structure -->
<form>
  <input type="number" id="numInput" placeholder="Enter number">
  <button type="button" onclick="calculate()">Compute</button>
</form>
<div id="result"></div>

<!-- JavaScript Logic -->
<script>
function calculate() {
  var n = document.getElementById("numInput").value;
  var resDiv = document.getElementById("result");
  n = parseInt(n); // Convert to number
  
  if (isNaN(n) || n < 0) {
    resDiv.innerHTML = "Invalid Input";
    return;
  }

  var fact = 1;
  for (var i = 1; i <= n; i++) {
    fact = fact * i; // L8: Iterate and multiply
  }
  resDiv.innerHTML = "Factorial is: " + fact;
}
</script>`,
      explanation: [
        "<input id='numInput'>: Creates a place for the user to type their number.",
        "onclick='calculate()': Connects the HTML button to our JavaScript function.",
        "parseInt(n): Converts the string input from the form into a workable number.",
        "fact = fact * i: The iterative step that performs the actual factorial calculation.",
        "innerHTML: Injects the final answer back into the empty <div> on the page."
      ],
      demo: <FactorialDemo />
    },
    {
      id: 2,
      title: "2. Caesar Cipher App",
      icon: <Lock size={20} />,
      question: "Develop an application that encrypts a message using Caesar's scheme (Shift 3).",
      implementation: `<!-- HTML Structure -->
<textarea id="msg" placeholder="Enter text"></textarea>
<button onclick="encrypt()">Encrypt</button>
<p id="output"></p>

<!-- JavaScript Logic -->
<script>
function encrypt() {
  var text = document.getElementById("msg").value;
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var result = "";

  for (var i = 0; i < text.length; i++) {
    var char = text[i].toLowerCase();
    var index = alphabet.indexOf(char);
    
    if (index !== -1) {
      var newIndex = (index + 3) % 26; // L8: Modulo for wrap
      var newChar = alphabet[newIndex];
      // Case preservation
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
</script>`,
      explanation: [
        "<textarea>: Used instead of <input> to allow for longer message encryption.",
        "alphabet.split(''): Prepares our lookup table for character shifting (L9).",
        "indexOf(char): Locates the character's position in the alphabet array.",
        "(index + 3) % 26: Shifts the character by 3 and wraps 'z' back to the start.",
        "innerHTML: Displays the resulting ciphertext in the <p> element."
      ],
      demo: <CaesarDemo />
    },
    {
      id: 3,
      title: "3. Dynamic Form",
      icon: <UserPlus size={20} />,
      question: "Create a form that shows/hides elements based on user input selection.",
      implementation: `<!-- HTML Structure -->
<form>
  <select id="userType" onchange="toggleFields()">
    <option value="">--Select Type--</option>
    <option value="student">Student</option>
    <option value="staff">Staff</option>
  </select>

  <div id="studentField" style="display:none">
    <input type="text" placeholder="Matric No">
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
</script>`,
      explanation: [
        "<select onchange='...'>: Triggers logic immediately when the dropdown selection changes.",
        "style='display:none': Initially hides the specific input fields from the user.",
        "style.display = 'block': Dynamically shows a hidden field based on the chosen category.",
        "if/else if (L8): Provides the branching logic to handle different user types.",
        "value: Captures the 'student' or 'staff' string from the selected option."
      ],
      demo: <FormDemo />
    },
    {
      id: 4,
      title: "4. Student & Course Objects",
      icon: <FileCode2 size={20} />,
      question: "Implement Student and Course objects using constructors and methods.",
      implementation: `<!-- Pure JavaScript Solution -->
<script>
function Course(title) {
  this.courseTitle = title;
}

function Student(fname, sname, age) {
  this.firstName = fname;
  this.surname = sname;
  this.age = age;
  this.registeredCourses = [];

  this.changeSurname = function(newSurname) {
    this.surname = newSurname;
  };

  this.registerCourse = function(courseObj) {
    if (courseObj instanceof Course) { // L9: Type check
      this.registeredCourses.push(courseObj);
    }
  };

  this.displayCourses = function() {
    var titles = "";
    for (var i = 0; i < this.registeredCourses.length; i++) {
      titles += this.registeredCourses[i].courseTitle + ", ";
    }
    return titles;
  };
}

// Example usage on paper:
var c1 = new Course("MIT815");
var s1 = new Student("John", "Doe", 20);
s1.registerCourse(c1);
</script>`,
      explanation: [
        "function Course(title): A constructor template for course objects (L9).",
        "this.firstName = fname: Assigns passed arguments as properties of the object.",
        "this.registeredCourses = []: Creates a dynamic array to hold course instances.",
        "instanceof Course: Validates that we are only adding valid Course objects to the student.",
        "for loop: Iterates through the collection of course objects to gather their titles."
      ],
      demo: <ObjectDemo />
    }
  ];

  return (
    <div className="exercise-module" style={{ padding: "0.5rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="welcome-card glass-card"
        style={{ marginBottom: "1.5rem", padding: "1.5rem" }}
      >
        <h1 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
          Interactive <span className="premium-gradient-text">Study Lab</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
          Master exam-standard implementations with full breakdowns and live previews.
        </p>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {solutions.map((sol) => (
          <div key={sol.id} className="glass-card" style={{ overflow: "hidden" }}>
            <div 
              onClick={() => setExpandedSection(expandedSection === sol.id ? null : sol.id)}
              style={{ 
                padding: "1rem 1.25rem", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                cursor: "pointer",
                background: expandedSection === sol.id ? "rgba(255,255,255,0.03)" : "transparent",
                transition: "background 0.3s"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ color: "var(--primary)" }}>{sol.icon}</div>
                <h2 style={{ fontSize: "1.1rem", margin: 0 }}>{sol.title}</h2>
              </div>
              {expandedSection === sol.id ? <ChevronUp opacity={0.5} size={20} /> : <ChevronDown opacity={0.5} size={20} />}
            </div>

            <AnimatePresence>
              {expandedSection === sol.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ padding: "0 1.25rem 1.25rem 1.25rem" }}
                >
                  {/* Question */}
                  <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", borderLeft: "2px solid var(--primary)", paddingLeft: "10px", fontSize: "0.9rem" }}>
                    {sol.question}
                  </p>

                  <div className="exercise-grid">
                    {/* Left Side: Code & Explanation */}
                    <div style={{ minWidth: 0 }}>
                      <SectionHeader icon={<Code size={14}/>} label="Full Implementation" />
                      <div style={codeContainerStyle}>
                        <pre style={codeStyle}>{sol.implementation}</pre>
                      </div>

                      <SectionHeader icon={<Info size={14}/>} label="Line-by-Line Breakdown" />
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {sol.explanation.map((text, i) => (
                          <div key={i} style={{ display: "flex", gap: "10px", fontSize: "0.85rem" }}>
                            <div style={{ color: "var(--primary)", fontWeight: 800 }}>{i + 1}</div>
                            <div style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.4" }}>{text}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Side: Demo */}
                    <div style={{ minWidth: 0 }}>
                      <SectionHeader icon={<Play size={14}/>} label="Live Demo" />
                      {sol.demo}
                      
                      <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(255,255,255,0.02)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <h4 style={{ margin: "0 0 8px 0", fontSize: "0.8rem", color: "var(--primary)" }}>Exam Success Tip</h4>
                        <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: "1.5" }}>
                          On the exam paper, make sure to write the <strong>HTML first</strong> and the <strong>Script second</strong>.
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

      <style>{`
        .exercise-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .exercise-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

const SectionHeader = ({ icon, label }: { icon: any, label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "0.75rem", opacity: 0.6, marginTop: "0.75rem" }}>
    {icon}
    <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
  </div>
);

const demoStyle: React.CSSProperties = {
  background: "rgba(0,0,0,0.3)",
  padding: "1.5rem",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "6px",
  color: "white",
  marginBottom: "12px",
  fontSize: "0.9rem"
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  background: "var(--primary)",
  border: "none",
  borderRadius: "6px",
  color: "white",
  fontWeight: 700,
  cursor: "pointer",
  fontSize: "0.9rem"
};

const resultStyle: React.CSSProperties = {
  marginTop: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  fontWeight: 600,
  color: "#4ade80"
};

const codeContainerStyle: React.CSSProperties = {
  background: "#0d1117",
  padding: "1rem",
  borderRadius: "10px",
  marginBottom: "1rem",
  border: "1px solid rgba(255,255,255,0.1)",
  overflowX: "auto",
  maxWidth: "100%"
};

const codeStyle: React.CSSProperties = {
  margin: 0,
  color: "#e6edf3",
  fontSize: "0.8rem",
  fontFamily: "monospace",
  lineHeight: "1.5",
  whiteSpace: "pre-wrap",
  wordBreak: "break-all"
};

export default Exercise;
