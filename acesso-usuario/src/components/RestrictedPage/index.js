const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) =>{
    return(
        <>
         {isLoggedIn ?(
            <div>
                <h1>Bem vindo, { user }</h1>
                <button onClick={Logout}>Logout</button>
            </div>
         )
         : (
            <div>
                <h1>Você não pode acessar essa página</h1>
                <button onClick={ Login }>Logar</button>
            </div>
         )} 
          
        </> 
    )
}

export default RestrictedPage