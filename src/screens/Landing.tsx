import createDocImg from '../assets/uploadsd.png';
import createDocImgClicked from '../assets/uploadsdonclick.png';
import createCertImg from '../assets/uploadcert.png';
import createCertImgClicked from '../assets/uploadcertonclick.png';
import lineSeparator from '../assets/lineSeparator.png';
import { LandingStandards } from '../components/LandingStandards';
import { useNavigate } from 'react-router-dom';


export const Landing = () => {
    const navigate = useNavigate();
    return <div className="p-2 bg-slate-100 h-screen  overflow-auto">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 mt-10">
            <div className="flex justify-center p-5">
                <button className="relative w-2/3 md:w-2/3 xl:w-96 shadow-md hover:shadow-lg active:shadow-xl" onClick={() => {
                    navigate("/document")
                }}>
                    <img src={createDocImg} />
                    <img src={createDocImgClicked} alt="Hovered and clicked image" className="absolute top-0 left-0 opacity-0 hover:opacity-100 clicked:opacity-90" />
                </button>
            </div>
            <div className="flex justify-center p-5">
                <button className="relative w-2/3 md:w-2/3 xl:w-96 shadow-md hover:shadow-lg active:shadow-xl" onClick={() => {
                    navigate("/cert")
                }}>
                    <img src={createCertImg} />
                    <img src={createCertImgClicked} alt="Hovered and clicked image" className="absolute top-0 left-0 opacity-0 hover:opacity-100 clicked:opacity-90" />
                </button>
            </div>
        </div>
        <img className='p-5' src={lineSeparator} />
        <div>
            <LandingStandards />
        </div>
    </div>
}