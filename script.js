// script.js

// Function to show the selected category
function showCategory(category) {
    // Hide the loading page
    document.getElementById('loading-page').style.display = 'none';

    // Show the content section
    const contentDiv = document.getElementById('content');
    contentDiv.style.display = 'block';

    // Change the body class for category-specific background color
    document.body.className = category;

    // Load the content based on the selected category
    let content = '';
    switch (category) {
        case 'about':
            content = `
                <h2>About Me</h2>
                <img src="1689153130636.jpg.jpg" alt="Profile Picture" class="profile-picture">
                <p>
                    I am a passionate and driven individual pursuing a B-Tech in Computer Science and Engineering. My goal is to leverage my technical skills and knowledge to contribute to organizational growth while staying updated with the latest technologies.
                </p>
                <button onclick="goBack()" class="back-button">Back</button>
            `;
            break;
        case 'education':
            content = `
                <h2>Education</h2>
                <ul>
                    <li><strong>B-Tech (CSE)</strong> - BV Raju Institute of Technology, Narsapur, Medak (2022-2026) - CGPA: 7.43</li>
                    <li><strong>Intermediate (MPC)</strong> - Narayana Junior College (2020-2022) - Percentage: 93.2%</li>
                    <li><strong>Secondary School (SSC)</strong> - ABHI High School (2020) - GPA: 10.0</li>
                </ul>
                <button onclick="goBack()" class="back-button">Back</button>
            `;
            break;
        case 'skills':
            content = `
                <h2>Skills</h2>
                <h3>Technical Skills</h3>
                <ul>
                    <li>Programming: C, Python, Java</li>
                    <li>Front-end: HTML, CSS, Bootstrap, ReactJS, JavaScript</li>
                    <li>Back-end: MySQL, Oracle, MongoDB</li>
                    <li>Tools: Power BI</li>
                </ul>
                <h3>Personal Skills</h3>
                <ul>
                    <li>Adaptability and Flexibility</li>
                    <li>Communication and Time Management</li>
                    <li>Logical Thinking and Problem Solving</li>
                    <li>Leadership and Teamwork</li>
                </ul>
                <button onclick="goBack()" class="back-button">Back</button>
            `;
            break;
        case 'projects':
            content = `
                <h2>Projects</h2>
                <div class="project">
                    <h3>Diabetic Foot Ulcer Detector</h3>
                <img src="ddlrg.jpg.jpg"  width="200" height="200">
                           <p>
                        This project focuses on the early detection of diabetic foot ulcers using advanced image processing and machine learning techniques. The system analyzes foot images to identify potential ulcers, enabling timely intervention and treatment. The project leverages deep learning models to achieve high accuracy in ulcer detection.
                    </p>
                     <p>
                        <strong>Key Features:</strong>
                        <ul>
                            <li>Uses convolutional neural networks (CNNs) for image analysis.</li>
                            <li>Provides real-time feedback on foot health.</li>
                            <li>Helps reduce the risk of severe complications in diabetic patients.</li>
                        </ul>
                    </p>
                    <p>
                        <strong>Reference:</strong>
                        <a href="https://ieeexplore.ieee.org/document/10724621" target="_blank">IEEE Paper on Diabetic Foot Ulcer Detection</a>
                    </p>
                 <h3>Enhancing Text Authenticity: A Dual Approach to Plagiarism Detection and Spell Correction </h3>
                      <p>
                      This project focuses on improving text authenticity through a dual approach: detecting plagiarism to ensure originality and correcting spelling errors to enhance clarity and accuracy. By integrating advanced algorithms, it identifies duplicated content and suggests corrections for misspelled words, ensuring both integrity and quality in written documents. This comprehensive solution is ideal for academic, professional, and creative writing contexts.
                     </p>
                      <p>
                        <strong>Key Features:</strong>
                        <ul>
                            <li>Plagiarism Detection and Spell correction</li>
                            <li>User-Friendly Interface</li>
                            <li>Multi-Language Support and Comprehensive Reporting </li>
                        </ul>
                    </p>
                    <img src="plaga.jpeg.jpeg"  width="200" height="200">
                    <img src="spell.png.png"  width="200" height="200">
                 </div>
                <button onclick="goBack()" class="back-button">Back</button>
            `;
            break;
        case 'contact':
            content = `
                <h2>Contact</h2>
                <p>Email: <a href="mailto:alakuntasridhar26@gmail.com">alakuntasridhar26@gmail.com</a></p>
                <p>Phone: +91 8897064396</p>
                <p>LinkedIn: <a href="www.linkedin.com/in/alakuntasridhar-2a8015283">LinkedIn Profile</a></p>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Send</button>
                </form>
                <button onclick="goBack()" class="back-button">Back</button>
            `;
            break;
        default:
            content = `<p>No content available for this category.</p>`;
    }

    // Update the content section
    contentDiv.innerHTML = content;
}

// Function to go back to the loading page
function goBack() {
    // Show the loading page
    document.getElementById('loading-page').style.display = 'block';

    // Hide the content section
    document.getElementById('content').style.display = 'none';

    // Reset the background color
    document.body.className = '';
}
