import request from '../utils/request';

const url = 'https://hi-net-community-server.azurewebsites.net';

export function fetchPostById({ id }) {
  return request(`${url}/posts/post?postId=${id}`, {
    method: 'get',
  });
}

export async function fetchAllPost() {
  return request(`${url}/posts`, {
    method: 'get',
  });
}

export async function fetchCommentsById(id) {
  return request(`${url}/posts/comment?postId=${id}`, {
    method: 'get',
  });
}

export function fetchLikes({ id }) {
  return request(`${url}/posts/like?postId=${id}`, {
    method: 'get',
  });
}

export async function submitPost(params) {
  return request(`${url}/posts/add`, {
    method: 'POST',
    body: params,
  });
}
