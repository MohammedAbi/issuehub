import { api } from "../api/axios";

export const issueService = {
  getAll: () => api.get("/issues"),
  update: (id: string, data: unknown) => api.put(`/issues/${id}`, data),
  delete: (id: string) => api.delete(`/issues/${id}`),
};
