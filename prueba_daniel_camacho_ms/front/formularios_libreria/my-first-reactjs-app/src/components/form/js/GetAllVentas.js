import { useState, useEffect } from 'react';
import ClientAPILibrary  from '../../../integration/clientAPILibrary.js';
import ValidFields from './ValidFields.js';
import ValidFieldsSubmit from './ValidFieldsSubmit.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


function GetAllVentas(props) {

  const [books, setBooks] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [showTitles, setShowTitles] = useState(false);

  async function executeGetAllVentas(event) {

    event.preventDefault();
    ///setLoading(true);
    const instanceBook = new ClientAPILibrary();
    const books = await instanceBook.getAllVentas();
    setBooks(books);
    setShowTitles(true);
    //setLoading(false)
  }

  return (
    <>
      <ValidFields />
      <ValidFieldsSubmit className="alert" error={books.error} warn={books.warn} success={books.success} msnError={books.msnError}
        msnWarn={books.msnWarn} msnSuccess={books.msnSuccess} titulo="Sales" />
      <title>Sales</title>
      <form onSubmit={executeGetAllVentas} className="needs-validation" noValidate>
        <div className="form-row"><br />
          <div className="getSale">
            <button type="submit" className="btn btn-outline-success">Consult Sales</button>
          </div>
          <table className="table">
            <thead className={!showTitles ? 'hide-titles' : ''}>
              <tr>
                <th scope="col">ID Sale</th>
                <th scope="col">ID Book</th>
                <th scope="col">Book Name</th>
                <th scope="col">Date Sale</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            {books.map(books => (
              <tbody >
                <tr className="colorFields">
                  <th scope="row" key={books.id}>{books.id}</th>
                  <td>{books.libroId}</td>
                  <td>{books.libroName}</td>
                  <td>{books.fechaVenta}</td>
                  <td>{books.cantidad}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </form>
    </>
  );
};
export default GetAllVentas;