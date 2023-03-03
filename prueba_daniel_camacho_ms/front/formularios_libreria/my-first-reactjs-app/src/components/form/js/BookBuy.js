import { useState } from 'react';
import ClientAPILibrary from '../../../integration/clientAPILibrary.js';
import ValidFields from './ValidFields.js';
import ValidFieldsSubmit from './ValidFieldsSubmit.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../css/styleMenu.css'


function BookBuy(props) {

  const [book, setState] = useState({

    id: "",
    cantidad: "",
    libroName: "",
    valor: "",
    error: false,
    warn: false,
    success: false,
    msnError: "",
    msnWarn: "",
    msnSuccess: ""
  });


  const executeBuyBook = (event) => {

    event.preventDefault();

    const instanceBook = new ClientAPILibrary();

    const searchBook = {

      id: book.id,
      cantidad: book.cantidad

    }

    instanceBook.buyBook(searchBook)
      .then(data => {
        setState({
          ...book,
          id: data.id,
          libroName: data.libroName,
          valor: data.valor,
          success: true,
          msnSuccess: "Buy Success",
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

  const isEnabled = book.id.length > 0 && book.cantidad.length > 0 
 
  return (
    <>
      <ValidFields />
      <ValidFieldsSubmit className="alert" error={book.error} warn={book.warn} success={book.success} msnError={book.msnError}
        msnWarn={book.msnWarn} msnSuccess={book.msnSuccess} titulo="Buy Book" />
      <title>BuyBooK</title>
        <form onSubmit={executeBuyBook} className="needs-validation" noValidate>
          <div className="form-row" id ="spaceForm">
            <div className="form-group">
              <label htmlFor="inputEmail4"className="custom-label">Enter a book ID</label>
              <input type="text" className="form-control" id="inputName" name="id" placeholder="Enter a book ID"
                value={book.id} onChange={handleOnChange} required />
              <div className="invalid-feedback">
                Please choose a Book ID.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword4"className="custom-label">Quantity to Purchase </label>
              <input type="number" className="form-control" id="inputPassword4" name="cantidad" placeholder="Quantity to Purchase"
                value={book.cantidad} onChange={handleOnChange} required />
              <div className="invalid-feedback">
                Please choose a Quantity to Purchase.
              </div><br />
            </div>
            <div>
              <button disabled={!isEnabled} type="submit" className="btn btn-success">
                <FontAwesomeIcon icon={faShoppingCart} /> Shop
              </button>
            </div><br />
            <div className="form-group">
              <label htmlFor="floatingName" className="custom-label">ID Book</label>
              <input type="text" className="form-control" id="numID"
                value={book.id} onChange={handleOnChange} name="id" placeholder="Book ID" readOnly />
              <div className="invalid-feedback">
                Please choose a ID Book
              </div>
            </div><br />
            <div className="form-group">
              <label htmlFor="floatingName" className="custom-label">Book Name</label>
              <input type="text" className="form-control" id="numID"
                value={book.libroName} onChange={handleOnChange} name="libroName" placeholder="Book Name" readOnly />
              <div className="invalid-feedback">
                Please choose a Book Name
              </div>
            </div><br />
            <div className="form-group">
              <label htmlFor="floatingName" className="custom-label">Valor</label>
              <input type="text" className="form-control" id="inputEmail"
                value={book.valor} onChange={handleOnChange} name="valor" placeholder="Cost" readOnly  />
              <div className="invalid-feedback">
                Please choose a Valor
              </div>
            </div>
          </div>
        </form>
    </>
  );
};


export default BookBuy;