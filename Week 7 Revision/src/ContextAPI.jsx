import { useContext } from "react";

const UserContext = React.createContext();

//top level component with a provider
function App(){
    const user = { username: "Jaser", role: "User"};

    return(
        <UserContext.Provider value={user}>
            <Profile />
        </UserContext.Provider>
    );
} 

// Intermediate component 
function Profile(){
    return <Navbar />;
}

//deepest component consuming the contest value

function Navbar(){
    const user = useContext(UserContext);

    return(
        <nav>
            <p>
                Welcome, {user.username} ({user.role})
            </p>
        </nav>
    )
}

export default App;