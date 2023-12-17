import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./redux-examples";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import TodoList from "./redux-examples/todos/TodoList";

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
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello} />
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
      <TodoList/>
      ...
    </div>
  );
}
export default Assignment4;