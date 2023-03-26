import * as api from "./api.js";

const endpoints = {
  all: "/data/shoes?sortBy=_createdOn%20desc",
  create: "/data/shoes",
  details: "/data/shoes/",
  deleteById: "/data/shoes/",
  update: "/data/shoes/",
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
