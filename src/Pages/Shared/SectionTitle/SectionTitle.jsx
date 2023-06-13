

const SectionTitle = ({ heading, subHeading }) => {
    return (


        <div className="  mx-auto text-center md:w-6/12 my-24 font-serif">

            <h3 className="text-3xl text-black border-red-400 uppercase border-y-4 py-4">{heading}</h3>

            <p className="text-black  my-4">{subHeading}</p>

        </div>


    );
};

export default SectionTitle;