//  const heading = React.createElement("h1",{},"WELCOMES TO THE WORLD OF REACT");

//  const Root = ReactDOM.createRoot(document.getElementById("root"));

//  Root.render(heading);

// THIS THE WAY OF WRITING AN H1 TAG IN REACT//

//-----------------------------------------------------------------------------------------//
/**
 * <div id = "parent">
 * <div id ="child">
 * <h1> my name is ash</h1>
 * <h2> iam a full stack developer</h2>
 * </div>
 * </div>
 * 
*/

//this html code is executed below by using the react//



const parent = React.createElement(
    "div",
    {id : "parent" },
 React.createElement("div",{ id : "child"}, [
   React.createElement("h1", {}, "MY NAME IS ASH"),
   React.createElement("h2",{},"Iam a full stack developer"),
   React.createElement("h1", {}, "MY NAME IS ASH"),
   React.createElement("h2",{},"Iam a full stack developer"),
 ])
);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent); 