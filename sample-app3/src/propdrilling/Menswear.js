import Mobiles from "./Mobiles"

function Menswear({user}){
  return(
    <>
        <h1>Menswear</h1>

        username is :{user}
        <Mobiles user={user} />
    </>
  )
}
export default Menswear