import { http, HttpResponse } from 'msw';

const todos = [{ todo: 'coding' }, { todo: 'work' }, { todo: 'jujitsu' }];

export const handlers = [
  // 할일 목록
  http.get('http://localhost:3000/todos', () => {
    return HttpResponse.json(todos);
  }),
];
