import { useState } from 'react'
import yonex from '../assets/yonexlogo.jpg';
import victor from '../assets/victorlogo.jpg';
import lining from '../assets/lininglogo.jpg';
import apacs from '../assets/apacslogo.jpeg';


export default function brandButtons() {
    const [selected, setSelected] = useState(null)
    const [selectedSeries, setSelectedSeries] = useState(null)


    // Astrox Series
    if (selected === 'Yonex' && selectedSeries === 'Astrox') {
        return (
            <div className="series-grids">
                <button className="series-button" onClick={() => setSelectedSeries(null)}>Go Back</button>
                <button className="series-button">Astrox 99 Pro</button>
                <button className="series-button">Astrox 88D Pro</button>
                <button className="series-button">Astrox 77</button>
            </div>
        );
    }

    // Arcsaber Series
    if (selected === 'Yonex' && selectedSeries === 'Arcsaber') {
        return (
            <div className="series-grids">
                <button className="series-button" onClick={() => setSelectedSeries(null)}>Go Back</button>
                <button className="series-button">Arcsaber 11 Pro</button>
                <button className="series-button">Arcsaber 7 Pro</button>
            </div>
        );
    }

    // Nanoflare Series
    if (selected === 'Yonex' && selectedSeries === 'Nanoflare') {
        return (
            <div className="series-grids">
                <button className="series-button" onClick={() => setSelectedSeries(null)}>Go Back</button>
                <button className="series-button">Nanoflare 1000Z </button>
                <button className="series-button">Nanoflare 800 Pro</button>
                <button className="series-button">Nanoflare 700 Pro</button>
            </div>
        );
    }



    if (selected === 'Yonex') {
        return (
        <div className="series-grids">
            <button className="series-button" onClick={() => setSelected(null) }>Go Back</button>
            <button className="series-button" onClick={() => setSelectedSeries('Astrox')}>Astrox</button>
            <button className="series-button" onClick={() => setSelectedSeries('Arcsaber')}>Arcsaber</button>
            <button className="series-button" onClick={() => setSelectedSeries('Nanoflare')}>Nanoflare</button>
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

