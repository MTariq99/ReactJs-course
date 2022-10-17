"PROPS" refers to the properties being passed into a component
in order for it to work correctly, similar to how a 
function receives parameters: "from above." A component receiving 
props is not allowed to modify those props.
 (I.e they are "immutable.")

 "STATE" refers to values that are managed by the component, similar to variables
 declared inside a function. Any time you have changing values that should
 be saved/displayed,you'll likely be using state.