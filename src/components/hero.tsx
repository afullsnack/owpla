import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/carousel";

export default function Hero() {
  return (
    <main className="md:grid place-items-center pb-8 md:pb-24 lg:min-h-[500px] w-full">
      <Carousel className="border h-full w-full">
        <CarouselContent className="h-full -ml-2 w-full">
          <CarouselItem className="lg:aspect-video aspect-square lg:basis-full basis-5/6 h-full">
            <div className="w-full bg-[url('/slide-1.png')] bg-cover bg-center bg-no-repeat h-full grid items-center justify-center lg:px-10 p-10">
              <div>
                <h2 className="text-2xl lg:text-5xl font-bold lg:tracking-tight text-white">
                  CAPACITY BUILDING
                </h2>
                <p className="lg:text-lg text-sm mt-2 text-white">
                  Working with partners, Olu of Warri Palace Liaison Authority
                  (OWPLA) will periodically organize capacity building trainings
                  and workshops in different relevant fields for Itsekiri
                  youths.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:aspect-video aspect-square lg:basis-full basis-5/6 h-full">
            <div className="w-full bg-[url('/slide-2.png')] bg-cover bg-center bg-no-repeat h-full grid items-center justify-center lg:px-10 p-10">
              <div>
                <h2 className="text-2xl lg:text-5xl font-bold lg:tracking-tight text-white">
                  CONFLICT RESOLUTION
                </h2>
                <p className="lg:text-lg text-sm mt-2 text-white">
                  Our office acts as mediators between host communities and
                  International Oil Companies/Multinationals operating in the
                  Warri Kingdom
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:aspect-video aspect-square lg:basis-full basis-5/6 h-full">
            <div className="w-full bg-[url('/slide-3.png')] bg-cover bg-center bg-no-repeat h-full grid items-center justify-center lg:px-10 p-6">
              <div>
                <h2 className="text-2xl lg:text-5xl font-bold lg:tracking-tight text-white">
                  FREE ENGINEERING TRAINING
                </h2>
                <p className="lg:text-lg text-sm mt-2 text-white">
                  In partnership with Rucotech, Olu of Warri Palace Liaison
                  Authority is organizing a two-weeks free upskill training for
                  Engineering and Natural Science graduates. Click the button
                  below to register.
                </p>
                <a
                  href="https://ruco.tech/trainings"
                  className="flex max-w-fit items-center justify-start bg-white text-black px-8 py-3 lg:mt-6 mt-3 font-bold"
                  rel="noopener">
                  Register
                </a>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </main>
  );
}
