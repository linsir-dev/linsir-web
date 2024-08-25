import request from "@/utils/request";

const Tenant_BASE_URL = "linsir-saas-server/v1/sysTenant/";

class TenantAPI {
  /**
   * 获取列表
   *
   */
  static list(queryParams: TenantPageQuery) {
    return request<any, PageResult<TenantVO[]>>({
      url: `${Tenant_BASE_URL}listPage`,
      method: "post",
      params: queryParams,
    });
  }
}

export default TenantAPI;

export interface TenantVO {
  /** 用户ID */
  id?: string;
  /** name */
  name?: string;
}

export interface TenantPageQuery extends PageQuery {
  /** 搜索关键字 */
  keywords?: string;
}
