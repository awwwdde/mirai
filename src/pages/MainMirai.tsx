import { Mouse } from 'lucide-react';
import { motion } from 'framer-motion';

const MainMirai = () => {
    return (
      <div className="relative min-h-screen w-full">
        <div className="relative flex flex-col items-center bottom-[180px]">
          <h1
            className="text-white font-extrabold"
            style={{ fontSize: '350px', letterSpacing: '0.1em', color: '#fff', textShadow: '0 4px 4px rgba(0,0,0,0.25)', lineHeight: 1 }}
          >
            MIRAI
          </h1>
          <img
            src="/src/addons/dog.png"
            alt="dog"
            style={{ position: 'absolute', left: '48%', top: '70%', transform: 'translate(-50%, -50%)', zIndex: 2 }}
          />
        </div>
        <p
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[240px]"
          style={{ color: '#fff', fontSize: '24px', width: '525px', textAlign: 'center' }}>
          Добро пожаловать в MIRAI - ваш надежный сервис для заботы о домашних питомцах.
        </p>
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[170px] flex flex-row items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Mouse size={36} color="#fff" />
          </motion.div>
          <span className="text-white text-xs"
          style={{ color: '#fff', fontSize: '16px', fontStyle: 'normal' }}
          >прокрути</span>
        </motion.div>
      </div>
    )
  }
  
  export default MainMirai