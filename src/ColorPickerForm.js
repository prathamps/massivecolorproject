import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import styles from './styles/ColorPickerFormStyles';


class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: "teal",
            newColorName: ""
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value =>{
          return this.props.colors.every(
             ({ name }) => name.toLowerCase() !== value.toLowerCase()
           )
        });
        
        ValidatorForm.addValidationRule('isColorUnique', value =>{
         return this.props.colors.every(
            ({ color }) => color !== this.state.currentColor
          )
       });
      }


    updateCurrentColor(newColor) {
        this.setState({
          currentColor: newColor.hex
        });
      }


    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value 
        });
    }
  
    handleSubmit(){
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName  
        };
        this.props.addNewColor(newColor);
        this.setState({
            newColorName: ""
        });
    }

    render() {
        const { classes, paletteIsFull } = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <div>
                <ChromePicker 
                    color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit} ref="form" instantValidate={false}>
                    <TextValidator 
                        value={newColorName} 
                        className={classes.colorNameInput}
                        name="newColorName"
                        variant="filled"
                        margin="normal"
                        label="Color Name"
                        onChange={this.handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["Enter A Color Name", "Color Name Must Be Unique", "Color Already Used"]}
                    />
                    <Button 
                        variant="contained" 
                        color="primary"
                        type="submit"
                        disabled={paletteIsFull}
                        className={classes.addColor}
                        style={{backgroundColor: paletteIsFull ? "rgba(0, 0, 0, 0.26)" : currentColor}}
                    >
                    {paletteIsFull ? "Palette Full": "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);