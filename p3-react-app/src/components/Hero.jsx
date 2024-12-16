// assets
import heroPicture from "../assets/hero-picture.png";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="max-w-lg max-h-80 ">
          <h3 className="text-3xl text-sky-950">
            Ditch paper, Share Digitally with{" "}
          </h3>
          <h1 className="text-sky-950 font-bold text-4xl mt-2">LinkCard</h1>
          <p className="text-sky-950 mt-2">
            <b>LinkCard</b> is a digital platform that lets you create and share
            personalized virtual business cards in seconds. Perfect for
            professionals and businesses, it helps you showcase your brand and
            contact details effortlessly. Customize your card, share it
            instantly with a link, and ditch the paper—go digital with{" "}
            <b>LinkCard</b>.
          </p>
        </div>
        <div>
          <img
            src={heroPicture}
            alt="hero-picture"
            className="max-w-80 max-h-80 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
