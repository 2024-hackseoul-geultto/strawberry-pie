import { http, HttpResponse } from 'msw';

import type { CurrentUser } from '../types';
import { users } from './data';

const handlers = [
  http.post('/api/signup', async ({ request }) => {
    const data = await request.json();
    const user: CurrentUser = { ...data.params, userId: new Date().getTime() };
    users.push(user);

    return HttpResponse.json(user);
  }),

  http.get('/api/user', (req, res, ctx) => {
    const userId = req.url.searchParams.get('userId');
    const user = users.find((u) => u.userId === Number(userId));

    if (user) {
      return HttpResponse.json(user);
    } else {
      return res(ctx.status(404), ctx.json({ message: 'User not found' }));
    }
  }),
];

export { handlers };
