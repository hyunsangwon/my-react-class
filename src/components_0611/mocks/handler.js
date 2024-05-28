//msw는 백엔드 연동없이 가상 API를 연동해 테스트해볼 수 있다.
import { http, HttpResponse } from 'msw';

const todos = [{ todo: 'coding' }, { todo: 'work' }, { todo: 'jujitsu' }];

export const handlers = [
  // 할일 목록
  http.get('/todos', () => {
    return HttpResponse.json(todos);
  }),
];
