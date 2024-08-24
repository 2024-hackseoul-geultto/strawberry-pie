import { http } from 'msw';
import type { UserInfo, CurrentUser } from '../types';
import { users } from './data';

const handlers = [
	http.get('/api/signup', (req, res, ctx) => {
    const { name, email, password, profileSrc } = req.body as UserInfo;
    if (!name || !email || !password) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'Name, email, and password are required',
        }),
      );
    } else {
      const result: CurrentUser = { name, email, password, id: new Date().getTime(), profileSrc };
      users.push(result);
      return res(
        ctx.status(200),
        ctx.json(result),
      );
    }
  }),

  http.get('/api/user', (req, res, ctx) => {
    const id = req.url.searchParams.get('id');
    const user = users.find((u) => u.id === Number(id));

    if (user) {
      return res(
        ctx.status(200),
        ctx.json(user),
      );
    }
    else {
      return res(
        ctx.status(404),
        ctx.json({ message: 'User not found' }),
      );
    }
  })

    
];

export { handlers };