import React from "react";
import { FaSearch } from 'react-icons/fa'


function HeaderComponent({ onhandleSearchClick }) {

  return (<section className="jumbotron text-center">
    <div className="container">
      <h1 className="jumbotron-heading">Show catalog</h1>
      <form onSubmit={onhandleSearchClick}>
        <input
          placeholder="Search books..."
          id="search"
          type="search"
          css={{ width: '100%' }}
        />
        <label htmlFor="search">
          <button
            type="submit"
            css={{
              border: '0',
              position: 'relative',
              marginLeft: '-35px',
              background: 'transparent',
            }}
          >
            <FaSearch aria-label="search" />
          </button>
        </label>
      </form>
    </div>
  </section>)
}


export default HeaderComponent;