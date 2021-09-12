import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import SearchWine from '../components/SearchWine'
import { Collapse } from 'react-bootstrap';


const BrowseWine = props => {
    const [openWhite, setOpenWhite] = useState(false);
    const [openRed, setOpenRed] = useState(false);
    const [openDessert, setOpenDessert] = useState(false);
    const [openRose, setOpenRose] = useState(false);
    const [openSparkling, setOpenSparkling] = useState(false);
    const [openSherry, setOpenSherry] = useState(false);
    const [openVermouth, setOpenVermouth] = useState(false);
    const [openFruit, setOpenFruit] = useState(false);
    const [openMead, setOpenMead] = useState(false);
    console.log(props)

    return (
        <>
            <SearchWine />
            <div className="container">
                <hr />
                <div className="d-flex justify-content-around">
                    <div className="col-8">
                        <h1 className="display-6 text-center">Welcome to our Wine Guide!</h1>
                        <p className="text-center">It's a fact - wine tastes better with food and food tastes better with wine. There are SO many different variants of wine. Sometimes, it can be overwhelming to figure out how to correctly pair the right wine with your dish. Well - good news: you no longer have to learn complicated systems for selecting the right bottle to enhance what you're eating! Use our search tool to find the perfect bottle of wine for your dish or find the right dish to cook for the wine that you love. Alternatively, browse by variant and start learning down below. Let's wine it up! </p>
                    </div>
                    <img className="col-3" src="https://images.pexels.com/photos/248413/pexels-photo-248413.jpeg" alt="wine" style={{ height: "20rem", width: "18rem" }} />
                </div>
                <hr />
                <div style={{ background: "url('https://images.pexels.com/photos/1410138/pexels-photo-1410138.jpeg') ", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }} className="d-flex flex-column align-items-center p-5">
                    <button
                        onClick={() => setOpenWhite(!openWhite)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openWhite}
                        className="btn btn-success"
                    >White Wine</button>
                    <Collapse in={openWhite}>
                        <div id="example-collapse-text" >
                            <div className="card card-body">
                                <div className="d-flex align-items-center flex-wrap">
                                    <Link className="btn link-secondary" to="/wine/mueller_thurgau">Mueller Thurgau</Link> |
                                    <Link className="btn link-secondary" to="/wine/grechetto">Grechetto</Link> |
                                    <Link className="btn link-secondary" to="/wine/gewurztraminer">Gewurztraminer</Link> |
                                    <Link className="btn link-secondary" to="/wine/chenin_blanc">Chenin Blanc</Link> |
                                    <Link className="btn link-secondary" to="/wine/White Bordeaux">White Bordeaux</Link> |
                                    <Link className="btn link-secondary" to="/wine/semillon">Semillon</Link> |
                                    <Link className="btn link-secondary" to="/wine/riesling">Reisling</Link> |
                                    <Link className="btn link-secondary" to="/wine/sylvaner">Sylvaner</Link> |
                                    <Link className="btn link-secondary" to="/wine/sauternes">Sauternes</Link> |
                                    <Link className="btn link-secondary" to="/wine/lillet_blanc">Lillet Blanc</Link>
                                </div>
                                <b className="text-center">Dry White Wines:</b>
                                <div className="d-flex align-items-center flex-wrap">
                                <Link className="btn link-secondary" to="/wine/assyrtiko">Assyrtiko</Link> |
                                <Link className="btn link-secondary" to="/wine/pinot_blanc">Pinot Blanc</Link> |
                                <Link className="btn link-secondary" to="/wine/cortese">Cortese</Link> |
                                <Link className="btn link-secondary" to="/wine/roussanne">Roussanne</Link> |
                                <Link className="btn link-secondary" to="/wine/moschofilero">Moschofilero</Link> |
                                <Link className="btn link-secondary" to="/wine/muscadet">Muscadet</Link> |
                                <Link className="btn link-secondary" to="/wine/viognier">Viognier</Link> |
                                <Link className="btn link-secondary" to="/wine/verdicchio">Verdicchio</Link> |
                                <Link className="btn link-secondary" to="/wine/greco">Greco</Link> |
                                <Link className="btn link-secondary" to="/wine/marsanne">Marsanne</Link> |
                                <Link className="btn link-secondary" to="/wine/white_burgundy">White Burgundy</Link> |
                                <Link className="btn link-secondary" to="/wine/chardonnay">Chardonnay</Link> |
                                <Link className="btn link-secondary" to="/wine/gruener_veltline">Gruener Veltliney</Link> |
                                <Link className="btn link-secondary" to="/wine/white_rioja">White Rioja</Link> |
                                <Link className="btn link-secondary" to="/wine/frascati">Frascati</Link> |
                                <Link className="btn link-secondary" to="/wine/gavi">Gavi</Link> |
                                <Link className="btn link-secondary" to="/wine/l_acadie_blanc">L Acadie Blanc</Link> |
                                <Link className="btn link-secondary" to="/wine/trebbiano">Trebbiano</Link> |
                                <Link className="btn link-secondary" to="/wine/sauvignon_blanc">Sauvignon Blanc</Link> |
                                <Link className="btn link-secondary" to="/wine/catarratto">Catarratto</Link> |
                                <Link className="btn link-secondary" to="/wine/albarino">Albarino</Link> |
                                <Link className="btn link-secondary" to="/wine/arneis">Arneis</Link> |
                                <Link className="btn link-secondary" to="/wine/verdejo">Verdejo</Link> |
                                <Link className="btn link-secondary" to="/wine/vermentino">Vermentino</Link> |
                                <Link className="btn link-secondary" to="/wine/soave">Soave</Link> |
                                <Link className="btn link-secondary" to="/wine/pinot_grigio">Pinot Grigio</Link> |
                                <Link className="btn link-secondary" to="/wine/dry_riesling">Dry Riesling</Link> |
                                <Link className="btn link-secondary" to="/wine/torrontes">Torrontes</Link>
                                </div>
                            </div>
                        </div>
                    </Collapse> <br /><br />
                    <button
                        onClick={() => setOpenRed(!openRed)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openRed}
                        className="btn btn-success"
                    >Red Wine</button>
                    <Collapse in={openRed}>
                        <div id="example-collapse-text" >
                            <div className="card card-body">
                                <div className="d-flex align-items-center flex-wrap">
                                    <Link className="btn link-secondary" to="/wine/bordeaux">Bordeaux</Link> |
                                    <Link className="btn link-secondary" to="/wine/marsala">Marsala</Link> |
                                    <Link className="btn link-secondary" to="/wine/port">Port</Link> |
                                    <Link className="btn link-secondary" to="/wine/gamay">Gamay</Link> |
                                    <Link className="btn link-secondary" to="/wine/dornfelder">Dornfelder</Link> |
                                    <Link className="btn link-secondary" to="/wine/concord_wine">Concord Wine</Link> |
                                    <Link className="btn link-secondary" to="/wine/sparkling_red_wine">Sparkling Red Wine</Link> |
                                    <Link className="btn link-secondary" to="/wine/pinotage">Pinotage</Link> |
                                    <Link className="btn link-secondary" to="/wine/agiorgitiko">Agiorgitiko</Link>
                                </div>
                                <b className="text-center">Dry Red Wines:</b>
                                <div className="d-flex align-items-center flex-wrap">
                                <Link className="btn link-secondary" to="/wine/petite_sirah">petite Sirah</Link> |
                                <Link className="btn link-secondary" to="/wine/zweigelt">Zweigelt</Link> |
                                <Link className="btn link-secondary" to="/wine/baco_noir">Baco Noir</Link> |
                                <Link className="btn link-secondary" to="/wine/bonarda">Bonarda</Link> |
                                <Link className="btn link-secondary" to="/wine/cabernet_franc">Cabernet Franc</Link> |
                                <Link className="btn link-secondary" to="/wine/bairrada">Bairrada</Link> |
                                <Link className="btn link-secondary" to="/wine/barbera_wine">Barbera Wine</Link> |
                                <Link className="btn link-secondary" to="/wine/primitivo">Primitivo</Link> |
                                <Link className="btn link-secondary" to="/wine/pinot_noir">Pinot Noir</Link> |
                                <Link className="btn link-secondary" to="/wine/nebbiolo">Nebbiolo</Link> |
                                <Link className="btn link-secondary" to="/wine/dolcetto">Dolcetto</Link> |
                                <Link className="btn link-secondary" to="/wine/tannat">Tannat</Link> |
                                <Link className="btn link-secondary" to="/wine/negroamaro">Negroamaro</Link> |
                                <Link className="btn link-secondary" to="/wine/red_burgundy">Red Burgundy</Link> |
                                <Link className="btn link-secondary" to="/wine/corvina">Corvina</Link> |
                                <Link className="btn link-secondary" to="/wine/rioja">Rioja</Link> |
                                <Link className="btn link-secondary" to="/wine/cotes_du_rhone">Cotes du Rhone</Link> |
                                <Link className="btn link-secondary" to="/wine/grenache">Grenache</Link> |
                                <Link className="btn link-secondary" to="/wine/malbec">Malbec</Link> |
                                <Link className="btn link-secondary" to="/wine/zinfandel">Zinfandel</Link> |
                                <Link className="btn link-secondary" to="/wine/sangiovese">Sangiovese</Link> |
                                <Link className="btn link-secondary" to="/wine/carignan">Carignan</Link> |
                                <Link className="btn link-secondary" to="/wine/carmenere">Carmenere</Link> |
                                <Link className="btn link-secondary" to="/wine/cesanese">Cesanese</Link> |
                                <Link className="btn link-secondary" to="/wine/cabernet_sauvignon">Cabernet Sauvignon</Link> |
                                <Link className="btn link-secondary" to="/wine/aglianico">Aglianico</Link> |
                                <Link className="btn link-secondary" to="/wine/tempranillo">Tempranillo</Link> |
                                <Link className="btn link-secondary" to="/wine/shiraz">Shiraz</Link> |
                                <Link className="btn link-secondary" to="/wine/mourvedre">Mourvedre</Link> |
                                <Link className="btn link-secondary" to="/wine/merlot">Merlot</Link> |
                                <Link className="btn link-secondary" to="/wine/nero_d_avola">Nero D Avola</Link>
                                </div>
                            </div>
                        </div>
                    </Collapse> <br /><br />
                    <button
                        onClick={() => setOpenDessert(!openDessert)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openDessert}
                        className="btn btn-success"
                    >Dessert Wine</button>
                    <Collapse in={openDessert}>
                        <div id="example-collapse-text" >
                            <div className="card card-body">
                            <div className="d-flex align-items-center flex-wrap">
                                <Link className="btn link-secondary" to="/wine/pedro_ximenez">Pedro Ximenez</Link> |
                                <Link className="btn link-secondary" to="/wine/moscato">Moscato</Link> |
                                <Link className="btn link-secondary" to="/wine/late_harvest">Late Harvest</Link> |
                                <Link className="btn link-secondary" to="/wine/ice_wine">Ice Wine</Link> |
                                <Link className="btn link-secondary" to="/wine/white_port">White Port</Link> |
                                <Link className="btn link-secondary" to="/wine/lambrusco_dolce">Lambrusco Dolce</Link> |
                                <Link className="btn link-secondary" to="/wine/madeira">Madeira</Link> |
                                <Link className="btn link-secondary" to="/wine/banyuls">Banyuls</Link> |
                                <Link className="btn link-secondary" to="/wine/vin_santo">Vin Santo</Link> |
                                <Link className="btn link-secondary" to="/wine/port">Port</Link>
                            </div>
                            </div>
                        </div>
                    </Collapse> <br /><br />
                    <button
                        onClick={() => setOpenRose(!openRose)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openRose}
                        className="btn btn-success"
                    >Rose Wine</button>
                    <Collapse in={openRose}>
                        <div id="example-collapse-text" >
                            <div className="card card-body">
                                <Link className="btn link-secondary" to="/wine/sparkling_rose">Sparkling Rose</Link>
                            </div>
                        </div>
                    </Collapse> <br /><br />
                    <button
                        onClick={() => setOpenSparkling(!openSparkling)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openSparkling}
                        className="btn btn-success"
                    >Sparkling Wine</button>
                    <Collapse in={openSparkling}>
                        <div id="example-collapse-text" >
                            <div className="card card-body">
                                <div className="d-flex align-items-center flex-wrap">
                                <Link className="btn link-secondary" to="/wine/Cava">Cava</Link> |
                                <Link className="btn link-secondary" to="/wine/cremant">Cremant</Link> |
                                <Link className="btn link-secondary" to="/wine/champagne">Champagne</Link> |
                                <Link className="btn link-secondary" to="/wine/prosecco">Prosecco</Link> |
                                <Link className="btn link-secondary" to="/wine/spumante">Spumante</Link> |
                                <Link className="btn link-secondary" to="/wine/sparkling_rose">Sparkling Rose</Link>
                                </div>
                            </div>
                        </div>
                    </Collapse> <br /><br />
                    <button
                        onClick={() => setOpenSherry(!openSherry)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openSherry}
                        className="btn btn-success"
                    >Sherry</button>
                    <Collapse in={openSherry}>
                        <div id="example-collapse-text" >
                            <div className="card card-body">
                                <div className="d-flex align-items-center flex-wrap">
                                <Link className="btn link-secondary" to="/wine/cream_sherry">Cream Sherry</Link> |
                                <Link className="btn link-secondary" to="/wine/dry_sherry">Dry Sherry</Link>
                                </div>
                            </div>
                        </div>
                    </Collapse> <br /><br />
                    <button
                        onClick={() => setOpenVermouth(!openVermouth)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openVermouth}
                        className="btn btn-success"
                    >Vermouth</button>
                    <Collapse in={openVermouth}>
                        <div id="example-collapse-text" >
                            <div className="card card-body">
                                <Link className="btn link-secondary" to="/wine/dry_vermouth">Dry Vermouth</Link>
                            </div>
                        </div>
                    </Collapse> <br /><br />
                    <button
                        onClick={() => setOpenFruit(!openFruit)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openFruit}
                        className="btn btn-success"
                    >Fruit Wine</button>
                    <Collapse in={openFruit}>
                        <div id="example-collapse-text" >
                            <div className="card card-body">
                            <Link className="btn link-secondary" to="/wine/fruit_wine">Fruit Wine</Link>
                            </div>
                        </div>
                    </Collapse> <br /><br />
                    <button
                        onClick={() => setOpenMead(!openMead)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openMead}
                        className="btn btn-success"
                    >Mead</button>
                    <Collapse in={openMead}>
                        <div id="example-collapse-text" >
                            <div className="card card-body">
                            <Link className="btn link-secondary" to="/wine/mead">Mead</Link>
                            </div>
                        </div>
                    </Collapse> <br /><br />
                </div>
            </div>
        </>
    )
}

export default BrowseWine;