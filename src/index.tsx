import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div class="font-sans text-[#36454F]">
      {/* Navigation */}
      <nav class="bg-[#E6DDC4] p-4 shadow-sm">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-[#8A9A5B] rounded-full flex items-center justify-center text-white font-bold">K</div>
            <span class="text-2xl font-bold tracking-tight text-[#8A9A5B]">Kora</span>
          </div>
          <div class="space-x-6 hidden md:block">
            <a href="#como-funciona" class="hover:text-[#8A9A5B] transition">Cómo Funciona</a>
            <a href="#ejemplos" class="hover:text-[#8A9A5B] transition">Galería</a>
            <a href="#precios" class="hover:text-[#8A9A5B] transition">Precios</a>
          </div>
          <button class="bg-[#8A9A5B] text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition shadow-md">
            Empezar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header class="bg-[#E6DDC4] py-20 px-4">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tu mascota,<br/>
              <span class="text-[#8A9A5B]">Arte Eterno</span>
            </h1>
            <p class="text-xl mb-8 opacity-80 max-w-lg mx-auto md:mx-0">
              Transformamos la foto de tu mejor amigo en una obra de arte única y la plasmamos en productos de alta calidad. Un homenaje para siempre.
            </p>
            <div class="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button class="bg-[#FF7F7F] text-white text-lg px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition shadow-lg transform hover:-translate-y-1">
                Crear mi Diseño Ahora
              </button>
              <button class="bg-white text-[#36454F] text-lg px-8 py-4 rounded-full font-bold border border-gray-200 hover:bg-gray-50 transition">
                Ver Ejemplos
              </button>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            {/* Placeholder for Hero Image - Simulating a transformation */}
            <div class="relative w-80 h-80 md:w-96 md:h-96">
              <div class="absolute inset-0 bg-white rounded-3xl shadow-2xl transform rotate-3 z-10 overflow-hidden flex items-center justify-center border-4 border-white">
                 <div class="text-center p-8 bg-gray-100 h-full w-full flex flex-col items-center justify-center text-gray-400">
                    <i class="fas fa-dog text-6xl mb-4"></i>
                    <span>Foto Original</span>
                 </div>
              </div>
              <div class="absolute inset-0 bg-[#8A9A5B] rounded-3xl shadow-2xl transform -rotate-3 z-0 translate-x-4 translate-y-4 flex items-center justify-center overflow-hidden">
                 <div class="h-full w-full flex flex-col items-center justify-center text-white opacity-90 p-8 border-4 border-white">
                    <i class="fas fa-paint-brush text-6xl mb-4"></i>
                    <span class="font-bold text-xl">Arte Kora</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Steps Section */}
      <section id="como-funciona" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-16">Tan simple como darles amor</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div class="p-6 rounded-2xl hover:bg-[#F9F7F2] transition">
              <div class="w-20 h-20 bg-[#E6DDC4] rounded-full flex items-center justify-center mx-auto mb-6 text-[#8A9A5B] text-3xl">
                <i class="fas fa-upload"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">1. Sube tu Foto</h3>
              <p class="opacity-70">No necesitas una foto profesional. Cualquier foto desde tu móvil sirve.</p>
            </div>
            <div class="p-6 rounded-2xl hover:bg-[#F9F7F2] transition">
              <div class="w-20 h-20 bg-[#E6DDC4] rounded-full flex items-center justify-center mx-auto mb-6 text-[#8A9A5B] text-3xl">
                <i class="fas fa-magic"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">2. Magia IA</h3>
              <p class="opacity-70">Nuestra tecnología transforma la imagen en una ilustración artística en segundos.</p>
            </div>
            <div class="p-6 rounded-2xl hover:bg-[#F9F7F2] transition">
              <div class="w-20 h-20 bg-[#E6DDC4] rounded-full flex items-center justify-center mx-auto mb-6 text-[#8A9A5B] text-3xl">
                <i class="fas fa-shirt"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">3. Recibe tu Tesoro</h3>
              <p class="opacity-70">Elige tu producto favorito y recíbelo en la puerta de tu casa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional CTA */}
      <section class="py-24 bg-[#8A9A5B] text-white text-center px-4">
        <div class="container mx-auto max-w-2xl">
          <h2 class="text-4xl font-bold mb-6">Porque ellos nunca se van del todo</h2>
          <p class="text-xl mb-10 opacity-90">
            Kora nació para honrar ese vínculo indestructible. Lleva su recuerdo siempre contigo.
          </p>
          <button class="bg-white text-[#8A9A5B] text-lg px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
            Empezar a Crear
          </button>
        </div>
      </section>
      
      {/* Footer */}
      <footer class="bg-[#36454F] text-white py-12 text-center md:text-left">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <span class="text-2xl font-bold tracking-tight text-[#E6DDC4]">Kora</span>
                <p class="mt-4 text-gray-400 text-sm">Arte y memoria para los que más amamos.</p>
            </div>
             <div>
                <h4 class="font-bold mb-4">Legal</h4>
                <ul class="text-sm text-gray-400 space-y-2">
                    <li><a href="#" class="hover:text-white">Términos</a></li>
                    <li><a href="#" class="hover:text-white">Privacidad</a></li>
                </ul>
            </div>
        </div>
      </footer>
    </div>
  )
})

export default app
