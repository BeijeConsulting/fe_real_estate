import { javaAcademyServiceInstance } from "../javaAcademyService";
// GET
export const getAllAds = async (token) => {
  let newAdvList = null;
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  const result = await javaAcademyServiceInstance
    .get(`/advertisement`, { headers })
    .then((response) => {
      newAdvList = response.data;
    });
  return newAdvList;
};

export const getAllAdsPaginations = async (token, pageId, total) => {
  let advListPage = null;
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  const result = await javaAcademyServiceInstance
    .get(`/advertisement/pages/${pageId}/${total}`, { headers })
    .then((response) => {
      advListPage = response.data;
    });
  return advListPage;
};

export const getAdv = async (token, id) => {
  let newAdv = null;
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  const result = await javaAcademyServiceInstance
    .get(`/advertisement/${id}`, { headers })
    .then((response) => {
      newAdv = [response.data];
    });
  return newAdv;
};

export const getPendingAdvertaisement = async (token) => {
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  const result = await javaAcademyServiceInstance
    .get(`/checker/pending`, { headers })
    .then((response) => {
      return response.data;
    })
    .catch
    //Error handler
    ();
  return result;
};

export const getRefusedAdvertaisement = async (token) => {
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  const result = await javaAcademyServiceInstance
    .get(`/admin/listRefused`, { headers })
    .then((response) => {
      return response.data;
    })
    .catch(() => { return "errore" });
  return result;
};

export const getAdvBusinessName = async (token, businessName) => {
  let newAdvListForBusiness = null;
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  const result = await javaAcademyServiceInstance
    .get(`/business/advertisements/${businessName}`, { headers })
    .then((response) => {
      newAdvListForBusiness = response.data;
    });
  return newAdvListForBusiness;
};

export const getUserAdvertisements = async (token, userId) => {
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  const result = await javaAcademyServiceInstance
    .get(`/user/myAdvertisements`, { headers })
    .then((response) => {
      return response.data;
    })
    .catch
    //Error handler
    ();
  return result;
};

// POST
export const postAdvState = async (token, id, state) => {
  let updateAdv = null;
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  const result = await javaAcademyServiceInstance
    .post(`checker/${state}/${id}`, {}, { headers })
    .then((response) => {
      updateAdv = response.data;
    });
  return updateAdv;
};

export const searchAdvByParams = async (token, pageNum, pageSize, param) => {
  let searchAdv = null;
  //   let headers = {
  //     Authorization: `Bearer ${token}`,
  //   };
  // { headers }
  const result = await javaAcademyServiceInstance
    .post(`search/${pageNum}/${pageSize}`, param)
    .then((response) => {
      searchAdv = response.data;
    });
  return searchAdv;
};

// PUT
export const disableAdv = async (token, id) => {
  let disableAdv = null;
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  const result = await javaAcademyServiceInstance
    .put(`/admin/disableAdvertisement/${id}`, {}, { headers })
    .then((response) => {
      disableAdv = response.data;
    });
  return disableAdv;
};

export const getAdvertisementsById =  async (token, id) => {
  let advertisementsById = null
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  await javaAcademyServiceInstance.get("/user/ads/id/" + id, {headers}).then( response => {
    advertisementsById = response.data
  }
  ).catch(

  )
  return advertisementsById
}