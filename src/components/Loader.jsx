import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className='flex items-center justify-center'>
        <div className='w-20 h-20 border-2 border-blue-300 rounded-full border-opacity-20 border-t-blue-400 animate-spin'></div>
      </div>
    </Html>
  );
};

export default Loader;
