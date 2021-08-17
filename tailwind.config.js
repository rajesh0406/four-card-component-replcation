module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme:{
      screens: {
        // NEW
        xs: "0px",
        sm: "361px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors:{
       red:"#ea5353",
       cyan:"#45d3d3",
       orange:"#fcaf4a",
       blue:"#549ef2",
       verydarkblue:"#4c4e61",
       grayishblue:"#a3a5ae",
       verylightgray:"#fafafa",
       white:"#ffffff",
       black:"#000000"
      },
      
    extend: {
      fontFamily: {
        'Poppins':['Poppins', 'sans-serif']
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
