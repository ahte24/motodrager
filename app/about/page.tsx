/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tQrr3tZ10xG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <section className="w-full bg-[#212124] h-[400px] py-12 md:py-24 lg:py-32 bg-[url('/hero-image.jpg')] bg-cover bg-center">
                <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-4">
                    <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl text-white">Motodrager.in</h1>
                    <p className="text-xl text-primary-foreground text-white">Empowering the future of riding.</p>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Acme Inc.</h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Acme Inc. is a leading technology company that has been at the forefront of innovation for over a decade.
                            Founded in 2010, we are dedicated to creating cutting-edge solutions that empower businesses and
                            individuals to thrive in the digital age.
                        </p>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our mission is to revolutionize the way the world interacts with technology, by developing intuitive and
                            user-centric products that simplify complex processes and drive progress. With a talented team of
                            engineers, designers, and visionaries, we are constantly pushing the boundaries of what's possible.
                        </p>
                    </div>
                    <img
                        src="https://littlewolfauto.com/wp-content/uploads/2024/04/Oil-change-service-march-blog.png"
                        width="550"
                        height="450"
                        alt="About Acme Inc."
                        className="mx-auto  overflow-hidden rounded-xl object-cover sm:w-full"
                    />
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#212124]">
                <div className="container mx-auto px-4 md:px-6 space-y-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            At Acme Inc., our mission is to empower businesses and individuals to thrive in the digital age. We
                            believe that technology should be accessible, intuitive, and transformative, enabling our clients to
                            achieve their goals and reach new heights.
                        </p>
                    </div>
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Integrity, Innovation, Collaboration, and Excellence are the core values that guide our every decision and
                            action. We are committed to upholding the highest standards of ethical conduct, continuously pushing the
                            boundaries of what's possible, and fostering a culture of teamwork and mutual respect.
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
                            We provide all the advantages that can simplify all your uniform
                            needs without any further issues.
                        </p>
                    </div>
                    <div className="swiper teamswiper pb-10">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="group w-full flex-wrap flex items-center justify-center gap-8  transition-all duration-500 p-8  lg:flex-nowrap">
                                    <div className=" w-full lg:w-64 h-80">
                                        <img
                                            width={500}
                                            height={500}
                                            src={""}
                                            alt="image"
                                            className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full bg-slate-800"
                                        ></img>
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
                                            As the Founder of Motodrager, I deliver top-quality engine oils, brake fluids, and premium vehicle fluids to boost performance and longevity. With over a decade of experience, we are known for reliability and innovation, helping vehicles run smoother and more efficiently.
                                        </p>

                                        <div className="flex items-center  gap-4 justify-center lg:justify-start">
                                            <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                                                <svg
                                                    className="w-5 h-5"
                                                    width="32"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </p>
                                            <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                                                <svg
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M8.33716 11.9002C8.33716 9.85475 10.0192 8.19617 12.0947 8.19617C14.1702 8.19617 15.8531 9.85475 15.8531 11.9002C15.8531 13.9456 14.1702 15.6042 12.0947 15.6042C10.0192 15.6042 8.33716 13.9456 8.33716 11.9002ZM6.30543 11.9002C6.30543 15.0513 8.89727 17.6056 12.0947 17.6056C15.2921 17.6056 17.8839 15.0513 17.8839 11.9002C17.8839 8.74906 15.2921 6.19475 12.0947 6.19475C8.89727 6.19475 6.30543 8.74906 6.30543 11.9002ZM16.7602 5.96853C16.7601 6.23224 16.8393 6.49005 16.9879 6.70938C17.1365 6.9287 17.3477 7.09968 17.5949 7.2007C17.842 7.30171 18.1141 7.32822 18.3765 7.27688C18.639 7.22554 18.8801 7.09864 19.0694 6.91225C19.2587 6.72585 19.3876 6.48833 19.4399 6.22971C19.4922 5.97108 19.4656 5.70299 19.3633 5.45931C19.261 5.21563 19.0876 5.00733 18.8652 4.86073C18.6428 4.71414 18.3812 4.63583 18.1137 4.63573H18.1131C17.7544 4.63589 17.4105 4.77635 17.1568 5.02625C16.9032 5.27614 16.7605 5.61505 16.7602 5.96853ZM7.53983 20.9443C6.44063 20.895 5.84318 20.7146 5.44614 20.5621C4.91976 20.3602 4.54419 20.1196 4.14932 19.731C3.75444 19.3424 3.51002 18.9726 3.30599 18.4539C3.15122 18.0627 2.96812 17.4738 2.91816 16.3905C2.8635 15.2193 2.85258 14.8675 2.85258 11.9003C2.85258 8.93306 2.8644 8.58222 2.91816 7.41004C2.96821 6.32675 3.15266 5.73893 3.30599 5.34666C3.51092 4.82791 3.75498 4.45777 4.14932 4.06862C4.54365 3.67946 4.91886 3.43857 5.44614 3.23751C5.843 3.08497 6.44063 2.90453 7.53983 2.85528C8.72824 2.80142 9.08523 2.79066 12.0947 2.79066C15.1041 2.79066 15.4615 2.80231 16.6509 2.85528C17.7501 2.90462 18.3465 3.0864 18.7446 3.23751C19.2709 3.43857 19.6465 3.68 20.0414 4.06862C20.4363 4.45724 20.6798 4.82791 20.8847 5.34666C21.0395 5.73777 21.2226 6.32675 21.2726 7.41004C21.3272 8.58222 21.3381 8.93306 21.3381 11.9003C21.3381 14.8675 21.3272 15.2183 21.2726 16.3905C21.2225 17.4738 21.0385 18.0626 20.8847 18.4539C20.6798 18.9726 20.4357 19.3428 20.0414 19.731C19.6471 20.1193 19.2709 20.3602 18.7446 20.5621C18.3477 20.7147 17.7501 20.8951 16.6509 20.9443C15.4625 20.9982 15.1055 21.009 12.0947 21.009C9.08388 21.009 8.72788 20.9982 7.53983 20.9443ZM7.44648 0.856351C6.24626 0.910218 5.42612 1.09777 4.70988 1.37244C3.96812 1.65608 3.34018 2.03662 2.71269 2.65404C2.08521 3.27146 1.70007 3.89128 1.41226 4.62231C1.13356 5.32862 0.943248 6.13644 0.88859 7.31928C0.83303 8.504 0.820312 8.88275 0.820312 11.9002C0.820312 14.9176 0.83303 15.2964 0.88859 16.4811C0.943248 17.664 1.13356 18.4717 1.41226 19.178C1.70007 19.9086 2.0853 20.5292 2.71269 21.1463C3.34009 21.7635 3.96812 22.1435 4.70988 22.4279C5.42747 22.7026 6.24626 22.8901 7.44648 22.944C8.64923 22.9979 9.03292 23.0113 12.0947 23.0113C15.1564 23.0113 15.5408 22.9987 16.7429 22.944C17.9432 22.8901 18.7628 22.7026 19.4795 22.4279C20.2208 22.1435 20.8492 21.7637 21.4767 21.1463C22.1041 20.5289 22.4885 19.9086 22.7771 19.178C23.0558 18.4717 23.247 17.6639 23.3008 16.4811C23.3554 15.2955 23.3681 14.9176 23.3681 11.9002C23.3681 8.88275 23.3554 8.504 23.3008 7.31928C23.2461 6.13635 23.0558 5.32817 22.7771 4.62231C22.4885 3.89173 22.1032 3.27244 21.4767 2.65404C20.8502 2.03564 20.2208 1.65608 19.4804 1.37244C18.7628 1.09777 17.9431 0.909329 16.7438 0.856351C15.5417 0.802485 15.1573 0.789062 12.0956 0.789062C9.03382 0.789062 8.64923 0.801596 7.44648 0.856351Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </p>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.5411099430853!2d86.33570577586137!3d20.850229093885464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1be5f43e284ea3%3A0xaae1a85f557ee018!2sDevXplore!5e0!3m2!1sen!2sin!4v1726413937455!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <p>Lubricate Inc Headquarters</p>
                        <p>123 Main Street, San Francisco, CA 94101</p>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6 space-y-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Acme Inc.</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            At Acme Inc., we pride ourselves on our commitment to innovation, excellence, and customer satisfaction.
                            Here are a few reasons why you should choose us:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center space-y-2">
                            <RocketIcon />
                            <div className="space-y-1 text-center">
                                <h3 className="text-xl font-semibold">Cutting-Edge Technology</h3>
                                <p className="text-muted-foreground">
                                    Our team of experts is constantly exploring the latest advancements in technology to deliver
                                    innovative solutions that drive your business forward.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <UsersIcon />
                            <div className="space-y-1 text-center">
                                <h3 className="text-xl font-semibold">Dedicated Support</h3>
                                <p className="text-muted-foreground">
                                    Our customer support team is available around the clock to ensure that your needs are met and your
                                    questions are answered promptly.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <BoltIcon />
                            <div className="space-y-1 text-center">
                                <h3 className="text-xl font-semibold">Unparalleled Reliability</h3>
                                <p className="text-muted-foreground">
                                    Our robust infrastructure and rigorous testing processes ensure that our solutions are reliable,
                                    scalable, and secure, giving you peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#212124]">
                <div className="container mx-auto px-4 md:px-6 space-y-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Thank you for visiting Acme Inc.
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        We appreciate your interest in our company and hope you found the information on our website helpful. If you
                        have any further questions or would like to learn more about our services, please don't hesitate to reach
                        out. We look forward to the opportunity to work with you.
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
