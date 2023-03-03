import { useState } from 'react';
import ClientAPILibrary from '../../../integration/clientAPILibrary.js';
import ValidFields from './ValidFields.js';
import ValidFieldsSubmit from './ValidFieldsSubmit.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function UpdateStock(props) {

  const [book, setState] = useState({

    id: "",
    nombre: "",
    autor: "",
    editorial: "",
    fecha: "",
    stock: "",
    inputStock: "",
    valor: "",
    inputValor: "",
    isbn: "",
    tematica: "",
    error: false,
    warn: false,
    success: false,
    msnError: "",
    msnWarn: "",
    msnSuccess: ""
  });


  const executeUpdateBook = (event) => {

    event.preventDefault();
 
    console.log(book.id);
    console.log(book.cantidad);

    const instanceBook = new ClientAPILibrary();

    const newStock = {
      stock: book.inputStock,
      valor: book.inputValor
    }

    instanceBook.updateStock(book.id, newStock)
      .then(data => {
        setState({
          ...book,
          id: data.id,
          nombre: data.nombre,
          autor: data.autor,
          editorial: data.editorial,
          fecha: data.fecha,
          stock: data.stock,
          valor: data.valor,
          isbn: data.isbn,
          tematica: data.tematica,
          success: true,
          msnSuccess: "Update Success",
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

  const isEnabled = book.id.length > 0 && book.inputStock.length > 0 
                 && book.inputValor.length > 0 ;

  return (
    <>
     <ValidFields />
      <ValidFieldsSubmit className="alert" error={book.error} warn={book.warn} success={book.success} msnError={book.msnError}
        msnWarn={book.msnWarn} msnSuccess={book.msnSuccess} titulo="Update Stock" />
      <title>UpdateStock</title>
      <form onSubmit={executeUpdateBook} className="needs-validation" noValidate>
        <div className="form-row row">
          <div className="form-group col-md-4" >
            <label htmlFor="inputEmail4">Enter a book ID</label>
            <input type="text" className="form-control" id="inputName" name="id" placeholder="Enter a book ID"
              value={book.id} onChange={handleOnChange} required />
            <div className="invalid-feedback">
              Please choose a Book ID.
            </div>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputPassword4">Change Stock</label>
            <input type="number" className="form-control" id="input-value" name="inputStock" placeholder="Change Stock"
              value={book.inputStock} onChange={handleOnChange} required />
            <div className="invalid-feedback">
              Please choose a Quantity to Purchase.
            </div>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputPassword4">Change Value</label>
            <input type="text" className="form-control" id="input-value" name="inputValor" placeholder="Change Value"
              value={book.inputValor} onChange={handleOnChange} required />
            <div className="invalid-feedback">
              Please choose a Quantity to Purchase.
            </div><br />
          </div>
        </div>
            <div>
                <button id="buy" disabled={!isEnabled} type="submit" className="btn btn-outline-success">Update Book</button>
            </div><br />
        <div className="form-row row">
          <div className="form-group col-md-6">
            <label htmlFor="floatingName" className="custom-label">ID Book</label>
            <input type="text" className="form-control" id="numID"
              value={book.id} onChange={handleOnChange} name="id" placeholder="Book ID" readOnly />
            <div className="invalid-feedback">
              Please choose a Id
            </div>
          </div><br />
          <div className="form-group col-md-6">
            <label htmlFor="floatingName" className="custom-label">Book Name</label>
            <input type="text" className="form-control" id="numID"
              value={book.nombre} onChange={handleOnChange} name="nombre" placeholder="Book Name" readOnly />
            <div className="invalid-feedback">
              Please choose a BookName
            </div>
          </div>
        </div><br />
        <div className="form-row row">
           <div className="form-group col-md-6">
            <label htmlFor="floatingName" className="custom-label">Author</label>
            <input type="text" className="form-control" id="numID"
              value={book.autor} onChange={handleOnChange} name="autor" placeholder="Author" readOnly />
            <div className="invalid-feedback">
              Please choose a Author
            </div>
          </div><br />
          <div className="form-group col-md-6">
            <label htmlFor="floatingName" className="custom-label">Editorial</label>
            <input type="text" className="form-control" id="numID"
              value={book.editorial} onChange={handleOnChange} name="editorial" placeholder="Editorial" readOnly/>
            <div className="invalid-feedback">
              Please choose a Editorial
            </div>
          </div>
      </div><br />
      <div className="form-row row">
          <div className="form-group col-md-6">
            <label htmlFor="floatingName" className="custom-label">Date Created</label>
            <input type="text" className="form-control" id="numID"
              value={book.fecha} onChange={handleOnChange} name="fecha" placeholder="Date Created" readOnly/>
            <div className="invalid-feedback">
              Please choose a Date Created
            </div>
          </div><br />
          <div className="form-group col-md-6">
            <label htmlFor="floatingName" className="custom-label">Stock</label>
            <input type="text" className="form-control" id="output-value"
              value={book.stock} onChange={handleOnChange} name="fecha" placeholder="Stock" readOnly/>
            <div className="invalid-feedback">
              Please choose a Stock
            </div>
          </div>
      </div><br />
      <div className="form-row row">
          <div className="form-group col-md-4">
            <label htmlFor="floatingName" className="custom-label">Valor</label>
            <input type="text" className="form-control" id="inputEmail"
              value={book.valor} onChange={handleOnChange} name="valor" placeholder="Value" readOnly  />
            <div className="invalid-feedback">
              Please choose a Value.
            </div>
          </div><br/>
          <div className="form-group col-md-4">
            <label htmlFor="floatingName" className="custom-label">ISBN</label>
            <input type="text" className="form-control" id="inputEmail"
              value={book.isbn} onChange={handleOnChange} name="isbn" placeholder="ISBN" readOnly/>
            <div className="invalid-feedback">
              Please choose a ISBN.
            </div>
          </div><br />
          <div className="form-group col-md-4">
            <label htmlFor="floatingName" className="custom-label">Theme</label>
            <input type="text" className="form-control" id="inputEmail"
              value={book.tematica} onChange={handleOnChange} name="tematica" placeholder="Theme" readOnly  />
            <div className="invalid-feedback">
              Please choose a Theme.
            </div>
          </div><br />
        </div>
      </form>
    </>
    
  );
};


export default UpdateStock;