import Menswear from "./Menswear"

function Kidswear({user}){
  return(
    <>
        <h1>KidsWear</h1>

        username is : {user}
        <Menswear user ={user}/>
    </>
  )
}
export default Kidswear