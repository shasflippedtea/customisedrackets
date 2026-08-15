import { useState } from 'react'
import yonex from '../assets/yonexlogo.jpg';
import victor from '../assets/victorlogo.jpg';
import lining from '../assets/lininglogo.jpg';
import apacs from '../assets/apacslogo.jpeg';


export default function brandButtons() {
    const [selected, setSelected] = useState(null)
    const [selectedSeries, setSelectedSeries] = useState(null)

    const brands = {
        Yonex: {
            Astrox: ['Astrox 99 Pro', 'Astrox 88D Pro', 'Astrox 77 Pro'],
            Arcsaber: ['Arcsaber 11 Pro', 'Arcsaber 7 Pro'],
            Nanoflare: ['Nanoflare 1000z', 'Nanoflare 800 Pro', 'Nanoflare 700 Pro']
        },
        Victor: {
            Thruster: ['Ryuga I', 'Ryuga II', 'Ryuga Metallic'],
            Auraspeed: ['A99', 'A100X', 'A90K Metallic', ],
            DriveX: ['DX12', 'DX10 Metallic', 'DX 9X'],

        },
    }

    if (selected && selectedSeries) {
        return(
            <div className= "series-grids">
            <button className="series-button" onClick={() => setSelectedSeries(null)}>Go Back</button>
            {brands[selected][selectedSeries].map((racket) => (
                <button className= "series-button" key={racket}> {racket} </button>
            ))}
            </div>
        );
    }

    if (selected) {
        return (
        <div className="series-grids">
            <button className="series-button" onClick={() => { setSelected(null); setSelectedSeries(null); }}>Go Back</button>
            {Object.keys(brands[selected]).map((seriesName) => (
            <button className="series-button" key={seriesName} onClick={() => setSelectedSeries(seriesName)}> {seriesName} </button>
        ))}
        
        </div>
    
    );

}


    // Branded Logo Buttons
    return (
        <div className="brand-grid">
            <button className="brand-button" onClick={() => setSelected('Yonex')}>
                <img src={yonex} alt="Yonex" className={selected === 'Yonex' ? 'enlarged' : ''} />

            </button>
            <button className="brand-button" onClick={() => setSelected('Victor')}>
                <img src={victor} alt="Victor" className={selected === 'Victor' ? 'enlarged' : ''} />
            </button>
            <button className="brand-button">
                <img src={lining} alt="Li Ning" className={selected === 'Li Ning' ? 'enlarged' : ''} />
            </button>
            <button className="brand-button">
                <img src={apacs} alt="Apacs" className={selected === 'Apacs' ? 'enlarged' : ''} />
            </button>

        </div>
    )
}

