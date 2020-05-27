import sizes from './sizes';
import bg from './bg.svg';

export default {
    root: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundColor: "#3b0faa",
        backgroundImage: `url(${bg})`
    },
    heading: {
        fontSize: "2rem"
    },
    container: {
        width:"50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "80%"
        },
        [sizes.down("xs")]: {
            width: "75%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a": {
            color: "white",
            textDecoration: "none"
        }
    },
    palettes:{
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "2.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2,50%)"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1,100%)",
            gridGap: "1.4rem"
        }

    }
}