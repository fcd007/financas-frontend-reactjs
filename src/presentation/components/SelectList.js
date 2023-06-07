import React from "react";
import { Form } from "react-bootstrap";

function SelectList (props) {
  const options = props.lista.map((option, index) => {
    return( 
      <option key={index} value={option.id}>
        {option.descricao}
      </option>
    )
  })

  return(   
    <Form.Select {...props}>
      <option value="">Selecione</option>
      {options}
    </Form.Select>
  )}

export default SelectList;