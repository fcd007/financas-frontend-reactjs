import React from "react";
import { Form } from "react-bootstrap";

export default function SelectList(props) {
  const options = props.lista.map((option) => {
    return (
      <option key={option.id} value={option.id}>
        {option.descricao}
      </option>
    );
  });

  return (
    <Form.Select>
      <option value="">Selecione</option>
      {options}
    </Form.Select>
  );
}
