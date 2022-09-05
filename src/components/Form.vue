<template>
  <div class="formContainer">
    <Title title="请营销顾问来为您介绍" abstract="留下您的联系方式，我们的营销顾问将为您服务" />
    <div class="form">
      <div class="content">
        <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
          <el-form-item label="姓名">
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="4">
              <el-select v-model="form.address" placeholder="区域">
                <el-option label="境内" value="0"></el-option>
                <el-option label="境外" value="1"></el-option>
              </el-select>
            </el-col>
            <el-col :span="20" style="padding-left:10px">
              <el-input v-model="form.company" placeholder="请输入公司名称"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.note"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox-group v-model="form.type">
              <el-checkbox name="type">我已知晓并接受 <el-button type="text" @click="open"><a href="javascript:;" style="color:#3d8af5;text-decoration:underline;">《个人信息收集使用规则》</a></el-button>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item style="text-align: left;">
            <button class="freeUse">预约咨询</button>
          </el-form-item>
        </el-form>
      </div>
      <div class="modified"><img :src="modified" alt="" style="width:100%;"></div>
    </div>
  </div>
</template>

<script>
import Title from './Title.vue'
export default {
  name: 'Form',
  components: { Title },
  data() {
    return {
      labelPosition: 'left',
      form: {
        name: '',
        phone: '',
        address: '',
        company: '',
        note: '',
        type: ''
      },
      agreement: {
        title: '感谢您对本平台的关注，本平台作为您个人信息的收集及使用者，特此发布声明如下，请仔细阅读。',
        paragraph: [
          { title: '信息收集', content: '我们将收集您在本页面内自愿提交的个人信息（包括姓名、手机号码、省份、城市、具体地址），上述信息将仅限用于向你提供推广营销服务之目的，如与您电话沟通等。' },
          { title: '保存期限', content: '存储时间：我们承诺始终按照法律的规定在合理必要期限内在存储您个人信息。超出上述期限后，我们将删除您的个人信息或对您的个人信息进行匿名化处理。' },
          { title: '您的权利', content: '我们将依法响应您作为个人信息主体的权利请求，包括知情权、更正权、删除权和撤回同意权等' }
        ]
      },
      modified:require('../assets/serviceCenter.png')
    }
  },
  methods: {
    open() {
      const h = this.$createElement
      this.$msgbox({
        title: '个人信息收集使用规则',
        // message: h('p', null, [h('span', null, '内容可以是 '), h('i', { style: 'color: teal' }, 'VNode')]),
        message: h('div', { style: 'display:flex;flex-direction: column;' }, [
          h('p', { style: 'text-align: left;font-size:10px;' }, this.agreement.title),
          h('div', { style: 'text-align: left;font-size:10px;display:flex;flex-direction: column;padding:10px; 0' }, [h('p', null, this.agreement.paragraph[0].title), h('p', null, this.agreement.paragraph[0].content)]),
          h('div', { style: 'text-align: left;font-size:10px;display:flex;flex-direction: column;padding:10px; 0' }, [h('p', null, this.agreement.paragraph[1].title), h('p', null, this.agreement.paragraph[1].content)]),
          h('div', { style: 'text-align: left;font-size:10px;display:flex;flex-direction: column;padding:10px; 0' }, [h('p', null, this.agreement.paragraph[2].title), h('p', null, this.agreement.paragraph[2].content)])
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(action => {
        this.$message({
          type: 'success ',
          message: '同意个人信息收集使用规则'
        })
        this.form.type = true
      })
    }
  }
}
</script>

<style scoped>
.formContainer {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
}
.form {
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.form .content,
.form .modified {
  width: 45%;
}

.modified {
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
}
.freeUse{
  background-color: #409eff;
  width: 40%;
  height: 50px;
  font-size: 15px;
  font-weight: 900;
  line-height: 26px;
  border: 2px solid #409eff;
  border-radius: 100px;
  color: #fff;
}
</style>