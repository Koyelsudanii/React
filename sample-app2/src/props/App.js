//first example of sending the names from app to the child component
// import  Child from "./components/Child"
// function App() {
//     return(
//         <>
//             {/* <Child/>
//             <Child/>
//             <Child/> */}
//IN THIS THE NAMES ARE DEFINED ALONG WITH THE AGE AND WE SENDING IT TO THE CHILD
//             <Child name = "Koyel" age ="23"/><br/>
//             <Child name = "sinch" age="22"/><br/>
//             <Child name = "rakshith" age="25"/><br/>

//         </>
//     )

// }
// export default App


//THIRD EXAMPLE
//THIS EXMAPLE SHOWS HOW THE BOOLEAN VALUES ARE PRINTED
// import  Child from "./components/Child"
// function App() {
//     return(
//         <>
//             {/* <Child/>
//             <Child/>
//             <Child/> */}
//             <Child name = "Koyel" age ={23} isStudent={true}/><br/>
//             <Child name = "sinch" age={25} isStudent={false}/><br/>
//             <Child name = "rakshith" age={28} isStudent={false}/><br/>

//         </>
//     )

// }
// export default App


//example 4
//WE CAN  SEND OBJ AS PROP
// import  Child from "./components/Child"
//     const user ={
//         name:"koko",
//         email:"koko@gmail.com",
//         place:"udupi"
//     }
// function App() {
//     return(
//         <>
//             <Child user = {user}/> <br/>

//         </>
//     )

// }
// export default App

import  Child from "./components/Child"
function App() {
    const user={
        name:"koko",
        email :"koko@gmail.com",
        place:"udupi"
    }
    return(
        <>
            <Child user

        </>
    )

}
export default App

