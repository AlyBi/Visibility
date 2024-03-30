import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="mt-8 bg-violet-900 pt-9">
            <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
                <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
                    <div className="md:w-[316px]">
                        <p className="text-[18px] font-medium text-white">
                            <h1 className="font-extrabold text-white">
                                <span className="text-rose-600">YOUR</span>LOGO
                            </h1>
                        </p>
                        <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">Lorem ipsum .</p>
                        <div className="mt-[18px] flex gap-4">
                            <a className="hover:scale-110" target="_blank" href="#">
                                <img alt="facebook icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src="https://www.englishyaari.com/img/facebook.svg" />
                            </a>
                            <a className="hover:scale-110" target="_blank" href="#">
                                <img alt="linkdin icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src="https://www.englishyaari.com/img/linkdin.svg" />
                            </a>
                            <a className="hover:scale-110" target="_blank" href="#">
                                <img alt="instagram icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src="https://www.englishyaari.com/img/instagram1.svg" />
                            </a>
                            <a className="hover:scale-110" target="_blank" href="#">
                                <img alt="twitter icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src="https://www.englishyaari.com/img/twitter.svg" />
                            </a>
                            <a className="hover:scale-110" target="_blank" href="https://www.youtube.com/">
                                <img alt="youtube icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src="https://www.englishyaari.com/img/youtube.svg" />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[316px]">
                        <div className="mt-[23px] flex">
                            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                                <svg width="24" height="24"></svg>
                            </div>
                            <div className="ml-[18px]">
                                <a href="tel:+911800123444" className="font-Inter text-[14px] font-medium text-white">+91 1800123444</a>
                                <p className="font-Inter text-[12px] font-medium text-white">Support Number</p>
                            </div>
                        </div>
                        <div className="mt-[23px] flex">
                            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                                <svg width="20" height="15"></svg>
                            </div>
                            <div className="ml-[18px]">
                                <a href="mailto:help@lorem.com" className="font-Inter text-[14px] font-medium text-[#fff]">help@lorem.com</a>
                                <p className="font-Inter text-[12px] font-medium text-[#fff]">Support Email</p>
                            </div>
                        </div>
                        <div className="mt-[23px] flex">
                            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                                <svg width="18" height="21"></svg>
                            </div>
                            <div className="ml-[18px]">
                                <a href="mailto:help@lorem.com" className="font-Inter text-[14px] font-medium text-[#fff]">Sub Nerul, Mumbia, India, 123456</a>
                                <p className="font-Inter text-[12px] font-medium text-white">Address</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
                        <div className="">
                            <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">Pages</p>
                            <ul>
                                <li className="mt-[15px]"><a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold" href="/">Home</a></li>
                                <li className="mt-[15px]"><a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold" href="/our-tutors">News</a></li>
                                <li className="mt-[15px]"><a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold" href="/become-a-tutor">Contact</a></li>
                                <li className="mt-[15px]"><a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold" href="/plans-and-pricing">Plans and pricing</a></li>
                                <li className="mt-[15px]"><a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold" href="/terms-and-conditions">Terms and conditions</a></li>
                                <li className="mt-[15px]"><a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold" href="/privacy-policy">Privcay policy</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 mt-6 sm:mt-0">
                            <p className="text-deutziawhite font-inter text-[18px] font-medium">Download the app</p>
                            <div className="flex gap-4 sm:flex-col">
                                <a target="_blank" href="#"><img alt="facebook icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src="https://www.englishyaari.com/img/facebook.svg" /></a>
                                <a target="_blank" href="#"><img alt="facebook icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src="https://www.englishyaari.com/img/facebook.svg" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-[30px] text-white" />
            <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
                <p className="text-[10px] font-normal text-white md:text-[12px]">
                    {/* © Copyright
                <!-- -->2024 */}
                    {/* <!-- -->, All Rights Reserved by YOUR WEBSITES. PVT. LTD */}
                </p>
            </div>
        </div>
    );
};

export default Footer;