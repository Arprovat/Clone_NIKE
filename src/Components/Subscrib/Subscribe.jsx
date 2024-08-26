import Button from "../Button/Button";

const Subscribe = () => {
    return (
        <div className="flex flex-col justify-between items-center gap-10">
            <h2 className="text-4xl max-lg:max-w-lg leading-normal font-semibold font-palanquin ">
            Sign Up for
            <span className='text-coral-red'> Updates </span>& Newsletter
            </h2>
            <div className=" lg:max-w-[40%] w-full flex items-center max-sm:flex-col sm:border sm:border-slate-gray rounded-full p-2.5 ">
                <input type="text" placeholder="Subscribe@NIKE.com" className="input" />
                <div className="flex items-center max-sm:justify-end max-sm:mt-5 max-sm:w-full">
                    <Button label="Sign UP" w_full></Button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;