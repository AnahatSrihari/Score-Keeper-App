//----- JavaScript -----
// const heading =document.createElement("h2");
// heading.textContent="hello world in react";
// heading.className="header";
// document.getElementById("root").append(heading);

//-------------- React----------
//const reactHeading = React.createElement("h1",{className:"head" },"hello react")
//ReactDOM.createRoot(document.getElementById('root')).render(reactHeading)



// ---element = React.createElement('h1', {}, 'Hello React!') 
// ----ReactDOM.render(element, document.getElementById('root'))

// -----React JSX -----


// const jsxhead = <>
//     <h1>I Love JSX!</h1>
//     <p> This is para using jsx</p>
// </>
// ReactDOM.createRoot(document.getElementById('root')).render(jsxhead);


const jsxhead = <>
    <h1>About React JSX!</h1>
    <p> This is para using jsx</p>
    <li>React is a JavaScript library for building user interfaces.</li>
    <li>React is used to build single-page applications.</li>
    <li>React allows us to create reusable UI components.</li>

</>
ReactDOM.createRoot(document.getElementById('root')).render(App());
