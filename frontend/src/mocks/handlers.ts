import { http } from 'msw';
import type { UserInfo, CurrentUser } from '../types';
import { users } from './data';

const handlers = [
  http.get('/api/signup', (req, res, ctx) => {
    const { id, nickName, email, password, profileSrc } = req.body as UserInfo;
    if (!id || !nickName || !email || !password) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'Name, email, and password are required',
        }),
      );
    } else {
      const result: CurrentUser = { id, nickName, email, password, userId: new Date().getTime(), profileSrc };
      users.push(result);
      return res(ctx.status(200), ctx.json(result));
    }
  }),

  http.get('/api/user', (req, res, ctx) => {
    const userId = req.url.searchParams.get('userId');
    const user = users.find((u) => u.userId === Number(userId));

    if (user) {
      return res(ctx.status(200), ctx.json(user));
    } else {
      return res(ctx.status(404), ctx.json({ message: 'User not found' }));
    }
  }),
];

export { handlers };
