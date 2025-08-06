// Week 2 Day 5 - JavaScript Example
// This demonstrates basic JavaScript functionality

// Simple function to demonstrate JavaScript concepts
function greetUser(name) {
    return `Hello, ${name}! Welcome to Week 2 Day 5.`;
}

// Example of DOM manipulation (if running in browser)
function updateContent() {
    console.log('JavaScript is working!');
    if (typeof document !== 'undefined') {
        document.body.innerHTML = '<h1>JavaScript Loaded Successfully</h1>';
    }
}

// Call the function
console.log(greetUser('Student'));
updateContent();
