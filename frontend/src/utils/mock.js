// Mock data storage for contact form submissions
let contactSubmissions = [];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock contact form submission
export const submitContactForm = async (formData) => {
  await delay(1000); // Simulate network delay
  
  const submission = {
    id: Date.now(),
    ...formData,
    timestamp: new Date().toISOString()
  };
  
  contactSubmissions.push(submission);
  console.log('Contact form submitted:', submission);
  console.log('All submissions:', contactSubmissions);
  
  return submission;
};

// Get all contact submissions (for testing)
export const getContactSubmissions = () => {
  return contactSubmissions;
};