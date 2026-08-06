import { useState } from 'react'
import yonex from '../assets/yonexlogo.jpg';
import victor from '../assets/victorlogo.jpg';
import lining from '../assets/lininglogo.jpg';
import apacs from '../assets/apacslogo.jpeg';


export default function brandButtons() {
    const [selected, setSelected] = useState(null)

    if (selected === 'Yonex') {
        return (
        <div className="series-grids">
            <button className="series-button" onClick={() => setSelected(null)}>Go Back</button>
            <button className="series-button">Astrox</button>
            <button className="series-button">Arcsaber</button>
            <button className="series-button">Nanoflare</button>
        </div>
        
    );
    }
    if (selected === 'Victor') {
        return (
            <div className="series-grids">
                <button className="series-button" onClick={() => setSelected(null)}>Go Back</button>
                <button className="series-button">Thruster</button>
                <button className="series-button">Auraspeed</button>
                <button className="series-button">DriveX</button>
            </div>
        );
    }
    if (selected === 'Li Ning') {
        return (
            <div className="series-grids">
                <button className="series-button" onClick={() => setSelected(null)}>Go Back</button>
                <button className="series-button">AxForce</button>
                <button className="series-button">Halbertec</button>
                <button className="series-button">BladeX</button>
            </div>
        );
    }
    if (selected === 'Apacs') {
        return (
            <div className="series-grids">
                <button className="series-button" onClick={() => setSelected(null)}>Go Back</button>
                <button className="series-button">Head-Heavy</button>
                <button className="series-button">Head-Balance</button>
                <button className="series-button">Head-Light</button>
            </div>
        );
    }   


    return (
        <div className="brand-grid">
            <button className="brand-button" onClick={() => setSelected('Yonex')}>
                <img src={yonex} alt="Yonex" className={selected === 'Yonex' ? 'enlarged' : ''} />

            </button>
            <button className="brand-button" onClick={() => setSelected('Victor')}>
                <img src={victor} alt="Victor" className={selected === 'Victor' ? 'enlarged' : ''} />
            </button>
            <button className="brand-button" onClick={() => setSelected('Li Ning')}>
                <img src={lining} alt="Li Ning" className={selected === 'Li Ning' ? 'enlarged' : ''} />
            </button>
            <button className="brand-button" onClick={() => setSelected('Apacs')}>
                <img src={apacs} alt="Apacs" className={selected === 'Apacs' ? 'enlarged' : ''} />
            </button>

        </div>
    )
}

