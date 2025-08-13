import Checkout from "./Checkout"

function Mobiles(user){
  return(
    <>
        <h1>Mobiles</h1>
        username is : {user}
        <Checkout user={user} />
    
    </>
  )
}
export default Mobiles