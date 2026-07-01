const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Permitir conexiones desde tu página de Vercel
app.use(cors());
app.use(express.json());

// 1. Ruta principal para obtener los datos del video desde la API
app.post('/api/download', async (req, res) => {
    const { tiktokUrl } = req.body;

    if (!tiktokUrl) {
        return res.status(400).json({ error: 'Por favor, proporciona un enlace de TikTok.' });
    }

    try {
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

        const title = videoData.description || videoData.title || 'Video_TikTok';
        const cleanVideoUrl = videoData.video || videoData.download_url || (videoData.anchors ? videoData.anchors[0] : null);

        if (!cleanVideoUrl) {
            console.log('Respuesta de la API sin video:', videoData);
            return res.status(500).json({ error: 'La API no devolvió un enlace válido.' });
        }

        // Generamos un enlace interno de nuestro propio servidor que fuerza la descarga
        // Reemplaza 'tiktok-downloader-api-0251.onrender.com' si tu URL de Render llega a cambiar
        const proxyDownloadUrl = `https://tiktok-downloader-api-0251.onrender.com/api/proxy-download?url=${encodeURIComponent(cleanVideoUrl)}&title=${encodeURIComponent(title)}`;

        return res.json({
            success: true,
            title: title,
            videoUrl: proxyDownloadUrl // Le mandamos la URL que fuerza la descarga directa
        });

    } catch (error) {
        console.error('Error en la API:', error.message);
        return res.status(500).json({ error: 'Hubo un error al procesar el video.' });
    }
});

// 2. NUEVA RUTA: Fuerza al celular (Android/iPhone) a descargar el archivo en vez de reproducirlo
app.get('/api/proxy-download', async (req, res) => {
    const videoUrl = req.query.url;
    let videoTitle = req.query.title || 'video_sin_marca';

    if (!videoUrl) {
        return res.status(400).send('Falta la URL del video.');
    }

    try {
        // Limpiamos el título para evitar caracteres raros en el nombre del archivo
        videoTitle = videoTitle.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);

        const response = await axios({
            method: 'GET',
            url: videoUrl,
            responseType: 'stream'
        });

        // Estos encabezados obligan al navegador del celular a GUARDAR el archivo en la galería/descargas
        res.setHeader('Content-Disposition', `attachment; filename="${videoTitle}.mp4"`);
        res.setHeader('Content-Type', 'video/mp4');

        response.data.pipe(res);
    } catch (error) {
        console.error('Error en el proxy de descarga:', error.message);
        res.status(500).send('Error al descargar el archivo del video.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo gratis en el puerto ${PORT}`);
});