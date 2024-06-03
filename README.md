# Scholarsphare
This is a site which helps students find scholarships and Phd fundings.


![image](https://github.com/sahilaf/Scholarsphare/assets/117147361/594d09b9-5d37-4b40-a217-b21a6f84ad7c)



Instructions to clone this project in your local mechine you need to install xampp and create the given database given below.

admin(Email(pk), Password)
chat_history( id(p), sender, text, timestamp, email)
professors( professor_id(pk), full_name, department, university_id(fk), email, R_interest_name, title, description, funding_amount, deadline)
scholarships( scholarship_id(pk), university_id(fk), title, description, amount, deadline, SAT, IELTS, ACT, CGPA)
student(student_id(pk), full_name, email, date_of_birth, Password, major_interest, extracurricular_activities, financial_need, location, CGPA, SAT_score, ACT_score, Ielts_score, R_interest_name)
university(university_id(pk), name, website, email, location)


Now pull the repository install the node moduels by running "npm install" in the prac folder.
Edit the index.js file of the server folder if needed to establish connection between the database and the backend.
Run 'npm run dev' in the prac folder and 'npm start' in the server folder in terminal and you're good to go.
