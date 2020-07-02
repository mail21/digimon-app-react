import React from 'react';

function PageBar({jumlahHalaman, currentPage, pageAktif}) {
    console.log(jumlahHalaman)
    let jml = Number.parseInt(jumlahHalaman);
    let el = [];
    let pageItem = ()=>{
        if(jml === 11){ 
            el.push( 
            <div className="page-item" key={pageAktif}>
                <span  className="page-link" onClick={currentPage}>{pageAktif}</span>
            </div>)
        }else{ 
            for (let i = 1; i < jml+1; i++) {
                el.push(   
                <div className="page-item" key={i}>
                    <span  className="page-link" onClick={currentPage}>{i}</span>
                </div>
             );
            }
        } 

        return el;
    }

    return (

        <div className="pagination pagination-lg justify-content-center mb-3">
            <div className="page-item">
                <span className="page-link" onClick={currentPage}>&lt;&lt;</span>
            </div>

            {pageItem()}

            <div className="page-item">
                <span className="page-link" onClick={currentPage}>&gt;&gt;</span>
            </div>
        </div>
    );
}

export default PageBar;