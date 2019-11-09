# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    React JS is a JS library that helps us declutter our code using components

1. What does it mean to think in react?
    To think through how you are going to build your website and components before building anything. Taking into consideration the parent and child components and how they connect, which data each component will need, etc.

1. Describe state.
    Holds changable information of a component

1. Describe props.
    Used to pass down properties to children elements

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
    Example: useEffect((),[]) <- A bad side effect would be not putting the brackets there and thus resulting in an infinite loop. If there were an Axios API call in there it would infinitely request data from the API until the limit is reached.