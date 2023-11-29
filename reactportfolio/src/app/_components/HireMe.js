import { CircularText } from '../_shared-components/Icons';
import Link from 'next/link';
import { contactsConfig } from '../../../data-config/contacts';
import { homePageConfig } from '../../../data-config/home';

const HireMe = () => {
    return (
        <div className='flex items-center justify-center overflow-hidden z-20 fixed left-4 bottom-4
            md:absolute md:right-4 md:left-auto md:top-[2px] md:bottom-auto
            sm:right-2'>
            <div className='h-auto flex items-center justify-center relative w-[130px]
                md:w-[85px] sm:w-[80px]'>
                <CircularText className="fill-dark animate-spin-slow" />
                <Link
                    href={contactsConfig.ownerEmail}
                    scroll={false}
                    className={`flex items-center justify-center text-center text-xs
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    bg-dark text-light shadow-md border border-solid border-dark
                    w-20 h-20 rounded-full font-semibold
                    hover:bg-light hover:text-dark
                    md:w-14 md:h-14 md:text-[8px] md:leading-3`}>
                    {homePageConfig.hireMeButton.title && homePageConfig.hireMeButton.title}
                </Link>
            </div>
        </div>
    )
}

export default HireMe;