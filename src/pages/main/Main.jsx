import React from 'react'

import './Main.css'

const Main = () => {
  return (
    <main>
      <section className="form-container">
        <form>
          <div className="wrapper">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              name="amount"
              id="amount"
              // value={login}
              placeholder="Enter amount"
            />
          </div>

          <div className="wrapper">
            <label htmlFor="from">From</label>
            <input
              type="text"
              name="from"
              id="from"
              // value={password}
              placeholder="Russian Rubles"
            />
          </div>

          <div className="wrapper">
          <label htmlFor="To">To</label>
          <input
            type="text"
            name="to"
            id="to"
            // value={password}
            placeholder="US Dollars"
          />
          </div>
        </form>
        <button className="submit-button" type="button">
          Convert
        </button>
      </section>
    </main>
  );
}

export default Main;
