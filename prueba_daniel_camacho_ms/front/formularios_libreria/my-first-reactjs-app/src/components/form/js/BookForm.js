import { useState } from 'react';
import ClientAPILibrary from '../../../integration/clientAPILibrary.js';
import ValidFields from './ValidFields.js';
import ValidFieldsSubmit from './ValidFieldsSubmit.js';
import '../css/styleBook.css';

function Book(props) {

  const [book, setState] = useState({

    nombre: "",
    autor: "",
    editorial: "",
    fecha: "",
    stock: "",
    valor: "",
    isbn: "",
    tematica: "",
    error: false,
    warn: false,
    success: false,
    msnError: "",
    msnWarn: "",
    msnSuccess: ""
  });


  const executeSaveBook = (event) => {

    event.preventDefault();

    const instanceBook = new ClientAPILibrary();

    const newBook = {

      nombre: book.nombre,
      autor: book.autor,
      editorial: book.editorial,
      fecha: book.fecha,
      stock: book.stock,
      valor: book.valor,
      isbn: book.isbn,
      tematica: book.tematica
    }

    instanceBook.createBook(newBook)
      .then(data => {
        setState({
          ...book,
          success: true,
          msnSuccess: "Libro creado con ID " + data.id,
          error: false,
          warn: false
        })

      }).catch(error => {
        setState({
          ...book,
          error: true,
          msnError: "" + error.message,
          warn: false,
          success: false
        })
      })
  };


  const handleOnChange = (event) => {
    let nameField = event.target.name;
    let valueField = event.target.value;

    setState({
      ...book,
      [nameField]: valueField

    });
  };

  const isEnabled = book.nombre.length > 0 && book.autor.length > 0 
                 && book.editorial.length > 0 && book.fecha.length > 0 
                 && book.stock.length > 0 && book.valor.length > 0 
                 && book.isbn.length > 0 && book.tematica.length > 0;


  return (
        <>
      <ValidFields />
      <ValidFieldsSubmit className="alert" error={book.error} warn={book.warn} success={book.success} msnError={book.msnError}
        msnWarn={book.msnWarn} msnSuccess={book.msnSuccess} titulo="Save Book" />
      <title>SaveBook</title>
      <form onSubmit={executeSaveBook} className="needs-validation" noValidate>
        <div className="form-row row" >
          <div className="form-group col-md-6" >
            <label htmlFor="inputEmail4">FullName</label>
            <input type="text" className="form-control" id="inputName" name="nombre" placeholder="FullName"
              value={book.nombre} onChange={handleOnChange} required />
            <div className="invalid-feedback">
              Please choose a FullName.
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Autor</label>
            <input type="text" className="form-control" id="inputPassword4" name="autor" placeholder="Author"
              value={book.autor} onChange={handleOnChange} required />
            <div className="invalid-feedback">
              Please choose a Author
            </div><br />
          </div>
          <div className="col-md-4 mb-3 center-align">
            <div className="dateOfBirthInput">
              <label htmlFor="inputEmail4">Date Created</label><br />
              <input type="date" id="floatingDate"
                value={book.fecha} onChange={handleOnChange} name="fecha" required />
              <div className="invalid-feedback">
                Please choose a Date Created
              </div>
            </div>
          </div>
          <div className="form-group">
            <select id="typeDoc" className="form-select" value={book.editorial}
              onChange={handleOnChange} name="editorial" aria-label="Default select example" required>
              <option value="">Editorial</option>
              <option value="LeerColombia" >LeerColombia</option>
              <option value="Planeta" >Planeta</option>
              <option value="GramaEstudios" >GramaEstudios</option>
              <option value="Library of America" >Library of America</option>
            </select>
            <div className="invalid-feedback">
              Please choose a Editorial
            </div>
          </div><br/>
          <div id="spaceButton" className="form-group">
            <input type="number" className="form-control" id="numID"
              value={book.stock} onChange={handleOnChange} name="stock" placeholder="Stock" required />
            <label htmlFor="floatingName">Stock</label>
            <div className="invalid-feedback">
              Please choose a Stock
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="numID"
              value={book.valor} onChange={handleOnChange} name="valor" placeholder="Value" required />
            <label htmlFor="floatingName">Book Cost</label>
            <div className="invalid-feedback">
              Please choose a Cost
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="inputEmail"
              value={book.isbn} onChange={handleOnChange} name="isbn" placeholder="Enter ISBN" required />
            <label htmlFor="floatingName">ISBN</label>
            <div className="invalid-feedback">
              Please choose a ISBN.
            </div>
          </div>
          <div className="form-group">
            <select id="typeDoc" className="form-select" value={book.tematica}
              onChange={handleOnChange} name="tematica" aria-label="Default select example" required>
              <option value="Tematica">Theme</option>
              <option value="Cientifico" >Cientifico</option>
              <option value="Novela" >Novela</option>
              <option value="Terror" >Terror</option>
              <option value="Comedia" >Comedia</option>
              <option value="Historia" >Historia</option>
               <option value="Tecnicos " >Tecnicos</option>
            </select>
            <div className="invalid-feedback">
              Please choose a Theme
            </div>
          </div><br/>
            <div id="spaceButton">
              <button disabled={!isEnabled} type="submit" className="btn btn-outline-success">Save Book</button>
            </div>
        </div>
      </form>
    </>
  );
};


export default Book;