import './QuemSomos.css';
import angelos1 from '../assets/angelos1.WebP'
import angelosmain from '../assets/angelosmain.WebP'

function QuemSomos() {
    return (
        <>
            <section className='s1' id='s1'>
                <div className='s1divTitle'>
                    <h2 className='s1Title'>Quem somos</h2>
                </div>
                <div className='s1Container'>
                    <div className='card'>
                        <ul className='cardList'>
                            <li className="listText">Referência em Atendimento!</li>
                            <li className="listText">Profissionais sempre próximos, suporte diário!
                            </li>
                            {/* <li className="listText">
                                Vocês são a razão do nosso sucesso e a energia que nos move todos os dias!</li> */}
                            <li className="listText">
                                Comprometidos com sua saúde e seus resultados!</li>
                        </ul>
                        <h3 className='listSubTitle'>Vem pra Angelo's!</h3>
                    </div>
                    <div className='carouselWrap'>
                        <div className='carouselTrack'>
                            <img src={angelosmain} className='carouselItem' alt="foto panorama angelos" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuemSomos;