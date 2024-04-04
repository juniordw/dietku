import image from "../../assets/Logo Dietku.png";
import TabLandingPage from "./TabLandingPage";

function LandingPage(){
    return(
        <div style={Styles.container}>
            <div style={Styles.partContainer}>
                <img src={image} style={Styles.logo}/>
            </div>
            <div style={{width:"50%"}}>
                <TabLandingPage/>
            </div>
        </div>
    )
}

const Styles={
    container:{
        display:'flex',
        margin: '2%',
    },
    partContainer:{
        width:'50%',
    },
    logo:{
        width: '30%',
        position: 'fixed',
        display: 'flex',
        padding: '15% 6% 6%',
    }
}

export default LandingPage;