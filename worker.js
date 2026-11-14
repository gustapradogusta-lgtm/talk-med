export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname !== "/api/health") {
      return new Response("Não encontrado", { status: 404 });
    }
    try {
      await env.DB.prepare("SELECT 1").first();
      return Response.json({ ok: true });
    } catch {
      return Response.json({ ok: false }, { status: 503 });
    }
  }
};
