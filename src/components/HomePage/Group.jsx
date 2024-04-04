function Group() {
    const groupArray = ["Nutrisi", "Grafik", "Coming soon", "Komunitas"];

    return (
        <div style={Styles.container}>
            {groupArray.map((group) => (
                <div key={group} style={Styles.group}>{group}</div>
            ))}
        </div>
    );
}

const Styles = {
    container:{
        display:"flex",
        margin:"2em",
    },
    group:{
        width:"25%",
        backgroundColor:"#ffffff",
        margin: "4em",
        paddingTop:"12em",
        paddingBottom:"4em",
        fontWeight:"bolder",
        textAlign:"center",
        border:"solid 0.1em #000000",
        boxShadow:"5px 10px 8px rgba(0, 0, 0, 0.31)",
    }
}

export default Group;
