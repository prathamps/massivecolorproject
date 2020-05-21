import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    main: {
        backgroundColor: "purple",
        border: "3px solid teal"
    },
    secondary: {
        backgroundColor: "Pink",
        "& h1": {
            color: "white",
            "& span": {
                backgroundColor: "yellow",
                color: "black"
            }
        }
    }
}

function MiniPalette(props) {
    const { classes } = props;
    console.log(classes);
    return (
        <div>
            <h1 className={classes.main}>Mini Palette</h1>
            <section className={classes.secondary}><h1>Hello <span> World</span></h1></section>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);