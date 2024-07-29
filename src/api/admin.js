import client from "./client";

const getProfile = () => client.get("/admin/profile", {});

const getPumpList = () => client.get("/pump/getPumpList", {});

const addPump = (name, location, coordinates) => {
  return client.post("/pump/addPump", { name, location, coordinates });
};

const addEmployeeToPump = (employeeEmail, pumpId) =>
  client.post("/pump/addEmployeeToPump", { employeeEmail, pumpId });

const addManagerToPump = (managerEmail, pumpId) =>
  client.post("/pump/addManagerToPump", { managerEmail, pumpId });

const removeEmployeeFromPump = (employeeEmail, pumpId) =>
  client.post("/pump/removeEmployeeFromPump", { employeeEmail, pumpId });

const getDashboardStats = () => client.get("/admin/dashboard-stats", {});

export default {
  getPumpList,
  addPump,
  addEmployeeToPump,
  addManagerToPump,
  removeEmployeeFromPump,
  getProfile,
  getDashboardStats,
};