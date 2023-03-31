import * as api from "./api.js";

const endpoints = {
  all: "/data/posts?sortBy=_createdOn%20desc",
  create: "/data/posts",
  details: "/data/posts/",
  deleteById: "/data/posts/",
  update: "/data/posts/",
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
