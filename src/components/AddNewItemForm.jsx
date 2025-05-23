import React from 'react'

const AddNewItemForm = ({ newTitle, setNewTitle, newGenre, setNewGenre, addItem }) => {
    return (
        <form className="row my-3">
            <div className="col-12 text-center my-3">
                <h2>Aggiungi un nuovo film</h2>
            </div>
            <div className="col-5">
                <input className="form-control"
                    type="text"
                    placeholder="Inserisci il titolo"
                    aria-label="Inserisci il titolo"
                    value={newTitle}
                    onChange={setNewTitle}
                />
            </div>
            <div className="col-5">
                <input className="form-control"
                    type="text"
                    placeholder="Inserisci il genere"
                    aria-label="Inserisci il genere"
                    value={newGenre}
                    onChange={setNewGenre}
                />
            </div>
            <div className="col-2 text-center">
                <button
                    className="btn btn-primary"
                    onClick={addItem}
                >
                    <i className="fa-solid fa-plus"></i>
                    <span className='d-none d-lg-inline'>
                        Aggiungi
                    </span>
                </button>
            </div>
        </form>
    )
}

export default AddNewItemForm
