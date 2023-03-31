import * as api from "./api.js";

const endpoints = {
  all: "/data/books?sortBy=_createdOn%20desc",
  create: "/data/books",
  details: "/data/books/",
  deleteById: "/data/books/",
  update: "/data/books/",
  like: '/data/likes'
};

export async function getAll() {
  return api.get(endpoints.all);
}

export async function create(data) {
  return api.post(endpoints.create, data);
}

export async function getById(id) {
  return api.get(endpoints.details + id);
}

export async function deleteById(id) {
  return api.del(endpoints.deleteById + id);
}

export async function update(id, data) {
  return api.put(endpoints.update + id, data);
}

export async function like(bookId){
  return api.post(endpoints.like, {bookId})
}

export async function getLikes(bookId){
  return api.get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

export async function getUserLike(bookId, userId){
  return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function userBooks(userId){
  return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
} 