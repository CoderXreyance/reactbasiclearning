// import react from 'react';
import reactdom from 'react-dom';

import App from './App';

//This is react


// const elfement = react.createElement('div',{style : { color : "red"}},"This is some text");
// const root = reactdom.createRoot(document.getElementById('root'));
// root.render(element);


// This is babel
//most preferred way




// reactdom.render(
//   <>
//       <div>
//         <h2 contentEditable = "true" >My name is Reyansh Yogi</h2>
//       </div>
//   </>
//   ,document.getElementById('root')
// )


reactdom.render(
  <>
      <App />
  </>
  ,document.getElementById('root')
)




//This is pure javascript

// var h1 = document.createElement('h1');
// h1.innerHTML = "This is pure javascript";
// document.getElementById('root').appendChild(h1);


