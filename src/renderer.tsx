import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'Blackie Studio - Pet Art'}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        {/* FUENTES PREMIUM */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,700;1,400&family=Goudy+Bookletter+1911&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;700&family=Alex+Brush&family=Nunito:wght@400;600;800&display=swap" rel="stylesheet" />
        
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <script src="//unpkg.com/alpinejs" defer></script>
        <script>
          {`
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    brand: {
                      bg: '#FFFDF5', // Crema muy cálido y limpio
                      dark: '#1A1A1A', // Negro suave
                      sage: '#4A7C59', // Verde naturaleza
                      gold: '#E3B505', // Amarillo flor intenso
                      coral: '#FF6B6B', // Acento emocional
                      gray: '#F4F2EB', // Gris cálido para tarjetas
                    }
                  },
                  fontFamily: {
                    sans: ['Nunito', 'sans-serif'],
                    vollkorn: ['Vollkorn', 'serif'],
                    goudy: ['Goudy Bookletter 1911', 'serif'],
                    didot: ['Playfair Display', 'serif'],
                    gorgeous: ['Cinzel', 'serif'],
                    penna: ['Alex Brush', 'cursive'],
                  },
                  boxShadow: {
                    'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
                    'float': '0 20px 40px -10px rgba(74, 124, 89, 0.2)',
                  }
                }
              }
            }
          `}
        </script>
        <style>
          {`
            body { 
                font-family: 'Nunito', sans-serif; 
                background-color: #FFFDF5;
                color: #1A1A1A;
            }
            
            /* Filtros de Logo Mejorados (Menos destructivos para Blackie) */
            .filter-original { filter: contrast(105%) brightness(105%); }
            .filter-bw { filter: grayscale(100%) contrast(120%); }
            .filter-warm { filter: sepia(20%) saturate(130%) contrast(105%); }
            .filter-vibrant { filter: saturate(150%) contrast(110%); }
            .filter-soft { filter: brightness(110%) contrast(90%) saturate(80%); }

            .mask-tshirt {
                -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 0 L30 5 L70 5 L80 0 L100 20 L90 25 L90 100 L10 100 L10 25 L0 20 Z" fill="black"/></svg>');
                mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 0 L30 5 L70 5 L80 0 L100 20 L90 25 L90 100 L10 100 L10 25 L0 20 Z" fill="black"/></svg>');
            }
            [x-cloak] { display: none !important; }
          `}
        </style>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
})
