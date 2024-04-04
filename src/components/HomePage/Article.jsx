function Article(){

    const articles = [
        {
            image: "https://images.unsplash.com/photo-1708982553355-794739c6693e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D",
            title: "Semangka",
            article: "Semangka, tembikai, atau mendikai (Citrullus lanatus, suku ketimun-ketimunan atau Cucurbitaceae) adalah tanaman merambat yang berasal dari daerah setengah gurun di Afrika bagian selatan. Tanaman ini masih sekerabat dengan labu-labuan (Cucurbitaceae), melon (Cucumis melo), dan ketimun (Cucumis sativus). Semangka biasa dipanen buahnya untuk dimakan segar atau dibuat jus. Biji semangka yang dikeringkan dan disangrai juga dapat dimakan isinya (kotiledon) sebagai kuaci.",
        },
        {
            image: "https://images.unsplash.com/photo-1696650501586-1d45ea4b2644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D",
            title: "Apel",
            article: "Apel, tufah, atau rantas merupakan jenis buah-buahan, atau buah yang dihasilkan dari pohon apel. Buah apel biasanya berwarna merah kulitnya jika masak dan siap dimakan, tetapi bisa juga kulitnya berwarna hijau atau kuning. Kulit buahnya agak lembek dan daging buahnya keras. Buah apel memiliki beberapa biji di dalamnya.",
        },
        {
            image: "https://images.unsplash.com/photo-1650782530825-f0a7ae1db0bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D",
            title: "Nothing in life is permanent, be humble…",
            article: "Long time no write. What a hectic month in office, and it makes me dying to write up my life reflection. It’s 11.36 pm, and tomorrow I need to awake at 6 am. Yet, I just can’t persist more. There’s something up in my mind, which urges me to express. In this past 8 months, I’ve been meeting tons of exciting people. Thanks to Sucorinvest team! I learn and earn a lot, not to mention how many outside Jakarta trips trusted to me, and minutes given by the directors to teach me every single stuff.",
        },
        {
            image:"https://plus.unsplash.com/premium_photo-1663088985731-164aaf815976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D",
            title: "Kenali Perbedaan Vegan dan Vegetarian",
            article: "Istillah vegan dan vegetarian diasumsikan sebagai gaya hidup tanpa mengonsumsi makanan yang berasal dari hewan, misalnya daging dan ikan. Meski sering dianggap sama, vegan dan vegetarian memiliki beberapa perbedaan. Diet vegan dan vegetarian umumnya dilakukan karena alasan kesehatan, lingkungan, atau keyakinan. Nah, jika Anda mempertimbangkan untuk berhenti mengonsumsi makanan yang berasal dari hewan beserta produk turunannya, Anda mungkin perlu mengetahui terlebih dahulu mengenai perbedaan vegan dan vegetarian.",
        }
    ];

    return(
        <div style={{display:"flex"}}>
            {articles.map((article, index) => (
                <div key={index} style={Styles.container}>
                    <img style={Styles.image} src={article.image} alt={article.title} />
                    <h3 style={{fontSize:"1.25em", marginBottom:"0.5em", height:"2em"}}>{article.title}</h3>
                    <p style={Styles.article}>{article.article}</p>
                </div>
            ))}
        </div>
    )
}

const Styles = {
    container:{
        margin:"2em",
        width:"25%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    },
    image:{
        maxWidth:"16em",
        height:"12em",
        borderRadius:"1em",
        marginBottom: "1em"  
    },
    article:{
        fontSize: "1.25em",
        textAlign: "left",
        maxHeight: "4.5em",
        WebkitLineClamp: 3,
        overflow: "hidden",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
    }
}

export default Article;
