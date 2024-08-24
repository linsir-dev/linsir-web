<template>
  <div class="app-container">
    <el-row :gutter="5">
      <el-col :span="6">
        <el-card>
          <template #header>
            <div style="width: 100%; height: 30px">
              <div style="float: left; margin-right: 10px">
                <el-avatar
                  :size="30"
                  src="http://ygde.oss-cn-zhangjiakou.aliyuncs.com/l/linsir.png"
                />
              </div>
              <div style="float: left">
                编码:
                <span>
                  <el-link>ZHBM-1573173536510578688</el-link>
                </span>
              </div>
              <div style="float: right">
                <span style="color: #67c23a">激活</span>
              </div>
            </div>
            <div style="width: 100">
              <el-link>宜昌公交集团有限责任公司</el-link>
            </div>
          </template>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Base</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="100"
                  status="success"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Web</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="60"
                  status="warning"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Business</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="30"
                  status="exception"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%; margin-top: 30px">
            <el-row :gutter="0">
              <el-col :span="12">
                <div style="text-align: center">
                  <el-icon><Menu /></el-icon>
                  <span>应用</span>
                </div>
                <div style="text-align: center">
                  <span
                    style="font-size: 25px; color: #67c23a; font-weight: bold"
                  >
                    5
                  </span>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="text-align: center">
                  <el-icon><MoreFilled /></el-icon>
                  <span>实例</span>
                </div>
                <div style="text-align: center">
                  <span
                    style="font-size: 25px; color: #67c23a; font-weight: bold"
                  >
                    10
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <template #header>
            <div style="width: 100%; height: 30px">
              <div style="float: left; margin-right: 10px">
                <el-avatar
                  :size="30"
                  src="http://ygde.oss-cn-zhangjiakou.aliyuncs.com/l/linsir.png"
                />
              </div>
              <div style="float: left">
                编码:
                <span>
                  <el-link>ZHBM-1573174504069402624</el-link>
                </span>
              </div>
              <div style="float: right">
                <span style="color: #67c23a">激活</span>
              </div>
            </div>
            <div style="width: 100">
              <el-link>武汉市公共交通集团有限责任公司</el-link>
            </div>
          </template>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Base</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="100"
                  status="success"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Web</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="40"
                  status="warning"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Business</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="30"
                  status="exception"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%; margin-top: 30px">
            <el-row :gutter="0">
              <el-col :span="12">
                <div style="text-align: center">
                  <el-icon><Menu /></el-icon>
                  <span>应用</span>
                </div>
                <div style="text-align: center">
                  <span
                    style="font-size: 25px; color: #67c23a; font-weight: bold"
                  >
                    5
                  </span>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="text-align: center">
                  <el-icon><MoreFilled /></el-icon>
                  <span>实例</span>
                </div>
                <div style="text-align: center">
                  <span
                    style="font-size: 25px; color: #67c23a; font-weight: bold"
                  >
                    10
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <template #header>
            <div style="width: 100%; height: 30px">
              <div style="float: left; margin-right: 10px">
                <el-avatar
                  :size="30"
                  src="http://ygde.oss-cn-zhangjiakou.aliyuncs.com/l/linsir.png"
                />
              </div>
              <div style="float: left">
                编码:
                <span>
                  <el-link>ZHBM-1574246958711836672</el-link>
                </span>
              </div>
              <div style="float: right">
                <span style="color: #67c23a">激活</span>
              </div>
            </div>
            <div style="width: 100">
              <el-link>九州通医药集团股份有限公司</el-link>
            </div>
          </template>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Base</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="100"
                  status="success"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Web</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="30"
                  status="warning"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Business</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="0"
                  status="exception"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%; margin-top: 30px">
            <el-row :gutter="0">
              <el-col :span="12">
                <div style="text-align: center">
                  <el-icon><Menu /></el-icon>
                  <span>应用</span>
                </div>
                <div style="text-align: center">
                  <span
                    style="font-size: 25px; color: #67c23a; font-weight: bold"
                  >
                    10
                  </span>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="text-align: center">
                  <el-icon><MoreFilled /></el-icon>
                  <span>实例</span>
                </div>
                <div style="text-align: center">
                  <span
                    style="font-size: 25px; color: #67c23a; font-weight: bold"
                  >
                    30
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <template #header>
            <div style="width: 100%; height: 30px">
              <div style="float: left; margin-right: 10px">
                <el-avatar
                  :size="30"
                  src="http://ygde.oss-cn-zhangjiakou.aliyuncs.com/l/linsir.png"
                />
              </div>
              <div style="float: left">
                编码:
                <span>
                  <el-link>ZHBM-1574247977608941568</el-link>
                </span>
              </div>
              <div style="float: right">
                <span style="color: #67c23a">激活</span>
              </div>
            </div>
            <div style="width: 100">
              <el-link>中南建筑设计院股份有限公司</el-link>
            </div>
          </template>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Base</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="100"
                  status="success"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Web</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="60"
                  status="warning"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Business</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="30"
                  status="exception"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%; margin-top: 30px">
            <el-row :gutter="0">
              <el-col :span="12">
                <div style="text-align: center">
                  <el-icon><Menu /></el-icon>
                  <span>应用</span>
                </div>
                <div style="text-align: center">
                  <span
                    style="font-size: 25px; color: #67c23a; font-weight: bold"
                  >
                    5
                  </span>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="text-align: center">
                  <el-icon><MoreFilled /></el-icon>
                  <span>实例</span>
                </div>
                <div style="text-align: center">
                  <span
                    style="font-size: 25px; color: #67c23a; font-weight: bold"
                  >
                    10
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <template #header>
            <div style="width: 100%; height: 30px">
              <div style="float: left; margin-right: 10px">
                <el-avatar
                  :size="30"
                  src="http://ygde.oss-cn-zhangjiakou.aliyuncs.com/l/linsir.png"
                />
              </div>
              <div style="float: left">
                编码:
                <span>
                  <el-link>ZHBM-1576028242157113344</el-link>
                </span>
              </div>
              <div style="float: right">
                <span style="color: #67c23a">激活</span>
              </div>
            </div>
            <div style="width: 100">
              <el-link>上海市消防救援总队</el-link>
            </div>
          </template>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Base</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="90"
                  status="success"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Web</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="50"
                  status="warning"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="6">Business</el-col>
              <el-col :span="18">
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="30"
                  status="exception"
                />
              </el-col>
            </el-row>
          </div>
          <div style="width: 100%; margin-top: 30px">
            <el-row :gutter="0">
              <el-col :span="12">
                <div style="text-align: center">
                  <el-icon><Menu /></el-icon>
                  <span>应用</span>
                </div>
                <div style="text-align: center">
                  <span
                    style="font-size: 25px; color: #67c23a; font-weight: bold"
                  >
                    5
                  </span>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="text-align: center">
                  <el-icon><MoreFilled /></el-icon>
                  <span>实例</span>
                </div>
                <div style="text-align: center">
                  <span
                    style="font-size: 25px; color: #67c23a; font-weight: bold"
                  >
                    15
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import UserAPI from "@/api/user";
import DeptAPI from "@/api/dept";
import RoleAPI from "@/api/role";
import type { IObject, IOperatData } from "@/components/CURD/types";
import usePage from "@/components/CURD/usePage";
import addModalConfig from "./config/add";
import contentConfig from "./config/content";
import contentConfig2 from "./config/content2";
import editModalConfig from "./config/edit";
import searchConfig from "./config/search";

const {
  searchRef,
  contentRef,
  addModalRef,
  editModalRef,
  handleQueryClick,
  handleResetClick,
  // handleAddClick,
  // handleEditClick,
  handleSubmitClick,
  handleExportClick,
  handleSearchClick,
  handleFilterChange,
} = usePage();

// 新增
async function handleAddClick() {
  addModalRef.value?.setModalVisible();
  // 加载部门下拉数据源
  addModalConfig.formItems[2]!.attrs!.data = await DeptAPI.getOptions();
  // 加载角色下拉数据源
  addModalConfig.formItems[4]!.options = await RoleAPI.getOptions();
}
// 编辑
async function handleEditClick(row: IObject) {
  editModalRef.value?.setModalVisible();
  // 加载部门下拉数据源
  editModalConfig.formItems[2]!.attrs!.data = await DeptAPI.getOptions();
  // 加载角色下拉数据源
  editModalConfig.formItems[4]!.options = await RoleAPI.getOptions();
  // 根据id获取数据进行填充
  const data = await UserAPI.getFormData(row.id);
  editModalRef.value?.setFormData(data);
}
// 其他工具栏
function handleToolbarClick(name: string) {
  console.log(name);
  if (name === "custom1") {
    ElMessage.success("点击了自定义1按钮");
  }
}
// 其他操作列
function handleOperatClick(data: IOperatData) {
  console.log(data);
  // 重置密码
  if (data.name === "reset_pwd") {
    ElMessageBox.prompt(
      "请输入用户「" + data.row.username + "」的新密码",
      "重置密码",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }
    ).then(({ value }) => {
      if (!value || value.length < 6) {
        ElMessage.warning("密码至少需要6位字符，请重新输入");
        return false;
      }
      UserAPI.updatePassword(data.row.id, value).then(() => {
        ElMessage.success("密码重置成功，新密码是：" + value);
      });
    });
  }
}

// 切换示例
const isA = ref(true);
</script>

<style scoped>
.el-row {
  .el-col {
    margin-top: 10px;
  }
}
</style>
