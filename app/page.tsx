"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { GrWorkshop } from "react-icons/gr"
import { MdOutlineSoupKitchen } from "react-icons/md";
import { SiOpenstreetmap } from "react-icons/si";
import { FaHands } from 'react-icons/fa'; // Import the sustainability icon

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const featureTitles = [
    "Empanadas Argentinas",
    "Saltenas",
    "Schawarma",
    "Manakish",
    "Tavuk"
  ];

  // Function to generate a random star rating between 1 and 5
  const getRandomRating = () => Math.floor(Math.random() * 5) + 1;

  // Function to generate a random sustainability score between 1 and 100
  const getRandomSustainabilityScore = () => Math.floor(Math.random() * 100) + 1;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-black bg-opacity-70"> {/* Added background color and transparency */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png" 
            alt="Logo"
            width={100} 
            height={33} 
            className="h-auto w-[100px] filter invert" 
          />
          <span className="text-2xl font-bold text-white ml-2">Rootes & Routes</span> {/* Add your text here */}
        </Link>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </Button>
        <nav className="hidden md:flex items-center space-x-6">
          {["Home", "About", "Experiences", "Contact"].map((item) => (
            <Link key={item} href="#" className="text-lg font-medium text-white hover:underline">
              {item}
            </Link>
          ))}
          
        </nav>
      </header>

      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center">
          <Image
            src="/images/hero2.png"
            fill
            alt="Background"
            className="absolute inset-0"
            style={{ objectFit: 'cover' }}
          />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Discover Unique Experiences</h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Immerse yourself in a world of authentic, locally-curated experiences that foster social connections and sustainable practices.
            </p>
            <Button size="lg" className="bg-white text-gray-400 hover:bg-gray-100 text-lg px-6 py-3 mt-6">
              Book Now
            </Button>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Immerse Yourself in Local Culture</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MdOutlineSoupKitchen className="h-12 w-12 mb-4" />, // Added size classes
                  title: "Culinary Creations",
                  description:
                    "Dive into a world of flavor with culinary experiences crafted by local chefs and food artisans. From cooking classes and tasting tours to farm-to-table dining, our marketplace offers unique opportunities to explore the rich food culture of each destination. ",
                },
                {
                  icon: <SiOpenstreetmap className="h-12 w-12 mb-4"/>,
                  title: "Uncover Hidden Gems",
                  description:
                    "Step off the beaten path and explore the lesser-known wonders of every locale. Our marketplace brings you closer to hidden gems curated by locals—from secluded spots and historic treasures to unique experiences you won’t find in any guidebook.",
                },
                {
                  icon: <GrWorkshop className="h-12 w-12 mb-4" />, // Added size classes
                  title: "Hands-on Workshops",
                  description:
                    "Engage in hands-on workshops that let you dive into local craftsmanship and creativity. From pottery and painting to culinary arts and traditional crafts, our marketplace offers experiences led by skilled artisans and experts eager to share their knowledge. ",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4"> {/* Center the icon */}
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#182641]">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-white mb-12">Taste the World</h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-4">
                {[1, 2, 3, 4, 5].map((i) => {
                  const rating = getRandomRating(); // Get a random rating for each feature
                  const sustainabilityScore = getRandomSustainabilityScore(); // Get a random sustainability score
                  return (
                    <CarouselItem key={i} className={`pl-4 ${isMobile ? 'basis-full' : 'basis-1/3'}`}>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="bg-gray-200 rounded-t-lg relative"> {/* Set relative positioning for the overlay */}
                            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-2"></div>
                            <div className="relative h-100"> {/* Set height to 2x longer */}
                              <Image
                                src={`/images/images${i}.jpg`} // Ensure this path is correct
                                alt={`Feature ${i}`}
                                width={400} // Adjust width as needed
                                height={200} // Adjust height as needed
                                className="w-full h-full object-cover rounded-t-lg" // Full width and height
                              />
                              <h3 className="absolute bottom-16 left-4 text-white text-xl font-semibold bg-black bg-opacity-50 p-2 rounded"> {/* Title inside the image */}
                                {featureTitles[i - 1]} {/* Access the title based on index */}
                              </h3>
                              <div className="absolute bottom-10 left-4 flex items-center"> {/* Star rating */}
                                {[...Array(5)].map((_, index) => (
                                  <svg
                                    key={index}
                                    className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} // Filled or empty star
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                                  </svg>
                                ))}
                              </div>
                              <div className="absolute bottom-2 left-4 flex items-center space-x-1"> {/* Sustainability score */}
                                <FaHands className="text-white" />
                                <p className="text-white text-sm bg-black bg-opacity-50 p-1 rounded">
                                  Sustainability Score: {sustainabilityScore}%
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4">
                          <Button className="w-full">Book Now</Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section className="py-16 bg-[#f5f3ee]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/images/culinaryad.jpg"
                  width={600}
                  height={400}
                  alt="Man preparing food outdoors"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="md:w-1/2 ">
                <h2 className="text-3xl font-bold mb-4">Embark on a Culinary Adventure</h2>
                <p className="text-gray-600 mb-6">
                  Dive into the heart of the local food culture and learn to create mouthwatering dishes using time-honored techniques and the finest seasonal produce
                </p>
                <div className="flex gap-4">
                  <Button>Book Now</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f5f3ee] relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-4">Feria Empresarial Medellin</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
              Apoya nuestro talento, encuentra diversos productos y servicios en un solo lugar
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/feriaMedellin.jpg"
                  width={600}
                  height={400}
                  alt="Two women cooking outdoors"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-amber-600 mb-2">Conexiones Autenticas</p>
                  <h3 className="text-2xl font-bold text-navy-800 mb-4">Empoderando el Talento Local</h3>
                  <p className="text-gray-600 mb-4">
                  Conéctate con anfitriones apasionados que comparten sus tradiciones culturales y habilidades únicas. Al reservar experiencias a través de nuestro marketplace, apoyas directamente a pequeños negocios y artesanos locales, fortaleciendo sus comunidades.
                  </p>
                  <Link href="https://feriaempresarial.com.co/" className="text-amber-600 hover:underline">
                    Explore Now
                  </Link>
                </div>
                <Card className="mt-4 shadow-md rounded-lg overflow-hidden bg-[#f5e9dc]"> {/* Add background, shadow, and rounded corners */}
                  <CardContent className="p-0 flex items-center space-x-4">
                    <Image
                      src="/images/oportunidades.png"
                      width={200}
                      height={200}
                      alt="Person cooking"
                      className="rounded-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">Ley de la hermandad</h4> {/* Adjust text color */}
                      <p className="text-sm text-gray-600">Promoveremos la colaboración y el apoyo mutuo entre los participantes, fomentando un ambiente de cooperación donde todos nos beneficiamos y crecemos juntos.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">Sabores del Mundo</h3>
                <p className="text-gray-600">
                Descubre una variedad de sabores de chefs locales que ofrecen talleres culinarios y experiencias gastronómicas únicas. Sumérgete en la vibrante escena culinaria de Medellín y aprende a crear platos auténticos bajo la guía de expertos.
                </p>
              </div>
              <Card>
                <CardContent className="p-0 flex items-center space-x-4 bg-[#f5e9dc]">
                  <Image
                    src="/images/connecta.png"
                    width={200}
                    height={200}
                    alt="Food platter"
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-navy-800">Rueda de Negocios</h4>
                    <p className="text-sm text-gray-600">
                    Establece conexiones valiosas con grandes empresas en encuentros uno a uno.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <Image
            src="/images/leaves.webp"
            width={100}
            height={100}
            alt="Decorative apple"
            className="absolute top-4 left-4 opacity-50"
          />
          <Image
            src="/images/apple.webp"
            width={150}
            height={150}
            alt="Decorative leaves"
            className="absolute top-0 right-0 opacity-30"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Sustainable Experiences</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "About Us", subtitle: "Our Mission", image: "/images/aboutus.jpg" },
                { title: "Sustaina", subtitle: "Our Sustainability", image: "/images/sustainability.jpg" },
                {
                  title: "Authentic Experiences",
                  subtitle: "Discover Your Next Adventure",
                  image: "/images/experiences.png",
                },
                { title: "Empowering", subtitle: "Fostering Growth", image: "/images/empowering.jpg" },
                {
                  title: "Elevate Your Journey",
                  subtitle: "Explore Local Flavors",
                  image: "/images/journey.webp",
                },
                {
                  title: "Savor the Difference",
                  subtitle: "Taste the Local Difference",
                  image: "/images/savour.webp",
                },
              ].map((item, index) => (
                <Link key={index} href={`/your-route/${index}`}> {/* Use index as a unique identifier */}
                  <Card className="overflow-hidden cursor-pointer h-40"> {/* Set a fixed height for all cards */}
                    <CardContent className="p-6 flex items-center space-x-4 h-full"> {/* Ensure content takes full height */}
                      <Image src={item.image} width={100} height={100} alt={item.title} className="rounded-full" />
                      <div className="flex flex-col justify-center"> {/* Center the text vertically */}
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        
      </main>

      <footer className="bg-white text-gray-600 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="ExperienceLocal Logo"
                className="mb-4"
              />
              <p className="text-sm">© 2024 Rootes & Routes.<br />All rights reserved.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Experiences", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Explore More</h3>
              <ul className="space-y-2">
                {["Sustainability", "Partners", "Reviews", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
