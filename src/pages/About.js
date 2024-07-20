import React, {useState} from "react";
import './../styles/about.css';
import { Form, FormGroup, Label, Input, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Button } from "reactstrap";

const about = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false); //!combobox este abierto o cerrado
    const [selectedOption, setSelectedOption] = useState('Seleccione un periodo: ') //! capturar el periodo
    const [textField1, setTextField1] = useState(''); //!capturar solo el anioo
    const [textField2, setTextField2] = useState(''); //!capturar la fecha de inicio
    const [textField3, setTextField3] = useState(''); //!capturar la fecha final

    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState); //?evento del combobox

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos a Ingresar');
        console.log('dato 1: ');
        console.log('dato 2: ');
        console.log('dato 3: ');
        console.log('Periodo: ');
    }; //! en este evento capturamos los datos y los mostramos en consola

    const handleSelect = (event) => {
        setSelectedOption(event.target.innerText);
    } //! inserttamos los datos registrados

    return (
        <div className="form-container">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="textfield1">Ingrese el año del periodo</Label>
                    <Input
                    type="number"
                    name="textField1"
                    placeholder="Año del periodo en numeros"
                    value={textField1}
                    onChange={(e) => setTextField1(e.target.value)} //! captura lo que el usuario esta escribiendo
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="textfield2">Ingrese la fecha de inicio del periodo: </Label>
                    <Input
                    type="text"
                    name="textField2"
                    placeholder="año/mes/dia"
                    value={textField2}
                    onChange={(e) => setTextField2(e.target.value)} //! captura lo que el usuario esta escribiendo
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="textfield3">Ingrese la fecha final del periodo: </Label>
                    <Input
                    type="text"
                    name="textField3"
                    placeholder="año/mes/dia"
                    value={textField3}
                    onChange={(e) => setTextField3(e.target.value)} //! captura lo que el usuario esta escribiendo
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="combobox">Seleccione un periodo</Label>
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}> //! el toggle verifica si esta abierto o cerrado
                        <DropdownToggle caret>{selectedOption}</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleSelect}>Periodo I</DropdownItem>
                            <DropdownItem onClick={handleSelect}>Periodo II</DropdownItem>
                            <DropdownItem onClick={handleSelect}>Periodo III</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </FormGroup>
                <Button type="submit">Registrar Periodo</Button>
            </Form>
        </div>
    )
}