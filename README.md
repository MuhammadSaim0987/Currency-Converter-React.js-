-- Currency Converter 
A modern, real-time currency converter built with React and Vite. Convert between multiple currencies with live exchange rates and a beautiful, user-friendly interface.

-- Features
Real-time Exchange Rates - Fetches live currency rates from a reliable API
Intuitive Interface - Clean design with easy-to-use currency selection
Search Functionality - Quickly find any currency from the dropdown list
Swap Currencies - One-click swap between "From" and "To" currencies
Responsive Design - Works seamlessly on desktop and mobile devices
Automatic Conversion - Real-time calculation as you type

-- Demo
https://images.pexels.com/photos/14891570/pexels-photo-14891570.jpeg?auto=compress&cs=tinysrgb&w=800

-- Tech Stack
React 18 - UI library
Vite - Build tool and development server
Tailwind CSS - Utility-first styling
shadCN/ui - Accessible component primitives
Lucide React - Beautiful icons

-- Installation: 
Clone the repository
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter

Install dependencies
npm install

Start the development server
npm run dev

Build for production
npm run build

-- Project Structure

currency-converter/
├── src/
│   ├── components/
│   │   └── InputBox.jsx        # Currency input with dropdown
│   ├── hooks/
│   │   └── useCurrencyInfo.js  # Custom hook for API calls
│   ├── data/
│   │   └── currencies.json     # Currency metadata (code + name)
│   └── App.jsx                  # Main application
├── public/
├── package.json
└── README.md

-- How It Works
Exchange Rate API - The app fetches live exchange rates from @fawazahmed0/currency-api CDN
Currency Selection - Users can search and select from 150+ currencies with full country names
Real-time Conversion - Amounts are converted instantly using the latest rates
Swap Feature - Swap between source and target currencies with a single click

-- Key Components
-InputBox
Reusable component that handles:
Amount input with validation
Currency dropdown with search
Disabled state for result fields

-useCurrencyInfo
Custom React hook that:
Fetches exchange rates for a given currency
Manages loading states
Returns formatted rate data

-- Usage
Enter the amount you want to convert
Select the source currency (or search for it)
Select the target currency
Click "Convert" or press Enter
Use the "Swap" button to quickly reverse the conversion

-- API Reference
The app uses the currency-api by @fawazahmed0:

GET https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
Returns exchange rates for the specified base currency.

-- Styling
Tailwind CSS for rapid UI development
Custom backdrop blur effect for modern glassmorphism
Responsive layout with mobile-first approach
Consistent color scheme with black/yellow accents

-- Browser Support
Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
