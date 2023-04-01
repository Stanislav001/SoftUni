import * as api from "./api.js";

const endpoints = {
  all: "/data/fruits?sortBy=_createdOn%20desc",
  create: "/data/fruits",
  details: "/data/fruits/",
  deleteById: "/data/fruits/",
  update: "/data/fruits/",
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

export async function searchItem(query){
  return api.get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
}