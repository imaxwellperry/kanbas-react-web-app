import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./redux-examples";
import Add from "./Add";

function Assignment4() {
    function sayHello() {
        alert("Hello");
      }
    
  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples/>
      <PassingFunctions theFunction={sayHello} />
      <Add a={1} b={2} />
      ...
    </div>
  );
}
export default Assignment4;