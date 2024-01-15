import { deleteRequest, getRequest, postRequest } from '../apiHelper';

//POST REQUEST
export const updatePassword = postRequest('api/admin/changepassword', 'changepassword');
export const signinUser = postRequest('api/admin/signin/', 'signin');
export const userLogout = postRequest('api/admin/signout/', 'signout');
export const addFished = postRequest('api/admin/addFishEd/', 'addFishEd');
export const addEvent = postRequest('api/admin/addEvent/', 'addEvent');
export const editEvent = postRequest('api/admin/editEvent/', 'editEvent');
export const addPointTable = postRequest('api/admin/addPointTable/', 'addPointTable');
export const editPoints = postRequest('api/admin/editPoints/', 'editPoints');
export const addLake = postRequest('api/admin/addLake/', 'addLake');
export const editLake = postRequest('api/admin/editLake/', 'editLake');
export const updateTcpp = postRequest('api/admin/TcPp/', 'content');

//GET REQUEST
export const dashboard = getRequest('api/admin/dashboard/', 'dashboard');
export const getFished = getRequest('api/admin/getFished/', 'getFished');
export const recentLakes = getRequest('api/admin/recentLakes/', 'recentLakes');
export const getAllUsers = getRequest('api/admin/getAllUsers/', 'getAllUsers');
export const getEvents = getRequest('api/admin/getEvents/', 'getEvents');
export const getSpeciePoints = getRequest('api/admin/getSpeciePoints/', 'getSpeciePoints');
export const getAllLakes = getRequest('api/admin/getLakes/', 'getLakes');
export const blockUnblock = getRequest('api/admin/blockUnblock/', 'blockUnblock');
export const TcPp = getRequest('api/getTcPp/', 'getTcPp');

//DELETE REQUEST
export const deleteFished = deleteRequest('api/admin/deleteFished/', 'deleteFished');
export const deleteEvent = deleteRequest('api/admin/deleteEvent/', 'deleteEvent');
export const deletePoints = deleteRequest('api/admin/deletePoints/', 'deletePoints');
export const deleteLake = deleteRequest('api/admin/deleteLake/', 'deleteLake');
export const deleteAccount = deleteRequest('api/admin/deleteAccount/', 'deleteAccount');

