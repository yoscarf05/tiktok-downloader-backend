const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Permitir que tu página web se conecte al servidor
app.use(cors());
app.use(express.json());

// Ruta principal para procesar el enlace de TikTok
app.post('/api/download', async (req, res) => {
    const { tiktokUrl } = req.body;

    if (!tiktokUrl) {
        return res.status(400).json({ error: 'Por favor, proporciona un enlace de TikTok.' });
    }

    try {
        // Configuración EXACTA con los datos de tu captura de RapidAPI
        const options = {
            method: 'GET',
            url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/rich_response/index', 
            params: { url: tiktokUrl },
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com' 
            }
        };

        const response = await axios.request(options);
        const videoData = response.data; 

        // Revisamos la estructura que devuelve tu API en específico
        // Si viene dentro de un objeto, extraemos la URL limpia.
        const title = videoData.description || videoData.title || 'Video de TikTok';
        const cleanVideoUrl = videoData.video || videoData.download_url || (videoData.anchors ? videoData.anchors[0] : null);

        if (!cleanVideoUrl) {
            console.log('Respuesta recibida de la API:', videoData);
            return res.status(500).json({ error: 'La API no devolvió un enlace de video válido.' });
        }

        return res.json({
            success: true,
            title: title,
            videoUrl: cleanVideoUrl
        });

    } catch (error) {
        console.error('Error al procesar con la API:', error.message);
        return res.status(500).json({ error: 'Hubo un error al procesar el video. Inténtalo de nuevo.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo gratis localmente en http://localhost:${PORT}`);
});