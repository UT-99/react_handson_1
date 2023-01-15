import './external.css'

export default function FunctionalComponent() {

    const styling = {
        width: "40%",
        height: "300px",
        backgroundColor: "hsl(180, 100%, 50%)",
        border: "2px solid black",
        borderRadius: "12px",
        textAlign: "center"
    }


    return (
        <div style={styling}>
            <h1>
                This is created using functional Component
            </h1>
            <h2 className='externalClass'>This is done using external CSS</h2>
            <h2 style={{ color : "blue"}}>This is done using inline CSS</h2>
        </div>
    )
}