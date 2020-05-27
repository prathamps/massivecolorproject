import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
class PaletteMetaForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: true,
            newPaletteName: ""
        }
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>{
            return this.props.palettes.every(
               ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
             )
          });
    }

    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value 
        });
    }


    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    
      render() {
          const { handleSubmit, hideForm } = this.props;
          const { newPaletteName } = this.state;
        
        return (
            <Dialog
              open={this.state.open}
              onClose={hideForm}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
              <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
              <DialogContent>
                <DialogContentText>
                  Please enter a name for your new beautiful palette. Make sure its unique.
                </DialogContentText>
                <Picker />
                    <TextValidator 
                         label="Palette Name"
                        value={newPaletteName}
                        name="newPaletteName"
                        onChange={this.handleChange}
                        fullWidth
                        margin="normal"
                        validators={["required","isPaletteNameUnique"]}
                        errorMessages={["Enter Palette Name", "Name already Used"]}
                    />        
              </DialogContent>
              <DialogActions>
                <Button onClick={hideForm} color="primary">
                  Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary" 
                    type="submit"
                >
                Save Palette
                </Button>
              </DialogActions>
              </ValidatorForm>           
            </Dialog>
        );
      }
}

export default PaletteMetaForm;