import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

export default function InsuranceChoose() {

    const data = [{}, {}, {}, {}, {}, {},]
    return (
        <>
            <section className="InsuranceChoose headSectionsWaveS2">
                <div className="container_">
                    <header className="headSections">
                        <h2>أكثر من 20 شركة تأمين</h2>
                        <p>لنضمن لك جودة خدمة ممتازة .. إليك مجموعة من أفضل شركات التأمين للاختيار بينهم.</p>
                    </header>


                    <div className="slide">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper"


                            breakpoints={{
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                        >


                            {
                                data.map((res, i) =>
                                    <SwiperSlide key={i}>
                                        <div className="slideItem">
                                            <Image src={'/photos/campany.svg'} width={142} height={70} />
                                        </div>
                                    </SwiperSlide>
                                )
                            }

                        </Swiper>
                    </div>
                </div>
            </section>
        </>


    )
}
