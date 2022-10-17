1. you have 2 options for what you can pass in to a state setter function
   (e.g. `setCount`). what are they?
   ans- option 1. new value of state (setCount(42))
   option 2. callback function - whatever the callback function
   returns === new value of state

2. when would you want to pass the first option (from answer above)
   to the state setter function?
   ans- whenever you don't need the previous value of state to determine
   what the new value of state should be.

3. when would you want to pass the second option (form answer above)
   to the state setter function?
   ans- whenever you DO need the previous value to determine the new value.
