import React from "react";
import ReactDOM from "react-dom/client";


// so we saw it is very diffecult to creat elements using reactElemts
//  so developers had find a solution so they created jsx 

//  JSX  is a javascript syntax which is easier to create react elements .jsx is not html inside javascript it is actually html like syntax .it is actually HTML -like syntax. it more like xml-like syntax


// actually browser do not understand this code 

// jsx (transpiled  before it reaches to js engine) transfile means this code is converted to the code that browsers can understand

// who is transpiling this 
// ans parcel  is parcel doing it actually itself no it hands over this duty to  a pakage which is known as Babel

// Babel is agaim a pakage . bable is already present  in node modules . it takes our jsx and converts it into the code that browsers , that js engine understands

//  we can build react without jsx as we did but make it easier way we use jsx

// behind the scenne jsx code is converted to React.CreateElement()
// what does React.create element do it makes a js element and this js object  and this elemnet is then rendered into the dom a an html emement 


// what actually happens


// const jsxheading = <h1> react using jsx </h1>   gets converted to below code
   // ------>
// const heading = React.createElement('h1', 
// // inside this object we give attriubutes to our div elements
// {

//  h1:"heading"
// }, "helloworld");

// jsx=> React.createElement => ReactElemt-js object => HTMLelment(render)

// all this is done by bable conversion of jsx to other form



// React Component :it is normal js function that returns jsx 
const Title =()=>{
 <h1 className="head">react using jsx </h1>
};


// Component Composition
// below we are doing componnet composition by putting one component into another

const HeadingComponent=()=>{

 <div id ="container">
  <Title/>
  <h1 className="heading"> react functional componet</h1>
 </div>
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)


// inside curly braces we can write any type of java script





// const heading = React.createElement('h1', 
// // inside this object we give attriubutes to our div elements
// {

//  h1:"heading"
// }, "helloworld");

// // below we how to create nested elements in react


// // ReactElement is actually creating am object => HTML (Browser understands)

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     // First Child Div
//     React.createElement(
//       "div",
//       { id: "child1" },
//       [
//         React.createElement('h1', {}, "i am an h1 tag"),
//         React.createElement('h2', {}, "i am an h2 tag") // Changed to h2 to match your text
//       ]
//     ),
//     // Second Child Div
//     React.createElement(
//       "div",
//       { id: "child2" },
//       [
//         React.createElement('h1', {}, "i am an h1 tag"),
//         React.createElement('h2', {}, "i am an h2 tag")
//       ]
//     )
//   ]
// );



// // so above we can how difficult it is to create the elemnets it would be very difficult to maintain such application ,here comes the JSX elememts which makes life easier
// console.log(parent);
// console.log(heading)

// // so here we are creating an object actually  once you log you will see 
        
//         const root = ReactDOM.createRoot(document.getElementById("root")); 
//         root.render(parent);