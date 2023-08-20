/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      borderRadius: {
        'borderInput':'16px 0px 16px 0px',
        'borderBtn':'0px 12px 0px 12px  '
      },
      padding:{
        '63':'6px 30px',
        'pdWrap':'20px',
        'pdInput':'10px 15px',
        'pdMain':'25px 25px 25px 50px'
        
        
      },
      flex:{
        '100':'1 1 100%'
      },
      margin:{
        'mTemp':'30px 0px',
        'mBtn':'12px auto'
      },
      dropShadow:{
        'shadowTemp':'0 2px 10px rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [],
}

