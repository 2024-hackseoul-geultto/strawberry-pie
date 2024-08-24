import { http, HttpResponse } from 'msw';

import type { CurrentUser, VoteItem } from '../types';
import { users, voteList, voteChoiceList } from './data';

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

  http.post('/api/vote', async ({ request }) => {
    const vote = (await request.json()) as VoteItem;
    if (vote) voteList.push(vote);

    return HttpResponse.json(vote);
  }),

  http.get('/api/vote', async ({ request }) => {
    const voteId = await request.json();
    const vote = voteList.find((v) => v.id === Number(voteId));

    if (vote) return HttpResponse.json(vote);
  }),

  http.post('/api/vote/choice', async ({ request }) => {
    const id = (await request.json()) as number;
    const data = await request.json();
    const choiceList = data.params;
    voteChoiceList[id].push(choiceList);

    return HttpResponse.json(choiceList);
  }),

  http.get('/api/vote/choice', async ({ request }) => {
    const voteId = await request.json();
    const choiceList = voteChoiceList[voteId];

    if (choiceList) return HttpResponse.json(choiceList);
  }),
];

export { handlers };
