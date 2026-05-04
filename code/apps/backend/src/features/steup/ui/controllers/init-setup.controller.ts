import { type RequestHandler } from 'express';

/**
 * Initialize setup controller
 *
 * @param req Request
 * @param res Response
 */
export const initSetupController: RequestHandler = async (req, res, next) => {
    try {
        const host = req.get('host');
        const protocol = req.protocol; // Importante: detecta si es http o https
        const baseUrl = `${protocol}://${host}`;

        // El secreto que el instalador inyectó en el .env del VPS
        const webhookSecret = process.env.GITHUB_WEBHOOK_SECRET;

        const manifest = {
            name: `Flow Monitor (${host})`,
            url: baseUrl,
            hook_attributes: {
                url: `${baseUrl}/api/webhooks`,
                active: true,
                secret: webhookSecret, // <--- El secreto fluye aquí
            },
            redirect_url: `${baseUrl}/setup/callback`,
            public: false,
            default_permissions: {
                contents: "read",
                metadata: "read",
                pull_requests: "read",
                workflow_run: "read"
            },
            default_events: ["workflow_run", "pull_request"]
        };

        // Enviamos la página con el botón estilizado
        res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Flow Monitor Setup</title>
        <style>
          body { font-family: -apple-system, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f6f8fa; }
          .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center; max-width: 400px; }
          .btn-github { background: #24292e; color: white; padding: 12px 24px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 16px; text-decoration: none; display: inline-block; }
          .btn-github:hover { background: #1b1f23; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>🚀 Casi listo</h2>
          <p>Para terminar la instalación, necesitamos crear una GitHub App en tu cuenta para recibir las métricas.</p>
          
          <form action="https://github.com/settings/apps/new" method="post">
            <input type="hidden" name="manifest" value='${JSON.stringify(manifest)}'>
            <button type="submit" class="btn-github">
              Crear GitHub App automáticamente
            </button>
          </form>
          
          <p style="font-size: 12px; color: #666; margin-top: 20px;">
            Esto configurará automáticamente los permisos y el secreto de webhook generado por el instalador.
          </p>
        </div>
      </body>
    </html>
  `);
    } catch (error) {
        next(error);
    }
};
