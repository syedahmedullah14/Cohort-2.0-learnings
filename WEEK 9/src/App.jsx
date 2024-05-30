import { useEffect, useState } from "react";

function useDebounce(value,timeout){
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        let timeoutNumber = setTimeout(()=>{
            setDebouncedValue(value)
        }, timeout)
        return () =>{
          clearTimeout(timeoutNumber)
        }
    }, [value])
    return debouncedValue
}

function App(){
    const [value, setValue] = useState(0);
    const debouncedValue = useDebounce(value, 500)
    useEffect(()=>{
      fetch("")
    }, [debouncedValue])
    
    return (
        <div style={{marginLeft: 500}}>
        Debounced value is <br /><br /> {debouncedValue}
        <br /> <br />
        <input type="text" onChange={e => setValue(e.target.value)}/>
        </div>
        )
}
export default App