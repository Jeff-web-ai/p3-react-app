// assets
import LinkCard from "../assets/sample-linkcard.png";

const About = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div>
          <img
            src={LinkCard}
            alt="LinkCard Sample"
            className="max-w-60 max-h-80"
          />
        </div>

        <div className="bg-sky-400 p-8 max-w-96 max-h-80 rounded-lg">
          <h2 className="text-2xl font-bold text-sky-950">
            The best digital business card.
          </h2>
          <p className="text-sky-950 mt-4">
            Create a digital business card with your key details.{" "}
            <span className="font-bold">LinkCard</span> offers custom designs,
            easy sharing, and integration to help you build connections and get
            insights from every interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
