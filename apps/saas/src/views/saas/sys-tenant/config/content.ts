import UserAPI from "@/api/user";
import RoleAPI from "@/api/role";
import TenantAPI from "@/api/sysTenant";
import type { UserPageQuery } from "@/api/user";
import type { TenantPageQuery } from "@/api/sysTenant";
import type { IContentConfig } from "@/components/CURD/types";

const contentConfig: IContentConfig<TenantPageQuery> = {
  pageName: "sys:tenant",
  table: {
    border: true,
    highlightCurrentRow: true,
  },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 20,
    pageSizes: [10, 20, 30, 50],
  },
  indexAction: function (params) {
    return TenantAPI.list(params);
  },
  deleteAction: UserAPI.deleteByIds,
  importAction(file) {
    return UserAPI.import(1, file);
  },
  exportAction: UserAPI.export,
  importTemplate: UserAPI.downloadTemplate,
  importsAction(data) {
    // 模拟导入数据
    console.log("importsAction", data);
    return Promise.resolve();
  },
  exportsAction: async function (params) {
    // 模拟获取到的是全量数据
    const res = await UserAPI.getPage(params);
    console.log("exportsAction", res.list);
    return res.list;
  },
  pk: "id",
  toolbar: [
    "add",
    "delete",
    "import",
    "export",
    {
      name: "custom1",
      icon: "plus",
      text: "自定义1",
      auth: "import",
      type: "info",
    },
  ],
  defaultToolbar: ["refresh", "filter", "imports", "exports", "search"],
  cols: [
    { type: "selection", width: 50, align: "center" },
    {
      label: "id",
      align: "center",
      prop: "id",
      width: 100,
      show: false,
    },
    { label: "租户编码", align: "center", prop: "tenantCode", width: 250 },
    { label: "租户", align: "center", prop: "name", width: 300 },
    { label: "联系方式", align: "center", prop: "tel", width: 120 },
    { label: "电话", align: "center", prop: "phone", width: 100 },
    { label: "传真", align: "center", prop: "fax", width: 120 },
    {
      label: "地址",
      align: "center",
      prop: "address",
      width: 250,
    },
    { label: "过期时间", align: "center", prop: "timeExpiration", width: 180 },
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 220,
      templet: "tool",
      operat: [
        {
          name: "reset_pwd",
          auth: "password:reset",
          icon: "refresh-left",
          text: "设置",
        },
        {
          name: "name1",
          auth: "a",
          text: "配置网站",
        },
        {
          name: "name1",
          auth: "a",
          text: "配置商务",
        },
        "edit",
        "delete",
      ],
    },
  ],
};

export default contentConfig;
