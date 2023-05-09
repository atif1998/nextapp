import React from 'react'

export default function About() {
    return (
        <>
            {/* ======= About Us Section ======= */}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6">
                            <p className='text-justify-on-small-device'>
                                At Technopro.pk, we are passionate about technology and committed to delivering innovative solutions to our clients.
                                Our team of experienced professionals has the expertise to provide customized IT solutions that meet the unique needs of your business.
                            </p>
                            <br></br>
                            <ul className='text-justify'>
                                <li>
                                    <i className="ri-check-double-line" /> IT consulting: We can help you optimize your IT infrastructure and provide recommendations for improving efficiency, productivity and security.
                                </li>
                                <li>
                                    <i className="ri-check-double-line" /> Software development: Our team of developers can design and build custom software applications to meet your specific business requirements.
                                </li>
                                <li>
                                    <i className="ri-check-double-line" /> Web design and development: We can create a professional website that reflects your brand and provides a seamless user experience for your customers.
                                </li>
                                <li>
                                    <i className="ri-check-double-line" />Cloud computing: We can help you migrate to the cloud and provide ongoing support for cloud-based applications.
                                </li>
                                <li>
                                    <i className="ri-check-double-line" />Cybersecurity: Our team can help you protect your business from cyber threats with a range of cybersecurity solutions, including risk assessments, security audits, and vulnerability management.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p className='text-justify-on-small-device'>
                                At Technopro.pk, we pride ourselves on our commitment to quality, integrity and customer satisfaction.
                                Contact us today to learn more about how we can help your business succeed.
                            </p>
                            <a href="#softwaredevelopment" className="btn-learn-more">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            {/* End About Us Section */}
        </>

    )
}
