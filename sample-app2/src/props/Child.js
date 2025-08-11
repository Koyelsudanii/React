//first example of sending the names from app to the child component
// THE {NAME,AGE } OIN THE CHILD(), THIS METHOD OS CALLED THE DESTRUCTURING METHOD. WHERE THE DATA IS TAKEN FROM THE APP AND PUT HERE
// function Child({name,age}) {
//     return(
//         <>
//             {/* <p>child component</p>
//             <p>KOYEL</p>
//             <p>sinch</p> */}
//BY THIS NEXT STEP THE DATA IS TAKEN AND PRINTED IF THERE MULTIPLE VALUES THEN THE MULTIPLE LINES ARE PRINTED
//             my name is {name} and i am {age} years old
//         </>
//     )

// }
// export default Child

//SECOND EXAMPLE
//IN THIS IF WE GIVE CONST VALUE AFTER DEFINING THE VALUES IN THE CHILD THEN IT THROWS ERROR COZ IT CANT DETECT WHICH VALUES TO BE TAKEN.
// function Child({name,age}) {
//     const name="shaloni"
//     return(
//         <>
//             {/* <p>child component</p>
//             <p>KOYEL</p>
//             <p>sinch</p> */}

//             my name is {name} and i am {age} years old
//         </>
//     )

// }
// export default Child


//THIRD EXAMPLE
//THIS EXMAPLE SHOWS HOW THE BOOLEAN VALUES ARE PRINTED
// function Child({name,age, isStudent}) {
//     return(
//         <>
//             {/* <p>child component</p>
//             <p>KOYEL</p>
//             <p>sinch</p> */}

//             <p>my name is {name} </p>
//             <p>i am {age} years old</p>
//             <p>student: {isStudent ? "your student" : "your mentor"}</p>
//         </>
//     )

// }
// export default Child

// function Child({user}) {
//     return(
//         <>
//            {user.name}<br/>
//            {user.email}<br/>
//            {user.place}<br/>
//         </>
//     )

// }
// export default Child

function Child(user) {
    return(
        <>
            {user.name} <br/>
            {user.email} <br/>
            {user.place} <br/>
        </>
    )

}
export default Child