import React from 'react'
import Image from 'next/image'


export default function Services() {
    return (
        <>
            {/* ======= Services Section ======= */}
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p className='text-justify-on-small-device'>Our services are integrated with the latest software and IT-based solutions, ensuring that our clients receive efficient and effective services. Our advanced technology allows us to provide innovative solutions, customized to meet our clients' unique needs, and provide them with a competitive edge.</p>
                    </div>
                    <div className="row">
                        <div
                            className="col-xl-4 col-md-6 d-flex align-items-stretch"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <div className="icon-box erp-box-size mb-3">
                                <div className="icon">
                                <Image src="/images/integration.png" alt='serv' width={200} height={200}/>
                                </div>
                                <h4>
                                    <a href="">Integration</a>
                                </h4>
                                {/* <p>
                                    Voluptatum deleniti atque corrupti quos dolores et quas molestias
                                    excepturi
                                </p> */}
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-md-6 d-flex align-items-stretch"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <div className="icon-box erp-box-size mb-3">
                                <div className="icon">
                                    <Image src="/images/data-transformation.png" alt='data' width={144} height={144}/>
                                </div>
                                <h4>
                                    <a href="">Transformation</a>
                                </h4>
                                {/* <p>
                                    Voluptatum deleniti atque corrupti quos dolores et quas molestias
                                    excepturi
                                </p> */}
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-md-6 d-flex align-items-stretch"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <div className="icon-box erp-box-size mb-3">
                                <div className="icon">
                                <Image src="/images/consultation.png" alt='consult' width={144} height={144}/>
                                </div>
                                <h4>
                                    <a href="">Consultancy </a>
                                </h4>
                                {/* <p>
                                    Voluptatum deleniti atque corrupti quos dolores et quas molestias
                                    excepturi
                                </p> */}
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            {/* End Services Section */}
        </>

    )
}
