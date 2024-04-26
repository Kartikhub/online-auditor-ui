import standards from '../assets/standards.png';
import { StandardsCard } from './StandardsCard';

export const LandingStandards = () => {
    return (
        <div>
            <div className="flex flex-auto w-48 ml-10">
                <img src={standards} />
            </div>
            <div className='grid grid-cols-1 gap-y-2 gap-x-8 md:grid-cols-3 xl:grid-cols-4'>

                {[...Array(7)].map((_, index) => (
                    <div>
                        <StandardsCard key={index} />
                    </div>
                ))}

            </div>

        </div>
    )
}