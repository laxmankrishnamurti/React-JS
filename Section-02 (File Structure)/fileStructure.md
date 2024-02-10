# File Structure in "REACT"?

We understand that at the end of the day "React" is just a Library and Browser only understand "JS". It must to be add the JavaScript file into HTML file, without doing this our code is not rendered and the Browser cannot able to make "DOM(Document object model)". 

May be, In different-different library has it's own method for adding JavaScript file into HTML Document. If we consider "vite" it add the JavaScript file into HTML Document initially. 

The most important point that we should know is React come up with two "Implimentation". These are as follows :-
- React-DOM     ::  {For Web Development}
- React-Native  ::  {For Android Development}

And one more thing that we should know is :- All the exported function is called "Components".

<pre>
    export default "component name"
</pre>

# What is "Virtual DOM".

Browser creates DOM(Document object model), just like that React creates it's own DOM and that is called "Virtual DOM". May be the method of creating the "Virtual DOM" by React is differ from Browser but at the end of the day both are same.

# Case-Sensitivity in "React"?

Well, React is not a programming language so it's not to worry about it's case-sensitivity. But, for convenient the naming of all Components should start from an Uppercase. And we can only return a single element at once.

