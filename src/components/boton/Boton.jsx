import './boton.css'


function Boton(props) {
    return (
    <button
        style={{
        backgroundColor: 'white',
        color: 'white',
        padding: '50px',
        borderRadius: '50px',
        }}
    >
        {props.texto}
    </button>
    );
}

<Boton texto="Haz clic aquí" />

export default Boton