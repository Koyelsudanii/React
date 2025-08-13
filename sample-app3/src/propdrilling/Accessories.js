import Kidswear from "./Kidswear"

function Accessories({user}){
  return(
    <>
        <h1>Accessories</h1>
            username is: {user}
            <Kidswear user={user} />
    </>
  )
}
export default Accessories