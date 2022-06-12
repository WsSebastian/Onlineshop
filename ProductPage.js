import React, { useState, useEffect } from 'react';

export function ProductPage(){

    const {products} = useState([]);
    const {comments} = [];

    return(
      <div className="p_page">
          {
              products.map(item =>(
                  <div className="productContainer">
                      <div className="p_info">
                          <h1>Produktname</h1>
                          <h2>Preis</h2>
                      </div>
                      <div className="p_images">
                          <img src="pictures/Gladbach.webp" style="width:48px;height:48px"/>
                      </div>
                      {
                          comments.map(item => (
                              <div className="p_comments">
                                  <h2>Kommentare</h2>
                                  <div>

                                  </div>
                              </div>
                          ))
                      }
                  </div>
              ))
          }
      </div>
    );
}