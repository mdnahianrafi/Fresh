/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Include all JSX and TSX files in your src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins'],
        'pod': ['Podkova'],
        'frank': ['Frank Ruhl Libre'],

      },
     maxWidth:
      {
        'menuContainer' : '1334px',
       
      },

      colors:{
 headerBg:"#FAE3B6",
 btnHoverColor:"#FDBB57",
 btnHoverBorder:"#FFD687",
 counterBg:"#FEECC8",
 sellerBg: "#CFA485",
 starColor:"#FFAF37",
 priceColor:"#C4C4C4",
      },
    },
  },
  plugins: [],
};
