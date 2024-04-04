function HeadLine() {
    const news = {
        image: ["https://res.cloudinary.com/dk0z4ums3/image/upload/v1589917617/attached_image/bahaya-perut-buncit-dan-cara-mengatasinya-0-alodokter.jpg", "https://res.cloudinary.com/dk0z4ums3/image/upload/v1623736527/attached_image/5-cara-mengecilkan-perut-buncit-pada-wanita-0-alodokter.jpg", "https://res.cloudinary.com/dk0z4ums3/image/upload/v1589917998/attached_image/contekan-menu-diet-sehat-untuk-santap-pagi-siang-dan-malam-hari-0-alodokter.jpg", "https://res.cloudinary.com/dk0z4ums3/image/upload/v1589917998/attached_image/contekan-menu-diet-sehat-untuk-santap-pagi-siang-dan-malam-hari-0-alodokter.jpg"],
        title: ["Bahaya Perut Buncit dan Cara Mengatasinya", "10 Cara Mengecilkan Perut Buncit pada Wanita", "Contekan Menu Diet Sehat Setiap Hari"],
        content: ["Perut buncit tidak hanya berpengaruh pada penampilan, namun juga berbahaya terhadap kondisi kesehatan secara umum. Perut buncit berbahaya karena adanya penimbunan lemak. Apa saja bahaya perut buncit yang bisa ditimbulkan? Dan bagaimana cara mengecilkan perut buncit? Simak penjelasannya.", "Ada banyak cara yang dapat dilakukan untuk mengecilkan perut buncit pada wanita guna menjaga penampilan dan kesehatan. Cara-cara tersebut efektif untuk mencegah dan mengurangi penumpukan lemak perut asal dilakukan secara konsisten dan benar.", "Menu diet sehat merupakan daftar makanan dengan kandungan nutrisi yang sesuai dengan kebutuhan tubuh setiap hari. Menu makanan ini tidak hanya dikhususkan untuk Anda yang ingin menurunkan berat badan, tetapi juga untuk semua orang yang ingin menjalani pola hidup sehat."],
    };

    return (
        <div style={Styles.container}>
            <div style={{ marginBottom: "1em" }}>
                <p style={Styles.topic}>Topik Terbaru</p>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ paddingRight:"2em",width: "65%" }}>
                    <img style={{ ...Styles.image, maxHeight: "15em" }} src={news.image[0]} />
                    <h1 style={{textAlign:"center"}}>{news.title[0]}</h1>
                    <p style={Styles.content}>
                        {news.content[0]}
                    </p>
                </div>
                <div style={{ width: "35%" }}>
                    <div style={{paddingBottom:"1em",marginBottom:"1em", borderBottom: "0.15em dotted rgba(0, 0, 0, 0.36)"}}>
                    <img style={{ ...Styles.image, maxHeight: "7.5em" }} src={news.image[1]} />
                    <h1 style={{textAlign:"center", fontSize:"1.25em", }}>{news.title[1]}</h1>
                    <p style={{...Styles.content, fontSize:"1em"}}>
                        {news.content[1]}
                    </p>
                    </div>
                    <div>
                        <div style={{display: "flex", alignContent :"center"}}>
                            <h1 style={{textAlign:"center", fontSize:"1em", lineHeight:"3.75em"}}>{news.title[2]}</h1>
                            <img style={{ ...Styles.image, maxHeight: "3.75em" }} src={news.image[2]} />
                        </div>
                            <p style={{...Styles.content, fontSize:"0.75em",}}>
                                {news.content[2]}
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Styles = {
    container: {
        margin: "3em 2em",
        borderBottom: "0.25em dotted rgba(0, 0, 0, 0.36)",
        paddingBottom: "4em"
    },
    topic: {
        fontSize:"1.5em",
        border: "0.1em solid #000",
        borderRadius: "1em",
        padding: "0.25em 0.5em",
        display: "inline",
    },
    image: {
        maxWidth: "100%",
        display: "block",
        margin: "0 auto 0.75em",
        borderRadius: "1em"
    },
    content: {
        marginTop: "0.5em",
        fontSize: "1.25em",
        textAlign: "justify",
        maxHeight: "4.5em",
        WebkitLineClamp: 3,
        overflow: "hidden",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
    }
};

export default HeadLine;
