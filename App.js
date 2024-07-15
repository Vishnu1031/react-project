const heading = React.createElement("h1",
 { id:"heading"},
  "Hello from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("heading", heading);
console.log("root",root);
root.render(heading);