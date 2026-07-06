import { useState } from 'react'
import yonex from '../assets/yonexlogo.jpg';
import victor from '../assets/victorlogo.jpg';
import lining from '../assets/lininglogo.jpg';
import apacs from '../assets/apacslogo.jpeg';


export default function brandButtons() {
    const [selected, setSelected] = useState(null)
    
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