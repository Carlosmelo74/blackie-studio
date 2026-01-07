import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)
app.use('/static/*', serveStatic({ root: './public' }))

// 6 Logo Styles - Premium Memorial Pet Art (LOVING EYES - honoring their memory)
const logoStyles = [
    { 
        id: 'signature', 
        name: 'Signature', 
        subtitle: 'Estilo Oficial',
        desc: 'El logo clásico de Blackie Studio',
        icon: 'fa-star',
        color: '#E3B505',
        image: '/static/blackie_logo.png',
        rating: 10
    },
    { 
        id: 'watercolor', 
        name: 'Watercolor', 
        subtitle: 'Artistic Premium',
        desc: 'Acuarela elegante con ojos soñadores',
        icon: 'fa-droplet',
        color: '#4ECDC4',
        image: '/static/blackie_watercolor.jpg',
        rating: 10
    },
    { 
        id: 'kawaii', 
        name: 'Kawaii Pop', 
        subtitle: 'Cute & Loving',
        desc: 'Ojos brillantes con corazones',
        icon: 'fa-heart',
        color: '#FF6B9D',
        image: '/static/blackie_kawaii.jpg',
        rating: 9
    },
    { 
        id: 'bold', 
        name: 'Bold Modern', 
        subtitle: 'Designer Style',
        desc: 'Líneas bold, mirada amorosa',
        icon: 'fa-shapes',
        color: '#1A1A1A',
        image: '/static/blackie_bold.jpg',
        rating: 9
    },
    { 
        id: 'stencil', 
        name: 'Stencil Art', 
        subtitle: 'Peaceful',
        desc: 'Silueta serena, ojos cerrados',
        icon: 'fa-moon',
        color: '#4A7C59',
        image: '/static/blackie_stencil.jpg',
        rating: 8
    },
    { 
        id: 'monoline', 
        name: 'Mono-Line', 
        subtitle: 'Elegant Minimal',
        desc: 'Línea continua, expresión pacífica',
        icon: 'fa-pen-nib',
        color: '#6B4A7C',
        image: '/static/blackie_monoline.jpg',
        rating: 8
    }
]

// Product Categories with variants - PREMIUM COLLECTION
const productCategories = [
    {
        id: 'hoodies',
        name: 'Hoodies',
        icon: 'fa-shirt',
        mockupImage: '/static/mockup_grid1.jpg',
        products: [
            { id: 'hoodie-black', name: 'Negra', color: '#1A1A1A', price: 59.90 },
            { id: 'hoodie-gray', name: 'Gris', color: '#9CA3AF', price: 59.90 },
        ]
    },
    {
        id: 'tshirts',
        name: 'Camisetas',
        icon: 'fa-vest',
        mockupImage: '/static/mockup_grid1.jpg',
        products: [
            { id: 'tee-white', name: 'Blanca', color: '#FFFFFF', price: 34.90 },
            { id: 'tee-black', name: 'Negra', color: '#1A1A1A', price: 34.90 },
        ]
    },
    {
        id: 'sweatshirts',
        name: 'Sweatshirts',
        icon: 'fa-shirt',
        mockupImage: '/static/mockup_grid2.jpg',
        products: [
            { id: 'sweat-gray', name: 'Gris', color: '#D1D5DB', price: 49.90 },
            { id: 'sweat-black', name: 'Negra', color: '#1A1A1A', price: 49.90 },
        ]
    },
    {
        id: 'jackets',
        name: 'Jackets',
        icon: 'fa-vest',
        mockupImage: '/static/mockup_premium.jpg',
        products: [
            { id: 'denim-jacket', name: 'Denim', color: '#3B82F6', price: 89.90 },
            { id: 'bomber-jacket', name: 'Bomber', color: '#1A1A1A', price: 99.90 },
            { id: 'leather-jacket', name: 'Leather', color: '#1A1A1A', price: 149.90 },
        ]
    },
    {
        id: 'caps',
        name: 'Gorras',
        icon: 'fa-hat-cowboy',
        mockupImage: '/static/mockup_grid2.jpg',
        products: [
            { id: 'cap-black', name: 'Negra', color: '#1A1A1A', price: 29.90 },
        ]
    },
    {
        id: 'bags',
        name: 'Tote Bags',
        icon: 'fa-bag-shopping',
        mockupImage: '/static/mockup_grid2.jpg',
        products: [
            { id: 'tote-navy', name: 'Navy', color: '#1E3A5F', price: 29.90 },
            { id: 'tote-black', name: 'Negra', color: '#1A1A1A', price: 29.90 },
        ]
    },
    {
        id: 'patches',
        name: 'Parches',
        icon: 'fa-certificate',
        mockupImage: '/static/mockup_patches.jpg',
        products: [
            { id: 'patch-circle', name: 'Círculo', color: '#1A1A1A', price: 12.90 },
            { id: 'patch-square', name: 'Cuadrado', color: '#1A1A1A', price: 12.90 },
            { id: 'patch-hex', name: 'Hexágono', color: '#1A1A1A', price: 14.90 },
        ]
    },
    {
        id: 'shirts',
        name: 'Camisas',
        icon: 'fa-shirt',
        mockupImage: '/static/mockup_premium.jpg',
        products: [
            { id: 'shirt-blue', name: 'Azul', color: '#93C5FD', price: 54.90 },
            { id: 'shirt-white', name: 'Blanca', color: '#FFFFFF', price: 54.90 },
        ]
    }
]

// ==========================================
// LANDING PAGE
// ==========================================
app.get('/', (c) => {
  return c.render(
    <div class="flex flex-col min-h-screen bg-[#FFFDF5]">
      {/* Navbar */}
      <nav class="sticky top-0 z-50 bg-[#FFFDF5]/95 backdrop-blur border-b border-[#E3B505]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div class="flex items-center gap-2">
            <img src="/static/blackie_logo.png" alt="Blackie" class="h-10 w-auto" />
            <span class="text-xs bg-[#E3B505] text-white px-2 py-0.5 rounded-full font-bold">STUDIO</span>
          </div>
          <a href="/crear" class="bg-[#1A1A1A] text-white px-4 sm:px-6 py-2 rounded-full font-bold shadow-lg hover:bg-[#4A7C59] transition text-xs sm:text-sm flex items-center gap-2">
            <i class="fa-solid fa-wand-magic-sparkles"></i> Crear Logo
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header class="relative pt-8 sm:pt-12 pb-12 sm:pb-16 overflow-hidden px-4 sm:px-6">
        <div class="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#E3B505]/10 rounded-full blur-3xl -mr-20 -mt-20 -z-10"></div>

        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Text */}
            <div class="space-y-4 sm:space-y-6 text-center lg:text-left z-10 order-2 lg:order-1">
              <div class="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-3 py-1 rounded-full text-xs font-bold">
                <i class="fa-solid fa-heart text-[#E3B505]"></i> Arte Memorial Premium
              </div>
              
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1A1A1A]">
                Honra su memoria<br/>
                <span class="text-[#4A7C59]">con arte premium.</span>
              </h1>
              <p class="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Transformamos la foto de tu mascota en <strong>6 logos premium</strong> para recordarla con amor. Arte memorial en productos de alta calidad.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="/crear" class="bg-[#1A1A1A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-xl hover:bg-[#E3B505] hover:text-[#1A1A1A] transition flex items-center justify-center gap-2">
                  <i class="fa-solid fa-camera"></i> Crear Mi Logo
                </a>
              </div>
            </div>
            
            {/* Hero Image - WATERCOLOR as Main */}
            <div class="relative z-0 w-full max-w-sm mx-auto order-1 lg:order-2">
              {/* Main Watercolor logo - PREMIUM */}
              <div class="relative">
                <div class="bg-white rounded-3xl shadow-2xl overflow-hidden ring-4 ring-[#4ECDC4]">
                  <img src="/static/blackie_watercolor.jpg" alt="Watercolor Memorial Art" class="w-full aspect-square object-cover" />
                </div>
                
                {/* Floating product mockups */}
                <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center p-2 transform rotate-[-8deg] border-2 border-[#FF6B9D]">
                  <img src="/static/blackie_kawaii.jpg" class="w-full h-full object-cover rounded" />
                </div>
                <div class="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-xl shadow-xl flex items-center justify-center p-1 transform rotate-[12deg] border-2 border-[#1A1A1A]">
                  <img src="/static/blackie_bold.jpg" class="w-full h-full object-cover rounded" />
                </div>
                <div class="absolute top-1/2 -right-8 w-14 h-14 bg-[#E3B505] rounded-xl shadow-xl flex items-center justify-center transform rotate-[6deg]">
                  <i class="fa-solid fa-heart text-white text-xl"></i>
                </div>
              </div>
              
              {/* Badge */}
              <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#4A7C59] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                <i class="fa-solid fa-heart"></i> Arte Memorial Premium
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 6 Styles Preview */}
      <section class="py-12 sm:py-16 bg-white px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">6 Estilos Únicos</h2>
            <p class="text-gray-500">Cada foto genera 6 estilos únicos para honrar su memoria</p>
          </div>
          
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {logoStyles.map((style, i) => (
              <div key={style.id} class={`bg-[#FFFDF5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 ${i === 0 ? 'ring-2 ring-[#E3B505]' : ''}`}>
                <div class="relative">
                  <img src={style.image} alt={style.name} class="w-full aspect-square object-cover" />
                  {i === 0 && (
                    <div class="absolute top-2 right-2 bg-[#E3B505] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                      TOP
                    </div>
                  )}
                </div>
                <div class="p-3 text-center">
                  <div class="flex items-center justify-center gap-1 mb-1">
                    <i class={`fa-solid ${style.icon} text-sm`} style={`color: ${style.color}`}></i>
                    <span class="font-bold text-xs sm:text-sm">{style.name}</span>
                  </div>
                  <p class="text-[10px] text-gray-400">{style.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Mockups Gallery */}
      <section class="py-12 sm:py-16 bg-[#FFFDF5] px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">Colección Premium</h2>
            <p class="text-gray-500">Tu logo en productos de alta calidad</p>
          </div>
          
          {/* Main Mockup Images */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
              <img src="/static/mockup_grid1.jpg" alt="Blackie Collection" class="w-full" />
            </div>
            <div class="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
              <img src="/static/mockup_grid2.jpg" alt="Blackie Products" class="w-full" />
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
              <img src="/static/mockup_patches.jpg" alt="Blackie Patches" class="w-full" />
            </div>
            <div class="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
              <img src="/static/mockup_premium.jpg" alt="Blackie Premium" class="w-full" />
            </div>
          </div>
          
          {/* Product Categories Grid */}
          <div class="grid grid-cols-4 md:grid-cols-8 gap-3 mb-8">
            {productCategories.map((cat) => (
              <div key={cat.id} class="bg-white rounded-xl p-3 text-center shadow-md hover:shadow-lg transition cursor-pointer hover:ring-2 hover:ring-[#E3B505]">
                <i class={`fa-solid ${cat.icon} text-xl text-[#1A1A1A] mb-1`}></i>
                <p class="text-[10px] font-bold text-gray-600">{cat.name}</p>
                <p class="text-[8px] text-[#4A7C59] font-bold">${Math.min(...cat.products.map(p => p.price)).toFixed(0)}+</p>
              </div>
            ))}
          </div>
          
          <div class="text-center">
            <a href="/crear" class="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#E3B505] hover:text-[#1A1A1A] transition text-lg">
              <i class="fa-solid fa-wand-magic-sparkles"></i> Crear Mi Logo Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-[#1A1A1A] text-white py-8 mt-auto px-4">
        <div class="max-w-7xl mx-auto text-center">
          <img src="/static/blackie_logo.png" alt="Blackie Studio" class="h-12 mx-auto mb-2" />
          <p class="text-gray-400 text-xs">Arte memorial premium • Honrando su memoria con amor 🤍</p>
        </div>
      </footer>
    </div>
  )
})

// ==========================================
// CREATE PAGE - FULL FLOW
// ==========================================
app.get('/crear', (c) => {
    const stylesJSON = JSON.stringify(logoStyles)
    const categoriesJSON = JSON.stringify(productCategories)

    return c.render(
        <div class="min-h-screen flex flex-col bg-[#FFFDF5] text-[#1A1A1A]" 
             x-data={`{ 
                step: 1,
                imageLoaded: false,
                imageSrc: null,
                petName: '',
                petType: 'rabbit',
                generating: false,
                generationProgress: 0,
                
                // Logo selection
                generatedLogos: [],
                selectedLogo: null,
                
                // Product selection
                selectedCategory: null,
                selectedProduct: null,
                
                // Cart
                cart: [],
                showEditModal: false,
                
                styles: ${stylesJSON},
                categories: ${categoriesJSON},
                
                handleImageSelect(e) {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            this.imageSrc = event.target.result;
                            this.imageLoaded = true;
                        };
                        reader.readAsDataURL(file);
                    }
                },
                
                startGeneration() {
                    if (!this.petName.trim()) {
                        alert('Por favor ingresa el nombre');
                        return;
                    }
                    if (!this.imageLoaded) {
                        alert('Por favor sube una foto');
                        return;
                    }
                    
                    this.generating = true;
                    this.generationProgress = 0;
                    this.step = 2;
                    
                    const interval = setInterval(() => {
                        this.generationProgress += Math.random() * 12;
                        if (this.generationProgress >= 100) {
                            this.generationProgress = 100;
                            clearInterval(interval);
                            
                            this.generatedLogos = this.styles.map(s => ({...s, generated: true}));
                            
                            setTimeout(() => {
                                this.generating = false;
                                this.step = 3;
                            }, 500);
                        }
                    }, 350);
                },
                
                selectLogo(logoId) {
                    this.selectedLogo = logoId;
                    this.selectedCategory = null;
                    this.selectedProduct = null;
                },
                
                selectCategory(catId) {
                    this.selectedCategory = catId;
                    this.selectedProduct = null;
                },
                
                selectProduct(prodId) {
                    this.selectedProduct = prodId;
                },
                
                getSelectedLogo() {
                    return this.generatedLogos.find(l => l.id === this.selectedLogo);
                },
                
                getSelectedCategory() {
                    return this.categories.find(c => c.id === this.selectedCategory);
                },
                
                getSelectedProduct() {
                    const cat = this.getSelectedCategory();
                    return cat?.products.find(p => p.id === this.selectedProduct);
                },
                
                addToCart() {
                    const logo = this.getSelectedLogo();
                    const product = this.getSelectedProduct();
                    const category = this.getSelectedCategory();
                    
                    if (logo && product) {
                        this.cart.push({
                            logo,
                            product,
                            category: category.name,
                            name: this.petName,
                            price: product.price
                        });
                        this.step = 4;
                    }
                },
                
                continueShopping() {
                    this.selectedProduct = null;
                    this.selectedCategory = null;
                    this.step = 3;
                },
                
                getTotal() {
                    return this.cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
                },
                
                checkout() {
                    alert('Demo: En producción conecta con Stripe + Printify');
                },
                
                tryDifferentStyle() {
                    this.selectedLogo = null;
                    this.selectedCategory = null;
                    this.selectedProduct = null;
                }
             }`}>
            
            {/* Navbar */}
            <nav class="border-b border-[#E3B505]/20 py-3 sticky top-0 z-40 bg-[#FFFDF5]/95 backdrop-blur px-4">
                <div class="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="/" class="flex items-center gap-1 text-[#1A1A1A] hover:text-[#4A7C59] transition font-bold text-sm">
                        <i class="fa-solid fa-arrow-left"></i>
                    </a>
                    <img src="/static/blackie_logo.png" alt="Blackie" class="h-8" />
                    <div class="relative">
                        <button class="bg-[#1A1A1A] text-white w-9 h-9 rounded-full text-sm hover:bg-[#E3B505] transition">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </button>
                        <span x-show="cart.length > 0" class="absolute -top-1 -right-1 bg-[#FF6B6B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold" x-text="cart.length"></span>
                    </div>
                </div>
            </nav>

            {/* Progress */}
            <div class="bg-white border-b border-gray-100 py-3 px-4">
                <div class="max-w-2xl mx-auto">
                    <div class="flex items-center justify-between">
                        <template x-for="(s, i) in [{n:'Foto',i:'camera'},{n:'Generar',i:'wand-magic-sparkles'},{n:'Elegir',i:'palette'},{n:'Pagar',i:'credit-card'}]">
                            <div class="flex items-center">
                                <div class="flex flex-col items-center">
                                    <div class="w-9 h-9 rounded-full flex items-center justify-center transition-all text-sm"
                                         x-bind:class="step > i+1 ? 'bg-[#4A7C59] text-white' : step === i+1 ? 'bg-[#1A1A1A] text-white' : 'bg-gray-200 text-gray-400'">
                                        <i x-bind:class="'fa-solid fa-' + s.i"></i>
                                    </div>
                                    <span class="text-[10px] mt-1 font-bold" x-bind:class="step >= i+1 ? 'text-[#1A1A1A]' : 'text-gray-400'" x-text="s.n"></span>
                                </div>
                                <div x-show="i < 3" class="w-8 sm:w-16 h-0.5 mx-1 rounded" x-bind:class="step > i+1 ? 'bg-[#4A7C59]' : 'bg-gray-200'"></div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>

            <main class="flex-grow">
                
                {/* ========== STEP 1: UPLOAD ========== */}
                <div x-show="step === 1" class="max-w-4xl mx-auto px-4 py-6 sm:py-8">
                    <div class="text-center mb-6">
                        <h1 class="text-2xl sm:text-3xl font-bold mb-2">Sube la Foto</h1>
                        <p class="text-gray-500 text-sm">Generaremos 5 logos con ojos tiernos y expresivos</p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 items-start">
                        {/* Upload */}
                        <div class="bg-white rounded-2xl shadow-xl p-4 border-2 border-dashed border-gray-200 hover:border-[#1A1A1A] transition cursor-pointer"
                             x-on:click="$refs.fileInput.click()">
                            <input type="file" x-ref="fileInput" accept="image/*" class="hidden" x-on:change="handleImageSelect($event)" />
                            
                            <template x-if="!imageLoaded">
                                <div class="text-center py-10">
                                    <div class="w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <i class="fa-solid fa-camera text-2xl text-white"></i>
                                    </div>
                                    <h3 class="font-bold mb-1">Toca para subir</h3>
                                    <p class="text-gray-400 text-xs">PNG, JPG hasta 10MB</p>
                                </div>
                            </template>
                            
                            <template x-if="imageLoaded">
                                <div class="relative">
                                    <img x-bind:src="imageSrc" class="w-full aspect-square object-cover rounded-xl" />
                                    <div class="absolute bottom-2 left-2 right-2 bg-[#4A7C59] text-white rounded-lg p-2 text-center text-xs font-bold">
                                        <i class="fa-solid fa-check mr-1"></i> ¡Foto lista!
                                    </div>
                                </div>
                            </template>
                        </div>
                        
                        {/* Details */}
                        <div class="space-y-4">
                            <div class="bg-white rounded-xl shadow-lg p-4">
                                <label class="text-xs font-bold text-gray-400 uppercase mb-2 block">Nombre</label>
                                <input type="text" x-model="petName" placeholder="ej: Blackie, Luna..." 
                                       class="w-full text-xl font-bold border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[#1A1A1A] bg-transparent" />
                            </div>
                            
                            <div class="bg-white rounded-xl shadow-lg p-4">
                                <label class="text-xs font-bold text-gray-400 uppercase mb-3 block">Tipo de Mascota</label>
                                <div class="flex gap-2 flex-wrap">
                                    {['rabbit', 'dog', 'cat', 'other'].map((type) => (
                                        <button key={type}
                                                x-on:click={`petType = '${type}'`}
                                                x-bind:class={`petType === '${type}' ? 'bg-[#1A1A1A] text-white' : 'bg-gray-100 text-gray-600'`}
                                                class="px-3 py-1 rounded-full text-xs font-bold transition">
                                            {type === 'rabbit' ? '🐰 Conejo' : type === 'dog' ? '🐕 Perro' : type === 'cat' ? '🐱 Gato' : '🐾 Otro'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            {/* What you'll get */}
                            <div class="bg-[#1A1A1A] text-white rounded-xl p-4">
                                <h4 class="font-bold text-sm mb-3 flex items-center gap-2">
                                    <i class="fa-solid fa-gift text-[#E3B505]"></i> Recibirás:
                                </h4>
                                <div class="grid grid-cols-6 gap-1">
                                    {logoStyles.map((s) => (
                                        <div key={s.id} class="text-center">
                                            <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-1">
                                                <i class={`fa-solid ${s.icon} text-xs`} style={`color: ${s.color === '#1A1A1A' ? '#FFF' : s.color}`}></i>
                                            </div>
                                            <p class="text-[8px] text-gray-400">{s.name.split(' ')[0]}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <button x-on:click="startGeneration()" 
                                    x-bind:disabled="!imageLoaded || !petName.trim()"
                                    class="w-full bg-[#E3B505] text-[#1A1A1A] py-3 rounded-full font-bold shadow-xl hover:bg-[#1A1A1A] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                <i class="fa-solid fa-wand-magic-sparkles"></i>
                                Generar 6 Logos
                            </button>
                        </div>
                    </div>
                </div>

                {/* ========== STEP 2: GENERATING ========== */}
                <div x-show="step === 2" class="max-w-md mx-auto px-4 py-16 text-center">
                    <div class="relative w-32 h-32 mx-auto mb-6">
                        <div class="absolute inset-0 border-4 border-[#1A1A1A] rounded-full animate-spin" style="border-top-color: transparent;"></div>
                        <div class="absolute inset-4 border-4 border-[#E3B505] rounded-full animate-spin" style="animation-direction: reverse; border-bottom-color: transparent;"></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-4xl">🐰</span>
                        </div>
                    </div>
                    
                    <h2 class="text-2xl font-bold mb-2">Creando Arte...</h2>
                    <p class="text-gray-500 mb-6 text-sm">
                        Generando logos para <span class="font-bold text-[#1A1A1A]" x-text="petName"></span>
                    </p>
                    
                    <div class="bg-gray-200 rounded-full h-3 overflow-hidden max-w-xs mx-auto mb-4">
                        <div class="bg-[#1A1A1A] h-full rounded-full transition-all duration-300"
                             x-bind:style="'width: ' + generationProgress + '%'"></div>
                    </div>
                    
                    <div class="flex justify-center gap-2 flex-wrap">
                        <template x-for="(style, i) in styles">
                            <div class="flex items-center gap-1 bg-white rounded-full px-2 py-1 shadow-sm text-xs transition-all"
                                 x-bind:class="generationProgress > (i+1)*20 ? 'ring-2 ring-[#4A7C59]' : 'opacity-40'">
                                <i x-bind:class="'fa-solid ' + style.icon" x-bind:style="'color: ' + style.color"></i>
                                <span class="font-medium" x-text="style.name.split(' ')[0]"></span>
                            </div>
                        </template>
                    </div>
                </div>

                {/* ========== STEP 3: SELECT LOGO + MOCKUPS ========== */}
                <div x-show="step === 3" class="max-w-7xl mx-auto px-4 py-6">
                    
                    {/* PHASE 3A: Select Logo */}
                    <div x-show="!selectedLogo">
                        <div class="text-center mb-6">
                            <h1 class="text-2xl font-bold mb-1">¡Tus 6 Logos!</h1>
                            <p class="text-gray-500 text-sm">Elige tu favorito para <span class="font-bold" x-text="petName"></span></p>
                        </div>
                        
                        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                            <template x-for="logo in generatedLogos">
                                <div class="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-[1.02]"
                                     x-on:click="selectLogo(logo.id)">
                                    <div class="relative">
                                        <img x-bind:src="logo.image" x-bind:alt="logo.name" class="w-full aspect-square object-cover" />
                                        <div class="absolute top-2 left-2 bg-white/90 backdrop-blur rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1">
                                            <i x-bind:class="'fa-solid ' + logo.icon" x-bind:style="'color: ' + logo.color"></i>
                                            <span x-text="logo.name.split(' ')[0]"></span>
                                        </div>
                                    </div>
                                    <div class="p-3 text-center">
                                        <p class="font-bold text-sm" x-text="logo.name"></p>
                                        <p class="text-[10px] text-gray-400" x-text="logo.desc"></p>
                                        <button class="mt-2 bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[#4A7C59] transition">
                                            Elegir Este
                                        </button>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                    
                    {/* PHASE 3B: Select Product Category + Variant */}
                    <div x-show="selectedLogo">
                        <div class="grid lg:grid-cols-12 gap-6">
                            
                            {/* Selected Logo Preview */}
                            <div class="lg:col-span-4">
                                <div class="bg-white rounded-2xl shadow-xl p-4 sticky top-24">
                                    <div class="flex items-center justify-between mb-3">
                                        <h3 class="font-bold text-sm">Tu Logo</h3>
                                        <button x-on:click="tryDifferentStyle()" class="text-xs text-[#4A7C59] font-bold hover:underline">
                                            <i class="fa-solid fa-arrows-rotate mr-1"></i> Cambiar
                                        </button>
                                    </div>
                                    <template x-if="getSelectedLogo()">
                                        <div>
                                            <img x-bind:src="getSelectedLogo().image" class="w-full aspect-square object-cover rounded-xl mb-3" />
                                            <div class="text-center">
                                                <p class="font-bold" x-text="getSelectedLogo().name"></p>
                                                <p class="text-xs text-gray-400" x-text="'Para ' + petName"></p>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                            
                            {/* Product Categories */}
                            <div class="lg:col-span-8 space-y-6">
                                <div class="text-center lg:text-left">
                                    <h2 class="text-xl font-bold mb-1">Elige Producto</h2>
                                    <p class="text-gray-500 text-sm">Selecciona categoría y variante</p>
                                </div>
                                
                                {/* Category Selection */}
                                <div class="grid grid-cols-4 sm:grid-cols-8 gap-2">
                                    <template x-for="cat in categories">
                                        <button x-on:click="selectCategory(cat.id)"
                                                class="bg-white rounded-xl p-3 text-center shadow-md hover:shadow-lg transition"
                                                x-bind:class="selectedCategory === cat.id ? 'ring-2 ring-[#1A1A1A]' : ''">
                                            <i x-bind:class="'fa-solid ' + cat.icon + ' text-xl mb-1'" 
                                               x-bind:style="selectedCategory === cat.id ? 'color: #1A1A1A' : 'color: #9CA3AF'"></i>
                                            <p class="text-xs font-bold" x-text="cat.name"></p>
                                        </button>
                                    </template>
                                </div>
                                
                                {/* Product Variants */}
                                <div x-show="selectedCategory" class="bg-white rounded-2xl shadow-xl p-4">
                                    <h3 class="font-bold mb-4 flex items-center gap-2">
                                        <template x-if="getSelectedCategory()">
                                            <span>
                                                <i x-bind:class="'fa-solid ' + getSelectedCategory().icon + ' text-[#E3B505]'"></i>
                                                <span x-text="getSelectedCategory().name"></span>
                                            </span>
                                        </template>
                                    </h3>
                                    
                                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        <template x-for="prod in getSelectedCategory()?.products || []">
                                            <div x-on:click="selectProduct(prod.id)"
                                                 class="rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-lg"
                                                 x-bind:class="selectedProduct === prod.id ? 'ring-2 ring-[#4A7C59]' : 'border border-gray-200'">
                                                
                                                {/* Product Mockup */}
                                                <div class="aspect-square relative p-4 flex items-center justify-center"
                                                     x-bind:style="'background: ' + (prod.color === '#FFFFFF' ? '#F5F5F5' : prod.color + '20')">
                                                    
                                                    {/* T-Shirt Mockup */}
                                                    <template x-if="selectedCategory === 'tshirts'">
                                                        <div class="w-full h-full flex items-center justify-center">
                                                            <div class="relative w-20 h-24 rounded-lg shadow-md"
                                                                 x-bind:style="'background: ' + prod.color">
                                                                <template x-if="getSelectedLogo()">
                                                                    <img x-bind:src="getSelectedLogo().image" 
                                                                         class="w-10 h-10 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded" />
                                                                </template>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    
                                                    {/* Mug Mockup */}
                                                    <template x-if="selectedCategory === 'mugs'">
                                                        <div class="w-full h-full flex items-center justify-center">
                                                            <div class="relative w-14 h-12 rounded-lg shadow-md"
                                                                 x-bind:style="'background: ' + prod.color">
                                                                <div class="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-6 rounded-r-full"
                                                                     x-bind:style="'background: ' + prod.color + '; border: 2px solid ' + (prod.color === '#FFFFFF' ? '#E5E5E5' : prod.color)"></div>
                                                                <template x-if="getSelectedLogo()">
                                                                    <img x-bind:src="getSelectedLogo().image" 
                                                                         class="w-7 h-7 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
                                                                </template>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    
                                                    {/* Frame Mockup */}
                                                    <template x-if="selectedCategory === 'frames'">
                                                        <div class="w-full h-full flex items-center justify-center">
                                                            <div class="bg-white border-4 border-[#1A1A1A] p-1 shadow-lg"
                                                                 x-bind:class="prod.size === 'small' ? 'w-12 h-12' : prod.size === 'medium' ? 'w-16 h-16' : 'w-20 h-20'">
                                                                <template x-if="getSelectedLogo()">
                                                                    <img x-bind:src="getSelectedLogo().image" class="w-full h-full object-cover" />
                                                                </template>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    
                                                    {/* Tote Mockup */}
                                                    <template x-if="selectedCategory === 'bags'">
                                                        <div class="w-full h-full flex items-center justify-center">
                                                            <div class="relative w-16 h-20 rounded-b-lg shadow-md"
                                                                 x-bind:style="'background: ' + prod.color">
                                                                <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-6 border-4 rounded-full"
                                                                     x-bind:style="'border-color: ' + prod.color"></div>
                                                                <template x-if="getSelectedLogo()">
                                                                    <img x-bind:src="getSelectedLogo().image" 
                                                                         class="w-8 h-8 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded" />
                                                                </template>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    
                                                    {/* Check mark */}
                                                    <div x-show="selectedProduct === prod.id" 
                                                         class="absolute top-2 right-2 w-5 h-5 bg-[#4A7C59] rounded-full flex items-center justify-center">
                                                        <i class="fa-solid fa-check text-white text-[10px]"></i>
                                                    </div>
                                                </div>
                                                
                                                <div class="p-2 text-center bg-white">
                                                    <p class="font-bold text-xs" x-text="prod.name"></p>
                                                    <p class="text-[#4A7C59] font-bold text-sm" x-text="'$' + prod.price.toFixed(2)"></p>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                                
                                {/* Add to Cart */}
                                <button x-on:click="addToCart()"
                                        x-bind:disabled="!selectedProduct"
                                        class="w-full bg-[#1A1A1A] text-white py-3 rounded-full font-bold shadow-xl hover:bg-[#4A7C59] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                    <i class="fa-solid fa-cart-plus"></i>
                                    <span x-text="selectedProduct ? 'Agregar al Carrito - $' + (getSelectedProduct()?.price || 0).toFixed(2) : 'Selecciona un producto'"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ========== STEP 4: CHECKOUT ========== */}
                <div x-show="step === 4" class="max-w-lg mx-auto px-4 py-8">
                    <div class="text-center mb-6">
                        <div class="w-14 h-14 bg-[#4A7C59] rounded-full flex items-center justify-center mx-auto mb-3">
                            <i class="fa-solid fa-check text-xl text-white"></i>
                        </div>
                        <h1 class="text-2xl font-bold mb-1">¡Agregado!</h1>
                    </div>
                    
                    <div class="bg-white rounded-2xl shadow-xl p-4 mb-6">
                        <template x-for="(item, i) in cart" x-bind:key="i">
                            <div class="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                                <img x-bind:src="item.logo.image" class="w-12 h-12 rounded-lg object-cover" />
                                <div class="flex-grow">
                                    <p class="font-bold text-sm" x-text="item.category + ' - ' + item.product.name"></p>
                                    <p class="text-xs text-gray-400" x-text="item.logo.name + ' • ' + item.name"></p>
                                </div>
                                <span class="font-bold text-[#4A7C59]" x-text="'$' + item.price.toFixed(2)"></span>
                            </div>
                        </template>
                        
                        <div class="flex justify-between items-center pt-4 border-t-2 border-gray-200">
                            <span class="font-bold">Total</span>
                            <span class="text-xl font-bold text-[#4A7C59]" x-text="'$' + getTotal()"></span>
                        </div>
                    </div>
                    
                    <div class="space-y-3">
                        <button x-on:click="continueShopping()" class="w-full bg-white text-[#1A1A1A] py-3 rounded-full font-bold shadow-lg border-2 border-gray-200 hover:border-[#1A1A1A] transition flex items-center justify-center gap-2">
                            <i class="fa-solid fa-plus"></i> Agregar Más Productos
                        </button>
                        <button x-on:click="checkout()" class="w-full bg-[#1A1A1A] text-white py-3 rounded-full font-bold shadow-xl hover:bg-[#4A7C59] transition flex items-center justify-center gap-2">
                            <i class="fa-brands fa-stripe"></i> Pagar Ahora
                        </button>
                    </div>
                    
                    <p class="text-center text-xs text-gray-400 mt-4">
                        <i class="fa-solid fa-lock mr-1"></i> Pago seguro con Stripe
                    </p>
                </div>
                
            </main>

            <footer class="bg-[#1A1A1A] text-white py-4 mt-auto px-4">
                <div class="text-center text-xs text-gray-400">© 2026 Blackie Studio</div>
            </footer>
        </div>
    )
})

export default app
