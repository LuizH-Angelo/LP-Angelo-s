import './Profissionais.css'
import profsTeste from '../assets/profsTeste.WebP'

function Profissionais() {
    return (
        <>
            <div className='s2divTitle'>
                <h2 className='s2Title'>Profissionais</h2>
            </div>
            
            <section className='s2' id='s2'>
                
                <div className="profs">
                    <img src={profsTeste} alt="professores da Angelos" className='imgprofs'/>
                </div>

                <div className="s2card">
                    <h3 className='s2cardTitle'>Saulo Minato</h3>
                    <p className='s2cardContent'>Professor VETERANO da Angelo's! Conosco desde o início, especializado em ...</p>
                </div>

                <div className="profs">
                    <img src={profsTeste} alt="professores da Angelos" className='imgprofs'/>
                </div>
                <div className="s2card">
                    <h3 className='s2cardTitle'>Nome 2</h3>
                    <p className='s2cardContent'>Texto 2</p>
                </div>

                <div className="profs">
                    <img src={profsTeste} alt="professores da Angelos" className='imgprofs'/>
                </div>
                <div className="s2card">
                    <h3 className='s2cardTitle'>Nome 3</h3>
                    <p className='s2cardContent'>Texto 3</p>
                </div>

                <div className="profs">
                    <img src={profsTeste} alt="professores da Angelos" className='imgprofs'/>
                </div>
                <div className="s2card">
                    <h3 className='s2cardTitle'>Nome 4</h3>
                    <p className='s2cardContent'>Texto 4</p>
                </div>

            </section >
        </>
    )
}

export default Profissionais;