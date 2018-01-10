import request from '../utils/request';

const url = 'https://hi-net-community-server.azurewebsites.net';

export function fetchPostById({ id }) {
  return request(`${url}/posts/post?postId=${id}`, {
    method: 'get',
  });
}

export function fetchAllPost() {
  return request(`${url}/posts`, {
    method: 'get',
  });
}

export function fetchLikes({ id }) {
  return request(`${url}/posts/like?postId=${id}`, {
    method: 'get',
  });
}
