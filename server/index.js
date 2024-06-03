const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "scholarsphare",
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Route to handle student login
app.post('/login', (req, res) => {
    const { email, Password } = req.body;
    const sql = "SELECT * FROM student WHERE email = ? AND Password = ?";
    db.query(sql, [email, Password], (err, data) => {
        if (err) {
            console.error('Error executing query: ' + err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (data.length > 0) {
            return res.json("Login Successful");
        } else {
            return res.status(401).json("Invalid username or password");
        }
    });
});

//****************Route to handle admin login*******************
app.post('/admin_login', (req, res) => {
  const { Email, Password } = req.body;
  const sql = "SELECT * FROM admin WHERE Email = ? AND Password = ?";
    db.query(sql, [Email, Password], (err, data) => {
        if (err) {
            console.error('Error executing query: ' + err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (data.length > 0) {
            return res.json("Login Successful");
        } else {
            return res.status(401).json("Invalid username or password");
        }
    });
});

// Route to handle student registration
app.post('/register', (req, res) => {
    const { full_name, email, Password } = req.body;
    const sql = "INSERT INTO student (full_name, email, Password) VALUES (?, ?, ?)";
    const values = [full_name, email, Password];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log('New user registered:', result);
        return res.json({ message: 'User registered successfully' });
    });
});



// Route to update student table with additional profile information
app.put("/update/:email", (req, res) => {
  const { email } = req.params;
  const { major_interest, extracurricular_activities, date_of_birth, financial_need, location, CGPA, SAT_score, ACT_score, IELTS_score, R_interest_name } = req.body;

  const sql = "UPDATE student SET major_interest = ?, extracurricular_activities = ?, date_of_birth = ?, financial_need = ?, location = ?, CGPA = ?, SAT_score = ?, ACT_score = ?, IELTS_score = ?, R_interest_name = ? WHERE email = ?";
  const values = [major_interest, extracurricular_activities, date_of_birth, financial_need, location, CGPA, SAT_score, ACT_score, IELTS_score, R_interest_name, email];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating student profile:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    return res.json({ message: "Student profile updated successfully" });
  });
});

app.put("/updateStudent/:email", (req, res) => {
  const { email } = req.params;
  const { major_interest, extracurricular_activities, date_of_birth, financial_need, location, CGPA, SAT_score, ACT_score, Ielts_score, R_interest_name } = req.body;

  const sql = "UPDATE student SET major_interest = ?, extracurricular_activities = ?, date_of_birth = ?, financial_need = ?, location = ?, CGPA = ?, SAT_score = ?, ACT_score = ?, Ielts_score = ?, R_interest_name = ? WHERE email = ?";
  const values = [major_interest, extracurricular_activities, date_of_birth, financial_need, location, CGPA, SAT_score, ACT_score, Ielts_score, R_interest_name, email];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating student profile:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    return res.json({ message: "Student profile updated successfully" });
  });
});

// Route to get all universities and their scholarships
app.get('/universities-with-scholarships', (req, res) => {
  const sql = `
      SELECT u.*, s.* 
      FROM university AS u
      LEFT JOIN scholarships AS s ON u.university_id = s.university_id
  `;
  db.query(sql, (err, data) => {
      if (err) {
          console.error('Error executing query:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
      }
      console.log('Universities with scholarships:', data);
      return res.json(data);
  });
});

// Define route to handle professor deletion
app.delete('/delete/:professor_id', (req, res) => {
    const professorId = req.params.professor_id; // Get professor ID from request parameters
  
    // SQL query to delete professor from the database
    const query = 'DELETE FROM Professors WHERE professor_id = ?';
    
    // Execute the SQL query
    connection.query(query, [professorId], (err, result) => {
      if (err) {
        console.error('Error deleting professor:', err);
        res.status(500).send('Error deleting professor');
        return;
      }
      console.log('Professor deleted successfully');
      res.status(200).send('Professor deleted successfully');
    });
  });


app.get('/university-professors', (req, res) => {
  const sql = `
      SELECT Professors.*, University.name AS university_name, University.website AS university_website, University.email AS university_email,University.location AS university_location
      FROM Professors
      INNER JOIN University ON Professors.university_id = University.university_id
  `;
  db.query(sql, (err, data) => {
      if (err) {
          console.error('Error executing query:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
      }
      console.log('Fetched university and professors data:', data);
      return res.json(data);
  });
});

app.delete("/delete1/:university_id", (req, res) => {
    const { university_id } = req.params;
    const sql1 = "DELETE FROM scholarships WHERE university_id = ?";
    db.query(sql1, [university_id], (err1, result1) => {
        if (err1) {
            console.error("Error deleting scholarships:", err1);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    });
});
app.delete("/delete2/:university_id", (req, res) => {
    const { university_id } = req.params;
    const sql1 = "DELETE FROM professors WHERE university_id = ?";
    db.query(sql1, [university_id], (err1, result1) => {
        if (err1) {
            console.error("Error deleting scholarships:", err1);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    });
});


// Route to check if university exists by name
app.get('/get-university', (req, res) => {
    const { name } = req.query;
    const sql = "SELECT * FROM university WHERE name = ?";
    db.query(sql, [name], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.length === 0) {
            // University does not exist
            return res.json(null);
        } else {
            // University exists, return data including university_id
            return res.json(result[0]);
        }
    });
});

// Route to create a new professor
  app.post('/create-professor', (req, res) => {
    const { full_name, department, university_id, email, R_interest_name, title, description, funding_amount, deadline } = req.body;
    const sql = "INSERT INTO Professors (full_name, department, university_id, email, R_interest_name, title, description, funding_amount, deadline) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [full_name, department, university_id, email, R_interest_name, title, description, funding_amount, deadline];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message }); // Return the error message
        }
        console.log('New scholarship added:', result);
        return res.json({ message: 'Scholarship added successfully' });
    });
});

// Route to create new university entry
app.post('/create-university', (req, res) => {
    const { name, website, email } = req.body;
    const sql = "INSERT INTO university (name, website, email) VALUES (?, ?, ?)";
    const values = [name, website, email];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log('New university added:', result);
        return res.json({ insertId: result.insertId });
    });
});

// Route to fetch university_id based on university name
app.get('/get-university-id', (req, res) => {
    const { name } = req.query;
    const sql = "SELECT university_id FROM university WHERE name = ?";
    db.query(sql, [name], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'University not found' });
        }
        const universityId = result[0].university_id;
        return res.json({ university_id: universityId });
    });
});


// Route to handle inserting data into Scholarships table
app.post('/create-scholarship', (req, res) => {
    const { university_id, title, description, amount, deadline, SAT, IELTS, ACT, location, CGPA } = req.body;
    const sql = "INSERT INTO scholarships (university_id, title, description, amount, deadline, SAT, IELTS, ACT, location, CGPA) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [university_id, title, description, amount, deadline, SAT, IELTS, ACT, location, CGPA];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message }); // Return the error message
        }
        console.log('New scholarship added:', result);
        return res.json({ message: 'Scholarship added successfully' });
    });
});



app.put('/updateuniversity/:universityId', (req, res) => {
    const { universityId } = req.params;
    const { name, website, email } = req.body;
    const sql = "UPDATE university SET name = ?, website = ?, email = ? WHERE university_id = ?";
    const values = [name, website, email, universityId];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error updating university data:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "University not found" });
      }
  
      return res.json({ message: "University data updated successfully" });
    });
  });
  

app.put('/updatescholarship/:universityId', (req, res) => {
    const { universityId } = req.params;
    const { title, description, amount, deadline, SAT, IELTS, ACT, location, CGPA } = req.body;
    const sql = "UPDATE scholarships SET title = ?, description = ?, amount = ?, deadline = ?, SAT = ?, IELTS = ?, ACT = ?, location = ?, CGPA = ? WHERE university_id = ?";
    const values = [title, description, amount, deadline, SAT, IELTS, ACT, location, CGPA, universityId];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error updating scholarship data:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Scholarship not found" });
      }
      return res.json({ message: "Scholarship data updated successfully" });
    });
  });
  
  app.put('/updateprof/:ProfId', (req, res) => {
    const { ProfId } = req.params;
    const { full_name, department, university_id, email, R_interest_name, title, description, funding_amount, deadline} = req.body;
    const sql = "UPDATE professors SET full_name = ?, department = ?, university_id = ?, email = ?, R_interest_name = ?, title = ?, description = ?, funding_amount = ?, deadline = ? WHERE professor_id = ?";
    const values = [full_name, department, university_id, email, R_interest_name, title, description, funding_amount, deadline, ProfId];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error updating scholarship data:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Scholarship not found" });
      }
      return res.json({ message: "Scholarship data updated successfully" });
    });
  });
  
// Route to get university ID by professor ID
app.get("/getuniversityid/:profId", (req, res) => {
    const { profId } = req.params;
    const sql = "SELECT university_id FROM professors WHERE professor_id = ?";
  
    db.query(sql, [profId], (err, result) => {
      if (err) {
        console.error("Error fetching university ID:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      if (result.length === 0) {
        return res.status(404).json({ error: "Professor not found" });
      }
  
      const universityId = result[0].university_id;
      return res.json({ university_id: universityId });
    });
});
// Route to get all universities and their scholarships
app.get('/filterscholarships/:email', (req, res) => {
  const { email } = req.params;
  const sql = `
    SELECT 
      u.university_id,
      u.name AS university_name,
      u.website,
      u.location,
      u.email AS university_email,
      s.title AS scholarship_title,
      s.description AS scholarship_description,
      s.amount AS scholarship_amount,
      s.SAT,
      s.IELTS,
      s.ACT,
      s.CGPA,
      DATE_FORMAT(s.deadline, '%Y-%m-%d') AS deadline
    FROM 
      university AS u
    JOIN 
      Scholarships AS s ON u.university_id = s.university_id
    WHERE 
      s.CGPA <= (SELECT CGPA FROM Student WHERE email = ?)
      AND s.SAT <= (SELECT SAT_score FROM Student WHERE email = ?)
      AND s.ACT <= (SELECT ACT_score FROM Student WHERE email = ?)
      AND s.IELTS <= (SELECT Ielts_score FROM Student WHERE email = ?)
      AND u.location = (SELECT location FROM Student WHERE email = ?)
    ORDER BY
      s.deadline;`;

  db.query(sql, [email, email, email, email, email], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    console.log('Filtered Scholarships:', data);
    return res.json(data);
  });
});

app.get('/filterprofessors/:email', (req, res) => {
  const { email } = req.params;
  const sql = `
    SELECT 
      p.professor_id,
      p.full_name,
      p.department,
      p.email,
      p.R_interest_name,
      p.email,
      u.name AS university_name,
      u.email as uni_email,
      u.location AS university_location,
      p.title,
      p.description,
      p.funding_amount,
      p.deadline
    FROM 
      Professors AS p
    JOIN 
      University AS u ON p.university_id = u.university_id
    WHERE 
      p.R_interest_name = (SELECT R_interest_name FROM Student WHERE email = ?)
      AND u.location = (SELECT location FROM Student WHERE email = ?)
    ORDER BY p.funding_amount DESC;
  `;
  
  db.query(sql, [email, email, email], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    console.log('Filtered Professors:', data);
    return res.json(data);
  });
});

app.get("/getstudent/:email", (req, res) => {
  const { email } = req.params;
  const sql = "SELECT * FROM Student WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error("Error fetching student:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Assuming you want to return the student data if found
    return res.json(result[0]);
  });
});

// Route to handle searching universities by name
app.get('/search', (req, res) => {
  const { searchTerm } = req.query;
  const sql = `
    SELECT u.*, s.* 
    FROM university AS u
    LEFT JOIN scholarships AS s ON u.university_id = s.university_id
    WHERE u.name LIKE ? OR s.title LIKE ? OR u.location LIKE ?
  `;
  const searchTermLike = `%${searchTerm}%`; // Add wildcard '%' to search for partial matches

  db.query(sql, [searchTermLike, searchTermLike, searchTermLike], (err, results) => {
    if (err) {
      console.error('Error executing search query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    
    // Check if any results found
    if (results.length === 0) {
      return res.json({ message: 'No matching universities or scholarships found' });
    }

    // Return the search results
    return res.json(results);
  });
});





app.post("/save-message", (req, res) => {
  const { sender, text, email } = req.body;
  const query = "INSERT INTO chat_history (sender, text, email) VALUES (?, ?, ?)";
  db.query(query, [sender, text, email], (err, results) => {
    if (err) {
      console.error("Failed to save message:", err);
      res.status(500).send("Error saving message.");
    } else {
      res.status(200).send("Message saved.");
    }
  });
});
app.get("/getmessages/:email", (req, res) => {
  const { email } = req.params;
  const sql = "SELECT * FROM chat_history WHERE email = ? ORDER BY timestamp ASC";

  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error("Error fetching chat history:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: "No messages found" });
    }

    return res.json(result); // Return all messages
  });
});
app.delete("/clearchat/:email", (req, res) => {
  const { email } = req.params;
  const sql = "DELETE FROM chat_history WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error("Error clearing chat history:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    return res.status(200).json({ message: "Chat history cleared successfully" });
  });
});


app.post("/savemessage", (req, res) => {
  const { sender, text, email } = req.body;
  const timestamp = new Date().toISOString();
  const sql = "INSERT INTO chat_history (sender, text, email, timestamp) VALUES (?, ?, ?, ?)";

  db.query(sql, [sender, text, email, timestamp], (err, result) => {
    if (err) {
      console.error("Error saving message:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    return res.status(200).json({ message: "Message saved successfully" });
  });
});
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
