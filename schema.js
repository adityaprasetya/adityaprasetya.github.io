// schema.js
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aditya Prasetya Suryana",
  "url": "https://adityaprasetya.github.io",
  "logo": "https://adityaprasetya.github.io/logo.jpeg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-81224603966",
    "contactType": "Customer Service"
  },
  "sameAs": [
    "https://www.facebook.com/nason.suryana",
    "https://www.x.com/adityapras82",
    "https://www.linkedin.com/in/aditya-prasetya-suryana"
  ]
};

// Menambahkan schema ke dalam head
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);
