import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Music, MapPin, QrCode, MessageCircle, Gift, Clock, Camera, Heart, Bell, Sparkles, Compass, Stars, Wand2, Hourglass, Rabbit, Map, Navigation, Spade, Club, Diamond, Cat, Smile, Coins, Gem, Crown, Coffee, CheckCircle2, Shirt } from 'lucide-react';

const TARGET_DATE = new Date("March 28, 2026 19:00:00").getTime();

const BG_IMAGES = [
  'https://i.pinimg.com/1200x/3e/b1/f3/3eb1f3e02c7b2d585a083b9f35f76ce7.jpg',
  'https://wallpapers.com/images/high/alice-in-wonderland-through-the-gate-ay05ilc2pialrumj.webp',
  'https://i.pinimg.com/1200x/e9/c8/1f/e9c81f7808dd179a661f2c0af2ac27ec.jpg',
  'https://i.pinimg.com/736x/d3/6b/d2/d36bd202905015bafc9bb01182bee389.jpg',
  'https://i.pinimg.com/736x/8a/01/08/8a0108a45f26f517683351fd81d5447b.jpg',
  'https://wallpapers.com/images/high/alice-in-wonderland-pictures-q7nl9iyto49a9u91.webp',
  'https://media.pixverse.ai/pixverse%2Fi2i%2Fori%2Fd49b4ade-db2a-4709-a235-b23c48dd2e41.jpg',
  'https://wallpapers.com/images/high/alice-in-wonderland-pictures-fkhpjjx2djz9ywbk.webp'
];

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Get guest name, message and VIP status from URL parameters 'n', 'm' and 'vip'
  const [guestName, setGuestName] = useState('Invitado');
  const [guestMessage, setGuestMessage] = useState('');
  const [isVip, setIsVip] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('n');
    const message = params.get('m');
    const vip = params.get('vip');
    if (name) {
      setGuestName(name);
    }
    if (message) {
      setGuestMessage(message);
    }
    if (vip === 'true') {
      setIsVip(true);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (hasEntered) {
      const bgTimer = setInterval(() => {
        setBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
      }, 7000);
      return () => clearInterval(bgTimer);
    }
  }, [hasEntered]);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
      setIsMusicPlaying(true);
    }

    setHasEntered(true);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="relative min-h-screen">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://fine.sunproxy.net/file/ZUNSd3NhdWdtQU1UWTRWUit0anVuVEdxT0w5SjE0VEh4d1QwV3pFVEcrL3JWVmxTODdEdkpVa1VTNHI0RUVRT2tiNGdPRWhkNXFKdC9YQlZhNXNiYlcxbE1UdURoeUV3NHA2N3p3RFFOcTQ9/Danny_Elfman_-_Alice_in_Wonderland_Expanded_Score_44._Alice_s_Theme_Alt_(SkySound.cc).mp3"
      />

      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[2000] flex flex-col items-center justify-start pt-12 md:pt-20 cursor-pointer overflow-hidden bg-black"
            onClick={handleEnter}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <iframe
                className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2"
                src="https://www.youtube.com/embed/KSympIjCPo4?autoplay=1&mute=1&loop=1&playlist=KSympIjCPo4&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                allow="autoplay; encrypted-media"
                frameBorder="0"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 z-10" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative z-20 text-center px-4 max-w-lg mx-auto"
            >
              <motion.p 
                className="font-cursive text-3xl md:text-4xl text-oro-brillante mb-[-10px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Sparkles className="w-6 h-6 animate-pulse" />
                {guestName === 'Invitado' ? '¡Hola!' : `¡Hola, ${guestName}!`}
                <Sparkles className="w-6 h-6 animate-pulse" />
              </motion.p>
              <motion.h1 
                className="font-arizonia text-5xl md:text-7xl nombre-intro mb-2 py-2 leading-normal overflow-visible flex items-center justify-center gap-4"
                animate={{ 
                  scale: [1, 1.01, 1],
                  filter: [
                    "drop-shadow(0 0 15px rgba(255, 223, 0, 0.4))", 
                    "drop-shadow(0 0 30px rgba(255, 223, 0, 0.7))", 
                    "drop-shadow(0 0 15px rgba(255, 223, 0, 0.4))"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Crown className={`w-8 h-8 md:w-12 md:h-12 ${isVip ? 'text-oro-puro animate-bounce' : 'text-oro'} drop-shadow-lg`} />
                {guestName}
                <Crown className={`w-8 h-8 md:w-12 md:h-12 ${isVip ? 'text-oro-puro animate-bounce' : 'text-oro'} drop-shadow-lg`} />
              </motion.h1>

              <div className="p-6 md:p-8 border-2 border-oro rounded-[40px] bg-black/0 shadow-[0_0_30px_rgba(212,175,55,0.2),0_10px_40px_rgba(0,0,0,0.5)]">
                <p className="font-cursive text-2xl md:text-3xl text-white mb-6 leading-relaxed">
                  {guestName === 'Invitado' 
                    ? 'En este reino, los sueños son la única realidad. Su Majestad la Reina les invita a cruzar el espejo para vivir un día lleno de maravillas. No miren el reloj, el tiempo aquí es un capricho. Yenlimar los espera en su trono de ilusiones. ¡Hagan su entrada triunfal!'
                    : `Querido(a) ${guestName}, en este reino los sueños son la única realidad. Su Majestad la Reina te invita a cruzar el espejo para vivir un día lleno de maravillas. No mires el reloj, el tiempo aquí es un capricho. Yenlimar te espera en su trono de ilusiones. ¡Haz tu entrada triunfal!`
                  }
                </p>
                
                <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto animate-[palpito_3s_ease-in-out_infinite,floatKey_6s_ease-in-out_infinite] opacity-100">
                  <Stars className="absolute -top-4 -left-4 w-8 h-8 text-oro-brillante animate-spin-slow" />
                  <Wand2 className="absolute -bottom-4 -right-4 w-8 h-8 text-oro-brillante animate-bounce" />
                  <GoldKeySVG />
                </div>
                <p className="font-cursive text-2xl md:text-3xl text-oro-brillante mt-2 animate-pulse">
                  {guestName === 'Invitado' ? '¡Toca aquí y despierta la magia!' : `¡Toca aquí, ${guestName}, y despierta la magia!`}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${hasEntered ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Carousel */}
        <div className="fixed inset-0 z-0">
          {BG_IMAGES.map((img, i) => (
            <div
              key={`bg-${i}`}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ${i === bgIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Ambient Effects */}
        <div className="neblina z-[40]" />
        <MagicRain />
        <ParallaxForest />
        <CheshireCat />

        {/* Audio Control */}
        <button
          onClick={toggleMusic}
          className="fixed bottom-5 right-5 z-[1500] w-12 h-12 rounded-full bg-black/50 border border-oro text-oro flex items-center justify-center hover:scale-110 transition-transform"
        >
          {isMusicPlaying ? <Music size={24} /> : <Music size={24} className="opacity-50" />}
        </button>

        {/* Content Scroll */}
        <main className="relative z-10 w-full pt-20 pb-32 px-4 flex flex-col items-center gap-16">
          <section className="text-center">
            {guestName !== 'Invitado' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={`mb-8 p-6 border ${isVip ? 'border-oro-puro shadow-[0_0_20px_rgba(255,223,0,0.4)]' : 'border-oro/30'} rounded-2xl bg-black/40 backdrop-blur-sm max-w-md mx-auto relative overflow-hidden`}
              >
                {isVip && (
                  <div className="absolute top-0 right-0 p-1 flex flex-col items-end">
                    <Crown className="w-4 h-4 text-oro-puro animate-pulse" />
                    <span className="text-[10px] text-oro-puro font-bold tracking-widest uppercase">VIP</span>
                  </div>
                )}
                <p className="font-cursive text-2xl md:text-3xl text-oro-brillante mb-2">
                  ¡Bienvenido a mi mundo, {guestName}!
                </p>
                {guestMessage && (
                  <p className="font-sans text-lg text-white/80 italic">
                    "{guestMessage}"
                  </p>
                )}
              </motion.div>
            )}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-arizonia text-5xl md:text-7xl text-oro block mb-8 py-2 overflow-visible"
            >
              Mis 15 Años
            </motion.span>
            
            <div className="relative w-72 h-72 mx-auto mb-8 animate-[flotar_4s_ease-in-out_infinite]">
              <div className="w-full h-full rounded-full oro-espejo p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-black border-4 border-[#1a1a1a] flex justify-center items-center">
                  <img 
                    src="https://lh3.googleusercontent.com/u/0/d/11M9GwFjE367AdhOjdlGagSZ4OHiLALqL=w1000-h1000-iv1" 
                    alt="Yenlimar" 
                    className="w-full h-full object-cover scale-[2.0] object-[center_28%] brightness-105 contrast-115 saturate-[1.1]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-arizonia text-4xl md:text-5xl tracking-[10px] text-oro"
            >
              Yenlimar Karina
            </motion.div>
          </section>

          <Card title="Un Viaje Inesperado">
            <div className="flex justify-center mb-6 gap-6">
              <Compass className="text-oro animate-[spin_10s_linear_infinite]" size={32} />
              <Wand2 className="text-oro animate-pulse" size={32} />
              <Stars className="text-oro animate-pulse" size={32} />
            </div>
            <p className="font-cursive text-3xl md:text-4xl text-oro-brillante leading-tight">
              {guestName === 'Invitado'
                ? 'Has llegado a un mundo mágico lleno de aventuras y sueños por descubrir... Te invito a viajar conmigo al país de las maravillas y celebrar mis 15 años en un día lleno de magia donde nada es lo que parece y todo es posible.'
                : `${guestName}, has llegado a un mundo mágico lleno de aventuras y sueños por descubrir... Te invito a viajar conmigo al país de las maravillas y celebrar mis 15 años en un día lleno de magia donde nada es lo que parece y todo es posible.`
              }
            </p>
            <div className="flex justify-center mt-6">
              <Sparkles className="text-oro/40 animate-pulse" size={24} />
            </div>
          </Card>

          <Card title="El Banquete Real">
            <div className="flex justify-center mb-6 gap-4">
              <Bell className="text-oro animate-bounce" size={28} />
              <Heart className="text-oro animate-pulse" size={28} fill="currentColor" />
              <Sparkles className="text-oro animate-pulse" size={28} />
            </div>
            <p className="font-cursive text-2xl md:text-3xl text-oro leading-relaxed mb-8">
              {guestName === 'Invitado'
                ? '¡Atención a todos los rincones del reino! La Reina de Corazones ha decretado que el tiempo se detendrá en la fecha indicada y La gala real dará inicio a la hora indicada. La ceremonia comenzará puntualmente; si te retrasas, podrías encontrar el jardín cerrado o a la Reina de muy mal humor. ¡El tiempo se agota! Te recomendamos llegar con antelación para cruzar el espejo con calma. Recuerda: una vez que la música empiece, la realidad quedará atrás para siempre.'
                : `¡Atención ${guestName}! La Reina de Corazones ha decretado que el tiempo se detendrá en la fecha indicada y La gala real dará inicio a la hora indicada. La ceremonia comenzará puntualmente; si te retrasas, podrías encontrar el jardín cerrado o a la Reina de muy mal humor. ¡El tiempo se agota! Te recomendamos llegar con antelación para cruzar el espejo con calma. Recuerda: una vez que la música empiece, la realidad quedará atrás para siempre.`
              }
            </p>
            <div className="border-y-2 border-oro py-6 my-6 bg-black/20 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-oro/5 to-transparent animate-shimmer" />
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Clock className="text-oro-brillante" size={24} />
                  <p className="font-decorative text-3xl md:text-4xl text-oro-brillante tracking-[4px]">28 de Marzo, 2026</p>
                </div>
                <p className="font-serif text-2xl md:text-3xl text-oro tracking-[6px]">7:00 PM</p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Music className="text-oro/60 animate-pulse" size={24} />
            </div>
          </Card>

          <Card title="Cuenta Regresiva">
            <div className="flex justify-center mb-6 gap-6">
              <Hourglass className="text-oro animate-spin-slow" size={32} />
              <Rabbit className="text-oro animate-bounce" size={32} />
              <Clock className="text-oro animate-pulse" size={32} />
            </div>
            <p className="font-cursive text-2xl md:text-3xl text-oro leading-relaxed mb-8">
              {guestName === 'Invitado'
                ? '¡Tic-tac, tic-tac! ¿Escuchas eso? Mira fijamente el contador... con cada segundo que pasa, el cristal del espejo se vuelve más delgado. Algo maravilloso está tomando forma al otro lado y está a punto de revelarse ante tus ojos. El Conejo Blanco ya ha comenzado a correr. Los segundos caen como pétalos en el jardín; cuando el contador llegue a cero, las puertas del reino se abrirán para ti.'
                : `¡Tic-tac, tic-tac, ${guestName}! ¿Escuchas eso? Mira fijamente el contador... con cada segundo que pasa, el cristal del espejo se vuelve más delgado. Algo maravilloso está tomando forma al otro lado y está a punto de revelarse ante tus ojos. El Conejo Blanco ya ha comenzado a correr. Los segundos caen como pétalos en el jardín; cuando el contador llegue a cero, las puertas del reino se abrirán para ti.`
              }
            </p>
            <div className="flex justify-center gap-3 md:gap-6 flex-nowrap">
              <TimerBox value={timeLeft.days} label="Días" />
              <TimerBox value={timeLeft.hours} label="Hrs" />
              <TimerBox value={timeLeft.minutes} label="Min" />
              <TimerBox value={timeLeft.seconds} label="Seg" />
            </div>
            <div className="flex justify-center mt-6">
              <Sparkles className="text-oro/40 animate-pulse" size={24} />
            </div>
          </Card>

          <Card title="Coordenadas del Jardín de Sueños">
            <div className="flex justify-center mb-6 gap-4">
              <Map className="text-oro animate-pulse" size={32} />
              <Navigation className="text-oro animate-bounce" size={32} />
            </div>
            <p className="font-cursive text-2xl md:text-3xl text-oro leading-relaxed mb-8">
              {guestName === 'Invitado'
                ? 'Para llegar a los mágicos XV, solo debes cruzar el espejo de la ciudad hacia el Sector El Manzano, y no mires el reloj.. Allí, entre los senderos de la Granja San Felice, encontrarás el jardín donde los sueños no terminan. Allí, entre brisa y misterio, encontrarás el lugar donde los sueños de Yenlimar cobran vida. ¡Sigue las señales y no pierdas el rastro de los naipes!'
                : `${guestName}, para llegar a los mágicos XV, solo debes cruzar el espejo de la ciudad hacia el Sector El Manzano, y no mires el reloj.. Allí, entre los senderos de la Granja San Felice, encontrarás el jardín donde los sueños no terminan. Allí, entre brisa y misterio, encontrarás el lugar donde los sueños de Yenlimar cobran vida. ¡Sigue las señales y no pierdas el rastro de los naipes!`
              }
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <Spade className="text-oro/60" size={24} />
              <Heart className="text-oro/60" size={24} fill="currentColor" />
              <Club className="text-oro/60" size={24} fill="currentColor" />
              <Diamond className="text-oro/60" size={24} fill="currentColor" />
            </div>
            <p className="font-serif text-oro-brillante tracking-[2px] mb-8">Granja San Felice, Sector El Manzano. Barquisimeto.</p>
            <MagicButton href="https://www.google.com/maps/search/?api=1&query=Granja+San+Felice+Barquisimeto" icon={<MapPin size={18} />}>
              Cómo llegar
            </MagicButton>
          </Card>

          <Card title="Etiqueta de la Corte Real">
            <div className="flex justify-center mb-6 gap-6">
              <Crown className="text-oro animate-pulse" size={32} />
              <Shirt className="text-oro animate-bounce" size={32} />
              <div className="flex gap-1">
                <Spade className="text-oro" size={16} />
                <Club className="text-oro" size={16} />
                <Diamond className="text-oro" size={16} />
                <Heart className="text-oro" size={16} />
              </div>
            </div>
            <p className="font-cursive text-2xl md:text-3xl text-oro leading-relaxed mb-8">
              {guestName === 'Invitado'
                ? '¡Atención a la etiqueta real! Su Majestad la Reina Yenlimar ha reservado el color azul celeste para su brillo exclusivo. Se les convoca a asistir en Semiformal, luciendo sus mejores galas para no desentonar en el jardín. ¡Recuerden: solo hay una Reina en este cuento y el color de su trono le pertenece solo a ella! 👑¡Luzcan piezas que cuenten una historia! 🎩 Cada invitado es una carta esencial en este juego real! 🃏'
                : `¡Atención ${guestName}! Su Majestad la Reina Yenlimar ha reservado el color azul celeste para su brillo exclusivo. Se te convoca a asistir en Semiformal, luciendo tus mejores galas para no desentonar en el jardín. ¡Recuerda: solo hay una Reina en este cuento y el color de su trono le pertenece solo a ella! 👑¡Luce piezas que cuenten una historia! 🎩 ¡Eres una carta esencial en este juego real! 🃏`
              }
            </p>
            <div className="font-serif text-oro border-2 border-oro rounded-2xl p-4 bg-black/10 text-center">
              <p className="text-sm tracking-[3px] uppercase mb-2">Dress Code: Semiformal</p>
              <p className="text-xs opacity-70 italic">Nota: Reservado el color Azul Celeste para la Quinceañera</p>
            </div>
            <div className="flex justify-center mt-6">
              <Sparkles className="text-oro/40 animate-pulse" size={24} />
            </div>
          </Card>

          <Card title="Galería Eterna">
            <div className="flex justify-center mb-6 gap-6">
              <Cat className="text-oro animate-pulse" size={32} />
              <Camera className="text-oro animate-bounce" size={32} />
              <Smile className="text-oro animate-pulse" size={32} />
            </div>
            <p className="font-cursive text-2xl md:text-3xl text-oro leading-relaxed mb-8">
              {guestName === 'Invitado'
                ? 'Como la sonrisa del Gato de Cheshire, hay momentos que se quedan grabados aunque el tiempo pase. ¡Ayúdanos a que la magia de los XV de Yenlimar nunca se desvanezca! Captura cada destello, cada baile y cada risa en este jardín de sueños y deja tu huella en nuestra galería eterna. ✨¡prometemos que ninguna foto será demasiado curiosa!'
                : `${guestName}, como la sonrisa del Gato de Cheshire, hay momentos que se quedan grabados aunque el tiempo pase. ¡Ayúdanos a que la magia de los XV de Yenlimar nunca se desvanezca! Captura cada destello, cada baile y cada risa en este jardín de sueños y deja tu huella en nuestra galería eterna. ✨¡prometemos que ninguna foto será demasiado curiosa!`
              }
            </p>
            <div className="w-44 h-44 mx-auto bg-white/95 p-4 rounded-2xl border-4 border-oro shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center mb-6">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://photos.app.goo.gl/rB9wpy4Z6P2YtKzs5" alt="QR" />
            </div>
            <p className="font-serif text-xs text-oro tracking-[2px] mb-6">ESCANEAME PARA SUBIR TUS FOTOS</p>
            <MagicButton href="https://photos.app.goo.gl/rB9wpy4Z6P2YtKzs5" icon={<Camera size={18} />}>
              Ver Álbum Digital
            </MagicButton>
            <div className="flex justify-center mt-6">
              <Sparkles className="text-oro/40 animate-pulse" size={24} />
            </div>
          </Card>

          <Card title="Cofre Real">
            <div className="flex justify-center mb-6 gap-6">
              <Crown className="text-oro animate-pulse" size={32} />
              <Gem className="text-oro animate-bounce" size={32} />
              <Coins className="text-oro animate-pulse" size={32} />
            </div>
            <p className="font-cursive text-2xl md:text-3xl text-oro leading-relaxed mb-8">
              {guestName === 'Invitado'
                ? 'Tu compañía es el tesoro más valioso de este reino. No necesitamos oro ni diamantes, solo tu sonrisa en nuestra mesa! Si nace de tu corazón hacerme un presente, te agradecería que fuera en metálico; así podría recolectar el \'polvo de hadas\' necesario para seguir construyendo mis sueños y explorando mundos increíbles.. ¡Tu amor es nuestro ingrediente secreto! ¡Gracias por ser parte de esta historia! ✨'
                : `${guestName}, tu compañía es el tesoro más valioso de este reino. No necesitamos oro ni diamantes, solo tu sonrisa en nuestra mesa! Si nace de tu corazón hacerme un presente, te agradecería que fuera en metálico; así podría recolectar el 'polvo de hadas' necesario para seguir construyendo mis sueños y explorando mundos increíbles.. ¡Tu amor es nuestro ingrediente secreto! ¡Gracias por ser parte de esta historia! ✨`
              }
            </p>
            <div className="font-serif text-oro border-2 border-oro rounded-2xl p-4 bg-black/10">
              <p className="text-sm tracking-[3px] uppercase flex items-center justify-center gap-2">
                <Gift size={18} /> Habrá un cofre en la recepción
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <Sparkles className="text-oro/40 animate-pulse" size={24} />
            </div>
          </Card>

          <Card title="Confirmación">
            <div className="flex justify-center mb-6 gap-6">
              <Coffee className="text-oro animate-pulse" size={32} />
              <Rabbit className="text-oro animate-bounce" size={32} />
              <Clock className="text-oro animate-spin-slow" size={32} />
            </div>
            <p className="font-cursive text-2xl md:text-3xl text-oro leading-relaxed mb-8">
              {guestName === 'Invitado'
                ? 'Para entrar al País de las Maravillas, primero debes decir \'presente\'. El Sombrerero está reservando las mejores tazas para los invitados y El Conejo Blanco necesita saber si contaré con tu presencia . Confirma tu lugar en el jardín de Yenlimar antes de que el reloj marque la hora final. Tu confirmación es el último ingrediente para que la magia sea perfecta. ¿Te veremos al otro lado del espejo?'
                : `${guestName}, para entrar al País de las Maravillas, primero debes decir 'presente'. El Sombrerero está reservando las mejores tazas para los invitados y El Conejo Blanco necesita saber si contaré con tu presencia . Confirma tu lugar en el jardín de Yenlimar antes de que el reloj marque la hora final. Tu confirmación es el último ingrediente para que la magia sea perfecta. ¿Te veremos al otro lado del espejo?`
              }
            </p>
            <MagicButton href={`https://wa.me/584127620349?text=%C2%A1Hola!%20Soy%20${encodeURIComponent(guestName)}.%20Mi%20curiosidad%20no%20tiene%20l%C3%ADmites%20y%20mi%20llave%20ya%20est%C3%A1%20lista%20para%20entrar%20en%20este%20mundo%20de%20maravillas.%20%C2%A1Confirmo%20que%20acompa%C3%B1ar%C3%A9%20a%20Yenlimar%20en%20sus%20m%C3%A1gicos%20XV!%20%F0%9F%97%9D`} icon={<MessageCircle size={18} />}>
              Cruzare el Espejo
            </MagicButton>
            <div className="flex justify-center mt-6">
              <CheckCircle2 className="text-oro/40 animate-pulse" size={24} />
            </div>
          </Card>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-center mt-12 mb-20"
          >
            <span className="font-cursive text-5xl md:text-6xl gradiente-oro block py-4 overflow-visible drop-shadow-[3px_3px_6px_rgba(0,0,0,1)]">
              {guestName === 'Invitado' ? 'Te Esperamos' : `Te Esperamos, ${guestName}`}
            </span>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const mouseX = (clientX - rect.left) / width - 0.5;
    const mouseY = (clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: "1200px",
      }}
      className="w-full max-w-[650px]"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative border-2 border-oro rounded-[40px] bg-black/5 backdrop-blur-sm p-8 md:p-12 text-center shadow-[0_0_15px_rgba(212,175,55,0.3),0_10px_35px_rgba(0,0,0,0.3)] group"
      >
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="relative z-10"
        >
          <h2 className="font-cursive text-5xl md:text-6xl gradiente-oro mb-6 py-4 leading-normal overflow-visible drop-shadow-[3px_3px_6px_rgba(0,0,0,1)]">
            {title}
          </h2>
          {children}
        </div>
        
        {/* Dynamic Shine Effect */}
        <motion.div
          style={{
            background: "radial-gradient(circle at center, rgba(255,224,102,0.15) 0%, transparent 70%)",
            x: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
          }}
          className="absolute inset-0 pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}

function TimerBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="relative border border-oro/50 rounded-xl p-2 md:p-4 bg-black/40 min-w-[70px] md:min-w-[110px] shadow-[0_0_20px_rgba(212,175,55,0.15),inset_0_0_15px_rgba(0,0,0,0.5)] overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-oro/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <span className="font-serif text-3xl md:text-5xl gradiente-oro block drop-shadow-[0_0_10px_rgba(212,175,55,0.6)] leading-tight animate-[palpito_3s_infinite]">
        {String(value).padStart(2, '0')}
      </span>
      <small className="text-oro/80 text-[9px] md:text-[12px] uppercase tracking-[2px] font-medium block mt-1">
        {label}
      </small>
    </div>
  );
}

function MagicButton({ href, children, icon }: { href: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fcf6ba] via-[#d4af37] to-[#fcf6ba] text-black px-10 py-4 rounded-full font-extrabold uppercase text-[13px] tracking-[2px] mt-6 shadow-[0_5px_15px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform"
    >
      {icon}
      {children}
    </a>
  );
}

function MagicRain() {
  const [particles, setParticles] = useState<{ id: string; left: number; size: number; duration: number; suit: string }[]>([]);
  const [sparkles, setSparkles] = useState<{ id: string; left: number; top: number }[]>([]);

  useEffect(() => {
    const suits = ['♥', '♦', '♠', '♣'];
    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev.slice(-15),
        {
          id: `${Date.now()}-${Math.random()}`,
          left: Math.random() * 100,
          size: 20 + Math.random() * 25,
          duration: 12 + Math.random() * 6,
          suit: suits[Math.floor(Math.random() * suits.length)]
        }
      ]);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => [
        ...prev.slice(-20),
        {
          id: `${Date.now()}-${Math.random()}`,
          left: Math.random() * 100,
          top: Math.random() * 100
        }
      ]);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[30] overflow-hidden">
      {particles.map(p => (
        <div
          key={`p-${p.id}`}
          className="suit-particle"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`
          }}
        >
          {p.suit}
        </div>
      ))}
      {sparkles.map(s => (
        <div
          key={`s-${s.id}`}
          className="sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`
          }}
        />
      ))}
    </div>
  );
}

function ParallaxForest() {
  const { scrollYProgress } = useScroll();
  
  const elements = [
    { icon: <Clock className="text-oro/60" />, size: 45, left: '10%', top: '15%', speed: 0.2 },
    { icon: <Coffee className="text-oro/50" />, size: 35, left: '85%', top: '25%', speed: -0.15 },
    { icon: <Spade className="text-oro/55" />, size: 30, left: '5%', top: '45%', speed: 0.3 },
    { icon: <Heart className="text-oro/50" />, size: 40, left: '90%', top: '55%', speed: -0.25 },
    { icon: <Rabbit className="text-oro/45" />, size: 55, left: '15%', top: '75%', speed: 0.1 },
    { icon: <Crown className="text-oro/55" />, size: 50, left: '80%', top: '85%', speed: 0.4 },
    { icon: <Smile className="text-oro/40" />, size: 65, left: '40%', top: '35%', speed: -0.1 },
    { icon: <Hourglass className="text-oro/50" />, size: 40, left: '60%', top: '65%', speed: 0.2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {elements.map((el, i) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, 1000 * el.speed]);
        return (
          <motion.div
            key={`forest-${i}`}
            style={{ y, left: el.left, top: el.top, position: 'absolute' }}
          >
            {React.cloneElement(el.icon as React.ReactElement, { size: el.size })}
          </motion.div>
        );
      })}
    </div>
  );
}

function CheshireCat() {
  return (
    <motion.div
      animate={{ 
        opacity: [0, 0, 0.4, 0.4, 0, 0],
        scale: [0.8, 0.8, 1, 1, 0.8, 0.8]
      }}
      transition={{ 
        duration: 10, 
        repeat: Infinity, 
        times: [0, 0.4, 0.5, 0.6, 0.7, 1],
        repeatDelay: 10 
      }}
      className="fixed bottom-10 left-10 pointer-events-none z-[50] text-oro/60"
    >
      <Smile size={120} strokeWidth={1} />
    </motion.div>
  );
}

function GoldKeySVG() {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]">
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066"/>
          <stop offset="25%" stopColor="#D4AF37"/>
          <stop offset="50%" stopColor="#AA771C"/>
          <stop offset="75%" stopColor="#D4AF37"/>
          <stop offset="100%" stopColor="#8A5A19"/>
        </linearGradient>
        <radialGradient id="metalShine" cx="40%" cy="40%" r="60%">
          <stop offset="0" stopColor="#fff" stopOpacity="0.8"/>
          <stop offset="0.6" stopColor="#fff" stopOpacity="0"/>
        </radialGradient>
        <filter id="keyGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <g filter="url(#keyGlow)" fill="url(#goldGradient)" stroke="#5c3a00" strokeWidth="1.5">
        <path d="M 50 120 C 50 70, 10 70, 10 120 C 10 170, 50 170, 50 120 Z" />
        <circle cx="30" cy="120" r="18" fill="#000" stroke="none"/>
        <path d="M 30 102 C 40 102, 45 110, 45 120 C 45 130, 40 138, 30 138 C 20 138, 15 130, 15 120 C 15 110, 20 102, 30 102 Z" fill="url(#goldGradient)" stroke="#5c3a00" strokeWidth="1"/>
        <circle cx="30" cy="120" r="6" fill="#000" stroke="none"/>
        <circle cx="16" cy="95" r="5" fill="url(#goldGradient)" />
        <circle cx="16" cy="145" r="5" fill="url(#goldGradient)" />
        <circle cx="44" cy="95" r="5" fill="url(#goldGradient)" />
        <circle cx="44" cy="145" r="5" fill="url(#goldGradient)" />
        <rect x="48" y="114" width="135" height="12" rx="4" />
        <rect x="70" y="108" width="8" height="24" rx="3" />
        <rect x="82" y="110" width="6" height="20" rx="2" />
        <rect x="135" y="110" width="8" height="20" rx="2" />
        <path d="M 155 126 L 155 170 L 170 170 L 170 155 L 180 155 L 180 170 L 195 170 L 195 126 Z" />
        <path d="M 170 126 L 170 145 L 180 145 L 180 126 Z" fill="#000" stroke="none"/>
        <path d="M 183 114 L 195 114 C 205 114, 210 120, 210 120 C 210 120, 205 126, 195 126 L 183 126 Z" />
      </g>

      <g fill="url(#metalShine)" opacity="0.6">
        <ellipse cx="30" cy="108" rx="8" ry="2" transform="rotate(-15 30 108)" />
        <rect x="55" y="116" width="120" height="3" rx="1" />
        <ellipse cx="162" cy="162" rx="4" ry="2" />
        <ellipse cx="187" cy="162" rx="4" ry="2" />
      </g>

      <g fill="#FFF" opacity="0.9">
        <path d="M 15 65 Q 25 65 25 55 Q 25 65 35 65 Q 25 65 25 75 Q 25 65 15 65" />
        <path d="M 200 80 Q 206 80 206 74 Q 206 80 212 80 Q 206 80 206 86 Q 206 80 200 80" />
        <path d="M 100 155 Q 105 155 105 150 Q 105 155 110 155 Q 105 155 105 160 Q 105 155 100 155" />
      </g>

      <rect className="animate-[sweep_3.6s_ease-in-out_infinite]" x="-40" y="106" width="320" height="28" rx="14" fill="url(#metalShine)" opacity="0.65" transform="rotate(-18 120 120)" />
    </svg>
  );
}
