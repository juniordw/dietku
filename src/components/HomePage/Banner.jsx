import  { useState } from "react";

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1708982553355-794739c6693e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1696650501586-1d45ea4b2644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1650782530825-f0a7ae1db0bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D",
        "https://plus.unsplash.com/premium_photo-1663088985731-164aaf815976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D",
    ];

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div style={Styles.container}>
            <div style={Styles.picture}>
                <div style={{ ...Styles.main, marginLeft: "-30%", textAlign: "right" }}>
                    <img style={{ maxHeight: "100%", borderRadius:"1em" }} src={images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]} alt="" />
                </div>
                <a style={Styles.button} onClick={prevImage}>&#10094;</a>
                <div style={Styles.main}>
                    <img style={{ maxHeight: "100%", borderRadius:"1em" }} src={images[currentIndex]} alt="" />
                </div>
                <a style={Styles.button} onClick={nextImage}>&#10095;</a>
                <div style={{ ...Styles.main, marginRight: "-30%", textAlign: "left" }}>
                    <img style={{ maxHeight: "100%", borderRadius:"1em" }} src={images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]} alt="" />
                </div>
            </div>
            <div style={Styles.indicators}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        style={{
                            ...Styles.indicator,
                            backgroundColor: currentIndex === index ? "#fff" : "#999",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

const Styles = {
    container: {
        backgroundColor: "#4AB6C5",
        height: "25em",
        paddingTop: "5em",
        paddingLeft: "-30em",
        paddingRight: "-30em",
        position: "relative",
        overflow: "hidden",
    },
    picture: {
        display: "flex",
        justifyContent: "space-around",
    },
    main: {
        backgroundColor: "#4AB6C5",
        margin: "0 0.5em",
        height: "20em",
        width: "60%",
        textAlign: "center",
    },
    button: {
        margin: "8% 2% 0",
        fontWeight: "bold",
        fontSize: "2em",
        cursor: "pointer",
        userSelect: "none",
    },
    indicators: {
        position: "absolute",
        bottom: "1em",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
    },
    indicator: {
        width: "0.5em",
        height: "0.5em",
        borderRadius: "50%",
        backgroundColor: "#999",
        margin: "0.5em",
        cursor: "pointer",
    },
};

export default Banner;
