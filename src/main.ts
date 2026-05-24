import type { Context } from '#core/loader';
import { wrapper } from '#modules/metadata-http/src/wrapper.js';

export async function register(context: Context) {
  context.router.on(
    'GET',
    '/ping',
    wrapper(async () => {
      return new Response(
        JSON.stringify({
          pong: true
        }),
        {
          status: 200,
          headers: {
            'content-type': 'application/json'
          }
        }
      );
    })
  );
}
