import Image from 'next/image';

const Challenges = () => {
  return (
    <div className="h-screen bg-black text-white">
      <div className="container mx-auto px-8 pt-4">
        <h1 className="font-bold text-4xl">Challenges</h1>
        <p className="mt-2 mb-4">
          Below is an ongoing collection of the challenges I have done to keep
          myself entertained
        </p>
      </div>
      <a
        className="hover:opacity-50 transition-opacity duration-300"
        href="https://snap-landing-page-wine.vercel.app/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src="/snap-landing-page.png"
          alt="Snap Landing Page Project"
          width={500}
          height={300}
        />
      </a>
    </div>
  );
};

export default Challenges;
