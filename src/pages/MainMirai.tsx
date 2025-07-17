import { Mouse } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dogImg from '../addons/dog.png';
import { useRef } from 'react';
import Button from '../widgets/button';

const MainMirai = () => {
    const secondBlockRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const blockHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    const firstBlockOpacity = useTransform(scrollY, [0, blockHeight * 0.7], [1, 0]);
    const firstBlockScale = useTransform(scrollY, [0, blockHeight * 0.7], [1, 0.95]);
    const secondBlockOpacity = useTransform(scrollY, [blockHeight * 0.3, blockHeight], [0, 1]);
    const secondBlockY = useTransform(scrollY, [blockHeight * 0.3, blockHeight], [100, 0]);

    return (
      <div ref={containerRef}>
        <motion.div
          style={{
            minHeight: '100vh',
            opacity: firstBlockOpacity,
            scale: firstBlockScale,
            pointerEvents: 'auto',
          }}
          className="flex justify-center flex-1 p-8"
        >
          <div className="flex justify-center text-center flex-col" style={{ position: 'relative' }}>
            <h1
              className="text-white font-extrabold"
              style={{ fontSize: '350px', letterSpacing: '0.1em', color: '#fff', textShadow: '0 4px 4px rgba(0,0,0,0.25)', lineHeight: 1, zIndex: 1, position: 'relative' }}
            >Mirai</h1>
            <img 
              src={dogImg} 
              alt="dog" 
              style={{ position: 'absolute', left: '48%', top: '55%', transform: 'translate(-50%, -50%)', zIndex: 2, width: '600px', pointerEvents: 'none' }}
            />
            <p className="text-white font-bold"
              style={{ fontSize: '24px', color: '#fff', lineHeight: 1, width: '525px', margin: '0 auto' }}
            >Добро пожаловать в MIRAI - ваш надежный сервис для заботы о домашних питомцах.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '80px', gap: '12px' }}>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Mouse size={32} color="#fff" />
              </motion.div>
              <span style={{ color: '#fff', fontSize: '16px', fontWeight: 300 }}>прокрути</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={secondBlockRef}
          className="flex flex-col"
          style={{
            width: '100%',
            minHeight: '100vh',
            background: '#fff',
            margin: 0,
            padding: 0,
            position: 'relative',
            borderRadius: '25px',
            opacity: secondBlockOpacity,
            y: secondBlockY,
            pointerEvents: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="text-white font-extrabold font-shoebox"
            style={{ fontSize: '96px', color: '#487CC2', textShadow: '0 4px 4px rgba(0,0,0,0.25)', zIndex: 1, position: 'relative', marginBottom: 0 }}>
              Наш смысл
            </h2>
            <p className="font-bold"
                style={{ fontSize: '24px', margin: '0 auto', marginTop: 0 }}
              >Поймите почему стоит использовать этот сервис!</p>
              <Button 
                text="Подробнее"
                color="#ffffff"
                circleColor="#000000"
                backgroundColor="#000000"
                style={{
                  width: '200px',
                  height: '40px',
                  fontSize: '16px',
                  marginTop: '30px'
                }}
              />
          </div>
        </motion.div>
      </div>
    )
  }
  
  export default MainMirai