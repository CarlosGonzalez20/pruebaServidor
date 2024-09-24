// homeRoute.js
const homeRoute = (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bienvenido a la API</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
                header {
                    background-color: #4CAF50;
                    padding: 20px;
                    color: white;
                }
                h1 {
                    font-size: 3em;
                }
                p {
                    font-size: 1.2em;
                    margin: 20px;
                }
                footer {
                    background-color: #333;
                    color: white;
                    padding: 10px;
                    position: fixed;
                    width: 100%;
                    bottom: 0;
                }
                a {
                    color: #4CAF50;
                    text-decoration: none;
                    font-weight: bold;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Bienvenido a nuestra API</h1>
            </header>
            <p>Explora las funcionalidades de nuestra API. Aquí puedes gestionar productos, obtener información detallada y mucho más.</p>
            <p>Visita nuestras rutas disponibles:</p>
            <ul>
                <li><a href="/api/productos">Ver todos los productos</a></li>
                <li><a href="/api/productos/nuevo">Añadir un nuevo producto</a></li>
            </ul>
            <footer>
                <p>&copy; 2024 Nuestra API de Productos</p>
            </footer>
        </body>
        </html>
    `);
};

// Exporta la función para usarla en otros archivos
module.exports = homeRoute;
