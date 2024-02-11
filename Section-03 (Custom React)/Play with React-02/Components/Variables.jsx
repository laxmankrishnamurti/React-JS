//In this file we are going to understand about How varibales are handled by React.

function Variables(){
    let myName = 'Laxman Krishnamurti';
    let age = 21;
    
    return (
        <>
            <div>
                <p>My name is {myName} and I'm {age} years old</p>
            </div>
        </>
    )
}

export default Variables;

//Output : My name is Laxman Krishnamurti and I'm 21 years old. Here, the expression {age} is called "Evaluative Expression" that means we cannot do any arithmatic e operation on that.