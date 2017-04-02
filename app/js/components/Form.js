import React from 'react';

export default function Form({ handleSubmit, handleChange, value}) {
  return (
	    <form onSubmit={handleSubmit}>
	      <input className="search-input" type="text" value={value} onChange={handleChange} placeholder="Search Artist" />
	       <button type="submit" className="btn btn-default btn-lg">
     		 <span className="glyphicon glyphicon-search"></span>
    	   </button>
	    </form>
  )
}