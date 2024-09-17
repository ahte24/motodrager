/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tQrr3tZ10xG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import profile from "@/public/profile.png"
import Image from "next/image"
import factory from "@/public/factory.png"
import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <section className="w-full bg-[#212124] md:h-[400px] h-[300px] flex items-center py-12 md:py-24 lg:py-32 bg-[url('https://services.totalenergies.ng/sites/g/files/wompnd1171/f/styles/media_cover_1314px/public/atoms/image/3d_engine_oil_illustration.jpg?itok=dzYkhnij&c=e5202c125cb88a51462ccd2ae1c3f368')] bg-cover bg-center">
                <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-4">
                    <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl text-white bg-black rounded-lg p-2">Motodrager</h1>
                    <p className="text-xl text-primary-foreground text-white bg-black rounded-lg p-2">Empowering the future of riding.</p>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Motodrager.</h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Motodrager is a leading provider of high-performance engine oils, brake oils, and lubricants that has been serving the automotive industry for over a decade. Founded in 2010, we are dedicated to creating advanced lubricant solutions that keep your engines running smoothly, efficiently, and reliably.
                        </p>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our mission is to enhance the performance and longevity of vehicles around the world by developing cutting-edge lubricants that reduce friction, prevent wear, and optimize engine efficiency. With a skilled team of engineers, chemists, and automotive experts, we are constantly innovating to meet the demands of modern engines and deliver products that exceed industry standards.
                        </p>
                    </div>
                    <Image
                        src={factory}
                        width="550"
                        height="450"
                        alt="About Motodrager."
                        className="mx-auto  overflow-hidden rounded-xl object-cover sm:w-full"
                    />
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#212124]">
                <div className="container mx-auto px-4 md:px-6 space-y-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            At Motodrager, our mission is to deliver world-class engine oils, brake oils, and lubricants that enhance the performance and durability of vehicles. We believe that top-quality lubrication is key to optimal engine performance, and we strive to provide solutions that are accessible, innovative, and tailored to the evolving needs of our customers.
                        </p>
                    </div>
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Integrity, Innovation, Collaboration, and Excellence are the core values that drive every aspect of our business. We are committed to maintaining the highest standards of product quality and ethical conduct, continually advancing the limits of lubricant technology, and fostering a culture of teamwork and mutual respect to serve our customers better.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 bg-[#1d1a1a]">

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-24">
                        <h2 className="font-manrope text-4xl text-center font-bold  mb-6">
                            Meet Our Founder
                        </h2>
                        <p className="text-lg  text-center">
                            We provide all the solutions needed to keep your vehicles running at their best.
                        </p>
                    </div>
                    <div className="swiper teamswiper pb-10">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="group w-full flex-wrap flex items-center justify-center gap-8  transition-all duration-500 p-8  lg:flex-nowrap">
                                    <div className=" w-full lg:w-64 h-80">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={profile}
                                            alt="image"
                                            className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full bg-slate-800"
                                        />
                                    </div>
                                    <div className="text-center lg:text-left lg:max-w-xs flex-1">
                                        <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                                            <h6 className="text-lg font-semibold mb-1">
                                                Raj Kumar
                                            </h6>
                                            <span className="text-sm text-gray-500">
                                                Founder & CEO
                                            </span>
                                        </div>
                                        <p className="text-sm leading-6 mb-7">
                                            As the Founder of Motodrager, I deliver top-quality engine oils, brake fluids, and lubricants to enhance performance and extend engine life. With over a decade of experience, we pride ourselves on reliability and innovation, helping vehicles run smoother and more efficiently.
                                        </p>

                                        <div className="flex items-center  gap-4 justify-center lg:justify-start">
                                            <Link href="https://youtube.com/@jaikalkama327?si=0Mc5TVc1pFs_uGbz" target="_blank" className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
                                                <YoutubeIcon />
                                            </Link>
                                            <Link href="https://www.facebook.com/profile.php?id=100077376946555" target="_blank" className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
                                                <FacebookIcon />
                                            </Link>
                                            <Link href="#" target="_blank" className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
                                                <InstagramIcon />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="w-full py-12  border-b ">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find Us</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Visit Us in the heart of the city.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-5xl rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3035643945796!2d77.30647640000001!3d28.530593999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6bf3d6760c9%3A0xd07c714357ba46d0!2sGali%20Number%201%2C%20Block%20A%2C%20Madanpur%20Khadar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1726558653209!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <p>Motodrager Headquarters</p>
                        <p> B-38, gali number 1, madanpur khadar extension, Sarita vihar Delhi, 110076</p>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6 space-y-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Motodrager.</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            At Motodrager, we pride ourselves on our commitment to innovation, product quality, and customer satisfaction. Here are a few reasons why you should choose us for all your lubricant needs:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center space-y-2">
                            <RocketIcon />
                            <div className="space-y-1 text-center">
                                <h3 className="text-xl font-semibold">Advanced Lubricant Technology</h3>
                                <p className="text-muted-foreground">
                                    Our team of specialists continuously develops the latest advancements in oil and lubricant technology, ensuring your vehicles perform at their best while reducing wear and tear.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <UsersIcon />
                            <div className="space-y-1 text-center">
                                <h3 className="text-xl font-semibold">Expert Support</h3>
                                <p className="text-muted-foreground">
                                    Our dedicated support team is available around the clock to help with any questions you may have regarding our products, ensuring your engines and vehicles are always in top shape.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <BoltIcon />
                            <div className="space-y-1 text-center">
                                <h3 className="text-xl font-semibold">Unmatched Reliability</h3>
                                <p className="text-muted-foreground">
                                    With our rigorously tested formulas and a robust manufacturing process, our oils and lubricants are designed for maximum durability, efficiency, and protection, giving you confidence in every drive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#212124]">
                <div className="container mx-auto px-4 md:px-6 space-y-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Thank you for visiting Motodrager.
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        We appreciate your interest in our range of high-performance engine oils and lubricants. We hope you found the information on our website helpful. If you have any further questions or would like to learn more about how our products can enhance your vehicle&#x2018;s performance and longevity, please
                        don&#x2018;t hesitate to reach out. We look forward to the opportunity to work with you.
                    </p>
                </div>
            </section>
        </div>
    )
}


function BoltIcon() {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <circle cx="12" cy="12" r="4" />
        </svg>
    )
}


function RocketIcon() {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    )
}


function UsersIcon() {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}


function FacebookIcon() {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function InstagramIcon() {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function YoutubeIcon() {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    )
}