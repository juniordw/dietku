function Advertise() {
    // Buat array yang berisi angka 0, 1, 2, dan 3 untuk melakukan pemetaan
    const adsArray = [0, 1, 2, 3];

    return (
        <div style={Styles.container}>
            {adsArray.map((index) => (
                <div key={index} style={Styles.ads}>Iklan</div>
            ))}
        </div>
    );
}

const Styles = {
    container:{
        display:"flex",
        margin:"2em",
        backgroundColor:"#D9D9D9",
        height:"20em"
    },
    ads:{
        height:"16em",
        width:"25%",
        backgroundColor:"#ffffff",
        margin: "2em",
        textAlign:"center",
        lineHeight:"16em"
    }
}

export default Advertise;
