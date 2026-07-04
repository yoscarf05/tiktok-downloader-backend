const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/download', async (req, res) => {
    const { tiktokUrl } = req.body;
    if (!tiktokUrl) return res.status(400).json({ error: 'Por favor, proporciona un enlace.' });

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

        if (!cleanVideoUrl) return res.status(500).json({ error: 'No se obtuvo enlace válido.' });

        const proxyDownloadUrl = `https://tiktok-downloader-api-0251.onrender.com/api/proxy-download?url=${encodeURIComponent(cleanVideoUrl)}&title=${encodeURIComponent(title)}`;
        return res.json({ success: true, title: title, videoUrl: proxyDownloadUrl });
    } catch (error) {
        return res.status(500).json({ error: 'Error al procesar.' });
    }
});

app.get('/api/proxy-download', async (req, res) => {
    const videoUrl = req.query.url;
    let videoTitle = req.query.title || 'video_sin_marca';
    if (!videoUrl) return res.status(400).send('Falta la URL.');
    try {
        videoTitle = videoTitle.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
        const response = await axios({ method: 'GET', url: videoUrl, responseType: 'stream' });
        res.setHeader('Content-Disposition', `attachment; filename="${videoTitle}.mp4"`);
        res.setHeader('Content-Type', 'video/mp4');
        response.data.pipe(res);
    } catch (error) {
        res.status(500).send('Error al descargar.');
    }
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));