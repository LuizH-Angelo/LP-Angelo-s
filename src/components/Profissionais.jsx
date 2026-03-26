import './Profissionais.css'
import profsTeste from '../assets/profsTeste.WebP'

function Profissionais() {
    return (
        <>
            <div className='s2divTitle'>
                <h2 className='s2Title'>Profissionais</h2>
            </div>

            <section className='s2' id='s2'>

                {/* <div className="profs">
                    <img src={profsTeste} alt="professores da Angelos" className='imgprofs'/>
                </div> */}

                <div className="s2card">
                    <img src={profsTeste} alt="" className='profs' />
                    <div className="s2card__content">
                        <p className="s2card__title">Card Title</p>
                        <p className="s2card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div className="s2card">
                    <img src={profsTeste} alt="" className='profs' />
                    <div className="s2card__content">
                        <p className="s2card__title">Card Title</p>
                        <p className="s2card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div className="s2card">
                    <img src={profsTeste} alt="" className='profs' />
                    <div className="s2card__content">
                        <p className="s2card__title">Card Title</p>
                        <p className="s2card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div className="s2card">
                    <img src={profsTeste} alt="" className='profs' />
                    <div className="s2card__content">
                        <p className="s2card__title">Card Title</p>
                        <p className="s2card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>

            </section >
        </>
    )
}

export default Profissionais;