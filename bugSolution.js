```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // <-- corrected to include all relevant file extensions
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff',
      },
    },
  },
  plugins: [],
};
```