import React from "react";
import uuid from "uuid/v4";

export default ({
  handleEvent,
  generateRandomNumber,
  genNum,
  sortGeneratedNumber,
  minAndMaxValue,
  min,
  max,
  number
}) => {
  return (
    <div>
      <div className="input-group mb-3 ">
        <input
          type="number"
          data-testid="number"
          className="form-control"
          name="number"
          placeholder="Enter number"
          onChange={handleEvent}
        />
        <div className="input-group-append">
          <button
            onClick={() => generateRandomNumber()}
            className="btn btn-outline-primary"
            type="button"
          >
            Generate Number
          </button>
        </div>
      </div>
      <div className="row">
        <div className="form-inline offset-md-2">
          <div className="custom-control custom-checkbox">
            <button
              data-testid="number"
              onClick={() => sortGeneratedNumber("asc")}
              className="btn btn-sm btn-outline-primary"
            >
              Ascending
            </button>
          </div>

          <div className="custom-control custom-checkbox">
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => sortGeneratedNumber()}
            >
              Descending
            </button>
          </div>

          <div className="custom-control custom-checkbox">
            <button
              data-toggle="modal"
              data-testid="number"
              data-target="#exampleModal"
              onClick={() => minAndMaxValue("min")}
              className="btn btn-sm btn-outline-primary"
            >
              Min
            </button>
          </div>

          {/*  */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Minimum Number
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Minimum Number generated = {min}
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="custom-control custom-checkbox mr-5">
            <button
              data-toggle="modal"
              data-target="#exampleModal2"
              data-testid="number"
              onClick={() => minAndMaxValue("max")}
              className="btn btn-sm btn-outline-primary"
            >
              Max
            </button>
          </div>
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Maximum Number
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Maximum Number generated = {max}
                </div>
              </div>
            </div>
          </div>
          <div className="custom-control custom-checkbox mt-1 offset-md-3">
            <a
              href={`data:text/plain;charset=utf-8,${genNum}`}
              download="numbers.txt"
            >
              <button className="btn btn-sm btn-outline-primary">
                Dowload numbers
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-4" data-testid="number-list-section">
        {genNum.map(item => {
          return (
            <div key={uuid()} className="col-md-2 offsetmd-1">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
