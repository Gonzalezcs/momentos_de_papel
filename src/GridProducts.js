import React from 'react'
import './GridProducts.css';
import { Link } from 'react-router-dom';

function GridProducts() {
    return (
        <div className="gridproducts">
            <ul className="grid cs-style-4">
                <li>
                    <figure>
                        <div>
                            <Link to="/producto/2">
                                <img className="gridproducts__img" src="https://scontent.fscl18-1.fna.fbcdn.net/v/t1.0-9/118887541_115464883621075_2411567052929783099_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=-I-QZ__B5zYAX_sveHs&_nc_ht=scontent.fscl18-1.fna&oh=14bd61e0be8b884d3f6f68297d5a90fc&oe=5F7C8C77" alt="img05"/>
                            </Link>
                        </div>
                        <figcaption>
                            <h3>Let your light shine bright</h3>
                            <span>2020</span>
                            <Link to="/producto/2">
                                Ver Producto
                            </Link>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <div>
                            <Link to="/producto/23">
                                <img className="gridproducts__img" src="https://scontent.fscl18-1.fna.fbcdn.net/v/t1.0-9/119142997_119782199856010_1955414212266373308_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=bgvjbGRAdaYAX_hNRDD&_nc_ht=scontent.fscl18-1.fna&oh=569558efd02ba2c1fe0f6028a7d14c55&oe=5F858D32" alt="img06"/>
                            </Link>
                        </div>
                        <figcaption>
                            <h3>Juntos es el mejor lugar</h3>
                            <span>2020</span>
                            <Link to="/producto/23">
                                Ver Producto
                            </Link>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <div>
                            <Link to="/producto/30">
                                <img className="gridproducts__img" src="https://scontent.fscl18-1.fna.fbcdn.net/v/t1.0-9/119653904_119784339855796_6974348995506797657_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=tO0_neI47VkAX-ZAHyZ&_nc_ht=scontent.fscl18-1.fna&oh=09b193f93f7824df4c86e7d6ad141281&oe=5F84FC1F" alt="img02"/>
                            </Link>
                        </div>
                        <figcaption>
                            <h3>Eres la mejor</h3>
                            <span>2020</span>
                            <Link to="/producto/30">
                                Ver Producto
                            </Link>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <div>
                            <Link to="/producto/32">
                                <img className="gridproducts__img" src="https://scontent.fscl18-1.fna.fbcdn.net/v/t1.0-9/119388263_119784856522411_6673240907026917543_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=Cr4SfAXdZgAAX8bWPMb&_nc_ht=scontent.fscl18-1.fna&oh=3aab951d56a052104479ac879c88a87f&oe=5F88B9B2" alt="img04"/>
                            </Link>
                        </div>
                        <figcaption>
                            <h3>Winter moments</h3>
                            <span>2020</span>
                            <Link to="/producto/32">
                                Ver Producto
                            </Link>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </div>
     
    )
}

export default GridProducts;
