import React from 'react'

const InputForm = ({ setSearch, search }) => {
    return (
        <form className="row my-3">
            <div className="col">
                <input className="form-control"
                    type="text"
                    placeholder="Cerca per titolo"
                    aria-label="Cerca per titolo"
                    onChange={setSearch}
                    value={search}
                />
            </div>
        </form>
    )
}

export default InputForm
