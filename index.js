<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>⚡ TikTok Downloader HD - Descargar Videos de TikTok Sin Marca de Agua</title>
    <meta name="description" content="La mejor herramienta online y gratuita para descargar videos de TikTok en alta definición (HD) y formato MP4 sin marca de agua. ¡Rápido y compatible con iPhone y Android!">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
            scroll-behavior: smooth;
        }
        body {
            background: radial-gradient(circle, #1a1a2e 0%, #0f0c1b 100%);
            color: #ffffff;
            line-height: 1.6;
        }
        header {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-size: 22px;
            font-weight: 800;
            background: linear-gradient(45deg, #ff0050, #00f2fe);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        nav a {
            color: #b3b3b3;
            text-decoration: none;
            margin-left: 20px;
            font-size: 14px;
            transition: color 0.3s;
        }
        nav a:hover { color: #ff0050; }

        .hero-section {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 70vh;
            padding: 40px 20px;
            text-align: center;
        }
        .container {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 40px 30px;
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
            max-width: 550px;
            width: 100%;
            margin-bottom: 20px;
        }
        h1 {
            font-size: 36px;
            font-weight: 800;
            margin-bottom: 12px;
            background: linear-gradient(45deg, #ff0050, #00f2fe);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .hero-section p {
            color: #b3b3b3;
            font-size: 15px;
            margin-bottom: 30px;
            max-width: 500px;
        }
        .input-group { position: relative; margin-bottom: 20px; }
        input {
            width: 100%;
            padding: 18px 20px;
            border-radius: 14px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: #161224;
            color: white;
            font-size: 15px;
            outline: none;
            transition: all 0.3s ease;
        }
        input:focus {
            border-color: #ff0050;
            box-shadow: 0 0 15px rgba(255, 0, 80, 0.4);
        }
        button {
            background: linear-gradient(135deg, #ff0050 0%, #cc0044 100%);
            color: white;
            border: none;
            padding: 18px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 14px;
            cursor: pointer;
            width: 100%;
            box-shadow: 0 4px 15px rgba(255, 0, 80, 0.4);
            transition: all 0.3s ease;
        }
        button:hover {
            filter: brightness(1.2);
            box-shadow: 0 6px 20px rgba(255, 0, 80, 0.6);
        }
        .stars-badge {
            margin-top: 15px;
            font-size: 14px;
            color: #ffd700;
        }
        .stars-badge span { color: #b3b3b3; margin-left: 5px; }

        .loader {
            display: none;
            margin: 20px auto 0;
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255, 255, 255, 0.1);
            border-top-color: #00f2fe;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .result { margin-top: 30px; display: none; }
        .download-btn {
            background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
            text-decoration: none;
            display: block;
            padding: 16px;
            border-radius: 14px;
            color: #0f0c1b;
            font-weight: 600;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0, 242, 254, 0.4);
        }

        section {
            max-width: 900px;
            margin: 60px auto;
            padding: 0 20px;
        }
        h2 {
            font-size: 28px;
            text-align: center;
            margin-bottom: 40px;
            position: relative;
        }
        h2::after {
            content: '';
            display: block;
            width: 50px;
            height: 3px;
            background: #ff0050;
            margin: 10px auto 0;
            border-radius: 2px;
        }

        .steps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }
        .step-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 30px;
            border-radius: 16px;
            text-align: center;
        }
        .step-icon {
            font-size: 32px;
            margin-bottom: 15px;
            display: inline-block;
        }
        .step-card h3 { font-size: 18px; margin-bottom: 10px; }
        .step-card p { color: #b3b3b3; font-size: 14px; }

        .faq-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            margin-bottom: 15px;
            padding: 20px;
            cursor: pointer;
        }
        .faq-question {
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .faq-answer {
            color: #b3b3b3;
            font-size: 14px;
            margin-top: 10px;
            display: none;
        }

        .tools-grid, .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 20px;
        }
        .tool-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.04) 100%);
            border: 1px solid rgba(255,255,255,0.08);
            padding: 25px;
            border-radius: 16px;
            text-align: center;
            transition: 0.3s;
        }
        .tool-card:hover { transform: translateY(-5px); border-color: #00f2fe; }
        .tool-card h3 { font-size: 16px; margin-bottom: 8px; }
        .coming-soon { font-size: 11px; background: #00f2fe; color: #000; padding: 2px 8px; border-radius: 10px; font-weight: bold; }

        .blog-card {
            background: rgba(255,255,255,0.02);
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.05);
        }
        .blog-content { padding: 20px; }
        .blog-content h3 { font-size: 16px; margin-bottom: 10px; color: #fff; }
        .blog-content p { color: #b3b3b3; font-size: 13px; margin-bottom: 15px; }
        .blog-link { color: #ff0050; text-decoration: none; font-size: 13px; font-weight: 600; }

        .legal-notice {
            font-size: 12px;
            color: #666;
            text-align: center;
            max-width: 700px;
            margin: 40px auto;
            padding: 0 20px;
        }

        footer {
            background: #090712;
            padding: 40px 20px;
            text-align: center;
            border-top: 1px solid rgba(255,255,255,0.05);
            font-size: 13px;
            color: #666;
        }
        .footer-links { margin-bottom: 15px; }
        .footer-links a { color: #b3b3b3; text-decoration: none; margin: 0 10px; }
    </style>
</head>
<body>

    <header>
        <div class="logo">⚡ TTDownloader HD</div>
        <nav>
            <a href="#como-funciona">¿Cómo funciona?</a>
            <a href="#faqs">Preguntas Frecuentes</a>
            <a href="#herramientas">Herramientas</a>
            <a href="#blog">Blog</a>
        </nav>
    </header>

    <div class="hero-section">
        <div class="container">
            <h1>TikTok Downloader HD</h1>
            <p>La herramienta online definitiva para descargar cualquier video de TikTok en alta definición, formato MP4 y completamente libre de marcas de agua molestas.</p>
            
            <div class="input-group">
                <input type="text" id="tiktokUrl" placeholder="Pega el enlace de TikTok aquí..." />
            </div>
            <button onclick="processVideo()">⚡ Descargar Ahora</button>
            
            <div class="loader" id="loader"></div>

            <div id="resultSection" class="result">
                <a id="downloadLink" class="download-btn" href="#">🔥 Guardar Video Sin Marca</a>
            </div>
        </div>
        
        <div class="stars-badge">
            ⭐⭐⭐⭐⭐ <span>Más de 500,000 descargas exitosas</span>
        </div>
    </div>

    <section id="como-funciona">
        <h2>¿Cómo funciona?</h2>
        <div class="steps-grid">
            <div class="step-card">
                <span class="step-icon">🔗</span>
                <h3>1. Copia el enlace</h3>
                <p>Abre la app de TikTok, dale al botón de 'Compartir' en tu video favorito y selecciona 'Copiar enlace'.</p>
            </div>
            <div class="step-card">
                <span class="step-icon">📥</span>
                <h3>2. Pega en la web</h3>
                <p>Regresa aquí, pega el link guardado en nuestra caja de búsqueda superior y presiona el botón de descarga.</p>
            </div>
            <div class="step-card">
                <span class="step-icon">🔥</span>
                <h3>3. Descarga en HD</h3>
                <p>En un par de segundos tu video estará limpio de marcas de agua y listo para guardarse en tu galería.</p>
            </div>
        </div>
    </section>

    <section id="faqs">
        <h2>Preguntas Frecuentes (FAQ)</h2>
        <div class="faq-item" onclick="toggleFaq(this)">
            <div class="faq-question">¿Este servicio es 100% gratuito? <span>+</span></div>
            <div class="faq-answer">Sí, nuestra herramienta es y seguirá siendo totalmente gratis. Puedes descargar la cantidad de videos que desees sin límites.</div>
        </div>
        <div class="faq-item" onclick="toggleFaq(this)">
            <div class="faq-question">¿Necesito instalar alguna aplicación o extensión? <span>+</span></div>
            <div class="faq-answer">No, funciona completamente en línea desde tu navegador web preferido (Chrome, Safari, Brave, etc.), sin descargas sospechosas.</div>
        </div>
        <div class="faq-item" onclick="toggleFaq(this)">
            <div class="faq-question">¿Funciona en iPhone y dispositivos Android? <span>+</span></div>
            <div class="faq-answer">¡Por supuesto! Es totalmente compatible con iOS y Android. En celulares, forzará la descarga directamente a la memoria de tu dispositivo de manera fluida.</div>
        </div>
        <div class="faq-item" onclick="toggleFaq(this)">
            <div class="faq-question">¿Se puede usar desde una PC o Mac? <span>+</span></div>
            <div class="faq-answer">Sí, solo abre nuestro sitio desde tu computadora, pega el link y el archivo MP4 se guardará al instante en tu carpeta de descargas.</div>
        </div>
    </section>

    <section id="herramientas">
        <h2>Otras Herramientas Premium</h2>
        <div class="tools-grid">
            <div class="tool-card">
                <h3>📸 Instagram Downloader</h3>
                <p>Guarda Reels e imágenes en la más alta calidad.</p>
                <span class="coming-soon">Próximamente</span>
            </div>
            <div class="tool-card">
                <h3>🎥 YouTube Shorts Saver</h3>
                <p>Descarga videos cortos de YouTube en formato MP4.</p>
                <span class="coming-soon">Próximamente</span>
            </div>
            <div class="tool-card">
                <h3>🎵 Conversor MP4 a MP3</h3>
                <p>Extrae el audio de tus videos favoritos en segundos.</p>
                <span class="coming-soon">Próximamente</span>
            </div>
        </div>
    </section>

    <section id="blog">
        <h2>Artículos Relacionados & Consejos</h2>
        <div class="blog-grid">
            <div class="blog-card">
                <div class="blog-content">
                    <h3>Cómo guardar videos de TikTok en iPhone</h3>
                    <p>Una guía detallada paso a paso para usuarios de Apple que quieren descargar archivos directo a su app de Fotos de forma segura.</p>
                    <a href="#" class="blog-link">Leer artículo →</a>
                </div>
            </div>
            <div class="blog-card">
                <div class="blog-content">
                    <h3>Trucos de edición para creadores</h3>
                    <p>Descubre cómo reutilizar contenido sin marcas de agua para potenciar tu marca personal o tu negocio digital en redes sociales.</p>
                    <a href="#" class="blog-link">Leer artículo →</a>
                </div>
            </div>
        </div>
    </section>

    <p class="legal-notice">Aviso Legal: Respete los derechos de autor de los creadores. Esta herramienta fue diseñada únicamente para descargar contenido propio o materiales libres de derechos de autor con fines educativos y de respaldo personal.</p>

    <footer>
        <div class="footer-links">
            <a href="#">Política de Privacidad</a> | 
            <a href="#">Términos de Servicio</a> | 
            <a href="#">Contacto</a>
        </div>
        <p>&copy; 2026 TTDownloader HD. Todos los derechos reservados.</p>
    </footer>

    <script>
        function toggleFaq(element) {
            const answer = element.querySelector('.faq-answer');
            const span = element.querySelector('.faq-question span');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                span.textContent = '+';
            } else {
                answer.style.display = 'block';
                span.textContent = '-';
            }
        }

        async function processVideo() {
            const urlInput = document.getElementById('tiktokUrl').value;
            const loader = document.getElementById('loader');
            const resultSection = document.getElementById('resultSection');
            
            if(!urlInput) {
                alert('Por favor, ingresa un enlace válido.');
                return;
            }

            loader.style.display = 'block';
            resultSection.style.display = 'none';

            try {
                // REEMPLAZA ESTA URL CON TU ENLACE PROPIO DE RENDER ACTUALIZADO
                const response = await fetch('https://tiktok-downloader-api-0251.onrender.com/api/download', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ tiktokUrl: urlInput })
                });

                const data = await response.json();
                loader.style.display = 'none';

                if(data.success && data.videoUrl) {
                    const btn = document.getElementById('downloadLink');
                    btn.href = data.videoUrl;
                    resultSection.style.display = 'block';
                } else {
                    alert('No se pudo procesar el video. Inténtalo con otro link.');
                }
            } catch (error) {
                loader.style.display = 'none';
                alert('Error de conexión con el servidor.');
            }
        }
    </script>
</body>
</html>