import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from 'reactstrap';

const CreateNote = ({title, description, handleChange, handleClick, history}) => {
   const handleSavedNote = () => {
           handleClick()
           history.push('/view-notes')   
       }                                  
   
    return(
        <>
            <div class="row col my-3">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>Title</InputGroupText>
                    </InputGroupAddon>
                    <Input
                    placeholder="Title"
                    type='text'
                    name='title'
                    value={title}
                    onChange={handleChange}
                    />
                </InputGroup>
            </div>
            <div class="row col my-3">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Description</InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="Description"
                        type='textarea'
                        name='description'
                        value={description}
                        onChange={handleChange}
                    />
                </InputGroup>
            </div>
            <div class="row col my-3">
                <Button color='primary' onClick={handleSavedNote}>Save Note!</Button>
            </div>
        </>
);
}

export default CreateNote;