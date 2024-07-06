// Top-level component
function App() {
    const data = "Hello from App component";
  
    return <ChildComponent data={data} />;
  }
  
  // Intermediate component
  function ChildComponent({ data }) {
    return <GrandchildComponent data={data} />;
  }
  
  // Deepest component
  function GrandchildComponent({ data }) {
    return <p>{data}</p>;
  }