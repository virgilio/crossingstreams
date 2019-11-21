import React from 'react';

const Container = (props) => (
    <div className="container">
        <div className="row justify-content-center">
            <h2 className="col-12"> Crossing Streams! </h2>
            <h4>
                {props.title}
            </h4>
            <div hidden={!props.loader} className={`spinner-grow text-${props.color} float-right`} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        <div className="col-10 offset-1">
            {props.children}
        </div>
        <hr />
        <div className="col-10 offset-1">
            <footer className="page-footer font-small blue pt-4">
                <p>
                    Thanks for using Crossing Streams!
                </p>
                <p>
                    Contact me through: virgilio.santos@gmail.com
                </p>
            </footer>
        </div>
    </div >
);

export default Container;